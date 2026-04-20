we might still try to express $x_-$ as a function of $x_+$: $x_- = h^+(x_+)$. To this end we project out the unstable part of our integral equation and solve for $x_-$:

$$x_- = e^{-tA}x_-(t) - \int_0^t e^{-rA}g_-(x(r))dr. \tag{9.12}$$

Here $x_{\pm}(t) = P^{\pm}x(t)$. If we suppose that $|x(t)|$ is bounded for $t \geq 0$, we can let $t \to \infty$,

$$x_- = -\int_0^\infty e^{-rA}g_-(x(r))dr, \tag{9.13}$$

where the integral converges absolutely since the integrand decays exponentially. Plugging this back into our equation we see

$$x(t) = e^{tA}x_+ + \int_0^t e^{(t-r)A}g_+(x(r))dr - \int_t^\infty e^{(t-r)A}g_-(x(r))dr. \tag{9.14}$$

Introducing $P(t) = P^+$, $t > 0$, respectively $P(t) = -P^-$, $t \leq 0$, this can be written more compactly as

$$x(t) = K(x)(t), \quad K(x)(t) = e^{tA}x_+ + \int_0^\infty e^{(t-r)A}P(t-r)g(x(r))dr. \tag{9.15}$$

In summary, if $A$ is hyperbolic, then every bounded solution solves (9.15) and we can establish existence of solutions using similar fixed point techniques as in Section 2.1. This will prove existence of a stable manifold which is tangent to its linear counterpart for a hyperbolic fixed point. The unstable manifold can be obtained by reversing time $t \to -t$.

In fact, we can do even a little better.

**Theorem 9.3.** Suppose $f \in C^k$, $k \geq 1$, has a fixed point $x_0$ with corresponding Jacobian matrix $A$. Then, if $\alpha > 0$ and $A + \alpha I$ is hyperbolic, there is a neighborhood $U(x_0) = x_0 + U$ and a function $h^{+,,\alpha} \in C^k(E^{+,,\alpha} \cap U, E^{-,\alpha})$ such that

$$M^{+,,\alpha}(x_0) \cap U(x_0) = \{x_0 + a + h^{+,,\alpha}(a) | a \in E^{+,,\alpha} \cap U\}. \tag{9.16}$$

Both $h^{+,,\alpha}$ and its Jacobian matrix vanish at 0, that is, $M^{+,,\alpha}(x_0)$ is tangent to its linear counterpart $E^{+,,\alpha}$ at $x_0$.

We have $M^{+,,\alpha_2}(x_0) \subseteq M^{+,,\alpha_1}(x_0)$ for $\alpha_1 \leq \alpha_2$ and $M^{+,,\alpha_2}(x_0) = M^{+,,\alpha_1}(x_0)$ whenever $E^{+,,\alpha_2} = E^{+,,\alpha_1}$.

**Proof.** We suppose $x_0 = 0$ and begin by assuming that $A$ is hyperbolic such that we can choose $\alpha = 0$. Our underlying Banach space will be $C_b([0, \infty), \mathbb{R}^n)$ equipped with the sup norm

$$\|x\| = \sup_{t \geq 0} |x(t)|.$$