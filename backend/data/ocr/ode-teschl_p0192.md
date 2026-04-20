If $\Delta(\mu) = \pm 1$ then we must have $\rho_{\pm}(\mu) = \pm 1$ and $c(\mu, \ell) = p(\ell)s'(\mu, \ell) = \pm 1$. Hence both $m_{\pm}(z)$ have a square root type singularity by (5.117).

If $|\Delta(\mu)| > 1$ then the numerator of the first equation in (5.117) can vanish for at most one sign and hence there is at least one pole. Similarly, the denominator of the second equation in (5.117) can vanish for at most one sign and thus there is at most one pole.

**Lemma 5.35.** We have

$$\dot{m}_{\pm}(z) = \int_{0}^{\pm\infty} u_{\pm}(z, x)^2 r(x) dx, \quad z \in \mathbb{C} \setminus \Sigma.$$ (5.132)

**Proof.** Integrate

$$W'_x(u_{\pm}(z_0), u_{\pm}(z)) = (z_0 - z)r(x)u_{\pm}(z_0, x)u_{\pm}(z, x)$$

from 0 to $\pm\infty$:

$$-W_0(u_{\pm}(z_0), u_{\pm}(z)) = (z_0 - z) \int_{0}^{\pm\infty} u_{\pm}(z_0, x)u_{\pm}(z, x)r(x) dx.$$

Now divide by $z_0 - z$,

$$\frac{1}{z_0 - z} W_0(u_{\pm}(z_0), u_{\pm}(z)) = W_0\left(\frac{u_{\pm}(z_0) - u_{\pm}(z)}{z_0 - z}, u_{\pm}(z)\right)$$

$$= - \int_{0}^{\pm\infty} u_{\pm}(z_0, x)u_{\pm}(z, x)r(x) dx,$$

and let $z_0 \to z$ (use dominated convergence, c.f. Theorem 9.13),

$$W_0(\dot{u}_{\pm}(z), u_{\pm}(z)) = - \int_{0}^{\pm\infty} u_{\pm}(z, x)^2 r(x) dx.$$

Finally $W_0(\dot{u}_{\pm}(z), u_{\pm}(z)) = -\dot{m}_{\pm}(z)$ finishes the proof.

**Theorem 5.36.** Denote the spectrum of $L_{\alpha}$, $\alpha \in [0, \pi)$, by

$$\sigma(L_{\alpha}) = \{ \lambda_0(\alpha) < \lambda_1(\alpha) < \cdots \}, \quad \alpha \neq 0$$ (5.133)

and

$$\sigma(L_0) = \{ \lambda_1(0) < \lambda_2(0) < \cdots \}.$$ (5.134)

Then there is a one-to-one correspondence between $(-\infty, E_0]$ and $\bigcup_{\alpha \in (0, \pi)} \lambda_0(\alpha)$ respectively $[E_{2j-1}, E_{2j}]$ and $\bigcup_{\alpha \in [0, \pi)} \lambda_j(\alpha)$ for $j \in \mathbb{N}$ with $E_{2j-1} < E_{2j}$. If $E_{2j-1} = E_{2j}$ we have $\lambda_j(\alpha) = E_{2j-1} = E_{2j}$ for all $\alpha \in [0, \pi)$.

**Proof.** First of all note that $\lambda \in \sigma(L_{\alpha})$ if and only if $m_+(\lambda) = \cot(\alpha)$ or $m_-(\lambda) = \cot(\alpha)$ since the corresponding eigenfunction will give rise to an eigenvector of the monodromy matrix and vice versa.

Hence it suffices to show that $m_-(\lambda)$ and $m_+(\lambda)$ traverse all values in $\mathbb{R} \cup \{ \infty \}$ when $\lambda$ runs from $E_{2j-1}$ to $E_{2j}$. Essentially this follows from monotonicity of $m_{\pm}(\lambda)$ in these regions (Lemma 5.35) plus the fact that they