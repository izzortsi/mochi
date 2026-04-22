Figure 138 The picture that proves $\mathcal{M}$ is closed under differences.

(d) Given a test set $X \subset M$ and a countable disjoint union of measurable sets $E = \bigsqcup E_i$ of measurable sets we claim that

$$\omega(X \cap E) = \sum_i \omega(X \cap E_i).$$

(When $X = M$ this is countable additivity, but in general $X$ need not be measurable.) Consider the division

$$X \cap (E_1 \sqcup E_2) = (X \cap E_1) \sqcup (X \cap E_2).$$

Measurability of $E_1$ implies that the two outer measures add. By induction the same is true for any finite sum,

$$\omega(X \cap (E_1 \sqcup \ldots \sqcup E_k)) = \omega(X \cap E_1) + \ldots + \omega(X \cap E_k).$$

Monotonicity of $\omega$ implies that

$$\omega(X \cap E) \geq \omega(X \cap (E_1 \sqcup \ldots \sqcup E_k)),$$