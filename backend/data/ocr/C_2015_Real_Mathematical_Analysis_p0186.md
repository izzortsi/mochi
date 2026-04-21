These examples raise a natural question:

Exactly which functions are Riemann integrable?

To give an answer to the question, and for many other applications, the following concept is very useful. A set $Z \subset \mathbb{R}$ is a **zero set** if for each $\epsilon > 0$ there is a countable covering of $Z$ by open intervals $(a_i, b_i)$ such that

$$\sum_{i=1}^{\infty} b_i - a_i \leq \epsilon$$

The sum of the series is the **total length** of the covering. Think of zero sets as negligible. If a property holds for all points except those in a zero set then one says that the property holds **almost everywhere**, abbreviated “a.e.”

23 Riemann-Lebesgue Theorem A function $f: [a, b] \to \mathbb{R}$ is Riemann integrable if and only if it is bounded and its set of discontinuity points is a zero set.

The set $D$ of discontinuity points is exactly what its name implies,

$$D = \{x \in [a, b] : f \text{ is discontinuous at the point } x\}.$$

A function whose set of discontinuity points is a zero set is continuous almost everywhere. The Riemann-Lebesgue Theorem states that a function is Riemann integrable if and only if it is bounded and continuous almost everywhere.