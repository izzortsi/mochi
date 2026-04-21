16 Corollary The Cartesian product of denumerable sets $A$ and $B$ is denumerable.

Proof $\mathbb{N} \sim \mathbb{N} \times \mathbb{N} \sim A \times B$.

17 Theorem If $f : \mathbb{N} \rightarrow B$ is a surjection and $B$ is infinite then $B$ is denumerable.

Proof For each $b \in B$, the set $\{k \in \mathbb{N} : f(k) = b\}$ is nonempty and hence contains a smallest element; say $h(b) = k$ is the smallest integer that is sent to $b$ by $f$. Clearly, if $b, b' \in B$ and $b \neq b'$ then $h(b) \neq h(b')$. That is, $h : B \rightarrow \mathbb{N}$ is an injection which bijects $B$ to $hB \subset \mathbb{N}$. Since $B$ is infinite, so is $hB$. By Theorem 13, $hB$ is denumerable and therefore so is $B$.

18 Corollary The denumerable union of denumerable sets is denumerable.

Proof Suppose that $A_1, A_2, \ldots$ is a sequence of denumerable sets. List the elements of $A_i$ as $a_{i1}, a_{i2}, \ldots$ and define

$$f : \mathbb{N} \times \mathbb{N} \rightarrow A = \bigcup A_i$$

$(i, j) \mapsto a_{ij}$

Clearly $f$ is a surjection. According to Theorem 15, there is a bijection $g : \mathbb{N} \rightarrow \mathbb{N} \times \mathbb{N}$. The composite $f \circ g$ is a surjection $\mathbb{N} \rightarrow A$. Since $A$ is infinite, Theorem 17 implies it is denumerable.

19 Corollary $\mathbb{Q}$ is denumerable.

Proof $\mathbb{Q}$ is the denumerable union of the denumerable sets $A_q = \{p/q : p \in \mathbb{Z}\}$ as $q$ ranges over $\mathbb{N}$.

20 Corollary For each $m \in \mathbb{N}$ the set $\mathbb{Q}^m$ is denumerable.

Proof Apply the induction principle. If $m = 1$ then the previous corollary states that $\mathbb{Q}^1$ is denumerable. Knowing inductively that $\mathbb{Q}^{m-1}$ is denumerable and $\mathbb{Q}^m = \mathbb{Q}^{m-1} \times \mathbb{Q}$, the result follows from Corollary 16.

Combination laws for countable sets are similar to those for denumerable sets. As is easily checked,

Every subset of a countable set is countable.

A countable set that contains a denumerable subset is denumerable.

The Cartesian product of finitely many countable sets is countable.

The countable union of countable sets is countable.