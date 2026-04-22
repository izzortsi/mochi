which completes the proof that $F$ is absolutely continuous.

(c) The Lebesgue proof resembles the Riemann proof in Chapter 3 – the Vitali Covering Lemma replaces the Lebesgue Number Lemma. We assume $G$ is absolutely continuous and $G'(x) = f(x)$ almost everywhere. When $F$ is the indefinite integral of $f$ we want to show that $H = F - G$ is constant.

It is easy to see that sums and differences of absolutely continuous functions are absolutely continuous, so $H$ is absolutely continuous and $H'(x) = 0$ almost everywhere. Fix any $x^* \in [a, b]$ and define

$$X = \{x \in [a, x^*] : H'(x) \text{ exists and } H'(x) = 0\}.$$

By assumption $mX = x^* - a$.

It is enough to show that for each $\epsilon > 0$ we have

$$|H(x^*) - H(a)| < \epsilon.$$

Absolute continuity implies there is a $\delta > 0$ such that if $I_i = [a_i, b_i] \subset [a, b]$ are disjoint intervals then

$$\sum_i b_i - a_i < \delta \Rightarrow \sum_i |H(b_i) - H(a_i)| < \epsilon/2.$$

Fix such a $\delta$. Each $x \in X$ is contained in arbitrarily small intervals $[x, x+h] \subset [a, x^*]$ such that

$$\left| \frac{H(x+h) - H(x)}{h} \right| < \frac{\epsilon}{2(b-a)}.$$

These intervals form a Vitali covering $\mathcal{V}$ of $X$ and the Vitali Covering Lemma implies that countably many of them, say $V_j = [x_j, x_j + h_j]$, disjointly cover $X$ up to a zero set. Thus their total length is $\sum h_j = x^* - a$ and it follows that there is an $N$ such that

$$\sum_{j=1}^{N} h_j > x^* - a - \delta.$$

Since $|H(x+h) - H(x)| < h\epsilon/2(b-a)$ on each $\mathcal{V}$-interval we have

$$\sum_{j=1}^{N} |H(x_j + h_j) - H(x_j)| < \frac{\epsilon}{2(b-a)} \sum_{j=1}^{N} h_j \leq \frac{\epsilon(x^* - a)}{2(b-a)} \leq \epsilon/2.$$