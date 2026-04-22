7. Consider a sequence of functions $f_n$ in $C^0$. The graph $G_n$ of $f_n$ is a compact subset of $\mathbb{R}^2$.

   (a) Prove that $(f_n)$ converges uniformly as $n \to \infty$ if and only if the sequence $(G_n)$ in $\mathcal{K}(\mathbb{R}^2)$ converges to the graph of a function $f \in C^0$. (The space $\mathcal{K}$ was discussed in Exercise 2.147.)
   (b) Formulate equicontinuity in terms of graphs.

8. Is the sequence of functions $f_n : \mathbb{R} \to \mathbb{R}$ defined by

$$f_n(x) = \cos(n + x) + \log(1 + \frac{1}{\sqrt{n + 2}} \sin^2(n^n x))$$

equicontinuous? Prove or disprove.

9. If $f : \mathbb{R} \to \mathbb{R}$ is continuous and the sequence $f_n(x) = f(nx)$ is equicontinuous, what can be said about $f$?

10. Give an example to show that a sequence of functions may be uniformly continuous, pointwise equicontinuous, but not uniformly equicontinuous, when their domain $M$ is noncompact.

11. If every sequence of pointwise equicontinuous functions $M \to \mathbb{R}$ is uniformly equicontinuous, does this imply that $M$ is compact?

12. Prove that if $\mathcal{E} \subset C_b^0(M, N)$ is equicontinuous then so is its closure.

13. Suppose that $(f_n)$ is a sequence of functions $\mathbb{R} \to \mathbb{R}$ and for each compact subset $K \subset \mathbb{R}$, the restricted sequence $(f_n|_K)$ is pointwise bounded and pointwise equicontinuous.

   (a) Does it follow that there is a subsequence of $(f_n)$ that converges pointwise to a continuous limit function $\mathbb{R} \to \mathbb{R}$?
   (b) What about uniform convergence?

14. Recall from Exercise 2.78 that a metric space $M$ is chain connected if for each $\epsilon > 0$ and each $p, q \in M$ there is a chain $p = p_0, \ldots, p_n = q$ in $M$ such that

$$d(p_{k-1}, p_k) < \epsilon \quad \text{for} \quad 1 \leq k \leq n.$$

A family $\mathcal{F}$ of functions $f : \mathbb{R} \to \mathbb{R}$ is bounded at $p \in M$ if the set $\{f(p) : f \in \mathcal{F}\}$ is bounded in $\mathbb{R}$.

Show that $M$ is chain connected if and only if pointwise boundedness of an equicontinuous family at one point of $M$ implies pointwise boundedness at every point of $M$.

15. A continuous, strictly increasing function $\mu : (0, \infty) \to (0, \infty)$ is a modulus of continuity if $\mu(s) \to 0$ as $s \to 0$. A function $f : [a, b] \to \mathbb{R}$ has modulus of continuity $\mu$ if $|f(s) - f(t)| \leq \mu(|s - t|)$ for all $s, t \in [a, b]$.

   (a) Prove that a function is uniformly continuous if and only if it has a modulus of continuity.
   (b) Prove that a family of functions is equicontinuous if and only if its members have a common modulus of continuity.