76 Corollary The fat Cantor set is homeomorphic to the standard Cantor set.

Proof Immediate from the Moore-Kline Theorem. □

77 Corollary A Cantor set is homeomorphic to its own Cartesian square; that is, $C \cong C \times C$.

Proof It is enough to check that $C \times C$ is a Cantor space. It is. See Exercise 99. □

The fact that a nontrivial space is homeomorphic to its own Cartesian square is disturbing, is it not?

Ambient Topological Equivalence

Although all Cantor spaces are homeomorphic to each other when considered as abstract metric spaces, they can present themselves in very different ways as subsets of Euclidean space. Two sets $A, B$ in $\mathbb{R}^m$ are **ambiently homeomorphic** if there is a homeomorphism of $\mathbb{R}^m$ to itself that sends $A$ onto $B$. For example, the sets

$$A = \{0\} \cup [1, 2] \cup \{3\} \quad \text{and} \quad B = \{0\} \cup \{1\} \cup [2, 3]$$

are homeomorphic when considered as metric spaces, but there is no ambient homeomorphism of $\mathbb{R}$ that carries $A$ to $B$. Similarly, the trefoil knot in $\mathbb{R}^3$ is homeomorphic but not ambiently homeomorphic in $\mathbb{R}^3$ to a planar circle. See also Exercise 105.

78 Theorem Every two Cantor spaces in $\mathbb{R}$ are ambiently homeomorphic.

Let $M$ be a Cantor space contained in $\mathbb{R}$. According to Theorem 73, $M$ is homeomorphic to the standard Cantor set $C$. We want to find a homeomorphism of $\mathbb{R}$ to itself that carries $C$ to $M$.

The **convex hull** of $S \subset \mathbb{R}^m$ is the smallest convex set $H$ that contains $S$. When $m = 1$, $H$ is the smallest interval that contains $S$.

79 Lemma A Cantor space $M \subset \mathbb{R}$ can be divided into two Cantor pieces whose convex hulls are disjoint.

Proof Obvious from one-dimensionality of $\mathbb{R}$: Choose a point $x \in \mathbb{R} \setminus M$ such that some points of $M$ lie to the left of $x$ and others lie to its right. Then

$$M = M \cap (-\infty, x) \cup (x, \infty) \cap M$$

divides $M$ into disjoint Cantor pieces whose convex hulls are disjoint closed intervals. □