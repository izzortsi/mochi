To show that the root test is inconclusive when $\alpha = 1$, we must find two series, one convergent and the other divergent, both having exponential growth rate $\alpha = 1$. The examples are $p$-series. We have

$$\log \left( \frac{1}{k^p} \right)^{1/k} = \frac{-p \log(k)}{k} \sim \frac{-p \log(x)}{x} \sim \frac{-p/x}{1} \sim 0$$

by L’Hôpital’s Rule as $k = x \to \infty$. Therefore $\alpha = \lim_{k \to \infty} (1/k^p)^{1/k} = 1$ for all $p$-series. Since the square series $\sum 1/k^2$ converges and the harmonic series $\sum 1/k$ diverges the root test is inconclusive when $\alpha = 1$.

**43 Ratio Test** Let the ratio between successive terms of the series $\sum a_k$ be $r_k = |a_{k+1}/a_k|$, and set

$$\limsup_{k \to \infty} r_k = \rho \quad \liminf_{k \to \infty} r_k = \lambda.$$

If $\rho < 1$ then the series converges, if $\lambda > 1$ then the series diverges, and otherwise the ratio test is inconclusive.

**Proof** If $\rho < 1$, choose $\beta$ with $\rho < \beta < 1$. For all $k \geq$ some $K$, $|a_{k+1}/a_k| < \beta$; i.e.,

$$|a_k| \leq \beta^{k-K}|a_K| = C\beta^k$$

where $C = \beta^{-K}|a_K|$ is a constant. Convergence of $\sum a_k$ follows from comparison with the geometric series $\sum C\beta^k$. If $\lambda > 1$, choose $\beta$ with $1 < \beta < \lambda$. Then $|a_k| \geq \beta^k/C$ for all large $k$, and $\sum a_k$ diverges because its terms do not converge to 0. Again the $p$-series all have ratio limit $\rho = \lambda = 1$ and demonstrate the inconclusiveness of the ratio test when $\rho = 1$ or $\lambda = 1$.

Although it is usually easier to apply the ratio test than the root test, the latter has a strictly wider scope. See Exercises 61 and 65.

**Conditional Convergence**

If $(a_k)$ is a decreasing sequence in $\mathbb{R}$ that converges to 0 then its alternating series

$$\sum (-1)^{k+1} a_k = a_1 - a_2 + a_3 - \ldots$$

converges. For

$$A_{2n} = (a_1 - a_2) + (a_3 - a_4) + \ldots (a_{2n-1} - a_{2n})$$