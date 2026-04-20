which is well defined in a neighborhood of 0. The Jacobian determinant at 0 is given by

$$\det \left( \frac{\partial \psi}{\partial x} \right) \bigg|_{x=0} = \det \left( \frac{\partial \Phi}{\partial t}, \frac{\partial \Phi}{\partial x_2}, \ldots, \frac{\partial \Phi}{\partial x_n} \right) \bigg|_{t=0,x=0} = \det \mathbb{I} = 1$$

since $\frac{\partial \Phi}{\partial x}|_{t=0,x=0} = \mathbb{I}_n$ and $\frac{\partial \Phi}{\partial t}|_{t=0,x=0} = f(0) = \delta_1$ by assumption. So by the inverse function theorem we can assume that $\psi$ is a local diffeomorphism and we can consider new coordinates $y = \psi^{-1}(x)$. Since $(\partial \psi/\partial x)\delta_1 = \partial \psi/\partial x_1 = f(\psi(x))$ our system reads in the new coordinates

$$\dot{y} = \left( \frac{\partial \psi}{\partial x} \right)^{-1} \bigg|_{y=\psi^{-1}(x)} f(x) = \delta_1,$$

which is the required form.

**Problem 6.1. Can**

$$\phi(t) = \begin{pmatrix} \sin(t) \\ \sin(2t) \end{pmatrix}$$

be the solution of an autonomous system $\dot{x} = f(x)$? (Hint: Plot the orbit.) Can it be the solution of $\dot{x} = f(t,x)$?

**Problem 6.2.** Compute the flow for $f(x) = x^2$ defined on $M = \mathbb{R}$.

**Problem 6.3.** Find a transformation which straightens out the flow $\dot{x} = x$ defined on $M = \mathbb{R}$.

**Problem 6.4.** Show that $\Phi(t,x) = e^t(1+x) - 1$ is a flow (i.e., it satisfies (6.11)). Can you find an autonomous system corresponding to this flow?

**Problem 6.5** (One-parameter Lie groups). Suppose $\Phi(t,x)$ is differentiable and satisfies (6.11). Then the family $\Phi_t(x)$ is known as a local one-parameter Lie group of transformations (the term local is omitted if $W = \mathbb{R} \times M$).

Show that $\Phi$ is the flow of the vector field

$$f(x) = \dot{\Phi}(0,x).$$

The differential operator

$$X = f(x) \cdot \text{grad} = \sum_{j=1}^{n} f_j(x) \frac{\partial}{\partial x_j}$$

is known as the infinitesimal generator of $\Phi_t(x)$.

Suppose $f(x)$ is analytic in $x$ and recall from Theorem 4.1 that $\Phi(t,x)$ is analytic in $t$. Show that $\Phi$ can be recovered from $X$ via its Lie series

$$\phi(t,x) = \exp(tX)x = \sum_{j=0}^{\infty} \frac{t^j}{j!} X^j x.$$