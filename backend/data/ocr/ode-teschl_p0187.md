We will now suppose that $r(x), p(x)$, and $q(x)$ are $\ell$-periodic functions throughout this section.

Let us begin by recalling what we already know. Denote by

$$\Pi(z, x, x_0) = \begin{pmatrix} c(z, x, x_0) & s(z, x, x_0) \\ p(x)c'(z, x, x_0) & p(x)s'(z, x, x_0) \end{pmatrix}$$

(5.112)

the principal matrix solution of the underlying system (5.44) introduced in (5.46). Since the base point will not play an important role we will just set it equal to $x_0 = 0$ and write $c(z, x) = c(z, x, 0)$, $s(z, x) = s(z, x, 0)$. Moreover, recall that the determinant of $\Pi(z, x, 0)$ equals one, (5.48).

In Section 3.6 we have introduced the **monodromy matrix** $M(z) = \Pi(z, \ell, 0)$ and its eigenvalues, the **Floquet multipliers**,

$$\rho_{\pm}(z) = \Delta(z) \pm \sqrt{\Delta(z)^2 - 1}, \quad \rho_{+}(z)\rho_{-}(z) = 1.$$

(5.113)

We will choose the branch of the square root such that $|\rho_{+}(z)| \leq 1$. Here the **Floquet discriminant** is given by

$$\Delta(z) = \frac{\text{tr}(M(z))}{2} = \frac{c(z, \ell) + p(\ell)s'(z, \ell)}{2}.$$

(5.114)

Moreover, we have found two solutions

$$u_{\pm}(z, x) = c(z, x) + m_{\pm}(z)s(z, x),$$

(5.115)

the **Floquet solutions**, satisfying

$$\begin{pmatrix} u_{\pm}(z, \ell) \\ p(\ell)u_{\pm}'(z, \ell) \end{pmatrix} = \rho_{\pm}(z)\begin{pmatrix} u_{\pm}(z, 0) \\ p(0)u_{\pm}'(z, 0) \end{pmatrix} = \rho_{\pm}(z)\begin{pmatrix} 1 \\ m_{\pm}(z) \end{pmatrix}.$$

(5.116)

Here

$$m_{\pm}(z) = \frac{\rho_{\pm}(z) - c(z, \ell)}{s(z, \ell)} = \frac{p(\ell)c'(z, \ell)}{\rho_{\pm}(z) - p(\ell)s'(z, \ell)}$$

(5.117)

are the **Weyl–Titchmarsh** $m$-functions. Note that at a point $z$ with $s(z, \ell) = 0$, the functions $m_{\pm}(z)$ and hence also $u_{\pm}(z, x)$ are not well defined. This is due to our normalization $u_{\pm}(z, 0) = 1$ which is not possible if the first component of the eigenvector of the monodromy matrix vanishes.

**Lemma 5.27.** The zeros of $s(z, \ell)$ are all real and only occur when $|\Delta| \geq 1$.

**Proof.** Since the zeros are eigenvalues of a Strum–Liouville problem with two Dirichlet boundary conditions, they are real. Moreover, at such a zero $s(z, x)$ is a Floquet solution corresponding to the real Floquet multiplier $p(\ell)s'(z, \ell)$.

The Wronskian of $u_{+}$ and $u_{-}$ is given by

$$W(u_{-}(z), u_{+}(z)) = m_{+}(z) - m_{-}(z) = \frac{2\sqrt{\Delta(z)^2 - 1}}{s(z, \ell)}$$

(5.118)