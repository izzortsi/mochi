is the corresponding metric on $C_b$. See Figure 90. To distinguish the norm $\|f\| = \sup |f(x)|$ from other norms on $C_b$ we sometimes write $\|f\|_{\sup}$ for the sup norm.

The thing to remember is that $C_b$ is a metric space whose elements are functions. Ponder this.

2 Theorem Convergence with respect to the sup metric $d$ is equivalent to uniform convergence.

Proof If $d(f_n, f) \to 0$ then $\sup\{|f_n x - fx| : x \in [a, b]\} \to 0$, so $f_n \Rightarrow f$, and conversely.

3 Theorem $C_b$ is a complete metric space.

Proof Let $(f_n)$ be a Cauchy sequence in $C_b$. For each individual $x_0 \in [a, b]$ the values $f_n(x_0)$ form a Cauchy sequence in $\mathbb{R}$ since

$$|f_n(x_0) - f_m(x_0)| \leq \sup\{|f_n(x) - f_m(x)| : x \in [a, b]\} = d(f_n, f_m).$$

Thus, for each $x \in [a, b]$,

$$\lim_{n \to \infty} f_n(x)$$

exists. Define this limit to be $f(x)$. It is clear that $f_n$ converges pointwise to $f$. In fact, the convergence is uniform. For let $\epsilon > 0$ be given. Since $(f_n)$ is a Cauchy sequence with respect to $d$, there exists $N$ such that $m, n \geq N$ imply

$$d(f_n, f_m) < \frac{\epsilon}{2}.$$

Also, since $f_n$ converges pointwise to $f$, for each $x \in [a, b]$ there exists an $m = m(x) \geq N$ such that

$$|f_m(x) - f(x)| < \frac{\epsilon}{2}.$$

If $n \geq N$ and $x \in [a, b]$ then

$$|f_n(x) - f(x)| \leq |f_n(x) - f_{m(x)}(x)| + |f_{m(x)}(x) - f(x)|$$

$$< \frac{\epsilon}{2} + \frac{\epsilon}{2} = \epsilon.$$

Hence $f_n \Rightarrow f$. The function $f$ is bounded. For $f_N$ is bounded and for all $x$ we have $|f_N(x) - f(x)| < \epsilon$. Thus $f \in C_b$. By Theorem 2, uniform convergence implies $d$-convergence, $d(f_n, f) \to 0$, and the Cauchy sequence $(f_n)$ converges to a limit in the metric space $C_b$.