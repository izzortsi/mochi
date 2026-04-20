the complex conjugate of the transposed matrix such that

$$x \cdot (Ay) = (A^*x) \cdot y,$$

(3.179)

where $x \cdot y = \sum_{j=1}^{n} x_j^*y_j$ is the scalar product in $\mathbb{C}^n$. A matrix is called symmetric if $A^* = A$. A matrix $U$ is called orthogonal (or unitary) if $U^* = U^{-1}$. Note that a matrix is orthogonal if and only if it preserves the scalar product,

$$(Ux) \cdot (Uy) = x \cdot (U^*Uy) = x \cdot y.$$

(3.180)

In particular, the equation $U^*U = \mathbb{I}$ is equivalent to the fact that the row vectors of $U$ form an orthonormal basis, that is, they are mutually orthogonal and normalized such that they have norm one. The same is true for the column vectors.

**Theorem 3.29.** The eigenvalues of a symmetric matrix are real and there is an orthonormal basis of eigenvectors. In particular, there is an orthogonal matrix $U$ which transforms $A$ to diagonal form.

**Proof.** Start with one normalized eigenvector $u_1$. Extend this vector to an orthogonal basis $u_1, \ldots, u_n$ (e.g. using the Gram–Schmidt procedure). Now observe that, by symmetry, we obtain $u_1 \cdot (Au_j) = (Au_1) \cdot u_j = \alpha_1(u_1 \cdot u_j) = 0$ for $j = 2, \ldots, n$. Hence in this new basis $A$ is of the form

$$U^{-1}AU = \begin{pmatrix} \alpha_1 & 0 \\ 0 & A_2 \end{pmatrix}, \quad U = (u_1, \ldots, u_n).$$

Since the transformation $U$ is unitary, it preserves the scalar product and the $(n-1)$ by $(n-1)$ matrix $A_2$ is again symmetric and we can repeat this procedure until we have found an orthonormal basis of eigenvalues.

However, life is not that simple and we only have $g_j \leq a_j$ in general. It turns out that the right objects to look at are kernels of powers of $A - \alpha_j$:

$$K_{j,k} = \text{Ker}(A - \alpha_j)^k, \quad j = 1, \ldots, m, \quad k = 1, \ldots$$

(3.181)

First of all observe that

$$K_{j,1} \subseteq K_{j,2} \subseteq \cdots$$

(3.182)

and since our vector space is $n$ dimensional there must be a smallest index $d_j \leq n$ such that equality holds. In fact, it turns out that these spaces will remain the same from this index on:

$$K_{j,1} \subset K_{j,2} \subset \cdots \subset K_{j,d_j} = K_{j,d_j+1} = \ldots$$

(3.183)

To see this note that $(A - \alpha_j)^{d_j+l}u = 0$ for some $l \geq 1$ implies $(A - \alpha_j)^{l-1}u \in K_{j,d_j+1} = K_{j,d_j}$ and thus $(A - \alpha_j)^{d_j+l-1}u = (A - \alpha_j)^{d_j}(A - \alpha_j)^{l-1}u = 0$. We call

$$K_j = \text{Ker}(A - \alpha_j)^{d_j}.$$

(3.184)