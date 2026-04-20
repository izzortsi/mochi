(C denotes a constant). In fact, we need only note that

$$e^{i\xi t} = 1 + i\xi t - \frac{\xi^2}{2} t^2 + \theta,$$

(6.22)

by Taylor's formula, where

$$|\theta| \leqslant C |\xi|^3 t^3.$$

We then get (6.21) by taking the mathematical expectation of both sides of (6.22). In particular, it follows from (6.21) that the mean $a = \mathbf{E}\xi$ and variance $\sigma^2 = \mathbf{D}\xi$ are given by the formulas

$$a = -if'(\xi), \quad \sigma^2 = -f''(\xi) + [f'(\xi)]^2.$$

(6.23)

**Example 2.** According to (6.23), the normally distributed random variable $\xi$ with probability density (6.17) has mean

$$a = -if'(0) = 0$$

and variance

$$\sigma^2 = -f''(0) = 1.$$

Formula (6.7) has a natural analogue for characteristic functions. In fact, if $\xi_1, \ldots, \xi_n$ are independent random variables with sum $\xi = \xi_1 + \ldots + \xi_n$, then, by formula (4.20), p. 47, the characteristic function of $\xi$ is

$$f_\xi(t) = f_{\xi_1}(t) \cdots f_{\xi_n}(t).$$

(6.24)

Let $\xi_n, n = 1, 2, \ldots$ be a sequence of random variables with characteristic functions $f_n(t), n = 1, 2, \ldots$. Then the sequence of probability distributions of $\xi_1, \xi_2, \ldots$ is said to converge weakly to the distribution with density $p(x)$ if

$$\lim_{n \to \infty} \mathbf{P}\left\{x' \leqslant \xi_n \leqslant x''\right\} = \int_{\alpha'}^{\alpha'} p(x) \, dx$$

for all $x'$ and $x''$ ($x' \leqslant x''$). This should be compared with the definition of weak convergence for discrete random variables taking the values 0, 1, 2, $\ldots$ given in Sec. 13.

Theorem 6.2 has a natural analogue for characteristic functions, whose proof will not be given here:

**Theorem 6.2.'** The sequence of probability distributions with characteristic functions $f_n(t), n = 1, 2, \ldots$ converges weakly to the limiting distribution with density $p(x)$ if and only if

$$\lim_{n \to \infty} f_n(t) = f(t),$$

(6.11')