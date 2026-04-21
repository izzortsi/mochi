Figure 47 Small neighborhoods are like swollen points. $U$ has a positive Lebesgue number $\lambda$. The $\lambda$-neighborhood of each point in the cross-hatched set $A$ is wholly contained in at least one member of the covering.

Proof Suppose not: $U$ is an open covering of a sequentially compact set $A$, and yet for each $\lambda > 0$ there exists an $a \in A$ such that no $U \in U$ contains $M_\lambda a$. Take $\lambda = 1/n$ and let $a_n \in A$ be a point such that no $U \in U$ contains $M_{1/n}(a_n)$. By sequential compactness, there is a subsequence $(a_{n_k})$ converging to some point $p \in A$. Since $U$ is an open covering of $A$, there exist $r > 0$ and $U \in U$ with $M_r p \subset U$. If $k$ is large then $d(a_{n_k}, p) < r/2$ and $1/n_k < r/2$, which implies by the triangle inequality that

$$M_{1/n}(a_{n_k}) \subset M_r p \subset U,$$

contrary to the supposition that no $U \in U$ contains $M_{1/n}(a_n)$. We conclude that, after all, $U$ does have a Lebesgue number $\lambda > 0$. See Figure 48.

Proof that (b) implies (a) in Theorem 63 Let $U$ be an open covering of the sequentially compact set $A$. We want to reduce $U$ to a finite subcovering. By the Lebesgue Number Lemma, $U$ has a Lebesgue number $\lambda > 0$. Choose any $a_1 \in A$ and some $U_1 \in U$ such that

$$M_\lambda(a_1) \subset U_1.$$