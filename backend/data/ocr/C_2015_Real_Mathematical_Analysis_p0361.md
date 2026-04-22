Figure 128 When $n + 1 = 3$ the cone map sends vertical cylinders to vertical cones, which are then projected to the plane.

and from (25) we get

(26) $(Ld + dL)(hdx_I) = hdx_I$.

The linearity of $L$ and $d$ promote (26) to general $k$-forms,

$$(Ld + dL)\omega = \omega,$$

and as remarked at the outset, the existence of such an $L$ implies that closed forms on $\mathbb{R}^n$ are exact. $\square$

47 Corollary If $U$ is diffeomorphic to $\mathbb{R}^n$ then all closed forms on $U$ are exact.

Proof Let $T : U \to \mathbb{R}^n$ be a diffeomorphism and assume that $\omega$ is a closed $k$-form on $U$. Set $\alpha = (T^{-1})^*\omega$. Since pullback commutes with $d$ we see that $\alpha$ is a closed $k$-form on $\mathbb{R}^n$. By the Poincaré Lemma there is a $(k - 1)$-form $\mu$ on $\mathbb{R}^n$ with $\alpha = d\mu$. Then

$$dT^*\mu = T^*d\mu = T^*\alpha = T^* \circ (T^{-1})^*\omega = (T^{-1} \circ T)^*\omega = \mathrm{id}^*\omega = \omega$$

which shows that $\omega$ is exact with antiderivative $T^*\mu$. $\square$

48 Corollary Locally, closed forms defined on open subsets of $\mathbb{R}^n$ are exact.

Proof Locally an open subset of $\mathbb{R}^n$ is diffeomorphic to $\mathbb{R}^n$. $\square$