is a solution of the form

$$w_0(z) = z^\alpha u_0(z), \quad u_0(z) = \sum_{j=0}^{\infty} u_{0,j} z^j, \quad u_{0,0} \neq 0, \alpha = \mu + m. \tag{4.100}$$

Here $m \in \mathbb{N}_0$ is chosen such that $u_0(0) = u_{0,0} \neq 0$. Inserting this ansatz into our differential equation we obtain

$$(\alpha + j)u_{0,j} = \sum_{k=0}^{j} A_k u_{0,j-k} \tag{4.101}$$

respectively

$$(A_0 - \alpha - j)u_{0,j} + \sum_{k=1}^{j} A_k u_{0,j-k} = 0. \tag{4.102}$$

In particular, for $j = 0$,

$$(A_0 - \alpha)u_{0,0} = 0, \tag{4.103}$$

we see that $\alpha$ must be an eigenvalue of $A_0$!

Now what about the case where $\mu$ corresponds to a nontrivial Jordan block of size $n > 1$? Then, by (4.91), we have a corresponding set of generalized eigenvectors $u_l$, $1 \leq l \leq n$, such that

$$w_l(z) = W(z)u_l = z^\alpha \left( u_l(z) + \log(z)u_{l-1}(z) + \cdots + \frac{\log(z)^l}{l!} u_0(z) \right), \tag{4.104}$$

$1 \leq l \leq n$, are $n$ solutions. Here

$$u_l(z) = z^{\mu-\alpha} U(z)u_l = \sum_{j=m_l}^{\infty} u_{l,j} z^j, \quad u_{l,m_l} \neq 0, \quad 1 \leq l \leq n, \tag{4.105}$$

As before, $m_\ell \in \mathbb{Z}$ is chosen such that $u_{l,m_l} \neq 0$ (note that $m_l \geq \mu - \alpha = -m$). We set $u_{l,j} = 0$ for $j < m_l$ and $u_{-1,j} = 0$ for notational convenience later on.

Again, inserting this ansatz into our differential equation, we obtain

$$u_{l-1,j} = 0, \quad j < m_l, \tag{4.106}$$

and

$$(\alpha + j)u_{l,j} + u_{l-1,j} = \sum_{k=1}^{j-m_l} A_k u_{l,j-k}, \quad j \geq m_l. \tag{4.107}$$

The first part implies $m_{l-1} \geq m_l$ and in particular $m_l \leq m_0 = 0$. The second implies

$$(A_0 - \alpha - j)u_{l,j} + \sum_{k=1}^{j} A_k u_{l,j-k} = u_{l-1,j}, \quad j \geq m_l. \tag{4.108}$$