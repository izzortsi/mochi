with probability greater than $1 - \delta$. The justification for formula (1.2), p. 3 is now apparent.

Remark. It can be shown$^1$ that with probability 1 the limit

$$\lim_{n \to \infty} \frac{n(A)}{A}$$

exists and equals $P(A)$. This result is known as the strong law of large numbers.

13. Generating Functions. Weak Convergence of Probability Distributions

Let $\xi$ be a discrete random variable taking the values 0, 1, 2, ... with probabilities

$$P_\xi(k) = P\{\xi = k\}, \quad k = 0, 1, 2, \ldots$$

(6.2)

Then the function

$$F_\xi(z) = \sum_{k=0}^{\infty} P_\xi(k)z^k, \quad |z| \leqslant 1$$

(6.3)

is called the generating function of the random variable $\xi$ or of the corresponding probability distributions (6.2). It follows from the convergence of the series (6.3) for $|z| = 1$ and from Weierstrass’s theorem on uniformly convergent series of analytic functions$^2$ that $F_\xi(z)$ is an analytic function of $z$ in $|z| < 1$, with (6.3) as its power series expansion. Moreover, the probability distribution of the random variable $\xi$ is uniquely determined by its generating function $F_\xi(z)$, and in fact

$$P_\xi(k) = \frac{1}{k!}F_\xi^{(k)}(0), \quad k = 0, 1, 2, \ldots,$$

where $F_\xi^{(k)}(z)$ is the $k$th derivative of $F_\xi(z)$. According to formula (4.10), p. 44, for fixed $z$ the function $F_\xi(z)$ is just the mathematical expectation of the random variable $\phi(\xi) = z^\xi$, i.e.,

$$F_\xi(z) = \mathbf{E}z^\xi, \quad |z| \leqslant 1.$$

(6.4)

Example 1 (The Poisson distribution). If the random variable $\xi$ has a Poisson distribution with parameter $a$, so that

$$P_\xi(k) = \frac{a^k}{k!}e^{-a}, \quad k = 0, 1, 2, \ldots,$$

$^1$ See e.g., W. Feller, op. cit., p. 203.

$^2$ See e.g., R. A. Silverman, *Introductory Complex Analysis*, Prentice-Hall, Inc., Englewood Cliffs, N.J. (1967), p. 191. Also use Weierstrass’ $M$-test (ibid., p. 186).