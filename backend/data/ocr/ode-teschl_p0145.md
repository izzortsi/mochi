There are no restrictions on the order of the pole as can be seen from the following.

**Example.**

$$A(z) = \frac{1}{z} \begin{pmatrix} 0 & z^{-m} \\ z^m & m \end{pmatrix}, \quad U(z) = \begin{pmatrix} 1 & 0 \\ 0 & z^m \end{pmatrix}, \quad M = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}. \tag{4.95}$$

**Problem 4.19.** Let $z_0$ be a simple singularity and let $W(z)$ be a fundamental system as in (4.92). Show that

$$\det(W(z)) = (z - z_0)^{\text{tr}(A_0)} d(z), \quad d(z_0) \neq 0,$$

where $d(z)$ is analytic near $z_0$ and $A_0 = \lim_{z \to z_0}(z - z_0)A(z)$. Moreover, conclude that $\text{tr}(A_0 - M) \in \mathbb{Z}$. (Hint: Use Abel’s identity (3.91) for the determinant.)

### 4.4. The Frobenius method

In this section we pursue our investigation of simple singularities. Without loss of generality we will set $z_0 = 0$. Since we know how a fundamental system looks like from Theorem 4.9, we can make the ansatz

$$W(z) = U(z)z^M, \quad U(z) = \sum_{j=0}^{\infty} U_jz^j, \quad U_0 \neq 0. \tag{4.96}$$

Using

$$A(z) = \frac{1}{z} \sum_{j=0}^{\infty} A_jz^j \tag{4.97}$$

and plugging everything into our differential equation yields the recurrence relation

$$U_j(j + M) = \sum_{k=0}^{j} A_kU_{j-k} \tag{4.98}$$

for the coefficient matrices $U_j$. However, since we don’t know $M$, this does not help us much. By (4.90) you could suspect that we just have $M = A_0$ and $U_0 = \mathbb{I}$. Indeed, if we assume $\det(U_0) \neq 0$, we obtain $U_0M = A_0U_0$ for $j = 0$ and hence $W(z)U_0^{-1} = U(z)U_0^{-1}z^{A_0}$ is of the anticipated form. Unfortunately, we don’t know that $\det(U_0) \neq 0$ and, even worse, this is wrong in general (examples will follow).

So let us be less ambitious and look for a single solution first. If $\mu$ is an eigenvalue with corresponding eigenvector $u_0$ of $M$, then

$$w_0(z) = W(z)u_0 = z^\mu U(z)u_0 \tag{4.99}$$