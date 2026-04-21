19 Corollary (Convergence in $\mathbb{R}^m$) A sequence of vectors $(v_n)$ in $\mathbb{R}^m$ converges in $\mathbb{R}^m$ if and only if each of its component sequences $(v_{in})$ converges, $1 \leq i \leq m$. The limit of the vector sequence is the vector

$$v = \lim_{n \to \infty} v_n = \left( \lim_{n \to \infty} v_{1n}, \lim_{n \to \infty} v_{2n}, \ldots, \lim_{n \to \infty} v_{mn} \right).$$

The distance function $d : M \times M \to \mathbb{R}$ is a function from the metric space $M \times M$ to the metric space $\mathbb{R}$, so the following assertion makes sense.

20 Theorem $d$ is continuous.

Proof We check $(\epsilon, \delta)$-continuity with respect to the metric $d_{\text{sum}}$. Given $\epsilon > 0$ we take $\delta = \epsilon$. If $d_{\text{sum}}((p, q), (p', q')) < \delta$ then the triangle inequality gives

$$d(p, q) \leq d(p, p') + d(p', q') + d(q', q) < d(p', q') + \epsilon$$

$$d(p', q') \leq d(p', p) + d(p, q) + d(q, q') < d(p, q) + \epsilon$$

which gives

$$d(p, q) - \epsilon < d(p', q') < d(p, q) + \epsilon.$$

Thus $|d(p', q') - d(p, q)| < \epsilon$ and we get continuity with respect to the metric $d_{\text{sum}}$. By Theorem 17 it does not matter which metric we use on $\mathbb{R} \times \mathbb{R}$.

As you can see, the use of $d_{\text{sum}}$ simplifies the proof by avoiding square root manipulations. The sum metric is also called the Manhattan metric or the taxicab metric. Figure 37 shows the “unit discs” with respect to these metrics in $\mathbb{R}^2$. See also Exercise 2.

21 Corollary The metrics $d_{\text{max}}, d_E$, and $d_{\text{sum}}$ are continuous.

Proof Theorem 20 asserts that all metrics are continuous.

22 Corollary The absolute value is a continuous mapping $\mathbb{R} \to \mathbb{R}$. In fact the norm is a continuous mapping from any normed space to $\mathbb{R}$.

Proof $\|v\| = d(v, 0)$.