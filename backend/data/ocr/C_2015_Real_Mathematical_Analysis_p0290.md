(c) $|v + w| \leq |v| + |w|$.

(Note the abuse of notation in (b); $|\lambda|$ is the magnitude of the scalar $\lambda$ and $|v|$ is the norm of the vector $v$.) Norms are used to make vector estimates, and vector estimates underlie multivariable calculus.

A vector space with a norm is a **normed space**. Its norm gives rise to a metric as

$$d(v, v') = |v - v'|.$$

Thus a normed space is a special kind of metric space.

If $V, W$ are normed spaces then the **operator norm** of a linear transformation $T : V \to W$ is

$$\|T\| = \sup \left\{ \frac{|Tv|_W}{|v|_V} : v \neq 0 \right\}.$$

The operator norm of $T$ is the **maximum stretch** that $T$ imparts to vectors in $V$. The subscript on the norm indicates the space in question, which for simplicity is often suppressed.$^\dagger$

The composition of linear transformations obeys the norm inequality

$$\|T \circ S\| \leq \|T\| \|S\|$$

where $S : U \to V$ and $T : V \to W$. Thinking in terms of stretch, the inequality is clear: $S$ stretches a vector $u \in U$ by at most $\|S\|$, and $T$ stretches $S(u)$ by at most $\|T\|$. The net effect on $u$ is a stretch of at most $\|T\| \|S\|$.

**2 Theorem** Let $T : V \to W$ be a linear transformation from one normed space to another. The following are equivalent:

(a) $\|T\| < \infty$.

(b) $T$ is uniformly continuous.

(c) $T$ is continuous.

(d) $T$ is continuous at the origin.

**Proof** Assume (a), $\|T\| < \infty$. For all $v, v' \in V$, linearity of $T$ implies that

$$|Tv - Tv'| \leq \|T\| \left|v - v'\right|,$$

which gives (b), uniform continuity. Clearly (b) implies (c) implies (d).

$^\dagger$If $\|T\|$ is finite then $T$ is said to be a **bounded linear transformation**. Unfortunately, this terminology conflicts with $T$ being bounded as a mapping from the metric space $V$ to the metric space $W$. The only linear transformation that is bounded in the latter sense is the zero transformation.