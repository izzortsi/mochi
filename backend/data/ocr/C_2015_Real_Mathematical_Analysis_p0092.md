33 Heine-Borel Theorem Every closed and bounded subset of $\mathbb{R}^m$ is compact.

Proof Let $A \subset \mathbb{R}^m$ be closed and bounded. Boundedness implies that $A$ is contained in some box, which is compact. Since $A$ is closed, Theorem 32 implies that $A$ is compact. See also Exercise 11.

The Heine-Borel Theorem states that closed and bounded subsets of Euclidean space are compact, but it is vital† to remember that a closed and bounded subset of a general metric space may fail to be compact. For example, the set $\mathbb{N}$ of natural numbers equipped with the discrete metric is a complete metric space, it is closed in itself (as is every metric space), and it is bounded. But it is not compact. After all, what subsequence of $1, 2, 3, \ldots$ converges?

A more striking example occurs in the metric space $C([0, 1], \mathbb{R})$ whose metric is $d(f, g) = \max\{|f(x) - g(x)|\}$. The space is complete but its closed unit ball is not compact. For example, the sequence of functions $f_n = x^n$ has no subsequence that converges with respect to the metric $d$. In fact every closed ball is noncompact.

Ten Examples of Compact Sets

1. Any finite subset of a metric space, for instance the empty set.
2. Any closed subset of a compact set.
3. The union of finitely many compact sets.
4. The Cartesian product of finitely many compact sets.
5. The intersection of arbitrarily many compact sets.
6. The closed unit ball in $\mathbb{R}^3$.
7. The boundary of a compact set, for instance the unit 2-sphere in $\mathbb{R}^3$.
8. The set $\{x \in \mathbb{R} : \exists n \in \mathbb{N} \text{ and } x = 1/n\} \cup \{0\}$.
9. The Hawaiian earring. See page 58.
10. The Cantor set. See Section 8.

Nests of Compacts

If $A_1 \supset A_2 \supset \cdots \supset A_n \supset A_{n+1} \supset \ldots$ then $(A_n)$ is a nested sequence of sets. Its intersection is

$$\bigcap_{n=1}^{\infty} A_n = \{p : \text{for each } n \text{ we have } p \in A_n\}.$$

†I have asked variants of the following True or False question on every analysis exam I’ve given: “Every closed and bounded subset of a complete metric space is compact.” You would be surprised at how many students answer “True.”