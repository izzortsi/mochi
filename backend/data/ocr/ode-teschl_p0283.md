Proof. First observe that it is no restriction to assume $k(t, \lambda) \equiv 0$ by changing $K(t, x, \lambda)$ and $V$. Then existence and the bound follows as in the proof of Theorem 2.5. By the dominated convergence theorem $K_{\lambda}(x)$ is continuous with respect to $\lambda$ for fixed $x(t)$. Hence by Theorem 9.12 the second term in

$$|\bar{x}(t, \lambda) - \bar{x}(s, \eta)| \leq |\bar{x}(t, \lambda) - \bar{x}(s, \lambda)| + |\bar{x}(s, \lambda) - \bar{x}(s, \eta)|$$

converges to zero as $(t, \lambda) \to (s, \eta)$ and so does the first since

$$|\bar{x}(t, \lambda) - \bar{x}(s, \lambda)| \leq \int_s^t K(r, \bar{x}(r, \lambda), \lambda)dr \leq M|t - s|.$$

Now let us turn to the second claim. Suppose that $\bar{x}(t, \lambda) \in C^1$. Then $y(t, \lambda) = \frac{\partial}{\partial \lambda} \bar{x}(t, \lambda)$ is a solution of the fixed point equation $\tilde{K}_{\lambda}(\bar{x}(\lambda), y) = y$. Here

$$\tilde{K}_{\lambda}(x, y)(t) = \int_0^t \frac{\partial K}{\partial \lambda}(s, x(s), \lambda)ds + \int_0^t \frac{\partial K}{\partial x}(s, x(s), \lambda)y(s)ds.$$

This integral operator is linear with respect to $y$ and by the mean value theorem and (9.51) we have

$$\|\frac{\partial K}{\partial x}(t, x, \lambda)\| \leq L.$$

Hence the first part implies existence of a continuous solution $y(t, \lambda)$ of $\tilde{K}_{\lambda}(\bar{x}(\lambda), y) = y$. It remains to show that this is indeed the derivative of $\bar{x}(\lambda)$.

Fix $\lambda$. Starting with $(x_0(t), y_0(t)) = (0, 0)$ we get a sequence $(x_{n+1}, y_{n+1}) = (K_{\lambda}(x_n), \tilde{K}_{\lambda}(x_n, y_n))$ such that $y_n(t) = \frac{\partial}{\partial \lambda} x_n(t)$. Since $\tilde{K}_{\lambda}$ is continuous with respect to $x$ (Problem 9.17), Theorem 9.12 implies $(x_n, y_n) \to (\bar{x}(\lambda), \bar{y}(\lambda))$. Moreover, since $(x_n, y_n)$ is uniformly bounded with respect to $\lambda$, we conclude by Corollary 9.14 that $\bar{y}(\lambda)$ is indeed the derivative of $\bar{x}(\lambda)$.

This settles the $r = 1$ case. Now suppose the claim holds for $r - 1$. Since the equation for $y$ is of the same type as the one for $x$ and since $k_{\lambda}, \frac{\partial K}{\partial \lambda}, \frac{\partial K}{\partial x} \in C^{r-1}$ we can conclude $y \in C^{r-1}$ and hence $x \in C^r$.

Corollary 9.17. If, in addition to the requirements from Theorem 9.10, $k \in C^r(I \times \Lambda, V)$ and $K \in C^r(I \times V \times \Lambda, \mathbb{R}^n)$, then $\bar{x}(t, \lambda) \in C^r(I \times \Lambda, V)$.

Proof. The case $r = 0$ follows from the above theorem. Now let $r = 1$. Differentiating the fixed point equation with respect to $t$ we see that

$$\dot{\bar{x}}(t, \lambda) = \dot{k}(t, \lambda) + K(t, \bar{x}(t, \lambda), \lambda)$$

is continuous. Hence, together with the result from above, all partial derivatives exist and are continuous, implying $\bar{x} \in C^1$. The case for general $r$ now follows by induction as in the proof of the above theorem.