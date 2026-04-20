necessarily satisfies the **first variational equation**

$$\dot{y} = A(t, x)y, \quad A(t, x) = \frac{\partial f}{\partial x}(t, \phi(t, t_0, x)).$$

(2.49)

Note that this equation is linear and the corresponding integral equation reads

$$y(t) = \mathbb{I} + \int_{t_0}^{t} A(s, x)y(s)ds,$$

(2.50)

where we have used $\phi(t_0, t_0, x) = x$ and hence $\frac{\partial \phi}{\partial x}(t_0, t_0, x) = \mathbb{I}$. Applying similar fixed point techniques as before, one can show that the first variational equation has a solution which is indeed the derivative of $\phi(t, t_0, x)$ with respect to $x$.

**Theorem 2.10.** Suppose $f \in C^k(U, \mathbb{R}^n)$, $k \geq 1$. Around each point $(t_0, x_0) \in U$ we can find an open set $I \times B \subseteq U$ such that $\phi(t, s, x) \in C^k(I \times I \times B, \mathbb{R}^n)$. Moreover, $\frac{\partial}{\partial t}\phi(t, s, x) \in C^k(I \times I \times B, \mathbb{R}^n)$ and if $D_k$ is a partial derivative of order $k$, then $D_k\phi$ satisfies the higher order variational equation obtained from

$$\frac{\partial}{\partial t}D_k\phi(t, s, x) = D_k\frac{\partial}{\partial t}\phi(t, s, x) = D_kf(t, \phi(t, s, x))$$

(2.51)

by applying the chain rule. In particular, this equation is linear in $D_k\phi$ and it also follows that the corresponding higher order derivatives commute.

**Proof.** By adding $t$ to the dependent variables it is no restriction to assume that our equation is autonomous and consider $\phi(t, x) = \phi(t, 0, x)$. Existence of a set $I \times B \subseteq U$ such that $\phi(t, x_0)$ is continuous has been established in the previous theorem and it remains to investigate differentiability.

We start by showing the case $k = 1$. We have to prove that $\phi(t, x)$ is differentiable at every given point $x_1 \in B$. Without loss of generality we will assume $x_1 = 0$ for notational convenience. We will take $I = (-T, T)$ and $B$ some open ball around $x_0$ such that the closure of $I \times B$ still lies in $U$.

Abbreviate $\phi(t) = \phi(t, x_1)$, $A(t) = A(t, x_1)$ and denote by $\psi(t)$ the solution of the first variational equation $\dot{\psi}(t) = A(t)\psi(t)$ corresponding to the initial condition $\psi(t_0) = \mathbb{I}$. Set

$$\theta(t, x) = \frac{\phi(t, x) - \phi(t) - \psi(t)x}{|x|},$$

then $\frac{\partial \phi}{\partial x}$ at $x_1 = 0$ will exist (and be equal to $\psi$) if we can show $\lim_{x \to 0} \theta(t, x) = 0$.

Our assumption $f \in C^1$ implies

$$f(y) = f(x) + \frac{\partial f}{\partial x}(x)(y - x) + \left(\int_0^1 \left(\frac{\partial f}{\partial x}(x + t(y - x)) - \frac{\partial f}{\partial x}(x)\right)dt\right)(y - x),$$