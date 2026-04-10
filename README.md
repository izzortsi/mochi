# study-plan

A full-stack interactive study tracker for a 7-day linear algebra / ODE review plan.

## Stack

- **Backend:** Common Lisp (Hunchentoot REST + hunchensocket WS + cl-prevalence)
- **Frontend:** Next.js 14 (App Router) + TailwindCSS + KaTeX + Framer Motion
- **LLM:** z.ai / GLM (browser-side, API key in localStorage)

See `docs/specs/2026-04-10-study-plan-design.md` for the full design.

## Running

Prerequisites: SBCL, Quicklisp, Node.js 18+.

```bash
./start.sh
```

Opens on http://localhost:3000. Backend on :4000.

## Manual

```bash
# Backend
cd backend && sbcl --load run.lisp

# Frontend
cd frontend && npm install && npm run dev
```
