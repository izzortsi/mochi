need not be true. For example, consider the metric space $\mathbb{Q}$ of rational numbers, equipped with the inherited metric $d(x, y) = |x - y|$, and consider the sequence

$$(r_n) = (1.4, 1.41, 1.414, 1.4142, \ldots).$$

It is Cauchy. Given $\epsilon > 0$, choose $N > -\log_{10} \epsilon$. If $k, n \geq N$ then $|r_k - r_n| \leq 10^{-N} < \epsilon$. Nevertheless, $(r_n)$ refuses to converge in $\mathbb{Q}$. After all, as a sequence in $\mathbb{R}$ it converges to $\sqrt{2}$, and if it also converges to some $r \in \mathbb{Q}$, then by uniqueness of limits in $\mathbb{R}$ we have $r = \sqrt{2}$, something we know is false. In brief, convergence $\Rightarrow$ Cauchy but not conversely.

A metric space $M$ is complete if each Cauchy sequence in $M$ converges to a limit in $M$. Theorem 1.5 states that $\mathbb{R}$ is complete.

**23 Theorem** $\mathbb{R}^m$ is complete.

**Proof** Let $(p_n)$ be a Cauchy sequence in $\mathbb{R}^m$. Express $p_n$ in components as

$$p_n = (p_{1n}, \ldots, p_{mn}).$$

Because $(p_n)$ is Cauchy, each component sequence $(p_{in})_{n \in \mathbb{N}}$ is Cauchy. Completeness of $\mathbb{R}$ implies that the component sequences converge, and therefore the vector sequence converges. $\square$

**24 Theorem** Every closed subset of a complete metric space is a complete metric subspace.

**Proof** Let $A$ be a closed subset of the complete metric space $M$ and let $(p_n)$ be a Cauchy sequence in $A$ with respect to the inherited metric. It is of course also a Cauchy sequence in $M$ and therefore it converges to a limit $p$ in $M$. Since $A$ is closed we have $p \in A$. $\square$

**25 Corollary** Every closed subset of Euclidean space is a complete metric space.

**Proof** Obvious from the previous theorem and completeness of $\mathbb{R}^m$. $\square$

**Remark** Completeness is not a topological property. For example, consider $\mathbb{R}$ with its usual metric and $(-1, 1)$ with the metric it inherits from $\mathbb{R}$. Although they are homeomorphic metric spaces, $\mathbb{R}$ is complete but $(-1, 1)$ is not.

In Section 10 we explain how every metric space can be completed.