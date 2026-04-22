with 0. Then $t$-translation becomes rotation by the angle $2\pi t$, and is denoted as $R_t : S^1 \rightarrow S^1$. If $t$ is rational then this rotation is periodic, i.e., for some $n \geq 1$, the $n^{\text{th}}$ iterate of $R$, $R^n = R \circ \cdots \circ R$, is the identity map $S^1 \rightarrow S^1$. In fact the smallest such $n$ is the denominator when $t = m/n$ is expressed in lowest terms. On the other hand, if $t$ is irrational then $R = R_t$ is nonperiodic; every orbit $\mathcal{O}(x) = \{R^k(x) : k \in \mathbb{Z}\}$ is denumerable and dense in $S^1$.

**63 Theorem** Let $t$ be irrational and set $R = R_t$. If $P \subset S^1$ contains exactly one point of each $R$-orbit then $P$ is nonmeasurable with respect to linear Lebesgue measure on $S^1$.

**Proof** The $R$-orbits are disjoint sets, there are uncountably many of them, and they divide the circle as $S^1 = \bigsqcup_{n \in \mathbb{Z}} R^n(P)$. Translation is a meseometry. It preserves outer measure, measurability, and measure. So does rotation. Can $P$ be measurable? No, because if it is measurable with positive measure then we would get

$$m(S^1) = \sum_{n=-\infty}^{\infty} m(R^nP) = \infty,$$

a contradiction, while if $mP = 0$ then $m(S^1) = \sum_{-\infty}^{\infty} m(R^nP) = 0$, which contradicts the fact that $m[0,1) = 1.$

But does $P$ exist? The Axiom of Choice states that given any family of nonempty disjoint sets there exists a set that contains exactly one element from each set. So if you accept the Axiom of Choice then you apply it to the family of $R$-orbits and you get an example of a nonmeasurable set $P$, while if you don’t accept the Axiom of Choice then you’re out of luck.

To increase the pathology of $P$ we next discuss translations in more depth.

**64 Steinhaus’ Theorem** If $E \subset \mathbb{R}$ is measurable and has positive measure then there exists a $\delta > 0$ such that for all $t \in (-\delta, \delta)$, the $t$-translate of $E$ meets $E$.

See also Exercise 57.

**65 Lemma** If $F \subset (a,b)$ is measurable and disjoint from its $t$-translate then

$$2mF \leq (b-a) + |t|.$$

**Proof** $F$ and its $t$-translate have equal measure, so if they do not intersect then their total measure is $2mF$, and any interval that contains them must have length $\geq 2mF$. If $t > 0$ then $(a, b+t)$ contains $F$ and its $t$-translate, while if $t < 0$ then $(a+t, b)$ contains them. The length of the interval in either case is $(b-a) + |t|.$