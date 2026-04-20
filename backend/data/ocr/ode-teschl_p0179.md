where $|x| = \max\{n \in \mathbb{Z} | n \leq x\}$, $|x| = \min\{n \in \mathbb{Z} | n \geq x\}$ denote the floor, ceiling functions, respectively.

Next we want to return to our previous observation that $\theta_u$ should increase with $\lambda$. So we consider solutions $u(\lambda, x)$ of $Lu = \lambda u$ and denote the associated Prüfer variables by $\rho_u(\lambda, x), \theta_u(\lambda, x)$. In fact, note that if $u(\lambda, x)$ solves $Lu = \lambda u$ and $\lambda_1 > \lambda_0$, then $\theta_u(\lambda_1, x) > \theta_u(\lambda_0, x)$ for $x > c$ provided $\theta_u(\lambda_1, c) \geq \theta_u(\lambda_0, c)$ by Theorem 1.3. For $x < c$ the inequalities have to be reversed.

Now things get particularly interesting if we apply these findings to the solutions $u(x) = u_{a,b}(\lambda, x)$ defined in (5.62), for which we can fix the Prüfer angles by setting

$$\theta_a(\lambda, a) = \alpha \in [0, \pi), \quad -\theta_b(\lambda, b) = \pi - \beta \in [0, \pi).$$

By our findings $\theta_a(., x)$ is increasing and bounded below $\theta_a(., x) > 0$. Similarly, $\theta_b(., x)$ is decreasing and bounded above $\theta_b(., x) < 0$, or equivalently $-\theta_b(., x)$ is increasing and bounded below $-\theta_b(., x) > 0$.

The situation for $\theta_a(\lambda, x)$ is illustrated in Figure 5.1 which shows the Prüfer angle as a function of $\lambda$ (for fixed $x = b$) and as a function of $x$ for some fixed values of $\lambda$. Note that for the picture on the right, the crossings with the grid lines correspond to the case where $\theta_a$ is an integer multiple of $\pi$ and hence to the zeros of $u_a(\lambda)$. Since $\theta_a(\lambda)$ increases as $\lambda$ increases the zeros must move to the left and a new one will enter the interval $(a, b)$ precisely when $u_a(\lambda, b)$ vanishes.

As $\lambda \to -\infty$ the picture seems to indicate that $\theta_a(\lambda, x)$ tends to zero. That this is indeed always the case will be shown in the following lemma.

**Lemma 5.15.** We have

$$\lim_{\lambda \downarrow -\infty} \theta_b(\lambda, x) = 0, \quad x \in [a, b), \quad \lim_{\lambda \downarrow -\infty} \theta_a(\lambda, x) = 0, \quad x \in (a, b].$$

**Proof.** We only do the proof for $\theta_a(x) = \lim_{\lambda \downarrow -\infty} \theta_a(\lambda, x)$. By monotonicity and $\theta_a(\lambda, x) > 0$ the limit exists and satisfies $\theta_a(x) \geq 0$.