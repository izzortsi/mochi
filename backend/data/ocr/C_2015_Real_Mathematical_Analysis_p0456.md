Appendix E  Riemann integrals as undergraphs

The geometric description of the Lebesgue integral as the measure of the undergraph has a counterpart for Riemann integrals.

68 Theorem  A function $f : [a, b] \rightarrow [0, M]$ is Riemann integrable if and only if the topological boundary of its undergraph is a zero set, $m(\partial(Uf)) = 0$.

Remark  Recall from page 424 that the measure-theoretic boundary of a set $E$ is

$$\partial_m(E) = \{p : p \text{ is a density point of neither } E \text{ nor } E^c\}$$

and measurability of $E$ is equivalent to $\partial_m(E)$ being a zero set. A function $f : [a, b] \rightarrow [0, M]$ is Lebesgue integrable if and only if $Uf$ is measurable, i.e., if and only if $\partial_m(Uf)$ is a zero set. Combined with Theorem 68 this gives a nice geometric parallel between Riemann and Lebesgue integrability:

$$f \text{ is Riemann integrable} \iff m(\partial(Uf)) = 0.$$
$$f \text{ is Lebesgue integrable} \iff m(\partial_m(Uf)) = 0.$$

Remark  Since $\partial(Uf) = \overline{Uf} \setminus \text{int}(Uf)$, equivalent to $m(\partial(Uf)) = 0$ is $m(\text{int}(Uf)) = m(\overline{Uf})$.

69 Lemma  If $X$ is a metric space, $f : X \rightarrow [0, \infty)$, and

$$\underline{f}(x) = \liminf_{t \to x} f(t) \quad \overline{f}(x) = \limsup_{t \to x} f(t)$$

then $Uf = \text{int}(Uf)$ and $\widehat{Uf} = \overline{Uf}$.

Proof  Take any $(x, y) \in Uf$. Then $y < f(x)$ and for all $(t, s)$ near $(x, y)$ we have $s < f(t)$. Thus $(t, s) \in Uf$, $(x, y) \in \text{int}(Uf)$, and $Uf \subset \text{int}(Uf)$. The proof of the reverse inclusion is similar, so $Uf = \text{int}(Uf)$. See Figure 158.

The proof that $\widehat{Uf} = \overline{Uf}$ is slightly different. If $(x, y) \in \widehat{Uf}$ then $y \leq f(x)$ so there exists $t_n \rightarrow x$ such that $f(t_n) \rightarrow \overline{f}(x)$. Choose $y_n < f(t_n)$ such that $y_n \rightarrow y$. Thus $(t_n, y_n) \in Uf$, $(t_n, y_n) \rightarrow (x, y)$, $(x, y) \in \overline{Uf}$, and $\widehat{Uf} \subset \overline{Uf}$. Conversely, if $(x, y) \in \overline{Uf}$ then there exists $(t_n, y_n) \in Uf$ such that $(t_n, y_n) \rightarrow (x, y)$. Then $y_n < f(t_n)$ and $\limsup_{n \to \infty} f(t_n) \geq \lim_{n \to \infty} y_n = y$. Thus, $y \leq f(x)$, $(x, y) \in \widehat{Uf}$, and $\widehat{Uf} \subset \widehat{Uf}$, giving equality, $\widehat{Uf} = \overline{Uf}$. See Figure 158.