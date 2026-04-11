// Uses pdfjs-dist to extract text from a PDF arraybuffer.
// Worker loaded from a CDN to avoid Next.js bundler fiddling.

import * as pdfjs from "pdfjs-dist/legacy/build/pdf.mjs";

if (typeof window !== "undefined") {
  pdfjs.GlobalWorkerOptions.workerSrc =
    "https://cdn.jsdelivr.net/npm/pdfjs-dist@4/legacy/build/pdf.worker.min.mjs";
}

export async function extractPdfText(bytes: ArrayBuffer): Promise<string> {
  const loadingTask = pdfjs.getDocument({ data: bytes });
  const pdf = await loadingTask.promise;
  const parts: string[] = [];
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    const text = content.items.map((it: unknown) => {
      const item = it as { str?: string };
      return item.str ?? "";
    }).join(" ");
    parts.push(text);
  }
  return parts.join("\n\n");
}

export async function fetchPdfText(filename: string): Promise<string> {
  const res = await fetch(`/api/pdfs/${encodeURIComponent(filename)}`);
  if (!res.ok) throw new Error(`/api/pdfs/${filename}: ${res.status}`);
  const bytes = await res.arrayBuffer();
  return extractPdfText(bytes);
}
