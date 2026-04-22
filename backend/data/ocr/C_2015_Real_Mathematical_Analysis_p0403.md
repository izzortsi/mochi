and so $\omega(X \cap E)$ dominates each partial sum of the series $\sum \omega(X \cap E_i)$. Hence it dominates the series too,

$$\sum_{i=1}^{\infty} \omega(X \cap E_i) \leq \omega(X \cap E).$$

The reverse inequality is always true by subadditivity and we get equality, verifying (2).

Finally, we prove that $E = \bigcup E_i$ is measurable when each $E_i$ is. Taking $E'_i = E_i \setminus (E_1 \cup \ldots \cup E_{i-1})$, (a) tells us it is no loss of generality to assume the sets $E_i$ are disjoint, $E = \bigsqcup E_i$. Given a test set $X \subset M$ we know by (c) (finite additivity) and monotonicity of $\omega$ that

$$\omega(X \cap E_1) + \ldots + \omega(X \cap E_k) + \omega(X \cap E^c)$$

$$= \omega(X \cap (E_1 \sqcup \ldots \sqcup E_k)) + \omega(X \cap E^c)$$

$$\leq \omega(X \cap (E_1 \sqcup \ldots \sqcup E_k)) + \omega(X \cap (E_1 \sqcup \ldots \sqcup E_k)^c)$$

$$= \omega X.$$

Being true for all $k$, the inequality holds also for the full series

$$\sum_{i=1}^{\infty} \omega(X \cap E_i) + \omega(X \cap E^c) \leq \omega X.$$

From (2) we get

$$\omega(X \cap E) + \omega(X \cap E^c) = \sum_{i=1}^{\infty} \omega(X \cap E_i) + \omega(X \cap E^c) \leq \omega X.$$

The reverse inequality is true by subadditivity of $\omega$. This gives equality and shows that $E$ is measurable. Hence $\mathcal{M}$ is a $\sigma$-algebra and the restriction of $\omega$ to $\mathcal{M}$ is countably additive.

From countable additivity we deduce a very useful fact about measures. It applies to any outer measure $\omega$, in particular to Lebesgue outer measure.

**6 Measure Continuity Theorem** If $\{E_k\}$ and $\{F_k\}$ are sequences of measurable sets then

- **upward measure continuity** $E_k \uparrow E \Rightarrow \omega E_k \uparrow \omega E$
- **downward measure continuity** $F_k \downarrow F$ and $\omega F_1 < \infty \Rightarrow \omega F_k \downarrow \omega F.$