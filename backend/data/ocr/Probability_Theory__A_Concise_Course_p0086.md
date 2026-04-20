Comparing this with (6.5), we find that $F(z)$ is the generating function of a Poisson distribution with parameter $a = \lambda t$, so that

$$P\{\xi(t) = k\} = \frac{(\lambda t)^k}{k!} e^{-\lambda t}, \quad k = 0, 1, 2, \ldots.$$

Since

$$\lambda t = E\xi(t),$$

the parameter $\lambda$ is just the average number of events occurring per unit time.

14. Characteristic Functions. The Central Limit Theorem

Given a real random variable $\xi$, by the characteristic function of $\xi$ is meant the function

$$f_\xi(t) = Ee^{i\xi t}, \quad -\infty < t < \infty.$$ (6.14)

Clearly, $f_\xi(t)$ coincides for every fixed $t$ with the mathematical expectation of the complex random variable $\eta = e^{i\xi t}$. For a discrete random variable taking the values 0, 1, 2, $\ldots$, the characteristic function $f_\xi(t)$ coincides with the values of the generating function $F_\xi(z)$ on the boundary of the unit circle $|z| = 1$, i.e.,

$$f_\xi(t) = F_\xi(e^{i\xi t}) = \sum_{k=0}^{\infty} P_\xi(k)e^{i\xi t}.$$

This formula represents $f_\xi(t)$ as a Fourier series, with the probabilities $P_\xi(k) = P\{\xi = k\}, k = 0, 1, 2, \ldots$ as its coefficients. Thus these probabilities $P_\xi(k)$ are uniquely determined by the characteristic function $f_\xi(t)$.

If $\xi$ is a continuous random variable with probability density $p_\xi(x)$, then, by formula (4.18), p. 47, the characteristic function is the Fourier transform of the density $p_\xi(x)$:

$$f_\xi(t) = \int_{-\infty}^{\infty} e^{i\xi t} p_\xi(x) \, dx.$$ (6.15)

Inverting (6.15), we find that

$$p_\xi(x) = \frac{1}{2\pi} \int_{-\infty}^{\infty} e^{-i\xi t} f_\xi(t) \, dt,$$ (6.16)

at least at points where $p_\xi(x)$ is suitably well-behaved. Thus $p_\xi(x)$ is uniquely determined by the characteristic function $f_\xi(t)$.

---

4 If (6.16) fails, another inversion formula can be used, giving the distribution function $\Phi_\xi(x) = P\{\xi < x\}$ in terms of the characteristic function $f_\xi(t)$ (see e.g., B. V. Gnedenko, op. cit., Sec. 36). We can then deduce $p_\xi(x)$ from $\Phi_\xi(x)$ by differentiation, at least almost everywhere (recall footnote 2, p. 38).