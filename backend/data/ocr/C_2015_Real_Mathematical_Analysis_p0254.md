The ODE can be expressed geometrically as follows. The $m$ real-valued functions $f_i$ can be combined into a vector function $F(x) = (f_1(x), \ldots, f_m(x))$ where $x = (x_1, \ldots, x_m)$. Thus $F$ is a **vector field** on $U$, and we seek a **trajectory** of $F$, that is, a curve $\gamma : (a, b) \to U$ such that $a < 0 < b$ and for all $t \in (a, b)$ we have

$$\gamma'(t) = F(\gamma(t)) \quad \text{and} \quad \gamma(0) = p.$$

The components of $\gamma$ are the functions $x_i(t)$ that solve the ODE and $p$ is their initial condition. I contend that this geometric view of an ODE as a vector field is the best way to get intuition about it. See Figure 101.

**Figure 101** $\gamma$ is always tangent to the vector field $F$.

We think of the vector field $F$ defining at each $x \in U$ a vector $F(x)$ whose foot lies at $x$ and to which $\gamma$ must be tangent. The vector $\gamma'(t)$ is $(\gamma'_1(t), \ldots, \gamma'_m(t))$ where $\gamma_1, \ldots, \gamma_m$ are the components of $\gamma$. The trajectory $\gamma(t)$ describes how a particle travels with prescribed velocity $F$. At each time $t$, $\gamma(t)$ is the position of the particle; its velocity there is exactly the vector $F$ at that point. Intuitively, trajectories should exist because particles do move.

The contraction principle gives a way to find trajectories of vector fields, or what is the same thing, to solve ODEs. We will assume that $F$ satisfies a **Lipschitz**