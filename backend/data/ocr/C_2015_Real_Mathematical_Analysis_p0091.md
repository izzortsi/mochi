To pass from $\mathbb{R}$ to $\mathbb{R}^m$ we think about compactness for Cartesian products.

**28 Theorem** *The Cartesian product of two compact sets is compact.*

**Proof** Let $(a_n, b_n) \in A \times B$ be given where $A \subset M$ and $B \subset N$ are compact. There exists a subsequence $(a_{n_k})$ that converges to some point $a \in A$ as $k \to \infty$. The subsequence $(b_{n_k})$ has a sub-subsequence $(b_{n_{k(\ell)}})$ that converges to some $b \in B$ as $\ell \to \infty$. The sub-subsequence $(a_{n_{k(\ell)}})$ continues to converge to the point $a$. Thus

$$(a_{n_{k(\ell)}}, b_{n_{k(\ell)}}) \to (a, b)$$

as $\ell \to \infty$. This implies that $A \times B$ is compact.

**29 Corollary** *The Cartesian product of $m$ compact sets is compact.*

**Proof** Write $A_1 \times A_2 \times \cdots \times A_m = A_1 \times (A_2 \times \cdots \times A_m)$ and perform induction on $m$. (Theorem 28 handles the bottom case $m = 2$.)

**30 Corollary** *Every box $[a_1, b_1] \times \cdots \times [a_m, b_m]$ in $\mathbb{R}^m$ is compact.*

**Proof** Obvious from Theorem 27 and the previous corollary.

An equivalent formulation of these results is the

**31 Bolzano-Weierstrass Theorem** *Every bounded sequence in $\mathbb{R}^m$ has a convergent subsequence.*

**Proof** A bounded sequence is contained in a box, which is compact, and therefore the sequence has a subsequence that converges to a limit in the box. See also Exercise 11.

Here is a simple fact about compacts.

**32 Theorem** *Every closed subset of a compact is compact.*

**Proof** If $A$ is a closed subset of the compact set $K$ and if $(a_n)$ is a sequence of points in $A$ then clearly $(a_n)$ is also a sequence of points in $K$, so by compactness of $K$ there is a subsequence $(a_{n_k})$ converging to a limit $p \in K$. Since $A$ is closed, $p$ lies in $A$ which proves that $A$ is compact.

Now we come to the first partial converse to Theorem 26.