52 Theorem The following are equivalent conditions to $S$ clustering at $p$.

(i) There is a sequence of distinct points in $S$ that converges to $p$.
(ii) Each neighborhood of $p$ contains infinitely many points of $S$.
(iii) Each neighborhood of $p$ contains at least two points of $S$.
(iv) Each neighborhood of $p$ contains at least one point of $S$ other than $p$.

Proof Clearly $(i) \Rightarrow (ii) \Rightarrow (iii) \Rightarrow (iv)$, and $(ii)$ is the definition of clustering. It remains to check $(iv) \Rightarrow (i)$.

Assume $(iv)$ is true: Each neighborhood of $p$ contains a point of $S$ other than $p$. In $M_1p$ choose a point $p_1 \in (S \setminus \{p\})$. Set $r_2 = \min(1/2, d(p_1, p))$, and in the smaller neighborhood $M_{r_2}p$, choose $p_2 \in (S \setminus \{p\})$. Proceed inductively: Set $r_n = \min(1/n, d(p_{n-1}, p))$ and in $M_{r_n}p$, choose $p_n \in (S \setminus \{p\})$. Since $r_n \to 0$ the sequence $(p_n)$ converges to $p$. The points $p_n$ are distinct since they have different distances to $p$,

$$d(p_1, p) \geq r_2 > d(p_2, p) \geq r_3 > d(p_3, p) \geq \dots.$$

Thus $(iv) \Rightarrow (i)$ and the four conditions are equivalent.

Condition $(iv)$ is the form of the definition of clustering most frequently used, although it is the hardest to grasp. It is customary to denote by $S'$ the set of cluster points of $S$.

53 Proposition $S \cup S' = \overline{S}$.

Proof A cluster point is a type of limit of $S$, so $S' \subset \lim S = \overline{S}$ and

$$S \cup S' \subset \overline{S}$$

On the other hand, if $p \in \overline{S}$ then either $p \in S$ or else $p \notin S$ and each neighborhood of $p$ contains points of $S$ other than $p$. This implies that $p \in S \cup S'$, so $\overline{S} \subset S \cup S'$, and the two sets are equal.

54 Corollary $S$ is closed if and only if $S' \subset S$.

Proof $S$ is closed if and only if $S = \overline{S}$. Since $\overline{S} = S \cup S'$, equivalent to $S' \subset S$ is $\overline{S} = S$.

55 Corollary The least upper bound and greatest lower bound of a nonempty bounded set $S \subset \mathbb{R}$ belong to the closure of $S$. Thus, if $S$ is closed then they belong to $S$.

Proof If $b = l. u. b. S$ then each interval $(b - r, b]$ contains points of $S$. The same is true for intervals $[a, a + r)$ where $a = g. l. b. S$