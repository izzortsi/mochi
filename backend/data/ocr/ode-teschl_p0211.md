in the qualitative behavior of solutions. The systematic study of these phenomena is known as **bifurcation theory**. I do not want to go into further details at this point but I will rather show you some prototypical examples.

The system

$$\dot{x} = \mu x - x^3$$

(6.31)

has one stable fixed point for $\mu \leq 0$ which becomes unstable and splits off two stable fixed points at $\mu = 0$. This is known as **pitchfork bifurcation**.

The system

$$\dot{x} = \mu x - x^2$$

(6.32)

has two stable fixed points for $\mu \neq 0$ which collide and exchange stability at $\mu = 0$. This is known as **transcritical bifurcation**. The system

$$\dot{x} = \mu + x^2$$

(6.33)

has one stable and one unstable fixed point for $\mu < 0$ which collide at $\mu = 0$ and vanish. This is known as **saddle-node bifurcation**.

Observe that by the implicit function theorem, the number of fixed points can locally only change at a point $(x_0, \mu_0)$ if $f(x_0, \mu_0) = 0$ and $\frac{\partial f}{\partial x}(x_0, \mu_0) = 0$.

**Problem 6.15.** Suppose $f \in C^1(\mathbb{R})$. Show directly that a fixed point $x_0$ is exponentially stable if $f'(x_0) < 0$ and unstable if $f'(x_0) > 0$.

**Problem 6.16.** Consider the system

$$\dot{x} = x - y - x(x^2 + y^2) + \frac{xy}{\sqrt{x^2 + y^2}},$$

$$\dot{y} = x + y - y(x^2 + y^2) - \frac{x^2}{\sqrt{x^2 + y^2}}.$$

(6.34)

Show that $(1,0)$ is not stable even though it satisfies (6.26). (Hint: Show that in polar coordinates the system is given by $\dot{r} = r(1 - r^2)$, $\dot{\theta} = 2\sin(\theta/2)^2$.)

**Problem 6.17.** Draw phase plots as a function of $\mu$ for the three systems from above and prove all statements made above.

### 6.6. Stability via Liapunov’s method

Pick a fixed point $x_0$ of $f$ and an open neighborhood $U(x_0)$ of $x_0$. A **Lia-punov function** is a continuous function

$$L: U(x_0) \to \mathbb{R}$$

(6.35)

which is zero at $x_0$, positive for $x \neq x_0$, and satisfies

$$L(\phi(t_0)) \geq L(\phi(t_1)), \quad t_0 < t_1, \quad \phi(t_j) \in U(x_0) \setminus \{x_0\},$$

(6.36)