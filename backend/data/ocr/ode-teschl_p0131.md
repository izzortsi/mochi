where the functions $h_j(z)$ are analytic near $z = 0$ and satisfy $h_j(0) = 1$.

Case 2. If $\alpha_1 - \alpha_2 = m \in \mathbb{N}_0$, a fundamental system of solutions is given by

$$u_1(z) = z^{\alpha_1} h_1(z),$$
$$u_2(z) = z^{\alpha_2} h_2(z) + c \log(z) u_1(z),$$

(4.49)

where the functions $h_j(z)$ are analytic near $z = 0$ and satisfy $h_j(0) = 1$. The constant $c \in \mathbb{C}$ might be zero unless $m = 0$.

Moreover, in both cases the radius of convergence of the power series for $h_1(z)$ and $h_2(z)$ is at least equal to the minimum of the radius of convergence for $p(z)$ and $q(z)$.

Proof. Since $u_1$ and $u_2$ are clearly linearly independent, the only item remaining is to show that the power series for $h_1(z)$ has a nonzero radius of convergence. Let $h_j$ be the coefficients defined via (4.39) and let $R > 0$ be smaller than the radius of convergence of the series for $p(z)$ and $q(z)$. We will show that $|h_j|R^j \leq C$ for some $C > 0$.

Abbreviate

$$P = \sum_{j=1}^{\infty} |p_j|R^j,$$
$$Q = \sum_{j=1}^{\infty} |q_j|R^j.$$

Then there is a $j_0 > 0$ such that

$$\frac{(|\alpha_1| + j)P + Q}{(\text{Re}(\alpha_1 - \alpha_2) + j)j} \leq 1$$

for $j > j_0$. Choose $C = \max_{0 \leq j \leq j_0} |h_j|R^j$. Then the claim holds for $j \leq j_0$ and we can proceed by induction: Suppose it holds up to $j - 1$. Then we obtain from (4.39)

$$|h_j|R^j \leq \frac{1}{(\text{Re}(\alpha_1 - \alpha_2) + j)j} \sum_{k=1}^{j} \left( (|\alpha_1| + j)|p_k| + |q_k| \right) C R^k$$
$$\leq \frac{(|\alpha_1| + j)P + Q}{(\text{Re}(\alpha_1 - \alpha_2) + j)j} C \leq C,$$

which proves the claim.

For the practical application of this result it remains to discuss the case $\alpha_1 - \alpha_2 = m \in \mathbb{N}_0$. One option is to use the variation of constants ansatz (4.42). However, unless one is able to find a closed form for the power series of the quotient $\frac{h_1'(z)}{h(z)}$ it might be better to work directly with the ansatz

$$u_2(z) = \hat{u}_2(z) + c \log(z) u_1(z),$$
$$\hat{u}_2(z) = z^{\alpha_2} h_2(z),$$

(4.50)