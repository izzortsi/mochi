*109. A metric on $M$ is an **ultrametric** if for all $x, y, z \in M$ we have

$$d(x, z) \leq \max\{d(x, y), d(y, z)\}.$$

(Intuitively this means that the trip from $x$ to $z$ cannot be broken into shorter legs by making a stopover at some $y$.)
(a) Show that the ultrametric property implies the triangle inequality.
(b) In an ultrametric space show that “all triangles are isosceles.”
(c) Show that a metric space with an ultrametric is totally disconnected.
(d) Define a metric on the set $\Sigma$ of strings of zeroes and ones in Exercise 101 as

$$d_*(a, b) = \begin{cases} 
\frac{1}{2^n} & \text{if } n \text{ is the smallest index for which } a_n \neq b_n \\
0 & \text{if } a = b.
\end{cases}$$

Show that $d_*$ is an ultrametric and prove that the identity map is a homeomorphism $(\Sigma, d) \to (\Sigma, d_*)$.

*110. $\mathbb{Q}$ inherits the Euclidean metric from $\mathbb{R}$ but it also carries a very different metric, the **p-adic** metric. Given a prime number $p$ and an integer $n$, the $p$-adic norm of $n$ is

$$|n|_p = \frac{1}{p^k}$$

where $p^k$ is the largest power of $p$ that divides $n$. (The norm of 0 is by definition 0.) The more factors of $p$, the smaller the $p$-norm. Similarly, if $x = a/b$ is a fraction, we factor $x$ as

$$x = p^k \cdot \frac{r}{s}$$

where $p$ divides neither $r$ nor $s$, and we set

$$|x|_p = \frac{1}{p^k}.$$

The $p$-adic metric on $\mathbb{Q}$ is

$$d_p(x, y) = |x - y|_p.$$

(a) Prove that $d_p$ is a metric with respect to which $\mathbb{Q}$ is perfect – every point is a cluster point.
(b) Prove that $d_p$ is an ultrametric.
(c) Let $\mathbb{Q}_p$ be the metric space completion of $\mathbb{Q}$ with respect to the metric $d_p$, and observe that the extension of $d_p$ to $\mathbb{Q}_p$ remains an ultrametric. Infer from Exercise 109 that $\mathbb{Q}_p$ is totally disconnected.