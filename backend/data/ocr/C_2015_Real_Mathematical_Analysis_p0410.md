conversely. Clearly a homeomorphism sends $G_{\delta}$-sets to $G_{\delta}$-sets and $F_{\sigma}$-sets to $F_{\sigma}$-sets. Since the $\sigma$-algebra of measurable sets contains the open sets and the closed sets it also contains the $G_{\delta}$-sets and the $F_{\sigma}$-sets.

**16 Theorem** Lebesgue measure is **regular** in the sense that each measurable set $E$ can be sandwiched between an $F_{\sigma}$-set and a $G_{\delta}$-set, $F \subset E \subset G$, such that $m(G \setminus F) = 0$. Conversely, if there is such an $F \subset E \subset G$ then $E$ is measurable.

**Proof** We take $E \subset \mathbb{R}^2$. We assume first that $E$ is bounded and choose a large rectangle $R$ that contains $E$. We write $E^c = R \setminus E$. Measurability implies

$$mR = mE + m(E^c).$$

There are decreasing sequences of open sets $U_n$ and $V_n$ such that $U_n \supset E$, $V_n \supset E^c$, $m(U_n) \rightarrow mE$, and $m(V_n) \rightarrow m(E^c)$ as $n \rightarrow \infty$. Measurability of $E$ implies $m(U_n \setminus E) \rightarrow 0$ and $m(V_n \setminus E^c) \rightarrow 0$. The complements $K_n = R \setminus V_n$ form an increasing sequence of closed subsets of $E$ and

$$mK_n = mR - mV_n \rightarrow mR - m(E^c) = mE.$$

Thus $F = \bigcup K_n$ is an $F_{\sigma}$-set contained in $E$ with $mF = mE$. Similarly, $G = \bigcap U_n$ is a $G_{\delta}$-set that contains $E$ and has $mG = mE$. Because all the measures are finite, the equality $mF = mE = mG$ implies that $m(G \setminus F) = 0$.

Conversely, if $F$ is an $F_{\sigma}$-set, $G$ is a $G_{\delta}$-set, $F \subset E \subset G$, and $m(G \setminus F) = 0$ then $E$ is measurable since $E = F \cup Z$, where $Z = E \cap (G \setminus F)$ is a zero set.

The unbounded case is left as Exercise 6.

**17 Corollary** A bounded subset $E \subset \mathbb{R}^n$ is measurable if and only if it has a **regularity sandwich** $F \subset E \subset G$ such that $F$ is an $F_{\sigma}$-set, $G$ is a $G_{\delta}$-set, and $mF = mG$.

**Proof** If $E$ is measurable, bounded or not, then Theorem 16 implies there is a regularity sandwich with $mF = mE = mG$. Conversely, if there is a regularity sandwich with $mF = mG$ then boundedness of $E$ implies $mF < \infty$. Measurability of $F$ and $G$ imply $m(G \setminus F) = mG - mF = 0$ and Theorem 16 then implies $E$ is measurable.

**18 Corollary** Modulo zero sets, Lebesgue measurable sets are $F_{\sigma}$-sets and/or $G_{\delta}$-sets.

**Proof** $E = F \cup Z = G \setminus Z'$ for the zero sets $Z = E \setminus F$ and $Z' = G \setminus E$.