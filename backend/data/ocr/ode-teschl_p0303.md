So we see that at certain values of the parameter $\mu$ the attracting set just doubles its size and gets more and more complicated. I do not want to say more about this picture right now, however, I hope that you are convinced that the dynamics of this simple system is indeed quite complicated. Feel free to experiment with the above code and try to plot some parts of the above diagram in more detail.

In particular, we see that there are certain values of $\mu$ where there is a qualitative change in the dynamics of a dynamical system. Such a point is called a **bifurcation point** of the system.

The first point was $\mu = 1$, where a second fixed point entered our interval $[0, 1]$. Now when can such a situation happen? First of all, fixed points are zeros of the function

$$g(x) = f(x) - x. \tag{11.1}$$

If $f$ is differentiable, so is $g$ and by the implicit function theorem the number of zeros can only change locally if $g'(x) = 0$ at a zero of $g$. In our case of the logistic equation this yields the following system

$$L_\mu(x) = x = \mu x(1 - x),$$

$$L'_\mu(x) = 1 = \mu(1 - 2x), \tag{11.2}$$

which has the only solution $x = 0$ and $\mu = 1$. So what precisely happens at the value $\mu = 1$? Obviously a second fixed point $p = 1 - 1/\mu$ enters our interval. The fixed point 0 is no longer attracting since $L'_\mu(0) = \mu > 1$ but $p$ is for $1 < \mu < 3$ since $L'_\mu(p) = 2 - \mu$. Moreover, I claim $W^s(0) = \{0, 1\}$ and $W^s(p) = (0, 1)$ for $1 < \mu \leq 3$. To show this first observe that we have

$$\frac{L_\mu(x) - p}{x - p} = 1 - \mu x. \tag{11.3}$$