We fix an arbitrary $a$ and ask: Are the slices $(\mathcal{U}f)^a$ and $(\widehat{\mathcal{U}}f)^a$ measurable? Cavalieri’s Principle implies that almost every horizontal slice of a measurable undergraph is measurable. Thus, there exist $y_n \downarrow a$ such that $(\mathcal{U}f)^{y_n}$ is measurable. By monotonicity, $(\mathcal{U}f)^a = \bigcup_n (\mathcal{U}f)^{y_n}$ gives measurability of $(\mathcal{U}f)^a$. Similarly for the completed undergraph.

41 Corollary Undergraph measurability is equivalent to the more common definition using preimages.

Proof We say that $f : \mathbb{R} \rightarrow [0, \infty)$ is preimage measurable if for each $a \in [0, \infty)$ the preimage $f^{\text{pre}}[a, \infty] = \{x : fx \geq a\}$ is a measurable subset of the line. (See also Appendix A.) Since

$$f^{\text{pre}}[a, \infty] = \{x : a \leq fx\} = (\widehat{\mathcal{U}}f)^a$$

by Corollary 40, we see that undergraph measurability implies preimage measurability. The converse follows from the equation

$$\mathcal{U}f = \bigcup_{0 \leq a \in \mathbb{Q}} f^{\text{pre}}[a, \infty] \times [0, a).$$

As a consequence of Cavalieri’s Principle in 3-space we get the integral theorems of Fubini and Tonelli. It is standard practice to refer to the integral of a function $f$ on $\mathbb{R}^2$ as a double integral and to write it as

$$\int f = \iiint f(x, y) \, dxdy.$$

It is also standard to write the iterated integral as

$$\int \left[ \int f_x(y) \, dy \right] dx = \int \left[ \int f(x, y) \, dy \right] dx.$$

42 Fubini-Tonelli Theorem If $f : \mathbb{R}^2 \rightarrow [0, \infty)$ is measurable then almost every slice $f_x(y)$ is a measurable function of $y$, the function $x \mapsto \int f_x(y) \, dy$ is measurable, and the double integral equals the iterated integral,

$$\iiint f(x, y) \, dxdy = \int \left[ \int f(x, y) \, dy \right] dx.$$

Proof The result follows from the simple observation that the slice of the undergraph is the undergraph of the slice,

(5) $(\mathcal{U}f)_x = \mathcal{U}f_x$.