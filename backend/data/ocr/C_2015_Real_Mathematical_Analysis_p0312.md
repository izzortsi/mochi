Diffeomorphisms are to $C^r$ things as isomorphisms are to algebraic things. The sphere and ellipsoid are diffeomorphic under a diffeomorphism $\mathbb{R}^3 \rightarrow \mathbb{R}^3$ but the sphere and the surface of the cube are only homeomorphic, not diffeomorphic.

23 Inverse Function Theorem If the derivative of $f$ is invertible then $f$ is a local diffeomorphism.

Proof Invertibility of a matrix implies the matrix is square, so $m = n$. Then we have $f : U \rightarrow \mathbb{R}^m$, where $U$ is an open subset of $\mathbb{R}^m$, and at some $p \in U$, $(Df)_p$ is assumed to be invertible. We assume $f$ is $C^r$, $1 \leq r \leq \infty$, and set

$$F(x,y) = f(x) - y \quad q = f(p)$$

for $(x,y) \in U \times \mathbb{R}^m$. Clearly $F$ is $C^r$, $F(p,q) = 0$, and the derivative of $F$ with respect to $x$ at $(p,q)$ is $(Df)_p$.

Since $(Df)_p$ is an isomorphism we can apply the Implicit Function Theorem (with $x$ and $y$ interchanged!) to find neighborhoods $U_p$ of $p$ and $V_q$ of $q$ and a $C^r$ implicit function $h : V_q \rightarrow U_p$ uniquely defined by the equation

$$F(hy,y) = f(hy) - y = 0.$$

This means that $h$ is a “local right inverse” for $f$ in the sense that $f \circ h = \text{id}|_{V_q}$. Since $F(p,q) = 0$, uniqueness implies $p = hq$, and $(Df)_p \circ (Dh)_q = I$ implies $(Dh)_q$ is invertible.

We claim that $h$ is also a “local left inverse” for $f$, and hence that $f$ is a local diffeomorphism. We can apply the same analysis with $h$ in place of $f$ since it is $C^r$, it sends $q$ to $p$, and its derivative at $q$ is invertible. Consequently $h$ has a unique local right inverse, say $g$. It satisfies $h \circ g = \text{id locally}$ and we get

$$f = f \circ (h \circ g) = (f \circ h) \circ g = g.$$

Thus $h \circ f = h \circ g = \text{id shows that } h$ is a local left inverse for $f$ and we have $h = f^{-1}$ on a neighborhood of $q$.

5* The Rank Theorem

The rank of a linear transformation $T : \mathbb{R}^n \rightarrow \mathbb{R}^m$ is the dimension of its range. In terms of matrices, the rank is the size of the largest minor with nonzero determinant.