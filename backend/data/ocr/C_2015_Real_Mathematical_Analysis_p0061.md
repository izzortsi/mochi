28. A **convex combination** of $w_1, \ldots, w_k \in \mathbb{R}^m$ is a vector sum

$$w = s_1w_1 + \cdots + s_kw_k$$

such that $s_1 + \cdots + s_k = 1$ and $0 \leq s_1, \ldots, s_k \leq 1$.

(a) Prove that if a set $E$ is convex then $E$ contains the convex combination of any finite number of points in $E$.

(b) Why is the converse obvious?

29. (a) Prove that the ellipsoid

$$E = \{(x, y, z) \in \mathbb{R}^3 : \frac{x^2}{a^2} + \frac{y^2}{b^2} + \frac{z^2}{c^2} \leq 1\}$$

is convex. [Hint: $E$ is the unit ball for a different dot product. What is it? Does the Cauchy-Schwarz inequality not apply to all dot products?]

(b) Prove that all boxes in $\mathbb{R}^m$ are convex.

30. A function $f : (a, b) \to \mathbb{R}$ is a **convex function** if for all $x, y \in (a, b)$ and all $s, t \in [0, 1]$ with $s + t = 1$ we have

$$f(sx + ty) \leq sf(x) + tf(y).$$

(a) Prove that $f$ is convex if and only if the set $S$ of points above its graph is convex in $\mathbb{R}^2$. The set $S$ is $\{(x, y) : f(x) \leq y\}$.

(b) Prove that every convex function is continuous.

(c) Suppose that $f$ is convex and $a < x < u < b$. The slope $\sigma$ of the line through $(x, f(x))$ and $(u, f(u))$ depends on $x$ and $u$, say $\sigma = \sigma(x, u)$. Prove that $\sigma$ increases when $x$ increases, and $\sigma$ increases when $u$ increases.

(d) Suppose that $f$ is second-order differentiable. That is, $f$ is differentiable and its derivative $f'$ is also differentiable. As is standard, we write $(f')' = f''$. Prove that $f$ is convex if and only if $f''(x) \geq 0$ for all $x \in (a, b)$.

(e) Formulate a definition of convexity for a function $f : M \to \mathbb{R}$ where $M \subset \mathbb{R}^m$ is a convex set. [Hint: Start with $m = 2$.]

*31. Suppose that a function $f : [a, b] \to \mathbb{R}$ is monotone nondecreasing. That is, $x_1 \leq x_2$ implies $f(x_1) \leq f(x_2)$.

(a) Prove that $f$ is continuous except at a countable set of points. [Hint: Show that at each $x \in (a, b)$, $f$ has **right limit** $f(x+)$ and a **left limit** $f(x-)$, which are limits of $f(x+h)$ as $h$ tends to 0 through positive and negative values respectively. The **jump** of $f$ at $x$ is $f(x+) - f(x-)$. Show that $f$ is continuous at $x$ if and only if it has zero jump at $x$. At how many points can $f$ have jump $\geq 1$? At how many points can the jump be between 1/2 and 1? Between 1/3 and 1/2?]

(b) Is the same assertion true for a monotone function defined on all of $\mathbb{R}$?

*32. Suppose that $E$ is a convex region in the plane bounded by a curve $C$.