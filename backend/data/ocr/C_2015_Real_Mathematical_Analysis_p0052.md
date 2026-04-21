Case 1. $f(a) = M$. Then $f$ takes on a maximum at $a$ and the theorem is proved.

Case 2. $f(a) < M$. Then $X \neq \emptyset$ and we can consider the least upper bound of $X$, say $c$. If $f(c) < M$, we choose $\epsilon > 0$ with $\epsilon < M - f(c)$. By continuity at $c$, there exists a $\delta > 0$ such that $|t - c| < \delta$ implies $|f(t) - f(c)| < \epsilon$. Thus, $l.u.b.V_c < M$. If $c < b$ this implies there exist points $t$ to the right of $c$ at which $l.u.b.V_t < M$, contrary to the fact that $c$ is an upper bound of such points. Therefore, $c = b$, which implies that $M < M$, a contradiction. Having arrived at a contradiction from the supposition that $f(c) < M$, we duly conclude that $f(c) = M$, so $f$ assumes a maximum at $c$. The situation with minima is similar.

24 Intermediate Value Theorem A continuous function defined on an interval $[a, b]$ takes on (or “achieves,” “assumes,” or “attains”) all intermediate values: That is, if $f(a) = \alpha$, $f(b) = \beta$, and $\gamma$ is given, $\alpha \leq \gamma \leq \beta$, then there is some $c \in [a, b]$ such that $f(c) = \gamma$. The same conclusion holds if $\beta \leq \gamma \leq \alpha$.

The theorem is pictorially obvious. A continuous function has a graph that is a curve without break points. Such a graph can not jump from one height to another. It must pass through all intermediate heights.

Proof Set $X = \{x \in [a, b] : l.u.b.V_x \leq \gamma\}$ and $c = l.u.b.X$. Now $c$ exists because $X$ is nonempty (it contains $a$) and it is bounded above (by $b$). We claim that $f(c) = \gamma$, as shown in Figure 21.

To prove it we just eliminate the other two possibilities which are $f(c) < \gamma$ and $f(c) > \gamma$, by showing that each leads to a contradiction. Suppose that $f(c) < \gamma$ and take $\epsilon = \gamma - f(c)$. Continuity at $c$ gives $\delta > 0$ such that $|t - c| < \delta$ implies $|f(t) - f(c)| < \epsilon$. That is,

$$t \in (c - \delta, c + \delta) \Rightarrow f(t) < \gamma,$$

so $c + \delta/2 \in X$, contrary to $c$ being an upper bound of $X$.

Suppose that $f(c) > \gamma$ and take $\epsilon = f(c) - \gamma$. Continuity at $c$ gives $\delta > 0$ such that $|t - c| < \delta$ implies $|f(t) - f(c)| < \epsilon$. That is,

$$t \in (c - \delta, c + \delta) \Rightarrow f(t) > \gamma,$$

so $c - \delta/2$ is an upper bound for $X$, contrary to $c$ being the least upper bound for $X$. Since $f(c)$ is neither $< \gamma$ nor $> \gamma$ we get $f(c) = \gamma$.

A combination of Theorems 22, 23, 24, and Exercise 43 could well be called the