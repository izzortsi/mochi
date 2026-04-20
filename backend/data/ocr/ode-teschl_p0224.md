Theorem 7.3. Suppose $\lambda \geq 1$. Then there is no fixed point of the equations (7.7) in $Q$ and all trajectories in $Q$ converge to the point $(\lambda^{-1}, 0)$.

If $0 < \lambda < 1$ there is only one fixed point $(\frac{1+\mu}{1+\mu\lambda}, \frac{1-\lambda}{1+\mu\lambda})$ in $Q$. It is asymptotically stable and all trajectories in $Q$ converge to this point.

For our original model this means that the predators can only survive if their growth rate is positive at the limiting population $\lambda^{-1}$ of the prey species.

Similarly on could consider systems of competing or cooperating species

$$\dot{x} = \alpha(x, y)x, \quad \dot{y} = \beta(x, y)y. \tag{7.13}$$

Here we will call two species cooperative if the growth of one species increases the growth rate of the other and vice versa, that is,

$$\frac{\partial}{\partial y} \alpha(x, y) \geq 0 \quad \text{and} \quad \frac{\partial}{\partial x} \beta(x, y) \geq 0, \quad (x, y) \in Q. \tag{7.14}$$

Similarly we will call two species competitive if the growth of one species decreases the growth rate of the other and vice versa, that is,

$$\frac{\partial}{\partial y} \alpha(x, y) \leq 0 \quad \text{and} \quad \frac{\partial}{\partial x} \beta(x, y) \leq 0, \quad (x, y) \in Q. \tag{7.15}$$

It turns out that in this situation the analysis is much simpler. Moreover, we can even be slightly more general.

Theorem 7.4. Suppose the system

$$\dot{x} = f(x, y), \quad \dot{y} = g(x, y), \quad (x, y) \in M \subseteq \mathbb{R}^2 \tag{7.16}$$

is either strictly cooperative,

$$\frac{\partial}{\partial y} f(x, y) > 0 \quad \text{and} \quad \frac{\partial}{\partial x} g(x, y) > 0, \quad (x, y) \in M, \tag{7.17}$$

or strictly competitive,

$$\frac{\partial}{\partial y} f(x, y) < 0 \quad \text{and} \quad \frac{\partial}{\partial x} g(x, y) < 0, \quad (x, y) \in M. \tag{7.18}$$

Then all orbits converge either to a fixed point or to a boundary point (including $\infty$) of $M$.

Proof. We assume that our system is cooperative and denote the quadrants of $\mathbb{R}^2$ by $Q_1 = \{(x, y)|x, y > 0\}, Q_2 = \{(x, y)|-x, y > 0\}, Q_3 = \{(x, y)|x, -y > 0\}$, and $Q_4 = \{(x, y)|-x, -y > 0\}$. The competitive case can be handled analogously.

We first note that if $(\dot{x}, \dot{y}) \in \overline{Q_1}$ at some time $t = t_0$, then $(\dot{x}, \dot{y}) \in Q_1$ for all $t > t_0$. In fact, if we should have $\dot{x}(t_1) = 0$, then

$$\ddot{x} = \frac{\partial f}{\partial x}(x, y)\dot{x} + \frac{\partial f}{\partial y}(x, y)\dot{y}$$