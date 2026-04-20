11.6. Strange attractors/repellors and fractal sets

A compact invariant set $\Lambda$, $f(\Lambda) = \Lambda$, is called **attracting** if there is a neighborhood $U$ of $\Lambda$ such that $d(f^n(x), \Lambda) \to 0$ as $n \to \infty$ for all $x \in U$. A compact invariant set $\Lambda$, $f(\Lambda) = \Lambda$, is called **repelling** if there is a neighborhood $U$ of $\Lambda$ such that for all $x \in U \setminus \Lambda$ there is an $n$ such that $f^n(x) \notin U$.

For example, let $f(x) = x^3$. Then $\{0\}$ is an attracting set and $[-1, 1]$ is an repelling set. To exclude sets like $[-1, 1]$ in the above example we will introduce another condition. An attracting respectively repelling set is called an **attractor** respectively **repellor** if it is topologically transitive.

If $f$ is differentiable, there is a simple criterion when an invariant set is attracting respectively repelling.

**Theorem 11.16.** Suppose $f: I \to I$ is continuously differentiable and $\Lambda$ is a compact invariant set. If there is an $n_0 \in \mathbb{N}$ such that $|d(f^{n_0})_x| < 1$ for all $x \in \Lambda$, then $\Lambda$ is attracting. Similarly, if there is an $n_0 \in \mathbb{N}$ such that $|d(f^{n_0})_x| > 1$ for all $x \in \Lambda$, then $\Lambda$ is repelling.

**Proof.** We only prove the first claim, the second is similar. Choose $\alpha$ such that $\max_{x \in \Lambda} |d(f^{n_0})_x| < \alpha < 1$. For every $y$ in $\Lambda$ there is a (nonempty) open interval $I_y$ containing $y$ such that $|d(f^{n_0})_x| \leq \alpha$ for all $x \in I_y$. Now let $U$ be the union of all those intervals. Fix $x \in U$ and let $y \in \Lambda$ be such that $d(x, \Lambda) = |x - y|$. Then, by the mean value theorem, $d(f^{n_0}(x), \Lambda) \leq |f^{n_0}(x) - f^{n_0}(y)| \leq \alpha |x - y| = \alpha d(x, \Lambda)$. Hence $d(f^{n_0}(x), \Lambda) \to 0$ and by continuity of $f$ and invariance of $\Lambda$ we also have $d(f^{n_0+j}(x), \Lambda) \to 0$ for $0 \leq j \leq n_0$. Thus the claim is proven.

Repelling, attracting sets as above are called **hyperbolic repelling**, attracting sets, respectively.

An attractor, repellor $\Lambda$ is called **strange** if the dynamical system $(\Lambda, f)$ is chaotic and if $\Lambda$ is **fractal**.

We have already learned what the first condition means, but you might not know what fractal means. The short answer is that a set is called fractal if its Hausdorff dimension is not an integer. However, since you might also not know what the Hausdorff dimension is, let me give you the long answer as well.

I will first explain what the Hausdorff measure is, omitting all technical details (which can be found e.g. in [35]).

Recall that the **diameter** of a (nonempty) subset $U$ of $\mathbb{R}^n$ is defined by $d(U) = \sup_{x,y \in U} |x - y|$. A **cover** $\{V_j\}$ of $U$ is called a $\delta$-**cover** if it is countable and if $d(V_j) \leq \delta$ for all $j$.