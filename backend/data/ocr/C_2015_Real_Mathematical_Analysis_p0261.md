To prove (24) we write $\lambda = e^{-\mu}$ for $\mu > 0$, and reason similarly:

$$\sum_{k=r}^{\infty} \binom{k}{r} \lambda^k = \sum_{k=r}^{\infty} \frac{k(k-1)(k-2) \ldots (k-r+1)}{r!} e^{-k\mu}$$
$$\leq \frac{1}{r!} \sum_{k=r}^{\infty} k^r e^{-k\mu} \sim \frac{1}{r!} \int_{r}^{\infty} x^r e^{-\mu x} dx$$
$$= \frac{-1}{r!} e^{-\mu x} \left( \frac{x^r}{\mu} + \frac{rx^{r-1}}{\mu^2} + \frac{r(r-1)x^{r-2}}{\mu^3} + \cdots + \frac{r!}{\mu^{r+1}} \right) \Bigg|_r^\infty$$
$$\leq \frac{1}{r!} e^{-\mu r}(r+1)r^r \left( \frac{1}{\min(1,\mu)} \right)^{r+1}.$$

According to (23) the $r^{\text{th}}$ root of this quantity tends to $e^{1-\mu}/\min(1,\mu)$ as $r \to \infty$, completing the proof of (24).

**Proof of Theorem 27** By assumption the power series $\sum c_k h^k$ has radius of convergence $R$ and $\sigma < R$. Since $1/R$ is the limsup of $\sqrt[k]{|c_k|}$ as $k \to \infty$, there is a number $\lambda < 1$ such that for all large $k$ we have $|c_k \sigma^k| \leq \lambda^k$. Differentiating the series term by term with $|h| \leq \sigma$ gives

$$|f^{(r)}(x+h)| \leq \sum_{k=r}^{\infty} k(k-1)(k-2) \ldots (k-r+1)|c_k h^{k-r}|$$
$$\leq \frac{r!}{\sigma^r} \sum_{k=r}^{\infty} \binom{k}{r}|c_k \sigma^k| \leq \frac{r!}{\sigma^r} \sum_{k=r}^{\infty} \binom{k}{r}\lambda^k$$

for $r$ large. Thus,

$$M_r = \sup_{|h| \leq \sigma} |f^{(r)}(x+h)| \leq \frac{r!}{\sigma^r} \sum_{k=r}^{\infty} \binom{k}{r}\lambda^k.$$

According to (24),

$$\alpha = \limsup_{r \to \infty} \sqrt[r]{M_r/r!} \leq \frac{1}{\sigma} \limsup_{r \to \infty} \sqrt[r]{\sum_{k=r}^{\infty} \binom{k}{r}\lambda^k} < \infty,$$

and $f$ has bounded derivative growth rate on $I$.

From Theorems 26 and 27 we deduce the main result of this section.

**28 Analyticity Theorem** A smooth function is analytic if and only if it has locally bounded derivative growth rate.