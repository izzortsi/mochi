A function $f \in \mathcal{F}$ is **bounded** with respect to $d_Y$ if and only if for any constant function $c$ we have $\sup_x d_Y(f(x), c) < \infty$; i.e., $d(f, c) < 1$. Unbounded functions have $d(f, c) = 1$.

**35 Theorem** In the space $\mathcal{F}$ equipped with the metric $d$,

(a) Uniform convergence of $(f_n)$ is equivalent to $d$-convergence.
(b) Completeness of $Y$ implies completeness of $\mathcal{F}$.
(c) The set $\mathcal{F}_b$ of bounded functions is closed in $\mathcal{F}$.
(d) The set $C^0(X, Y)$ of continuous functions is closed in $\mathcal{F}$.

**Proof** (a) $f = \lim_{n \to \infty} f_n$ means that $d_Y(f_n(x), f(x)) \Rightarrow 0$, which means that $d(f_n, f) \rightarrow 0$.

(b) If $(f_n)$ is Cauchy in $\mathcal{F}$ and $Y$ is complete then, just as in Section 1, $f(x) = \lim_{n \to \infty} f_n(x)$ exists for each $x \in X$. Cauchyness with respect to the metric $d$ implies uniform convergence and thus $d(f_n, f) \rightarrow 0$.

(c) If $f_n \in \mathcal{F}_b$ and $d(f_n, f) \rightarrow 0$ then $\sup_x d_Y(f_n(x), f(x)) \rightarrow 0$. Since $f_n$ is bounded, so is $f$.

(d) The proof that $C^0$ is closed in $\mathcal{F}$ is the same as in Section 1.

The Arzelà-Ascoli theorem is trickier. A family $\mathcal{E} \subset \mathcal{F}$ is **uniformly equicontinuous** if for each $\epsilon > 0$ there is a $\delta > 0$ such that $f \in \mathcal{E}$ and $d_X(x, t) < \delta$ imply $d_Y(f(x), f(t)) < \epsilon$. If the $\delta$ depends on $x$ but not on $f \in \mathcal{E}$ then $\mathcal{E}$ is **pointwise equicontinuous**.

**36 Theorem** Pointwise equicontinuity implies uniform equicontinuity if $X$ is compact.

**Proof** Suppose not. Then there exists $\epsilon > 0$ such that for each $\delta = 1/n$ we have points $x_n, t_n \in X$ and functions $f_n \in \mathcal{E}$ with $d_X(x_n, t_n) < 1/n$ and $d_Y(f_n(x_n), f_n(t_n)) \geq \epsilon$. By compactness of $X$ we may assume that $x_n \rightarrow x_0$. Then $t_n \rightarrow x_0$, which leads to a contradiction of pointwise equicontinuity at $x_0$.

**37 Theorem** If the sequence of functions $f_n : X \rightarrow Y$ is uniformly equicontinuous, $X$ is compact, and for each $x \in X$, the sequence $(f_n(x))$ lies in a compact subset of $Y$, then $(f_n)$ has a uniformly convergent subsequence.

**Proof** Being compact, $X$ has a countable dense subset $D$. Then the proof of the Arzelà-Ascoli Theorem in Section 3 becomes a proof of Theorem 37.