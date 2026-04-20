Example. The definition above of course agrees with the definition of stability for linear systems $\dot{x} = Ax$ we have introduced in Section 3.2. In particular, by Corollary 3.5 the origin is stable if and only if all eigenvalues $\alpha_j$ of $A$ satisfy $\text{Re}(\alpha_j) \leq 0$ and for all eigenvalues with $\text{Re}(\alpha_j) = 0$ the corresponding algebraic and geometric multiplicities are equal. Similarly, by Corollary 3.6 the origin is exponentially stable if and only if all eigenvalues satisfy $\text{Re}(\alpha_j) < 0$.

More generally, suppose the equation $\dot{x} = f(x)$ in $\mathbb{R}^1$ has a fixed point $x_0$. Then it is not hard to see (compare Section 1.5) that $x_0$ is stable if

$$\frac{f(x) - f(x_0)}{x - x_0} \leq 0, \quad x \in U(x_0) \setminus \{x_0\}$$

(6.28)

for some neighborhood $U(x_0)$ and asymptotically stable if strict inequality holds. It will be exponentially stable if

$$\frac{f(x) - f(x_0)}{x - x_0} \leq -\alpha, \quad 0 < |x - x_0| \leq \delta.$$ (6.29)

In fact, (6.27) with $C = 1$ follows from a straightforward sub/super solution argument by comparing with solutions of the linear equation $\dot{y} = -\alpha y$.

In particular, if $f'(x_0) \neq 0$ the stability can be read off from the derivative of $f$ at $x_0$ alone (cf. Problem 6.15). Moreover, Corollary 3.27 implies that a fixed point is exponentially stable if this is true for the corresponding linearized system.

Theorem 6.10 (Exponential stability via linearization). Suppose $f \in C^1$ has a fixed point $x_0$ and suppose that all eigenvalues of the Jacobian matrix at $x_0$ have negative real part. Then $x_0$ is exponentially stable.

However, if $f'(x_0) = 0$, no information on the stability of the nonlinear system can be read off from the linearized one as can be seen from the following example.

Example. The equation

$$\dot{x} = \mu x^3$$ (6.30)

is asymptotically stable for $\mu < 0$, stable for $\mu \leq 0$, and unstable for $\mu > 0$.

In $\mathbb{R}^n$, $n > 1$, the equation $\dot{x} = f(x)$ cannot be solved explicitly in general, and good criteria for stability are needed. This will be the topic of the remainder of this chapter.

But before that, let me point out that it is also interesting to look at the change of a differential equation with respect to a parameter $\mu$. By Theorem 2.11 the flow depends smoothly on the parameter $\mu$ (if $f$ does). Nevertheless very small changes in the parameters can produce large changes