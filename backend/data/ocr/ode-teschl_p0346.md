However, it is clear that we will not be able to produce chaos with such a perturbation since the Poincaré–Bendixson theorem implies that the motion of a planar system must be quite regular. Hence we need at least another dimension and hence we will take a nonautonomous perturbation and consider

$$\dot{x} = f(x) + \varepsilon g(\tau, x, \varepsilon), \quad \dot{\tau} = 1,$$

(13.12)

where $g(\tau, x, \varepsilon)$ is periodic with respect to $\tau$, say $g(\tau + 2\pi, x, \varepsilon) = g(\tau, x, \varepsilon)$. We will abbreviate $z = (x, \tau)$.

Of course our pictures from above do no longer show the entire system but they can be viewed as a slice for some fixed $\tau = t_0$. Note that the first picture will not change when $\tau$ varies but the second will. In particular, $p_0(\tau, \varepsilon)$ will now correspond to a hyperbolic periodic orbit and the manifolds in our pictures are the intersection of the stable and unstable manifolds of $p_0(\tau, \varepsilon)$ with the plane $\Sigma = \{(x, \tau)|\tau = t_0\}$. Moreover, taking $\Sigma$ as the section of a corresponding Poincaré map $P_\Sigma$, these intersections are just the stable and unstable manifold of the fixed point $p_0(\varepsilon) = p_0(t_0, \varepsilon)$ of $P_\Sigma$. Hence if we can find a transverse intersection point, the Smale–Birkhoff theorem will tell us that there is an invariant Cantor set close to this point, where the Poincaré map is chaotic.

Now it remains to find a good criterion for the existence of such a transversal intersection. Replacing $g(\tau, x, \varepsilon)$ with $g(\tau - t_0, x, \varepsilon)$ it is no restriction to assume $t_0 = 0$. Denote the (un)stable manifold of the periodic orbit $(p_0, \tau)$ by $W(p_0) = \{(\Phi(x_0, s), \tau)|(s, \tau) \in \mathbb{R} \times S^1\}$. Then for any given point $z_0 = (x_0, t_0) \in W(p_0)$ a good measure of the splitting of the perturbed stable and unstable manifolds is the distance of the respective intersections points with the line through $z_0$ and orthogonal to the vector field. That is, denote by $z_0^+(\varepsilon), z_0^-(\varepsilon)$ the intersection of the stable, unstable manifold with the line $\{(x_0 + uf(x_0)^\perp, 0)|u \in \mathbb{R}\}$, respectively. Then the separation of the manifolds is measured by

$$\Delta(z_0, \varepsilon) = f(x_0)^\perp(x_0^-(\varepsilon) - x_0^+(\varepsilon)) = f(x_0) \wedge (x_0^-(\varepsilon) - x_0^+(\varepsilon)).$$

(13.13)