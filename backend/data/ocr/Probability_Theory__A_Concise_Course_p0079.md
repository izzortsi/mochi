12. The Law of Large Numbers

Consider $n$ independent identically distributed random variables $\xi_1, \ldots, \xi_n$. In particular, $\xi_1, \ldots, \xi_n$ have the same mean $a = \mathbf{E}\xi_k$ and variance $\sigma^2 = \mathbf{D}\xi_k$. If

$$\eta = \frac{1}{n} (\xi_1 + \cdots + \xi_n)$$

is the arithmetic mean of the variables $\xi_1, \ldots, \xi_n$, then

$$\mathbf{E}\eta = \frac{1}{n} \sum_{k=1}^{n} \mathbf{E}\xi_k = a,$$

$$\mathbf{D}\eta = \mathbf{E}(\eta - a)^2 = \frac{1}{n^2} \sum_{k=1}^{n} \mathbf{D}\xi_k = \frac{\sigma^2}{n}.$$

Applying Chebyshev's inequality (see Sec. 9) to the random variable $\eta - a$, we get the inequality

$$\mathbf{P} \{|\eta - a| > \varepsilon\} \leqslant \frac{1}{\varepsilon^2} \mathbf{E}(\eta - a)^2 = \frac{\sigma^2}{n\varepsilon^2}$$

for arbitrary $\varepsilon > 0$.

THEOREM 6.1 (Weak law of large numbers). Let $\xi_1, \ldots, \xi_n$ be $n$ independent identically distributed random variables with mean $a$ and variance $\sigma^2$. Then, given any $\delta > 0$ and $\varepsilon > 0$, however small, there is an integer