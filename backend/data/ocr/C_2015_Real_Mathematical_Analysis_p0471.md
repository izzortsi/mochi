66. Construct a monotone function $f : [0,1] \to \mathbb{R}$ whose discontinuity set is exactly the set $\mathbb{Q} \cap [0,1]$, or prove that such a function does not exist.

*67. In Section 10 the total variation of a function $f : [a,b] \to \mathbb{R}$ is defined as the supremum of all sums $\sum_{i=1}^{n} |\Delta_i f|$, where $P$ partitions $[a,b]$ into subintervals $[x_{i-1}, x_i]$ and $\Delta_i f = f(x_i) - f(x_{i-1})$. Assume that the total variation of $f$ is finite (i.e., $f$ is of bounded variation) and define

$$T_a^x = \sup_{P} \left\{ \sum_k |\Delta_i f| \right\}$$

$$P_a^x = \sup_{P} \left\{ \sum_k \Delta_i f : \Delta_i f \geq 0 \right\}$$

$$N_a^x = -\inf_{P} \left\{ \sum_k \Delta_i f : \Delta_i f \leq 0 \right\}$$

where $P$ ranges through all partitions of $[a,x]$. Prove that

(a) $f$ is bounded.

(b) $T_a^x, P_a^x, N_a^x$ are monotone nondecreasing functions of $x$.

(c) $T_a^x = P_a^x + N_a^x$.

(d) $f(x) = f(a) + P_a^x - N_a^x$.

*68. Assume that $f : [a,b] \to \mathbb{R}$ has bounded variation. The Banach indicatrix is the function

$$y \mapsto N_y = \#f^{\text{pre}}(y).$$

$N_y$ is the number of roots of $f = y$. The horizontal line $[a,b] \times y$ meets the graph of $f$ in $N_y$ points.

(a) Prove that $N_y < \infty$ for almost every $y$.

(b) Prove that $y \mapsto N_y$ is measurable.

(c) Prove that

$$T_a^b = \int_c^d N_y dy$$

where $c \leq \min f$ and $\max f \leq d$.

*69. (a) Assume that $A_n \uparrow A$ as $n \to \infty$ but do not assume that $A_n$ is measurable. Prove that $m^*A_n \to m^*A$ as $n \to \infty$. (This is upward measure continuity for outer measure. [Hint: Regularity gives $G_{\delta}$-sets $G_n \supset A_n$ with $m(G_n) = m^*(A_n)$. Can you make sure that $G_n$ increases as $n \to \infty$? If so, what can you say about $G = \bigcup G_n$?])

(b) Is upward measure continuity true for inner measure? [Proof or counterexample.]

(c) What about downward measure continuity of inner measure? Of outer measure?