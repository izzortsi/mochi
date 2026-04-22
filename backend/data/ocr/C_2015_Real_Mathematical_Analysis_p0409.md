Proof Without loss of generality we assume $n = 2$. Let $H = [a, \infty) \times \mathbb{R}$. We claim that $m^*X = m^*(X \cap H) + m^*(X \cap H^c)$ for all test sets $X$. Since $a \times \mathbb{R}$ is a zero set in $\mathbb{R}^2$ and zero sets have no effect on outer measure (Theorem 5) we may assume that $X \cap (a \times \mathbb{R}) = \emptyset$. Set

$$X^- = \{(x, y) \in X : x < a\} \quad X^+ = \{(x, y) \in X : x > a\}.$$

Then $X = X^- \sqcup X^+$. Given $\epsilon > 0$ there is a countable covering $\mathcal{R}$ by rectangles $R$ with $\sum_{\mathcal{R}} |R| \leq m^*X + \epsilon$. Let $\mathcal{R}^\pm$ be the collection of rectangles $R^\pm = \{(x, y) \in R : R \in \mathcal{R}$ and $\pm(x - a) > 0\}$. Then $\mathcal{R}^\pm$ covers $X^\pm$ and

$$m^*X \leq m^*(X \cap H) + m^*(X \cap H^c)$$

$$\leq \sum_{\mathcal{R}^+} |R^+| + \sum_{\mathcal{R}^-} |R^-| = \sum_{\mathcal{R}} |R| \leq m^*X + \epsilon.$$

Since $\epsilon > 0$ is arbitrary this gives measurability of $H = [a, \infty) \times \mathbb{R}$. Since the line $x = a$ is a planar zero set $(a, \infty) \times \mathbb{R}$ is also measurable. The vertical strip $(a, b) \times \mathbb{R}$ is measurable since it is the intersection

$$(a, \infty) \times \mathbb{R} \cap (-\infty, b) \times \mathbb{R}$$

and $(-\infty, b) \times \mathbb{R} = ([b, \infty) \times \mathbb{R})^c$. Interchanging the coordinates shows that the horizontal strip $\mathbb{R} \times (c, d)$ is also measurable. The rectangle $R = (a, b) \times (c, d)$ is the intersection of the strips and is therefore measurable. $\square$

Proof of Theorem 13 Let $U$ be an open subset of $\mathbb{R}^n$. It is the countable union of open boxes. Since $\mathcal{M}(\mathbb{R}^n)$ is a $\sigma$-algebra and a $\sigma$-algebra is closed with respect to countable unions, $U$ is measurable. Since a $\sigma$-algebra is closed with respect to complements, every closed set is also measurable. $\square$

15 Corollary The Lebesgue measure of an interval is its length, the Lebesgue measure of a rectangle is its area, and the Lebesgue measure of a box is its volume. The boundary of a box is a zero set and so is the boundary of a ball.

Proof This is just Theorem 3, Proposition 14, and measurability of the sets involved. $\square$

Sets that are slightly more general than open sets and closed sets arise naturally. A countable intersection of open sets is called a $G_\delta$-set and a countable union of closed sets is an $F_\sigma$-set. (“$\delta$” stands for the German word *durschnitt* and “$\sigma$” stands for “sum.”) By De Morgan’s laws, the complement of a $G_\delta$-set is an $F_\sigma$-set and