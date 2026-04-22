which is invertible no matter what * is. Clearly $\varphi(0) = 0$. By the Inverse Function Theorem, $\varphi$ is a local $C^r$ diffeomorphism on a neighborhood of the origin and $G$ is $C^r$ equivalent to $f$. By Lemma 24, $G$ has constant rank $k$.

We have

$$G(x,y) = f \circ \varphi(x,y) = f(\xi(x,y),y)$$
$$= (f_X(\xi,y), f_Y(\xi,y)) = (x, G_Y(x,y)).$$

Therefore $G_X(x,y) = x$ and

$$DG = \begin{bmatrix} I_{k \times k} & 0 \\ * & \frac{\partial G_Y}{\partial y} \end{bmatrix}.$$

At last we use the constant-rank hypothesis. (Until now, it has been enough that $Df$ has rank $\geq k$.) The only way that a matrix of this form can have rank $k$ is that

$$\frac{\partial G_Y}{\partial y} \equiv 0.$$

See Exercise 43. By Corollary 13 to the Mean Value Theorem this implies that in a neighborhood of the origin, $G_Y$ is independent of $y$. Thus

$$G_Y(x,y) = G_Y(x,0) = f_Y(\xi(x,0),0),$$

which is 0 because (by Step 3) $f_Y = 0$ on $\mathbb{R}^k \times 0$. The upshot is that $G \approx_r f$ and $G(x,y) = (x,0)$; i.e., $G = P$. See also Exercise 31. By Lemma 24, steps 1-4 concatenate to give a $C^r$ equivalence between the original constant-rank map $f$ and the linear projection $P.$

In the following three corollaries $U$ is an open subset of $\mathbb{R}^n$.

**26 Corollary** If $f : U \to \mathbb{R}^m$ has rank $k$ at $p$ then it is locally $C^r$ equivalent to a map of the form $G(x,y) = (x,g(x,y))$ where $g : \mathbb{R}^n \to \mathbb{R}^{m-k}$ is $C^r$ and $x \in \mathbb{R}^k$.

**Proof** This was shown in the proof of the Rank Theorem before we used the assumption that $f$ has constant-rank $k.$

**27 Corollary** If $f : U \to \mathbb{R}$ is $C^r$ and $(Df)_p$ has rank 1 then in a neighborhood of $p$ the level sets $\{x \in U : f(x) = c\}$ form a stack of $C^r$ nonlinear discs of dimension $n-1$.