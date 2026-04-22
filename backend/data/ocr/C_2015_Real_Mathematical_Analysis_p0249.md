Figure 98 $G_p(p) = F(p)$ and $G_p > F - \epsilon$ everywhere.

See Figure 98.

By compactness, finitely many of these neighborhoods cover $M$, say $V_{p1}, \ldots, V_{p_m}$. Set

$$G(x) = \min(G_{p1}(x), \ldots, G_{p_m}(x)).$$

We know that $G \in \overline{\mathcal{A}}$ and (16), (17) imply (11). See Figure 99.

23 Corollary Any $2\pi$-periodic continuous function of $x \in \mathbb{R}$ can be uniformly approximated by a trigonometric polynomial

$$T(x) = a_0 + \sum_{k=1}^{n} a_k \cos kx + \sum_{k=1}^{n} b_k \sin kx.$$

Proof Think of $[0, 2\pi)$ parameterizing the circle $S^1$ by $x \mapsto (\cos x, \sin x)$. The circle is compact, and $2\pi$-periodic continuous functions on $\mathbb{R}$ become continuous functions on $S^1$. The trigonometric polynomials on $S^1$ form an algebra $\mathcal{T} \subset C^0 S^1$ that vanishes nowhere and separates points. The Stone-Weierstrass Theorem implies that $\mathcal{T}$ is dense in $C^0 S^1$.

†Since a function algebra need not contain constant functions, it was important that $q$ has no constant term. One should not expect that $g = a_0 + a_1 f + \cdots + a_n f^n$ belongs to $\overline{\mathcal{A}}$.