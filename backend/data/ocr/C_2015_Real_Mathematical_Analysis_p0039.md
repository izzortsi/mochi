Figure 10 A 2-disc $B^2$ with its boundary circle, and a 2-sphere $S^2$ with its equator

Figure 11 Convexity of the ball

$sx + ty$ with $s + t = 1$ and $0 \leq s, t \leq 1$ are called convex combinations. The line segment is denoted as $[x, y]$. (This notation is consistent with the interval notation $[a, b]$. See Exercise 27.) Now if $x, y \in B^m$ and $sx + ty = z$ is a convex combination of $x$ and $y$ then, using the Cauchy-Schwarz Inequality and the fact that $2st \geq 0$, we get

$$\langle z, z \rangle = s^2 \langle x, x \rangle + 2st \langle x, y \rangle + t^2 \langle y, y \rangle$$
$$\leq s^2 |x|^2 + 2st |x||y| + t^2 |y|^2$$
$$\leq s^2 + 2st + t^2 = (s + t)^2 = 1.$$

Taking the square root of both sides gives $|z| \leq 1$, which proves convexity of the ball.