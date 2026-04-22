Take any $a \in A \setminus U_{N-1}$. Since $U_{N-1}$ is compact and $\mathcal{V}_1$ is Vitali, there is a ball $B \in \mathcal{V}_1$ such that $a \in B$ and $B \cap U_{N-1} = \emptyset$. That is, $B \in \mathcal{V}_N$. Assume that (7) fails. Then, for all $k \geq N$ we have

$$a \notin 5V_k.$$

Therefore $B \notin 5V_N$. Figure 150 shows that due to the choice of $V_N$ with roughly maximal diameter, the fact that $5V_N$ fails to contain $B$ implies that $V_N$ is disjoint from $B$, so $B \in \mathcal{V}_{N+1}$. This continues for all $k > N$; namely for all $k > N$ we have $B \in \mathcal{V}_k$.

**Figure 150** The unchosen ball $B$

Aha!

$B$ was available for choice as the next $V_k$, $k > N$, but it was never chosen. Therefore the chosen $V_k$ has a diameter at least half as large as that of $B$. The latter diameter is fixed, but (6) states that the former diameter tends to 0 as $k \to \infty$, a contradiction. Thus (7) is true.

It is easy to see that (7) implies (c). For let $\delta > 0$ be given. Choose $N$ so large that

$$\sum_{k=N}^{\infty} m(V_k) < \frac{\delta}{5^n}$$