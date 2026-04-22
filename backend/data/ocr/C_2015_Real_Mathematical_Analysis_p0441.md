(a) $\Rightarrow$ (b). (a) is the definition of absolute continuity. In the definition take $\epsilon/2$ in place of $\epsilon$. The resulting $\delta$ depends on $\epsilon$ but not on $n$. Thus $\sum_{i=1}^{\infty} b_i - a_i < \delta$ implies $\sum_{i=1}^{n} b_i - a_i < \delta$ implies $\sum_{i=1}^{n} |G(b_i) - G(a_i)| < \epsilon/2$ implies $\sum_{i=1}^{\infty} |G(b_i) - G(a_i)| \leq \epsilon/2 < \epsilon$, which is (b).

(b) $\Rightarrow$ (c). $m(G(I_i)) = |G(t_i) - G(s_i)|$, where $G(t_i)$ and $G(s_i)$ are the maximum and minimum of $G$ on $[a_i, b_i]$. Let $J_i$ be the interval between $s_i$ and $t_i$. Then $J_i \subset I_i$ implies $m(J_i) \leq m(I_i)$ implies $\sum_{i=1}^{n} m(J_i) < \delta$ implies $\sum_{i=1}^{n} |G(t_i) - G(s_i)| < \epsilon$. Thus $\sum_{i=1}^{n} |G(t_i) - G(s_i)| = \sum_{i=1}^{n} m(G(J_i)) < \epsilon$, which is (c).

(c) $\Rightarrow$ (d). This is just like (a) $\Rightarrow$ (b).

(d) $\Rightarrow$ (a). Since $m(I_i) = b_i - a_i$ and $|G(b_i) - G(a_i)| \leq m(G(I_i))$ this is immediate.

Assume $Z \subset [a, b]$ is a zero set and $G$ is absolutely continuous according to (d). For each $\epsilon > 0$ there exists $\delta > 0$ such that $\sum m(I_i) < \delta$ implies $\sum m(G(I_i)) < \epsilon$. There is an open $U \subset [a, b]$ of measure $< \delta$ that contains $Z$. Every $U$ is a countable disjoint union of open intervals $I_i$. Their total length is $mU < \delta$. Thus $GZ \subset \bigcup G(I_i)$ and by (d) we have $m(GZ) \leq \sum m(G(I_i)) < \epsilon$ so $m(GZ) = 0$.

Assume $E \subset [a, b]$ is measurable and $G$ is absolutely continuous according to (d) with $\epsilon, \delta$ as above. Regularity of Lebesgue measure implies there are compact subsets $K_n \subset E$ such that $K_n \uparrow F \subset E$, where $Z = E \setminus F$ is a zero set. ($F$ is an $F_\sigma$-set.) Continuity implies $G(K_n)$ is compact. Since $G(K_n) \uparrow GF$, $GF$ is measurable. Since $GZ$ is a zero set, $GE = GF \cup GZ$ is measurable. If $mE < \delta$ then there is an open $U = \bigcup I_i \supset E$ with $mU = \sum m(I_i) < \delta$. Then $GE \subset \bigcup G(I_i)$ and by (d) we have $m(GE) \leq \sum m(G(I_i)) < \epsilon$ as desired.

55 Theorem Let $f : [a, b] \to \mathbb{R}$ be Lebesgue integrable and let $F$ be its indefinite integral $F(x) = \int_a^x f(t) dt$.

(a) For almost every $x$ the derivative $F'(x)$ exists and equals $f(x)$.

(b) $F$ is absolutely continuous.

(c) If $G$ is an absolutely continuous function and $G'(x) = f(x)$ for almost every $x$ then $G$ differs from $F$ by a constant.

As we show in the next section (Corollary 62), the tacit assumption in (c) that $G'(x)$ exists is redundant. Theorem 55 then gives the following characterization of indefinite integrals. It is also called Lebesgue’s Main Theorem.