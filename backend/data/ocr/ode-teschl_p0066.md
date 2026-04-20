of $h$, the functions $x_h(t)$ form an equicontinuous family of functions which converges uniformly after maybe passing to a subsequence by the Arzelà–Ascoli theorem.

**Theorem 2.18** (Arzelà–Ascoli). Suppose the sequence of functions $x_m(t) \in C(I, \mathbb{R}^n)$, $m \in \mathbb{N}$, on a compact interval $I$ is (uniformly) equicontinuous, that is, for every $\varepsilon > 0$ there is a $\delta > 0$ (independent of $m$) such that

$$|x_m(t) - x_m(s)| \leq \varepsilon \quad \text{if} \quad |t - s| < \delta, \ m \in \mathbb{N}.$$

(2.70)

If the sequence $x_m$ is bounded, then there is a uniformly convergent subsequence.

**Proof.** Let $\{t_j\}_{j=1}^{\infty} \subset I$ be a dense subset of our interval (e.g., all rational numbers in $I$). Since $x_m(t_1)$ is bounded, we can choose a subsequence $x_m^{(1)}(t)$ such that $x_m^{(1)}(t_1)$ converges (Bolzano–Weierstrass). Similarly we can extract a subsequence $x_m^{(2)}(t)$ from $x_m^{(1)}(t)$ which converges at $t_2$ (and hence also at $t_1$ since it is a subsequence of $x_m^{(1)}(t)$). By induction we get a sequence $x_m^{(j)}(t)$ converging at $t_1, \ldots, t_j$. The diagonal sequence $\tilde{x}_m(t) = x_m^{(m)}(t)$ will hence converge for all $t = t_j$ (why?). We will show that it converges uniformly for all $t$:

Fix $\varepsilon > 0$ and choose $\delta$ such that $|x_m(t) - x_m(s)| \leq \frac{\varepsilon}{3}$ for $|t - s| < \delta$. The balls $B_\delta(t_j)$ cover $I$ and by compactness even finitely many, say $1 \leq j \leq p$, suffice. Furthermore, choose $N_\varepsilon$ such that $|\tilde{x}_m(t_j) - \tilde{x}_n(t_j)| \leq \frac{\varepsilon}{3}$ for $n, m \geq N_\varepsilon$ and $1 \leq j \leq p$.

Now pick $t$ and note that $t \in B_\delta(t_j)$ for some $j$. Thus

$$|\tilde{x}_m(t) - \tilde{x}_n(t)| \leq |\tilde{x}_m(t) - \tilde{x}_n(t_j)| + |\tilde{x}_m(t_j) - \tilde{x}_n(t)|$$

for $n, m \geq N_\varepsilon$, which shows that $\tilde{x}_m$ is Cauchy with respect to the maximum norm. By completeness of $C(I, \mathbb{R}^n)$ it has a limit.

More precisely, pick $\delta, T > 0$ such that $V = [t_0, t_0 + T] \times \overline{B_\delta(x_0)} \subset U$ and let

$$M = \max_{(t,x) \in V} |f(t,x)|.$$

(2.71)

Then $x_h(t) \in B_\delta(x_0)$ for $t \in [t_0, t_0 + T_0]$, where $T_0 = \min\{T, \frac{\delta}{M}\}$, and

$$|x_h(t) - x_h(s)| \leq M |t - s|.$$

(2.72)

Hence any subsequence of the family $x_h(t)$ is equicontinuous and there is a uniformly convergent subsequence $\phi_m(t) \to \phi(t)$. It remains to show that the limit $\phi(t)$ solves our initial value problem (2.10). We will show this by verifying that the corresponding integral equation (2.11) holds. Since $f$ is