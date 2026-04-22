The function $g_n = f - f_n$ is nonnegative, integrable, and $g_n \downarrow 0$ as $n \to \infty$. We fix $\alpha > 0$ and apply Lemma 52 to $g_n$. The Dominated Convergence Theorem implies $\int g_n \to 0$ and we get

$$m^*(X(\alpha, g_n)) \leq \frac{1}{\alpha} \int g_n \to 0 \text{ as } n \to \infty$$

where $X(\alpha, g_n) = \{p \in \mathbb{R}^n : \limsup_{Q \downarrow p} f g_n > \alpha\}$. These sets nest downward as $n$ increases, so downward measure continuity implies that their intersection is a zero set $Z(\alpha) = \bigcap_n X(\alpha, g_n)$.

Consider each $p \notin Z(\alpha) \cup Z_\infty$. Since $p \notin Z(\alpha)$ there is some $n$ such that $p \notin X(\alpha, g_n)$. Hence

$$\limsup_{Q \downarrow p} f g_n \leq \alpha.$$

Since $p \notin Z_\infty$ the average of $f_n$ over $Q$ converges to $f_n p$ as $Q \downarrow p$. Thus

$$\limsup_{Q \downarrow p} f g_n \leq \limsup_{Q \downarrow p} f_n + \limsup_{Q \downarrow p} f_g_n$$

$$\leq f_n p + \alpha \leq fp + \alpha.$$

The union of the sets $Z(\alpha)$ with $\alpha = 1, 1/2, 1/3, \ldots$ is a zero set $Z_0$. Thus, if $p \notin Z_0 \cup Z_\infty$ then for all $k \in \mathbb{N}$ we have

$$fp \leq \liminf_{Q \downarrow p} f g_n \leq \limsup_{Q \downarrow p} f g_n \leq fp + \frac{1}{k}$$

from which it follows that for almost every $p \in \mathbb{R}^n$ the average of $f$ over $Q$ converges to $fp$ as $Q \downarrow p$.

**53 Corollary** If $f : [a, b] \to \mathbb{R}$ is Lebesgue integrable and

$$F(x) = \int_a^x f(t) dt$$

is its indefinite Lebesgue integral then for almost every $x \in [a, b]$ the derivative $F'(x)$ exists and equals $f(x)$.

**Remark** Here and below the domain of our function is $\mathbb{R}$ and we make essential use of its one-dimensionality.