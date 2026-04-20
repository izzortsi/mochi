3.8. Appendix: Jordan canonical form

In this section we want to review some further facts on the Jordan canonical form. In addition, we want to draw some further consequences to be used later on.

Consider a decomposition of $\mathbb{C}^n$ into a direct sum of two linear subspaces, $\mathbb{C}^n = K_1 \oplus K_2$. Such a decomposition is said to **reduce** $A$ if both subspaces $K_1$ and $K_2$ are **invariant** under $A$, that is, $AK_j \subseteq K_j$, $j = 1, 2$. Changing to a new basis $u_1, \ldots, u_n$ such that $u_1, \ldots, u_m$ is a basis for $K_1$ and $u_{m+1}, \ldots, u_n$ is a basis for $K_2$, implies that $A$ is transformed to the block form

$$U^{-1}AU = \begin{pmatrix} A_1 & 0 \\ 0 & A_2 \end{pmatrix}, \quad U = (u_1, \ldots, u_n),$$

(3.174)

in these new coordinates. Here $A_j = A|_{K_j}$. Moreover, we even have

$$U^{-1}\exp(A)U = \exp(U^{-1}AU) = \begin{pmatrix} \exp(A_1) & 0 \\ 0 & \exp(A_2) \end{pmatrix}.$$

(3.175)

Hence we need to find some invariant subspaces which reduce $A$. If we look at one-dimensional subspaces we must have

$$Ax = \alpha x, \quad x \neq 0,$$

(3.176)

for some $\alpha \in \mathbb{C}$. If (3.176) holds, $\alpha$ is called an **eigenvalue** of $A$ and $x$ is called **eigenvector**. In particular, $\alpha$ is an eigenvalue if and only if $\text{Ker}(A - \alpha\mathbb{I}) \neq \{0\}$ and hence $\text{Ker}(A - \alpha)$ is called the **eigenspace** of $\alpha$ in this case. Here we have used the shorthand notation $A - \alpha$ for $A - \alpha\mathbb{I}$. Since $\text{Ker}(A - \alpha\mathbb{I}) \neq \{0\}$ implies that $A - \alpha\mathbb{I}$ is **not** invertible, the eigenvalues are the zeros of the **characteristic polynomial** of $A$,

$$\chi_A(z) = \prod_{j=1}^{m} (z - \alpha_j)^{a_j} = \det(z - A),$$

(3.177)

where $\alpha_i \neq \alpha_j$. The number $a_j$ is called **algebraic multiplicity** of $\alpha_j$ and $g_j = \dim \text{Ker}(A - \alpha_j)$ is called **geometric multiplicity** of $\alpha_j$.

The set of all eigenvalues of $A$ is called the **spectrum** of $A$,

$$\sigma(A) = \{\alpha \in \mathbb{C} | \text{Ker}(A - \alpha) \neq \{0\}\} = \{\alpha \in \mathbb{C} | \chi_A(\alpha) = 0\}.$$

(3.178)

If the algebraic and geometric multiplicities of all eigenvalues happen to be the same, we can find a basis consisting only of eigenvectors and $U^{-1}AU$ is a diagonal matrix with the eigenvalues as diagonal entries. Moreover, $U^{-1}\exp(A)U$ is again diagonal with the exponentials of the eigenvalues as diagonal entries.

There is an important class of matrices where this will indeed work. To this end recall the definition of the **adjoint** matrix $A^*$ which is defined as