Theorem 4.13. Suppose $u_{l,j}$ solves (4.108). Then $u_{l}(z)$ defined via the power series (4.105) has the same radius of convergence as the power series for $zA(z)$ around $z = 0$. Moreover, $w_{l}(z)$ defined via (4.104) is a solution of $w' = A(z)w$.

Proof. Suppose $\delta$ is smaller than the radius of convergence of the power series for $zA(z)$ around $z = 0$ and abbreviate

$$M = \sum_{j=0}^{\infty} \|A_j\| \delta^j < \infty.$$

We equip the space of vector valued $\underline{u} = (u_j)_{j \in \mathbb{N}_0}$ expansion coefficients with the norm (Problem 4.20)

$$\|\underline{u}\| = \sum_{j=0}^{\infty} |u_j| \delta^j.$$

The idea is now to cut off the first $j_0$ terms which cause trouble and view the rest as a fixed point equation in the above Banach space. Let

$$Ku_j = \begin{cases} 0 & j \leq j_0, \\ \frac{1}{\gamma+j} \sum_{k=0}^{j} A_k u_{j-k}, & j > j_0, \end{cases}$$

then

$$\|K\underline{u}\| \leq \frac{1}{j_0 - |\text{Re}(\gamma)|} \sum_{j=0}^{\infty} \sum_{k=0}^{j} \|A_k\| |u_{j-k}| \delta^j$$

$$= \sum_{j=0}^{\infty} \sum_{k=0}^{\infty} \|A_k\| |u_j| \delta^{j+k} = \frac{M}{j_0 - |\text{Re}(\gamma)|} \|\underline{u}\|.$$

Hence for $j_0$ sufficiently large, the equation $u_j = v_j + Ku_j$ has a unique solution by the contraction principle for any fixed $v_j$. Now let $u_{l,j}$ be a solution of (4.107)

$$u_{l,m_l+j} = \frac{1}{\alpha + m_l + j} \sum_{k=1}^{j} A_k u_{l,m_l+j-k} - \frac{1}{\alpha + m_l + j} u_{l-1,m_l+j}$$

and choose $\gamma = \alpha + m_l$ and $v_j = u_{l,m_l+j}$ for $j \leq j_0$ respectively $v_j = -\frac{1}{\alpha + m_l+j} u_{l-1,m_l+j}$ for $j > j_0$. Then the solution of our fixed point problem $u_j$ coincides with our solution $u_{l,m_l+j}$ of (4.108) by construction.

In summary, we obtain the following procedure for finding a full set of linearly independent solutions:

For all eigenvalues $\alpha$ of $A_0$ for which $\alpha + j$ is not an eigenvalue for all $j \in \mathbb{N}_0$, take corresponding generalized eigenvectors $u_{0,l} \neq 0$, $(A_0 - \alpha)u_{0,l} =$