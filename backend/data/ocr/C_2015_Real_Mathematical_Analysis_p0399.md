4 Corollary The formulas $m^*I = b - a$, $m^*R = (b - a) \cdot (d - c)$, and $m^*B = \prod_k m^*(I_k)$ hold also for intervals, rectangles, and boxes that are open or partly open. In particular, $m^*I = |I|$, $m^*R = |R|$, and $m^*B = |B|$ for open intervals, rectangles, and boxes.

Proof Let $I$ be any interval with endpoints $a < b$ and let $\epsilon > 0$ be given. (We assume $\epsilon < (b - a)/2$ without loss of generality.) The closed intervals $J = [a + \epsilon, b - \epsilon]$ and $J' = [a - \epsilon, b + \epsilon]$ sandwich $I$ as $J \subset I \subset J'$. By Theorem 3 we have $m^*J = b - a - 2\epsilon$ and $m^*J' = b - a + 2\epsilon$. Thus

$$m^*J \leq m^*I \leq m^*J'$$
$$\parallel b - a - 2\epsilon \leq |I| \leq b - a + 2\epsilon.$$

Then $|m^*I - |I|| < 4\epsilon$ for all $\epsilon > 0$ which implies $m^*I = |I|$. The sandwich method works equally well for rectangles and boxes.

2 Measurability

If $A$ and $B$ are subsets of disjoint intervals in $\mathbb{R}$ it is easy to show that

$$m^*(A \sqcup B) = m^*A + m^*B.$$

But what if $A$ and $B$ are merely disjoint? Is the formula still true? The answer is “yes” if the sets have an additional property called measurability, and “no” in general as is shown in Appendix D. Measurability is the rule and nonmeasurability the exception. The sets you meet in analysis – open sets, closed sets, their unions, differences, etc. – all are measurable. See Section 4.

Definition A set $E \subset \mathbb{R}$ is (Lebesgue) measurable if the division $E|E^c$ of $\mathbb{R}$ is so “clean” that for each “test set” $X \subset \mathbb{R}$ we have

$$m^*X = m^*(X \cap E) + m^*(X \cap E^c).$$

The definition of measurability in higher dimensions is analogous. A set $E \subset \mathbb{R}^n$ is measurable if $E|E^c$ divides each $X \subset \mathbb{R}^n$ so cleanly that (1) is true for $n$-dimensional outer measure.