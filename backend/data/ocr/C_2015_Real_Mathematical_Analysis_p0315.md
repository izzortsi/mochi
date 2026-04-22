We are going to find a $g \approx_r f$ such that

$$g(x, 0) = (x, 0).$$

The matrix of $(Df)_0$ is

$$\begin{bmatrix}
A & 0 \\
0 & 0
\end{bmatrix}$$

where $A$ is $k \times k$ and invertible. By the Inverse Function Theorem the map

$$\sigma : x \mapsto f_X(x, 0)$$

is a diffeomorphism $\sigma : X \to X'$ where $X$ and $X'$ are small neighborhoods of the origin in $\mathbb{R}^k$ and $f_X$ denotes the first $k$ components of $f$. For $x' \in X'$, set

$$h(x') = f_Y(\sigma^{-1}(x'), 0).$$

This makes $h$ a $C^r$ map $X' \to \mathbb{R}^{m-k}$, and

$$h(\sigma(x)) = f_Y(x, 0)$$

where $f_Y$ denotes the final $m-k$ components of $f$. The image of $X \times 0$ under $f$ is the graph of $h$. For

$$f(X \times 0) = \{f(x, 0) : x \in X\} = \{(f_X(x, 0), f_Y(x, 0)) : x \in X\}$$

$$= \{(f_X(\sigma^{-1}(x'), 0), f_Y(\sigma^{-1}(x'), 0)) : x' \in X'\}$$

$$= \{(x', h(x')) : x' \in X'\}.$$

See Figure 112.

**Figure 112** The $f$-image of $X \times 0$ is the graph of $h$.