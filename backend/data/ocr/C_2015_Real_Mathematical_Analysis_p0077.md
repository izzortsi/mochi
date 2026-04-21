Definition $S$ is a closed set if it contains all its limits.†

Definition $S$ is an open set if for each $p \in S$ there exists an $r > 0$ such that

$$d(p, q) < r \implies q \in S.$$

5 Theorem Openness is dual to closedness: The complement of an open set is a closed set and the complement of a closed set is an open set.

Proof Suppose that $S \subset M$ is an open set. We claim that $S^c$ is a closed set. If $p_n \to p$ and $p_n \in S^c$ we must show that $p \in S^c$. Well, if $p \notin S^c$ then $p \in S$ and, since $S$ is open, there is an $r > 0$ such that

$$d(p, q) < r \implies q \in S.$$

Since $p_n \to p$, we have $d(p, p_n) < r$ for all large $n$, which implies that $p_n \in S$, contrary to the sequence being in $S^c$. Since the supposition that $p$ lies in $S$ leads to a contradiction, $p$ actually does lie in $S^c$, proving that $S^c$ is a closed set.

Suppose that $S$ is a closed set. We claim that $S^c$ is open. Take any $p \in S^c$. If there fails to exist an $r > 0$ such that

$$d(p, q) < r \implies q \in S^c$$

then for each $r = 1/n$ with $n = 1, 2, \ldots$ there exists a point $p_n \in S$ such that $d(p, p_n) < 1/n$. This sequence in $S$ converges to $p \in S^c$, contrary to closedness of $S$. Therefore there actually does exist an $r > 0$ such that

$$d(p, q) < r \implies q \in S^c$$

which proves that $S^c$ is an open set.

Most sets, like doors, are neither open nor closed, but ajar. Keep this in mind. For example neither $(a, b]$ nor its complement is closed in $\mathbb{R}$; $(a, b]$ is neither closed nor open. Unlike doors, however, sets can be both open and closed at the same time. For example, the empty set $\emptyset$ is a subset of every metric space and it is always closed. There are no sequences and no limits to even worry about. Similarly the full metric space $M$ is a closed subset of itself: For it certainly contains the limit of

†Note how similarly algebraists use the word “closed.” A field (or group or ring, etc.) is closed under its arithmetic operations: Sums, differences, products, and quotients of elements in the field still lie in the field. In our case it is limits. Limits of sequences in $S$ must lie in $S$.