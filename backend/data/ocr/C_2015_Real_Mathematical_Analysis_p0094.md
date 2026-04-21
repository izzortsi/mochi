35 Corollary If in addition to being nested, nonempty, and compact, the sets $A_n$ have diameter that tends to 0 as $n \to \infty$ then $A = \bigcap A_n$ is a single point.

Proof For each $n \in \mathbb{N}$, $A$ is a subset of $A_n$, which implies that $A$ has diameter zero. Since distinct points lie at positive distance from each other, $A$ consists of at most one point, while by Theorem 34 it consists of at least one point. See also Exercise 52.

Figure 39 This nested sequence has empty intersection.

Figure 39 shows a nested sequence of nonempty noncompact sets with empty intersection. They are the open discs with center $(1/n, 0)$ on the $x$-axis and radius $1/n$. They contain no common point. (Their closures do intersect at a common point, the origin.)

Continuity and Compactness

Next we discuss how compact sets behave under continuous transformations.

36 Theorem If $f : M \to N$ is continuous and $A$ is a compact subset of $M$ then $fA$ is a compact subset of $N$. That is, the continuous image of a compact is compact.

Proof Suppose that $(b_n)$ is a sequence in $fA$. For each $n \in \mathbb{N}$ choose a point $a_n \in A$ such that $f(a_n) = b_n$. By compactness of $A$ there exists a subsequence $(a_{n_k})$ that converges to some point $p \in A$. By continuity of $f$ it follows that

$$b_{n_k} = f(a_{n_k}) \rightarrow fp \in fA$$