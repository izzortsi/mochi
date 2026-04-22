56 Lebesgue’s Antiderivative Theorem Every indefinite integral is absolutely continuous and conversely, every absolutely continuous function has a derivative almost everywhere and up to a constant it is the indefinite integral of its derivative.

Proof of Theorem 55 (a) This is Corollary 53.

(b) Without much loss of generality we assume $f \geq 0$. We first suppose that $f$ is bounded, say $0 \leq f(x) \leq M$ for all $x$. For each $\epsilon > 0$ the choice of $\delta = \epsilon/M$ gives

$$\sum m(F(I_i)) \leq \sum Mm(I_i) < \epsilon$$

whenever $I_i$ are disjoint subintervals of $[a,b]$ having total length $< \delta$. Proposition 54 implies that $F$ is absolutely continuous.

Now assume $f$ is unbounded and $\epsilon > 0$ is given. Choose $M$ so large that

$$m(\{(x,y) \in \mathcal{U}f : fx \geq M\}) < \epsilon/2.$$

Define the functions

$$g(x) = \begin{cases} fx & \text{if } fx \geq M \\ 0 & \text{otherwise} \end{cases}$$

and $f_M = f - g$. The integral of $g$ is $< \epsilon/2$ since it is the measure of $\mathcal{U}f$ outside the rectangle $[a,b] \times [0,M]$. Let $F_M$ and $G$ be the indefinite integrals of $f_M$ and $g$. Clearly $f = f_M + g$ implies $F = F_M + G$. See Figure 153.

$$\int g = m(\mathcal{U}g) \text{ and } \int f = \int g + \int f_M = m(\mathcal{U}g) + m(\mathcal{U}(f_M)).$$

Since $f_M$ is bounded there exists $\delta > 0$ such that

$$\sum m(I_i) < \delta \Rightarrow \sum m(F_M(I_i)) < \epsilon/2$$

where the $I_i$ are disjoint intervals in $[a,b]$. Then $\sum m(I_i) < \delta$ implies

$$\sum m(F(I_i)) = \sum \int_{I_i} (f_M + g) = \sum \int_{I_i} f_M + \sum \int_{I_i} g$$

$$= \sum m(F_M(I_i)) + \sum m(G(I_i))$$

$$< \epsilon/2 + \int_a^b g < \epsilon,$$