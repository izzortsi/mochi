Completeness

In Chapter 1 we discussed the Cauchy criterion for convergence of a sequence of real numbers. There is a natural way to carry these ideas over to a metric space $M$. The sequence $(p_n)$ in $M$ satisfies a **Cauchy condition** provided that for each $\epsilon > 0$ there is an integer $N$ such that for all $k, n \geq N$ we have $d(p_k, p_n) < \epsilon$, and $(p_n)$ is said to be a **Cauchy sequence**. In symbols,

$$\forall \epsilon > 0 \exists N \text{ such that } k, n \geq N \Rightarrow d(p_k, p_n) < \epsilon.$$

The terms of a Cauchy sequence “bunch together” as $n \to \infty$. Each convergent sequence $(p_n)$ is Cauchy. For if $(p_n)$ converges to $p$ as $n \to \infty$ then, given $\epsilon > 0$, there is an $N$ such that for all $n \geq N$ we have

$$d(p_n, p) < \frac{\epsilon}{2}.$$

By the triangle inequality, if $k, n \geq N$ then

$$d(p_k, p_n) \leq d(p_k, p) + d(p, p_n) < \epsilon,$$

so convergence $\Rightarrow$ Cauchy.

Theorem 1.5 states that the converse is true in the metric space $\mathbb{R}$. Every Cauchy sequence in $\mathbb{R}$ converges to a limit in $\mathbb{R}$. In the general metric space, however, this