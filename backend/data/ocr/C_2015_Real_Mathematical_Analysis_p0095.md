as $k \to \infty$. Thus, every sequence $(b_n)$ in $fA$ has a subsequence converging to a limit in $fA$, which shows that $fA$ is compact.

From Theorem 36 follows the natural generalization of the min/max theorem in Chapter 1 which concerns continuous real-valued functions defined on an interval $[a, b]$. See Theorem 1.23.

**37 Corollary** A continuous real-valued function defined on a compact set is bounded; it assumes maximum and minimum values.

**Proof** Let $f : M \to \mathbb{R}$ be continuous and let $A$ be a compact subset of $M$. Theorem 36 implies that $fA$ is a compact subset of $\mathbb{R}$, so by Theorem 26 it is closed and bounded. Thus, the greatest lower bound, $v$, and least upper bound, $V$, of $fA$ exist and belong to $fA$; i.e., there exist points $p, P \in A$ such that for all $a \in A$ we have $v = fp \leq fa \leq fP = V$.

**Homeomorphisms and Compactness**

A homeomorphism is a bicontinuous bijection. Originally, compactness was called bicompactness. This is reflected in the next theorem.

**38 Theorem** If $M$ is compact and $M$ is homeomorphic to $N$ then $N$ is compact. Compactness is a topological property.

**Proof** $N$ is the continuous image of $M$, so by Theorem 36 it is compact.

**39 Corollary** $[0, 1]$ and $\mathbb{R}$ are not homeomorphic.

**Proof** One is compact and the other isn’t.

**40 Theorem** If $M$ is compact then a continuous bijection $f : M \to N$ is a homeomorphism – its inverse bijection $f^{-1} : N \to M$ is automatically continuous.

**Proof** Suppose that $q_n \to q$ in $N$. Since $f$ is a bijection, $p_n = f^{-1}(q_n)$ and $p = f^{-1}(q)$ are well defined points in $M$. To check continuity of $f^{-1}$ we must show that $p_n \to p$.

If $(p_n)$ refuses to converge to $p$ then there is a subsequence $(p_{n_k})$ and a $\delta > 0$ such that for all $k$ we have $d(p_{n_k}, p) \geq \delta$. Compactness of $M$ gives a sub-subsequence $(p_{n_k(\ell)})$ that converges to a point $p^* \in M$ as $\ell \to \infty$.

Necessarily, $d(p, p^*) \geq \delta$, which implies that $p \neq p^*$. Since $f$ is continuous we have

$$f(p_{n_k(\ell)}) \to f(p^*)$$