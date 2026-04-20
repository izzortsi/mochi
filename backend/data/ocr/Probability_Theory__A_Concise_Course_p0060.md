If $\xi_1$ and $\xi_2$ are independent random variables, then

$$\mathbf{D}(\xi_1 + \xi_2) = \mathbf{D}\xi_1 + \mathbf{D}\xi_2.$$

In fact, if $a_1 = \mathbf{E}\xi_1$ and $a_2 = \mathbf{E}\xi_2$, then, by (4.14),

$$\mathbf{E}(\xi_1 - a_1)(\xi_2 - a_2) = \mathbf{E}(\xi_1 - a_1)\mathbf{E}(\xi_2 - a_2) = 0,$$

(4.22)

and hence

$$\mathbf{D}(\xi_1 + \xi_2) = \mathbf{E}(\xi_1 + \xi_2 - a_1 - a_2)^2$$

$$= \mathbf{E}(\xi_1 - a_1)^2 + 2\mathbf{E}(\xi_1 - a_1)(\xi_2 - a_2) + \mathbf{E}(\xi_2 - a_2)^2$$

$$= \mathbf{E}(\xi_1 - a_1)^2 + \mathbf{E}(\xi_2 - a_2)^2 = \mathbf{D}\xi_1 + \mathbf{D}\xi_2.$$

Given two random variables $\xi_1$ and $\xi_2$, we now consider the problem of finding the linear expression of the form $\hat{c}_1 + \hat{c}_2\xi_2$, involving constants $\hat{c}_1$ and $\hat{c}_2$, such that $\hat{c}_1 + \hat{c}_2\xi_2$ is the best “mean square approximation” to $\xi_1$, in the sense that

$$\mathbf{E}(\xi_1 - \hat{c}_1 - \hat{c}_2\xi_2)^2 = \min_{c_1, c_2} \mathbf{E}(\xi_1 - c_1 - c_2\xi_2)^2,$$

(4.23)

where the minimum is taken with respect to all $c_1$ and $c_2$. To solve this problem, we let

$$a_1 = \mathbf{E}\xi_1, \quad \sigma_1^2 = \mathbf{D}\xi_1,$$

(4.24)

$$a_2 = \mathbf{E}\xi_2, \quad \sigma_1^2 = \mathbf{D}\xi_2,$$

and introduce the quantity

$$r = \frac{\mathbf{E}(\xi_1 - a_1)(\xi_2 - a_2)}{\sigma_1\sigma_2},$$

(4.25)

called the correlation coefficient of the random variables $\xi_1$ and $\xi_2$. Going over for convenience to the “normalized” random variables

$$\eta_1 = \frac{\xi_1 - a_1}{\sigma_1}, \quad \eta_2 = \frac{\xi_2 - a_2}{\sigma_2},$$

we find that

$$\min_{c_1, c_2} \mathbf{E}(\xi_1 - c_1 - c_2\xi_2)^2 = \sigma_1^2 \min_{c_1, c_2} \mathbf{E}(\eta_1 - c_1 - c_2\eta_2)^2$$

(4.26)

(why?). Clearly,

$$\mathbf{E}\eta_1 = \mathbf{E}\eta_2 = 0, \quad \mathbf{D}\eta_1 = \mathbf{E}\eta_2 = \mathbf{D}\eta_2 = 1, \quad \mathbf{E}\eta_1\eta_2 = r,$$

$$\mathbf{E}(\eta_1 - r\eta_2)\eta_2 = \mathbf{E}\eta_1\eta_2 - r\mathbf{E}\eta_2^2 = 0,$$

$$\mathbf{E}(\eta_1 - r\eta_2)^2 = \mathbf{E}\eta_1^2 - 2r\mathbf{E}\eta_1\eta_2 + r^2\mathbf{E}\eta_2^2 = 1 - r^2,$$

and hence

$$\mathbf{E}(\eta_1 - c_1 - c_2\eta_2)^2 = \mathbf{E}[(\eta_1 - r\eta_2) - c_1 + (r - c_2)\eta_2]^2$$

$$= (1 - r^2) + c_1^2 + (r - c_2)^2$$