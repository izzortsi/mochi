45 Stokes’ Formula for a General $k$-cell Assume that $k+1=n$. If $\omega \in \Omega^k(\mathbb{R}^n)$ and if $\varphi \in C_{k+1}(\mathbb{R}^n)$ then

$$\int_\varphi d\omega = \int_{\partial\varphi} \omega.$$

Proof Using the pullback definition and applying (c) of Theorem 43 when $T = \varphi : I^{k+1} \to \mathbb{R}^n$ and $\iota : I^{k+1} \to \mathbb{R}^{k+1}$ is the identity-inclusion gives

$$\int_\varphi d\omega = \int_{\varphi \circ \iota} d\omega = \int_\iota \varphi^* d\omega = \int_\iota d\varphi^* \omega = \int_{\partial\iota} \varphi^* \omega = \int_{\partial\varphi} \omega.$$

Remark The assumption $k = n-1$ in Theorem 44 and Corollary 45 makes the notation simpler, but the same assertions and proofs are valid for all $k$, $0 \leq k \leq n-1$.

Stokes’ Formula on Manifolds

If $M \subset \mathbb{R}^n$ divides into $(k+1)$-cells diffeomorphic to $I^{k+1}$ and its boundary divides into $k$-cells diffeomorphic to $I^k$ as shown in Figure 127, then there is a version of Stokes’ Formula for $M$. Namely, if $\omega$ is a $k$-form then

$$\int_M d\omega = \int_{\partial M} \omega.$$

It is required that the boundary $k$-cells which are interior to $M$ cancel each other out. This prohibits $M$ being the Möbius band and other nonorientable sets. The $(k+1)$-cells “tile” $M$.

Figure 127 Manifolds of 2-cells diffeomorphic to $I^2$. The boundary of $M$, drawn darker, may have several connected components.