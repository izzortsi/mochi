Since $\mathcal{P}$ is nonempty, the same reasoning shows that there are dyadic fractions $s$ with large denominators such that $\bar{s}$ is not an upper bound for $\mathcal{P}$.

We assert that the least upper bound for $\mathcal{P}$ is the equivalence class $Q$ of the following Cauchy sequence $(q_0, q_1, q_2, \ldots)$.

(a) $q_0$ is the smallest integer such that $\bar{q}_0$ is an upper bound for $\mathcal{P}$.

(b) $q_1$ is the smallest fraction with denominator 2 such that $\bar{q}_1$ is an upper bound for $\mathcal{P}$.

(c) $q_2$ is the smallest fraction with denominator 4 such that $\bar{q}_2$ is an upper bound for $\mathcal{P}$.

(d) $\ldots$

(e) $q_n$ is the smallest fraction with denominator $2^n$ such that $\bar{q}_n$ is an upper bound for $\mathcal{P}$.

The sequence $(q_n)$ is well defined because some but not all dyadic fractions with denominator $2^n$ are upper bounds for $\mathcal{P}$. By construction $(q_n)$ is monotone decreasing and $q_{n-1} - q_n \leq 1/2^n$. Thus, if $m \leq n$ then

$$0 \leq q_m - q_n = q_m - q_{m+1} + q_{m+1} - q_{m+2} + \cdots + q_{n-1} - q_n$$

$$\leq \frac{1}{2^{m+1}} + \cdots + \frac{1}{2^n} < \frac{1}{2^m}.$$

It follows that $(q_n)$ is Cauchy and $Q = [(q_n)] \in \widehat{\mathbb{Q}}$.

Suppose that $Q$ is not an upper bound for $\mathcal{P}$. Then there is some $P = [(p_n)] \in \mathcal{P}$ with $Q \prec P$. By (1), there is an $\epsilon > 0$ and an $N$ such that for all $n \geq N$,

$$q_N + \epsilon < p_n.$$

It follows that $\bar{q_N} \prec P$, a contradiction to $\bar{q_N}$ being an upper bound for $\mathcal{P}$.

On the other hand suppose there is a smaller upper bound for $\mathcal{P}$, say $R = (r_n) \prec Q$. By (1) there are $\epsilon > 0$ and $N$ such that for all $m, n \geq N$,

$$r_m + \epsilon < q_n.$$

Fix a $k \geq N$ with $1/2^k < \epsilon$. Then for all $m \geq N$,

$$r_m < q_k - \epsilon < q_k - \frac{1}{2^k}.$$

By (1), $R \prec \bar{q_k} - 1/2^k$. Since $R$ is an upper bound for $\mathcal{P}$, so is $\bar{q_k} - 1/2^k$, a contradiction to $q_k$ being the smallest fraction with denominator $2^k$ such that $\bar{q_k}$ is an upper bound for $\mathcal{P}$. Therefore, $Q$ is indeed a least upper bound for $\mathcal{P}$.