and similarly,

$$\mathbf{P}\{v_k < \infty \mid v_{k-1} < \infty\} = v, \quad \mathbf{P}\{v_k < \infty\} = v^k.$$

If $\varepsilon_i$ is transient, then $v < 1$ and hence

$$\sum_{k=1}^{\infty} \mathbf{P}\{v_k < \infty\} = \sum_{k=1}^{\infty} v^k < \infty.$$

Therefore, by the first Borel-Cantelli lemma (Theorem 2.5, p. 21), with probability 1 only finitely many of the events $\{v_k < \infty\}$ occur, i.e., with probability 1 the system returns to the state $\varepsilon_i$ only finitely often. This proves the second assertion in the statement of the theorem.

On the other hand, if $\varepsilon_i$ is persistent, then $v = 1$, which implies

$$\mathbf{P}\{v_k < \infty\} = 1$$

for every $k$. Let $\kappa$ be the number of times the system returns to its initial state $\varepsilon_i$ as $n \to \infty$. Then obviously the events $\{\kappa \geq k\}$ and $\{v_k < \infty\}$ are equivalent, so that if $\mathbf{P}\{v_k < \infty\} = 1$ for every $k$, then $\kappa$ exceeds any preassigned integer $k$ with probability 1. But then

$$\mathbf{P}\{\kappa = \infty\} = 1,$$

which proves the first assertion.

A state $\varepsilon_j$ is said to be accessible from a state $\varepsilon_i$ if the probability of the system going from $\varepsilon_i$ to $\varepsilon_j$ in some number of steps is positive, i.e., if $p_{ij}(M) > 0$ for some $M$.

**Theorem 7.3.** If a state $\varepsilon_j$ is accessible from a persistent state $\varepsilon_i$, then $\varepsilon_i$ is in turn accessible from $\varepsilon_j$ and $\varepsilon_j$ is itself persistent.

**Proof.** Suppose $\varepsilon_i$ is not accessible from $\varepsilon_j$. Then the system will go from $\varepsilon_i$ to $\varepsilon_j$ with positive probability $p_{ij}(M) = \alpha > 0$ for some number of steps $M$, after which the system cannot return to $\varepsilon_i$. But then the probability of the system eventually returning to $\varepsilon_i$ cannot exceed $1 - \alpha$, contrary to the assumption that $\varepsilon_i$ is persistent. Hence $\varepsilon_i$ must be accessible from $\varepsilon_j$, i.e., $p_{ji}(N) = \beta > 0$ for some $N$. It follows from (7.8) that

$$P(n + M + N) = P(M)P(n)P(N) = P(N)P(n)P(M),$$

and hence

$$p_{ii}(n + M + N) \geq p_{ij}(M)p_{jj}(n)p_{ji}(N) = \alpha\beta p_{jj}(n),$$

$$p_{jj}(n + M + N) \geq p_{ji}(N)p_{ii}(n)p_{jj}(N) = \alpha\beta p_{ii}(n).$$

These inequalities show that the series

$$\sum_{n=0}^{\infty} p_{ii}(n), \quad \sum_{n=0}^{\infty} p_{jj}(n)$$