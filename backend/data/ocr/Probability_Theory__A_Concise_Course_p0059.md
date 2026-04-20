9. Chebyshev’s Inequality. The Variance and Correlation Coefficient

By the mean square value of a (real) random variable $\xi$ is meant the quantity $E\xi^2$, equal to

$$E\xi^2 = \sum_{-\infty}^{\infty} x^2 P_{\xi}(x)$$

if $\xi$ is discrete, or

$$E\xi^2 = \int_{-\infty}^{\infty} x^2 p_{\xi}(x) \, dx$$

if $\xi$ is continuous. Given any random variable $\xi$ and any number $\varepsilon > 0$, let

$$\xi_1 = \begin{cases} 0 & \text{if } |\xi| < \varepsilon, \\ \varepsilon^2 & \text{if } |\xi| > \varepsilon. \end{cases}$$

Then obviously $\xi_1 \leqslant \xi^2$, and hence, by (4.13),

$$E\xi_1 \leqslant E\xi^2,$$

or equivalently

$$\varepsilon^2 P\{|\xi| > \varepsilon\} \leqslant E\xi^2,$$

since clearly

$$E\xi_1 = \varepsilon^2 P\{|\xi| > \varepsilon\}.$$

It follows that

$$P\{|\xi| > \varepsilon\} \leqslant \frac{1}{\varepsilon^2} E\xi^2,$$

(4.21)

a result known as Chebyshev’s inequality. According to (4.21), if $E\xi^2/\varepsilon^2 \leqslant \delta$, then $P\{|\xi| > \varepsilon\} \leqslant \delta$, and hence $P\{|\xi| < \varepsilon\} \geqslant 1 - \delta$. Therefore, if $\delta$ is small, it is highly probable that $|\xi| \leqslant \varepsilon$. In particular, if $E\xi^2 = 0$, then $P\{|\xi| > \varepsilon\} = 0$ for every $\varepsilon > 0$, and hence $\xi = 0$ with probability 1.

By the variance or dispersion of a random variable $\xi$, denoted by $D\xi$, we mean the mean square value $E(\xi - a)^2$ of the difference $\xi - a$, where $a = E\xi$ is the mean value of $\xi$. It follows from

$$E(\xi - a)^2 = E\xi^2 - 2aE\xi + a^2 = E\xi^2 - 2a^2 + a^2$$

that

$$D\xi = E\xi^2 - a^2.$$

Obviously

$$D1 = 0,$$

and

$$D(c\xi) = c^2D\xi$$

for an arbitrary constant $c$.

10 It is assumed, of course, that $E\xi^2$ exists. This is not always the case (see e.g., Problem 24, p. 53).