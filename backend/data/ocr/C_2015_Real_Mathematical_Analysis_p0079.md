for each $k$; i.e., $q \in W = \bigcap U_k$, proving that $W$ is open.

(c) It is clear that $\emptyset$ and $M$ are open sets.

7 Corollary The intersection of any number of closed sets is a closed set; the finite union of closed sets is a closed set; $\emptyset$ and $M$ are closed sets.

Proof Take complements and use De Morgan’s laws. If $\{K_\alpha\}$ is a collection of closed sets then $U_\alpha = (K_\alpha)^c$ is open and

$$K = \bigcap K_\alpha = (\bigcup U_\alpha)^c.$$

Since $\bigcup U_\alpha$ is open, its complement $K$ is closed. Similarly, a finite union of closed sets is the complement of the finite intersection of their complements, and is a closed set.

What about an infinite union of closed sets? Generally, it is not closed. For example, the interval $[1/n, 1]$ is closed in $\mathbb{R}$, but the union of these intervals as $n$ ranges over $\mathbb{N}$ is the interval $(0, 1]$ which is not closed in $\mathbb{R}$. Neither is the infinite intersection of open sets open in general.

Two sets whose closedness/openness properties are basic are:

$$\lim S = \{p \in M : p \text{ is a limit of } S\}$$
$$M_r p = \{q \in M : d(p, q) < r\}.$$

The former is the **limit set** of $S$; the latter is the **r-neighborhood** of $p$.

8 Theorem $\lim S$ is a closed set and $M_r p$ is an open set.

Proof Simple but not immediate! See Figure 33.

Suppose that $p_n \to p$ and each $p_n$ lies in $\lim S$. We claim that $p \in \lim S$. Since $p_n$ is a limit of $S$ there is a sequence $(p_{n,k})_{k \in \mathbb{N}}$ in $S$ that converges to $p_n$ as $k \to \infty$. Thus there exists $q_n = p_{n,k(n)} \in S$ such that

$$d(p_n, q_n) < \frac{1}{n}.$$

Then, as $n \to \infty$ we have

$$d(p, q_n) \leq d(p, p_n) + d(p_n, q_n) \to 0$$

which implies that $q_n \to p$, so $p \in \lim S$, which completes the proof that $\lim S$ is a closed set.