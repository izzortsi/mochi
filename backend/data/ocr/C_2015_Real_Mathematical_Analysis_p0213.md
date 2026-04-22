(c) Why are

$$F_{\ell mn} = \{x \in [a, b] : a_\ell + \frac{1}{m} \leq f_n(x) \leq b_\ell - \frac{1}{m}\}$$

$$E_{\ell mN} = \bigcap_{n \geq N} F_{\ell mn}$$

closed?

(d) Show that

$$H_\ell = \bigcup_{m,N \in \mathbb{N}} E_{\ell mN}.$$

(e) Use (a) and Baire’s Theorem (page 243) to deduce that some $E_{\ell mN}$ contains a subinterval of $(\alpha, \beta)$.

(f) Why does (e) contradict (b) and complete the proof that $D_k$ is nowhere dense?

24. Combine Exercises 19, 23, and Baire’s Theorem to show that a Baire class 1 function has a dense set of continuity points.

25. Suppose that $g : [a, b] \to \mathbb{R}$ is differentiable.

(a) Prove that $g'$ is of Baire class 1. [Hint: Extend $g$ to a differentiable function defined on a larger interval and consider

$$f_n(x) = \frac{g(x + 1/n) - g(x)}{1/n}$$

for $x \in [a, b]$. Is $f_n(x)$ continuous? Does $f_n(x)$ converge pointwise to $g'(x)$ as $n \to \infty$?]

(b) Infer from Exercise 24 that a derivative cannot be everywhere discontinuous. It must be continuous on a dense subset of its domain of definition.

26. Redefine Riemann and Darboux integrability using dyadic partitions.

(a) Prove that the integrals are unaffected.

(b) Infer that Riemann’s integrability criterion can be restated in terms of dyadic partitions.

(c) Repeat the analysis using only partitions of $[a, b]$ into subintervals of length $(b - a)/n$.

27. In many calculus books, the definition of the integral is given as

$$\int_a^b f(x) \, dx = \lim_{n \to \infty} \sum_{k=1}^n f(x_k^*) \frac{b - a}{n}$$

where $x_k^*$ is the midpoint of the $k$th interval of $[a, b]$ having length $(b - a)/n$, namely

$$[a + (k - 1)(b - a)/n, a + k(b - a)/n].$$

See Stewart’s *Calculus with Early Transcendentals*, for example.