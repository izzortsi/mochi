6* Lagrange Multipliers

In sophomore calculus you learn how to maximize a function $f(x, y, z)$ subject to a “constraint” or “side condition” $g(x, y, z) = \text{constant}$ by the Lagrange multiplier method. Namely, the maximum can occur only at a point $p$ where the gradient of $f$ is a scalar multiple of the gradient of $g$,

$$\text{grad}_p f = \lambda \text{grad}_p g.$$

The factor $\lambda$ is the Lagrange multiplier. The goal of this section is a natural, mathematically complete explanation of the Lagrange multiplier method which amounts to gazing at the right picture.

First, the natural hypotheses are

(a) $f$ and $g$ are $C^1$ real-valued functions defined on some region $U \subset \mathbb{R}^3$.

(b) For some constant $c$, the set $S = g^{\text{pre}}(c)$ is compact, nonempty, and $\text{grad}_q g \neq 0$ for all $q \in S$.

The conclusion is

(c) The restriction of $f$ to the set $S$, $f|_S$, has a maximum, say $M$, and if $p \in S$ has $f(p) = M$ then there is a $\lambda$ such that $\text{grad}_p f = \lambda \text{grad}_p g$.

The method is utilized as follows. You are given$^\dagger$ $f$ and $g$, and you are asked to find a point $p \in S$ at which $f|_S$ is maximum. Compactness implies that a maximum point exists. Your job is to find it. You first locate all points $q \in S$ at which the gradients of $f$ and $g$ are linearly dependent; i.e., one gradient is a scalar multiple of the other. They are “candidates” for the maximum point. You then evaluate $f$ at each candidate and the one with the largest $f$-value is the maximum. Done.

Of course you can find the minimum the same way. It too will be among the candidates, and it will have the smallest $f$-value. In fact, the candidates are exactly the critical points of $f|_S$, the points $x \in S$ such that

$$\frac{fy - fx}{|y - x|} \to 0$$

as $y \in S$ tends to $x$.

$^\dagger$Sometimes you are merely given $f$ and $S$. Then you must think up an appropriate $g$ such that (b) is true.