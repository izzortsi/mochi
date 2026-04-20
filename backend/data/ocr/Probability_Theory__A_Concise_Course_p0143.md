The behavior of the integral curves going through the point $x = z, \alpha < z < 1$ for $t = 0$ is entirely analogous. The only difference is that $x(t)$ now decreases monotonically, since the derivative $x'(t) = f[x(t)]$ is negative and $f(x) \leq 0$ for $\alpha < x < 1$. The behavior of typical integral curves in the interval $0 < z < 1$ is shown in Figure 12, where $0 < z_1 < \alpha < z_2 < 1$.

The behavior of the integral curves at $z = 1$ warrants special discussion. First we note that in any case $x(t) \equiv 1$ is an integral curve corresponding to $z = 1$. Suppose

$$\int_{x_0}^{1} \frac{dx}{f(x)} = -\infty$$

for some $x_0, \alpha < x_0 < 1$. Then an arbitrary integral curve of the form

$$t = t_0 + \int_{x_0}^{x} \frac{du}{f(u)}, \quad 0 \leq x < 1,$$

going through some point $(t_0, x_0)$, decreases without limit as $x \to 1$, i.e.,

$$t = t_0 + \int_{x_0}^{x} \frac{du}{f(u)} \to -\infty$$

as $x \to 1$. This shows that given any $t_0 > 0$, the equation

$$t(z) = t_0 - \int_{x_0}^{z} \frac{du}{f(u)} = 0$$

holds for some $x = z, \alpha < z < 1$. Hence every integral curve intersects the axis $t = 0$ in a point $(0, z)$ such that $\alpha < z < 1$ (see Figure 13). It follows that in this case $x(t) \equiv 1$ is the unique integral curve going through the point $(0, 1)$.

On the other hand, suppose

$$\int_{x_0}^{1} \frac{dx}{f(x)} > -\infty.$$

Then for sufficiently large $t_0$, the integral curve (15) intersects the integral curve $x(t) \equiv 1$, and is in fact tangent to it at the point $(\tau, 1)$ where

$$\tau = t_0 + \int_{x_0}^{1} \frac{dx}{f(x)}$$

$^6$ This is always the case if $f'(1) < \infty$ (why?).