Proof. Let $\delta = \mu^{-n}$. Using the $\delta$-cover $I_{s_0, \ldots, s_{n-1}}$ we see $h^\alpha_\delta(\Lambda) \leq \left(\frac{2}{\mu^\alpha}\right)^n$. Hence for $\alpha = d = \log(2)/\log(\mu)$ we have $h^\delta_\delta(\Lambda) \leq 1$ implying $\dim_H(\Lambda) \leq d$.

The reverse inequality is a little harder. Let $\{V_j\}$ be a cover. We suppose $\mu > 2$ (since for $\mu = 2$ we just have $\Lambda = [0, 1]$) and $\delta < 1 - 2\mu^{-1}$. It is clearly no restriction to assume that all $V_j$ are open intervals. Moreover, finitely many of these sets cover $\Lambda$ by compactness. Drop all others and fix $j$. Furthermore, increase each interval $V_j$ by at most $\varepsilon$.

For $V_j$ there is a $k$ such that

$$\frac{1 - 2\mu^{-1}}{\mu^k} \leq |V_j| < \frac{1 - 2\mu^{-1}}{\mu^{k-1}}.$$

Since the distance of two intervals in $\Lambda_k$ is at least $\frac{1 - 2\mu^{-1}}{\mu^{k-1}}$ we can intersect at most one such interval. For $n \geq k$ we see that $V_j$ intersects at most $2^{n-k} = 2^n(\mu^{-k})^d \leq 2^n(1 - 2\mu^{-1})^d |V_j|^d$ intervals of $\Lambda_n$.

Now choose $n$ larger than all $k$ (for all $V_j$). Since $\{V_j\}$ covers $\Lambda$, we must intersect all $2^n$ intervals in $\Lambda_n$. So we end up with

$$2^n \leq \sum_j \frac{2^n}{(1 - 2\mu^{-1})^d} |V_j|^d,$$

which together with our first estimate yields

$$(1 - \frac{2}{\mu})^d \leq h^d(\Lambda) \leq 1.$$

Observe that this result can also formally be derived from the scaling property of the Hausdorff measure by solving the identity

$$h^\alpha(\Lambda) = h^\alpha(\Lambda \cap I_0) + h^\alpha(\Lambda \cap I_1) = 2h^\alpha(\Lambda \cap I_0)$$

$$= \frac{2}{\mu^\alpha}h^\alpha(T_\mu(\Lambda \cap I_0)) = \frac{2}{\mu^\alpha}h^\alpha(\Lambda)$$

(11.50)

for $\alpha$. However, this is only possible if we already know that $0 < h^\alpha(\Lambda) < \infty$ for some $\alpha$.

Problem 11.11. Let $C = [0, 1] \times \{0\} \subseteq \mathbb{R}^2$. Show that $h^1(C) = 1$.

Problem 11.12. Show that $\dim_H(U) \leq n$ for every $U \subseteq \mathbb{R}^n$. (Hint: It suffices to take for $U$ the unit cube. Now split $U$ into $k^n$ cubes of length $1/k$.)