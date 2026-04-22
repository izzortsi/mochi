Figure 94 The seven basic Bernstein polynomials of degree 6,
$$\binom{6}{k} x^k (1-x)^{6-k}, k = 0, \ldots, 6$$

This gives

$$|p_n(x) - f(x)| \leq \sum_{k=0}^{n} |c_k - f(x)| r_k(x)$$
$$= \sum_{k \in K_1} |c_k - f(x)| r_k(x) + \sum_{k \in K_2} |c_k - f(x)| r_k(x).$$

The factors $|c_k - f(x)|$ in the first sum are less than $\epsilon/2$ since $c_k = f(k/n)$ and $k/n$ differs from $x$ by less than $\delta$. Since the sum of all the terms $r_k$ is 1 and the terms are nonnegative, the first sum is less than $\epsilon/2$. To estimate the second sum, use (3) to write

$$nx(1-x) = \sum_{k=0}^{n} (k-nx)^2 r_k(x) \geq \sum_{k \in K_2} (k-nx)^2 r_k(x)$$
$$\geq \sum_{k \in K_2} (n\delta)^2 r_k(x),$$