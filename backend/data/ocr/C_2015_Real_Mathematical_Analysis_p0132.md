Let $\epsilon > 0$ be given. There exists $N \geq 3/\epsilon$ such that if $k, \ell \geq N$ then

$$D(P_k, P_\ell) \leq \frac{\epsilon}{3}$$

and

$$d(q_k, q_\ell) = d(p_{k,k}, p_{\ell,\ell})$$
$$\leq d(p_{k,k}, p_{k,n}) + d(p_{k,n}, p_{\ell,n}) + d(p_{\ell,n}, p_{\ell,\ell})$$
$$\leq \frac{1}{k} + d(p_{k,n}, p_{\ell,n}) + \frac{1}{\ell}$$
$$\leq \frac{2\epsilon}{3} + d(p_{k,n}, p_{\ell,n}).$$

The inequality is valid for all $n$ and the left-hand side, $d(q_k, q_\ell)$, does not depend on $n$. The limit of $d(p_{k,n}, p_{\ell,n})$ as $n \to \infty$ is $D(P_k, P_\ell)$, which we know to be $< \epsilon/3$. Thus, if $k, \ell \geq N$ then $d(q_k, q_\ell) < \epsilon$ and $(q_n)$ is Cauchy. Similarly we see that $P_k \to Q$ as $k \to \infty$. For, given $\epsilon > 0$, we choose $N \geq 2/\epsilon$ such that if $k, n \geq N$ then $d(q_k, q_n) < \epsilon/2$, from which it follows that

$$d(p_{k,n}, q_n) \leq d(p_{k,n}, p_{k,k}) + d(p_{k,k}, q_n)$$
$$= d(p_{k,n}, p_{k,k}) + d(q_k, q_n)$
$$\leq \frac{1}{k} + \frac{\epsilon}{2} < \epsilon.$$

The limit of the left-hand side of this inequality, as $n \to \infty$, is $D(P_k, Q)$. Thus

$$\lim_{k \to \infty} P_k = Q$$

and $\widehat{M}$ is complete. $\square$

Uniqueness of the completion is not surprising, and is left as Exercise 106. A different proof of the Completion Theorem is sketched in Exercise 4.39.

A Second Construction of $\mathbb{R}$ from $\mathbb{Q}$

In the particular case that the metric space $M$ is $\mathbb{Q}$, the Completion Theorem leads to a construction of $\mathbb{R}$ from $\mathbb{Q}$ via Cauchy sequences. Note, however, that applying the theorem as it stands involves circular reasoning, for its proof uses completeness of $\mathbb{R}$ to define the metric $D$. Instead, we use only the Cauchy sequence strategy.

Convergence and Cauchyness for sequences of rational numbers are concepts that make perfect sense without a priori knowledge of $\mathbb{R}$. Just take all epsilons and deltas