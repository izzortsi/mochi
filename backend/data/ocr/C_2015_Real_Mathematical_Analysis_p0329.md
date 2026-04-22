Therefore

$$\sum_{j=1}^{n} \sum_{i=1}^{m} m_{ij} \Delta x_i \Delta y_j \leq \sum_{j=1}^{n} m_j(\underline{F}) \Delta y_j = L(\underline{F}, Q)$$

which gives (9). Analogously, $U(\overline{F}, Q) \leq U(f, G)$. Thus

$$L(f, G) \leq L(\underline{F}, Q) \leq U(F, Q) \leq U(\overline{F}, Q) \leq U(f, G).$$

Since $f$ is integrable, the outer terms of this inequality differ by arbitrarily little when the mesh of $G$ is small. Taking infima and suprema over all grids $G = P \times Q$ gives

$$\int_R f = \sup L(f, G) \leq \sup L(\underline{F}, Q) \leq \inf U(\underline{F}, Q)$$

$$\leq \inf U(f, G) = \int_R f.$$

The resulting equality of these five quantities implies that $\underline{F}$ is integrable and its integral on $[c, d]$ equals that of $f$ on $R$. The case of the upper integral is handled in the same way.

30 Corollary If $f$ is Riemann integrable then the order of integration – first $x$ then $y$ or vice versa – is irrelevant to the value of the iterated integral,

$$\int_c^d \left[ \int_a^b f(x, y) dx \right] dy = \int_a^b \left[ \int_c^d f(x, y) dy \right] dx.$$

Proof Both iterated integrals equal the integral of $f$ over $R$.

A geometric consequence of Fubini’s Theorem concerns the calculation of the area of plane regions by a slice method. Corresponding slice methods are valid in 3-space and in higher dimensions.

31 Cavalieri’s Principle The area of a region $S \subset R$ is the integral with respect to $x$ of the length of its vertical slices,

$$\text{area}(S) = \int_a^b \text{length}(S_x) dx,$$

provided that the boundary of $S$ is a zero set.

Proof Deriving Cavalieri’s Principle from Fubini’s Theorem is mainly a matter of definition. For we define the length of a subset of $\mathbb{R}$ and the area of a subset of $\mathbb{R}^2$ to be the integrals of their characteristic functions. The requirement that $\partial S$ is a zero