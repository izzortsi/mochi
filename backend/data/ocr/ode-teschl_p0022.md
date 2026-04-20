Example. Consider $f(x) = \sqrt{|x|}$, $x_0 > 0$. Then $(x_1, x_2) = (0, \infty)$,

$$F(x) = 2(\sqrt{x} - \sqrt{x_0}).$$

(1.33)

and

$$\varphi(t) = \left( \sqrt{x_0} + \frac{t}{2} \right)^2, \quad -2\sqrt{x_0} < t < \infty.$$

(1.34)

So for $x_0 = 0$ there are several solutions which can be obtained by patching the trivial solution $\phi(t) = 0$ with the above solution as follows

$$\tilde{\phi}(t) = \begin{cases} -\frac{(t-t_0)^2}{4}, & t \leq t_0, \\ 0, & t_0 \leq t \leq t_1, \\ \frac{(t-t_1)^2}{4}, & t_1 \leq t. \end{cases}$$

(1.35)

The solution $\tilde{\phi}$ for $t_0 = 0$ and $t_1 = 1$ is depicted below:

As a conclusion of the previous examples we have:

- Solutions might only exist locally in $t$, even for perfectly nice $f$.
- Solutions might not be unique. Note however, that $f(x) = \sqrt{|x|}$ is not differentiable at the point $x_0 = 0$ which causes the problems.

Note that the same ruse can be used to solve so-called separable equations

$$\dot{x} = f(x)g(t)$$

(1.36)

(see Problem 1.11).

Problem 1.9. Solve the following differential equations:

(i) $\dot{x} = x^3$.
(ii) $\dot{x} = x(1-x)$.
(iii) $\dot{x} = x(1-x) - c$.

Problem 1.10. Show that the solution of (1.20) is unique if $f \in C^1(\mathbb{R})$.

Problem 1.11 (Separable equations). Show that the equation $(f,g \in C^1)$

$$\dot{x} = f(x)g(t), \quad x(t_0) = x_0,$$