II. The De Moivre-Laplace Theorem. The Normal Distribution

Next we prove the following basic “limit theorem”:

THEOREM 5.1 (De Moivre-Laplace theorem). Given $n$ independent identically distributed random variables $\xi_1, \ldots, \xi_n$, each taking the value 1 with probability $p$ and the value 0 with probability $q = 1 - p$, let

$$S_n = \sum_{k=1}^{n} \xi_k, \quad S_n^* = \frac{S_n - \mathbf{E} S_n}{\sqrt{\mathbf{D} S_n}}.$$

Then

$$\lim_{n \to \infty} \mathbf{P} \left\{x' \leq S_n^* \leq x''\right\} = \frac{1}{\sqrt{2\pi}} \int_{x'}^{x''} e^{-x^2/2} dx. \tag{5.8}$$

Proof. $S_n$ is the random variable denoted by $\xi$ in (5.3) and (5.4), i.e., $S_n$ is the number of successes in $n$ Bernoulli trials, with mean and variance

$$\mathbf{E} S_n = np, \quad \mathbf{D} S_n = npq.$$

Hence the “normalized sum” $S_n^*$ is a random variable taking the values

$$x = \frac{k - np}{\sqrt{npq}}, \quad k = 0, 1, \ldots, n$$

with probabilities

$$\mathbf{P} \left\{S_n^* = x\right\} = P_n(k) = \frac{n!}{k!(n-k)!} p^k q^{n-k}, \quad k = 0, 1, \ldots, n.$$

These values divide the interval

$$\left[ \frac{-np}{\sqrt{npq}}, \frac{nq}{\sqrt{npq}} \right]$$

into $n$ equal subintervals of length

$$\Delta x = \frac{1}{\sqrt{npq}}.$$

Clearly, as $n \to \infty$,

$$k = np + \sqrt{npq} x \to \infty, \quad n - k = nq - \sqrt{npq} x \to \infty,$$

where the convergence is uniform in every finite interval $x' \leq x \leq x''$. Using Stirling’s formula (see p. 10), we find that

$$P_n(k) \sim \frac{\sqrt{2\pi n} n^n e^{-n}}{\sqrt{2\pi k} k^k e^{-k} \sqrt{2\pi(n-k)} (n-k)^{n-k} e^{-(n-k)}} p^k q^{n-k}$$

$$= \frac{1}{\sqrt{2\pi}} \sqrt{\frac{n}{k(n-k)}} \left(\frac{np}{k}\right)^k \left(\frac{nq}{n-k}\right)^{n-k}.$$