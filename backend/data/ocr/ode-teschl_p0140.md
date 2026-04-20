1,2 − c; z) is a second solution for c − 2 ∉ ℕ₀. This gives two linearly independent solutions if c ∉ ℕ.

**Problem 4.17.** Show that any second-order equation (4.20) with finitely many singular points $z_0, \ldots, z_n, \infty$ of Fuchs type is of the form

$$p(z) = \sum_{j=0}^{n} \frac{p_j}{z - z_j}, \quad q(z) = \sum_{j=0}^{n} \left( \frac{q_j}{(z - z_j)^2} + \frac{r_j}{z - z_j} \right),$$

where $p_j, q_j, r_j \in \mathbb{C}$ and necessarily

$$\sum_{j=0}^{n} r_j = 0.$$

Show that there is no singularity at ∞ if in addition $p_\infty = q_\infty = r_\infty = 0$, where

$$p_\infty = 2 - \sum_{j=0}^{n} p_j, \quad q_\infty = \sum_{j=0}^{n} (q_j + r_j z_j), \quad r_\infty = \sum_{j=0}^{n} z_j (2q_j + r_j z_j).$$

**Problem 4.18** (Riemann equation). A second-order equation is called a Riemann equation if it has only three singular points (including ∞) of Fuchs type. Solutions of a Riemann equation are denoted by the Riemann symbol

$$P \left\{ \begin{array}{cccc} z_0 & z_1 & z_2 \\ \alpha_1 & \beta_1 & \gamma_1 \\ \alpha_2 & \beta_2 & \gamma_2 \end{array} \right\},$$

where the numbers $z_j$ are the singular points and the numbers below $z_j$ are the corresponding characteristic exponents.

Recall that given distinct points $z_j$, $j = 0, 1, 2$, can be mapped to any other given points $\zeta_j = \zeta(z_j)$, $j = 0, 1, 2$, by a fractional linear transform (Möbius transform)

$$\zeta(z) = \frac{az + b}{cz + d}, \quad ad - bc \neq 0.$$

Pick $\zeta_0 = 0$, $\zeta_1 = 1$ and $\zeta_2 = \infty$ and show that

$$P \left\{ \begin{array}{cccc} z_0 & z_1 & z_2 \\ \alpha_1 & \beta_1 & \gamma_1 \\ \alpha_2 & \beta_2 & \gamma_2 \end{array} \right\} = P \left\{ \begin{array}{cccc} 0 & 1 & \infty \\ \alpha_1 & \beta_1 & \gamma_1 \\ \alpha_2 & \beta_2 & \gamma_2 \end{array} \right\} \frac{(z - z_0)(z_1 - z_2)}{(z - z_2)(z_1 - z_0)}.$$

For the case $z_0 = 0$, $z_1 = 1$, $z_2 = \infty$ show that

$$p(z) = \frac{p_0}{z} + \frac{p_1}{z - 1}, \quad q(z) = \frac{q_0}{z^2} + \frac{r_0}{z} + \frac{q_1}{(z - 1)^2} - \frac{r_0}{z - 1}.$$

Express the coefficients $p(z)$ and $q(z)$ in terms of the characteristic exponents and show that

$$\alpha_1 + \alpha_2 + \beta_1 + \beta_2 + \gamma_1 + \gamma_2 = 1.$$