Two other consequences of the same type are fundamental theorems in the fields of ordinary differential equations and complex variables.

(a) A sequence of solutions to a continuous ordinary differential equation in $\mathbb{R}^m$ has a subsequence that converges to a limit, and that limit is also a solution of the ODE.

(b) A sequence of complex analytic functions that converges pointwise, converges uniformly (on compact subsets of the domain of definition) and the limit is complex analytic.

Finally, we give a topological interpretation of the Arzelà-Ascoli theorem.

18 Heine-Borel Theorem in a Function Space A subset $\mathcal{E} \subset C^0$ is compact if and only if it is closed, bounded, and equicontinuous.

Proof Assume that $\mathcal{E}$ is compact. By Theorem 2.65, it is closed and totally bounded. This means that given $\epsilon > 0$ there is a finite covering of $\mathcal{E}$ by neighborhoods in $C^0$ having radius $\epsilon/3$, say $\mathcal{N}_{\epsilon/3}(f_k)$, with $k = 1, \ldots, n$. Each $f_k$ is uniformly continuous so there is a $\delta > 0$ such that

$$|s - t| < \delta \Rightarrow |f_k(s) - f_k(t)| < \frac{\epsilon}{3}.$$

If $f \in \mathcal{E}$ then for some $k$ we have $f \in \mathcal{N}_{\epsilon/3}(f_k)$, and $|s - t| < \delta$ implies

$$|f(s) - f(t)| \leq |f(s) - f_k(s)| + |f_k(s) - f_k(t)| + |f_k(t) - f(t)|$$

$$< \frac{\epsilon}{3} + \frac{\epsilon}{3} + \frac{\epsilon}{3} = \epsilon$$

Thus $\mathcal{E}$ is equicontinuous.

Conversely, assume that $\mathcal{E}$ is closed, bounded, and equicontinuous. If $(f_n)$ is a sequence in $\mathcal{E}$ then by the Arzelà-Ascoli theorem, some subsequence $(f_{n_k})$ converges uniformly to a limit. The limit lies in $\mathcal{E}$ since $\mathcal{E}$ is closed. Thus $\mathcal{E}$ is compact.

4 Uniform Approximation in $C^0$

Given a continuous but nondifferentiable function $f$, we often want to make it smoother by a small perturbation. We want to approximate $f$ in $C^0$ by a smooth function $g$. The ultimately smooth function is a polynomial, and the first thing we prove is a polynomial approximation result.

19 Weierstrass Approximation Theorem The set of polynomials is dense in $C^0([a, b], \mathbb{R})$.