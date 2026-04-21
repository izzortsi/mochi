In the proof of the Riemann-Lebesgue Theorem, it is useful to focus on the “size” of a discontinuity. A simple expression for this size is the **oscillation** of $f$ at $x$,

$$\text{osc}_x(f) = \limsup_{t \to x} f(t) - \liminf_{t \to x} f(t).$$

Equivalently,

$$\text{osc}_x(f) = \lim_{r \to 0} \text{diam} f([x - r, x + r]).$$

(Of course, $r > 0$.) It is clear that $f$ is continuous at $x$ if and only if $\text{osc}_x(f) = 0$. It is also clear that if $I$ is any interval containing $x$ in its interior then

$$M_I - m_I \geq \text{osc}_x(f)$$

where $M_I$ and $m_I$ are the supremum and infimum of $f(t)$ as $t$ varies in $I$. See Figure 77.

**Figure 77** The oscillation of $f$ at $x$

**Proof of the Riemann-Lebesgue Theorem** The set $D$ of discontinuity points of $f : [a, b] \to [-M, M]$ naturally filters itself as the countable union

$$D = \bigcup_{k=1}^{\infty} D_k$$

where

$$D_k = \{x \in [a, b] : \text{osc}_x(f) \geq 1/k\}.$$

According to (a), (c) above, $D$ is a zero set if and only if each $D_k$ is a zero set.

Assume that $f$ is Riemann integrable and let $\epsilon > 0$ and $k \in \mathbb{N}$ be given. By Theorem 20 there is a partition $P$ such that

$$U - L = \sum (M_i - m_i) \Delta x_i < \epsilon/k.$$