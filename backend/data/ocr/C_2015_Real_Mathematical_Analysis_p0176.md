16 Theorem If $f$ is Riemann integrable then it is bounded.

Proof Suppose not. Let $I = \int_a^b f(x) \, dx$. There is some $\delta > 0$ such that for all partition pairs with mesh $P < \delta$, we have $|R - I| < 1$. Fix such a partition pair $P = \{x_0, \ldots, x_n\}$, $T = \{t_1, \ldots, t_n\}$. If $f$ is unbounded on $[a, b]$ then there is also a subinterval $[x_{i_0-1}, x_{i_0}]$ on which it is unbounded. Choose a new set $T' = \{t'_1, \ldots, t'_n\}$ with $t'_i = t_i$ for all $i \neq i_0$ and choose $t'_{i_0}$ such that

$$|f(t'_{i_0}) - f(t_{i_0})| \Delta x_{i_0} > 2.$$

This is possible since the supremum of $\{|f(t)| : x_{i_0-1} \leq t \leq x_{i_0}\}$ is $\infty$. Let $R' = R(f, P, T')$. Then $|R - R'| > 2$, contrary to the fact that both $R$ and $R'$ differ from $I$ by $< 1$.

Let $\mathcal{R}$ denote the set of all functions that are Riemann integrable over $[a, b]$.

17 Theorem (Linearity of the Integral)

(a) $\mathcal{R}$ is a vector space and $f \mapsto \int_a^b f(x) \, dx$ is a linear map $\mathcal{R} \to \mathbb{R}$.

(b) The constant function $h(x) = k$ is integrable and its integral is $k(b - a)$.