First Course in Real Analysis, the proof is utterly simple: It amounts to examining the situation in the right coordinate system at $p$.

It is no loss of generality to assume that $p$ is the origin in $\mathbb{R}^n$ and that $c_1, \ldots, c_k, f(p)$ are zero. Also, we can assume that $\text{grad}_p f \neq 0$, since otherwise it is already a trivial linear combination of the gradients of the $g_i$. Then choose vectors $w_{k+2}, \ldots, w_n$ so that

$$\text{grad}_0 g_1, \ldots, \text{grad}_0 g_k, \text{grad}_0 f, w_{k+2}, \ldots, w_n$$

is a vector basis of $\mathbb{R}^n$. For $k+2 \leq i \leq n$ define

$$h_i(x) = \langle w_i, x \rangle.$$

The map $x \mapsto F(x) = (g_1(x), \ldots, g_k(x), f(x), h_{k+2}(x), \ldots, h_n(x))$ is a local diffeomorphism of $\mathbb{R}^n$ to itself since the derivative of $F$ at the origin is the $n \times n$ matrix of linearly independent column vectors

$$(DF)_0 = [ \text{grad}_0 g_1 \ldots \text{grad}_0 g_k \text{grad}_0 f w_{k+2} \ldots w_n].$$

Think of the functions $y_i = F_i(x)$ as new coordinates on a neighborhood of the origin in $\mathbb{R}^n$. With respect to these coordinates, the surface $S$ is the coordinate plane