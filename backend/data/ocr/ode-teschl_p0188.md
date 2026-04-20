and hence they are linearly independent if $\Delta(z) \neq \pm 1$. If $\Delta(z) = \pm 1$ both functions are clearly equal.

The functions $u_{\pm}(z,x)$ are exponentially decaying as $x \to \pm\infty$ if $|\rho_+(z)| < 1$, that is, $|\Delta(z)| > 1$, and are bounded if $|\rho_+(z)| = 1$, that is, $|\Delta(z)| \leq 1$. The stability set

$$\Sigma = \{\lambda \in \mathbb{R} \mid |\Delta(\lambda)| \leq 1\}$$

is also called the spectrum. Our goal is to understand the stability set. A critical role is given by the points with $\Delta(\lambda) = \pm 1$ which are precisely the spectra of the periodic $L_+$ and antiperiodic $L_-$ operators associated with (5.43) and the following domains

$$\mathfrak{D}(L_{\pm}) = \{f \in C^2([0,\ell],\mathbb{C}) \mid f(\ell) = \pm f(0), p(\ell)f'(\ell) = \pm p(0)f'(0)\}.$$

Theorem 5.28. The spectrum of $L_{\pm}$ is given by

$$\sigma(L_{\pm}) = \{\lambda \in \mathbb{R} \mid \Delta(\lambda) = \pm 1\}$$

and consist of a sequence of real eigenvalues with no finite accumulation point.

Proof. By definition of the boundary conditions for $\mathfrak{D}(L_{\pm})$ we see that $z \in \mathbb{C}$ is an eigenvalue of $L_{\pm}$ if and only if $\pm 1$ is an eigenvalue of the monodromy matrix, that is, if and only if $\Delta(z) = \pm 1$. As in Section 5.4 one can show that $L_{\pm}$ is a symmetric operator with compact resolvent (Problem 5.33) and hence the claim follows.

Note that an eigenvalue of $L_{\pm}$ is simple if the monodromy matrix has just one eigenvector and twice degenerate if the monodromy matrix has two linearly independent eigenvectors.

First of all note, that there are no eigenvalues of $L_{\pm}$ below some $\lambda_0$.

Lemma 5.29. We have $\Delta(\lambda) > 1$ for $\lambda < \lambda_0$, where

$$\lambda_0 = \min_{x \in [0,\ell]} \frac{q(x)}{r(x)}.$$

Proof. Let $\lambda < \lambda_0$. Then $q - \lambda r > 0$ and any solution $u$ of (5.43) with $z = \lambda$ satisfies $(pu')' = q - \lambda r > 0$. Hence $pu'$ is increasing, that is, $p(x)u'(x) > p(0)u'(0)$ for $x > 0$. Moreover, if $p(0)u'(0) \geq 0$, then $u$ is also increasing, that is, $u(x) > u(0)$ for $x > 0$. In particular, $c(\lambda,x) > c(\lambda,0) = 1$ and $p(x)s'(\lambda,x) > p(0)s'(\lambda,0) = 1$ for $x > 0$.

To investigate the derivative of $\Delta(z)$ at a point where $\Delta(z) = \pm 1$ we first derive a practical formula for $\dot{\Delta}(z)$.