(i) $A|B = \{r \in \mathbb{Q} : r < 1\} \mid \{r \in \mathbb{Q} : r \geq 1\}$.
(ii) $A|B = \{r \in \mathbb{Q} : r \leq 0 \text{ or } r^2 < 2\} \mid \{r \in \mathbb{Q} : r > 0 \text{ and } r^2 \geq 2\}$.

It is convenient to say that $A|B$ is a **rational cut** if it is like the cut in (i): For some fixed rational number $c$, $A$ is the set of all rationals $< c$ while $B$ is the rest of $\mathbb{Q}$. The $B$-set of a rational cut contains a smallest element $c$, and conversely, if $A|B$ is a cut in $\mathbb{Q}$ and $B$ contains a smallest element $c$ then $A|B$ is the rational cut at $c$. We write $c^*$ for the rational cut at $c$. This lets us think of $\mathbb{Q} \subset \mathbb{R}$ by identifying $c$ with $c^*$. It is like thinking of $\mathbb{Z}$ as a subset of $\mathbb{Q}$ since the integer $n$ in $\mathbb{Z}$ can be thought of as the fraction $n/1$ in $\mathbb{Q}$. In the same way the rational number $c$ in $\mathbb{Q}$ can be thought of as the cut at $c$. It is just a different way of looking at $c$. It is in this sense that we write

$$\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}.$$

There is an order relation $x \leq y$ on cuts that fairly cries out for attention.

**Definition** If $x = A|B$ and $y = C|D$ are cuts such that $A \subset C$ then $x$ is **less than or equal** to $y$ and we write $x \leq y$. If $A \subset C$ and $A \neq C$ then $x$ is **less than** $y$ and we write $x < y$.

The property distinguishing $\mathbb{R}$ from $\mathbb{Q}$ and which is at the bottom of every significant theorem about $\mathbb{R}$ involves upper bounds and least upper bounds or, equivalently, lower bounds and greatest lower bounds.

$M \in \mathbb{R}$ is an **upper bound** for a set $S \subset \mathbb{R}$ if each $s \in S$ satisfies

$$s \leq M.$$

We also say that the set $S$ is **bounded above** by $M$. An upper bound for $S$ that is less than all other upper bounds for $S$ is a **least upper bound** for $S$. The least upper bound for $S$ is denoted $l.u.b.(S)$. For example,

1. $3$ is an upper bound for the set of negative integers.
2. $-1$ is the least upper bound for the set of negative integers.
3. $1$ is the least upper bound for the set of rational numbers $1 - 1/n$ with $n \in \mathbb{N}$.
4. $-100$ is an upper bound for the empty set.

A least upper bound for $S$ may or may not belong to $S$. This is why you should say “least upper bound for $S$” rather than “least upper bound of $S$.”