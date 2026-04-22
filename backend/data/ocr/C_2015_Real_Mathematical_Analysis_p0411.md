Inner Measure, Hulls, and Kernels

Consider any bounded $A \subset \mathbb{R}^n$, measurable or not. $m^*A$ is the infimum of the measure of open sets that contain $A$. The infimum is achieved by a $G_\delta$-set that contains $A$. We call it a **hull** of $A$ and denote it as $H_A$. It is unique up to a zero set. Dually, the inner measure of $A$ is the supremum of the measure of closed sets it contains. The supremum is achieved by an $F_\sigma$-set contained in $A$. We call it a **kernel** of $A$ and denote it as $K_A$. It is unique up to a zero set.† We denote the inner measure of $A$ as $m_*A$. It equals $m^*(K_A)$. Clearly $m_*A \leq m^*A$ and $m_*$ measures $A$ from the inside. Also, $m_*$ is monotone: $A \subset B$ implies $m_*A \leq m_*B$.

Remark Theorem 16 implies that a bounded subset of $\mathbb{R}^n$ is measurable if and only if its inner and outer measures are equal. Lebesgue took this as his definition of measurability. He said a bounded set is measurable if its inner and outer measures are equal, and an unbounded set is measurable if it is a countable union of bounded measurable sets. In contrast, the current definition which uses cleanness and test sets is due to Carathéodory. It is easier to use (there are fewer complements to consider), unboundedness has no effect on it, and it generalizes more easily to abstract measure spaces.

19 Theorem If $A \subset B \subset \mathbb{R}^n$ and $B$ is a box then $A$ is measurable if and only if it divides $B$ cleanly.

Remark The theorem is also valid for a bounded measurable set $B$ instead of a box, but it’s most useful for boxes. It means you don’t need to check clean division of all test sets, just clean division of one big box.

20 Lemma If $A$ is contained in a box $B$ then $mB = m_*A + m^*(B \setminus A)$.

Proof If $K \subset A$ is closed then $B \setminus K$ is open and contains $B \setminus A$. Measurability implies

$$mB = mK + m(B \setminus K).$$

Maximizing $mK$ minimizes $m(B \setminus K)$ and vice versa.

Proof of Theorem 19 Lemma 20 implies

$$m_*A + m^*(B \setminus A) = mB.$$

†If $A$ is unbounded we need to take a little more care. It is not enough to achieve the infimum or supremum if they are $\infty$. Rather, we demand that $H_A$ is minimal in the sense that if $H \supset A$ and is measurable then $H_A \setminus H$ is a zero set. Similarly, we demand maximality of $K_A$ in the sense that if $K \subset A$ and is measurable then $K \setminus K_A$ is a zero set. See Exercise 6.