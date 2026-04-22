26 Theorem If $\alpha \sigma < 1$ then the Taylor series converges uniformly to $f$ on the interval $I$.

Proof Choose $\delta > 0$ such that $(\alpha + \delta) \sigma < 1$. The Taylor remainder formula from Chapter 3, applied to the $(r - 1)^{\text{st}}$-order remainder, gives

$$f(x + h) - \sum_{k=0}^{r-1} \frac{f^{(k)}(x)}{k!} h^k = \frac{f^{(r)}(\theta)}{r!} h^r$$

for some $\theta$ between $x$ and $x + h$. Thus, for $r$ large we have

$$\left| f(x + h) - \sum_{k=0}^{r-1} \frac{f^{(k)}(x)}{k!} h^k \right| \leq \frac{M_r}{r!} \sigma^r = \left( \left( \frac{M_r}{r!} \right)^{1/r} \sigma \right)^r \leq ((\alpha + \delta) \sigma)^r.$$

Since $(\alpha + \delta) \sigma < 1$, the Taylor series converges uniformly to $f(x + h)$ on $I$.

27 Theorem If $f$ is expressed as a convergent power series $f(x + h) = \sum c_k h^k$ with radius of convergence $R > \sigma$ then $f$ has bounded derivative growth rate on $I$.

The proof of Theorem 27 uses two estimates about the growth rate of factorials. If you know Stirling’s formula they are easy, but we prove them directly.

(23) $$\lim_{r \to \infty} \sqrt[r]{r^r} = e$$

(24) $$0 < \lambda < 1 \Rightarrow \limsup_{r \to \infty} \sqrt[r]{\sum_{k=r}^{\infty} \binom{k}{r} \lambda^k} < \infty.$$

Taking logarithms, applying the integral test, and ignoring terms that tend to zero as $r \to \infty$ gives

$$\frac{1}{r} \left( \log r^r - \log r! \right) = \log r - \frac{1}{r} \left( \log r + \log(r - 1) + \cdots + \log 1 \right)$$

$$\sim \log r - \frac{1}{r} \int_1^r \log x \, dx = \log r - \frac{1}{r} \left( x \log x - x \right) \Bigg|_1^r = 1 - \frac{1}{r},$$

which tends to 1 as $r \to \infty$. This proves (23).