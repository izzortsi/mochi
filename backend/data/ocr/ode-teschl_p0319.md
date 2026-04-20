For $U$ a subset of $\mathbb{R}^n$ and $\alpha \geq 0$, $\delta > 0$ we define

$$h^\alpha_\delta(U) = \inf \left\{ \sum_j d(V_j)^\alpha \mid \{V_j\} \text{ is a } \delta\text{-cover of } U \right\} \in [0, \infty].$$

As $\delta$ decreases the number of admissible covers decreases and hence $h^\alpha_\delta(U)$ is increasing as a function of $\delta$. Thus the limit

$$h^\alpha(U) = \lim_{\delta \downarrow 0} h^\alpha_\delta(U) = \sup_{\delta > 0} h^\alpha_\delta(U)$$

exists. Moreover, it is not hard to show that $h^\alpha(U) \leq h^\alpha(V)$ if $U \subseteq V$ and that for countable unions we have

$$h^\alpha(\bigcup_j U_j) \leq \sum_j h^\alpha(U_j).$$

Hence $h^\alpha$ is an **outer measure** and the resulting **measure** on the Borel $\sigma$-algebra is called the $\alpha$ dimensional **Hausdorff measure**. As any measure it satisfies

$$h^\alpha(\emptyset) = 0,$$

$$h^\alpha(\bigcup_j U_j) = \sum_j h^\alpha(U_j),$$

for any countable union of disjoint sets $U_j$.

For example, consider the case $\alpha = 0$. Suppose $U = \{x, y\}$ consists of two points. Then $h^0_\delta(U) = 1$ for $\delta \geq |x - y|$ and $h^0_\delta(U) = 2$ for $\delta < |x - y|$. In particular, $h^0(U) = 2$. Similarly, it is not hard to see that $h^0(U)$ is just the number of points in $U$. On the other extreme, it can be shown that $h^n(U) = c_n/2^n|U|$, where $|U|$ denotes the Lebesgue measure of $U$ and $c_n = \pi^{n/2}/\Gamma(n/2 + 1)$ is the volume of the unit ball in $\mathbb{R}^n$.

Using the fact that for $\lambda > 0$ the map $\lambda : x \mapsto \lambda x$ gives rise to a bijection between $\delta$-covers and $(\delta/\lambda)$-covers, we easily obtain the following scaling property of Hausdorff measures.

**Lemma 11.17.** Let $\lambda > 0$ and $U$ be a Borel set of $\mathbb{R}^n$. Then

$$h^\alpha(\lambda U) = \lambda^\alpha h^\alpha(U).$$

Moreover, Hausdorff measures also behave nicely under uniformly Hölder continuous maps.

**Lemma 11.18.** Suppose $f : U \to \mathbb{R}^n$ is uniformly Hölder continuous with exponent $\gamma > 0$, that is,

$$|f(x) - f(y)| \leq c|x - y|^\gamma \text{ for all } x, y \in U,$$

then

$$h^\alpha(f(U)) \leq c^\alpha h^{\alpha\gamma}(U).$$