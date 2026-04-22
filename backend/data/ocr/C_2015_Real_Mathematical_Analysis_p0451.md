Appendix A  Lebesgue integrals as limits

The Riemann integral is the limit of Riemann sums. There are analogous “Lebesgue sums” of which the Lebesgue integral is the limit.

Let $f : \mathbb{R} \to [0, \infty)$ be given, take a partition $Y : 0 = y_0 < y_1 < y_2 < \ldots$ on the $y$-axis, and set

$$X_i = \{x \in \mathbb{R} : y_{i-1} \leq f(x) < y_i\}.$$

(We require that $y_i \to \infty$ as $i \to \infty$.) If $f$ is measurable we define the lower Lebesgue sum as

$$L(f, Y) = \sum_{i=1}^{\infty} y_{i-1} \cdot mX_i.$$

$L$ represents the measure of “Lebesgue rectangles” $X_i \times [0, y_{i-1})$ in the undergraph. If $f$ is measurable$^\dagger$ then $L \uparrow \int f$ as the $Y$-mesh tends to 0. It is natural to define the upper Lebesgue sum as $\sum y_i \cdot m(X_i)$ and to expect that it converges down to $\int f$ as the $Y$-mesh tends to 0. If $m(\{x : fx > 0\}) < \infty$ then this is true. However, if $f(x)$ is a function like $e^{-x^2}$ then there’s a problem. The first term in the upper Lebesgue sum is always $\infty$ even though the integral is finite. The simplest solution is to split the domain into cubes $Q$, work on each separately, and add the results. Then

$$L(f_Q, Y) \leq \int_Q f_Q \leq U(f_Q, Y),$$

where $L(f_Q, Y) = \sum_{i=1}^{\infty} y_{i-1} \cdot m(X_i \cap Q)$, $U(f_Q, Y) = \sum_{i=1}^{\infty} y_i \cdot m(X_i \cap Q)$, and $f_Q$ is the restriction of $f$ to $Q$. As the $Y$-mesh tends to 0 the lower and upper Lebesgue sums converge to the integral, just as in the Riemann case.

Upshot Lebesgue sums are like Riemann sums and Lebesgue integration is like Riemann integration, except that Lebesgue partitions the value axis and takes limits while Riemann does the same on the domain axis.

Appendix B  Nonmeasurable sets

If $t \in \mathbb{R}$ is fixed then $t$-translation is the mapping $x \mapsto x + t$. It is a homeomorphism $\mathbb{R} \to \mathbb{R}$. Think of the circle $S^1$ as $\mathbb{R}$ modulo $\mathbb{Z}$. That is, you identify any $x$ with $x + n$ for $n \in \mathbb{Z}$. Equivalently, you take the unit interval $[0, 1]$ and you identify 1

$^\dagger$We are using the undergraph definition of measurability. Corollary 41 implies that the sets $X_i$ are measurable so the lower Lebesgue sum makes sense.