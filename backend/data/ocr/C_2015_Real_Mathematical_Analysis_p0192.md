Conversely, Riemann integrability on $[a, c]$ and $[c, b]$ implies Riemann integrability on $[a, b]$.

Proof See Figure 79. The union of the discontinuity sets for the restrictions of $f$ to the subintervals $[a, c], [c, b]$ is the discontinuity set of $f$. The latter is a zero set if and only if the former two are, and so by the Riemann-Lebesgue Theorem, $f$ is Riemann integrable if and only if its restrictions to $[a, c]$ and $[c, b]$ are.

Let $\chi_{[a, c]}$ and $\chi_{[c, b]}$ be the characteristic functions of $[a, c]$ and $[c, b]$. By Corollary 24 they are integrable, and by Corollary 27, so are the products $\chi_{[a, c]} \cdot f$ and $\chi_{[c, b]} \cdot f$. Since

$$f = \chi_{[a, c]} \cdot f + \chi_{(c, b]} \cdot f$$

the addition formula follows from linearity of the integral, Theorem 17.

31 Corollary If $f : [a, b] \to [0, M]$ is Riemann integrable and has integral zero then $f(x) = 0$ at every continuity point $x$ of $f$. Thus $f(x) = 0$ almost everywhere.

Proof Suppose not: Let $x_0$ be a continuity point of $f$ and assume that $f(x_0) > 0$. Then for some $\delta > 0$ and each $x \in (x_0 - \delta, x_0 + \delta)$ we have $f(x) \geq f(x_0)/2$. The function

$$g(x) = \begin{cases} \frac{f(x_0)}{2} & \text{if } x \in (x_0 - \delta, x_0 + \delta) \\ 0 & \text{otherwise} \end{cases}$$

satisfies $0 \leq g(x) \leq f(x)$ everywhere. See Figure 80. By monotonicity of the integral,