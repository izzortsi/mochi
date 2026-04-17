1.3. First order autonomous equations

Let us look at the simplest (nontrivial) case of a first-order autonomous equation and let us try to find the solution starting at a certain point $x_0$ at time $t = 0$:

$$\dot{x} = f(x), \quad x(0) = x_0, \quad f \in C(\mathbb{R}).$$

(1.20)

We could of course also ask for the solution starting at $x_0$ at time $t_0$. However, once we have a solution $\phi(t)$ with $\phi(0) = x_0$, the solution $\psi(t)$ with $\psi(t_0) = x_0$ is given by a simple shift $\psi(t) = \phi(t - t_0)$ (this holds in fact for any autonomous equation – compare Problem 1.8).

This equation can be solved using a small ruse. If $f(x_0) \neq 0$, we can divide both sides by $f(x)$ and integrate both sides with respect to $t$:

$$\int_0^t \frac{\dot{x}(s)ds}{f(x(s))} = t.$$

(1.21)

Abbreviating $F(x) = \int_x^x \frac{dy}{f(y)}$ we see that every solution $x(t)$ of (1.20) must satisfy $F(x(t)) = t$. Since $F(x)$ is strictly monotone near $x_0$, it can be inverted and we obtain a unique solution

$$\phi(t) = F^{-1}(t), \quad \phi(0) = F^{-1}(0) = x_0,$$

(1.22)

of our initial value problem. Here $F^{-1}(t)$ is the inverse map of $F(t)$.

Now let us look at the maximal interval where $\phi$ is defined by this procedure. If $f(x_0) > 0$ (the case $f(x_0) < 0$ follows analogously), then $f$ remains positive in some interval $(x_1, x_2)$ around $x_0$ by continuity. Define

$$T_+ = \lim_{x \uparrow x_2} F(x) \in (0, \infty], \quad \text{respectively} \quad T_- = \lim_{x \downarrow x_1} F(x) \in [-\infty, 0).$$

(1.23)

Then $\phi \in C^1((T_-, T_+))$ and

$$\lim_{t \uparrow T_+} \phi(t) = x_2, \quad \text{respectively} \quad \lim_{t \downarrow T_-} \phi(t) = x_1.$$

(1.24)

In particular, $\phi$ is defined for all $t > 0$ if and only if

$$T_+ = \int_x^x \frac{dy}{f(y)} = +\infty,$$

(1.25)

that is, if $1/f(x)$ is not integrable near $x_2$. Similarly, $\phi$ is defined for all $t < 0$ if and only if $1/f(x)$ is not integrable near $x_1$.

If $T_+ < \infty$ there are two possible cases: Either $x_2 = \infty$ or $x_2 < \infty$. In the first case the solution $\phi$ diverges to $+\infty$ and there is no way to extend it beyond $T_+$ in a continuous way. In the second case the solution $\phi$ reaches the point $x_2$ at the finite time $T_+$ and we could extend it as follows: If $f(x_2) > 0$ then $x_2$ was not chosen maximal and we can increase it which provides the required extension. Otherwise, if $f(x_2) = 0$, we can extend $\phi$ by setting $\phi(t) = x_2$ for $t \geq T_+$. However, in the latter case this might not