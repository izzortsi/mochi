The preceding proof is subtle. The uniform inequality $d(f_n, f) < \epsilon$ is derived by nonuniform means – for each $x$ we make a separate estimate using an $m(x)$ depending nonuniformly on $x$. It is a case of the ends justifying the means.

Let $C^0 = C^0([a, b], \mathbb{R})$ denote the set of continuous functions $[a, b] \to \mathbb{R}$. Each $f \in C^0$ belongs to $C_b$ since a continuous function defined on a compact domain is bounded. That is, $C^0 \subset C_b$.

4 Corollary $C^0$ is a closed subset of $C_b$. It is a complete metric space.

Proof Theorem 1 implies that a limit in $C_b$ of a sequence of functions in $C^0$ lies in $C^0$. That is, $C^0$ is closed in $C_b$. A closed subset of a complete space is complete. $\square$

Just as it is reasonable to discuss the convergence of a sequence of functions we can also discuss the convergence of a series of functions $\sum f_k$. Merely consider the $n^{\text{th}}$ partial sum

$$F_n(x) = \sum_{k=0}^{n} f_k(x).$$

It is a function. If the sequence of functions $(F_n)$ converges to a limit function $F$ then the series converges, and we write

$$F(x) = \sum_{k=0}^{\infty} f_k(x).$$

If the sequence of partial sums converges uniformly then we say the series converges uniformly. If the series of absolute values $\sum |f_k(x)|$ converges then the series $\sum f_k$ converges absolutely.

5 Weierstrass M-test If $\sum M_k$ is a convergent series of constants and if $f_k \in C_b$ satisfies $\|f_k\| \leq M_k$ for all $k$ then $\sum f_k$ converges uniformly and absolutely.

Proof If $n > m$ then the partial sums of the series of absolute values telescope as

$$d(F_n, F_m) \leq d(F_n, F_{n-1}) + \cdots + d(F_{m+1}, F_m)$$

$$= \sum_{k=m+1}^{n} \|f_k\| \leq \sum_{k=m+1}^{n} M_k.$$

Since $\sum M_k$ converges, the last sum is $< \epsilon$ when $m, n$ are large. Thus $(F_n)$ is Cauchy in $C_b$, and by Theorem 3 it converges uniformly. $\square$