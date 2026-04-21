the crossing point disconnects the figure eight but removing any point of the circle leaves it connected.

**Example** The circle is not homeomorphic to the disc. For removing two points disconnects the circle but does not disconnect the disc.

As you can see, it is useful to be able to recognize disconnected subsets $S$ of a metric space $M$. By definition, $S$ is a disconnected subset of $M$ if it is disconnected when considered in its own right as a metric space with the metric it inherits from $M$; i.e., it has a separation $S = A \sqcup B$ such that $A$ and $B$ are proper clopen subsets of $S$. The sets $A, B$ are separated in $S$ but they need not be separated in $M$. Their closures in $M$ may intersect.

**Example** The punctured interval $X = [a, b] \setminus \{c\}$ is disconnected if $a < c < b$. For $X = [a, c] \sqcup (c, b]$ is a separation of $X$. The closures of the two sets with respect to the metric space $X$ do not intersect, even though their closures with respect to $\mathbb{R}$ do intersect. Pay attention to this phenomenon which is related to the Inheritance Principle.

**Example** Any subset $Y$ of the punctured interval is disconnected if it meets both $[a, c)$ and $(c, b)$. For $Y = ([a, c) \cap Y) \sqcup ((c, b] \cap Y)$ is a separation of $Y$.

**49 Theorem** The closure of a connected set is connected. More generally, if $S \subset M$ is connected and $S \subset T \subset \overline{S}$ then $T$ is connected.

**Proof** It is equivalent to show that if $T$ is disconnected then $S$ is disconnected. Disconnectedness of $T$ implies that

$$T = A \sqcup B$$

where $A, B$ are clopen and proper in $T$. It is natural to expect that

$$S = K \sqcup L$$

is a separation of $S$ where $K = A \cap S$ and $L = B \cap S$. The sets $K$ and $L$ are disjoint, their union is $S$, and by the Inheritance Principle they are clopen. But are they proper?

If $K = \emptyset$ then $A \subset S^c$. Since $A$ is proper there exists $p \in A$. Since $A$ is open in $T$, there exists a neighborhood $M_rp$ such that

$$T \cap M_rp \subset A \subset S^c.$$