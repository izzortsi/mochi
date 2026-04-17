and $y_-(t)$ tends to zero. Thus there can be at most one solution $x_0(t)$ which stays between $x_+(t)$ and $y_-(t)$ for all $t > 0$ (i.e., $a(\infty) = b(\infty)$). All solutions below $x_0(t)$ will eventually enter region II and converge to $-\infty$ along $x = -t$. All solutions above $x_0(t)$ will eventually be above $y_-(t)$ and converge to $+\infty$. It remains to show that this happens in finite time.

This is not surprising, since the $x(t)^2$ term should dominate over the $-t^2$ term and we already know that the solutions of $\dot{x} = x^2$ diverge. So let us try to make this precise: First of all

$$\dot{x}(t) = x(t)^2 - t^2 > 2$$

for every solution above $y_-(t)$ implies $x(t) > x_0 + 2(t - t_0)$. Thus there is an $\varepsilon > 0$ such that

$$x(t) > \frac{t}{\sqrt{1 - \varepsilon}}.$$

This implies

$$\dot{x}(t) = x(t)^2 - t^2 > x(t)^2 - (1 - \varepsilon)x(t)^2 = \varepsilon x(t)^2$$

and every solution $x(t)$ is a super solution to a corresponding solution of

$$\dot{x}(t) = \varepsilon x(t)^2.$$

But we already know that the solutions of the last equation escape to $+\infty$ in finite time and so the same must be true for our equation.

In summary, we have shown the following

- There is a unique solution $x_0(t)$ which converges to the line $x = t$.
- All solutions above $x_0(t)$ will eventually converge to $+\infty$ in finite time.
- All solutions below $x_0(t)$ converge to the line $x = -t$.

It is clear that similar considerations can be applied to any first-order equation $\dot{x} = f(t, x)$ and one usually can obtain a quite complete picture of the solutions. However, it is important to point out that the reason for our success was the fact that our equation lives in two dimensions $(t, x) \in \mathbb{R}^2$. If we consider higher order equations or systems of equations, we need more dimensions. At first sight this seems only to imply that we can no longer plot everything, but there is another more severe difference: In $\mathbb{R}^2$ a curve splits our space into two regions: one above and one below the curve. The only way to get from one region to the other is by crossing the curve. In more than two dimensions this is no longer true and this allows for much more complicated behavior of solutions. In fact, equations in three (or more) dimensions will often exhibit chaotic behavior which makes a simple description of solutions impossible!