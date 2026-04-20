and hence $K_{\lambda}$ maps $C([0, \infty), B_{\delta}(0))$ into itself. Moreover, by assumption $K_{\lambda}$ is a contraction with contraction constant $\theta$ implying that there is a unique solution $\bar{x}(\lambda, t)$.

Next, we want to show that $K_{\lambda}(x)$ is continuous with respect to $\lambda$,

$$|K_{\lambda}(x)(t) - K_{\eta}(x)(t)| \leq \int_{0}^{\infty} |\kappa(s - t, \lambda)| |K(s, x(s), \lambda) - K(s, x(s), \eta)| ds$$
$$\int_{0}^{\infty} |\kappa(s - t, \lambda) - \kappa(s - t, \eta)| |K(s, x(s), \eta)| ds.$$

By uniform continuity of $K$, for every $\varepsilon > 0$ we have $|K(s, x, \lambda) - K(s, x, \eta)| \leq \varepsilon$ provided $|\lambda - \eta|$ is sufficiently small and hence

$$\|K_{\lambda}(x)(t) - K_{\eta}(x)(t)\| \leq \frac{\varepsilon \theta}{L} + M \int_{-\infty}^{\infty} |\kappa(s - t, \lambda) - \kappa(s - t, \eta)| ds.$$

Since the right-hand side can be made arbitrarily small by choosing $|\lambda - \eta|$ small (dominated convergence), the claim follows.

Now we can show that $\bar{x}$ is continuous. By our previous consideration, the first term in

$$|\bar{x}(t, \lambda) - \bar{x}(s, \eta)| \leq |\bar{x}(t, \lambda) - \bar{x}(t, \eta)| + |\bar{x}(t, \eta) - \bar{x}(s, \eta)|$$

converges to zero as $(t, \lambda) \to (s, \eta)$ and so does the second since

$$|\bar{x}(t, \eta) - \bar{x}(s, \eta)| \leq \int_{0}^{\infty} |\kappa(r - t, \eta) - \kappa(r - s, \eta)| |K(r, \bar{x}(r, \eta), \eta)| dr$$
$$\leq M \int_{0}^{\infty} |\kappa(r - t, \eta) - \kappa(r - s, \eta)| dr.$$

Hence the case $r = 0$ is finished.

Now let us turn to the second claim. Suppose that $\bar{x}(t, \lambda) \in C^1$. Then $\bar{y}(t, \lambda) = \frac{\partial}{\partial \lambda} \bar{x}(t, \lambda)$ is a solution of the fixed point equation $\tilde{K}_{\lambda}(\bar{x}(\lambda), y) = y$. Here

$$\tilde{K}_{\lambda}(x, y)(t) = \int_{0}^{\infty} \kappa_{\lambda}(s - t, \lambda) K(s, x(s), \lambda) ds$$
$$+ \int_{0}^{\infty} \kappa(s - t, \lambda) K_{\lambda}(s, x(s), \lambda) ds$$
$$+ \int_{0}^{\infty} \kappa(s - t, \lambda) K_x(s, x(s), \lambda) y(s) ds,$$

where the subscripts denote partial derivatives. The rest follows as in the proof of the Theorem 9.16. To show that $\tilde{K}_{\lambda}(x, y)$ depends continuously on $x$ you need to use uniform continuity of $K$ and its derivatives.