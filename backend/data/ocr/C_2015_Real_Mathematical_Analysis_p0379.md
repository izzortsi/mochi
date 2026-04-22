11. Consider the shear matrix

$$S = \begin{bmatrix} 1 & s \\ 0 & 1 \end{bmatrix}$$

and the linear transformation $S : \mathbb{R}^2 \to \mathbb{R}^2$ it represents. Calculate the norm and conform of $S$. [Hint: Using polar form, it suffices to calculate the norm and conform of the positive definite symmetric part of $S$. Recall from linear algebra that the eigenvalues of the square of a matrix $A$ are the squares of the eigenvalues of $A$.]

12. What is the one-line proof that if $V$ is a finite-dimensional normed space then its unit sphere $\{v : |v| = 1\}$ is compact?

13. The set of invertible $n \times n$ matrices is open in $\mathcal{M}$. Is it dense?

14. An $n \times n$ matrix is **diagonalizable** if there is a change of basis in which it becomes diagonal.

(a) Is the set of diagonalizable matrices open in $\mathcal{M}(n \times n)$?

(b) Closed?

(c) Dense?

15. Show that both partial derivatives of the function

$$f(x, y) = \begin{cases} \frac{xy}{x^2 + y^2} & \text{if } (x, y) \neq (0, 0) \\ 0 & \text{if } (x, y) = (0, 0) \end{cases}$$

exist at the origin but the function is not differentiable there.

16. Let $f : \mathbb{R}^2 \to \mathbb{R}^3$ and $g : \mathbb{R}^3 \to \mathbb{R}$ be defined by $f = (x, y, z)$ and $g = w$ where

$$w = w(x, y, z) = xy + yz + zx$$

$$x = x(s, t) = st \quad y = y(s, t) = s \cos t \quad z = z(s, t) = s \sin t.$$

(a) Find the matrices that represent the linear transformations $(Df)_p$ and $(Dg)_q$ where $p = (s_0, t_0) = (0, 1)$ and $q = f(p)$.

(b) Use the Chain Rule to calculate the $1 \times 2$ matrix $[\partial w / \partial s, \partial w / \partial t]$ that represents $(D(g \circ f))_p$.

(c) Plug the functions $x = x(s, t)$, $y = y(s, t)$, and $z = z(s, t)$ directly into $w = w(x, y, z)$, and recalculate $[\partial w / \partial s, \partial w / \partial t]$, verifying the answer given in (b).

(d) Examine the statements of the multivariable chain rules that appear in your old calculus book and observe that they are nothing more than the components of various product matrices.

17. Let $f : U \to \mathbb{R}^m$ be differentiable, $[p, q] \subset U \subset \mathbb{R}^n$, and ask whether the direct generalization of the one-dimensional Mean Value Theorem is true: Does there exist a point $\theta \in [p, q]$ such that

(28) $$f(q) - f(p) = (Df)_\theta(q - p)?$$