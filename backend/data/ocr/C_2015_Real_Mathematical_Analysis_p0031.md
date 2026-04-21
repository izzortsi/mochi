We claim that $a_n$ converges to $b$ as $n \to \infty$. Given $\epsilon > 0$ we must show there is an $N$ such that for all $n \geq N$ we have $|a_n - b| < \epsilon$. Since $(a_n)$ is Cauchy and $\epsilon/2$ is positive there does exist an $N$ such that if $n, k \geq N$ then

$$|a_n - a_k| < \frac{\epsilon}{2}.$$

Since $b - \epsilon/2$ is less than $b$ it is not an upper bound for $X$, so there is $x \in X$ with $b - \epsilon/2 \leq x$. For infinitely many $n$ we have $a_n \geq x$. Since $b + \epsilon/2 > b$ it does not belong to $X$, and therefore for only finitely many $n$ do we have $a_n > b + \epsilon/2$. Thus, for infinitely many $n$ we have

$$b - \frac{\epsilon}{2} \leq x \leq a_n \leq b + \frac{\epsilon}{2}.$$

Since there are infinitely many of these $n$ there are infinitely many that are $\geq N$. Pick one, say $a_{n_0}$ with $n_0 \geq N$ and $b - \epsilon/2 \leq a_{n_0} \leq b + \epsilon/2$. Then for all $n \geq N$ we have

$$|a_n - b| \leq |a_n - a_{n_0}| + |a_{n_0} - b| < \frac{\epsilon}{2} + \frac{\epsilon}{2} = \epsilon$$

which completes the verification that $(a_n)$ converges. See Figure 4.

**Figure 4** For all $n \geq N$ we have $|a_n - b| < \epsilon$.

Restating Theorem 5 gives the

**6 Cauchy Convergence Criterion** *A sequence $(a_n)$ in $\mathbb{R}$ converges if and only if*

$$\forall \epsilon > 0 \exists N \in \mathbb{N} \text{ such that } n, k \geq N \Rightarrow |a_n - a_k| < \epsilon.$$

Further description of $\mathbb{R}$

The elements of $\mathbb{R} \setminus \mathbb{Q}$ are irrational numbers. If $x$ is irrational and $r$ is rational then $y = x + r$ is irrational. For if $y$ is rational then so is $y - r = x$, the difference of rationals being rational. Similarly, if $r \neq 0$ then $rx$ is irrational. It follows that the reciprocal of an irrational number is irrational. From these observations we will show that the rational and irrational numbers are thoroughly mixed up with each other.

Let $a < b$ be given in $\mathbb{R}$. Define the intervals $(a, b)$ and $[a, b]$ as

$$(a, b) = \{x \in \mathbb{R} : a < x < b\}$$

$$[a, b] = \{x \in \mathbb{R} : a \leq x \leq b\}.$$