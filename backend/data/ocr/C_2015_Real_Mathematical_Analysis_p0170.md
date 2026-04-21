A Nonanalytic Smooth Function

The fact that smooth functions need not be analytic is somewhat surprising; i.e., $C^\omega$ is a proper subset of $C^\infty$. A standard example is

$$e(x) = \begin{cases} e^{-1/x} & \text{if } x > 0 \\ 0 & \text{if } x \leq 0. \end{cases}$$

Its smoothness is left as an exercise in the use of L’Hôpital’s Rule and induction, Exercise 17. At $x = 0$ the graph of $e(x)$ is infinitely tangent to the $x$-axis. Every derivative $e^{(r)}(0) = 0$. See Figure 65.

Figure 65 The graph of $e(x) = e^{-1/x}$

It follows that $e(x)$ is not analytic. For if it were then it could be expressed near $x = 0$ as a convergent series $e(h) = \sum a_r h^r$, and $a_r = e^{(r)}(0)/r!$. Thus $a_r = 0$ for each $r$, and the series converges to zero, whereas $e(h)$ is different from zero when $h > 0$. Although not analytic at $x = 0$, $e(x)$ is analytic elsewhere. See also Exercise 4.37.

Taylor Approximation

The $r^{th}$-order Taylor polynomial of an $r^{th}$-order differentiable function $f$ at $x$ is

$$P(h) = f(x) + f'(x)h + \frac{f''(x)}{2!}h^2 + \ldots + \frac{f^{(r)}(x)}{r!}h^r = \sum_{k=0}^{r} \frac{f^{(k)}(x)}{k!}h^k.$$