Before getting into the proofs of Baire’s theorem and Theorem 33, we further discuss thickness, thinness, and genericity. The empty set is always thin and the full space $M$ is always thick in itself. A single open-dense subset is thick and a single closed nowhere dense subset is thin. $\mathbb{R} \setminus \mathbb{Z}$ is a thick subset of $\mathbb{R}$ and the Cantor set is a thin subset of $\mathbb{R}$. Likewise $\mathbb{R}$ is a thin subset of $\mathbb{R}^2$. The generic point of $\mathbb{R}$ does not lie in the Cantor set. The generic point of $\mathbb{R}^2$ does not lie on the $x$-axis. Although $\mathbb{R} \setminus \mathbb{Z}$ is a thick subset of $\mathbb{R}$ it is not a thick subset of $\mathbb{R}^2$. The set $\mathbb{Q}$ is a thin subset of $\mathbb{R}$. It is the countable union of its points, each of which is a closed nowhere dense set. $\mathbb{Q}^c$ is a thick subset of $\mathbb{R}$. The generic real number is irrational. In the same vein:

(a) The generic square matrix has determinant $\neq 0$.

(b) The generic linear transformation $\mathbb{R}^m \to \mathbb{R}^m$ is an isomorphism.

(c) The generic linear transformation $\mathbb{R}^m \to \mathbb{R}^{m-k}$ is onto.

(d) The generic linear transformation $\mathbb{R}^m \to \mathbb{R}^{m+k}$ is one-to-one.

(e) The generic pair of lines in $\mathbb{R}^3$ are skew (nonparallel and disjoint).

(f) The generic plane in $\mathbb{R}^3$ meets the three coordinate axes in three distinct points.

(g) The generic $n^{\text{th}}$-degree polynomial has $n$ distinct roots.

In an incomplete metric space such as $\mathbb{Q}$, thickness and thinness have no bite – every subset of $\mathbb{Q}$, even the empty set, is thick in $\mathbb{Q}$.

**Proof of Baire’s Theorem** If $M = \emptyset$, the proof is trivial, so we assume $M \neq \emptyset$. Let $G = \bigcap G_n$ be a thick subset of $M$, each $G_n$ being open-dense in $M$. Let $p_0 \in M$ and $\epsilon > 0$ be given. Choose a sequence of points $p_n \in M$ and radii $r_n > 0$ such that $r_n < 1/n$ and

$$M_{2r_1}(p_1) \subset M_\epsilon(p_0)$$
$$M_{2r_2}(p_2) \subset M_{r_1}(p_1) \cap G_1$$
$$\dots$$
$$M_{2r_n}(p_n) \subset M_{r_{n-1}}(p_{n-1}) \cap G_1 \cap \dots \cap G_{n-1}.$$

See Figure 105. Then

$$M_\epsilon(p_0) \supset \overline{M}_{r_1}(p_1) \supset \overline{M}_{r_2}(p_2) \supset \dots.$$

The diameters of these closed sets tend to 0 as $n \to \infty$. Thus $(p_n)$ is a Cauchy sequence and it converges to some $p \in M$ by completeness. The point $p$ belongs to each set $\overline{M}_{r_n}(p_n)$ and therefore it belongs to each $G_n$. Thus $p \in G \cap M_\epsilon(p_0)$ and $G$ is dense in $M$.