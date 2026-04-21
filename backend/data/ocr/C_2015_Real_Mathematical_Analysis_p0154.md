and given an $\epsilon > 0$, prove that there exists a path $A$ in the $\epsilon$-neighborhood of $[p, q]$ that joins $p$ to $q$ and is disjoint from $M$. [Hint: Think of $A$ as a bisector of $M$. From this bisection fact a dyadic disc partition of $M$ can be constructed, which leads to the proof that $M$ is tame.]

139. To prove that Antoine’s Necklace $A$ is a Cantor set, you need to show that $A$ is compact, perfect, nonempty, and totally disconnected.

(a) Do so. [Hint: What is the diameter of any connected component of $A^n$, and what does that imply about $A$?]

**(b)** If, in the Antoine construction two linked solid tori are placed very cleverly inside each larger solid torus, show that the intersection $A = \bigcap A^n$ is a Cantor set.

*140. Consider the Hilbert cube*

$$H = \{(x_1, x_2, \ldots) \in [0, 1]^\infty : \text{for each } n \in \mathbb{N} \text{ we have } |x_n| \leq 1/2^n\}.$$

Prove that $H$ is compact with respect to the metric

$$d(x, y)) = \sup_n |x_n - y_n|$$

where $x = (x_n)$, $y = (y_n)$. [Hint: Sequences of sequences.]

**Remark** Although compact, $H$ is infinite-dimensional and is homeomorphic to no subset of $\mathbb{R}^m$.

141. Prove that the Hilbert cube is perfect and homeomorphic to its Cartesian square, $H \cong H \times H$.

***142. Assume that $M$ is compact, nonempty, perfect, and homeomorphic to its Cartesian square, $M \cong M \times M$. Must $M$ be homeomorphic to the Cantor set, the Hilbert cube, or some combination of them?

143. A Peano space is a metric space $M$ that is the continuous image of the unit interval: There is a continuous surjection $\tau : [0, 1] \to M$. Theorem 72 states the amazing fact that the 2-disc is a Peano space. Prove that every Peano space is

(a) compact,
(b) nonempty,
(c) path-connected,

*(d) and locally path-connected*, in the sense that for each $p \in M$ and each neighborhood $U$ of $p$ there is a smaller neighborhood $V$ of $p$ such that any two points of $V$ can be joined by a path in $U$.

*144. The converse to Exercise 143 is the Hahn-Mazurkiewicz Theorem. Assume that a metric space $M$ is a compact, nonempty, path-connected, and locally path-connected. Use the Cantor Surjection Theorem 70 to show that $M$ is a Peano space. [The key is to make uniformly short paths to fill in the gaps of $[0, 1] \setminus C$.]