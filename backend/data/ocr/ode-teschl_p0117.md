$\alpha$ be a zero and write $\mu_A(z) = (z - \alpha)\tilde{\mu}(z)$. Since $\tilde{\mu}(z)$ does not annihilate $A$, there is some $u$ with $v = \tilde{\mu}(z)u \neq 0$. But then $(A - \alpha)v = \mu_A(A)u = 0$ shows that $\alpha$ is an eigenvalue.

Hence $\mu_A(z) = \prod_j (z - \alpha_j)^{e_j}$ for some numbers $e_j \geq 1$. By the previous lemma we have $\oplus_j K_{j,e_j} = V$ which shows $e_j \geq d_j$. The converse direction of the lemma shows $d_j \leq e_j$.

So, if we choose a basis $u_j$ of generalized eigenvectors, the matrix $U = (u_1, \ldots, u_n)$ transforms $A$ to a block structure

$$U^{-1}AU = \begin{pmatrix}
A_1 & \ddots & A_m
\end{pmatrix},$$

(3.189)

where each matrix $A_j = A|_{K_j}$ has only the eigenvalue $\alpha_j$ (why?). Hence it suffices to restrict our attention to this case.

A vector $u \in \mathbb{C}^n$ is called a **cyclic vector** for $A$ if the vectors $A^k u$, $0 \leq k \leq n - 1$ span $\mathbb{C}^n$, that is,

$$\mathbb{C}^n = \left\{ \sum_{k=0}^{n-1} a_k A^k u | a_k \in \mathbb{C} \right\}.$$

(3.190)

The case where $A$ has only one eigenvalue and where there exists a cyclic vector $u$ is quite simple. Take

$$U = (u, (A - \alpha)u, \ldots, (A - \alpha)^{n-1}u),$$

(3.191)

then $U$ transforms $A$ to

$$J = U^{-1}AU = \begin{pmatrix}
\alpha & 1 & \ddots & 1 \\
\alpha & 1 & \ddots & 1 \\
\alpha & \ddots & 1 & \alpha
\end{pmatrix},$$

(3.192)

since $(A - \alpha)^n u = 0$ by $K = \text{Ker}(A - \alpha)^n = \mathbb{C}^n$. The matrix (3.192) is called a **Jordan block**. It is of the form $\alpha \mathbb{I} + N$, where $N$ is **nilpotent**, that is, $N^n = 0$.

Hence, we need to find a decomposition of the spaces $K_j$ into a direct sum of spaces $K_{jk}$, each of which has a cyclic vector $u_{jk}$.

We again restrict our attention to the case where $A$ has only one eigenvalue $\alpha$ and consider again the spaces

$$K_k = \text{Ker}(A - \alpha)^k.$$

(3.193)