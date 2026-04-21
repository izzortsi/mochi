is, there exist points $p, q \in M$ with $d(p, q) < \delta$ but $d(fp, fq) \geq \epsilon$. Take $\delta = 1/n$ and let $(p_n)$ and $(q_n)$ be sequences of points in $M$ such that $d(p_n, q_n) < 1/n$ while $d(f(p_n), f(q_n)) \geq \epsilon$. Compactness of $M$ implies that there is a subsequence $p_{n_k}$ which converges to some $p \in M$ as $k \to \infty$. Since $d(p_n, q_n) < 1/n \to 0$ as $n \to \infty$, $(q_{n_k})$ converges to the same limit as does $(p_{n_k})$ as $k \to \infty$; namely $q_{n_k} \to p$. Continuity at $p$ implies that $f(p_{n_k}) \to fp$ and $f(q_{n_k}) \to fp$. If $k$ is large then

$$d(f(p_{n_k}), f(q_{n_k})) \leq d(f(p_{n_k}), fp) + d(fp, f(q_{n_k})) < \epsilon,$$

contrary to the supposition that $d(f(p_n), f(q_n)) \geq \epsilon$ for all $n$.

Theorem 42 gives a second proof that continuity implies uniform continuity on an interval $[a, b]$. For $[a, b]$ is compact.

5 Connectedness

As another application of these ideas, we consider the general notion of connectedness. Let $A$ be a subset of a metric space $M$. If $A$ is neither the empty set nor $M$ then $A$ is a proper subset of $M$. Recall that if $A$ is both closed and open in $M$ it is said to be clopen. The complement of a clopen set is clopen. The complement of a proper subset is proper.

If $M$ has a proper clopen subset $A$ then $M$ is disconnected. For there is a separation of $M$ into proper, disjoint clopen subsets,

$$M = A \sqcup A^c.$$

(The notation $\sqcup$ indicates disjoint union.) $M$ is connected if it is not disconnected, i.e., it contains no proper clopen subset. Connectedness of $M$ does not mean that $M$ is connected to something, but rather that $M$ is one unbroken thing. See Figure 40.

Figure 40 $M$ and $N$ illustrate the difference between being connected and being disconnected.