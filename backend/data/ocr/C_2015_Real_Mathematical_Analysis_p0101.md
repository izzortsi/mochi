The neighborhood $M_rp$ contains no points of $S$, which is contrary to $p$ belonging to $\overline{S}$. Thus, $K \neq \emptyset$. Similarly, $L = B \cap S \neq \emptyset$, so $S = K \sqcup L$ is a separation of $S$, proving that $S$ is disconnected.

**Example** The outward spiral expressed in polar coordinates as

$$S = \{(r, \theta) : (1 - r)\theta = 1 \text{ and } \theta \geq \pi/2\}$$

has $\overline{S} = S \cup S^1$, where $S^1$ is the unit circle. Since $S$ is connected, so is $\overline{S}$. (Recall that $\overline{S}$ is the closure of $S$.) See Figure 27.

**50 Theorem** The union of connected sets sharing a common point $p$ is connected.

**Proof** Let $S = \bigcup S_\alpha$, where each $S_\alpha$ is connected and $p \in \bigcap S_\alpha$. If $S$ is disconnected then it has a separation $S = A \sqcup A^c$ where $A, A^c$ are proper and clopen. One of them contains $p$; say it is $A$. Then $A \cap S_\alpha$ is a nonempty clopen subset of $S_\alpha$. Since $S_\alpha$ is connected, $A \cap S_\alpha = S_\alpha$ for each $\alpha$, and $A = S$. This implies that $A^c = \emptyset$, a contradiction. Therefore $S$ is connected.

**Example** The 2-sphere $S^2$ is connected. For $S^2$ is the union of great circles, each passing through the poles.

**Example** Every convex set $C$ in $\mathbb{R}^m$ (or in any metric space with a compatible linear structure) is connected. If we choose a point $p \in C$ then each $q \in C$ lies on a line segment $[p, q] \subset C$. Thus, $C$ is the union of connected sets sharing the common point $p$. It is connected.

**Definition** A path joining $p$ to $q$ in a metric space $M$ is a continuous function $f : [a, b] \to M$ such that $fa = p$ and $fb = q$. If each pair of points in $M$ can be joined by a path in $M$ then $M$ is path-connected. See Figure 42.

**51 Theorem** Path-connected implies connected.

**Proof** Assume that $M$ is path-connected but not connected. Then $M = A \sqcup A^c$ for some proper clopen $A \subset M$. Choose $p \in A$ and $q \in A^c$. There is a path $f : [a, b] \to M$ from $p$ to $q$. The separation $f^{\text{pre}}(A) \sqcup f^{\text{pre}}(A^c)$ contradicts connectedness of $[a, b]$. Therefore $M$ is connected.

**Example** All connected subsets of $\mathbb{R}$ are path-connected. See Exercise 67.