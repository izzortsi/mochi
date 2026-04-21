*101. Let $\Sigma$ be the set of all infinite sequences of zeroes and ones. For example, $(100111000011111 \ldots) \in \Sigma$. Define the metric

$$d(a, b) = \sum \frac{|a_n - b_n|}{2^n}$$

where $a = (a_n)$ and $b = (b_n)$ are points in $\Sigma$.

(a) Prove that $\Sigma$ is compact.
(b) Prove that $\Sigma$ is homeomorphic to the Cantor set.

102. Prove that no Peano curve is one-to-one. (Recall that a Peano curve is a continuous map $f : [0, 1] \to \mathbb{R}^2$ whose image has a nonempty interior.)

103. Prove that there is a continuous surjection $\mathbb{R} \to \mathbb{R}^2$. What about $\mathbb{R}^m$?

104. Find two nonhomeomorphic compact subsets of $\mathbb{R}$ whose complements are homeomorphic.

105. As on page 115, consider the subsets of $\mathbb{R}$,

$$A = \{0\} \cup [1, 2] \cup \{3\} \quad \text{and} \quad B = \{0\} \cup \{1\} \cup [2, 3].$$

(a) Why is there no ambient homeomorphism of $\mathbb{R}$ to itself that carries $A$ onto $B$?
(b) Thinking of $\mathbb{R}$ as the $x$-axis, is there an ambient homeomorphism of $\mathbb{R}^2$ to itself that carries $A$ onto $B$?

106. Prove that the completion of a metric space is unique in the following natural sense: A completion of a metric space $M$ is a complete metric $X$ space containing $M$ as a metric subspace such that $M$ is dense in $X$. That is, every point of $X$ is a limit of $M$.

(a) Prove that $M$ is dense in the completion $\widehat{M}$ constructed in the proof of Theorem 80.
(b) If $X$ and $X'$ are two completions of $M$ prove that there is an isometry $i : X \to X'$ such that $i(p) = p$ for all $p \in M$.
(c) Prove that $i$ is the unique such isometry.
(d) Infer that $\widehat{M}$ is unique.

107. If $M$ is a metric subspace of a complete metric space $S$ prove that $\overline{M}$ is a completion of $M$.

*108. Consider the identity map $id : C_{\max} \to C_{\int}$ where $C_{\max}$ is the metric space $C([0, 1], \mathbb{R})$ of continuous real-valued functions defined on $[0, 1]$, equipped with the max-metric $d_{\max}(f, g) = \max |f(x) - g(x)|$, and $C_{\int}$ is $C([0, 1], \mathbb{R})$ equipped with the integral metric,

$$d_{\int}(f, g) = \int_0^1 |f(x) - g(x)| \, dx.$$

Show that $id$ is a continuous linear bijection (an isomorphism) but its inverse is not continuous.