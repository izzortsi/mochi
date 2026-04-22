Definition If $Z \subset \mathbb{R}^n$ has outer measure zero then it is a zero set.

2 Proposition Every subset of a zero set is a zero set. The countable union of zero sets is a zero set. Each plane $P_i(a) = \{(x_1, \ldots, x_n) \in \mathbb{R}^n : x_i = a\}$ is a zero set in $\mathbb{R}^n$.

Proof Monotonicity implies $m^*(Z') \leq m^*Z = 0$ whenever $Z'$ is a subset of a zero set $Z$. If $m^*(Z_k) = 0$ for all $k \in \mathbb{N}$ and $Z = \bigcup Z_k$ then by Theorem 1(c) we have

$$m^*Z \leq \sum_k m^*Z_k = 0.$$

We assume $n = 2$. The “plane” $P_i(a)$ is the line $\{x = a\}$ when $i = 1$ or $\{y = a\}$ when $i = 2$. Given $\epsilon > 0$ we can cover the line $P_1(a)$ with rectangles $R_k = I_k \times J_k$ where

$$I_k = (a - \epsilon/k 2^{k+2}, a + \epsilon/k 2^{k+2}) \quad J_k = (-k, k).$$

The total area of these rectangles is $\epsilon$ so $P_1(a)$ is a zero set.

The next theorem states a property of outer measure that seems obvious.

3 Theorem The linear outer measure of a closed interval is its length; the planar outer measure of a closed rectangle is its area; the $n$-dimensional outer measure of a closed box is its volume.

Inductive Proof for the Closed Interval $[a, b]$ For each $\epsilon > 0$ the open interval $(a - \epsilon, b + \epsilon)$ covers $[a, b]$. Thus $m^*([a, b]) \leq (b + \epsilon) - (a - \epsilon) = b - a + 2\epsilon$. By the $\epsilon$-principle we get $m^*([a, b]) \leq b - a$.

To get the reverse inequality we must show that if $\{I_i\}$ is a countable open covering of $[a, b]$ then $\sum |I_i| \geq b - a$. Since $[a, b]$ is compact it suffices to prove this for finite open coverings $\{I_1, \ldots, I_n\}$. Let $I_i = (a_i, b_i)$. We reason inductively. If $n = 1$ then $(a_1, b_1) \supset [a, b]$ implies $a_1 < a \leq b < b_1$ so $b - a < |I_1|$. That’s the base case of the induction.

Assume that for each open covering of a compact interval $[c, d]$ by $n$ open intervals $\{J_j\}$ we have $d - c < \sum_{j=1}^{n} |J_j|$, and let $\{I_i\}$ be a covering of $[a, b]$ by $n + 1$ open intervals $I_i = (a_i, b_i)$. We claim that $\sum_{i=1}^{n+1} |I_i| > b - a$. One of the intervals contains $a$, say it is $I_1 = (a_1, b_1)$. If $b_1 \geq b$ then $I_1 \supset [a, b]$ and again $a_1 < a \leq b \leq b_1$ implies that $\sum_{i=1}^{n+1} |I_i| \geq |I_1| = b_1 - a_1 > b - a$. On the other hand, if $b_1 < b$ then

$$[a, b] = [a, b_1) \cup [b_1, b]$$