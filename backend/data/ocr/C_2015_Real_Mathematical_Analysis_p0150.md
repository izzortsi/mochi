(d) If every nested decreasing sequence of nonempty closed subsets of $M$ has nonempty intersection then $M$ is compact.

Together with Theorems 63 and 65, (a)–(d) give seven equivalent definitions of compactness. [Hint: Reason contrapositively. If $M$ is not compact then it contains a sequence $(p_n)$ that has no convergent subsequence. It is fair to assume that the points $p_n$ are distinct. Find radii $r_n > 0$ such that the neighborhoods $M_{r_n}(p_n)$ are disjoint and no sequence $q_n \in M_{r_n}(p_n)$ has a convergent subsequence. Using the metric define a function $f_n : M_{r_n}(p_n) \to \mathbb{R}$ with a spike at $p_n$, such as

$$f_n(x) = \frac{r_n - d(x, p_n)}{a_n + d(x, p_n)}$$

where $a_n > 0$. Set $f(x) = f_n(x)$ if $x \in M_{r_n}(p_n)$, and $f(x) = 0$ if $x$ belongs to no $M_{r_n}(p_n)$. Show that $f$ is continuous. With the right choice of $a_n$ show that $f$ is unbounded. With a different choice of $a_n$, it is bounded but achieves no maximum, and so on.]

119. Let $M$ be a metric space of diameter $\leq 2$. The **cone** for $M$ is the set

$$C = C(M) = \{p_0\} \cup M \times (0, 1]$$

with the **cone metric**

$$\rho((p, s), (q, t)) = |s - t| + \min\{s, t\} d(p, q)$$

$$\rho((p, s), p_0) = s$$

$$\rho(p_0, p_0) = 0.$$

The point $p_0$ is the vertex of the cone. Prove that $\rho$ is a metric on $C$. [If $M$ is the unit circle, think of it in the plane $z = 1$ in $\mathbb{R}^3$ centered at the point $(0, 0, 1)$. Its cone is the 45-degree cone with vertex the origin.]

120. Recall that if for each embedding of $M$, $h : M \to N$, $hM$ is closed in $N$ then $M$ is said to be absolutely closed. If each $hM$ is bounded then $M$ is absolutely bounded. Theorem 41 implies that compact sets are absolutely closed and absolutely bounded. Prove:

(a) If $M$ is absolutely bounded then $M$ is compact.

*(b) If $M$ is absolutely closed then $M$ is compact.

Thus these are two more conditions equivalent to compactness. [Hint: From Exercise 118(a), if $M$ is noncompact there is a continuous function $f : M \to \mathbb{R}$ that is unbounded. For Exercise 120(a), show that $F(x) = (x, f(x))$ embeds $M$ onto a nonbounded subset of $M \times \mathbb{R}$. For 120(b), justify the additional assumption that the metric on $M$ is bounded by 2. Then use Exercise 118(b) to show that if $M$ is noncompact then there is a continuous function $g : M \to (0, 1]$ such that for some nonclustering sequence $(p_n)$, we have $g(p_n) \to 0$ as $n \to \infty$. Finally, show that $G(x) = (x, gx)$ embeds $M$ onto a nonclosed subset $S$ of the