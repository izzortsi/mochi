Proof. A simple consequence of the fact that for every $\delta$-cover $\{V_j\}$ of a Borel set $U$, the set $\{f(U \cap V_j)\}$ is a $(c\delta^\gamma)$-cover for the Borel set $f(U)$.

Now we are ready to define the Hausdorff dimension. First of all note that $h_\delta^\alpha$ is non increasing with respect to $\alpha$ for $\delta < 1$ and hence the same is true for $h^\alpha$. Moreover, for $\alpha \leq \beta$ we have $\sum_j d(V_j)^\beta \leq \delta^{\beta-\alpha} \sum_j d(V_j)^\alpha$ and hence

$$h_\delta^\beta(U) \leq \delta^{\beta-\alpha} h_\delta^\alpha(U) \leq \delta^{\beta-\alpha} h^\alpha(U).$$

Thus if $h^\alpha(U)$ is finite, then $h^\beta(U) = 0$ for every $\beta > \alpha$. Hence there must be one value of $\alpha$ where the Hausdorff measure of a set jumps from $\infty$ to 0. This value is called the Hausdorff dimension

$$\dim_H(U) = \inf\{\alpha|h^\alpha(U) = 0\} = \sup\{\alpha|h^\alpha(U) = \infty\}.$$

It can be shown that the Hausdorff dimension of an $m$ dimensional submanifold of $\mathbb{R}^n$ is again $m$. Moreover, it is also not hard to see that we have $\dim_H(U) \leq n$ (Problem 11.12).

The following observations are useful when computing Hausdorff dimensions. First of all the Hausdorff dimension is monotone, that is, for $U \subseteq V$ we have $\dim_H(U) \leq \dim_H(V)$. Furthermore, if $U_j$ is a (countable) sequence of Borel sets we have $\dim_H(\bigcup_j U_j) = \sup_j \dim_H(U_j)$ (prove this).

Using Lemma 11.18 it is also straightforward to show

**Lemma 11.19.** Suppose $f: U \to \mathbb{R}^n$ is uniformly Hölder continuous with exponent $\gamma > 0$, that is,

$$|f(x) - f(y)| \leq c|x - y|^\gamma \text{ for all } x, y \in U,$$

then

$$\dim_H(f(U)) \leq \frac{1}{\gamma} \dim_H(U).$$

Similarly, if $f$ is bi-Lipschitz, that is,

$$a|x - y| \leq |f(x) - f(y)| \leq b|x - y| \text{ for all } x, y \in U,$$

then

$$\dim_H(f(U)) = \dim_H(U).$$

We end this section by computing the Hausdorff dimension of the repellor $\Lambda$ of the tent map.

**Theorem 11.20.** The Hausdorff dimension of the repellor $\Lambda$ of the tent map $T_\mu$ is

$$\dim_H(\Lambda) = \frac{\log(2)}{\log(\mu)}, \quad \mu \geq 2.$$

In particular, it is a strange repellor.