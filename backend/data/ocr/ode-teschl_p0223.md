trajectory will enter $Q_1$ via $L_1$ or converge to $(\lambda^{-1}, 0)$. Finally, if we start in $Q_1$, the only possibility for the trajectory is to converge to $(\lambda^{-1}, 0)$.

In summary, we have proven that for $\lambda \geq 1$ every trajectory in $Q$ converges to $(\lambda^{-1}, 0)$.

Now consider the remaining case $0 < \lambda < 1$ such that there is a third fixed point $(\frac{1+\mu}{1+\mu\lambda}, \frac{1-\lambda}{1+\mu\lambda})$. A phase portrait for $\alpha = \mu = 1$, $\lambda = \frac{1}{2}$ is shown in Figure 7.3.

Again it looks like all trajectories converge to the sink in the middle. We will use the same strategy as before. Now the lines $L_1$ and $L_2$ split $Q$ into four regions $Q_1$, $Q_2$, $Q_3$, and $Q_4$ (where $Q_4$ is the new one). As before we can show that trajectories pass through these sets according to $Q_4 \rightarrow Q_3 \rightarrow Q_2 \rightarrow Q_1 \rightarrow Q_4$ unless they get absorbed by one of the fixed points. However, there is now a big difference to the previous case: A trajectory starting in $Q_4$ can return to $Q_4$ and hence there could be periodic orbits.

To exclude periodic orbits we will try to find a Liapunov function. Inspired by (7.6) we will try to scale $x$ and $y$ such that the minimum is at the fixed point $(x_0, y_0) = (\frac{1+\mu}{1+\mu\lambda}, \frac{1-\lambda}{1+\mu\lambda})$. We introduce

$$L(x, y) = \gamma_1 f\left(\frac{y}{y_0}\right) + \alpha \gamma_2 f\left(\frac{x}{x_0}\right), \quad f(x) = x - 1 - \log(x),$$

where the constants $\gamma_1, \gamma_2 > 0$ are to be determined. Using

$$\dot{x} = (-\bar{y} - \lambda \bar{x})x, \quad \dot{y} = \alpha (\bar{x} - \mu \bar{y})y, \quad \bar{x} = x - x_0, \quad \bar{y} = y - y_0$$

we compute

$$\dot{L} = \frac{\partial L}{\partial x} \dot{x} + \frac{\partial L}{\partial y} \dot{y} = -\alpha \left( \frac{\lambda \gamma_2}{x_0} \bar{x}^2 + \frac{\mu \gamma_1}{y_0} \bar{y}^2 + \left( \frac{\gamma_2}{x_0} - \frac{\gamma_1}{y_0} \right) \bar{x} \bar{y} \right).$$

The right-hand side will be negative if we choose $\gamma_1 = y_0$ and $\gamma_2 = x_0$ such that the third term vanishes. Hence we again see that all orbits starting in $Q$ converge to the fixed point $(x_0, y_0)$.