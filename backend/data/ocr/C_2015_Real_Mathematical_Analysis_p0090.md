4 Compactness

Compactness is the single most important concept in real analysis. It is what reduces the infinite to the finite.

**Definition** A subset $A$ of a metric space $M$ is (sequentially) compact if every sequence $(a_n)$ in $A$ has a subsequence $(a_{n_k})$ that converges to a limit in $A$.

The empty set and finite sets are trivial examples of compact sets. For a sequence $(a_n)$ contained in a finite set repeats a term infinitely often, and the corresponding constant subsequence converges.

Compactness is a good feature of a set. We will develop criteria to decide whether a set is compact. The first is the most often used, but beware! – its converse is generally false.

**26 Theorem** Every compact set is closed and bounded.

**Proof** Suppose that $A$ is a compact subset of the metric space $M$ and that $p$ is a limit of $A$. Does $p$ belong to $A$? There is a sequence $(a_n)$ in $A$ converging to $p$. By compactness, some subsequence $(a_{n_k})$ converges to some $q \in A$, but every subsequence of a convergent sequence converges to the same limit as does the mother sequence, so $q = p$ and $p \in A$. Thus $A$ is closed.

To see that $A$ is bounded, choose and fix any point $p \in M$. Either $A$ is bounded or else for each $n \in \mathbb{N}$ there is a point $a_n \in A$ such that $d(p, a_n) \geq n$. Compactness implies that some subsequence $(a_{n_k})$ converges. Convergent sequences are bounded, which contradicts the fact that $d(p, a_{n_k}) \to \infty$ as $k \to \infty$. Therefore $(a_n)$ cannot exist and for some large $r$ we have $A \subset M_r p$, which is what it means that $A$ is bounded.

**27 Theorem** The closed interval $[a, b] \subset \mathbb{R}$ is compact.

**Proof** Let $(x_n)$ be a sequence in $[a, b]$ and set

$$C = \{x \in [a, b] : x_n < x \text{ only finitely often}\}.$$

Equivalently, for all but finitely many $n$, $x_n \geq x$. Since $a \in C$ we know that $C \neq \emptyset$. Clearly $b$ is an upper bound for $C$. By the least upper bound property of $\mathbb{R}$ there exists $c = l. u. b. C$ with $c \in [a, b]$. We claim that a subsequence of $(x_n)$ converges to $c$. Suppose not, i.e., no subsequence of $(x_n)$ converges to $c$. Then for some $r > 0$, $x_n$ lies in $(c - r, c + r)$ only finitely often, which implies that $c + r \in C$, contrary to $c$ being an upper bound for $C$. Hence some subsequence of $(x_n)$ does converge to $c$ and $[a, b]$ is compact.