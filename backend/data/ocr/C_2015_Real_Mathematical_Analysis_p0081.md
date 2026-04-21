To check that $M_rp$ is an open set, take any $q \in M_rp$ and observe that

$$s = r - d(p, q) > 0.$$

By the triangle inequality, if $d(q, x) < s$ then

$$d(p, x) \leq d(p, q) + d(q, x) < r,$$

and hence $M_sq \subset M_rp$. See Figure 34. Since each $q \in M_rp$ has some $M_sq$ that is contained in $M_rp$, $M_rp$ is an open set. $\square$

**9 Corollary** The interval $(a, b)$ is open in $\mathbb{R}$ and so are $(-\infty, b), (a, \infty),$ and $(-\infty, \infty)$. The interval $[a, b]$ is closed in $\mathbb{R}$.

**Proof** $(a, b)$ is the $r$-neighborhood of its midpoint $m = (a+b)/2$ where $r = (b-a)/2$. Therefore $(a, b)$ is open in $\mathbb{R}$. Since the union of open sets is open we see that

$$\bigcup_{n \in \mathbb{N}} (b-n, b-1/n) = (-\infty, b)$$

is open. The same applies to $(a, \infty)$. The whole metric space $\mathbb{R} = (-\infty, \infty)$ is always open in itself.

Since the complement of $[a, b]$ is the open set $(-\infty, a) \cup (b, \infty)$, the interval $[a, b]$ is closed. $\square$

**10 Corollary** $\lim S$ is the “smallest” closed set that contains $S$ in the sense that if $K \supset S$ and $K$ is closed then $K \supset \lim S$.

**Proof** Obvious. $K$ must contain the limit of each sequence in $K$ that converges in $M$ and therefore it must contain the limit of each sequence in $S \subset K$ that converges in $M$. These limits are exactly $\lim S$. $\square$

We refer to $\lim S$ as the **closure** of $S$ and denote it also as $\overline{S}$. You start with $S$ and make it closed by adding all its limits. You don’t need to add any more points because limits of limits are limits. That is, $\lim(\lim S) = \lim S$. An operation like this is called **idempotent**. Doing the operation twice produces the same outcome as doing it once.

A **neighborhood** of a point $p$ in $M$ is any open set $V$ that contains $p$. Theorem 8 implies that $V = M_rp$ is a neighborhood of $p$. Eventually, you will run across the phrase “closed neighborhood” of $p$, which refers to a closed set that contains an open set that contains $p$. However, until further notice all neighborhoods are open.