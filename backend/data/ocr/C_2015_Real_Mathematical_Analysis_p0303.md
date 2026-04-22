Proof Assume that $(D^2 f)_p$ exists. Then $x \mapsto (Df)_x$ is differentiable at $x = p$ and the same is true of the matrix

$$M_x = \begin{bmatrix}
\frac{\partial f_1}{\partial x_1} & \ldots & \frac{\partial f_1}{\partial x_n} \\
\ldots & \ldots & \ldots \\
\frac{\partial f_m}{\partial x_1} & \ldots & \frac{\partial f_m}{\partial x_n}
\end{bmatrix}$$

that represents it; $x \mapsto M_x$ is differentiable at $x = p$. For according to Theorem 10, a vector function is differentiable if and only if its components are differentiable, and then the derivative of the $k^{\text{th}}$ component is the $k^{\text{th}}$ component of the derivative. A matrix is a special type of vector. Its components are its entries. Thus the entries of $M_x$ are differentiable at $x = p$ and the second partials exist. Furthermore, the $k^{\text{th}}$ row of $M_x$ is a differentiable vector function of $x$ at $x = p$ and

$$(D(Df_k))_p(e_i)(e_j) = (D^2 f_k)_p(e_i, e_j) = \lim_{t \to 0} \frac{(Df_k)_{p+te_i}(e_j) - (Df_k)_p(e_j)}{t}.$$

The first derivatives appearing in this fraction are the $j^{\text{th}}$ partials of $f_k$ at $p+te_i$ and at $p$. Thus $\partial^2 f_k(p)/\partial x_i \partial x_j = (D^2 f_k)_p(e_i, e_j)$ as claimed.

Conversely, assume that the second partials exist at all $x$ near $p$ and are continuous at $p$. Then the entries of $M_x$ have partials that exist at all points $q$ near $p$, and are continuous at $p$. Theorem 8 implies that $x \mapsto M_x$ is differentiable at $x = p$; i.e., $f$ is second-differentiable at $p$.

The most important and surprising property of second derivatives is symmetry.

16 Theorem If $(D^2 f)_p$ exists then it is symmetric: For all $v, w \in \mathbb{R}^n$ we have

$$(D^2 f)_p(v, w) = (D^2 f)_p(w, v).$$

Proof We will assume that $f$ is real-valued (i.e., $m = 1$) because the symmetry assertion concerns the arguments of $f$ rather than its values. For a variable $t \in [0, 1]$ we draw the parallelogram $P$ determined by the vectors $tv, tw$ and label the vertices with $\pm 1$ as in Figure 109.

The quantity

$$\Delta = \Delta(t, v, w) = f(p+tv+tw) - f(p+tv) - f(p+tw) + f(p)$$

is the signed sum of $f$ at the vertices of $P$. Clearly $\Delta$ is symmetric with respect to $v, w$,

$$\Delta(t, v, w) = \Delta(t, w, v).$$