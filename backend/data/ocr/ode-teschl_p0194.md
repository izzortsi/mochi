Theorem 5.37. The lowest periodic eigenvalue $E_0$ is simple and the corresponding eigenfunction $u(E_0, x)$ has no zeros. The antiperiodic eigenfunctions $u(E_{4j-3}, x), u(E_{4j-2}, x)$ have $2j - 1$ zeros in $[0, \ell)$ and the periodic eigenfunctions $u(E_{4j-1}, x), u(E_{4j}, x)$ have $2j$ zeros in $[0, \ell)$.

Proof. First of all note that a periodic eigenfunction must have an even number of zeros and an antiperiodic eigenfunction must have an odd number of zeros (why?). Moreover, by Theorem 5.18 the eigenfunction corresponding to $\lambda_j(0)$ has precisely $j - 1$ zeros.

Sturm’s comparison theorem (Theorem 5.20) implies that any solution $u(\lambda, x)$ with $\lambda_j(0) \leq \lambda \leq \lambda_{j+1}(0)$ has at least $j - 1$ and at most $j$ zeros. Since $\lambda_j(0) \leq E_{2j-1} < E_{2j} \leq \lambda_{j+1}(0)$ the claim on the number of zeros follows.

If $E_0$ is twice degenerate, we could take a linear combination of two linearly independent eigenfunctions, to obtain an eigenfunction which vanishes at 0. By periodicity this function must also vanish at $\ell$. Hence it is an eigenfunction of $L_0$ implying $\lambda_1(0) = E_0$ contradicting $E_0 < E_1 \leq \lambda_1(0)$.

Problem 5.33 (Periodic and antiperiodic spectra).

(i) Show that $L_{\pm}$ are symmetric.

(ii) Show that the corresponding Green function is given by

$$G_{\pm}(z, x, y) = \begin{cases} \frac{1}{1+\rho_{+}(z)} u_{+}(z, x) u_{-}(z, y) + \frac{1}{1+\rho_{-}(z)} u_{-}(z, x) u_{+}(z, y), & y < x, \\ \frac{\rho_{+}(z)}{1+\rho_{+}(z)} u_{+}(z, y) u_{-}(z, x) + \frac{\rho_{-}(z)}{1+\rho_{-}(z)} u_{-}(z, y) u_{+}(z, x), & y > x. \end{cases}$$

Conclude that the periodic and antiperiodic eigenvalues form a sequence of real numbers which converge to $\infty$.

(iii) Show by example that the periodic, antiperiodic eigenvalues are not necessarily simple. (Hint: $r = p = 1$ and $q = 0$).

Problem 5.34. Show:

$$m_+(z) + m_-(z) = \frac{p(\ell) s'(z, \ell) - c(z, \ell)}{s(z, \ell)},$$

$$m_+(z) m_-(z) = -\frac{p(\ell) c'(z, \ell)}{s(z, \ell)},$$

$$u_+(z, x) u_-(z, x) = \frac{s(z, x + \ell, x)}{s(z, \ell)}.$$

(Hint: $s(z, x, x_0) = c(z, x_0) s(z, x) - c(z, x) s(z, x_0)$ and $\Pi(z, x + \ell, 0) = \Pi(z, x + \ell, \ell) M(z) = \Pi(z, x, 0) M(z)$.)

Problem 5.35 (Reflection symmetry). Suppose $q$ is periodic $q(t + \ell) = q(t)$ and symmetric $q(-x) = q(x)$ (and set $r(x) = p(x) = 1$). Prove