we infer $dP_{\Sigma}(x_0)_{j,k} = M_{x_0}(t_0)_{j,k}$ for $1 \leq j,k \leq n-1$ by Lemma 12.1. Moreover, $M_{x_0}(0)f(x_0) = f(x_0)$ and thus

$$M_{x_0}(0) = \begin{pmatrix} dP_{\Sigma}(x_0) & 0 \\ m & 1 \end{pmatrix}$$

from which the claim is obvious. $\square$

**Example.** Consider the system

$$\dot{x}_1 = -x_2 + x_1(1 - x_1^2 - x_2^2), \quad \dot{x}_2 = x_1 + x_2(1 - x_1^2 - x_2^2)$$

and observe that a periodic solution is given by $\Phi(t) = (\cos(t), \sin(t))$. Moreover, we have

$$A(t) = \begin{pmatrix} -2\cos(t)^2 & -1 + \sin(2t)^2 \\ 1 - \sin(2t) & -2\sin(t)^2 \end{pmatrix}, \quad f(\Phi(t)) = \begin{pmatrix} -\sin(t) \\ \cos(t) \end{pmatrix}$$

Next,

$$\Pi_{x_0}(t, 0) = \begin{pmatrix} e^{-2t}\cos(t) & -\sin(t) \\ e^{-2t}\sin(t) & \cos(t) \end{pmatrix} = \begin{pmatrix} \cos(t) & -\sin(t) \\ \sin(t) & \cos(t) \end{pmatrix} \exp\left(t \begin{pmatrix} -2 & 0 \\ 0 & 0 \end{pmatrix}\right)$$

since the second row follows from (12.6) and the first can be obtained using d’Alambert reduction. In particular,

$$M_{x_0}(0) = \begin{pmatrix} e^{-4\pi} & 0 \\ 0 & 1 \end{pmatrix}$$

and the periodic orbit is stable. Note that the system can be explicitly solved in polar coordinates. $\diamond$

As a consequence we obtain

**Corollary 12.5.** The determinants of the derivative of the Poincaré map at $x_0$ and of the monodromy matrix are equal

$$\det(dP_{\Sigma}(x_0)) = \det(M_{x_0}(t_0)).$$

In particular, since the determinant of the monodromy matrix does not vanish, $P_{\Sigma}(y)$ is a local diffeomorphism at $x_0$.

By Liouville’s formula (3.91) we have

$$\det(M_{x_0}(t_0)) = \exp\left(\int_0^T \text{tr}(A(t)) dt\right) = \exp\left(\int_0^T \text{div}(f(\Phi(t, x_0))) dt\right).$$

In two dimensions there is only one eigenvalue which is equal to the determinant and hence we obtain