Proof In dimension 1, a cube is a segment, so Theorem 51 gives

$$\frac{F(x + h) - F(x)}{h} = \int_{[x, x + h]} f(t) \, dt \rightarrow f(x)$$

almost everywhere as $h \downarrow 0$. The same holds for $[x - h, x]$.

Corollary 53 does not characterize indefinite integrals. Mere knowledge that a continuous function $G$ has a derivative almost everywhere and that its derivative is an integrable function $f$ does not imply that $G$ differs from the indefinite integral of $f$ by a constant. The Devil’s staircase function $H$ is a counterexample. Its derivative exists almost everywhere, $H'(x)$ is almost everywhere equal to the integrable function $f(x) = 0$, and yet $H$ does not differ from the indefinite integral of 0 by a constant. The missing ingredient is a subtler form of continuity.

Definition A function $G : [a, b] \rightarrow \mathbb{R}$ is absolutely continuous if for each $\epsilon > 0$ there exists $\delta > 0$ such that whenever $I_1, \ldots, I_n$ are disjoint intervals in $[a, b]$ we have

$$\sum_{i=1}^{n} b_i - a_i < \delta \Rightarrow \sum_{i=1}^{n} |G(b_i) - G(a_i)| < \epsilon.$$

54 Proposition Every absolutely continuous function is uniformly continuous. If $(I_i)$ is a sequence of disjoint intervals $(a_i, b_i) \subset [a, b]$ then the following are equivalent for a function $G : [a, b] \rightarrow \mathbb{R}$.

(a) $\forall \epsilon > 0 \exists \delta > 0$ such that $\sum_{i=1}^{n} b_i - a_i < \delta \Rightarrow \sum_{i=1}^{n} |G(b_i) - G(a_i)| < \epsilon.$

(b) $\forall \epsilon > 0 \exists \delta > 0$ such that $\sum_{i=1}^{\infty} b_i - a_i < \delta \Rightarrow \sum_{i=1}^{\infty} |G(b_i) - G(a_i)| < \epsilon.$

(c) $\forall \epsilon > 0 \exists \delta > 0$ such that $\sum_{i=1}^{n} m(I_i) < \delta \Rightarrow \sum_{i=1}^{n} m(G(I_i)) < \epsilon.$

(d) $\forall \epsilon > 0 \exists \delta > 0$ such that $\sum_{i=1}^{\infty} m(I_i) < \delta \Rightarrow \sum_{i=1}^{\infty} m(G(I_i)) < \epsilon.$

Also, if $G$ is absolutely continuous and $Z$ is a zero set then $GZ$ is a zero set. Finally, if $G$ is absolutely continuous and $\epsilon > 0$ is given then there exists $\delta > 0$ such that if $E$ is measurable then $GE$ is measurable and $mE < \delta \Rightarrow m(GE) < \epsilon.$

Proof Assume $G$ is absolutely continuous. For each $\epsilon > 0$ there exists $\delta > 0$ such that if $\sum b_i - a_i < \delta$ then $\sum |G(b_i) - G(a_i)| < \epsilon$. Apply this with just one interval $(t, x)$. Then $|t - x| < \delta$ implies $|G(t) - G(x)| < \epsilon$, which is uniform continuity.