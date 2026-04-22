Proof Differentiability implies continuity implies integrability, so $f, g \in \mathbb{R}$. Since the product of Riemann integrable functions is Riemann integrable, $f'g$ and $fg'$ are Riemann integrable. By the Leibniz Rule, $(fg)'(x) = f(x)g'(x) + f'(x)g(x)$ everywhere. That is, $fg$ is an antiderivative of $f'g + fg'$. The Antiderivative Theorem states that $fg$ differs from the indefinite integral of $f'g + fg'$ by a constant. That is, for all $t \in [a, b]$ we have

$$f(t)g(t) - f(a)g(a) = \int_a^t f'(x)g(x) + f(x)g'(x) \, dx$$
$$= \int_a^t f'(x)g(x) \, dx + \int_a^t f(x)g'(x) \, dx.$$

Setting $t = b$ gives the result.

Improper Integrals

Assume that $f : [a, b) \to \mathbb{R}$ is Riemann integrable when restricted to any closed subinterval $[a, c] \subset [a, b)$. You may imagine that $f(x)$ has some unpleasant behavior as $x \to b$, such as $\limsup_{x \to b} |f(x)| = \infty$ and/or $b = \infty$. See Figure 83.

Figure 83 The improper integral converges if and only if the total undergraph area is finite.