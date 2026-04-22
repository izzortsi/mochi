Appendix E Determinants

A permutation of a set $S$ is a bijection $\pi : S \rightarrow S$. That is, $\pi$ is one-to-one and onto. We assume the set $S$ is finite, $S = \{1, \ldots, k\}$. The **sign** of $\pi$ is

$$\text{sgn}(\pi) = (-1)^r$$

where $r$ is the number of reversals – i.e., the number of pairs $i, j$ such that

$$i < j \text{ and } \pi(i) > \pi(j).$$

**56 Proposition** Every permutation is the composite of pair transpositions; the sign of a composite permutation is the product of the signs of its factors; and the sign of a pair transposition is $-1$.

The proof of this combinatorial proposition is left to the reader. Although the factorization of a permutation $\pi$ into pair transpositions is not unique, the number of factors, say $t$, satisfies $(-1)^t = \text{sgn}(\pi)$.

**Definition** The **determinant** of a $k \times k$ matrix $A$ is the sum

$$\det A = \sum_{\pi} \text{sgn}(\pi) a_{1\pi(1)} a_{2\pi(2)} \ldots a_{k\pi(k)}$$

where $\pi$ ranges through all permutations of $\{1, \ldots, k\}$.

Equivalent definitions appear in standard linear algebra courses. One of the key facts about determinants is the product rule: For two $k \times k$ matrices we have

$$\det AB = \det A \det B.$$

It extends to nonsquare matrices as follows.

**57 Cauchy-Binet Formula** Assume that $k \leq n$. If $A$ is a $k \times n$ matrix and $B$ is an $n \times k$ matrix, then the determinant of the product $k \times k$ matrix $AB = C$ is given by the formula

$$\det C = \sum_J \det A^J \det B_J,$$

where $J$ ranges through the set of ascending $k$-tuples in $\{1, \ldots, n\}$, $A^J$ is the $k \times k$ minor of $A$ whose column indices $j$ belong to $J$, while $B_J$ is the $k \times k$ minor of $B$ whose row indices $i$ belong to $J$. See Figure 132.