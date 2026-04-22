Proof Assume that $F : [a, b] \to \mathbb{R}$ is absolutely continuous and take $\epsilon = 1$. There is a $\delta > 0$ such that if $(a_i, b_i)$ are disjoint intervals in $[a, b]$ with total length $< \delta$ then

$$\sum_i b_i - a_i < \delta \Rightarrow \sum_i |F(b_i) - F(a_i)| < 1.$$

Fix a partition $X$ of $[a, b]$ with $M$ subintervals of length $< \delta$. For any partition $Y : a = y_0 < \ldots < y_n = b$ of $[a, b]$ we claim that $\sum_k |\Delta_k f| \leq M$, where $\Delta_k f = f(y_k) - f(y_{k-1})$. We may assume that $Y$ contains $X$ since adding points to a partition increases the sum $\sum |\Delta_k f|$. Then

$$\sum_Y |\Delta_k F| = \sum_{Y_1} |\Delta_k F| + \ldots + \sum_{Y_M} |\Delta_k F|$$

where $Y_j$ refers to the subintervals of $Y$ that lie in the $j^{\text{th}}$ subinterval of $X$. The subintervals in $Y_j$ have total length $< \delta$, so the variation of $F$ over them is $< 1$ and the total variation of $F$ is $< M$.

62 Corollary An absolutely continuous function is almost everywhere differentiable.

Proof Absolute continuity implies bounded variation implies almost everywhere differentiability.

As mentioned in Section 9, Theorem 55 plus Corollary 62 express Lebesgue’s Main Theorem,

Indefinite integrals are absolutely continuous and every absolutely continuous function has a derivative almost everywhere of which it is the indefinite integral.