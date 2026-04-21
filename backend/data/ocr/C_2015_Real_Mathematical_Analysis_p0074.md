puncture, shred, or pulverize $M$ in the process. The basic questions to ask about metric spaces are:

(a) Given $M$ and $N$, are they homeomorphic?
(b) What are the continuous functions from $M$ to $N$?

A major goal of this chapter is to show you how to answer these questions in many cases. For example, is the circle homeomorphic to the interval? To the sphere? etc. Figure 30 indicates that the circle and the (perimeter of the) triangle are homeomorphic, while Figure 15 shows that $(a, b)$, the semicircle, and $\mathbb{R}$ are homeomorphic.

**Figure 30** The circle and triangle are homeomorphic.

A natural question that should occur to you is whether continuity of $f^{-1}$ is actually implied by continuity of a bijection $f$. It is not. Here is an instructive example.

Consider the interval $[0, 2\pi) = \{x \in \mathbb{R} : 0 \leq x < 2\pi\}$ and define $f : [0, 2\pi) \to S^1$ to be the mapping $f(x) = (\cos x, \sin x)$ where $S^1$ is the unit circle in the plane. The mapping $f$ is a continuous bijection, but the inverse bijection is not continuous. For there is a sequence of points $(z_n)$ on $S^1$ in the fourth quadrant that converges to $p = (1, 0)$ from below, and $f^{-1}(z_n)$ does not converge to $f^{-1}(p) = 0$. Rather it converges to $2\pi$. Thus, $f$ is a continuous bijection whose inverse bijection fails to be continuous. See Figure 31. In Exercises 49 and 50 you are asked to find worse examples of continuous bijections that are not homeomorphisms.

To build your intuition about continuous mappings and homeomorphisms, consider the following examples shown in Figure 32 – the unit circle in the plane, a trefoil knot in $\mathbb{R}^3$, the perimeter of a square, the surface of a donut (the 2-torus), the surface