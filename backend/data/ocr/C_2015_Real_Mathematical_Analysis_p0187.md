Examples of zero sets are

(a) Every subset of a zero set.
(b) Every finite set.
(c) Every countable union of zero sets.
(d) Every countable set.
(e) The middle-thirds Cantor set.

(a) is clear. For if $Z_0 \subset Z$ where $Z$ is a zero set, and if $\epsilon > 0$ is given, then there is some open covering of $Z$ by intervals whose total length is $\leq \epsilon$; but the same collection of intervals covers $Z_0$, which shows that $Z_0$ is also a zero set.

(b) Let $Z = \{z_1, \ldots, z_n\}$ be a finite set and let $\epsilon > 0$ be given. The intervals $(z_i - \epsilon/2n, z_i + \epsilon/2n)$, for $i = 1, \ldots, n$, cover $Z$ and have total length $\epsilon$. Therefore $Z$ is a zero set. In particular, the empty set and any single point are zero sets.

(c) This is a typical “$\epsilon/2^n$-argument.” Let $Z_1, Z_2, \ldots$ be a sequence of zero sets and $Z = \bigcup Z_j$. We claim that $Z$ is a zero set. Let $\epsilon > 0$ be given. The set $Z_1$ can be covered by countably many intervals $(a_{i1}, b_{i1})$ with total length $\sum(b_{i1} - a_{i1}) \leq \epsilon/2$. The set $Z_2$ can be covered by countably many intervals $(a_{i2}, b_{i2})$ with total length $\sum(b_{i2} - a_{i2}) \leq \epsilon/4$. In general, the set $Z_j$ can be covered by countably many intervals $(a_{ij}, b_{ij})$ with total length

$$\sum_{i=1}^{\infty} (b_{ij} - a_{ij}) \leq \frac{\epsilon}{2^j}.$$

Since the countable union of countable sets is countable, the collection of all the intervals $(a_{ij}, b_{ij})$ is a countable covering of $Z$ by open intervals, and the total length of all these intervals is

$$\sum_{j=1}^{\infty} \left( \sum_{i=1}^{\infty} b_{ij} - a_{ij} \right) \leq \sum_{j=1}^{\infty} \frac{\epsilon}{2^j} = \frac{\epsilon}{2} + \frac{\epsilon}{4} + \frac{\epsilon}{8} + \ldots = \epsilon.$$

Thus $Z$ is a zero set and (c) is proved.

(d) This is implied by (b) and (c).

(e) Let $\epsilon > 0$ be given and choose $n \in \mathbb{N}$ such that $2^n/3^n < \epsilon$. The middle-thirds Cantor set $C$ is contained inside $2^n$ closed intervals of length $1/3^n$, say $I_1, \ldots, I_{2^n}$. Enlarge each closed interval $I_i$ to an open interval $(a_i, b_i) \supset I_i$ such that $b_i - a_i = \epsilon/2^n$. (Since $1/3^n < \epsilon/2^n$, and $I_i$ has length $1/3^n$, this is possible.) The total length of these $2^n$ intervals $(a_i, b_i)$ is $\epsilon$. Thus $C$ is a zero set.

It is nontrivial to prove that intervals are not zero sets. See Exercise 29.