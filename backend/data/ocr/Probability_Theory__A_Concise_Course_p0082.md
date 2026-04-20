then $\xi$ has the generating function

$$F_{\xi}(z) = \sum_{k=0}^{\infty} \frac{a^k}{k!} e^{-a} z^k = e^{-a} \sum_{k=0}^{\infty} \frac{(az)^k}{k!} = e^{a(z-1)}. \tag{6.5}$$

Suppose the random variable $\xi$ has mean $a = \mathbf{E}\xi$ and variance $\sigma^2 = \mathbf{D}\xi$. Then, differentiating (6.4) twice with respect to $z$ behind the expectation sign and setting $z = 1$, we get

$$a = \mathbf{E}\xi = F'(1), \quad \sigma^2 = \mathbf{E}\xi^2 - (\mathbf{E}\xi)^2 = F''(1) + F'(1) - [F'(1)]^2. \tag{6.6}$$

The same formulas can easily be deduced from the power series (6.3). In fact, differentiating (6.3) for $|z| < 1$, we get

$$F'(z) = \sum_{k=0}^{\infty} kP_{\xi}(k)z^{k-1},$$

and hence

$$a = \sum_{k=0}^{\infty} kP_{\xi}(k) = \lim_{z \to 1} F'_{\xi}(z) = F'_{\xi}(1),$$

and similarly for the second of the formulas (6.6).

Next let $\xi_1, \ldots, \xi_n$ be $n$ independent random variables taking the values 0, 1, 2, $\ldots$. Then the random variables $z^{\xi_1}, \ldots, z^{\xi_n}$, where $z$ is a fixed number, are also independent. It follows from formula (4.20), p. 47 that

$$\mathbf{E}z^{(\xi_1 + \cdots + \xi_n)} = \mathbf{E}z^{\xi_1} \cdots z^{\xi_n} = \mathbf{E}z^{\xi_1} \cdots \mathbf{E}z^{\xi_n}.$$

Thus we have the formula

$$F_{\xi}(z) = F_{\xi_1}(z) \cdots F_{\xi_n}(z), \tag{6.7}$$

expressing the generating function $F_{\xi}(z) = \mathbf{E}z^{\xi}$ of the sum $\xi = \xi_1 + \cdots + \xi_n$ of the $n$ random variables $\xi_1, \ldots, \xi_n$ in terms of the generating functions $F_{\xi_k}(z) = \mathbf{E}z^{\xi_k}$, $k = 1, \ldots, n$ of the separate summands.

**Example 2 (The binomial distribution).** Suppose the random variable $\xi$ has a binomial distribution with parameters $p$ and $n$, so that

$$P_{\xi}(k) = C_k^n p^k q^{n-k}, \quad q = 1 - p, \quad k = 0, 1, \ldots, n.$$

Then, as already noted in Sec. 10, $\xi$ can be regarded as the sum $\xi = \xi_1 + \cdots + \xi_n$ of $n$ independent random variables $\xi_1, \ldots, \xi_n$, where

$$\xi_k = \begin{cases} 1 \text{ with probability } p, \\ 0 \text{ with probability } q. \end{cases}$$