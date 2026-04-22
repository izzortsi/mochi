Vector Calculus

The Fundamental Theorem of Calculus can be viewed a special case of Stokes’ Formula

$$\int_M d\omega = \int_{\partial M} \omega$$

by taking $M = [a, b] \subset \mathbb{R}^1$ and $\omega = f$. The integral of $\omega$ over the 0-chain $\partial M = b - a$ is $f(b) - f(a)$, while the integral of $d\omega$ over $M$ is $\int_a^b f'(x) dx$. Likewise, if $f : \mathbb{R}^2 \to \mathbb{R}$ is smooth then the integral of the 1-form $df = f_x dx + f_y dy$ is “path independent” in the sense that if $\varphi, \psi$ are paths from $p$ to $q$ then

$$\int_\varphi df = \int_\psi df.$$

After all, paths are 1-cells and both integrals equal $f(q) - f(p)$. The same holds in $\mathbb{R}^3$ and $\mathbb{R}^n$.

Second, Green’s Formula in the plane,

$$\iint_D (g_x - f_y) dxdy = \int_C fdx + gdy,$$

is also a special case when we take $\omega = f dx + g dy$. Here, the region $D$ is bounded by the curve $C$. It is a manifold of 2-cells in the plane.

Third, the Gauss Divergence Theorem

$$\iiint_D \text{div } F = \iiint_S \text{flux } F,$$

is a consequence of Stokes’ Formula. Here, $F = (f, g, h)$ is a smooth vector field defined on $U \subset \mathbb{R}^3$. (The notation indicates that $f$ is the $x$-component of $F$, $g$ is its $y$-component, and $h$ is its $z$-component.) The divergence of $F$ is the scalar function

$$\text{div } F = f_x + g_y + h_z.$$

If $\varphi$ is a 2-cell in $U$ then the integral

$$\int_\varphi f dy \wedge dz + g dz \wedge dx + h dx \wedge dy$$

is the flux of $F$ across $\varphi$. Let $S$ be a compact manifold of 2-cells. The total flux across $S$ is the sum of the flux across its 2-cells. If $S$ bounds a region $D \subset U$ then the Gauss Divergence Theorem is just Stokes’ Formula with

$$\omega = f dy \wedge dz + g dz \wedge dx + h dx \wedge dy.$$