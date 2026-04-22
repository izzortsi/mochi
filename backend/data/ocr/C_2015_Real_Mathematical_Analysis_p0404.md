Proof The notation $E_k \uparrow E$ means that $E_1 \subset E_2 \subset \ldots$ and $E = \bigcup E_k$. Write $E$ disjointly as $E = \bigsqcup E_k'$ where $E_k' = E_k \setminus (E_1 \cup \ldots \cup E_{k-1})$. Countable additivity for measurable sets gives

$$\omega E = \sum_{n=1}^{\infty} \omega E_n'.$$

Also, the $k^{\text{th}}$ partial sum of the series equals $\omega E_k$, so $\omega E_k$ converges upward to $\omega E$. The notation $F_k \downarrow F$ means that $F_1 \supset F_2 \supset \ldots$ and $F = \bigcap F_k$. Write $F_1$ disjointly as

$$F_1 = \left( \bigsqcup_{k=1}^{\infty} F_k' \right) \sqcup F$$

where $F_k' = F_k \setminus F_{k+1}$. Then $F_k = \bigsqcup_{n \geq k} F_n' \sqcup F$. The countable additivity formula for measurable sets

$$\omega F_1 = \omega F + \sum_{n=1}^{\infty} \omega F_n'$$

plus finiteness of $\omega F_1$ implies that the series converges to a finite limit, so its tails converge to zero. That is,

$$\omega F_k = \sum_{n=k}^{\infty} \omega F_n' + \omega F$$

converges downward to $\omega F$ as $k \to \infty$.

3 Meseomorphism

An isomorphism preserves algebraic structure. A homeomorphism preserves topological structure. A diffeomorphism preserves smooth structure. A “meseomorphism” preserves measure structure. More precisely, if $M$ and $M'$ are sets with outer measures $\omega$ and $\omega'$ then a **meseomorphism** is a bijection $T : M \to M'$ such that $E \mapsto TE$ is a bijection $\mathcal{M} \to \mathcal{M}'$, where $\mathcal{M}$ and $\mathcal{M}'$ are the collections of measurable subsets of $M$ and $M'$. If $m'(TE) = mE$ for all measurable $E$ then $T$ is a **meseometry**.

7 Theorem If a bijection increases outer measure by at most a factor $t$ and its inverse increases outer measure by at most a factor $1/t$ then it is a meseomorphism. If $t = 1$ then it is a meseometry.

Proof Let $T : M \to M'$ be the bijection where $M$ and $M'$ are equipped with outer measures $\omega$ and $\omega'$. For each $X \subset M$ we have

$$\omega X = \omega(T^{-1} \circ T(X)) \leq t^{-1} \omega'(TX) \leq t^{-1} t \omega X = \omega X.$$