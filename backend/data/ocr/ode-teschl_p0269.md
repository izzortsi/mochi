To solve (9.15) by iteration, suppose $|x(t)| \leq \delta$. Then, since the Jacobian matrix of $g$ at 0 vanishes, we have

$$|g(x(t)) - g(y(t))| \leq \varepsilon |x(t) - y(t)|,$$

(9.17)

where $\varepsilon$ can be made arbitrarily small by choosing $\delta$ sufficiently small. Moreover, for $\alpha_0 < \min\{|\text{Re}(\alpha)| |\alpha \in \sigma(A)\}$ we have

$$\|\text{e}^{(t-r)A} P(t-r)\| \leq C \text{e}^{-\alpha_0|t-r|}$$

by (9.4). Combining this with (9.17) we obtain

$$\|K(x) - K(y)\| = \sup_{t \geq 0} \left| \int_0^\infty \text{e}^{(t-r)A} P(t-r) \left( g(x(r)) - g(y(r)) \right) dr \right|$$

$$\leq C \sup_{t \geq 0} \int_0^\infty \text{e}^{-\alpha_0|t-r|} |g(x(r)) - g(y(r))| dr$$

$$\leq C \varepsilon \|x - y\| \sup_{t \geq 0} \int_0^\infty \text{e}^{-\alpha_0|t-r|} dr = \frac{2C \varepsilon}{\alpha_0} \|x - y\|.$$

Hence, for $\varepsilon < \alpha_0/(2C)$ existence of a unique solution $\psi(t, x_+)$ can be established by the contraction principle (Theorem 2.1). However, by Theorem 9.18 (see Section 9.4 below) we even get $\psi(t, x_+)$ is $C^k$ with respect to $x_+$ if $f$ is.

Clearly we have $\psi(t, 0) = 0$. Introducing the function $h^+(a) = P^- \psi(0, a)$ we obtain $M^+(0) \cap U = \{a + h^+(a)|a \in E^+ \cap U\}$ for the stable manifold of the nonlinear system in a neighborhood $U$ of 0.

Moreover, I claim that $M^+(0)$ is tangent to $E^+$ at 0. From the proof of Theorem 9.18 it follows that $\varphi(t, x_+) = \frac{\partial}{\partial x_+} \psi(t, x_+)$ satisfies

$$\varphi(t, x_+) = \text{e}^{tA} P^+ + \int_0^\infty \text{e}^{(t-r)A} P(t-r) g_x(\psi(r, x_+)) \varphi(r, x_+) dr.$$

(9.18)

Evaluating this equation at $(t, x_+) = (0, 0)$ we see $\varphi(0, 0) = P^+$ which is equivalent to

$$\frac{\partial}{\partial a} h^+(a) \bigg|_{a=0} = 0,$$

(9.19)

that is, $M^+(0)$ is tangent to the linear stable manifold $E^+$ at 0.

To see the general case, make the change of coordinates $\tilde{x}(t) = \exp(\alpha t)x(t)$, transforming $A$ to $\tilde{A} = A + \alpha I$ and $g(x)$ to $\tilde{g}(t, \tilde{x}) = \exp(\alpha t)g(\exp(-\alpha t) \tilde{x})$. Since $\tilde{A}$ and $\tilde{g}$ satisfy the same assumptions we conclude, since $\sup_{t \geq 0} |\tilde{x}(t)| \leq \delta$, that $\sup_{t \geq 0} |x(t)| \leq \delta \exp(-\alpha t)$. By uniqueness of the solution of our integral equation in a sufficiently small neighborhood of $x_0$ we obtain (9.16).

For the last claim let $x \in M^{+, \alpha_2}(x_0) \cap U(x_0) \subseteq M^{+, \alpha_1}(x_0) \cap U(x_0)$, then $x = x_0 + a + h^{+, \alpha_2}(a) = x_0 + a + h^{+, \alpha_1}(a)$ for $a \in E^{+, \alpha_1} = E^{+, \alpha_2}$ implies $h^{+, \alpha_2}(a) = h^{+, \alpha_1}(a)$. From this the claim follows.