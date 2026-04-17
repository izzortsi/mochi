It looks like all solutions starting above some value $x_1$ converge to a periodic solution starting at some other value $x_2 > x_1$, while solutions starting below $x_1$ diverge to $-\infty$.

The key idea is to look at the fate of an arbitrary initial value $x$ after one period. More precisely, let us denote the solution which starts at the point $x$ at time $t = 0$ by $\phi(t, x)$. Then we can introduce the Poincaré map via

$$P(x) = \phi(1, x).$$

(1.72)

By construction, an initial condition $x_0$ will correspond to a periodic solution if and only if $x_0$ is a fixed point of the Poincaré map, $P(x_0) = x_0$. In fact, this follows from uniqueness of solutions of the initial value problem, since $\phi(t + 1, x)$ again satisfies $\dot{x} = f(t, x)$ if $f(t + 1, x) = f(t, x)$. So $\phi(t + 1, x_0) = \phi(t, x_0)$ if and only if equality holds at the initial time $t = 0$, that is, $\phi(1, x_0) = \phi(0, x_0) = x_0$.

We begin by trying to compute the derivative of $P(x)$ as follows. Set

$$\theta(t, x) = \frac{\partial}{\partial x} \phi(t, x)$$

(1.73)

and differentiate

$$\dot{\phi}(t, x) = \left(1 - \phi(t, x)\right) \phi(t, x) - h \cdot \left(1 - \sin(2\pi t)\right),$$

(1.74)

with respect to $x$ (we will justify this step in Theorem 2.10). Then we obtain

$$\dot{\theta}(t, x) = \left(1 - 2\phi(t, x)\right) \theta(t, x)$$

(1.75)

and assuming $\phi(t, x)$ is known we can use (1.38) to write down the solution

$$\theta(t, x) = \exp \left( \int_0^t \left(1 - 2\phi(s, x)\right) ds \right).$$

(1.76)

Setting $t = 1$ we obtain

$$P'(x) = \theta(1, x) = \exp \left( 1 - 2 \int_0^1 \phi(s, x) ds \right).$$

(1.77)

While it might look as if this formula is of little help since we do not know $\phi(t, x)$, it at least tells us that that $P'(x) > 0$, that is, $P(x)$ is strictly increasing. Note that this latter fact also follows since different solutions cannot cross in the $(t, x)$ plane by uniqueness (show this!).