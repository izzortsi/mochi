(4) is obvious for boxes, and hence it holds also for open sets. After all, an open set is the disjoint union of boxes and a zero set, and slicing preserves disjointness.

The Dominated Convergence Theorem promotes (4) from open sets to bounded $G_{\delta}$-sets.

(4) holds for bounded measurable sets since each is a bounded $G_{\delta}$-set minus a zero set. The general measurable set $E$ is a disjoint union of bounded measurable sets, $E = \bigsqcup E_i$, so countable additivity gives (4) for $E$.

The proof of Cavalieri’s Principle in higher dimensions differs only notationally from the proof in $\mathbb{R}^2$. See also Appendix B of Chapter 5 and Exercise 44.

40 Corollary The $y$-slices of an undergraph decrease monotonically as $y$ increases, and the following formulas hold:

$$(\mathcal{U}f)^a = \bigcup_{y > a} (\mathcal{U}f)^y \quad (\widehat{\mathcal{U}f})^a = \bigcap_{y < a} (\widehat{\mathcal{U}f})^y.$$

Every horizontal slice of a measurable undergraph is measurable.

Proof Monotonicity and the formulas follow from

$$(\mathcal{U}f)^a = \{x : a < fx\} = \{x : \exists y > a \text{ such that } y < fx\}$$
$$(\widehat{\mathcal{U}f})^a = \{x : a \leq fx\} = \{x : \forall y < a \text{ we have } y \leq fx\}.$$