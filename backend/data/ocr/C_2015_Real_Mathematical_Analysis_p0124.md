Figure 55 Filling in the Cantor surjection $\sigma$ to make a Peano space-filling curve $\tau$

74 Cantor Partition Lemma Given a Cantor space $M$ and $\epsilon > 0$, there is a number $N$ such that for each $d \geq N$ there is a partition of $M$ into $d$ Cantor pieces of diameter $\leq \epsilon$. (We care most about dyadic $d$.)

Proof A partition of a set is a division of it into disjoint subsets. In this case the small Cantor pieces form a partition of the Cantor space $M$. Since $M$ is totally disconnected and compact, we can cover it with finitely many clopen neighborhoods $U_1, \ldots, U_m$ having diameter $\leq \epsilon$. To make the sets $U_i$ disjoint, define

$$V_1 = U_1$$
$$V_2 = U_1 \setminus U_2$$
$$\ldots$$
$$V_m = U_m \setminus (U_1 \cup \cdots \cup U_{m-1}).$$

If any $V_i$ is empty, discard it. This gives a partition $M = X_1 \sqcup \cdots \sqcup X_N$ into $N \leq m$ Cantor pieces of diameter $\leq \epsilon$.