Lemma 12.6. Suppose $f$ is a planar vector field. Then a periodic point $x_0$ is asymptotically stable if

$$\int_0^T \text{div}(f(\Phi(t, x_0)) \, dt < 0$$

and unstable if the integral is positive.

Example. In our previous example we have $\text{div}(f(\Phi(t, x_0)) = 2 - 4(\sin(t)^2 + \cos(t)^2) = -2$ and we again get that the periodic solution is asymptotically stable.

As another application of the use of the Poincaré map we will show that hyperbolic periodic orbits persist under small perturbations.

Lemma 12.7. Let $f(x, \lambda)$ be $C^k$ and suppose $f(x, 0)$ has a hyperbolic periodic orbit $\gamma(x_0)$. Then, in a sufficiently small neighborhood of 0 there is a $C^k$ map $\lambda \mapsto x_0(\lambda)$ such that $x_0(0) = x_0$ and $\gamma(x_0(\lambda))$ is a periodic orbit of $f(x, \lambda)$.

Proof. Fix a transversal arc $\Sigma$ for $f(x, 0)$ at $x_0$. That arc is also transversal for $f(x, \lambda)$ with $\lambda$ sufficiently small. Hence there is a corresponding Poincaré map $P_\Sigma(x, \varepsilon)$ (which is $C^k$). Since $P_\Sigma(x_0, 0) = x_0$ and no eigenvalue of $P_\Sigma(x, 0)$ lies on the unit circle the result follows from the implicit function theorem.

12.3. Stable and unstable manifolds

To show that the stability of a periodic point $x_0$ can be read off from the first variational equation, we will first simplify the problem by applying some transformations.

Using $y(t) = x(t) - \Phi(t, x_0)$ we can reduce it to the problem

$$\dot{y} = \tilde{f}(t, y), \quad \tilde{f}(t, y) = f(y + \Phi(t, x_0)) - f(\Phi(t, x_0)),$$

where $\tilde{f}(t, 0) = 0$ and $\tilde{f}(t + T, x) = \tilde{f}(t, x)$. This equation can be rewritten as

$$\dot{y} = A(t)y + \tilde{g}(t, y)$$

with $\tilde{g}$ $T$-periodic, $\tilde{g}(t, 0) = 0$, and $(\partial g / \partial y)(t, 0) = 0$.

We will see that hyperbolic periodic orbits are quite similar to hyperbolic fixed points. (You are invited to show that this definition coincides with our previous one for fixed points in the special case $T = 0$.) Moreover, by Corollary 3.18 the transformation $z(t) = P(t)^{-1}y(t)$ will transform the system to

$$\dot{z} = Qz + g(t, z).$$