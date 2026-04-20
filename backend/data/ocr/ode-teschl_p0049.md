Moreover, choosing $T_0 < L^{-1}$ we see that $K$ is a contraction and existence of a unique solution follows from the contraction principle:

**Theorem 2.2** (Picard–Lindelöf). Suppose $f \in C(U, \mathbb{R}^n)$, where $U$ is an open subset of $\mathbb{R}^{n+1}$, and $(t_0, x_0) \in U$. If $f$ is locally Lipschitz continuous in the second argument, uniformly with respect to the first, then there exists a unique local solution $\bar{x}(t) \in C^1(I)$ of the IVP (2.10), where $I$ is some interval around $t_0$.

More specific, if $V = [t_0, t_0 + T] \times \overline{B_\delta(x_0)} \subset U$ and $M$ denotes the maximum of $|f|$ on $V$. Then the solution exists at least for $t \in [t_0, t_0 + T_0]$ and remains in $\overline{B_\delta(x_0)}$, where $T_0 = \min\{T, \frac{\delta}{M}\}$. The analogous result holds for the interval $[t_0 - T, t_0]$.

**Proof.** We have already shown everything except for the fact that our proof requires $T_0 < L^{-1}$ in addition to $T_0 \leq T$ and $T_0 \leq \frac{\delta}{M}$. That this condition is indeed superfluous will be shown in the next section. $\square$

The procedure to find the solution is called **Picard iteration**. Unfortunately, it is not suitable for actually finding the solution since computing the integrals in each iteration step will not be possible in general. Even for numerical computations evaluating the integrals is often too time consuming. However, if $f(t, x)$ is analytic, the $m$’th Picard iterate $x_m(t)$ matches the Taylor expansion of the solution $\bar{x}(t)$ around $t_0$ up to order $m$ and this can be used for numerical computations (cf. Problem 4.4). In any event, the important fact for us is that there exists a unique solution to the initial value problem.

In many cases, $f$ will be even differentiable. In particular, recall that $f \in C^1(U, \mathbb{R}^n)$ implies that $f$ is locally Lipschitz continuous in the second argument, uniformly with respect to the first, as required in Theorem 2.2 (see Problem 2.5 below).

**Lemma 2.3.** Suppose $f \in C^k(U, \mathbb{R}^n)$, $k \geq 1$, where $U$ is an open subset of $\mathbb{R}^{n+1}$, and $(t_0, x_0) \in U$. Then the local solution $\bar{x}$ of the IVP (2.10) is $C^{k+1}(I)$.

**Proof.** Let $k = 1$. Then $\bar{x}(t) \in C^1$ by the above theorem. Moreover, using $\bar{x}(t) = f(t, \bar{x}(t)) \in C^1$ we infer $\bar{x}(t) \in C^2$. The rest follows from induction. $\square$

**Problem 2.5.** Show that $f \in C^1(\mathbb{R}^m, \mathbb{R}^n)$ is locally Lipschitz continuous. In fact, show that

$$|f(y) - f(x)| \leq \sup_{\varepsilon \in [0,1]} \left\| \frac{\partial f(x + \varepsilon(y - x))}{\partial x} \right\| |x - y|,$$