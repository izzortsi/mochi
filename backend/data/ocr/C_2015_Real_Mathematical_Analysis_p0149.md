(b) Compare this surjection to the one constructed from the bisection divisions in Exercise 113.

115. Rotate the unit circle $S^1$ by a fixed angle $\alpha$, say $R : S^1 \rightarrow S^1$. (In polar coordinates, the transformation $R$ sends $(1, \theta)$ to $(1, \theta + \alpha)$.)

(a) If $\alpha/\pi$ is rational, show that each orbit of $R$ is a finite set.

*(b) If $\alpha/\pi$ is irrational, show that each orbit is infinite and has closure equal to $S^1$.

116. A metric space $M$ with metric $d$ can always be remetrized so the metric becomes bounded. Simply define the **bounded metric**

$$\rho(p, q) = \frac{d(p, q)}{1 + d(p, q)}$$

(a) Prove that $\rho$ is a metric. Why is it obviously bounded?

(b) Prove that the identity map $M \rightarrow M$ is a homeomorphism from $M$ with the $d$-metric to $M$ with the $\rho$-metric.

(c) Infer that boundedness of $M$ is not a topological property.

(d) Find homeomorphic metric spaces, one bounded and the other not.

117. Fold a piece of paper in half.

(a) Is this a continuous transformation of one rectangle into another?

(b) Is it injective?

(c) Draw an open set in the target rectangle, and find its preimage in the original rectangle. Is it open?

(d) What if the open set meets the crease?

The **baker’s transformation** is a similar mapping. A rectangle of dough is stretched to twice its length and then folded back on itself. Is the transformation continuous? A formula for the baker’s transformation in one variable is $f(x) = 1 - |1 - 2x|$. The $n$th **iterate** of $f$ is $f^n = f \circ f \circ \ldots \circ f$, $n$ times. The **orbit** of a point $x$ is

$$\{x, f(x), f^2(x), \ldots, f^n(x), \ldots\}.$$

[For clearer but more awkward notation one can write $f^{\circ n}$ instead of $f^n$. This distinguishes composition $f \circ f$ from multiplication $f \cdot f$.]

(e) If $x$ is rational prove that the orbit of $x$ is a finite set.

(f) If $x$ is irrational what is the orbit?

*118. The implications of compactness are frequently equivalent to it. Prove

(a) If every continuous function $f : M \rightarrow \mathbb{R}$ is bounded then $M$ is compact.

(b) If every continuous bounded function $f : M \rightarrow \mathbb{R}$ achieves a maximum or minimum then $M$ is compact.

(c) If every continuous function $f : M \rightarrow \mathbb{R}$ has compact range $fM$ then $M$ is compact.