In this case, $h_j$, $1 \leq j \leq m-1$, are uniquely determined by our choice $h_0 = 1$, whereas for $j = m$ we obtain

$$0 = \sum_{k=1}^{m} \left( (\alpha_1 - k)p_k + q_k \right) h_{m-k}. \tag{4.41}$$

If this equation is fulfilled, we can choose $h_m$ as we like (this freedom reflects the fact that we can add an arbitrary multiple of $u_1$ to $u_2$) and the remaining $h_j$, $j > m$, are again determined recursively. Otherwise there is no solution of the form $z^{\alpha_2}h(z)$.

Hence we need a different ansatz in this last case. To find the form of the second solution we use the variation of constants ansatz (compare Section 3.5)

$$u_2(z) = c(z)u_1(z) = c(z)z^{\alpha_1}h_1(z). \tag{4.42}$$

Then

$$c''(z) + \left( 2\frac{\alpha_1}{z} + 2\frac{h_1'(z)}{h_1(z)} + p(z) \right) c'(z) = 0, \tag{4.43}$$

where

$$\left( 2\frac{\alpha_1}{z} + 2\frac{h_1'(z)}{h_1(z)} + p(z) \right) = \frac{1 - \alpha_2 + \alpha_1}{z} + 2h_1'(0) + p_1 + \ldots \tag{4.44}$$

Hence, by Lemma 4.4

$$c'(z) = z^{\alpha_2 - \alpha_1} \sum_{j=0}^{\infty} c_jz^j, \quad c_0 \neq 0. \tag{4.45}$$

Integrating once we obtain (neglecting the integration constant)

$$c(z) = z^{\alpha_2 - \alpha_1} \sum_{j=0}^{\infty} \frac{c_j}{\alpha_2 - \alpha_1 + j}z^j, \tag{4.46}$$

if $\alpha_1 - \alpha_2 \notin \mathbb{N}_0$ and

$$c(z) = z^{\alpha_2 - \alpha_1} \sum_{j=0,j \neq m}^{\infty} \frac{c_j}{\alpha_2 - \alpha_1 + j}z^j + c_m \log(z), \tag{4.47}$$

if $\alpha_1 - \alpha_2 = m \in \mathbb{N}_0$. In the latter case $c_m$ could be zero unless $m = 0$.

In summary we have:

**Theorem 4.5** (Fuchs). Suppose the coefficients $p(z)$ and $q(z)$ of the second order equation (4.20) have poles of order (at most) one and two respectively. Then, if $\alpha_1, \alpha_2$ are the characteristic exponents defined in (4.37) and ordered according to $\text{Re}(\alpha_1) \geq \text{Re}(\alpha_2)$, two cases can occur:

**Case 1.** If $\alpha_1 - \alpha_2 \notin \mathbb{N}_0$, a fundamental system of solutions is given by

$$u_j(z) = z^{\alpha_j}h_j(z), \quad j = 1, 2, \tag{4.48}$$