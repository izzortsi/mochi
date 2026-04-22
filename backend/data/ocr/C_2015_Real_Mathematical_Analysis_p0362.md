49 Corollary If $U \subset \mathbb{R}^n$ is open and starlike (in particular, if $U$ is convex) then closed forms on $U$ are exact.

Proof A starlike set $U \subset \mathbb{R}^n$ contains a point $p$ such that the line segment from each $q \in U$ to $p$ lies in $U$. Every starlike open set in $\mathbb{R}^n$ is diffeomorphic to $\mathbb{R}^n$. See Exercise 52.

50 Corollary A smooth vector field $F$ on $\mathbb{R}^3$ (or on an open set diffeomorphic to $\mathbb{R}^3$) is the gradient of a scalar function if and only if its curl is everywhere zero.

Proof If $F = \text{grad} \phi$ then

$$F = (\phi_x, \phi_y, \phi_z) \Rightarrow \text{curl} F = (\phi_{zy} - \phi_{yz}, \phi_{xz} - \phi_{zx}, \phi_{yx} - \phi_{xy}) = 0.$$

On the other hand, if $F = (f, g, h)$ then

$$\text{curl} F = 0 \Rightarrow \omega = f \, dx + g \, dy + h \, dz$$

is closed and therefore exact. A function $\phi$ with $d\phi = \omega$ has gradient $F$.

51 Corollary A smooth vector field on $\mathbb{R}^3$ (or on an open set diffeomorphic to $\mathbb{R}^3$) has everywhere zero divergence if and only if it is the curl of some other vector field.

Proof If $F = (f, g, h)$ and $G = \text{curl} F$ then

$$G = (h_y - g_z, f_z - h_x, g_x - f_y)$$

so the divergence of $G$ is zero. On the other hand, if the divergence of $G = (A, B, C)$ is zero then the form

$$\omega = A dy \wedge dz + B dz \wedge dx + C dx \wedge dy$$

is closed and therefore exact. If the form $\alpha = f \, dx + g \, dy + h \, dz$ has $d\alpha = \omega$ then $F = (f, g, h)$ has curl $F = G$.

Cohomology

The set of exact $k$-forms on $U$ is usually denoted $B^k(U)$, while the set of closed $k$-forms is denoted $Z^k(U)$. (“$B$” is for boundary and “$Z$” is for cycle.) Both are vector subspaces of $\Omega^k(U)$ and

$$B^k(U) \subset Z^k(U).$$