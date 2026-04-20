7.1. Examples from ecology

Figure 7.2. Phase portrait of a predator prey model with limiting growth.

As before the lines $x = 0$ and $y = 0$ are invariant but now there are four fixed points

$$(0, 0), \quad (\lambda^{-1}, 0), \quad (0, -\mu^{-1}), \quad \left( \frac{1 + \mu}{1 + \mu \lambda}, \frac{1 - \lambda}{1 + \mu \lambda} \right).$$

(7.8)

The third one is outside of $\overline{Q}$ and so will be the last one if $\lambda > 1$.

We first look at the case where $\lambda \geq 1$ such that there is only one additional fixed point in $\overline{Q}$, namely $(\lambda^{-1}, 0)$. It is a hyperbolic sink if $\lambda > 1$ and if $\lambda = 1$, one eigenvalue is zero. Unfortunately, the equation for the orbits is no longer separable and hence a more thorough investigation is necessary to get a complete picture of the orbits.

The key idea now is to split $Q$ into regions where $\dot{x}$ and $\dot{y}$ have definite signs and then use the following elementary observation (Problem 7.1).

Lemma 7.2. Let $\phi(t) = (x(t), y(t))$ be the solution of a planar system. Suppose $U$ is open and $\overline{U}$ is compact. If $x(t)$ and $y(t)$ are strictly monotone in $U$, then either $\phi(t)$ hits the boundary at some finite time $t = t_0$ or $\phi(t)$ converges to a fixed point $(x_0, y_0) \in \overline{U}$.

Now let us see how this applies to our case. The regions where $\dot{x}$ and $\dot{y}$ have definite signs are separated by the two lines

$$L_1 = \{(x, y)|y = 1 - \lambda x\}, \quad L_2 = \{(x, y)|\mu y = x - 1\}.$$

(7.9)

A typical situation for $\alpha = \mu = 1$, $\lambda = 2$ is depicted in Figure 7.2.

This picture seems to indicate that all trajectories converge to the fixed point $(\lambda^{-1}, 0)$. Now let us try to prove this. Denote the regions in $Q$ enclosed by these lines by (from left to right) $Q_1, Q_2$, and $Q_3$. Observe that the lines $L_2$ and $L_1$ are transversal and thus can only be crossed in the direction from $Q_3 \rightarrow Q_2$ and $Q_2 \rightarrow Q_1$, respectively.

Suppose we start at a point $(x_0, y_0) \in Q_3$. Then, adding to $Q_3$ the constraint $x \leq x_0$, we can apply Lemma 7.2 to conclude that the trajectory enters $Q_2$ through $L_2$ or converges to a fixed point in $\overline{Q_3}$. The last case is only possible if $(\lambda^{-1}, 0) \in \overline{Q_3}$, that is, if $\lambda = 1$. Similarly, starting in $Q_2$ the