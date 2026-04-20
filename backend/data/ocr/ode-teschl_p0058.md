and thus

$$f(y) - f(x) = \frac{\partial f}{\partial x}(x)(y - x) + |y - x|R(y,x),$$

(2.52)

where

$$|R(y,x)| \leq \max_{t \in [0,1]} \left\| \frac{\partial f}{\partial x}(x + t(y - x)) - \frac{\partial f}{\partial x}(x) \right\|.$$

Here $\|\cdot\|\$ denotes the matrix norm (cf. Section 3.1). By uniform continuity of the partial derivatives $\frac{\partial f}{\partial x}$ in a neighborhood of $x_1 = 0$ we infer $\lim_{y \to x} |R(y,x)| = 0$ again uniformly in $x$ in some neighborhood of 0.

Using (2.52) we see

$$\dot{\theta}(t,x) = \frac{1}{|x|}(f(\phi(t,x)) - f(\phi(t)) - A(t)\psi(t)x)$$

$$= A(t)\theta(t,x) + \frac{|\phi(t,x) - \phi(t)|}{|x|}R(\phi(t,x),\phi(t)).$$

Now integrate and take absolute values (note $\theta(0,x) = 0$ and recall (2.43)) to obtain

$$|\theta(t,x)| \leq \tilde{R}(x) + \int_0^t \|A(s)\||\theta(s,x)|ds,$$

where

$$\tilde{R}(x) = e^{LT} \int_0^T |R(\phi(s,x),\phi(s))|ds.$$

Then Gronwall’s inequality implies $|\theta(t,x)| \leq \tilde{R}(x) \exp(\int_0^T \|A(s)\|ds)$. Since $\lim_{y \to x} |R(y,x)| = 0$ uniformly in $x$ in some neighborhood of 0, we have $\lim_{x \to 0} \tilde{R}(x) = 0$ and hence $\lim_{x \to 0} \theta(t,x) = 0$. Moreover, $\frac{\partial \phi}{\partial x}(t,x)$ is $C^0$ as the solution of the first variational equation. This settles the case $k = 1$ since all partial derivatives (including the one with respect to $t$) are continuous.

For the general case $k \geq 1$ we use induction: Suppose the claim holds for $k$ and let $f \in C^{k+1}$. Then $\phi(t,x) \in C^1$ and the partial derivative $\frac{\partial \phi}{\partial x}(t,x)$ solves the first variational equation. But $A(t,x) \in C^k$ and hence $\frac{\partial \phi}{\partial x}(t,x) \in C^k$, which, together with Lemma 2.3, shows $\phi(t,x) \in C^{k+1}$.

In fact, we can also handle the dependence on parameters. Suppose $f$ depends on some parameters $\lambda \in \Lambda \subseteq \mathbb{R}^p$ and consider the IVP

$$\dot{x}(t) = f(t,x,\lambda), \quad x(t_0) = x_0,$$

(2.53)

with corresponding solution

$$\phi(t,t_0,x_0,\lambda).$$

(2.54)

**Theorem 2.11.** Suppose $f \in C^k(U \times \Lambda,\mathbb{R}^n)$, $k \geq 1$. Around each point $(t_0,x_0,\lambda_0) \in U \times \Lambda$ we can find an open set $I \times B \times \Lambda_0 \subseteq U \times \Lambda$ such that $\phi(t,s,x,\lambda) \in C^k(I \times I \times B \times \Lambda_0,\mathbb{R}^n).$