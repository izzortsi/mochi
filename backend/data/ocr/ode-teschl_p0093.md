The matrix $\Pi(t, t_0)$ is called **principal matrix solution** (at $t_0$) and it solves the matrix valued initial value problem

$$\dot{\Pi}(t, t_0) = A(t)\Pi(t, t_0), \quad \Pi(t_0, t_0) = \mathbb{I}.$$

(3.83)

Again observe that our basic existence and uniqueness result applies. In fact, it is easy to check, that a matrix $X(t)$ satisfies $\dot{X} = A(t)X$ if and only if every column satisfies (3.79). In particular, $X(t)c$ solves (3.79) for every constant vector $c$ in this case. In summary,

**Theorem 3.10.** The solutions of the system (3.79) form an $n$ dimensional vector space. Moreover, there exists a matrix-valued solution $\Pi(t, t_0)$ such that the solution satisfying the initial condition $x(t_0) = x_0$ is given by $\Pi(t, t_0)x_0$.

**Example.** In the simplest case, where $A(t) \equiv A$ is constant, we of course have $\Pi(t, t_0) = \mathrm{e}^{(t-t_0)A}$.

**Example.** Consider the system

$$\dot{x} = \begin{pmatrix} 1 & t \\ 0 & 2 \end{pmatrix} x,$$

(3.84)

which explicitly reads

$$\dot{x}_1 = x_1 + t x_2, \quad \dot{x}_2 = 2x_2.$$

(3.85)

We need to find the solution corresponding to the initial conditions $x(t_0) = \delta_1 = (1, 0)$ respectively $x(t_0) = \delta_2 = (0, 1)$. In the first case $x(t_0) = \delta_1$, the second equation gives $x_2(t) = 0$ and plugging this into the first equation shows $x_1(t) = \mathrm{e}^{t-t_0}$, that is, $\phi(t, t_0, \delta_1) = (\mathrm{e}^{t-t_0}, 0)$. Similarly, in the second case $x(t_0) = (0, 1)$, the second equation gives $x_2(t) = \mathrm{e}^{2(t-t_0)}$ and plugging this into the first equation shows $x_1(t) = \mathrm{e}^{2(t-t_0)}(t-1) - \mathrm{e}^{t-t_0}(t_0-1)$, that is, $\phi(t, t_0, \delta_2) = (\mathrm{e}^{2(t-t_0)}(t-1) - \mathrm{e}^{t-t_0}(t_0-1), \mathrm{e}^{2(t-t_0)})$. Putting everything together we obtain

$$\Pi(t, t_0) = \begin{pmatrix} \mathrm{e}^{t-t_0} & \mathrm{e}^{2(t-t_0)}(t-1) - \mathrm{e}^{t-t_0}(t_0-1) \\ 0 & \mathrm{e}^{2(t-t_0)} \end{pmatrix}.$$

(3.86)

Note that using Gronwall’s inequality (cf. Problem 2.14) one can get a rough estimate on the norm of the principal matrix solution

$$\|\Pi(t, t_0)\| \leq \mathrm{e}^{\left|\int_{t_0}^{t} \|A(s)\| ds\right|}.$$

(3.87)

A better estimate is derived in Problem 3.31.

Furthermore, $\Pi(t, t_0)$ satisfies

$$\Pi(t, t_1)\Pi(t_1, t_0) = \Pi(t, t_0)$$

(3.88)