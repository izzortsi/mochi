and is shown in Figure 8(b). Since $p(x)$ is even, it is clear that

$$\Phi(-x) = 1 - \Phi(x).$$

Representative values of $\Phi(x)$ are given in Table 2.

Let $\xi$ be a normal (or Gaussian) random variable, i.e., a random variable with probability density (5.11). Then

$$E\xi = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} xe^{-x^2/2} dx = 0,$$

since the integrand is odd. Moreover,

$$D\xi = E\xi^2 - (E\xi)^2 = E\xi^2 = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} x^2e^{-x^2/2} dx$$

$$= \frac{1}{\sqrt{2\pi}} \lim_{N \to \infty} \int_{-N}^{N} x^2e^{-x^2/2} dx.$$

Integrating by parts, we get

$$D\xi = \frac{1}{\sqrt{2\pi}} \lim_{N \to \infty} \left\{ -\int_{-N}^{N} xd(e^{-x^2/2}) \right\}$$

$$= \frac{1}{\sqrt{2\pi}} \lim_{N \to \infty} \left\{ \left[ -xe^{-x^2/2} \right]_{x=-N}^{x=N} + \int_{-N}^{N} e^{-x^2/2} dx \right\}$$

$$= \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} e^{-x^2/2} dx = 1.$$

Hence $\xi$ has variance 1. More generally, the random variable with probability density

$$p(x) = \frac{1}{\sqrt{2\pi}} \sigma e^{-(x-a)^2/2\sigma^2}$$

is also called a normal random variable, and has mean $a$ and variance $\sigma^2$ (show this).

**Example (Brownian motion).** Suppose a tiny particle is suspended in a homogeneous liquid. Then the particle undergoes random collisions with the molecules of the liquid, and, as a result, moves about continually in a chaotic fashion. This is the phenomenon of Brownian motion. As a model of Brownian motion, we make the following simplifying assumptions, characterizing a “discrete random walk” in one dimension:

1) The particle moves only along the $x$-axis.
2) The particle moves only at the times $t = n\Delta t$, $n = 0, 1, 2, \ldots$.
3) Suppose the particle is at position $x$ at time $t$. Then, regardless of its previous behavior, the particle moves to either of the two neighboring positions $x + \Delta x$ and $x - \Delta x$ ($\Delta x > 0$) with probability $\frac{1}{2}$.