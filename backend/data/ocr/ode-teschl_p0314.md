$$\delta_{j_0}^{-1}(c)$$ for fixed $j_0$ and $c$ is open and so is $V = \{x | x_{j_0} \neq c\}$. Now let $x, y \in \Sigma_N$, if $x \neq y$ there is a $j_0$ such that $x_{j_0} \neq y_{j_0}$. Now take $c = x_{j_0}$ then $U$ and $V$ from above are disjoint open sets whose union is $\Sigma_N$ and which contain $x$ and $y$ respectively.

On $\Sigma_N$ we have the **shift map**

$$\sigma : \Sigma_N \rightarrow \Sigma_N$$
$$(x_0, x_1, \ldots) \mapsto (x_1, x_2, \ldots),$$

(11.29)

which is uniformly continuous since we have

$$d(\sigma(x), \sigma(y)) \leq Nd(x, y).$$

(11.30)

Furthermore, it is chaotic as we will prove now. Observe that a point $x$ is periodic for $\sigma$ if and only if it is a periodic sequence.

**Lemma 11.8.** The shift map has a countable number of periodic points which are dense.

**Proof.** Since a sequence satisfying $\sigma^n(x) = x$ is uniquely determined by its first $n$ coefficients, there are precisely $N^n$ solutions to this equation. Hence there are countably many periodic orbits. Moreover, if $x$ is given, we can define $x^n$ by taking the first $n$ coefficients of $x$ and then repeating them periodically. Then $x^n$ is a sequence of periodic points converging to $x$. Hence the periodic points are dense.

**Lemma 11.9.** The shift map has a dense forward orbit.

**Proof.** Construct a forward orbit as follows: Start with the values $0, \ldots, N-1$ as first coefficients. Now add all $N^2$ two digit combinations of $0, \ldots, N-1$. Next add all $N^3$ three digit combinations. Proceeding inductively we obtain a sequence $x$. For example for $N = 2$ we have to take $0, 1; 00, 01, 10, 11; \ldots$, that is, $x = (0, 1, 0, 0, 0, 1, 1, 0, 1, 1, \ldots)$. I claim that the orbit of $x$ is dense. In fact, let $y$ be given. The first $n$ coefficients of $y$ appear as a block somewhere in $x$ by construction. Hence shifting $x$ $k$ times until this block reaches the start, we have $d(y, \sigma^k(x)) \leq N^{-n}$. Hence the orbit is dense.

Combining the two lemmas we see that $(\Sigma_N, \sigma)$ is chaotic. I leave it as an exercise to show that $\sigma$ has sensitive dependence on initial conditions directly.

It turns out that, as we have already seen in the previous section, many dynamical systems (or at least some subsystem) can be shown to be topologically equivalent to the shift map. Hence it is the prototypical example of a chaotic map.

However sometimes it is also necessary to consider only certain subsets of $\Sigma_N$ since it might turn out that only certain transitions are admissible in