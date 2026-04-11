# PDF Upload — Design Spec

**Date:** 2026-04-11
**Status:** Approved for implementation
**Builds on:** `2026-04-11-add-material-design.md` (import wizard)

## 1. Overview

Users currently cannot upload PDFs from the browser. The `backend/pdfs/` directory is populated by manual `cp` on the server, and the wizard's file picker only lists what's already there. This spec adds a browser-side upload path.

### Goals

- A file-picker button in the import wizard step 1 that lets the user pick a local PDF and uploads it to `backend/pdfs/`.
- After upload, the new file is automatically selected in the dropdown.
- Surface errors clearly at every stage (upload failure, parse failure, LLM non-JSON response).

### Non-goals

- Multi-file upload.
- Drag-and-drop UI.
- Progress bar (localhost is fast enough).
- Cleanup / delete endpoint.
- Authentication / per-user directories.

## 2. Backend endpoint

**New:** `POST /api/pdfs/upload`

- Query param: `name` — the filename. URL-encoded.
- Body: raw binary bytes of the file.
- Content-Type: `application/octet-stream` (not enforced, but documented).
- Response on success: HTTP 200, JSON `{"files": "<sanitized filename>"}`.
- Response on failure: HTTP 400 with `{"error": "<reason>"}`.

### Filename sanitization

- Reject names containing `/`, `\`, `..`, or the null byte.
- Strip leading whitespace.
- Collapse runs of whitespace to a single `_`.
- Reject names that don't end in `.pdf` (case-insensitive).
- Reject empty names.
- The sanitized name is what gets returned to the client AND used as the on-disk filename.

### Behavior

- If a file with the sanitized name already exists, overwrite it. No versioning, no rename. Acceptable for a single-user local app.
- Bytes are written in one pass via `with-open-file` + `write-sequence`.
- Size: no explicit limit. Hunchentoot has its own default body cap (~1MB typically); needs to be raised for PDF uploads (8MB Steinbruch file).

### Implementation

```lisp
(defvar *max-upload-bytes* (* 32 1024 1024))  ; 32 MB ceiling

