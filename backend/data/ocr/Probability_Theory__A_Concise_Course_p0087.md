Example 1. Let $\xi$ be a normally distributed random variable, with probability density

$$p(x) = \frac{1}{\sqrt{2\pi}} e^{-x^2/2}. \tag{6.17}$$

Then, by (6.15), the characteristic function of $\xi$ is given by

$$f_\xi(t) = \int_{-\infty}^{\infty} e^{ixt} p(x) \, dx = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} e^{ixt-(x^2/2)} \, dx \tag{6.18}$$

$$= e^{-t^2/2} \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} e^{-(x-it)^2/2} \, dx.$$

The function $\varphi(z) = e^{-z^2/2}$ is an analytic function of the complex variable $z$, and hence, by Cauchy's integral theorem, the integral of $\varphi(z)$ along the rectangular contour with vertices $(-N, 0), (N, 0), (N, -it), (-N, -it)$ equals zero. Therefore

$$\frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} e^{-(x-it)^2/2} \, dx = \lim_{N \to \infty} \frac{1}{\sqrt{2\pi}} \int_{-N}^{N} e^{-(x-it)^2/2} \, dx \tag{6.19}$$

$$= \lim_{N \to \infty} \frac{1}{\sqrt{2\pi}} \int_{-N}^{N} e^{-x^2/2} \, dx \tag{6.19}$$

where we use the fact that the integral of $\varphi(z)$ along the vertical sides of the contour vanishes as $N \to \infty$ (why?). But

$$\frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} e^{-x^2/2} \, dx = \int_{-\infty}^{\infty} p(x) \, dx = 1,$$

as for any probability density. Hence (6.18) and (6.19) imply

$$f_\xi(t) = e^{-t^2/2}. \tag{6.20}$$

Now suppose the random variable $\xi$ is such that $\mathbf{E} |\xi|^3$ exists. Then the characteristic function $f_\xi(t)$ has the expansion

$$f_\xi(t) = 1 + i\mathbf{E}\xi \cdot t - \frac{\mathbf{E}\xi^2}{2} t^2 + R(t), \tag{6.21}$$

where the remainder $R(t)$ satisfies the estimate

$$|R(t)| \leq C\mathbf{E} |\xi|^3 \cdot |t|^3$$

$^5$ R. A. Silverman, op. cit., p. 146.