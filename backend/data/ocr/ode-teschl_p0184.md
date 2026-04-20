That $u$ satisfies $Lu = \lambda u$ is now equivalent to the system

$$\tilde{\theta}'_u = \frac{h}{p} - \frac{p^{-1}h^2 + q - \lambda r}{h} \sin(\tilde{\theta}_u)^2 + \sin(2\tilde{\theta}_u) \frac{h'}{2h},$$

$$\tilde{\rho}'_u = \tilde{\rho}_u \left( \frac{p^{-1}h^2 + q - \lambda r}{2h} \sin(2\tilde{\theta}_u) + \cos(2\tilde{\theta}_u) \frac{h'}{2h} \right). \tag{5.106}$$

Making appropriate choices for $h$ one can read off the asymptotic behavior of $\theta_u$.

**Lemma 5.24.** Suppose $pr \in C^1$. Then the Prüfer angles $\theta_{a,b}(\lambda,x)$ satisfy

$$\theta_a(\lambda,x) = \sqrt{\lambda} \int_a^x \sqrt{\frac{r(t)}{p(t)}} dt + O(1), \quad \theta_b(\lambda,x) = -\sqrt{\lambda} \int_x^b \sqrt{\frac{r(t)}{p(t)}} dt + O(1) \tag{5.107}$$

as $\lambda \to \infty$.

**Proof.** We only consider the case of $\theta_a$. Without loss of generality we can replace the original Prüfer angles by modified ones with $h(x) = \sqrt{\lambda r(x)p(x)}$ (assuming $\lambda > 0$). Then the differential equation for $\tilde{\theta}_a$ reads

$$\tilde{\theta}'_a = \sqrt{\lambda} \sqrt{\frac{r}{p}} - \frac{q}{\sqrt{\lambda pr}} \sin(\tilde{\theta}_a)^2 + \sin(2\tilde{\theta}_a) \frac{(pr)'}{(pr)}$$

and the claim follows after integrating both sides observing $|\sin(\tilde{\theta}_a)| \leq 1$. $\square$

As a simple corollary we now obtain from (5.92) a famous result of Weyl:

**Theorem 5.25** (Weyl asymptotics). Suppose $pr \in C^1$. Then the eigenvalues satisfy

$$E_n = \pi^2 \left( \int_a^b \sqrt{\frac{r(t)}{p(t)}} dt \right)^{-2} n^2 + O(n). \tag{5.108}$$

For another application of the modified Prüfer transformation to obtain asymptotics for large $x$ see Problem 5.31.

We conclude this section by mentioning that the results presented here can be extended to Sturm–Liouville equations on unbounded intervals. Again one can show that there is a connection between the number of eigenvalues and zeros of solutions. Once the interval is unbounded, it can happen that a solution of the equation $(L - \lambda)u = 0$ has an infinite number of zeros and $L - \lambda$ is called **oscillating** in this case. Theorem 5.20 implies that this is then true for all solutions. For example, if we consider the differential equation $(L_0 - \lambda)u = -u'' - \lambda u = 0$ on $I = (0,\infty)$, then it will be oscillatory for $\lambda > 0$ and non-oscillatory for $\lambda \leq 0$. In particular, the borderline case $\lambda = 0$ in combination with Sturm’s comparison theorem implies that any perturbation $L = L_0 + q$ will be (non-)oscillatory if $q(x)$ is eventually