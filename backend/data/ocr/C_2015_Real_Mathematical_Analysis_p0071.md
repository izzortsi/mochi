the sequence prescribes an ordering of the points, while in the latter the points get jumbled together. For example, the sequences 1, 2, 3, … and 1, 2, 1, 3, 2, 1, 4, 3, 2, 1, … are different sequences but give the same set of points, namely $\mathbb{N}$.

Formally, a sequence in $M$ is a function $f : \mathbb{N} \to M$. The $n^{\text{th}}$ term in the sequence is $f(n) = p_n$. Clearly, every sequence defines a function $f : \mathbb{N} \to M$ and conversely, every function $f : \mathbb{N} \to M$ defines a sequence in $M$. The sequence $(p_n)$ converges to the limit $p$ in $M$ if

$$\forall \epsilon > 0 \exists N \in \mathbb{N} \text{ such that}$$
$$n \in \mathbb{N} \text{ and } n \geq N \Rightarrow d(p_n, p) < \epsilon.$$

Limits are unique in the sense that if $(p_n)$ converges to $p$ and if $(p_n)$ also converges to $p'$ then $p = p'$. The reason is this. Given any $\epsilon > 0$, there are integers $N$ and $N'$ such that if $n \geq N$ then $d(p_n, p) < \epsilon$, while if $n \geq N'$ then $d(p_n, p') < \epsilon$. Then for all $n \geq \max\{N, N'\}$ we have

$$d(p, p') \leq d(p, p_n) + d(p_n, p') < \epsilon + \epsilon = 2\epsilon.$$

But $\epsilon$ is arbitrary and so $d(p, p') = 0$ and $p = p'$. (This is the $\epsilon$-principle again.)

We write $p_n \to p$, or $p_n \to p$ as $n \to \infty$, or

$$\lim_{n \to \infty} p_n = p$$

to indicate convergence. For example, in $\mathbb{R}$ the sequence $p_n = 1/n$ converges to 0 as $n \to \infty$. In $\mathbb{R}^2$ the sequence $(1/n, \sin n)$ does not converge as $n \to \infty$. In the metric space $\mathbb{Q}$ (with the metric it inherits from $\mathbb{R}$) the sequence 1, 1.4, 1.414, 1.4142, … does not converge.

Just as a set can have a subset, a sequence can have a subsequence. For example, the sequence 2, 4, 6, 8, … is a subsequence of 1, 2, 3, 4, …. The sequence 3, 5, 7, 11, 13, 17, … is a subsequence of 1, 3, 5, 7, 9, …, which in turn is a subsequence of 1, 2, 3, 4, …. In general, if $(p_n)_{n \in \mathbb{N}}$ and $(q_k)_{k \in \mathbb{N}}$ are sequences and if there is a sequence $n_1 < n_2 < n_3 < …$ of positive integers such that for each $k \in \mathbb{N}$ we have $q_k = p_{n_k}$ then $(q_k)$ is a **subsequence** of $(p_n)$. Note that the terms in the subsequence occur in the same order as in the mother sequence.

1 Theorem Every subsequence of a convergent sequence in $M$ converges and it converges to the same limit as does the mother sequence.