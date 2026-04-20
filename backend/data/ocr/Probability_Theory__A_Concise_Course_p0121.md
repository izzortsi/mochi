for all $t > 0$. To show this, we first observe that $p_{ii}(t)$ is positive for sufficiently small $t$, being a continuous function (why?) satisfying the condition $p_{ii}(0) = 1$. But, because of (8.4),

$$p_{ii}(s + t) \geq p_{ii}(s)p_{ii}(t)$$

for arbitrary $s$ and $t$, and hence $p_{ii}(t)$ is positive for all $t$.

To show that $p_{ij}(t)$, $i \neq j$ is also positive for all $t$, thereby proving (8.26) and the theorem, we note that

$$p_{ij}(s) > 0$$

for some $s$, since $\varepsilon_j$ is accessible from $\varepsilon_i$. But

$$p_{ij}(t) \geq p_{ij}(u)p_{ij}(t - u), \quad u \leq t,$$

again by (8.4), where, as just shown, $p_{ij}(t - u)$ is always positive. Hence it suffices to show that $p_{ij}(u) > 0$ for some $u \leq t$. Consider a Markov chain with the same states $\varepsilon_1, \ldots, \varepsilon_m$ and transition probabilities

$$p_{ij} = p_{ij}\left(\frac{s}{n}\right),$$

where $n$ is an integer such that

$$n \geq m \frac{s}{t}.$$

Since

$$p_{ij}\left(n \frac{s}{n}\right) > 0,$$

the state $\varepsilon_j$ is accessible from $\varepsilon_i$. But it is easy to see that $\varepsilon_j$ is accessible from $\varepsilon_i$ not only in $n$ steps, but also in a number of steps $n_0$ no greater than the total number of states $m$ (think this through). Therefore

$$p_{ij}\left(n_0 \frac{s}{n}\right) > 0,$$

where

$$n_0 \frac{s}{n} = u \leq t.$$

The limiting probabilities $p_j^*, j = 1, \ldots, m$ form a stationary distribution in the same sense as on p. 96. More exactly, if we choose the initial distribution

$$p_j^0 = p_j^*, \quad j = 1, \ldots, m,$$

then

$$p_j(t) \equiv p_j^*, \quad j = 1, \ldots, m,$$

i.e., the probability of the system being in the state $\varepsilon_j$ remains unchanged