With this notation we can now easily treat the case of an isochronous period annulus, where $T(x) = T(x_0)$ is constant, respectively $\alpha_x(T(x)) = 0$. Since $\Delta(x, 0) = 0$ we can proceed as before to obtain

**Theorem 12.13.** Suppose (12.65) for $\varepsilon = 0$ has an isochronous period annulus. If the function $x \mapsto (M(t_0, x), N(t_0, x))$ has a simple zero at $(t_0, x_0)$, then the periodic orbit at $(t_0, x_0)$ persists for small $\varepsilon$.

The case $\alpha_x(T(x)) \neq 0$ will be considered next. We will call the period annulus a **regular period annulus** in this case.

We split the displacement function according to (compare (12.47))

$$\Delta(x(u, v), \varepsilon) = \Delta_1(u, v, \varepsilon)f(x_0) + \Delta_2(u, v, \varepsilon)f^\perp(x_0).$$ (12.74)

Then

$$\frac{\partial \Delta_1}{\partial v}(0, 0, 0) = n \alpha_x(T(x_0)) \neq 0$$ (12.75)

and hence there is a function $v(u, \varepsilon)$ such that $\Delta_1(u, v(u, \varepsilon), \varepsilon) = 0$ by the implicit function theorem. Moreover, by $\Delta(x(u, 0), 0) = 0$ we even have $v(u, 0) = 0$. Hence it remains to find a zero of

$$\tilde{\Delta}_2(u, \varepsilon) = \Delta_2(u, v(u, \varepsilon), \varepsilon).$$ (12.76)

Since $\tilde{\Delta}_2(u, 0) = \Delta_2(u, 0, 0) = 0$, we can divide by $\varepsilon$ and apply the implicit function theorem as before.

Now using

$$\frac{\partial \tilde{\Delta}_2}{\partial \varepsilon}(0, 0) = M(t_0, x_0).$$ (12.77)

and, if $M(t_0, x_0) = 0$,

$$\frac{\partial^2 \tilde{\Delta}_2}{\partial \varepsilon \partial u}(0, 0) = \frac{\partial M}{\partial x}(t_0, x_0)f(x_0)$$ (12.78)

we obtain the following result.

**Theorem 12.14.** Suppose (12.65) for $\varepsilon = 0$ has a regular period annulus. If the function $x \mapsto M(t_0, x)$ has a zero at $(t_0, x_0)$ at which the derivative of $M(t_0, x)$ in the direction of $f(x_0)$ does not vanish, then the periodic orbit at $(t_0, x_0)$ persists for small $\varepsilon$.