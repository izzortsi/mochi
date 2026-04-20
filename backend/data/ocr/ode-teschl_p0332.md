as the stable and unstable manifold, respectively. They are clearly invariant under the flow and are locally given by

$$M^{\pm}(\gamma(x_0)) \cap U(\gamma(x_0)) =$$
$$\{ \Phi(t_0, x_0) + \Pi_{x_0}(t_0, 0)a + h^{\pm}(t_0, \Pi_{x_0}(t_0, 0)a) |$$
$$a \in E^{\pm}(0) \cap U, \ t_0 \in [0, T] \}. \tag{12.22}$$

The points in $M^{\pm}(\gamma(x_0))$ are said to have an asymptotic phase, that is, there is a $t_0$ such that

$$\Phi(t, x) \rightarrow \Phi(t + t_0, x_0) \quad \text{as} \quad t \rightarrow \infty \text{ or } t \rightarrow -\infty. \tag{12.23}$$

As in the case of a fixed point, the (un)stable manifold coincides with the (un)stable set

$$W^{\pm}(\gamma(x_0)) = \{ x | \lim_{t \rightarrow \pm\infty} d(\Phi(t, x), \gamma(x_0)) = 0 \} \tag{12.24}$$

of $\gamma(x_0)$ if the orbit is hyperbolic.

**Theorem 12.9.** Suppose $f \in C^k$ has a hyperbolic periodic orbit $\gamma(x_0)$. Then there is a neighborhood $U(x_0)$ such that $\gamma_{\pm}(x) \subset U(\gamma(x_0))$ if and only if $x \in M^{\pm}(\gamma(x_0))$. In particular,

$$W^{\pm}(\gamma(x_0)) = M^{\pm}(\gamma(x_0)). \tag{12.25}$$

**Proof.** Suppose $d(\Phi(t, x), \gamma(x_0)) \rightarrow 0$ as $t \rightarrow \infty$. Note that it is no restriction to assume that $x$ is sufficiently close to $\gamma(x_0)$. Choose a transversal arc $\Sigma$ containing $x$ and consider the corresponding Poincaré map $P_{\Sigma}$. Then $M^{\pm}(\gamma(x_0)) \cap \Sigma$ must be the stable and unstable manifolds of the Poincaré map. By the Hartman–Grobman theorem for flows, $x$ must lie on the stable manifold of the Poincaré map and hence it lies in $M^{\pm}(\gamma(x_0))$.

Moreover, if $f$ depends on a parameter $\lambda$, then we already know that a hyperbolic periodic orbit persists under small perturbations and depends smoothly on the parameter by Lemma 12.7. Moreover, the same is true for the stable and unstable manifolds (which can be proven as in Theorem 9.6).

**Theorem 12.10.** Let $f(x, \lambda)$ be $C^k$ and suppose $f(x, 0)$ has a hyperbolic periodic orbit $\gamma(x_0)$. Then, in a sufficiently small neighborhood of 0 there is a $C^k$ map $\lambda \mapsto x_0(\lambda)$ such that $x_0(0) = x_0$ and $\gamma(x_0(\lambda))$ is a periodic orbit of $f(x, \lambda)$. Moreover, the corresponding stable and unstable manifolds are locally given by

$$M^{\pm}(\gamma(x_0(\lambda))) \cap U(\gamma(x_0(\lambda))) = \{ \Phi(t_0, x_0(\lambda), \lambda) + a(\lambda) + h^{\pm}(t_0, a(\lambda)) |$$
$$a \in E^{\pm}(0) \cap U, \ t_0 \in [0, T] \}, \tag{12.26}$$

where $a(\lambda) = \Pi_{x_0(\lambda)}(t_0, 0, \lambda)P^{\pm}(\lambda)a$, $h^{\pm} \in C^k$.