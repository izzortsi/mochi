where $\sigma_1 > 0$, $\sigma_2 > 0$, $-1 < r < 1$. Prove that each of the random variables $\xi_1$ and $\xi_2$ has a univariate (i.e., one-dimensional) normal distribution of the form (5.13), where $\mathbf{E}\xi_1 = a$, $\mathbf{D}\xi_1 = \sigma_1^2$, $\mathbf{E}\xi_2 = b$, $\mathbf{D}\xi_2 = \sigma_2^2$.

Hint. Clearly,

$$p_{\xi_1}(x_1) = \int_{-\infty}^{\infty} p_{\xi_1,\xi_2}(x_1, x_2) dx_2, \quad p_{\xi_2}(x_2) = \int_{-\infty}^{\infty} p_{\xi_1,\xi_2}(x_1, x_2) dx_1$$

(why?).

15. Prove that the number $r$ in (5.18) is the correlation coefficient of the random variables $\xi_1$ and $\xi_2$. Prove that $\xi_1$ and $\xi_2$ are independent if and only if $r = 0$.

Comment. This is a situation in which $r$ is a satisfactory measure of the extent to which the random variables $\xi_1$ and $\xi_2$ are dependent (the larger $|r|$, the “more dependent” $\xi_1$ and $\xi_2$).

16. Let $\xi_1$ and $\xi_2$ be the same as in Problem 14. Find the probability distribution of $\eta = \xi_1 + \xi_2$.

Ans. The random variable $\eta$ is normal, with probability density

$$p_{\eta}(x) = \frac{1}{\sqrt{2\pi(\sigma_1^2 + 2r\sigma_1\sigma_2 + \sigma_2^2)}} \exp \left[ -\frac{(x - a - b)^2}{2(\sigma_1^2 + 2r\sigma_1\sigma_2 + \sigma_2^2)} \right].$$