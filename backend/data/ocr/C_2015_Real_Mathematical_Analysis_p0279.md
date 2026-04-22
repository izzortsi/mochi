bump function.]

(b) Infer that there are many Taylor series with radius of convergence $R = 0$.

(c) Construct a smooth function whose Taylor series at every $x$ has radius of convergence $R = 0$. [Hint: Try $\sum \beta_k(x)e(x + q_k)$ where $\{q_1, q_2, \ldots\} = \mathbb{Q}$.]

*38. Suppose that $T \subset (a, b)$ clusters at some point of $(a, b)$ and that $f, g : (a, b) \to \mathbb{R}$ are analytic. Assume that for all $t \in T$ we have $f(t) = g(t)$.

(a) Prove that $f = g$ everywhere in $(a, b)$.

(b) What if $f$ and $g$ are only $C^\infty$?

(c) What if $T$ is an infinite set but its only cluster points are $a$ and $b$?

**(d) Find a necessary and sufficient condition for a subset $Z \subset (a, b)$ to be the zero locus of an analytic function $f$ defined on $(a, b)$, $Z = \{x \in (a, b) : f(x) = 0\}$. [Hint: Think Taylor. The result in (a) is known as the Identity Theorem. It states that if an equality between analytic functions is known to hold for points of $T$ then it is an “identity,” an equality that holds everywhere.]

39. Let $M$ be any metric space with metric $d$. Fix a point $p \in M$ and for each $q \in M$ define the function $f_q(x) = d(q, x) - d(p, x)$.

(a) Prove that $f_q$ is a bounded, continuous function of $x \in M$, and that the map $q \mapsto f_q$ sends $M$ isometrically onto a subset $M_0$ of $C^0_b(M, \mathbb{R})$.

(b) Since $C^0_b(M, \mathbb{R})$ is complete, infer that an isometric copy of $M$ is dense in a complete metric space, namely the closure of $M_0$, and hence that we have a second proof of the Completion Theorem 2.80.

40. As explained in Section 8, a metric space $M$ is $\sigma$-compact if it is the countable union of compact subsets, $M = \bigcup M_i$.

(a) Why is it equivalent to require that $M$ is the monotone union of compact subsets,

$$M = \bigcup M_i$$

i.e., $M_1 \subset M_2 \subset \ldots$?

(b) Prove that a $\sigma$-compact metric space is separable.

(c) Prove that $\mathbb{Z}, \mathbb{Q}, \mathbb{R}, \mathbb{R}^m$ are $\sigma$-compact.

**(d) Prove that $C^0$ is not $\sigma$-compact. [Hint: Think Baire.]

**(e) If $M = \bigcup \text{int}(M_i)$ and each $M_i$ is compact, $M$ is $\sigma^*$-compact. Prove that $M$ is $\sigma^*$-compact if and only if it is separable and locally compact. Infer that $\mathbb{Z}, \mathbb{R}$, and $\mathbb{R}^m$ are $\sigma^*$-compact but $\mathbb{Q}$ is not.

(f) Assume that $M$ is $\sigma^*$-compact, $M = \bigcup \text{int}(M_i)$, with each $M_i$ compact. Prove that this monotone union “engulfs” all compacts in $M$, in the sense that if $A \subset M$ is compact, then for some $i$, $A \subset M_i$.

(g) If $M = \bigcup M_i$ and each $M_i$ is compact show by example that this engulfing property may fail, even when $M$ itself is compact.

**(h) Prove or disprove that a complete $\sigma$-compact metric space is $\sigma^*$-compact.**