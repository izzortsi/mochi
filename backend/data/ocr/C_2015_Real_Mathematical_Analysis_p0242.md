since $k \in K_2$ implies that $(k - nx)^2 \geq (n\delta)^2$. This implies that

$$\sum_{k \in K_2} r_k(x) \leq \frac{nx(1 - x)}{(n\delta)^2} \leq \frac{1}{4n\delta^2}$$

since $\max x(1 - x) = 1/4$ as $x$ varies in $[0, 1]$. The factors $|c_k - f(x)|$ in the second sum are at most $2M$ where $M = \|f\|$. Thus the second sum is

$$\sum_{k \in K_2} |c_k - f(x)| r_k(x) \leq \frac{M}{2n\delta^2} \leq \frac{\epsilon}{2}$$

when $n$ is large, completing the proof that $|p_n(x) - f(x)| < \epsilon$ when $n$ is large.

It remains to check the identities (2) and (3). The binomial coefficients satisfy

$$(x + y)^n = \sum_{k=0}^{n} \binom{n}{k} x^k y^{n-k},$$

which becomes (2) if we set $y = 1 - x$. On the other hand, if we fix $y$ and differentiate (4) with respect to $x$ once, and then again, we get

$$n(x + y)^{n-1} = \sum_{k=0}^{n} \binom{n}{k} kx^{k-1}y^{n-k},$$

$$n(n-1)(x + y)^{n-2} = \sum_{k=0}^{n} \binom{n}{k} k(k-1)x^{k-2}y^{n-k}.$$

Note that the bottom term in (5) and the bottom two terms in (6) are 0. Multiplying (5) by $x$ and (6) by $x^2$ and then setting $y = 1 - x$ in both equations gives

$$nx = \sum_{k=0}^{n} \binom{n}{k} kx^k(1 - x)^{n-k} = \sum_{k=0}^{n} kr_k(x),$$

$$n(n-1)x^2 = \sum_{k=0}^{n} \binom{n}{k} k(k-1)x^k(1 - x)^{n-k} = \sum_{k=0}^{n} k(k-1)r_k(x).$$

The last sum is $\sum k^2 r_k(x) - \sum kr_k(x)$. Hence (7) and (8) become

$$\sum_{k=0}^{n} k^2 r_k(x) = n(n-1)x^2 + \sum_{k=0}^{n} kr_k(x) = n(n-1)x^2 + nx.$$