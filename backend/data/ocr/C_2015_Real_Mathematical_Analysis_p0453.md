Proof of Steinhaus’ Theorem By the Lebesgue Density Theorem (Theorem 47) $E$ has lots of density points so we can find an interval $(a, b)$ in which $E$ has concentration $> 1/2$. Call $F = E \cap (a, b)$. Then $mF > (b - a)/2$. By Lemma 65 if $|t| < 2mF - (b - a)$ then the $t$-translate of $F$ meets $F$, so the $t$-translate of $E$ meets $E$, which is what the theorem asserts.

Now we return to the nonmeasurable set $P$ discussed in Theorem 63. It contains exactly one point from each $R$-orbit, $R$ being rotation by an irrational $t$. Set

$$A = \bigcup_{k \in \mathbb{Z}} R^{2k}P \quad B = \bigcup_{k \in \mathbb{Z}} R^{2k+1}P.$$

The sets $A, B$ are disjoint, their union is the circle, and $R$ interchanges them. Since $R$ preserves outer measure we have $m^*A = m^*B$.

The composite $R^2 = R \circ R$ is rotation by $2t$, also an irrational number. Let $\epsilon > 0$ be given. Since the orbit of 0 under $R^2$ is dense there is a large integer $k$ with

$$|R^{2k}(0) - (-t)| < \epsilon.$$

For $R^{2k}$ is the $k^{\text{th}}$ iterate of $R^2$. Thus $|R^{2k+1}(0)| < \epsilon$ so $R^{2k+1}$ is a rotation by $< \epsilon$. Odd powers of $R$ interchange $A$ and $B$, so odd powers of $R$ translate $A$ and $B$ off themselves. It follows from Steinhaus’ Theorem that $A$ and $B$ contain no subsets of positive measure. Their inner measures are zero.

The general formula $mC = m^*A + m^*B$ in Lemma 20 implies that $m^*B = 1$. Thus we get an extreme type of nonmeasurability expressed in the next theorem.

66 Theorem The circle, or equivalently $[0, 1)$, splits into two nonmeasurable disjoint subsets that each has inner measure zero and outer measure one.

67 Corollary Every measurable set $E \subset \mathbb{R}^n$ of positive measure contains a dop-pelgänger – a nonmeasurable subset $N$ such that $m^*N = mE$, $m^*N = 0$, and $N$ “spreads itself evenly” throughout $E$ in the sense that if $E' \subset E$ is measurable then $m^*(N \cap E') = m(E')$.

The proof is left to you as Exercise 50.