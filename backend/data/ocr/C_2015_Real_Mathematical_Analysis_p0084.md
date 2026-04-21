Proof Let $V$ be an open set in $N$. By Theorem 11, since $f$ is continuous, the preimage of $V$ is open in $M$. Since $f$ is a bijection, this preimage $U = \{p \in M : fp \in V\}$ is exactly the image of $V$ by the inverse bijection, $U = f^{-1}(V)$. The same thing can be said about $f^{-1}$ since $f^{-1}$ is also a homeomorphism. That is, $V = fU$. Thus, sending $U$ to $fU$ bijects the topology of $M$ to the topology of $N$.

Because of this corollary, a homeomorphism is also called a topological equivalence.

In general, continuous maps do not need to send open sets to open sets. For example, the squaring map $x \mapsto x^2$ from $\mathbb{R}$ to $\mathbb{R}$ is continuous but it sends the open interval $(-1, 1)$ to the nonopen interval $[0, 1)$. See also Exercise 28.

Inheritance

If a set $S$ is contained in a metric subspace $N \subset M$ you need to be careful when you say that $S$ is open or closed. For example,

$$S = \{x \in \mathbb{Q} : -\pi < x < \pi\}$$

is a subset of the metric subspace $\mathbb{Q} \subset \mathbb{R}$. It is both open and closed with respect to $\mathbb{Q}$ but is neither open nor closed with respect to $\mathbb{R}$. To avoid this kind of ambiguity it is best to say that $S$ is clopen “with respect to $\mathbb{Q}$ but not with respect to $\mathbb{R}$,” or more briefly that $S$ is clopen “in $\mathbb{Q}$ but not in $\mathbb{R}$.” Nevertheless there is a simple relation between the topologies of $M$ and $N$ when $N$ is a metric subspace of $M$.