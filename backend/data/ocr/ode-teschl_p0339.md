The Poincaré map corresponding to $\Sigma = \{\tau = t_0 \mod mT\}$ is given by

$$P_{\Sigma}(x, \varepsilon) = \Phi(mT, (x, t_0), \varepsilon)$$

(12.68)

and the displacement function is

$$\Delta(x, \varepsilon) = x(mT, \varepsilon) - x,$$

(12.69)

where $x(t, \varepsilon)$ is the solution corresponding to the initial condition $x(t_0, \varepsilon) = x$. Note that it is no restriction to assume $t_0 = 0$ and replace $g(s, x, \varepsilon)$ by $g(s + t_0, x, \varepsilon)$.

Again it is not possible to apply the implicit function theorem directly to $\Delta(x, \varepsilon)$ since the derivative in the direction of $f(x_0)$ vanishes. We will handle this problem as in the previous section by a regularization process. However, since $\Delta(x, \varepsilon)$ is now two dimensional, two cases can occur.

One is if the derivative of $\Delta(x, \varepsilon)$ in the direction of $f^\perp(x_0)$ also vanishes. This is the case if, for example, the period in the annulus is constant and hence $\Delta(x, 0) = 0$. Here we can divide by $\varepsilon$ and proceed as before.

The second case is if the derivative of $\Delta(x, \varepsilon)$ in the direction of $f^\perp(x_0)$ does not vanish. Here we have to use a Liapunov–Schmidt type reduction and split $\mathbb{R}^2$ according to $f(x_0)$ and $f^\perp(x_0)$. One direction can be handled by the implicit function theorem directly and the remaining one can be treated as in the first case.

We will express $\Delta$ in more suitable coordinates $x(u, v)$ from (12.47). Using the results from the previous section we have

$$\frac{\partial \Delta}{\partial u}(x_0, 0) = 0, \quad \frac{\partial \Delta}{\partial v}(x_0, 0) = n \alpha_{x_0}(T(x_0))f(x_0)$$

(12.70)

and

$$\frac{\partial \Delta}{\partial \varepsilon}(x_0, 0) = x_{\varepsilon}(mT) = (N(t_0, x_0) + n \alpha_{x_0}(T(x_0))M(t_0, x_0))f(x_0)$$

$$+ M(t_0, x_0)f^\perp(x_0),$$

(12.71)

where

$$M(t_0, x_0) = \int_0^{nT(x_0)} \frac{f(x(s)) \wedge g(s + t_0, x(s), 0)}{\beta_{x_0}(s)|f(x(s))|^2} ds$$

(12.72)

and

$$N(t_0, x_0) = \int_0^{nT(x_0)} \frac{f(x(s)) g(s + t_0, x(s), 0)}{|f(x(s))|^2} ds$$

$$- \int_0^{nT(x_0)} \alpha_{x_0}(s) \frac{f(x(s)) \wedge g(s + t_0, x(s), 0)}{\beta_{x_0}(s)|f(x(s))|^2} ds.$$

(12.73)

Note that $M(t_0 + T, x_0) = M(t_0, x_0)$ and $N(t_0 + T, x_0) = N(t_0, x_0)$.