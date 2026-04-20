Moreover, differentiating this last expression once more we obtain

$$P''(x) = -2 \left( \int_0^1 \theta(s, x) ds \right) P'(x) < 0$$

(1.78)

since $\theta(t, x) > 0$ by (1.76). Thus $P(x)$ is concave and there are at most two intersections with the line $x$ (why?). In other words, there are at most two periodic solutions. Note that so far we did not need any information on the harvesting term.

To see that all cases can occur, we will now consider the dependence with respect to the parameter $h$. A numerically computed picture of the Poincaré map for different values of $h$ is shown below.

It seems to indicate that $P(x)$ is decreasing as a function of $h$. To prove this we proceed as before. Set

$$\psi(t, x) = \frac{\partial}{\partial h} \phi(t, x)$$

(1.79)

and differentiate the differential equation with respect to $h$ (again this step will be justified by Theorem 2.10) to obtain

$$\dot{\psi}(t, x) = \left(1 - 2\phi(t, x)\right)\psi(t, x) + \left(1 - \sin(2\pi t)\right).$$

(1.80)

Hence, since $\psi(0, x) = \frac{\partial}{\partial h} \phi(0, x) = \frac{\partial}{\partial h} x = 0$, equation (1.40) implies

$$\psi(t, x) = -\int_0^t \exp \left( \int_s^t \left(1 - 2\phi(r, x)\right) dr \right) \left(1 - \sin(2\pi s)\right) ds < 0$$

(1.81)

and setting $t = 1$ we infer

$$\frac{\partial}{\partial h} P_h(x) < 0,$$

(1.82)

where we have added $h$ as a subscript to emphasize the dependence on the parameter $h$. Moreover, for $h = 0$ we have

$$P_0(x) = \frac{e x}{1 + (e - 1)x}$$

(1.83)

and there are two fixed points $x_1 = 0$ and $x_2 = 1$. As $h$ increases these points will approach each other and collide at some critical value $h_c$. Above this value there are no periodic solutions and all orbits converge to $-\infty$ since $P(x) < x$ for all $x \in \mathbb{R}$ (show this).