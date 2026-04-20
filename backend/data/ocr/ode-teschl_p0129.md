and we will search for a solution of the form

$$u(z) = z^\alpha h(z),$$

(4.31)

where $\alpha \in \mathbb{C}$ and $h(z)$ is analytic near $z = 0$ with $h(0) = 1$. This is the generalized power series method, or Frobenius method.

Using our ansatz we obtain

$$q(z)u(z) = \frac{1}{z^2} \sum_{k=0}^{\infty} q_k z^k \sum_{j=0}^{\infty} h_j z^{\alpha+j} = z^{\alpha-2} \sum_{j=0}^{\infty} \sum_{k=0}^{j} q_k h_{j-k} z^j,$$

(4.32)

$$p(z)u'(z) = \frac{1}{z} \sum_{k=0}^{\infty} p_k z^k \sum_{j=0}^{\infty} (\alpha+j) h_j z^{\alpha+j-1}$$

$$= z^{\alpha-2} \sum_{j=0}^{\infty} \sum_{k=0}^{j} (\alpha+j-k) p_k h_{j-k} z^j,$$

(4.33)

$$u''(z) = z^{\alpha-2} \sum_{j=0}^{\infty} (\alpha+j)(\alpha+j-1) h_j z^j.$$

(4.34)

Plugging this into (4.20) and comparing coefficients we obtain

$$\left((\alpha+j)^2 + (p_0-1)(\alpha+j) + q_0\right) h_j + \sum_{k=1}^{j} \left((\alpha+j-k) p_k + q_k\right) h_{j-k} = 0.$$

(4.35)

Since $h_0 = 1$, this gives for $j = 0$ the **indicial equation**

$$\alpha^2 + (p_0-1)\alpha + q_0 = 0.$$

(4.36)

Hence the possible choices for $\alpha$ are the **characteristic exponents**

$$\alpha_{1,2} = \frac{1}{2}(1-p_0 \pm \sqrt{(p_0-1)^2-4q_0}).$$

(4.37)

Here we will take the standard branch of the root (with branch cut along the negative real axis), such that $\text{Re}(\alpha_1) \geq \text{Re}(\alpha_2)$. Using

$$\alpha^2 + (p_0-1)\alpha + q_0 = (\alpha-\alpha_1)(\alpha-\alpha_2)$$

(4.38)

we obtain in the case $\alpha = \alpha_1$

$$h_j = \frac{-1}{(\alpha_1-\alpha_2+j)j} \sum_{k=1}^{j} \left((\alpha_1+j-k) p_k + q_k\right) h_{j-k}, \quad j > 0,$$

(4.39)

which is always solvable since $\text{Re}(\alpha_1-\alpha_2) \geq 0$ by assumption. In the case $\alpha = \alpha_2$ we obtain

$$h_j = \frac{-1}{(\alpha_2-\alpha_1+j)j} \sum_{k=1}^{j} \left((\alpha_2+j-k) p_k + q_k\right) h_{j-k},$$

(4.40)

which might have a problem at $j = m$ if $\alpha_1 = \alpha_2 + m$ for some $m \in \mathbb{N}_0$.