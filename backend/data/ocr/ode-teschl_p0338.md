Moreover, since $\Phi(\tau(x_0, \varepsilon), x_0, \varepsilon) \in \Sigma$ we have

$$\frac{\partial \tau}{\partial \varepsilon}(x_0, 0) + N(x_0) + \alpha_{x_0}(T(x_0)) = 0$$

and, if $M(x_0) = 0$,

$$\frac{\partial^2 \Delta}{\partial \varepsilon \partial v}(0, 0) = |f^\perp(x_0)|^2 \frac{\partial M}{\partial x}(x_0) f^\perp(x_0).$$

**Theorem 12.12.** Suppose (12.43) for $\varepsilon = 0$ has a period annulus. If the Melnikov integral $M(x)$ has a zero $x_0$ at which the derivative of $M(x)$ in the direction of $f^\perp(x_0)$ does not vanish, then the periodic orbit at $x_0$ persists for small $\varepsilon$.

Note that we have

$$M(x(t)) = \beta_{x_0}(t) M(x_0).$$

**Problem 12.2. Show**

$$\beta_{x(s)}(t) = \frac{\beta_{x_0}(t + s)}{\beta_{x_0}(s)},$$

$$\alpha_{x(s)}(t) = \frac{1}{\beta_{x_0}(s)} \left( \alpha_{x_0}(t + s) - \alpha_{x_0}(s) \right)$$

and

$$\beta_{x(s)}(T(x_0)) = 1, \quad \alpha_{x(s)}(T(x_0)) = \frac{\alpha_{x_0}(T(x_0))}{\beta_{x_0}(s)}.$$

### 12.5. Melnikov’s method for nonautonomous perturbations

Now let us consider the more general case of nonautonomous perturbations. We consider the nonautonomous system

$$\dot{x}(t) = f(x(t)) + \varepsilon g(t, x(t), \varepsilon)$$

ore equivalently the extended autonomous one

$$\dot{x} = f(x) + \varepsilon g(\tau, x, \varepsilon), \quad \dot{\tau} = 1.$$

We will assume that $g(t, x, \varepsilon)$ is periodic with period $T$ and that the unperturbed system $\varepsilon = 0$ has a period annulus.

To find a periodic orbit which persists we need of course require that the extended unperturbed system has a periodic orbit. Hence we need to suppose that the resonance condition

$$mT = nT(x_0), \quad n, m \in \mathbb{N},$$

where $T(x)$ denotes the period of $x$, holds for some periodic point $x_0$ in this annulus. It is no restriction to assume that $m$ and $n$ are relatively prime. Note that we have $\beta_{x_0}(nT(x_0)) = 1$ and $\alpha_{x_0}(nT(x_0)) = n \alpha_{x_0}(T(x_0)).$