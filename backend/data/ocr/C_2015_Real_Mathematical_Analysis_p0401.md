Proof Let $\mathcal{M}$ denote the collection of measurable sets with respect to the outer measure $\omega$ on $M$. First we deal with zero sets, sets for which $\omega Z = 0$. By monotonicity, if $Z$ is a zero set and $X$ is a test set then

$$\omega X \leq \omega(X \cap Z) + \omega(X \cap Z^c) = 0 + \omega(X \cap Z^c) \leq \omega X$$

implies $Z$ is measurable. Likewise, if $E|E^c$ divides $X$ cleanly then so do $(E \cup Z)|(E \cup Z)^c$ and $(E \setminus Z)|(E \setminus Z)^c$. That is, $Z$ has no effect on measurability.

To check that $\mathcal{M}$ is a $\sigma$-algebra we must show that it contains the empty set, is closed under complements, and is closed under countable union. By the definition of outer measure the empty set is a zero set so it is measurable, $\emptyset \in \mathcal{M}$. Also, since $E|E^c$ divides a test set $X$ in the same way that $E^c|E$ does, $\mathcal{M}$ is closed under complements. To check that $\mathcal{M}$ is closed under countable union takes four preliminary steps:

(a) $\mathcal{M}$ is closed under differences.
(b) $\mathcal{M}$ is closed under finite union.
(c) $\omega$ is finitely additive on $\mathcal{M}$.
(d) $\omega$ satisfies a special countable addition formula.

(a) For measurable sets $E_1, E_2$, and a test set $X$, draw the Venn diagram in Figure 138 where $X$ is represented as a disc. To check measurability of $E_1 \setminus E_2$ we must verify the equation

$$2 + 134 = 1234$$

where $2 = \omega(X \cap (E_1 \setminus E_2))$, $134 = \omega(X \cap (E_1 \setminus E_2))^c$, $1234 = \omega X$, etc. Since $E_1$ divides any set cleanly, $134 = 1 + 34$, and since $E_2$ divides any set cleanly, $34 = 3 + 4$. Thus

$$2 + 134 = 2 + 1 + 3 + 4 = 1 + 2 + 3 + 4.$$

For the same reason $1234 = 12 + 34 = 1 + 2 + 3 + 4$ which completes the proof of (a).

(b) Suppose that $E_1, E_2$ are measurable and $E = E_1 \cup E_2$. Since $E^c = E_1^c \setminus E_2$, (a) implies that $E^c \in \mathcal{M}$ and thus $E \in \mathcal{M}$. For more than two sets, induction shows that if $E_1, \ldots, E_n \in \mathcal{M}$ then $E_1 \cup \ldots \cup E_n \in \mathcal{M}$.

(c) If $E_1, E_2 \in \mathcal{M}$ are disjoint then $E_1$ divides $E = E_1 \sqcup E_2$ cleanly, so

$$\omega E = \omega(E \cap E_1) + \omega(E \cap E_1^c) = \omega E_1 + \omega E_2,$$

which is additivity for pairs of measurable sets. For more than two measurable sets, induction implies that $\omega$ is finitely additive on $\mathcal{M}$; i.e., if $E_1, \ldots, E_n \in \mathcal{M}$ then

$$E = \bigsqcup_{i=1}^{n} E_i \Rightarrow \omega E = \sum_{i=1}^{n} \omega E_i.$$