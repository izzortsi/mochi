We denote by $\mathcal{M} = \mathcal{M}(\mathbb{R}^n)$ the collection of all Lebesgue measurable subsets of $\mathbb{R}^n$. If $E$ is measurable its *Lebesgue measure* is $m^*E$, which we write as $mE$, dropping the asterisk to emphasize the measurability of $E$.

Which sets are measurable? It is obvious that the empty set is measurable. It is also obvious that if a set is measurable then so is its complement, since $E|E^c$ and $E^c|E$ divide a test set $X$ in the same way.

In the rest of this section we analyze measurability in the abstract. For the basic facts about measurability have nothing to do with $\mathbb{R}$ or $\mathbb{R}^n$. They hold for any “abstract outer measure.”

**Definition** Let $M$ be any set. The collection of all subsets of $M$ is denoted as $2^M$. An *abstract outer measure* on $M$ is a function $\omega : 2^M \to [0, \infty]$ that satisfies the three axioms of outer measure: $\omega(\emptyset) = 0$, $\omega$ is monotone, and $\omega$ is countably subadditive. A set $E \subset M$ is *measurable* with respect to $\omega$ if $E|E^c$ is so clean that for each test set $X \subset M$ we have

$$\omega X = \omega(X \cap E) + \omega(X \cap E^c).$$

**Example** Given any set $M$ there are two trivial outer measures on $M$. Counting outer measure assigns to a finite set $S \subset M$ its cardinality and assigns $\infty$ to every infinite set. The zero/infinity measure assigns outer measure zero to the empty set and $\infty$ to every other set. All sets are measurable with respect to these outer measures. See Exercise 10.

**Example** A less trivial outer measure weights Lebesgue outer measure. One sets $\omega I = e^{-c^2}|I|$, where $c$ is the midpoint of the interval $I$, and then defines the outer measure of $A \subset \mathbb{R}$ to be the infimum of the total $\omega$-area of countable interval coverings of $A$. Other weighting functions can be used.

**5 Theorem** The collection $\mathcal{M}$ of measurable sets with respect to any outer measure on any set $M$ is a $\sigma$-algebra and the outer measure restricted to this $\sigma$-algebra is countably additive. All zero sets are measurable and have no effect on measurability. In particular Lebesgue measure has these properties.

A $\sigma$-algebra is a collection of sets that includes the empty set, is closed under complement, and is closed under countable union. **Countable additivity** of $\omega$ means that if $E_1, E_2, \ldots$ are measurable with respect to $\omega$ then

$$E = \bigsqcup_i E_i \Rightarrow \omega E = \sum_i \omega E_i.$$