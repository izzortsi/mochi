Now we explain why the Lagrange multiplier method works. Recall that the gradient of a function $h(x, y, z)$ at $p \in U$ is the vector

$$\text{grad}_p h = \left( \frac{\partial h(p)}{\partial x}, \frac{\partial h(p)}{\partial y}, \frac{\partial h(p)}{\partial z} \right) \in \mathbb{R}^3.$$

Assume hypotheses (a), (b) and that $f|_S$ attains its maximum value $M$ at $p \in S$. We must prove (c) – the gradient of $f$ at $p$ is a scalar multiple of the gradient of $g$ at $p$. If $\text{grad}_p f = 0$ then $\text{grad}_p f = 0 \cdot \text{grad}_p g$, which verifies (c) degenerately. Thus it is fair to assume that $\text{grad}_p f \neq 0$.

By the Rank Theorem, in the neighborhood of a point at which the gradient of $f$ is nonzero, the $f$-level surfaces are like a stack of pancakes. (The pancakes are infinitely thin and may be somewhat curved. Alternatively, you can picture the level surfaces as layers of an onion skin or as a pile of transparency foils.)

To arrive at a contradiction, assume that $\text{grad}_p f$ is not a scalar multiple of $\text{grad}_p g$. The angle between the gradients is nonzero. Gaze at the $f$-level surfaces $f = M \pm \epsilon$ for $\epsilon$ small. The way these $f$-level surfaces meet the $g$-level surface $S$ is shown in Figure 116.

The surface $S$ is a knife blade that slices through the $f$-pancakes. The knife blade is perpendicular to $\text{grad} g$, while the pancakes are perpendicular to $\text{grad} f$. There is a positive angle between these gradient vectors, so the knife is not tangent to the pancakes. Rather, $S$ slices transversely through each $f$-level surface near $p$, and $S \cap \{f = M + \epsilon\}$ is a curve that passes near $p$. The value of $f$ on this curve is $M + \epsilon$, which contradicts the assumption that $f|_S$ attains a maximum at $p$. Therefore $\text{grad}_p f$ is, after all, a scalar multiple of $\text{grad}_p g$ and the proof of (c) is complete.

There is a higher-dimensional version of the Lagrange multiplier method. A $C^1$ function $f : U \to \mathbb{R}$ is defined on an open set $U \subset \mathbb{R}^n$, and it is constrained to a compact “surface” $S \subset U$ defined by $k$ simultaneous equations

$$g_1(x_1, \ldots, x_n) = c_1$$

$$\ldots$$

$$g_k(x_1, \ldots, x_n) = c_k.$$

We assume the functions $g_i$ are $C^1$ and their gradients are linearly independent. The higher-dimensional Lagrange multiplier method asserts that if $f|_S$ achieves a maximum at $p$ then $\text{grad}_p f$ is a linear combination of $\text{grad}_p g_1, \ldots, \text{grad}_p g_k$. In contrast to Protter and Morrey’s presentation on pages 369-372 of their book, $A$