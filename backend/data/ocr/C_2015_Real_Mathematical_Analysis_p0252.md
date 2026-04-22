Figure 100 $f$ contracts $M$ toward the fixed-point $p$.

Note that (19) needs the hypothesis $k < 1$. If $N \leq m \leq n$ then (18) gives

$$d(x_m, x_n) \leq d(x_m, x_{m+1}) + d(x_{m+1}, x_{m+2}) + \ldots + d(x_{n-1}, x_n)$$
$$\leq k^m d(x_0, x_1) + k^{m+1} d(x_0, x_1) + \ldots + k^{n-1} d(x_0, x_1)$$
$$= k^m (1 + k + \ldots + k^{n-m-1}) d(x_0, x_1)$$
$$\leq k^N \sum_{\ell=0}^{\infty} k^\ell d(x_0, x_1) = \frac{k^N}{1-k} d(x_0, x_1) < \epsilon.$$

Thus $(x_n)$ is Cauchy. Since $M$ is complete, $x_n$ converges to some $p \in M$ as $n \to \infty$. Let $\epsilon > 0$ be given. For large $n$, the points $x_n$ and $x_{n+1}$ lie in the $\epsilon$-neighborhood of $p$. Since $f(x_n) = x_{n+1}$, the map $f$ moves $x_n$ a distance $< 2\epsilon$, and since $\epsilon$ is arbitrarily small, continuity of $f$ implies $f$ does not move $p$ at all. It is a fixed-point of $f$. Uniqueness of the fixed-point is immediate. After all, how can two points simultaneously stay fixed and move closer together?

Proof #2 of the Banach Contraction Principle Choose any point $x_0 \in M$ and choose $r_0$ so large that $f\left(\overline{M_{r_0}(x_0)}\right) \subset M_{r_0}(x_0)$. Let $B_0 = \overline{M_{r_0}(x_0)}$ and $B_n = \overline{f^n(B_{n-1})}$. The diameter of $B_n$ is at most $k^n$ diam($B_0$), and this tends to 0 as $n \to \infty$.