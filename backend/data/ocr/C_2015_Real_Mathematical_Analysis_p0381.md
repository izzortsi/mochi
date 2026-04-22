23. Assume that $f : [a, b] \times Y \to \mathbb{R}^m$ is continuous, $Y$ is an open subset of $\mathbb{R}^n$, the partial derivatives $\partial f_i(x, y)/\partial y_j$ exist, and they are continuous. Let $D_y f$ be the linear transformation $\mathbb{R}^n \to \mathbb{R}^m$ which is represented by the $m \times n$ matrix of partials.

(a) Show that

$$F(y) = \int_a^b f(x, y) \, dx$$

is of class $C^1$ and

$$(DF)_y = \int_a^b (D_y f) \, dx.$$

This generalizes Theorem 14 to higher dimensions.

(b) Generalize (a) to higher-order differentiability.

24. Show that all second partial derivatives of the function $f : \mathbb{R}^2 \to \mathbb{R}$ defined by

$$f(x, y) = \begin{cases} 
\frac{xy(x^2 - y^2)}{x^2 + y^2} & \text{if } (x, y) \neq (0, 0) \\
0 & \text{if } (x, y) = (0, 0)
\end{cases}$$

exist everywhere, but the mixed second partials are unequal at the origin, $\partial^2 f(0, 0)/\partial x \partial y \neq \partial^2 f(0, 0)/\partial y \partial x$.

*25. Construct an example of a $C^1$ function $f : \mathbb{R} \to \mathbb{R}$ that is second-differentiable only at the origin. (Infer that this phenomenon occurs also in higher dimensions.)

26. Suppose that $u \mapsto \beta_u$ is a continuous function from $U \subset \mathbb{R}^n$ into $\mathcal{L}(\mathbb{R}^m, \mathbb{R}^m)$.

(a) If for all $u \in U$, $\beta_u$ is symmetric, prove that its average over each $W \subset U$ is symmetric.

(b) Conversely, prove that if the average over all small two-dimensional parallelograms in $U$ is symmetric then $\beta_u$ is symmetric for all $u \in U$. (That is, if for some $p \in U$, $\beta_p$ is not symmetric, prove that its average over some small two-dimensional parallelogram at $p$ is also not symmetric.)

(c) Generalize (a) and (b) by replacing $\mathcal{L}$ with a finite-dimensional space $E$, and the subset of symmetric bilinear maps with a linear subspace of $E$: The average values of a continuous function always lie in the subspace if and only if the values do.

*27. Assume that $f : U \to \mathbb{R}^m$ is of class $C^2$ and show that $D^2 f$ is symmetric by the following integral method. With reference to the signed sum $\Delta$ of $f$ at the vertices of the parallelogram $P$ in Figure 109, use the $C^1$ Mean Value Theorem to show that

$$\Delta = \left( \int_0^1 \int_0^1 (D^2 f)_{p+sv+tw} \, dsdt \right)(v, w).$$

Infer symmetry of $(D^2 f)_p$ from symmetry of $\Delta$ and Exercise 26.