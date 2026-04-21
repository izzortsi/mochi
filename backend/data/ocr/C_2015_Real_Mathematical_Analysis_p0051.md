We must prove that $b \in X$. Clearly $a \in X$ and $b$ is an upper bound for $X$. Since $X$ is nonempty and bounded above, there exists in $\mathbb{R}$ a least upper bound $c \leq b$ for $X$. Take $\epsilon = 1$ in the definition of continuity at $c$. There exists a $\delta > 0$ such that $|x - c| < \delta$ implies $|f(x) - f(c)| < 1$. Since $c$ is the least upper bound for $X$, there exists $x \in X$ in the interval $[c - \delta, c]$. (Otherwise $c - \delta$ is a smaller upper bound for $X$.) Now as $t$ varies from $a$ to $c$, the value $f(t)$ varies first in the bounded set $V_x$ and then in the bounded set $J = (f(c) - 1, f(c) + 1)$. See Figure 20.

**Figure 20** The value set $V_x$ and the interval $J$

The union of two bounded sets is a bounded set and it follows that $V_c$ is bounded, so $c \in X$. Besides, if $c < b$ then $f(t)$ continues to vary in the bounded set $J$ for $t > c$, contrary to the fact that $c$ is an upper bound for $X$. Thus, $c = b, b \in X$, and the values of $f$ form a bounded subset of $\mathbb{R}$.

**23 Theorem** A continuous function $f$ defined on an interval $[a, b]$ takes on absolute minimum and absolute maximum values: For some $x_0, x_1 \in [a, b]$ and for all $x \in [a, b]$ we have

$$f(x_0) \leq f(x) \leq f(x_1).$$

**Proof** Let $M = \text{l.u.b. } f(t)$ as $t$ varies in $[a, b]$. By Theorem 22 $M$ exists. Consider the set $X = \{x \in [a, b] : \text{l.u.b. } V_x < M\}$ where, as above, $V_x$ is the set of values of $f(t)$ as $t$ varies on $[a, x]$.