But $b^2 - 4ac \leq 0$ means that $4\langle x, y \rangle^2 - 4\langle x, x \rangle\langle y, y \rangle \leq 0$, i.e.,

$$\langle x, y \rangle^2 \leq \langle x, x \rangle\langle y, y \rangle.$$

Taking the square root of both sides gives $\langle x, y \rangle \leq \sqrt{\langle x, x \rangle}\sqrt{\langle y, y \rangle} = |x||y|$. (We use Exercise 17 here and below without further mention.)

The Cauchy-Schwarz inequality implies easily the **Triangle Inequality for vectors**: For all $x, y \in \mathbb{R}^m$ we have

$$|x + y| \leq |x| + |y|.$$

For $|x + y|^2 = \langle x + y, x + y \rangle = \langle x, x \rangle + 2\langle x, y \rangle + \langle y, y \rangle$. By Cauchy-Schwarz, $2\langle x, y \rangle \leq 2|x||y|$. Thus,

$$|x + y|^2 \leq |x|^2 + 2|x||y| + |y|^2 = (|x| + |y|)^2.$$

Taking the square root of both sides gives the result.

The **Euclidean distance** between vectors $x, y \in \mathbb{R}^m$ is defined as the length of their difference,

$$|x - y| = \sqrt{\langle x - y, x - y \rangle} = \sqrt{(x_1 - y_1)^2 + \ldots + (x_m - y_m)^2}.$$

From the Triangle Inequality for vectors follows the **Triangle Inequality for distance**. For all $x, y, z \in \mathbb{R}^m$ we have

$$|x - z| \leq |x - y| + |y - z|.$$

To prove it, think of $x - z$ as the vector sum $(x - y) + (y - z)$ and apply the Triangle Inequality for vectors. See Figure 7.

Geometric intuition in Euclidean space can carry you a long way in real analysis, especially in being able to forecast whether a given statement is true or not. Your geometric intuition will grow with experience and contemplation. We begin with some vocabulary.

In real analysis, vectors in $\mathbb{R}^m$ are referred to as points in $\mathbb{R}^m$. The $j^{\text{th}}$ coordinate of the point $(x_1, \ldots, x_m)$ is the number $x_j$ appearing in the $j^{\text{th}}$ position. The $j^{\text{th}}$ coordinate axis is the set of points $x \in \mathbb{R}^m$ whose $k^{\text{th}}$ coordinates are zero for all $k \neq j$. The origin of $\mathbb{R}^m$ is the zero vector, $(0, \ldots, 0)$. The **first orthant** of $\mathbb{R}^m$ is the set of points $x \in \mathbb{R}^m$ all of whose coordinates are nonnegative. When $m = 2$, the first orthant is the first quadrant. The **integer lattice** is the set $\mathbb{Z}^m \subset \mathbb{R}^m$ of