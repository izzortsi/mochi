Proof The discontinuity set of a continuous function is empty, and is therefore a zero set. The discontinuity set of a piecewise continuous function is finite, and is therefore also a zero set. A continuous function defined on a compact interval $[a, b]$ is bounded. The piecewise continuous function was assumed to be bounded. By the Riemann-Lebesgue Theorem, both these functions are Riemann integrable.

25 Corollary The characteristic function of $S \subset [a, b]$ is Riemann integrable if and only if the boundary of $S$ is a zero set.

Proof $\partial S$ is the discontinuity set of $\chi_S$. See also Exercise 5.44

26 Corollary Every monotone function is Riemann integrable.

Proof The set of discontinuities of a monotone function $f : [a, b] \to \mathbb{R}$ is countable and therefore is a zero set. (See Exercise 1.31.) Since $f$ is monotone, its values lie in the interval between $f(a)$ and $f(b)$, so $f$ is bounded. By the Riemann-Lebesgue Theorem, $f$ is Riemann integrable.

27 Corollary The product of Riemann integrable functions is Riemann integrable.

Proof Let $f, g \in \mathbb{R}$ be given. They are bounded and their product is bounded. By the Riemann-Lebesgue Theorem their discontinuity sets, $D(f)$ and $D(g)$, are zero sets, and $D(f) \cup D(g)$ contains the discontinuity set of the product $f \cdot g$. Since the union of two zero sets is a zero set, the Riemann-Lebesgue Theorem implies that $f \cdot g$ is Riemann integrable.

28 Corollary If $f : [a, b] \to [c, d]$ is Riemann integrable and $\phi : [c, d] \to \mathbb{R}$ is continuous, then the composite $\phi \circ f$ is Riemann integrable.

Proof The discontinuity set of $\phi \circ f$ is contained in the discontinuity set of $f$, and therefore is a zero set. Since $\phi$ is continuous and $[c, d]$ is compact, $\phi \circ f$ is bounded. By the Riemann-Lebesgue Theorem, $\phi \circ f$ is Riemann integrable.

29 Corollary If $f \in \mathbb{R}$ then $|f| \in \mathbb{R}$.

Proof The function $\phi : y \mapsto |y|$ is continuous, so $x \mapsto |f(x)|$ is Riemann integrable according to Corollary 28.

30 Corollary If $a < c < b$ and $f : [a, b] \to \mathbb{R}$ is Riemann integrable then its restrictions to $[a, c]$ and $[c, b]$ are Riemann integrable and

$$\int_a^b f(x) \, dx = \int_a^c f(x) \, dx + \int_c^b f(x) \, dx.$$