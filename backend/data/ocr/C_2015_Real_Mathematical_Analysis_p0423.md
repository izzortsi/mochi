dergraph of $g$ is the rectangle $R = I \times [0, h)$. The $T_f$-image of $R$ is the same as the $Tf_I$-image, where $f_I(x) = f(x) \cdot \chi_I(x)$. Thus we can assume that $f(x) = 0$ for $x \notin I$. The map $T_g$ is vertical translation by the constant $h$ and since Lebesgue measure is translation invariant we get measurability of $T_g(Uf)$. Then $Uf \sqcup T_fR = T_g(Uf) \sqcup R$ implies $T_fR$ is measurable and

$$m(Uf) + m(T_fR) = m(T_g(Uf)) + mR.$$

Since $m(Uf) < \infty$, subtraction is legal and we get $m(T_fR) = mR$. If we translate $R$ vertically by $k$ then we have a rectangle $T_kR = I \times [k, h + k)$ and $T_f(T_kR) = T_k \circ T_fR$ implies that $T_f$ sends each rectangle $I \times [c, d)$ to a measurable set of the same measure.

We claim that $T_f$ never increases outer measure. If $S \subset \mathbb{R}^2$ and $\epsilon > 0$ is given then we cover $S$ with countably many rectangles $R_i$ such that

$$\sum m(R_i) \leq m^*S + \epsilon.$$

Then $T_fS$ is covered by countably many measurable sets $T_f(R_i)$ with total measure $\leq m^*S + \epsilon$. From countable subadditivity and the $\epsilon$-Principle we deduce $m^*(T_fS) \leq m^*S$. The same is true for $T_{-f}$ since

$$T_{-f} = \psi \circ T_f \circ \psi$$

where $\psi : \mathbb{R}^2 \to \mathbb{R}^2$ is the meseometry sending $(x, y)$ to $(x, -y)$. Neither $T_f$ nor its inverse increase outer measure, so Theorem 7 implies $T_f$ is a meseometry.