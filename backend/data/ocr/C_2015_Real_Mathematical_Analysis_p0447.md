There are four derivates. They exist at all points of $[a, b]$ but they can take the value $\infty$. We first show that two are equal almost everywhere, say the left min and the right max. Fix any $s < S$ and consider the set

$$E = E_{sS} = \{x \in [a, b] : D^{\text{left min}}f(x) < s < S < D^{\text{right max}}f(x)\}.$$

We claim that

(9) $$m^*E = 0.$$

At each $x \in E$ there are arbitrarily small left intervals $[x - h, x]$ over which the slope is $< s$. These left intervals form a Vitali covering $L$ of $E$. (Note that the point $x$ is not the center of its $L$-interval, but rather it is an endpoint. Also, we do not know a priori that $E$ is measurable. Luckily, Vitali permits this.) Let $\epsilon > 0$ be given. By the Vitali Covering Lemma there are countably many disjoint left intervals $L_i \in L$ that cover $E$, modulo a zero set, and they do so $\epsilon$-efficiently. That is, if we write

$$L = \bigsqcup_i \text{int } L_i$$

then $E \setminus L$ is a zero set and $mL \leq m^*E + \epsilon.$

Every $y \in L \cap E$ has arbitrarily small right intervals $[y, y + t] \subset L$ over which the slope is $> S$. (Here it is useful that $L$ is open.) These right intervals form a Vitali covering $R$ of $L \cap E$, and by the Vitali Covering Lemma we can find a countable number of disjoint intervals $R_j \in R$ that cover $L \cap E$ modulo a zero set. Since $L \cap E = E$ modulo a zero set, $R = \bigsqcup R_j$ also covers $E$ modulo a zero set. By the Chebyshev Lemma we have

$$m^*E \leq mR = \sum_i \sum_{R_j \subset L_i} |R_j| \leq \sum_i \frac{s}{S} |L_i| \leq \frac{s}{S}(m^*E + \epsilon).$$

Since the inequality holds for all $\epsilon > 0$, it holds also with $\epsilon = 0$ which implies that $m^*E = 0$ and completes the proof of (9). Then

$$\{x : D^{\text{left min}}f(x) < D^{\text{right max}}f(x)\} = \bigcup_{\{(s, S) \in \mathbb{Q} \times \mathbb{Q} : s < S\}} E_{sS}$$

is a zero set. Symmetrically, $\{x : D^{\text{left min}}f(x) > D^{\text{right max}}f(x)\}$ is a zero set, and therefore $D^{\text{left min}}f(x) = D^{\text{right max}}f(x)$ almost everywhere. Mutual equality of the other derivates, almost everywhere, is checked in the same way. See Exercise 64.

So far we have shown that for almost every $x \in [a, b]$ the derivative of $f$ at $x$ exists although it may equal $\infty$. Infinite slope is not really acceptable and that is