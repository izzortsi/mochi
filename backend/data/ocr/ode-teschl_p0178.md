For (5.83) to make sense we of course need to assume $\rho_u(x) \neq 0$ but if $\rho_u(x_0) = 0$ we have $u(x_0) = p(x_0)u'(x_0) = 0$ and hence $u \equiv 0$ by uniqueness. Since the trivial solution $u \equiv 0$ is of no interest we will exclude this and assume that $u$ is a non-trivial solution from now on. Moreover, we will also assume that all solutions are real-valued.

Moreover, the angle $\theta_u(x)$ is defined only up to multiples of $2\pi$ and if we restrict it to $(-\pi, \pi]$, as usual, it will jump from $+\pi$ to $-\pi$ at a zero of $u$ which crosses the negative $x$ axis from above. Since we do not want this behavior, we will choose the unknown multiple of $2\pi$ such that $\theta_u$ remains continuous. This makes $\theta_u$ unique for $x \in (a, b)$ once an initial value at some point $c$ has been chosen.

That $u$ satisfies $Lu = \lambda u$ is now equivalent to the system (Problem 5.24)

$$\theta'_u = \frac{\cos(\theta_u)^2}{p} + (\lambda r - q)\sin(\theta_u)^2,$$

$$\rho'_u = \rho_u\left(\frac{1}{p} + q - \lambda r\right)\frac{\sin(2\theta_u)}{2}. \tag{5.85}$$

Observe that the equation for $\theta_u$ does not involve $\rho_u$ and that the equation for $\rho_u$ can be solved once $\theta_u$ is known:

$$\rho_u(x) = \rho_u(c) \exp\left(\frac{1}{2} \int_c^x (p^{-1}(t) + q(t) - \lambda r(t)) \sin(2\theta_u(t)) dt\right). \tag{5.86}$$

Hence we have effectively reduced our second order equation to a first order one. However, this does not come without a price: the equation for $\theta_u$ is no longer linear! Moreover, note that if we compute $\theta_u$ by solving the system (5.85), this will automatically give us the required continuous representative. Finally, note that if $\theta_u(x)$ is a solution of (5.85), then the same is true for $\theta_u(x) + n\pi$, $n \in \mathbb{Z}$, in fact, this is a Prüfer angle corresponding to $(-1)^n u(x)$.

Now, if we look at the right-hand side of the equation for $\theta_u$ we see that it will be positive if $\lambda r - q > 0$, which will always hold for sufficiently large $\lambda$. In particular, we expect $\theta_u$ to increase as $\lambda$ increases and hence the solution to oscillate faster. We will come back to this in a moment, but for now observe that at a zero of $u$ the Prüfer angle always increases:

$$u(x_0) = 0 \iff \theta_0(x_0) = 0 \mod \pi \Rightarrow \theta'_u(x_0) = p(x_0)^{-1} > 0. \tag{5.87}$$

In particular, the Prüfer angel can cross an integer multiple of $\pi$ only from below and hence will always increase by $\pi$ between two consecutive zeros. Hence we can use the integer part of $\theta_u/\pi$ to count the number of zeros:

**Lemma 5.14.** Let $u$ be a solution of $Lu = \lambda u$ and denote by $\#(u)$ the number of zeros of $u$ inside $(a, b)$. Then

$$\#(u) = \lceil \theta_u(b)/\pi \rceil - \lfloor \theta_u(a)/\pi \rfloor - 1, \tag{5.88}$$