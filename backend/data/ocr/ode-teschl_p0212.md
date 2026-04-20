for any solution $\phi(t)$. It is called a **strict Liapunov function** if equality in (6.36) never occurs. Note that $U(x_0) \setminus \{x_0\}$ can contain no periodic orbits if $L$ is strict (why?).

Since the function $L$ is decreasing along integral curves, we expect the sublevel sets of $L$ to be positively invariant. Let $S_\delta$ be the connected component of $\{x \in U(x_0) | L(x) \leq \delta\}$ containing $x_0$. Note that in general $S_\delta$ might not be closed since it can have a common boundary with $U(x_0)$. In such a case orbits can escape through this part of the boundary and in order to avoid this, we need to assume that $S_\delta$ is closed.

**Lemma 6.11.** If $S_\delta$ is closed, then it is positively invariant.

**Proof.** Suppose $\phi(t)$ leaves $S_\delta$ at $t_0$ and let $x = \phi(t_0)$. Since $S_\delta$ is closed, $x \in S_\delta \subset U(x_0)$ and there is a ball $B_r(x) \subset U(x_0)$ such that $\phi(t_0 + \varepsilon) \in B_r(x) \setminus S_\delta$ for small $\varepsilon > 0$. But then $L(\phi(t_0 + \varepsilon)) > \delta = L(x)$ for some $\varepsilon$ since otherwise $S_\delta$ could not be the full connected component (we could extend it by adding $\phi([t_0, t_0 + \varepsilon])$). This contradicts (6.36).

Moreover, $S_\delta$ is a neighborhood of $x_0$ which shrinks to a point as $\delta \to 0$.

**Lemma 6.12.** For every $\delta > 0$ there is an $\varepsilon > 0$ such that

$$S_\varepsilon \subseteq B_\delta(x_0) \quad \text{and} \quad B_\varepsilon(x_0) \subseteq S_\delta.$$ (6.37)

**Proof.** Assume that the first claim in (6.37) is false. Then for every $n \in \mathbb{N}$, there is an $x_n \in S_{1/n}$ such that $|x_n - x_0| \geq \delta$. Since $S_{1/n}$ is connected, we can even require $|x_n - x_0| = \delta$ and by compactness of the sphere we can pass to a convergent subsequence $x_{n_m} \to y$. By continuity of $L$ we have $L(y) = \lim_{n \to \infty} L(x_{n_m}) = 0$ implying $y = x_0$. This contradicts $|y - x_0| = \delta > 0$.

If the second claim in (6.37) were false, we could find a sequence $x_n$ such that $|x_n - x_0| \leq 1/n$ and $L(x_n) \geq \delta$. But then $\delta \leq \lim_{n \to \infty} L(x_n) = L(x_0) = 0$, again a contradiction.

Hence, given any neighborhood $V(x_0)$, we can find an $\varepsilon$ such that $S_\varepsilon \subseteq V(x_0)$ is positively invariant. In other words, $x_0$ is stable.

**Theorem 6.13** (Liapunov). Suppose $x_0$ is a fixed point of $f$. If there is a Liapunov function $L$, then $x_0$ is stable.

But we can say even more. For every $x$ with $\phi(t, x) \in U(x_0)$, $t \geq 0$, the limit

$$\lim_{t \to \infty} L(\phi(t, x)) = L_0(x)$$ (6.38)

exists by monotonicity. Moreover, for every $y \in \omega_+(x)$ we have some sequence $t_n \to \infty$ such that $\phi(t_n, x) \to y$ and thus $L(y) = \lim_{n \to \infty} L(\phi(t_n, x)) = L_0(x)$. Hence, if $L$ is not constant on any orbit in $U(x_0) \setminus \{x_0\}$ we must have