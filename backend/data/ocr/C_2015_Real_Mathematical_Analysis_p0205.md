which is a finite real number. An increasing, bounded sequence converges to a limit, so the tail of the series $\sum |a_k|$ converges and the whole series $\sum |a_k|$ converges. Absolute convergence implies convergence.

The proof of (b) is left as Exercise 58.

**Example** The $p$-series $\sum 1/k^p$ converges when $p > 1$ and diverges when $p \leq 1$.

**Case 1.** $p > 1$. By the Fundamental Theorem of Calculus and differentiation,

$$\int_1^b \frac{1}{x^p} dx = \frac{b^{1-p} - 1}{1-p} \rightarrow \frac{1}{p-1}$$

as $b \rightarrow \infty$. The improper integral converges and dominates the $p$-series, which implies convergence of the series by the integral test.

**Case 2.** $p \leq 1$. The $p$-series dominates the improper integral

$$\int_1^b \frac{1}{x^p} dx = \begin{cases} \log b & \text{if } p = 1 \\ \frac{b^{1-p} - 1}{1-p} & \text{if } p < 1. \end{cases}$$

As $b \rightarrow \infty$, these quantities blow up, and the integral test implies divergence of the series. When $p = 1$ we have the harmonic series, which we have just shown to diverge.

The exponential growth rate of the series $\sum a_k$ is

$$\alpha = \limsup_{k \to \infty} \sqrt[k]{|a_k|}.$$

**Example** $\sum \alpha^k$ has exponential growth rate $\alpha$.

**42 Root Test** Let $\alpha$ be the exponential growth rate of a series $\sum a_k$. If $\alpha < 1$ then the series converges, if $\alpha > 1$ then the series diverges, and if $\alpha = 1$ then the root test is inconclusive.

**Proof** If $\alpha < 1$ then we fix a constant $\beta$ with

$$\alpha < \beta < 1.$$

Then for all large $k$ we have $|a_k|^{1/k} \leq \beta$; i.e., $|a_k| \leq \beta^k$, which gives convergence of $\sum a_k$ by comparison to the geometric series $\sum \beta^k$.

If $\alpha > 1$, choose $\beta$ with $1 < \beta < \alpha$. Then $|a_k| \geq \beta^k$ for infinitely many $k$. Since the terms $a_k$ do not converge to 0, the series diverges.