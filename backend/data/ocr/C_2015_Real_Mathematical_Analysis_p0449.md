The first integral equals $f(b)$ since we set $f(x) = f(b)$ for $x > b$. The second integral is at least $f(a)$ since $f$ is nondecreasing. Thus

$$\int_{a}^{b} g_n(x) \, dx \leq f(b) - f(a),$$

which completes the proof of (8). As remarked before, since the integral of $f'$ is finite, $f'(x) < \infty$ for almost all $x$, and hence $f$ is differentiable (with finite derivative) almost everywhere.

**59 Corollary** A Lipschitz function is almost everywhere differentiable.

**Proof** Suppose that $f : [a, b] \to \mathbb{R}$ is Lipschitz with Lipschitz constant $L$. Then for all $x, y \in [a, b]$ we have

$$|f(y) - f(x)| \leq L |y - x|.$$

The function $g(x) = f(x) + Lx$ is nondecreasing. Thus $g'$ exists almost everywhere and so does $f' = g' - L.$

**Remark** Corollary 59 remains true for a Lipschitz function $f : \mathbb{R}^n \to \mathbb{R}$, it is Rademacher’s Theorem, and the proof is much harder.

**Definition** The variation of a function $f : [a, b] \to \mathbb{R}$ over a partition $X : a = x_0 < \cdots < x_n = b$ is the sum $\sum_{k=1}^{n} |\Delta_k f|$, where $\Delta_k f = f(x_k) - f(x_{k-1})$. The supremum of the variations over all partitions $X$ is the **total variation** of $f$. If the total variation of $f$ is finite then $f$ is said to be a function of **bounded variation**.

**60 Theorem** A function of bounded variation is almost everywhere differentiable.

**Proof** Up to an additive constant, a function of bounded variation can be written as the difference $f(x) = P(x) - N(x)$, where

$$P(x) = \sup \{ \sum_{k} \Delta_k f : a = x_0 < \ldots < x_n = x \text{ and } \Delta_k f \geq 0 \}$$

$$N(x) = -\inf \{ \sum_{k} \Delta_k f : a = x_0 < \ldots < x_n = x \text{ and } \Delta_k f < 0 \}.$$

See Exercise 67. The functions $P$ and $N$ are monotone nondecreasing, so for almost every $x$ we have $f'(x) = P'(x) - N'(x)$ exists and is finite.

**61 Theorem** An absolutely continuous function is of bounded variation.