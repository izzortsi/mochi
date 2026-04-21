The intervals that comprise $C^3$ are specified by strings of length 3. For instance, $C_{220}$ is the left subinterval of $C_{22}$. In general an interval of $C^n$ is coded by an address string of $n$ symbols, each a 0 or a 2. Read it like a zip code. The first symbol gives the interval’s gross location (left or right), the second symbol refines the location, the third refines it more, and so on.

Imagine now an infinite address string $\omega = \omega_1\omega_2\omega_3 \ldots$ of zeros and twos. Corresponding to $\omega$, we form a nested sequence of intervals

$$C_{\omega_1} \supset C_{\omega_1\omega_2} \supset C_{\omega_1\omega_2\omega_3} \supset \cdots \supset C_{\omega_1\ldots\omega_n} \supset \ldots,$$

the intersection of which is a point $p = p(\omega) \in C$. Specifically,

$$p(\omega) = \bigcap_{n \in \mathbb{N}} C_{\omega|n}$$

where $\omega|n = \omega_1 \ldots \omega_n$ truncates $\omega$ to an address of length $n$. See Theorem 34.

As we have observed, each infinite address string defines a point in the Cantor set. Conversely, each point $p \in C$ has an address $\omega = \omega(p)$: its first $n$ symbols $\alpha = \omega|n$ are specified by the interval $C_\alpha$ of $C^n$ in which $p$ lies. A second point $q$ has a different address, since there is some $n$ for which $p$ and $q$ lie in distinct intervals $C_\alpha$ and $C_\beta$ of $C^n$.

In sum, the Cantor set is in one-to-one correspondence with the set $\Omega$ of addresses. Each address $\omega \in \Omega$ defines a point $p(\omega) \in C$ and each point $p \in C$ has a unique address $\omega(p)$. The set $\Omega$ is uncountable. In fact it corresponds bijectively to $\mathbb{R}$. See Exercise 112.

If $S \subset M$ and $\overline{S} = M$ then $S$ is dense in $M$. For example, $\mathbb{Q}$ is dense in $\mathbb{R}$. The set $S$ is somewhere dense if there exists an open nonempty set $U \subset M$ such that $\overline{S \cap U} \supset U$. If $S$ is not somewhere dense then it is nowhere dense.

**69 Theorem** The Cantor set contains no interval and is nowhere dense in $\mathbb{R}$.

**Proof** Suppose not and $C$ contains $(a,b)$. Then $(a,b) \subset C^n$ for all $n \in \mathbb{N}$. Take $n$ with $1/3^n < b - a$. Since $(a,b)$ is connected it lies wholly in a single $C^n$-interval, say $I$. But $I$ has smaller length than $(a,b)$, which is absurd, so $C$ contains no interval.

Next, suppose $C$ is dense in some nonempty open set $U \subset \mathbb{R}$, i.e., the closure of $C \cap U$ contains $U$. Thus

$$C = \overline{C} \supset \overline{C \cap U} \supset U \supset (a,b),$$

contrary to the fact that $C$ contains no interval.