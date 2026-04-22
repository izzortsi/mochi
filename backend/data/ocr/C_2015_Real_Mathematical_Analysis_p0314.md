The linear projection $P : \mathbb{R}^n \to \mathbb{R}^m$

$$P(x_1, \ldots, x_n) = (x_1, \ldots, x_k, 0, \ldots, 0)$$

has rank $k$. It projects $\mathbb{R}^n$ onto the $k$-dimensional subspace $\mathbb{R}^k \times 0 \subset \mathbb{R}^m$. (We assume that $k \leq n, m$.) The $m \times n$ matrix of $P$ is

$$\begin{bmatrix}
I_{k \times k} & 0 \\
0 & 0
\end{bmatrix}.$$

25 Rank Theorem Locally, a $C^r$ constant-rank-$k$ map is $C^r$ equivalent to a linear projection onto a $k$-dimensional subspace.

As an example, think of the radial projection $\pi : \mathbb{R}^3 \setminus \{0\} \to S^2$, where $\pi(v) = v / |v|$. It has constant rank 2, and is locally indistinguishable from linear projection of $\mathbb{R}^3$ to the $(x, y)$-plane.

Proof Let $f : U \to \mathbb{R}^m$ have constant rank $k$ and let $p \in U$ be given. We will show that on a neighborhood of $p$ we have $f \approx_r P$.

Step 1. Define translations of $\mathbb{R}^n$ and $\mathbb{R}^m$ by

$$\tau : \mathbb{R}^n \to \mathbb{R}^n \quad \tau' : \mathbb{R}^m \to \mathbb{R}^m$$
$$z \mapsto z + p \quad z' \mapsto z' - fp.$$

The translations are diffeomorphisms of $\mathbb{R}^n$ and $\mathbb{R}^m$ and they show that $f$ is $C^r$ equivalent to $\tau' \circ f \circ \tau$, a $C^r$ map that sends 0 to 0 and has constant rank $k$. Thus, it is no loss of generality to assume in the first place that $p$ is the origin in $\mathbb{R}^n$ and $fp$ is the origin in $\mathbb{R}^m$. We do so.

Step 2. Let $T : \mathbb{R}^n \to \mathbb{R}^n$ be an isomorphism that sends $0 \times \mathbb{R}^{n-k}$ onto the kernel of $(Df)_0$. Since the kernel has dimension $n-k$, there is such a $T$. Let $T' : \mathbb{R}^m \to \mathbb{R}^m$ be an isomorphism that sends the image of $(Df)_0$ onto $\mathbb{R}^k \times 0$. Since $(Df)_0$ has rank $k$, there is such a $T'$. Then $f \approx_r T' \circ f \circ T$. This map sends the origin in $\mathbb{R}^n$ to the origin in $\mathbb{R}^m$, while its derivative at the origin has kernel $0 \times \mathbb{R}^{n-k}$ and range $\mathbb{R}^k \times 0$. Thus it is no loss of generality to assume in the first place that $f$ has these properties. We do so.

Step 3. Write

$$(x, y) \in \mathbb{R}^k \times \mathbb{R}^{n-k} \quad f(x, y) = \left(f_X(x, y), f_Y(x, y)\right) \in \mathbb{R}^k \times \mathbb{R}^{m-k}.$$