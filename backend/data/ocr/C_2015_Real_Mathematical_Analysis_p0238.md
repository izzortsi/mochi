Choose $J$ large enough that every $x \in [a, b]$ lies in the $\delta$-neighborhood of some $d_j$ with $j \leq J$. Since $D$ is dense and $[a, b]$ is compact, this is possible. See Exercise 19. Since $\{d_1, \ldots, d_J\}$ is a finite set and $g_m(d_j)$ converges for each $d_j$, there is an $N$ such that for all $\ell, m \geq N$ and all $j \leq J$,

$$|g_m(d_j) - g_\ell(d_j)| < \frac{\epsilon}{3}.$$

If $\ell, m \geq N$ and $x \in [a, b]$, choose $d_j$ with $|d_j - x| < \delta$ and $j \leq J$. Then

$$|g_m(x) - g_\ell(x)| \leq |g_m(x) - g_m(d_j)| + |g_m(d_j) - g_\ell(d_j)| + |g_\ell(d_j) - g_\ell(x)|$$

$$\leq \frac{\epsilon}{3} + \frac{\epsilon}{3} + \frac{\epsilon}{3} = \epsilon.$$

Hence $(g_m)$ is Cauchy in $C^0$, it converges in $C^0$, and the proof is complete.

Part of the preceding development can be isolated as the

**16 Arzelà-Ascoli Propagation Theorem** Pointwise convergence of an equicontinuous sequence of functions on a dense subset of the domain *propagates* to uniform convergence on the whole domain.

**Proof** This is the $\epsilon/3$ part of the proof.

The example cited over and over again in the equicontinuity world is the following.

**17 Corollary** Assume that $f_n : [a, b] \to \mathbb{R}$ is a sequence of differentiable functions whose derivatives are uniformly bounded. If for one point $x_0$, the sequence $(f_n(x_0))$ is bounded as $n \to \infty$ then the sequence $(f_n)$ has a subsequence that converges uniformly on the whole interval $[a, b]$.

**Proof** Let $M$ be a bound for the derivatives $|f_n'(x)|$, valid for all $n \in \mathbb{N}$ and all $x \in [a, b]$. Equicontinuity of $(f_n)$ follows from the Mean Value Theorem:

$$|s - t| < \delta \Rightarrow |f_n(s) - f_n(t)| = |f_n'(\theta)| |s - t| \leq M\delta$$

for some $\theta$ between $s$ and $t$. Thus, given $\epsilon > 0$, the choice $\delta = \epsilon/(M + 1)$ shows that $(f_n)$ is equicontinuous.

Let $C$ be a bound for $|f_n(x_0)|$, valid for all $n \in \mathbb{N}$. Then

$$|f_n(x)| \leq |f_n(x) - f_n(x_0)| + |f_n(x_0)| \leq M|x - x_0| + C$$

$$\leq M|b - a| + C$$

shows that the sequence $(f_n)$ is bounded in $C^0$. The Arzelà-Ascoli theorem then supplies the uniformly convergent subsequence.