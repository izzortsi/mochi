Figure 129 $T$ retracts $U$ onto $\partial B$. The point $u \in U$ is sent by $T$ to the unique point $u' = T(u)$ at which the segment $[u, G(u)]$, extended through $u$, crosses the sphere $\partial B$.

Step 2. $T^*$ kills all $n$-forms. If there is a point $p \in U$ such that $(DT)_p$ is invertible then the Inverse Function Theorem implies $TU$ contains an open $n$-dimensional ball at $fp$. Since no such ball is contained in $\partial B = TU$, $DT$ is nowhere invertible, its Jacobian determinant $\partial T/\partial u$ is everywhere zero, and $T^* : \Omega^n(\mathbb{R}^n) \to \Omega^n(U)$ is the zero map.

Step 3. There is a map $\varphi : I^n \to B$ that exhibits $B$ as an $n$-cell such that

(a) $\varphi$ is smooth.
(b) $\varphi(I^n) = B$ and $\varphi(\partial I^n) = \partial B$.
(c) $\int_{I^n} \frac{\partial \varphi}{\partial u} du > 0$.

To construct $\varphi$, start with a smooth function $\sigma : \mathbb{R} \to \mathbb{R}$ such that $\sigma(r) = 0$ for $r \leq 1/2$, $\sigma'(r) > 0$ for $1/2 < r < 1$, and $\sigma(r) = 1$ for $r \geq 1$. Then define $\psi : \mathbb{R}^n \to \mathbb{R}^n$