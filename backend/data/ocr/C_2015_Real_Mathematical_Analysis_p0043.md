A mapping is a **bijection** if it is both injective and surjective. It is one-to-one and onto. If $f : A \rightarrow B$ is a bijection then the inverse map $f^{-1} : B \rightarrow A$ is a bijection where $f^{-1}(b)$ is by definition the unique element $a \in A$ such that $f(a) = b$.

The **identity map** of any set to itself is the bijection that takes each $a \in A$ and sends it to itself, $\text{id}(a) = a$.

If $f : A \rightarrow B$ and $g : B \rightarrow C$ then the **composite** $g \circ f : A \rightarrow C$ is the function that sends $a \in A$ to $g(f(a)) \in C$. If $f$ and $g$ are injective then so is $g \circ f$, while if $f$ and $g$ are surjective then so is $g \circ f$.

In particular the composite of bijections is a bijection. If there is a bijection from $A$ onto $B$ then $A$ and $B$ are said to have **equal cardinality**,† and we write $A \sim B$. The relation $\sim$ is an equivalence relation. That is,

(a) $A \sim A$.
(b) $A \sim B$ implies $B \sim A$.
(c) $A \sim B \sim C$ implies $A \sim C$.

(a) follows from the fact that the identity map bijects $A$ to itself. (b) follows from the fact that the inverse of a bijection $A \rightarrow B$ is a bijection $B \rightarrow A$. (c) follows from the fact that the composite of bijections $f$ and $g$ is a bijection $g \circ f$.

A set $S$ is

**finite** if it is empty or for some $n \in \mathbb{N}$ we have $S \sim \{1, \ldots, n\}$.

**infinite** if it is not finite.

**denumerable** if $S \sim \mathbb{N}$.

**countable** if it is finite or denumerable.

**uncountable** if it is not countable.

†The word “cardinal” indicates the number of elements in the set. The cardinal numbers are $0, 1, 2, \ldots$. The first infinite cardinal number is **aleph null**, $\aleph_0$. One says the $\mathbb{N}$ has $\aleph_0$ elements. A mystery of math is the **Continuum Hypothesis** which states that $\mathbb{R}$ has cardinality $\aleph_1$, the second infinite cardinal. Equivalently, if $\mathbb{N} \subset S \subset \mathbb{R}$, the Continuum Hypothesis asserts that $S \sim \mathbb{R}$ or $S \sim \mathbb{R}$. No intermediate cardinalities exist. You can pursue this issue in Paul Cohen’s book, *Set Theory and the Continuum Hypothesis*.