tending to $\infty$ such that

$$\Sigma = \bigcup_{n=0}^{\infty} [E_{2n}, E_{2n+1}].$$

(5.128)

Moreover,

$$\sigma(L_+) = \{ E_0 < E_3 \leq E_4 < E_7 \leq E_8 < \cdots \}$$

(5.129)

and

$$\sigma(L_-) = \{ E_1 \leq E_2 < E_5 \leq E_6 < \cdots \}.$$

(5.130)

That is, the spectrum consist of an infinite sequence of bands, some of which might touch. In fact, if $q = 0$ we get $\Delta(z) = \cos(\sqrt{z})$ and all bands touch, so $\Sigma = [0, \infty)$. A prototypical discriminant is depicted in Figure 5.2.

There are even further connections with the spectra of the operators associated with (5.43) and the domains

$$\mathfrak{D}(L_\alpha) = \{ f \in C^2([0, \ell], \mathbb{C}) | \cos(\alpha)f(0) - \sin(\alpha)p(0)f'(0) = \cos(\alpha)f(\ell) - \sin(\alpha)p(\ell)f'(\ell) = 0 \}.$$

(5.131)

As a preparation we show

**Lemma 5.34.** All singularities of $m_\pm(z)$ are one the real line where $|\Delta(z)| \geq 1$. If a singularity occurs at a point with $\Delta(z) = \pm 1$ then $c(z, \ell) = p(\ell)s'(z, \ell) = \pm 1$ and both $m_\pm(z)$ have a square root type singularity. Otherwise, if a singularity occurs at a point with $|\Delta(z)| > 1$ then precisely one of the functions $m_\pm(z)$ has a first order pole.

**Proof.** By (5.117) singularities of $m_\pm(z)$ can only occur at zeros of $s(\ell, z)$ and the first claim follows from Lemma 5.27. So let $\mu$ be a zero of $s(z, \ell)$.

Then, by (5.126) we see that

$$\dot{s}(\mu, \ell) = \frac{1}{p(\ell)s'(\mu, \ell)} \int_0^\ell s(\mu, x)^2 r(x)dx \neq 0$$

and thus $\mu$ is a first order zero.