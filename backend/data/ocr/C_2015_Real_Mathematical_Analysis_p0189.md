We say that a $P$-interval $I_i$ is “bad” if it contains a point of $D_k$ in its interior. A bad interval has a fairly big $f$-variation, namely $M_i - m_i \geq 1/k$. Since $U - L = \sum (M_i - m_i) \Delta x_i < \epsilon/k$ is small, there cannot be too many bad intervals. (This is the key insight in the estimates.) More precisely,

$$\frac{\epsilon}{k} > U - L = \sum (M_i - m_i) \Delta x_i \geq \sum_{\text{bad}} (M_i - m_i) \Delta x_i \geq \frac{1}{k} \sum_{\text{bad}} \Delta x_i$$

implies (by canceling the factor $1/k$ from both sides of the inequality) the sum of the lengths of the bad intervals is $< \epsilon$. Thus, except for the finite set $D_k \cap P$, $D_k$ is contained in finitely many open intervals whose total length is $< \epsilon$. Since finite sets are zero sets and $\epsilon$ is arbitrary, each $D_k$ is a zero set. Therefore $D = \bigcup D_k$ is a zero set.

Conversely, assume that the discontinuity set $D$ of $f : [a, b] \rightarrow [-M, M]$ is a zero set. Let $\epsilon > 0$ be given. By Riemann’s Integrability Criterion, to prove that $f$ is Riemann integrable it suffices to find $P$ with $U(f, P) - L(f, P) < \epsilon$. Choose $k \in \mathbb{N}$ so that

$$\frac{1}{k} < \frac{\epsilon}{2(b - a)}$$

Since $D$ is a zero set, so is $D_k$ and hence there is a countable covering $\varnothing$ of $D_k$ by open intervals $J_j = (a_j, b_j)$ with total length

$$\sum b_j - a_j \leq \frac{\epsilon}{4M}$$

These $J_j$ are “bad” intervals: The $f$-variation on each $J_j$ is $\geq 1/k$. On the other hand, for each $x \in [a, b] \setminus D_k$ there is an open interval $I_x$ containing $x$ such that

$$\sup\{f(t) : t \in I_x\} - \inf\{f(t) : t \in I_x\} < 1/k$$

These intervals $I_x$ are a covering $\varnothing$ of the good set $[a, b] \setminus D_k$. The union $\mathcal{V} = \varnothing \cup \varnothing$ is an open covering of $[a, b]$. Compactness of $[a, b]$ implies that $\mathcal{V}$ has a Lebesgue number $\lambda > 0$.

Let $P = \{x_0, \ldots, x_n\}$ be any partition of $[a, b]$ having mesh $P < \lambda$. We claim that $U(f, P) - L(f, P) < \epsilon$. Each $P$-interval $I_i$ is contained wholly in some $I_x$ or wholly in some $J_j$. (This is what Lebesgue numbers are good for.) Set

$$\mathbf{J} = \{i \in \{1, \ldots, n\} : I_i \text{ is contained in some bad interval } J_j\}.$$

See Figure 78. For some finite $m$, $J_1 \cup \cdots \cup J_m$ contains those $P$-intervals $I_i$ with