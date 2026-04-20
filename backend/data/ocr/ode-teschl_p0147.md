Furthermore, for $j = m_l$ we get

$$\left(A_0 - \alpha - m_l\right)u_{l,m_l} = u_{l-1,m_l}. \tag{4.109}$$

Hence there are two cases, $m_l = m_{l-1}$ and $(A_0 - \alpha - m_l)u_{l,m_l} = u_{l-1,m_{l-1}}$, that is, $\alpha + m_{l-1}$ corresponds to a nontrivial Jordan block of $A_0$. Or $m_l < m_{l-1}$ and $(A_0 - \alpha - m_l)u_{l,m_l} = 0$, that is, $\alpha + m_l$ is another eigenvalue of $A_0$.

In summary,

**Theorem 4.11.** If $A(z)$ has a simple pole at $z_0 = 0$ with residue $A_0$, then every solution of $w' = A(z)w$ is of the form

$$w(z) = z^\alpha \sum_{k=0}^{l} u_{l-k}(z) \frac{\log(z)^k}{k!}, \quad u_l(z) = \sum_{j=m_l}^{\infty} u_{l,j}z^j, \quad u_{l,m_l} \neq 0, \tag{4.110}$$

where $-m_l \in \mathbb{N}_0$ and $m_l \leq m_{l-1} \leq \cdots \leq m_1 \leq m_0 = 0$. The vectors $u_{l,m_l}$ are eigenvectors, $(A_0 - \alpha + m_l)u_{l,m_l} = 0$, if $m_l = m_{l-1}$ (set $m_{l-1} = 0$) or generalized eigenvectors, $(A_0 - \alpha + m_l)u_{l,m_l} = u_{l,m_{l-1}}$, if $m_l < m_{l-1}$.

In particular, the Jordan structures of $M$ and $A_0$ are related as follows:

**Theorem 4.12.** For every eigenvalue $\mu$ of $M$ there must be an eigenvalue $\alpha = \mu + m$, $m \in \mathbb{N}_0$, of $A_0$. For every Jordan block of $\mu$ there is a corresponding Jordan block of $\alpha$, which might be smaller or equal. If it is smaller, there must be eigenvalues $\alpha_j = \alpha + m_j, -m_j \in \mathbb{N}$, of $A_0$ with corresponding Jordan blocks, which make up for the missing parts.

If no two eigenvalues of $A_0$ differ by an integer, then $A_0$ and $M$ are similar.

So we have found a quite complete picture of the possible forms of solutions of our differential equation in the neighborhood of the singular point $z = 0$ and we can now try to go the opposite way. Given a solution of the system of linear equations (4.108), where $\alpha$ is an eigenvalue of $A_0$ we get a solution of our differential equation via (4.104) provided we can show that the series converges.

But before turning to the problem of convergence, let us reflect about how to solve the system (4.108). If the numbers $\alpha + j$ are not eigenvalues of $A_0$ for $j > 0$, we can multiply (4.108) by $(A_0 - \alpha - j)^{-1}$ and $u_{l,j}$ is uniquely determined by $u_{l,j-1}$. Whereas this might not always be true, it is at least true for $j > j_0$ with $j_0$ sufficiently large. Hence we are left with a finite system for the coefficients $u_{l,j}, 0 \leq l \leq n, 0 \leq j \leq j_0$, which we can solve first. All remaining coefficients are then determined uniquely in a recursive manner.