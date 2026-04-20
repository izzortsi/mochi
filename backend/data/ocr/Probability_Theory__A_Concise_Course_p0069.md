and select a bun at random. Then we can interpret the problem in term as of series of $n$ Bernoulli trials, where “success” at the $k$th trial means that the $k$th raisin ends up in the given bun. Suppose both the number of rolls $N$ and the number of raisins $n$ are large, so that in particular $p = 1/N$ is small. Then the number of successes in the $n$ trials, equal to the number of raisins in the given bun, has an approximately Poisson distribution, i.e., the probability $P(k)$ of exactly $k$ raisins appearing in the bun is given by

$$P(k) \approx \frac{a^k}{k!} e^{-a},$$

where

$$a = np = \frac{n}{N}.$$

Hence the probability $P$ of at least one raisin appearing in the bun is

$$P = 1 - P(0) = 1 - e^{-a}.$$

**Example 3 (Radioactive decay).** It is observed experimentally that radium gradually decays into radon by emitting alpha particles (helium nuclei). The interatomic distances are large enough to justify the assumption that (the nucleus of) each radium atom disintegrates independently of all the others. Moreover, each of the $n_0$ radium atoms initially present clearly has the same small probability $p(t)$ of disintegrating during an interval of $t$ seconds.$^2$ Suppose the disintegration of each radium atom is interpreted as a “success.” Then the random variable $\xi(t)$, equal to the number of alpha particles emitted in $t$ seconds, equals the number of successes in a series of $n_0$ Bernoulli trials with probability of success $p(t)$. The values of $n_0$ and $p(t)$ are such that the distribution of $\xi(t)$ is very accurately a Poisson distribution, i.e., the probability of exactly $k$ alpha particles being emitted is given by

$$P\{\xi(t) = k\} = \frac{a^k}{k!} e^{-a}, \quad k = 0, 1, 2, \ldots,$$

(5.7)

where

$$a = E\xi(t) = n_0 p(t)$$

is the average number of alpha particles emitted in $t$ seconds.

Here we have used a model involving Bernoulli trials as a tool for showing that the random variable $\xi(t)$ has a Poisson distribution. Another physical situation leading to a Poisson distribution is considered in Example 4, p. 73.

$^2$ A gram of radium ($n_0 \approx 10^{22}$) emits about $10^{10}$ alpha particles per second. Hence $p(1) \approx 10^{10}/10^{22} = 10^{-12}$.