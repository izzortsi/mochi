where the sum is over all values of $x$ in the interval $x' \leq x \leq x''$. But clearly

$$\lim_{n \to \infty} \sum_{x' \leq x \leq x''} \frac{1}{\sqrt{2\pi}} e^{-x^2/2} \Delta x = \frac{1}{\sqrt{2\pi}} \int_{x'}^{x''} e^{-x^2/2} dx$$

(why?). Comparing (5.9) and (5.10), we finally get the desired limiting formula (5.8).

According to Theorem 5.1, the limiting distribution of the random variable $S_n^*$ is the distribution with probability density

$$p(x) = \frac{1}{\sqrt{2\pi}} e^{-x^2/2}$$

(5.11)

Such a distribution is called a normal (or Gaussian) distribution. The density $p(x)$ is the “bell-shaped” curve shown in Figure 8(a). The corresponding distribution function is

$$\Phi(x) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{x} e^{-u^2/2} du$$

(5.12)

![Figure 8](image-url)