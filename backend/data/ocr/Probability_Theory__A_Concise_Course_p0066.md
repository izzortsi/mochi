elementary event $\omega$. The number of distinct elementary events with the same total number of successes $k$ is just the number of distinct sequences consisting of $k$ ones and $n-k$ zeros. But the number of such sequences is just the binomial coefficient

$$C_k^n = \binom{n}{k} = \frac{n!}{k! (n-k)!},$$

(5.1)

equal to the number of combinations of $n$ things taken $k$ at a time (recall Theorem 1.3, p. 7). These $C_k^n$ elementary events all have the same probability

$$P(\omega) = p^k q^{n-k},$$

and hence the event $\{\xi = k\}$ has probability

$$P(\xi = k) = C_k^n p^k q^{n-k}.$$

Thus the probability distribution of the random variable $\xi$ is given by

$$P_\xi(k) = C_k^n p^k q^{n-k}, \quad k = 0, 1, \ldots, n,$$

(5.2)

and is known as the binomial distribution. The binomial distribution is specified by two parameters, the probability $p$ of a single success and the number of trials $n$.

It should be noted that the random variable $\xi$ is the sum

$$\xi = \xi_1 + \cdots + \xi_n$$

(5.3)

of $n$ independent random variables $\xi_1, \ldots, \xi_n$, where $\xi_k = 1$ if “success” occurs at the $k$th trial and $\xi_k = 0$ if “failure” occurs at the $k$th trial. We have

$$E\xi_k = p, \quad D\xi_k = E\xi_k^2 - (E\xi_k)^2 = p - p^2 = p(1-p) = pq.$$

Therefore

$$E\xi = np, \quad D\xi = npq.$$

(5.4)

Suppose the number of trials is large while the probability of success $p$ is relatively small, so that each success is a rather rare event while the average number of successes $np$ is appreciable. Then it is a good approximation to write

$$P_\xi(k) \sim \frac{a^k}{k!} e^{-a}, \quad k = 0, 1, 2, \ldots,$$

(5.5)

where $a = np$ is the average number of successes and $e = 2.718 \ldots$ is the base of the natural logarithms. In fact, we know from calculus that

$$\lim_{n \to \infty} \left(1 - \frac{a}{n}\right)^n = e^{-a}.$$