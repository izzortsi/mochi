the generalized eigenspace corresponding to $\alpha_j$ and its elements are called generalized eigenvectors. For a generalized eigenvector $u$ the smallest $k$ with $(A - \alpha_j)^k u = 0$ is called its order.

**Lemma 3.30.** Suppose $e_j \in \mathbb{N}_0$ are given numbers. Then

$$\prod_{j=1}^{m} (A - \alpha_j)^{e_j} v = 0$$

(3.185)

if and only if

$$v \in K_{1,e_1} \oplus \cdots \oplus K_{m,e_m}.$$

(3.186)

**Proof.** We show that (3.185) implies (3.186) via induction on $e = \sum_j e_j$ (the other direction being obvious). The case $e = 1$ is trivial. Now suppose $e \geq 2$ and assume there are two indices $j,k$ such that $e_j \geq 1$ and $e_k \geq 1$ (otherwise the claim is again trivial). Then by induction hypothesis

$$v_j = (A - \alpha_j)v = \sum_l u_{j,l} \quad \text{and} \quad v_k = (A - \alpha_k)v = \sum_l u_{k,l},$$

where $u_{j,l} \in K_{l,e_l}$ for $l \neq j$ and $u_{j,j} \in K_{j,e_j-1}$ as well as $u_{k,l} \in K_{l,e_l}$ for $l \neq k$ and $u_{k,k} \in K_{k,e_k-1}$. But then the claim also holds for $e$ since

$$v = \frac{1}{\alpha_j - \alpha_k} (v_k - v_j) = \frac{1}{\alpha_j - \alpha_k} \sum_l (u_{k,l} - u_{j,l}).$$

To show that we have a direct sum let $\sum_j x_j = 0$, $x_j \in K_{j,e_j}$, and set $p_k(z) = p(z)/(z - \alpha_k)^{e_k-l}$ with $p(z) = \prod_j (z - \alpha_j)^{e_j}$ and $l < e_k$ chosen such that $y_k = (A - \alpha_k)^l x_k \neq 0$ but $(A - \alpha_k)y_k = (A - \alpha_k)^{l+1} x_k = 0$. Then $0 = p_k(A) \sum_j x_j = \prod_{j \neq k} (\alpha_k - \alpha_j)^{d_j} y_k$ which contradicts $y_k \neq 0$.

**Lemma 3.31.** There is a unique monic polynomial $\mu_A(z)$ of minimal degree which annihilates $A$ in the sense that $\mu_A(A) = 0$. It is of the form

$$\mu_A(z) = \prod_{j=1}^{m} (z - \alpha_j)^{d_j}, \quad d_j \geq 1,$$

(3.187)

and called the **minimal polynomial** of $A$. Moreover, we can decompose our vector space as the following direct sum of invariant subspaces:

$$\mathbb{C}^n = K_1 \oplus \cdots \oplus K_m.$$

(3.188)

**Proof.** There are clearly polynomials which annihilate $A$ since the matrices $A^j$, $j = 0, \ldots, n^2$ cannot be linearly independent. If there were more than one monic of minimal degree, their difference would also annihilate $A$ and be of smaller degree.

Now let $\alpha_j$ be an eigenvalue with corresponding eigenvector $u_j$. Then $0 = \mu_A(A)u_j = \mu_A(\alpha_j)u_j$ shows that $\alpha_j$ is a zero of $\mu_A(z)$. Conversely, let