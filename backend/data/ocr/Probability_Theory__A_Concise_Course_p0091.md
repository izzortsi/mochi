Example 3. The Lyapunov condition is always satisfied if the random variables $\xi_1, \xi_2, \ldots$ are identically distributed and if $\alpha = \mathbf{E} |\xi_k - a_k|^3$ exists. In fact,

$$B_n^2 = \sum_{k=1}^{n} \mathbf{D} \xi_k = n\sigma^2,$$

where $\sigma^2 = \mathbf{D} \xi_k$, and hence

$$\lim_{n \to \infty} \frac{1}{B_n^3} \sum_{k=1}^{n} \mathbf{E} |\xi_k - a_k|^3 = \lim_{n \to \infty} \frac{1}{\sqrt{n}} \frac{\alpha}{\sigma^3} = 0.$$

PROBLEMS

1. Show that the conclusion of Theorem 6.1 can be written in the form

$$\lim_{n \to \infty} \mathbf{P} \left\{ \left| \frac{1}{n} \sum_{k=1}^{n} \xi_k - a_k \right| < \varepsilon \right\} = 1$$

for arbitrary $\varepsilon > 0$.

2. Let $\xi_1, \ldots, \xi_n$ be $n$ independent identically distributed random variables, with common mean $a = \mathbf{E} \xi_k$ and variance $\xi^2 = \mathbf{D} \xi_k$. Suppose $a$ is known. Can the quantity

$$\frac{1}{n} \sum_{k=1}^{n} (\xi_k - a)^2$$

be used to estimate $\sigma^2$?

3. A random variable $\xi$ has probability density

$$p_\xi(x) = \begin{cases} \frac{x^m}{m!} e^{-x} & \text{if } x \geqslant 0, \\ 0 & \text{otherwise}, \end{cases}$$

where $m$ is a positive integer. Prove that

$$\mathbf{P} \{0 \leqslant \xi \leqslant 2(m+1)\} > \frac{m}{m+1}.$$

Hint. Use Chebyshev's inequality.

4. The probability of an event $A$ occurring in one trial is $\frac{1}{2}$. Is it true that the probability of $A$ occurring between 400 and 600 times in 1000 independent trials exceeds 0.97?

Ans. Yes.

5. Let $\xi$ be the number of spots obtained in throwing an unbiased die. What is the generating function of $\xi$?

$^8$ It follows by repeated integration by parts that $\int_0^\infty x^m e^{-x} dx = m!$