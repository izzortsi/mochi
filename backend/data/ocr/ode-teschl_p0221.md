In particular, since no other solution can cross these lines, the first quadrant $Q = \{(x, y) | x > 0, y > 0\}$ is invariant. This is the region we are interested in. The second fixed point is $(1, 1)$.

Hence let us try to eliminate $t$ from our differential equations to get a single first-order equation for the orbits. Writing $y = y(x)$, we infer from the chain rule

$$\frac{dy}{dx} = \frac{dy}{dt} \left( \frac{dx}{dt} \right)^{-1} = \alpha \frac{(x - 1)y}{(1 - y)x}. \tag{7.5}$$

This equation is separable and solving it shows that the orbits are given implicitly by

$$L(x, y) = f(y) + \alpha f(x) = \text{const}, \quad f(x) = x - 1 - \log(x). \tag{7.6}$$

The function $f$ cannot be inverted in terms of elementary functions. However, $f(x)$ is convex with its global minimum at $x = 1$ and tends to $\infty$ as $x \to 0$ and $x \to \infty$. Hence the level sets are compact and each orbit is periodic surrounding the fixed point $(1, 1)$.

**Theorem 7.1.** All orbits of the Volterra–Lotka equations (7.3) in $Q$ are closed and encircle the only fixed point $(1, 1)$.

The phase portrait is depicted in Figure 7.1.

Next, let us refine this model by assuming limited grow for both species (compare again Problem 1.15). The corresponding system is given by

$$\begin{align*}
\dot{x} &= (1 - y - \lambda x)x \\
\dot{y} &= \alpha(x - 1 - \mu y)y
\end{align*}, \quad \alpha, \lambda, \mu > 0. \tag{7.7}$$