(defun sanitize-upload-name (raw)
  "Return a sanitized filename, or NIL if rejected."
  (when (and raw (> (length raw) 0))
    (let ((stripped (string-trim '(#\Space #\Tab #\Newline) raw)))
      (cond
        ((search "/" stripped) nil)
        ((search "\\" stripped) nil)
        ((search ".." stripped) nil)
        ((find #\Null stripped) nil)
        ((not (and (>= (length stripped) 4)
                   (string-equal ".pdf"
                                 (subseq stripped (- (length stripped) 4)))))
         nil)
        (t (substitute #\_ #\Space stripped))))))

(defun handle-post-pdf-upload ()
  (study-plan.api:with-options ()
    (let* ((raw-name (hunchentoot:get-parameter "name"))
           (clean-name (sanitize-upload-name raw-name))
           (bytes (hunchentoot:raw-post-data :force-binary t)))
      (cond
        ((null clean-name)
         (setf (hunchentoot:return-code*) 400)
         (study-plan.api:json-alist-response
          `((:error . "invalid or missing name (must be *.pdf with no path chars)"))))
        ((or (null bytes) (zerop (length bytes)))
         (setf (hunchentoot:return-code*) 400)
         (study-plan.api:json-alist-response
          `((:error . "empty body"))))
        ((> (length bytes) *max-upload-bytes*)
         (setf (hunchentoot:return-code*) 413)
         (study-plan.api:json-alist-response
          `((:error . "file too large"))))
        (t
         (ensure-directories-exist *pdfs-dir*)
         (let ((path (merge-pathnames clean-name (pathname *pdfs-dir*))))
           (with-open-file (out path
                                :direction :output
                                :element-type '(unsigned-byte 8)
                                :if-exists :supersede
                                :if-does-not-exist :create)
             (write-sequence bytes out))
           (study-plan.api:json-alist-response
            `((:files . ,clean-name)))))))))
```

Note on hunchentoot max body size: the default `*default-request-max-body-size*` in some hunchentoot versions is unlimited, in others it's capped. For safety, set it explicitly in `server.lisp`:

```lisp
(setf hunchentoot:*default-request-max-body-size* (* 64 1024 1024))  ; 64 MB
```

Register the new route in `register-import-routes`:

```lisp
(defun register-import-routes ()
  (list
   (hunchentoot:create-regex-dispatcher "^/api/pdfs$" 'handle-get-pdfs-list)
   (hunchentoot:create-regex-dispatcher "^/api/pdfs/upload$" 'handle-post-pdf-upload)
   (hunchentoot:create-regex-dispatcher "^/api/pdfs/.+" 'handle-get-pdf-file)
   (hunchentoot:create-regex-dispatcher "^/api/import/parse$" 'handle-post-import-parse)))
```

The order matters: `/api/pdfs/upload$` must come BEFORE `/api/pdfs/.+` or the generic file-serving handler will eat it. (Regex dispatchers are tried in order.)

## 3. Frontend client helper

**New:** `ontology.uploadPdf(file: File)` in `frontend/src/lib/ontology.ts`.

```ts
uploadPdf: async (file: File): Promise<{ filename: string }> => {
  const buf = await file.arrayBuffer();
  const res = await fetch(`/api/pdfs/upload?name=${encodeURIComponent(file.name)}`, {
    method: "POST",
    headers: { "Content-Type": "application/octet-stream" },
    body: buf,
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`upload ${file.name}: ${res.status} ${body}`);
  }
  const json = await res.json() as { files: string };
  return { filename: json.files };
},
```

(The backend returns `{"files": "foo.pdf"}` — intentionally a single string, not an array, so the response shape is distinct from the list endpoint which returns `{"files": ["a.pdf", "b.pdf"]}`. Client unwraps to `{filename}`.)

## 4. Frontend wizard UI

In `ImportWizard.tsx`, in step 1, below the existing "Source file" dropdown, add:

```tsx
<div>
  <span className="text-sm opacity-70">Or upload a new PDF</span>
  <div className="mt-1 flex items-center gap-2">
    <input
      type="file"
      accept="application/pdf"
      onChange={handleUpload}
      disabled={uploading}
      className="text-sm file:mr-2 file:px-2 file:py-1 file:rounded file:border file:border-[#2a2a3f] file:bg-[#1a1a2a] file:text-[#f5f0e8] hover:file:bg-[#2a2a3f] file:cursor-pointer"
    />
    {uploading && <span className="text-xs opacity-60">uploading…</span>}
  </div>
</div>
```

State additions:
```tsx
const [uploading, setUploading] = useState(false);
```

Handler:
```tsx
const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (!file) return;
  setUploading(true);
  setError(null);
  try {
    const { filename } = await ontology.uploadPdf(file);
    const list = await ontology.listPdfs();
    setFiles(list?.files ?? []);
    setFilename(filename);  // auto-select
  } catch (err) {
    setError(String(err));
  } finally {
    setUploading(false);
    if (e.target) e.target.value = "";  // allow re-uploading the same file
  }
};
```

## 5. Error surfacing improvements

The existing `parse()` function swallows a few failure modes. Upgrade it:

1. If the LLM response is non-JSON, surface the first 300 chars of `content` in the error:

   ```ts
   try {
     const p = JSON.parse(clean) as ParsedCourse;
     // ...
   } catch (parseErr) {
     throw new Error(
       `LLM returned non-JSON response:\n${content.slice(0, 300)}`
     );
   }
   ```

2. If `/api/import/parse` returns non-2xx, surface the response body:

   ```ts
   if (!res.ok) {
     const body = await res.text();
     throw new Error(`parse: ${res.status} ${body.slice(0, 300)}`);
   }
   ```

3. Add an elapsed timer to the parsing step so the user can tell it's not frozen:

   ```tsx
   {step === "parsing" && (
     <div className="opacity-60">
       extracting pdf text + calling llm… ({parseElapsed}s)
     </div>
   )}
   ```

   With a `useEffect` that increments `parseElapsed` every second while `step === "parsing"`.

## 6. Files changed

```
backend/import-api.lisp                    new handle-post-pdf-upload + route registration
backend/server.lisp                        raise *default-request-max-body-size*
frontend/src/lib/ontology.ts                new uploadPdf client helper
frontend/src/components/ImportWizard.tsx   file input, handleUpload, parseElapsed timer,
                                            improved error surfacing in parse()
```

No new tests (manual).

## 7. Out of scope

- Multi-file upload
- Drag-and-drop
- Upload progress bar
- Delete or replace endpoint
- Authentication
- Server-side virus scan or content-type sniffing beyond the `.pdf` extension check
