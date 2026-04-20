is given by

$$\phi(t) = x_0 A(t, t_0) + \int_{t_0}^{t} A(t, s) g(s) ds.$$ (1.40)

This can be verified by a straightforward computation.

Next we turn to the problem of transforming differential equations. Given the point with coordinates $(t, x)$, we may change to new coordinates $(s, y)$ given by

$$s = \sigma(t, x), \quad y = \eta(t, x).$$ (1.41)

Since we do not want to lose information, we require this transformation to be a diffeomorphism (i.e., invertible with differentiable inverse).

A given function $\phi(t)$ will be transformed into a function $\psi(s)$ which has to be obtained by eliminating $t$ from

$$s = \sigma(t, \phi(t)), \quad \psi = \eta(t, \phi(t)).$$ (1.42)

Unfortunately this will not always be possible (e.g., if we rotate the graph of a function in $\mathbb{R}^2$, the result might not be the graph of a function). To avoid this problem we restrict our attention to the special case of fiber preserving transformations

$$s = \sigma(t), \quad y = \eta(t, x)$$ (1.43)

(which map the fibers $t = \text{const}$ to the fibers $s = \text{const}$). Denoting the inverse transform by

$$t = \tau(s), \quad x = \xi(s, y),$$ (1.44)

a straightforward application of the chain rule shows that $\phi(t)$ satisfies

$$\dot{x} = f(t, x)$$ (1.45)

if and only if $\psi(s) = \eta(\tau(s), \phi(\tau(s)))$ satisfies

$$\dot{y} = \dot{\tau} \left( \frac{\partial \eta}{\partial t} (\tau, \xi) + \frac{\partial \eta}{\partial x} (\tau, \xi) f(\tau, \xi) \right),$$ (1.46)

where $\tau = \tau(s)$ and $\xi = \xi(s, y)$. Similarly, we could work out formulas for higher order equations. However, these formulas are usually of little help for practical computations and it is better to use the simpler (but ambiguous) notation

$$\frac{dy}{ds} = \frac{dy(t(s), x(t(s)))}{ds} = \frac{\partial y}{\partial t} \frac{dt}{ds} + \frac{\partial y}{\partial x} \frac{dx}{dt} \frac{dt}{ds}.$$ (1.47)

But now let us see how transformations can be used to solve differential equations.

**Homogeneous equation:**