A (nonlinear) differential equation is called homogeneous if it is of the form

$$\dot{x} = f\left(\frac{x}{t}\right).$$

(1.48)

This special form suggests the change of variables $y = \frac{x}{t} (t \neq 0)$, which (by (1.47)) transforms our equation into

$$\dot{y} = \frac{\partial y}{\partial t} + \frac{\partial y}{\partial x} \dot{x} = -\frac{x}{t^2} + \frac{1}{t} \dot{x} = \frac{f(y) - y}{t}.$$

(1.49)

This equation is separable.

More generally, consider the differential equation

$$\dot{x} = f\left(\frac{ax + bt + c}{\alpha x + \beta t + \gamma}\right).$$

(1.50)

Two cases can occur. If $a\beta - \alpha b = 0$, our differential equation is of the form

$$\dot{x} = \tilde{f}(ax + bt),$$

(1.51)

which transforms into

$$\dot{y} = a\tilde{f}(y) + b$$

(1.52)

if we set $y = ax + bt$. If $a\beta - \alpha b \neq 0$, we can use $y = x - x_0$ and $s = t - t_0$ which transforms (1.50) to the homogeneous equation

$$\dot{y} = \hat{f}\left(\frac{ay + bs}{\alpha y + \beta s}\right)$$

(1.53)

if $(x_0, t_0)$ is the unique solution of the linear system $ax + bt + c = 0$, $\alpha x + \beta t + \gamma = 0$.

Bernoulli equation:

A differential equation is of Bernoulli type if it is of the form

$$\dot{x} = f(t)x + g(t)x^n, \quad n \neq 0, 1.$$

(1.54)

The transformation

$$y = x^{1-n}$$

(1.55)

gives the linear equation

$$\dot{y} = (1 - n)f(t)y + (1 - n)g(t).$$

(1.56)

(Note: If $n = 0$ or $n = 1$ the equation is already linear and there is nothing to do.)

Riccati equation:

A differential equation is of Riccati type if it is of the form

$$\dot{x} = f(t)x + g(t)x^2 + h(t).$$

(1.57)