Hence we can proceed as in Section 9.2 to show the existence of stable and unstable manifolds at $x_0$ defined as

$$M^{\pm}(x_0) = \{x \in M | \sup_{\pm t \geq 0} e^{\pm \gamma t} |\Phi(t, x) - \Phi(t, x_0)| < \infty \text{ for some } \gamma > 0\}.$$

(12.16)

Making this for different points $\Phi(t_0, x_0)$ in our periodic orbit we set

$$M^{\pm}_{t_0}(x_0) = M^{\pm}(\Phi(t_0, x_0)).$$

(12.17)

Note that the linear counterparts are the linear subspaces

$$E^{\pm}(t_0) = \Pi_{x_0}(t_1, 0)E^{\pm}(0)$$

(12.18)

corresponding to the stable and unstable subspace of $M_{x_0}(t_0)$ (compare (3.127)).

**Theorem 12.8** (Stable manifold for periodic orbits). Suppose $f \in C^k$ has a hyperbolic periodic orbit $\gamma(x_0)$ with corresponding monodromy matrix $M(t_0)$.

Then, there is a neighborhood $U(\gamma(x_0))$ and functions $h^{\pm} \in C^k([0, T] \times E^{\pm}, E^{\mp})$ such that

$$M^{\pm}_{t_0}(x_0) \cap U(\gamma(x_0)) = \{ \Phi(t_0, x_0) + a + h^{\pm}(t_0, a) | a \in E^{\pm}(t_0) \cap U \}.$$

(12.19)

Both $h^{\pm}(t_0,.)$ and their Jacobian matrices vanish at $x_0$, that is, $M^{\pm}_{t_0}(x_0)$ are tangent to their respective linear counterpart $E^{\pm}(t_0)$ at $\Phi(t_0, x_0)$. Moreover,

$$|\Phi(t, x) - \Phi(x_0, t + t_0)| \leq C e^{-\pi t \gamma}, \pm t \geq 0, x \in M^{\pm}_{t_0}(x_0)$$

(12.20)

for any $\gamma < \min\{|\text{Re}(\gamma_j)|\}_{j=1}^m$ and some $C > 0$ depending on $\gamma$. Here $\gamma_j$ are the eigenvalues of $Q(t_0)$.

**Proof.** As already pointed out before, the same proof as in Section 9.2 applies. The only difference is that $g$ now depends on $t$. However, since $g$ is periodic we can restrict $t$ to the compact interval $[0, T]$ for all estimates and no problems arise. Hence we get $M^{\pm}_{t_0}$ for each point in the orbit.

Parametrizing each point by $t_0 \in [0, T]$ it is not hard to see that $g$ is $C^k$ as a function of this parameter. Moreover, by (12.18), so are the stable and unstable subspaces of the monodromy matrix $M(t_0)$.

Now we can take the union over all $t_0$ and define

$$M^{\pm}(\gamma(x_0)) = \{x | \sup_{\pm t \geq 0} e^{\pm \gamma t} |\Phi(t, x) - \Phi(t + t_0, x_0)| < \infty \text{ for some } t_0, \gamma > 0\}$$

$$= \bigcup_{t_0 \in [0, T]} M^{\pm}_{t_0}(x_0).$$

(12.21)