13 Inheritance Principle Every metric subspace $N$ of $M$ inherits its topology from $M$ in the sense that each subset $V \subset N$ which is open in $N$ is actually the intersection $V = N \cap U$ for some $U \subset M$ that is open in $M$, and vice versa.

Proof It all boils down to the fact that for each $p \in N$ we have

$$N_rp = N \cap M_rp.$$

After all, $N_rp$ is the set of $x \in N$ such that $d_N(x,p) < r$ and this is exactly the same as the set of those $x \in M_rp$ that belong to $N$. Therefore $N$ inherits its $r$-neighborhoods from $M$. Since its open sets are unions of its $r$-neighborhoods, $N$ also inherits its open sets from $M$.

In more detail, if $V$ is open in $N$ then it is the union of those $N_rp$ with $N_rp \subset V$. Each such $N_rp$ is $N \cap M_rp$ and the union of these $M_rp$ is $U$, an open subset of $M$. The intersection $N \cap U$ equals $V$. Conversely, if $U$ is any open subset of $M$ and $p \in V = N \cap U$ then openness of $U$ implies there is an $M_rp \subset U$. Thus $N_rp = N \cap M_rp \subset V$, which shows that $V$ is open in $N$.

14 Corollary Every metric subspace of $M$ inherits its closed sets from $M$.

Proof By “inheriting its closed sets” we mean that each closed subset $L \subset N$ is the intersection $N \cap K$ for some closed subset $K \subset M$ and vice versa. The proof consists of two words: “Take complements.” See also Exercise 34.

Let’s return to the example with $\mathbb{Q} \subset \mathbb{R}$ and $S = \{x \in \mathbb{Q} : -\pi < x < \pi\}$. The set $S$ is clopen in $\mathbb{Q}$, so we should have $S = \mathbb{Q} \cap U$ for some open set $U \subset \mathbb{R}$ and $S = \mathbb{Q} \cap K$ for some closed set $K \subset \mathbb{R}$. In fact $U$ and $K$ are

$$U = (-\pi, \pi) \quad \text{and} \quad K = [-\pi, \pi].$$

15 Corollary Assume that $N$ is a metric subspace of $M$ and also is a closed subset of $M$. A set $L \subset N$ is closed in $N$ if and only if it is closed in $M$. Similarly, if $N$ is a metric subspace of $M$ and also is an open subset of $M$ then $U \subset N$ is open in $N$ if and only if it is open in $M$.

Proof The proof is left to the reader as Exercise 34.