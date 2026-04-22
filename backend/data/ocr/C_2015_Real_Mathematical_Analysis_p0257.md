We just need to show that $\Phi$ is a contraction of $\mathcal{C}$. Does $\Phi$ send $\mathcal{C}$ into itself? Given $\gamma \in \mathcal{C}$ we see that $\Phi(\gamma)(t)$ is a continuous (in fact differentiable) vector-valued function of $t$ and that by (22),

$$|\Phi(\gamma)(t) - p| = \left| \int_{0}^{t} F(\gamma(s)) \, ds \right| \leq \tau M \leq r.$$

Therefore, $\Phi$ does send $\mathcal{C}$ into itself. $\Phi$ contracts $\mathcal{C}$ because

$$d(\Phi(\gamma), \Phi(\sigma)) = \sup_{t} \left| \int_{0}^{t} F(\gamma(s)) - F(\sigma(s)) \, ds \right| \leq \tau \sup_{s} |F(\gamma(s)) - F(\sigma(s))| \leq \tau \sup_{s} L|\gamma(s) - \sigma(s)| \leq \tau Ld(\gamma, \sigma)$$

and $\tau L < 1$ by (22). Therefore $\Phi$ has a fixed-point $\gamma$, and $\Phi(\gamma) = \gamma$ implies that $\gamma(t)$ solves (21), which implies that $\gamma$ is differentiable and solves (20).

Any other solution $\sigma(t)$ of (20) defined on the interval $[-\tau, \tau]$ also solves (21) and is a fixed-point of $\Phi$, $\Phi(\sigma) = \sigma$. Since a contraction mapping has a unique fixed-point, $\gamma = \sigma$, which is what local uniqueness means.

The $F$-trajectories define a flow in the following way: To avoid the possibility that trajectories cross the boundary of $U$ (they “escape from $U$”) or become unbounded in finite time (they “escape to infinity”) we assume that $U$ is all of $\mathbb{R}^m$. Then trajectories can be defined for all time $t \in \mathbb{R}$. Let $\gamma(t, p)$ denote the trajectory through $p$. Imagine all points $p \in \mathbb{R}^m$ moving in unison along their trajectories as $t$ increases. They are leaves on a river, motes in a breeze. The point $p_1 = \gamma(t_1, p)$ at which $p$ arrives after time $t_1$ moves according to $\gamma(t, p_1)$. Before $p$ arrives at $p_1$, however, $p_1$ has already gone elsewhere. This is expressed by the flow equation

$$\gamma(t, p_1) = \gamma(t + t_1, p).$$

See Figure 102.

The flow equation is true because as functions of $t$ both sides of the equation are $F$-trajectories through $p_1$, and the $F$-trajectory through a point is locally unique. It is revealing to rewrite the flow equation with different notation. Setting $\varphi_t(p) = \gamma(t, p)$ gives

$$\varphi_{t+s}(p) = \varphi_t(\varphi_s(p)) \text{ for all } t, s \in \mathbb{R}.$$

$\varphi_t$ is called the $t$-advance map. It specifies where each point moves after time $t$. See Figure 103. The flow equation states that $t \mapsto \varphi_t$ is a group homomorphism from