strictly increases for any pair of points at distance $> 1/3^k$ apart, and this fact is preserved when we take sums, $J$ strictly increases. The proof that $J'(x) = 0$ almost everywhere requires deeper theory. See Exercise 48 on page 456.

Next, we justify two common methods of integration.

**38 Integration by Substitution** If $f \in \mathbb{R}$ and $g : [c, d] \to [a, b]$ is a continuously differentiable bijection with $g' > 0$ (g is a $C^1$ diffeomorphism) then

$$\int_a^b f(y) dy = \int_c^d f(g(x))g'(x) dx.$$

**Proof** The first integral exists by assumption. By Corollary 33 the composite $f \circ g$ is Riemann integrable. Since $g'$ is continuous, the second integral exists by Corollary 27. To show that the two integrals are equal we resort again to Riemann sums. Let $P$ partition the interval $[c, d]$ as

$$c = x_0 < x_1 < \dots < x_n = d$$

and choose $t_k \in [x_{k-1}, x_k]$ such that

$$g(x_k) - g(x_{k-1}) = g'(t_k) \Delta x_k.$$

The Mean Value Theorem ensures that such a $t_k$ exists. Since $g$ is a diffeomorphism we have a partition $Q$ of the interval $[a, b]$

$$a = y_0 < y_1 < \dots < y_n = b$$

where $y_k = g(x_k)$, and mesh $P \to 0$ implies that mesh $Q \to 0$. Set $s_k = g(t_k)$. This gives two equal Riemann sums

$$\sum_{k=1}^n f(s_k) \Delta y_k = \sum_{k=1}^n f(g(t_k))g'(t_k) \Delta x_k$$

which converge to the integrals $\int_a^b f(y) dy$ and $\int_c^d f(g(t))g'(t) dt$ as mesh $P \to 0$. Since the limits of equals are equal, the integrals are equal.

Actually, it is sufficient to assume that $g' \in \mathbb{R}$.

**39 Integration by Parts** If $f, g : [a, b] \to \mathbb{R}$ are differentiable and $f', g' \in \mathbb{R}$ then

$$\int_a^b f(x)g'(x) dx = f(b)g(b) - f(a)g(a) - \int_a^b f'(x)g(x) dx.$$