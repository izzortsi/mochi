But $p = a/n$, and hence (5.2) gives

$$P_{\xi}(0) = q^n = \left(1 - \frac{a}{n}\right)^n \sim e^{-a}.$$

Moreover, it is easily found from (5.1) and (5.2) that

$$\frac{P_{\xi}(k)}{P_{\xi}(k-1)} = \frac{np - (k-1)p}{kq} \sim \frac{a}{k}$$

as $n \to \infty$. Therefore

$$P_{\xi}(1) \sim \frac{a}{1} P_{\xi}(0) \sim \frac{a}{1} e^{-a},$$

$$P_{\xi}(2) \sim \frac{a}{2} P_{\xi}(1) \sim \frac{a^2}{1 \cdot 2} e^{-a},$$

$$P_{\xi}(k) \sim \frac{a}{k} P_{\xi}(k-1) \sim \frac{a^k}{k!} e^{-a},$$

which proves the approximate formula (5.5).

A random variable $\xi$ taking only the integral values 0, 1, 2, ... is said to have a Poisson distribution if

$$P_{\xi}(k) = \frac{a^k}{k!} e^{-a}, \quad k = 0, 1, 2, \ldots$$

(5.6)

The distribution (5.6) is specified by a single positive parameter $a$, equal to the mean value of $\xi$:

$$a = \mathbf{E}\xi = \sum_{k=0}^{\infty} kP_{\xi}(k).$$

In fact, it follows from the expansion

$$e^x = \sum_{k=0}^{\infty} \frac{x^k}{k!},$$

valid for all $x$, that

$$\mathbf{E}\xi = \sum_{k=0}^{\infty} kP_{\xi}(k) = \sum_{k=0}^{\infty} k \frac{a^k}{k!} e^{-a} = ae^{-a} \sum_{k=1}^{\infty} \frac{a^{k-1}}{(k-1)!} = ae^{-a}e^a = a.$$

Remark. Thus the approximate formula (5.5) shows that the total number of successes in $n$ Bernoulli trials has an approximately Poisson distribution with parameter $a = np$, if $n$ is large and the probability of success $p$ is small.

Example 1 (The lottery ticket problem). How many lottery tickets must be bought to make the probability of winning at least $P$?