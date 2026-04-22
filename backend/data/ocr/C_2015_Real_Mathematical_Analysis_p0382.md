28. Let $\beta : \mathbb{R}^n \times \cdots \times \mathbb{R}^n \to \mathbb{R}^m$ be $r$-linear. Define its “symmetrization” as

$$\text{symm}(\beta)(v_1, \ldots, v_r) = \frac{1}{r!} \sum_\pi \beta(v_{\pi(1)}, \ldots, v_{\pi(r)}),$$

where $\pi$ ranges through the set of permutations of $\{1, \ldots, r\}$.

(a) Prove that $\text{symm}(\beta)$ is symmetric.

(b) If $\beta$ is symmetric prove that $\text{symm}(\beta) = \beta$.

(c) Is the converse to (b) true?

(d) Prove that $\alpha = \beta - \text{symm}(\beta)$ is antisymmetric in the sense that if $\pi$ is any permutation of $\{1, \ldots, r\}$ then

$$\alpha(v_{\pi(1)}, \ldots, v_{\pi(r)}) = \text{sgn}(\pi)\alpha(v_1, \ldots, v_r).$$

Infer that $\mathcal{L}^r = \mathcal{L}_s^r \oplus \mathcal{L}_a^r$ where $\mathcal{L}_s^r$ and $\mathcal{L}_a^r$ are the subspaces of symmetric and antisymmetric $r$-linear transformations.

(e) Let $\beta \in \mathcal{L}^2(\mathbb{R}^2, \mathbb{R})$ be defined by

$$\beta((x, y), (x', y')) = xy'.$$

Express $\beta$ as the sum of a symmetric and an antisymmetric bilinear transformation.

*29. Prove Corollary 18 that $r^{\text{th}}$-order differentiability implies symmetry of $D^r f$, $r \geq 3$, in one of two ways.

(a) Use induction to show that $(D^r f)_p(v_1, \ldots, v_r)$ is symmetric with respect to permutations of $v_1, \ldots, v_{r-1}$ and of $v_2, \ldots, v_r$. Then take advantage of the fact that $r$ is strictly greater than 2.

(b) Define the signed sum $\Delta$ of $f$ at the vertices of the paralleletope $P$ spanned by $v_1, \ldots, v_r$, and show that it is the average of $D^r f$. Then proceed as in Exercise 27.

30. Consider the equation

(29) $$x e^y + y e^x = 0.$$

(a) Observe that there is no way to write down an explicit solution $y = y(x)$ of (29) in a neighborhood of the point $(x_0, y_0) = (0, 0)$.

(b) Why, nevertheless, does there exist a $C^\infty$ solution $y = y(x)$ of (29) near $(0, 0)$?

(c) What is its derivative at $x = 0$?

(d) What is its second derivative at $x = 0$?

(e) What does this tell you about the graph of the solution?

(f) Do you see the point of the Implicit Function Theorem better?

**31. Consider a function $f : U \to \mathbb{R}$ such that**