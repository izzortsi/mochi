Since $O^{-1}$ is also orthogonal, it too does not increase outer measure. Theorem 7 implies $O$ is a meseometry.

Finally we use Polar Form (Appendix D in Chapter 5) to write

$$M = O_1 DO_2$$

where $O_1$ and $O_2$ are orthogonal and $D$ is diagonal. Since $O_1$ and $O_2$ are meseometries and by Corollary 8 $D$ is a meseomorphism which multiplies measure by $|\det D| = |\det T|$, the proof is complete.

**12 Corollary** Rigid motions of $\mathbb{R}^n$ preserve Lebesgue measure. They are meseometries.

**Proof** A rigid motion is a translation followed by an orthogonal transformation. The determinant of an orthogonal transformation is $\pm 1$.

The concept of a meseomorphism makes natural sense in a more general context. A measure space is a triple $(M, \mathcal{M}, \mu)$ where $M$ is a set, $\mathcal{M}$ is a $\sigma$-algebra of subsets of $M$, and $\mu : \mathcal{M} \to [0, \infty]$ has the same basic properties as Lebesgue measure, namely, $\mu(\emptyset) = 0$, $\mu$ is monotone, and $\mu$ is countably additive. For example, the triple $(\mathbb{R}^n, \mathcal{M}(\mathbb{R}^n), m)$ is a measure space, and so is the triple $(S^2, \mathcal{M}(S^2), \nu)$ where $\nu$ is surface area on the 2-sphere $S^2$. A meseomorphism from one measure space $(M, \mathcal{M}, \mu)$ to another $(N, \mathcal{N}, \nu)$ is a bijection $T : M \to N$ that bijects $\mathcal{M}$ to $\mathcal{N}$ according to $E \mapsto TE$. It is a meseometry if in addition we have $\nu(TE) = \mu E$ for all $E \in \mathcal{M}$.

Meseometries are not sensitive to topology. See Exercises 19 and 20.

**4 Regularity**

In this section we discuss properties of Lebesgue measure related to the topology of $\mathbb{R}$ and $\mathbb{R}^n$.

**13 Theorem** Open sets and closed sets are measurable.

**14 Proposition** The half-spaces $[a, \infty) \times \mathbb{R}^{n-1}$ and $(a, \infty) \times \mathbb{R}^{n-1}$ are measurable in $\mathbb{R}^n$. So are all open boxes.