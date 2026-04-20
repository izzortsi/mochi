Similarly, the points which are mapped to $\Lambda_1$ under one iteration are given by $(\frac{1}{\mu}\Lambda_1) \cup (1 - \frac{1}{\mu}\Lambda_1)$. Hence the corresponding set

$$\Lambda_2 = [0, \frac{1}{\mu^2}] \cup [\frac{1}{\mu} - \frac{1}{\mu^2}, \frac{1}{\mu}] \cup [1 - \frac{1}{\mu}, 1 - \frac{1}{\mu} + \frac{1}{\mu^2}] \cup [1 - \frac{1}{\mu^2}, 1]$$

has the property that points starting in this set stay in $[0,1]$ during two iterations. Proceeding inductively we obtain sets $\Lambda_n = (\frac{1}{\mu}\Lambda_{n-1}) \cup (1 - \frac{1}{\mu}\Lambda_{n-1})$ having the property that points starting in $\Lambda_n$ stay in $[0,1]$ for at least $n$ iterations. Moreover, each set $\Lambda_n$ consists of $2^n$ closed subintervals of length $\mu^{-n}$.

Now if we want to stay in $[0,1]$ we have to take the intersection of all these sets, that is, we define

$$\Lambda = \bigcap_{n \in \mathbb{N}} \Lambda_n \subset [0,1].$$

Since the sets $\Lambda_n$ form a nesting sequence of compact sets, the set $\Lambda$ is also compact and nonempty. By construction the set $\Lambda$ is invariant since we have

$$T_\mu(\Lambda) = \Lambda$$

and all points in the open set $\mathbb{R} \setminus \Lambda$ converge to $-\infty$.

Moreover, since the endpoints of the subintervals of $\Lambda_n$ are just given by $f^{-n}(\{0,1\})$, we see that these points are in $\Lambda$. Now the set $\Lambda$ has two more interesting properties. First of all it is **totally disconnected**, that is, it contains no open subintervals. In fact, this easily follows since its Lebesgue measure $|\Lambda| \leq \lim_{n \to \infty} |\Lambda_n| = \lim_{n \to \infty} (2/\mu)^n = 0$ vanishes. Secondly, it is **perfect**, that is, every point is an accumulation point. This is also not hard to see, since $x \in \Lambda$ implies that $x$ must lie in some subinterval of $\Lambda_n$ for every $n$. Since the endpoints of these subintervals are in $\Lambda$ (as noted earlier) and converge to $x$, the point $x$ is an accumulation point.

Compact sets which are totally disconnected and perfect are called **Cantor sets**. Hence we have proven,

**Lemma 11.4.** The set $\Lambda$ is a Cantor set.

This result is also not surprising since the construction very much reassembles the construction of the Cantor middle-thirds set you know from your calculus course. Moreover, we obtain precisely the Cantor middle-thirds set if we choose $\mu = 3$. Maybe you also recall, that this case can be conveniently described if one writes $x$ in the base three number system. Hence fix $\mu = 3$ and let us write

$$x = \sum_{n \in \mathbb{N}} \frac{x_n}{3^n}, \quad x_n \in \{0,1,2\}.$$

(11.20)