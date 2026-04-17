A differentiable function $x_+(t)$ satisfying

$$\dot{x}_+(t) > f(t, x_+(t)), \quad t \in [t_0, T),$$

(1.65)

is called a **super solution** (or **upper solution**) of our equation. Similarly, a differentiable function $x_-(t)$ satisfying

$$\dot{x}_-(t) < f(t, x_-(t)), \quad t \in [t_0, T),$$

(1.66)

is called a **sub solution** (or **lower solution**).

**Example.** For example, $x_+(t) = t$ is a super solution and $x_-(t) = -t$ is a sub solution of our equation for $t \geq 0$.

**Lemma 1.2.** Let $x_+(t), x_-(t)$ be super, sub solutions of the differential equation $\dot{x} = f(t, x)$ on $[t_0, T)$, respectively. Then for every solution $x(t)$ on $[t_0, T)$ we have

$$x(t) < x_+(t), \quad t \in (t_0, T), \quad \text{whenever} \quad x(t_0) \leq x_+(t_0),$$

(1.67)

respectively

$$x_-(t) < x(t), \quad t \in (t_0, T), \quad \text{whenever} \quad x(t_0) \geq x_-(t_0).$$

(1.68)

**Proof.** In fact, consider $\Delta(t) = x_+(t) - x(t)$. Then we have $\Delta(t_0) \geq 0$ and $\dot{\Delta}(t) > 0$ whenever $\Delta(t) = 0$. Hence $\Delta(t)$ can cross 0 only from below. Since we start with $\Delta(t_0) \geq 0$, we have $\Delta(t) > 0$ for $t > t_0$ sufficiently close to $t_0$. In fact, if $\Delta(t_0) > 0$ this follows from continuity and otherwise, if $\Delta(t_0) = 0$, this follows from $\dot{\Delta}(t_0) > 0$. Now let $t_1 > t_0$ be the first value with $\Delta(t_1) = 0$. Then $\Delta(t) > 0$ for $t \in (t_0, t_1)$, which contradicts $\dot{\Delta}(t_1) > 0$.

Similar results hold for $t < t_0$. The details are left to the reader (Problem 1.29).

Now we are able to answer our remaining questions. Since we were already successful by considering the curves given by $f(t, x) = 0$, let us look at the **isoclines** $f(t, x) = \text{const}$.

Considering $x^2 - t^2 = -2$ the corresponding curve is

$$y_+(t) = -\sqrt{t^2 - 2}, \quad t > \sqrt{2},$$

which is easily seen to be a super solution

$$\dot{y}_+(t) = -\frac{t}{\sqrt{t^2 - 2}} > -2 = f(t, y_+(t))$$

for $t > 2\sqrt{2/3}$. Thus, as soon as a solution $x(t)$ enters the region between $y_+(t)$ and $x_-(t)$ it must stay there and hence converge to the line $x = -t$ since $y_+(t)$ does.