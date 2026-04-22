(a) $f \leq g$ implies $\mathcal{U}f \subset \mathcal{U}g$ implies $m(\mathcal{U}f) \leq m(\mathcal{U}g)$.

(b) The product $X_k \times \mathbb{R}$ is measurable and its intersection with $\mathcal{U}f$ is $\mathcal{U}f|_{X_k}$. Thus $\mathcal{U}f = \bigsqcup_{k=1}^{\infty} \mathcal{U}f|_{X_k}$ and countable additivity of planar measure gives the result.

(c) The planar measure of the product $\mathcal{U}(X_X) = X \times [0, 1)$ is $mX$.

(d) $\mathcal{U}f$ is contained in the product $X \times \mathbb{R}$ of zero planar measure.

(e) Almost everywhere equality of $f$ and $g$ means there is a zero set $Z \subset \mathbb{R}$ such that if $x \notin Z$ then $f(x) = g(x)$. Apply (b), (d) to $\mathbb{R} = Z \sqcup (\mathbb{R} \setminus Z)$.

(f) According to Theorem 9 scaling the $y$-axis by the factor $c$ scales planar measure correspondingly.

(g) The Zero Slice Theorem (Theorem 26) asserts that $\mathcal{U}f$ is a zero set if and only if almost every vertical slice is a slice zero set. The vertical slices are the segments $[0, fx)$.

(h) This requires a new concept and a corresponding picture. See Theorem 35, Corollary 36, and Figure 146.

**Definition** If $f : \mathbb{R} \to \mathbb{R}$ then $f$-translation $T_f : \mathbb{R}^2 \to \mathbb{R}^2$ sends the point $(x, y)$ to the point $(x, y + f(x))$.

$T_f$ slides points along the vertical lines $x \times \mathbb{R}$ and

$$T_f \circ T_g = T_{f+g} = T_g \circ T_f$$

so $T_f$ is a bijection whose inverse is $T_{-f}$.

**35 Theorem** If $f : \mathbb{R} \to [0, \infty)$ is integrable then $T_f$ preserves planar Lebesgue measure; i.e., it is a meseometry.

**Proof** We must show that $T_f$ bijects the class $\mathcal{M}$ of Lebesgue measurable subsets of $\mathbb{R}^2$ to itself and $m(T_f E) = mE$ for all $E \in \mathcal{M}$.

Consider Figure 146. It demonstrates that for any two nonnegative functions on $\mathbb{R}$ we have two ways to express $\mathcal{U}(f + g)$, namely

$$\mathcal{U}f \sqcup T_f(\mathcal{U}g) = \mathcal{U}(f + g) = T_g(\mathcal{U}f) \sqcup \mathcal{U}g.$$

First we consider the function

$$g(x) = \begin{cases} h & \text{if } x \in I \\ 0 & \text{otherwise} \end{cases}$$

where $I$ is an interval in $\mathbb{R}$ and $h$ is a positive constant. See Figure 147. The un-