(i) $U$ is a connected open subset of $\mathbb{R}^2$.
(ii) $f$ is $C^1$.
(iii) For each $(x, y) \in U$ we have

$$\frac{\partial f(x, y)}{\partial y} = 0.$$

(a) If $U$ is a disc show that $f$ is independent of $y$.
(b) Construct such an $f$ of class $C^\infty$ which does depend on $y$.
(c) Show that the $f$ in (b) can not be analytic.
(d) Why does your example in (b) not invalidate the proof of the Rank Theorem on page 306?

32. Let $G$ denote the set of invertible $n \times n$ matrices.
(a) Prove that $G$ is an open subset of $\mathcal{M}(n \times n)$.
(b) Prove that $G$ is a group. (It is called the general linear group.)
(c) Prove that the inversion operator $\text{Inv} : A \mapsto A^{-1}$ is a homeomorphism of $G$ onto $G$.
(d) Prove that $\text{Inv}$ is a diffeomorphism and show that its derivative at $A$ is the linear transformation $\mathcal{M} \to \mathcal{M}$,

$$X \mapsto -A^{-1} \circ X \circ A^{-1}.$$

(e) Relate this formula to the ordinary derivative of $1/x$ at $x = a$.

33. Observe that $Y = \text{Inv} X$ solves the implicit function problem

$$F(X, Y) - I = 0,$$

where $F(X, Y) = X \circ Y$. Assume it is known that $\text{Inv}$ is smooth and use the Chain Rule to derive from this equation the formula for the derivative of $\text{Inv}$.

34. Use Gaussian elimination to prove that the entries of the matrix $A^{-1}$ depend smoothly (in fact analytically) on the entries of $A$.

*35. Give a proof that the inversion operator $\text{Inv}$ is analytic (i.e., is defined locally by a convergent power series) as follows:
(a) If $T \in \mathcal{L}(\mathbb{R}^n, \mathbb{R}^n)$ and $\|T\| < 1$ show that the series of linear transformations

$$I + T + T^2 + \ldots + T^k + \ldots$$

converges to a linear transformation $S$, and

$$S \circ (I - T) = I = (I - T) \circ S,$$

where $I$ is the identity transformation.

(b) Infer from (a) that inversion is analytic at $I$.