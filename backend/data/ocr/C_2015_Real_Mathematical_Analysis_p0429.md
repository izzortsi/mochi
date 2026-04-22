The multidimensional version of Cavalieri’s Principle yields similar multi-integral results. See Exercise 54.

When $f$ takes on both signs a little care must be taken to avoid subtracting $\infty$ from $\infty$.

44 Theorem If $f : \mathbb{R}^2 \to \mathbb{R}$ is integrable (the double integral of $f$ exists and is finite) then the iterated integrals exist and equal the double integral.

Proof Split $f$ into its positive and negative parts, $f = f_+ - f_-$, and apply the Fubini-Tonelli Theorem to each separately. Since the integrals are finite, subtraction is legal and the theorem follows for $f$.

See Exercise 53 for an example in which trouble arises if you forget to assume that the double integral is finite.

8 Vitali Coverings and Density Points

The fact that every open covering of a closed and bounded subset of Euclidean space reduces to a finite subcovering is certainly an important component of basic analysis. In this section we present another covering theorem, this time the accent being on disjointness of the sets in the subcovering rather than on finiteness. The result is used to differentiate Lebesgue integrals.

Definition A covering $\mathcal{V}$ of a set $A$ in a metric space $M$ is a Vitali covering if for each point $p \in A$ and each $r > 0$ there is $V \in \mathcal{V}$ such that $p \in V \subset M_r p$ and $V$ is not merely the singleton set $\{p\}$.

For example, if $A = [a, b]$, $M = \mathbb{R}$, and $\mathcal{V}$ consists of all intervals $[\alpha, \beta]$ with $\alpha \leq \beta$ and $\alpha, \beta \in \mathbb{Q}$ then $\mathcal{V}$ is a Vitali covering of $A$.

45 Vitali Covering Lemma A Vitali covering of a bounded set $A \subset \mathbb{R}^n$ by closed balls reduces to an efficient disjoint subcovering of almost all of $A$.

More precisely, given $\epsilon > 0$, $\mathcal{V}$ reduces to a countable subcollection $\{V_k\}$ such that

(a) The $V_k$ are disjoint.

(b) $mU \leq m^*A + \epsilon$, where $U = \bigsqcup_{k=1}^{\infty} V_k$.

(c) $A \setminus U$ is a zero set.