In particular, the Bessel inequality shows that we can also handle countable orthonormal sets (cf. Problem 5.7). An orthonormal set $\{u_j\}_{j=0}^N$, $N \in \mathbb{N}_0 \cup \{\infty\}$ is called an **orthonormal basis** if

$$\|f\|^2 = \sum_{j=0}^{N} |\langle u_j, f \rangle|^2$$

for all $f \in \mathcal{H}_0$. Abbreviating

$$f_n = \sum_{j=0}^{n} \langle u_j, f \rangle u_j,$$

equation (5.29) implies $f - f_n \to 0$ as $n \to N$ and hence (5.32) is equivalent to

$$f = \sum_{j=0}^{N} \langle u_j, f \rangle u_j$$

for every $f \in \mathcal{H}_0$.

A **linear operator** is a linear mapping

$$A : \mathfrak{D}(A) \to \mathcal{H}_0,$$

where $\mathfrak{D}(A)$ is a linear subspace of $\mathcal{H}_0$, called the **domain** of $A$. A linear operator $A$ is called **symmetric** if its domain is dense (i.e., its closure is $\mathcal{H}_0$) and if

$$\langle g, Af \rangle = \langle Ag, f \rangle, \quad f, g \in \mathfrak{D}(A).$$

A number $z \in \mathbb{C}$ is called **eigenvalue** of $A$ if there is a nonzero vector $u \in \mathfrak{D}(A)$ such that

$$Au = zu.$$

The vector $u$ is called a corresponding **eigenvector** in this case. The set of all eigenvectors corresponding to $z$ augmented by the zero vector is called the **eigenspace**

$$\text{Ker}(A - z) = \{u \in \mathfrak{D}(A) | (A - z)u = 0\}$$

corresponding to $z$. Here we have used the shorthand notation $A - z$ for $A - z\mathbb{I}$. An eigenvalue is called **simple** if there is only one linearly independent eigenvector.

**Theorem 5.4.** Let $A$ be symmetric. Then all eigenvalues are real and eigenvectors corresponding to different eigenvalues are orthogonal.

**Proof.** Suppose $\lambda$ is an eigenvalue with corresponding normalized eigenvector $u$. Then $\lambda = \langle u, Au \rangle = \langle Au, u \rangle = \lambda^*$, which shows that $\lambda$ is real. Furthermore, if $Au_j = \lambda_j u_j$, $j = 1, 2$, we have

$$(\lambda_1 - \lambda_2) \langle u_1, u_2 \rangle = \langle Au_1, u_2 \rangle - \langle u_1, Au_2 \rangle = 0$$