the lower and upper integrals, and integrability implies equality of the lower, upper, and Riemann integrals.

The Riemann-Lebesgue Theorem is another result that generalizes naturally to multiple integrals. It states that a bounded function is Riemann integrable if and only if its discontinuities form a zero set.

First of all, $Z \subset \mathbb{R}^2$ is a **zero set** if for each $\epsilon > 0$ there is a countable covering of $Z$ by open rectangles $S_\ell$ whose total area is less than $\epsilon$:

$$\sum_\ell |S_\ell| < \epsilon.$$

By the $\epsilon/2^\ell$ construction, a countable union of zero sets is a zero set.

As in dimension 1, we express the discontinuity set of our function $f: R \to \mathbb{R}$ as the union

$$D = \bigcup_{k \in \mathbb{N}} D_k,$$

where $D_k$ is the set of points $z \in R$ at which the oscillation is $\geq 1/k$. (See Exercise 3.19.) That is,

$$\text{osc}_z f = \lim_{r \to 0} \text{diam}(f(R_r(z))) \geq 1/k$$

where $R_r(z)$ is the $r$-neighborhood of $z$ in $R$. The set $D_k$ is compact.

Assume that $f: R \to \mathbb{R}$ is Riemann integrable. It is bounded and its upper and lower integrals are equal. Fix $k \in \mathbb{N}$. Given $\epsilon > 0$, there exists $\delta > 0$ such that if $G$ is a grid with mesh $< \delta$ then

$$U(f,G) - L(f,G) < \epsilon.$$

Fix such a grid $G$. Each $R_{ij}$ in the grid that contains in its interior a point of $D_k$ has $M_{ij} - m_{ij} \geq 1/k$, where $m_{ij}$ and $M_{ij}$ are the infimum and supremum of $f$ on $R_{ij}$. The other points of $D_k$ lie in the zero set of gridlines $x_i \times [c,d]$ and $[a,b] \times y_j$. Since $U - L < \epsilon$, the total area of these rectangles with oscillation $\geq 1/k$ does not exceed $k\epsilon$. Since $k$ is fixed and $\epsilon$ is arbitrary, $D_k$ is a zero set. Taking $k = 1,2,\ldots$ shows that the discontinuity set $D = \bigcup D_k$ is a zero set.

Conversely, assume that $f$ is bounded and $D$ is a zero set. Fix any $k \in \mathbb{N}$. Each $z \in R \setminus D_k$ has a neighborhood $W = W_z$ such that

$$\sup\{f(w): w \in W\} - \inf\{f(w): w \in W\} < 1/k.$$