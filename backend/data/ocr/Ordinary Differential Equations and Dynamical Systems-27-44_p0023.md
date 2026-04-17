But will every solution in region II eventually end up between $y_+(t)$ and $x_-(t)$? The answer is yes: Since $x(t)$ is decreasing in region II, every solution will eventually be below $-y_+(t)$. Furthermore, every solution $x(t)$ starting at a point $(t_0, x_0)$ below $-y_+(t)$ and above $y_+(t)$ satisfies $\dot{x}(t) < -2$ as long as it remains between $-y_+(t)$ and $y_+(t)$. Hence, by integrating this inequality, $x(t) - x_0 < -2(t - t_0)$, we see that $x(t)$ stays below the line $x_0 - 2(t - t_0)$ as long as it remains between $-y_+(t)$ and $y_+(t)$. Hence every solution which is in region II at some time will converge to the line $x = -t$.

Finally note that there is nothing special about $-2$, any value smaller than $-1$ would have worked as well.

Now let us turn to the other question. This time we take an isocline $x^2 - t^2 = 2$ to obtain a corresponding sub solution

$$y_-(t) = \sqrt{2 + t^2}, \quad t > 0.$$

At first sight this does not seem to help much because the sub solution $y_-(t)$ lies above the super solution $x_+(t)$. Hence solutions are able to leave the region between $y_-(t)$ and $x_+(t)$ but cannot come back. However, let us look at the solutions which stay inside at least for some finite time $t \in [0, T]$. By following the solutions with initial conditions $(T, x_+(T))$ and $(T, y_-(T))$ we see that they hit the line $t = 0$ at some points $a(T)$ and $b(T)$, respectively. See the picture below which shows two solutions entering the shaded region between $x_+(t)$ and $y_-(t)$ at $T = 0.5$:

Since different solutions can never cross, the solutions which stay inside for (at least) $t \in [0, T]$ are precisely those starting at $t = 0$ in the interval $[a(T), b(T)]$. Moreover, this also implies that $a(T)$ is strictly increasing and $b(T)$ is strictly decreasing. Taking $T \to \infty$ we see that all solutions starting in the interval $[a(\infty), b(\infty)]$ (which might be just one point) at $t = 0$, stay inside for all $t > 0$. Furthermore, since $x \mapsto f(t, x) = x^2 - t^2$ is increasing in region I, we see that the distance between two solutions

$$x_1(t) - x_0(t) = x_1(t_0) - x_0(t_0) + \int_{t_0}^{t} \left( f(s, x_1(s)) - f(s, x_0(s)) \right) ds$$

must increase as well. If there were two such solutions, their distance would consequently increase. But this is impossible, since the distance of $x_+(t)$