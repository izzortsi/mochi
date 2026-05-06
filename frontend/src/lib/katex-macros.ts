/* Custom KaTeX macros — used by both inline (MathText) and markdown
 * (MarkdownContent via rehype-katex) renderers. Anything we add here
 * the model and the user can both reference, and they render
 * consistently across the app.
 *
 * Polyfills for LaTeX commands KaTeX doesn't ship but the model
 * frequently emits.
 */
export const KATEX_MACROS: Record<string, string> = {
  // \displaylines{a\\b\\c} → multi-line display, each line centered.
  // KaTeX has no native equivalent; gathered is the closest fit.
  "\\displaylines": "\\begin{gathered}#1\\end{gathered}",
};
