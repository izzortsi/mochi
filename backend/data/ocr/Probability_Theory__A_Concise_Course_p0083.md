The generating function $F_{\xi_k}(z)$ of each summand is clearly $pz + q$, and hence, by (6.7), the generating function of $\xi$ itself is

$$F_{\xi}(z) = (pz + q)^n. \tag{6.8}$$

Now let $\xi_n, n = 1, 2, \ldots$ be a sequence of discrete random variables taking the values 0, 1, 2, $\ldots$, with probability distributions $P_n(k) = P_{\xi_n}(k)$ and generating functions $F_n(z), n = 1, 2, \ldots$. Then the sequence of distributions $\{P_n(k)\}$ is said to converge weakly to the limiting distribution $P(k)$ if

$$\lim_{n \to \infty} P_n(k) = P(k) \tag{6.9}$$

for all $k = 0, 1, 2, \ldots$.

**Example 3 (Weak convergence of the binomial distribution to the Poisson distribution).** Let $\xi_1, \xi_2, \ldots$ be a sequence of random variables such that $\xi_n$ has a binomial distribution $P_n(k)$ with parameters $p$ and $n$, i.e.,

$$P_n(k) = C_k^n p^k q^{n-k}, \quad q = 1 - p.$$

Suppose $p$ depends on $n$ in such a way that the limit

$$\lim_{n \to \infty} np = a \tag{6.10}$$

exists. Then, according to formula (5.5), p. 55, the sequence of distributions $\{P_n(k)\}$ converges weakly to the Poisson distribution

$$P(k) = \frac{a^k}{k!} e^{-a}, \quad k = 0, 1, 2, \ldots$$

with parameter $a$ given by (6.10).

In Example 3, the sequence of generating functions

$$F_n(z) = (pz + q)^n, \quad n = 1, 2, \ldots$$

of the random variables $\xi_1, \xi_2, \ldots$ converges uniformly to the generating function $F(z) = e^{a(z-1)}$ of the limiting Poisson distribution, i.e.,

$$\lim_{n \to \infty} F_n(z) = \lim_{n \to \infty} \left[ 1 + p(z-1) \right]^n = \lim_{n \to \infty} \left[ 1 + \frac{a(z-1)}{n} \right]^n = e^{a(z-1)}$$

(justify the next-to-the-last step). This is no accident, as shown by

**Theorem 6.2.** The sequence of probability distributions $P_n(k), n = 1, 2, \ldots$ with generating functions $F_n(z), n = 1, 2, \ldots$ converges weakly to