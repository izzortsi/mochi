43 Theorem If $M$ is connected, $f : M \to N$ is continuous, and $f$ is onto then $N$ is connected. The continuous image of a connected is connected.

Proof Simple! If $A$ is a clopen proper subset of $N$ then, according to the open and closed set conditions for continuity, $f^{\text{pre}}(A)$ is a clopen subset of $M$. Since $f$ is onto and $A \neq \emptyset$, we have $f^{\text{pre}}(A) \neq \emptyset$. Similarly, $f^{\text{pre}}(A^c) \neq \emptyset$. Therefore $f^{\text{pre}}(A)$ is a proper clopen subset of $M$, contrary to $M$ being connected. It follows that $A$ cannot exist and that $N$ is connected.

44 Corollary If $M$ is connected and $M$ is homeomorphic to $N$ then $N$ is connected. Connectedness is a topological property.

Proof $N$ is the continuous image of $M$, so Theorem 43 implies it is connected.

45 Corollary (Generalized Intermediate Value Theorem) Every continuous real-valued function defined on a connected domain has the intermediate value property.

Proof Assume that $f : M \to \mathbb{R}$ is continuous and $M$ is connected. If $f$ assumes values $\alpha < \beta$ in $\mathbb{R}$ and if it fails to assume some value $\gamma$ with $\alpha < \gamma < \beta$, then

$$M = \{x \in M : f(x) < \gamma\} \sqcup \{x \in M : f(x) > \gamma\}$$

is a separation of $M$, contrary to connectedness.

46 Theorem $\mathbb{R}$ is connected.

Proof If $U \subset \mathbb{R}$ is nonempty and clopen we claim that $U = \mathbb{R}$. Choose some $p \in U$ and consider the set

$$X = \{x \in U : \text{the open interval } (p, x) \text{ is contained in } U\}.$$

$X$ is nonempty since $U$ is open. Let $s$ be the supremum of $X$. If $s$ is finite (i.e., $X$ is bounded above) then $s = l. u. b. X$ and $s$ is a limit of $X$. Since $X \subset U$ and $U$ is closed we have $s \in U$. Since $U$ is open there is an interval $(s - r, s + r) \subset U$, which gives an interval $(p, s + r) \subset U$, contrary to $s$ being an upper bound for $X$. Hence $s = \infty$ and $U \supset (p, \infty)$. The same reasoning gives $U \supset (-\infty, p)$, so $U = \mathbb{R}$ as claimed. Thus there are no proper clopen subsets of $\mathbb{R}$ and $\mathbb{R}$ is connected.

47 Corollary (Intermediate Value Theorem for $\mathbb{R}$) Every continuous function $f : \mathbb{R} \to \mathbb{R}$ has the intermediate value property.