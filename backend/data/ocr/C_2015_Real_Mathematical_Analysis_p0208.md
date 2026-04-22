44 Radius of Convergence Theorem If $\sum c_k x^k$ is a power series then there is a unique $R$ with $0 \leq R \leq \infty$, its radius of convergence, such that the series converges whenever $|x| < R$, and diverges whenever $|x| > R$. Moreover $R$ is given by the formula

$$R = \frac{1}{\limsup_{k \to \infty} \sqrt[k]{|c_k|}}.$$

Proof Apply the root test to the series $\sum c_k x^k$. Then

$$\limsup_{k \to \infty} \sqrt[k]{|c_k x^k|} = |x| \limsup_{k \to \infty} \sqrt[k]{|c_k|} = \frac{|x|}{R}.$$

If $|x| < R$ the root test gives convergence. If $|x| > R$ it gives divergence.

There are power series with any given radius of convergence, $0 \leq R \leq \infty$. The series $\sum k^k x^k$ has $R = 0$. The series $\sum x^k/\sigma^k$ has $R = \sigma$ for $0 < \sigma < \infty$. The series $\sum x^k/k!$ has $R = \infty$. Eventually, we show that a function defined by a power series is analytic: It has all derivatives at all points and it can be expanded as a Taylor series at each point inside its radius of convergence, not merely at $x = 0$. See Section 6 in Chapter 4.