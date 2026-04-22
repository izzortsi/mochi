From (10) we deduce that $P_n \Rightarrow f$ as follows. Let $\epsilon > 0$ be given. Uniform continuity of $f$ gives $\delta > 0$ such that $|t| < \delta$ implies $|f(x+t) - f(x)| < \epsilon/2$. Since $\beta_n$ has integral 1 on $[-1, 1]$ we have

$$|P_n(x) - f(x)| = \left| \int_{-1}^{1} (f(x+t) - f(x)) \beta_n(t) \, dt \right|$$

$$\leq \int_{-1}^{1} |f(x+t) - f(x)| \beta_n(t) \, dt$$

$$= \int_{|t| < \delta} |f(x+t) - f(x)| \beta_n(t) \, dt + \int_{|t| \geq \delta} |f(x+t) - f(x)| \beta_n(t) \, dt.$$

The first integral is less than $\epsilon/2$, while the second is at most $2M \int_{|t| \geq \delta} \beta_n(t) \, dt$. By (10), the second integral is less than $\epsilon/2$ when $n$ is large. Thus $P_n \Rightarrow f$ as claimed. $\square$

Next we see how to extend this result to functions defined on a compact metric space $M$ instead of merely on an interval. A subset $\mathcal{A}$ of $C^0M = C^0(M, \mathbb{R})$ is a function algebra if it is closed under addition, scalar multiplication, and function multiplication. That is, if $f, g \in \mathcal{A}$ and $c$ is a constant then $f+g, cf$, and $f \cdot g$ belong to $\mathcal{A}$. For example, the set of polynomials is a function algebra. The function algebra vanishes at a point $p$ if $f(p) = 0$ for all $f \in \mathcal{A}$. For example, the function algebra of all polynomials with zero constant term vanishes at $x = 0$. The function algebra separates points if for each pair of distinct points $p_1, p_2 \in M$ there is a function $f \in \mathcal{A}$ such that $f(p_1) \neq f(p_2)$. For example, the function algebra of all trigonometric polynomials separates points of $[0, 2\pi)$ and vanishes nowhere.

20 Stone-Weierstrass Theorem If $M$ is a compact metric space and $\mathcal{A}$ is a function algebra in $C^0M$ that vanishes nowhere and separates points then $\mathcal{A}$ is dense in $C^0M$.

Although the Weierstrass Approximation Theorem is a special case of the Stone-Weierstrass Theorem, the proof of the latter does not stand on its own; it depends crucially on the former. We also need two lemmas.

21 Lemma If $\mathcal{A}$ vanishes nowhere and separates points then there exists $f \in \mathcal{A}$ with specified values at any pair of distinct points.

Proof Given distinct points $p_1, p_2 \in M$, and given constants $c_1, c_2$, we seek a function $f \in \mathcal{A}$ such that $f(p_1) = c_1$ and $f(p_2) = c_2$.