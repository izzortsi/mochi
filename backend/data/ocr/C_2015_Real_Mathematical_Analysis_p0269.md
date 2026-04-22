Figure 105 The closed neighborhoods $M_r_n(p_n)$ nest down to a point.

To check that $M$ is not thin, we take complements. Suppose that $M = \bigcup K_n$ and $K_n$ is closed. If each $K_n$ has empty interior then each $G_n = K_n^c$ is open-dense and

$$G = \bigcap G_n = (\bigcup K_n)^c = \emptyset,$$

a contradiction to density of $G$.

34 Corollary No subset of a complete nonempty metric space is both thick and thin.

Proof If $S$ is both a thick and thin subset of $M$ then $M \setminus S$ is also both thick and thin. The intersection of two thick subsets of $M$ is thick, so $\emptyset = S \cap (M \setminus S)$ is a thick subset of $M$. By Baire’s Theorem, this empty set is dense in $M$, so $M$ is empty, contrary to the hypothesis.

Proof of Theorem 33 For $n \in \mathbb{N}$ define

$$R_n = \{ f \in C^0 : \forall x \in [a, b - 1/n] \exists h > 0 \text{ such that } \left| \frac{\Delta f}{h} \right| > n \}$$

$$L_n = \{ f \in C^0 : \forall x \in [a + 1/n, b] \exists h < 0 \text{ such that } \left| \frac{\Delta f}{h} \right| > n \}$$

$$G_n = \{ f \in C^0 : f \text{ restricted to any interval of length } 1/n \text{ is nonmonotone} \},$$