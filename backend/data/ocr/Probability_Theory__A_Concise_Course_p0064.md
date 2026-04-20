18. Prove that if $\xi$ is a random variable such that $Ee^{a\xi}$ exists, where $a$ is a positive constant, then

$$P \{ \xi > e \} \leq \frac{Ee^{a\xi}}{e^{a\xi}}$$

Hint. Apply Chebyshev's inequality to the random variable $\eta = e^{a\xi/2}$.

19. Let $\xi$ be a random variable taking each of the values $-2, -1, 1$ and $2$ with probability $\frac{1}{4}$, and let $\eta = \xi^2$. Prove that $\xi$ and $\eta$ (although obviously dependent) have correlation coefficient $0$.

20. Find the means and variances of two random variables $\xi_1$ and $\xi_2$ with joint probability density

$$p_{\xi_1,\xi_2}(x_1, x_2) = \begin{cases} \sin x_1 \sin x_2 & \text{if } 0 \leq x_1 \leq \frac{\pi}{2}, \quad 0 \leq x_2 \leq \frac{\pi}{2} \\ 0 & \text{otherwise.} \end{cases}$$

What is the correlation coefficient of $\xi_1$ and $\xi_2$?

21. Find the correlation coefficient $r$ of two random variables $\xi_1$ and $\xi_2$ with joint probability density

$$p_{\xi_1,\xi_2}(x_1, x_2) = \begin{cases} \frac{1}{2} \sin (x_1 + x_2) & \text{if } 0 \leq x_1 \leq \frac{\pi}{2}, \quad 0 \leq x_2 \leq \frac{\pi}{2}, \\ 0 & \text{otherwise.} \end{cases}$$

Ans. $r = \frac{\frac{\pi}{2} - 1 - \frac{\pi^2}{16}}{\frac{\pi}{2} - 2 + \frac{\pi^2}{16}} \approx -\frac{1}{4}$.

22. Given a random variable $\xi$, let $\varphi(t)$ be a nondecreasing positive function such that $E\varphi(\xi)$ exists. Prove that

$$P \{ \xi > t \} \leq \frac{m}{\varphi(t)}.$$

23. Deduce Chebyshev's inequality as a special case of (4.28).

24. Let $\xi$ be a random variable with probability density

$$p_{\xi}(x) = \frac{1}{\pi(1 + x^2)} \quad (-\infty < x < \infty).$$

Show that $E\xi$ and $D\xi$ fail to exist.