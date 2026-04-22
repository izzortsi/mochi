We can choose these small open sets $U(x)$ from a **countable base** of the topology of $\mathbb{R}$, for instance the intervals with rational endpoints. This gives a countable covering of $K$ by thin product sets $W_i = U_i \times V_i$ such that $m(V_i) < \epsilon$ for each $i$. We disjointify the covering by setting

$$U'_i = U_i \setminus (U_1 \cup \ldots \cup U_{i-1}).$$

The sets $U'_i$ are measurable, disjoint, and since $E$ is contained in the unit square they all lie in the unit interval. Hence their total one-dimensional measure is $\leq 1$. The sets $W'_i = U'_i \times V_i$ are disjoint, are measurable, and cover $K$. Theorem 21 implies $m(W'_i) = m(U'_i) \cdot m(V_i)$ so their total planar measure is $< \sum m(U'_i) \cdot \epsilon \leq \epsilon$. Hence $mK = 0$, which implies $m_*E = 0$ and completes the proof that $E$ is a zero set.

Conversely, suppose that $E$ is a zero set. Regularity implies there is a $G_\delta$-set $G \supset E$ with $mG = 0$ and it suffices to show that almost every slice of $G$ is a zero set. The slices of a $G_\delta$-set are $G_\delta$-sets and in particular each slice $G_x$ is measurable. Let $X(\alpha) = \{x : m(G_x) > \alpha\}$. We claim that $m^*(X(\alpha)) = 0$. Each $G_x$ contains a compact set $K(x)$ with $m(K(x)) = m(G_x)$.

Let $U$ be any open subset of $I^2$ that contains $G$. If $x \in X(\alpha)$ then $x \times K(x)$ is a compact subset of $U$ and there is a product neighborhood $W(x) = U(x) \times V(x)$ of $x \times K(x)$ with $W(x) \subset U$. Since $K(x) \subset V(x)$ we have $m(V(x)) > \alpha$. Again we can assume the neighborhoods $U(x)$ belong to some countable base for the topology of $\mathbb{R}$. This gives a countable family $\{U_i\}$ that covers $X(\alpha)$. As above, set $U'_i = U_i \setminus (U_1 \cup \ldots \cup U_{i-1})$. Disjointness and Theorem 21 imply

$$mU \geq \sum m(U'_i \times V_i) = \sum m(U'_i) \cdot m(V_i)$$

$$\geq \sum m(U'_i) \cdot \alpha \geq \alpha \cdot m^*(X(\alpha)).$$

Since $mG = 0$ there are open sets $U \supset G \supset E$ with arbitrarily small measure. Thus $X(\alpha)$ is a zero set and so is $\mathbf{U}_{\ell \in \mathbb{N}} X(1/\ell)$. That is, $m(E_x) = 0$ for almost every $x$. □

**Remark** Measurability of $E$ is a necessary condition in Theorem 26. See Exercise 25.