the set $(0,1]$ is not covering compact in $\mathbb{R}$ because its covering

$$\mathcal{U} = \{(1/n, 2) : n \in \mathbb{N}\}$$

fails to reduce to a finite subcovering.

**63 Theorem** For a subset $A$ of a metric space $M$ the following are equivalent:

(a) $A$ is covering compact.
(b) $A$ is sequentially compact.

**Proof that (a) implies (b)** We assume $A$ is covering compact and prove it is sequentially compact. Suppose not. Then there is a sequence $(p_n)$ in $A$, no subsequence of which converges in $A$. Each point $a \in A$ therefore has some neighborhood $M_r a$ such that $p_n \in M_r a$ only finitely often. (The radius $r$ may depend on the point $a$.) The collection $\{M_r a : a \in A\}$ is an open covering of $A$ and by covering compactness it reduces to a finite subcovering

$$\{M_{r1}(a_1), M_{r2}(a_2), \ldots, M_{rk}(a_k)\}$$

of $A$. Since $p_n$ appears in each of these finitely many neighborhoods $M_{r_i}(a_i)$ only finitely often, it follows from the pigeonhole principle that $(p_n)$ has only finitely many terms, a contradiction. Thus $(p_n)$ cannot exist, and $A$ is sequentially compact.

The following presentation of the proof that (b) implies (a) appears in Royden’s book, *Real Analysis*. A Lebesgue number for a covering $\mathcal{U}$ of $A$ is a positive real number $\lambda$ such that for each $a \in A$ there is some $U \in \mathcal{U}$ with $M_\lambda a \subset U$. Of course, the choice of this $U$ depends on $a$. It is crucial, however, that the Lebesgue number $\lambda$ is independent of $a \in A$.

The idea of a Lebesgue number is that we know each point $a \in A$ is contained in some $U \in \mathcal{U}$, and if $\lambda$ is extremely small then $M_\lambda a$ is just a slightly swollen point – so the same should be true for it too. No matter where in $A$ the neighborhood $M_\lambda a$ is placed, it should lie wholly in some member of the covering. See Figure 47.

If $A$ is noncompact then it may have open coverings with no positive Lebesgue number. For example, let $A = (0,1) \subset \mathbb{R} = M$. The singleton collection $\{A\}$ is an open covering of $A$, but there is no $\lambda > 0$ such that for every $a \in A$ we have $(a - \lambda, a + \lambda) \subset A$. See Exercise 86.

**64 Lebesgue Number Lemma** Every open covering of a sequentially compact set has a Lebesgue number $\lambda > 0$.