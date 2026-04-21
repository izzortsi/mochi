Exercises

1. An ant walks on the floor, ceiling, and walls of a cubical room. What metric is natural for the ant’s view of its world? What metric would a spider consider natural? If the ant wants to walk from a point $p$ to a point $q$, how could it determine the shortest path?

2. Why is the sum metric on $\mathbb{R}^2$ called the Manhattan metric and the taxicab metric?

3. What is the set of points in $\mathbb{R}^3$ at distance exactly 1/2 from the unit circle $S^1$ in the plane,

$$T = \{ p \in \mathbb{R}^3 : \exists q \in S^1 \text{ and } d(p, q) = 1/2 \\
\text{and for all } q' \in S^1 \text{ we have } d(p, q) \leq d(p, q') \}$$?

4. Write out a proof that the discrete metric on a set $M$ is actually a metric.

5. For $p, q \in S^1$, the unit circle in the plane, let

$$d_a(p, q) = \min\{ |\angle(p) - \angle(q)|, 2\pi - |\angle(p) - \angle(q)| \}$$

where $\angle(z) \in [0, 2\pi)$ refers to the angle that $z$ makes with the positive $x$-axis. Use your geometric talent to prove that $d_a$ is a metric on $S^1$.

6. For $p, q \in [0, \pi/2)$ let

$$d_s(p, q) = \sin |p - q|.$$

Use your calculus talent to decide whether $d_s$ is a metric.

7. Prove that every convergent sequence $(p_n)$ in a metric space $M$ is bounded, i.e., that for some $r > 0$, some $q \in M$, and all $n \in \mathbb{N}$, we have $p_n \in M_r q$.

8. Consider a sequence $(x_n)$ in the metric space $\mathbb{R}$.

   (a) If $(x_n)$ converges in $\mathbb{R}$ prove that the sequence of absolute values $(|x_n|)$ converges in $\mathbb{R}$.

   (b) State the converse.

   (c) Prove or disprove it.

9. A sequence $(x_n)$ in $\mathbb{R}$ increases if $n < m$ implies $x_n \leq x_m$. It strictly increases if $n < m$ implies $x_n < x_m$. It decreases or strictly decreases if $n < m$ always implies $x_n \geq x_m$ or always implies $x_n > x_m$. A sequence is monotone if it increases or it decreases. Prove that every sequence in $\mathbb{R}$ which is monotone and bounded converges in $\mathbb{R}$.

10. Prove that the least upper bound property is equivalent to the “monotone sequence property” that every bounded monotone sequence converges.

†This is nicely expressed by Pierre Teilhard de Chardin, “Tout ce qui monte converge,” in a different context.