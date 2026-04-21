10* Completion

Many metric spaces are complete (for example, every closed subset of Euclidean space is complete), and completeness is a reasonable property to require of a metric space, especially in light of the following theorem.

80 Completion Theorem Every metric space can be completed.

This means that just as $\mathbb{R}$ completes $\mathbb{Q}$, we can take any metric space $M$ and find a complete metric space $\widehat{M}$ containing $M$ whose metric extends the metric of $M$. To put it another way, $M$ is always a metric subspace of a complete metric space. In a natural sense the completion is uniquely determined by $M$.

81 Lemma Given four points $p, q, x, y \in M$, we have

$$|d(p, q) - d(x, y)| \leq d(p, x) + d(q, y).$$

Proof The triangle inequality implies that

$$d(x, y) \leq d(x, p) + d(p, q) + d(q, y)$$
$$d(p, q) \leq d(p, x) + d(x, y) + d(y, q),$$

and hence

$$-(d(p, x) + d(q, y)) \leq d(p, q) - d(x, y) \leq (d(p, x) + d(q, y)).$$

A number sandwiched between $-k$ and $k$ has magnitude $\leq k$, which completes the proof.

Proof of the Completion Theorem 80 We consider the collection $\mathcal{C}$ of all Cauchy sequences in $M$, convergent or not, and convert it into the completion of $M$. (This is a bold idea, is it not?) Cauchy sequences $(p_n)$ and $(q_n)$, are co-Cauchy if $d(p_n, q_n) \to 0$ as $n \to \infty$. Co-Cauchyness is an equivalence relation on $\mathcal{C}$. (This is easy to check.)

Define $\widehat{M}$ to be $\mathcal{C}$ modulo the equivalence relation of being co-Cauchy. Points of $\widehat{M}$ are equivalence classes $P = [(p_n)]$ such that $(p_n)$ is a Cauchy sequence in $M$. The metric on $\widehat{M}$ is

$$D(P, Q) = \lim_{n \to \infty} d(p_n, q_n),$$

where $P = [(p_n)]$ and $Q = [(q_n)]$. It only remains to verify three things:

(a) $D$ is a well defined metric on $\widehat{M}$.
(b) $M \subset \widehat{M}$.
(c) $\widehat{M}$ is complete.