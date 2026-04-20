where

$$f(t) = \int_{-\infty}^{\infty} e^{ixt} p(x) \, dx$$

is the characteristic function of the limiting distribution and the convergence is uniform in every finite interval $t' \leq t \leq t''$.

We now prove a key proposition of probability theory, called the central limit theorem, which has the De Moivre-Laplace theorem (Theorem 5.1, p. 59) as a very special case. Roughly speaking, the central limit theorem asserts that the distribution of the sum of a large number of independent identically distributed random variables is approximately normal.

DEFINITION. Given a sequence of random variables $\xi_k, k = 1, 2, \ldots$ with finite means $a_k = \mathbf{E}\xi_k$ and variances $\sigma_k^2 = \mathbf{D}\xi_k$, consider the "normalized sum"

$$S_n^* = \frac{S_n - \mathbf{E}S_n}{\sqrt{\mathbf{D}S_n}},$$

where

$$S_n = \sum_{k=1}^{n} \xi_k.$$

Then the sequence $\xi_k, k = 1, 2, \ldots$ is said to satisfy the central limit theorem if

$$\lim_{n \to \infty} \mathbf{P} \left\{ x' < S_n^* \leq x'' \right\} = \frac{1}{\sqrt{2\pi}} \int_{x'}^{x''} e^{-x^2/2} \, dx. \tag{6.25}$$

THEOREM 6.3. Suppose the sequence of independent random variables $\xi_k, k = 1, 2, \ldots$ with means $a_k$ and variances $\sigma_k^2$ satisfies the Lyapunov condition

$$\lim_{n \to \infty} \frac{1}{B_n^3} \sum_{k=1}^{n} \mathbf{E} |\xi_k - a_k|^3 = 0, \tag{6.26}$$

where

$$B_n^2 = \mathbf{D}S_n = \sum_{k=1}^{n} \sigma_k^2.$$

Then the sequence of random variables satisfies the central limit theorem.

Proof. Equation (6.25) means that the sequence of distributions of the normalized sum $S_n^*, n = 1, 2, \ldots$ converges weakly to the normal distribution with probability density (6.16). Hence, according to Theorem 6.2', we need only show that the sequence of characteristic

$$7 \text{ Cf. formula (5.8), p. 59. Note that the right-hand side of (6.25) equals } \Phi(x') - \Phi(x'), \text{ where } \Phi(x) \text{ is the distribution function of a normal random variable with mean 0 and variance 1.}$$