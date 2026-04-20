7. Planar dynamical systems

$$\Delta(y_0) = W(0, P(y_0)) - W(0, y_0) = -\int_0^T x(t)f(x(t))dt.$$ (7.28)

Now what can we say about this function? Clearly, for $y_0 < \alpha$ we have $\Delta(y_0) > 0$. Hence it suffices to show that $\Delta(y_0)$ becomes negative as $y_0 \to \infty$.

By the last part of Lemma 7.7 there is a number $r > 0$ such that the trajectory starting at $(0, r)$ intersects the graph of $f$ at $(\beta, 0)$. So for $y_0 > r$ our trajectory intersects the line $x = \beta$ at $t_1$ and $t_2$. Furthermore, since the intersection with $f$ can only be for $t \in (t_1, t_2)$, we have $y(t) > f(x(t))$ for $0 \leq t \leq t_1$ and $y(t) < f(x(t))$ for $t_2 \leq t \leq T$. Now let us split $\Delta$ into three parts by splitting the integral at $t_1$ and $t_2$.

For the first part we obtain

$$\Delta_1(y_0) = -\int_0^{t_1} x(t)f(x(t))dt = \int_0^{\beta} \frac{-xf(x)}{y(x) - f(x)}dx,$$ (7.29)

where only $y(x)$ depends on $y_0$ in the last expression. Since $y(x)$ is increasing as $y_0$ increases (orbits cannot intersect), the absolute value of the integrand in $\Delta_1(y_0)$ decreases. In addition, since $y(t_1) \to \infty$ as $y_0 \to \infty$ we have $\lim_{y_0 \to \infty} \Delta_1(y_0) = 0$.

The second part is

$$\Delta_2(y_0) = -\int_{t_1}^{t_2} x(t)f(x(t))dt = -\int_{y(t_2)}^{y(t_1)} f(x(y))dy < 0.$$ (7.30)