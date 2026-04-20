variable:

$$u(t, x) = w(t)y(x).$$

(5.2)

This ansatz is called **separation of variables**. Plugging everything into the wave equation and bringing all $t$, $x$ dependent terms to the left, right side, respectively, we obtain

$$\frac{1}{c^2} \frac{\ddot{w}(t)}{w(t)} = \frac{y''(x)}{y(x)}.$$

(5.3)

Here we have used dots to indicate derivatives with respect to $t$ and primes to indicate derivatives with respect to $x$. Now, if this equation should hold for all $t$ and $x$, the quotients must be equal to a constant $-\lambda$ (the extra minus is chosen for convenience later on). That is, we are led to the equations

$$-\frac{1}{c^2} \ddot{w}(t) = \lambda w(t)$$

(5.4)

and

$$-y''(x) = \lambda y(x), \quad y(0) = y(1) = 0,$$

(5.5)

which can easily be solved. The first one gives

$$w(t) = c_1 \cos(c\sqrt{\lambda}t) + c_2 \sin(c\sqrt{\lambda}t)$$

(5.6)

and the second one

$$y(x) = c_3 \cos(\sqrt{\lambda}x) + c_4 \sin(\sqrt{\lambda}x).$$

(5.7)

However, $y(x)$ must also satisfy the boundary conditions $y(0) = y(1) = 0$. The first one $y(0) = 0$ is satisfied if $c_3 = 0$ and the second one yields ($c_4$ can be absorbed by $w(t)$)

$$\sin(\sqrt{\lambda}) = 0,$$

(5.8)

which holds if $\lambda = (\pi n)^2$, $n \in \mathbb{N}$. In summary, we obtain the solutions

$$u(t, x) = \left(c_1 \cos(cn\pi t) + c_2 \sin(cn\pi t)\right) \sin(n\pi x), \quad n \in \mathbb{N}.$$

(5.9)

In particular, the string can only vibrate with certain fixed frequencies!

Note that if $\lambda$ is negative, then the trigonometric functions have to be replaced by their hyperbolic counterparts. However, since $\sinh(x)$ only vanishes at $x = 0$ this does not produce any further solutions (check this).

So we have found a large number of solutions satisfying the boundary conditions, but we still have not dealt with our initial conditions. This can be done using the superposition principle which holds since our equation is linear. Moreover, since we have infinitely many solutions we can consider infinite linear combinations under appropriate assumptions on the coefficients.

**Lemma 5.1.** Suppose $c_{1,n}$ and $c_{2,n}$ are sequences satisfying

$$\sum_{n=1}^{\infty} n^2 |c_{1,n}| < \infty, \quad \sum_{n=1}^{\infty} n^2 |c_{2,n}| < \infty.$$

(5.10)