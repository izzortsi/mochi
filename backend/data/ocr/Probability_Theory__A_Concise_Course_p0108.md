where the permutation $(i_k, i_1, \ldots)$ is obtained from $(i_1, \ldots, i_m)$ by choosing some $i_k$ and moving it into the first position. The limiting probabilities $p^*_{(j_1, \ldots, j_m)}$ are the solution of the system of linear equations

$$p^*_{(j_1, \ldots, j_m)} = p_{j_1} \sum_{(j'_1, \ldots, j'_m)} p^*_{(j'_1, \ldots, j'_m)},$$

(7.29)

where $(j'_1, \ldots, j'_m)$ ranges over the $m$ permutations

$$(j_1, j_2, j_3, \ldots, j_m), (j_2, j_1, j_3, \ldots, j_m), \ldots, (j_1, j_2, \ldots, j_m, j_1)$$

which give $(j_1, \ldots, j_m)$ when $j_1$ is moved into the first position.

After a sufficiently large number of steps, a stationary distribution will be virtually established, i.e., the book pile will occupy the states $(i_1, \ldots, i_m)$ with virtually unchanging probabilities $p^*_{(i_1, \ldots, i_m)}$. Clearly, the probability of finding the $i$th book on top of the pile is then

$$p^*_i = \sum_{i_2, \ldots, i_m} p^*_{(i_i, i_2, \ldots, i_m)},$$

and hence, by (7.29),

$$p^*_i = \sum_{i_2, \ldots, i_m} p_i \sum_{(j'_1, \ldots, j'_m)} p^*_{(j'_1, \ldots, j'_m)},$$

where $(i'_1, \ldots, i_m)$ ranges over the $m$ permutations

$$(i, i_2, i_3, \ldots, i_m), (i_2, i, i_3, \ldots, i_m), \ldots, (i_2, i_3, \ldots, i_m, i)$$

which give $(i, i_2, \ldots, i_m)$ when $i$ is moved into the first position. But then

$$p^*_i = p_i \sum_{i_1, \ldots, i_m} p^*_{(i_1, \ldots, i_m)} = p_i, \quad i = 1, \ldots, m,$$

i.e., the limiting probability $p^*_i$ of finding the $i$th book on top of the pile is just the probability $p_i$ with which the $i$th book is chosen. Thus, the more often a book is chosen, the greater the probability of its ending up on top of the pile (which is hardly surprising!).

**Example 2.** Consider the one-dimensional random walk with transition probabilities (7.12). If $p \neq q$, then the particle gradually moves further and further away from the origin, in the positive direction if $p > q$ and in the negative direction if $p < q$. If $p = q$, the particle will return infinitely often to each state, but for any fixed $j$, the probability $p_j(n)$ of the particle being at the point $j$ approaches 0 as $n \to \infty$ (why?). Hence, in any case,

$$\lim_{n \to \infty} p_j(n) = p^*_j = 0$$

for every $j$, but the numbers $p^*_j, j = 1, 2, \ldots$ cannot be interpreted as the limiting probabilities, since they are all zero. In particular, there is no stationary distribution.