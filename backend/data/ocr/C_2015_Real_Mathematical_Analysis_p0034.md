3 Euclidean Space

Given sets $A$ and $B$, the Cartesian product of $A$ and $B$ is the set $A \times B$ of all ordered pairs $(a, b)$ such that $a \in A$ and $b \in B$. (The name comes from Descartes who pioneered the idea of the $xy$-coordinate system in geometry.) See Figure 5.

**Figure 5** The Cartesian product $A \times B$

The Cartesian product of $\mathbb{R}$ with itself $m$ times is denoted $\mathbb{R}^m$. Elements of $\mathbb{R}^m$ are vectors, ordered $m$-tuples of real numbers $(x_1, \ldots, x_m)$. In this terminology real numbers are called scalars and $\mathbb{R}$ is called the scalar field. When vectors are added, subtracted, and multiplied by scalars according to the rules

$$(x_1, \ldots, x_m) + (y_1, \ldots, y_m) = (x_1 + y_1, \ldots, x_m + y_m)$$
$$(x_1, \ldots, x_m) - (y_1, \ldots, y_m) = (x_1 - y_1, \ldots, x_m - y_m)$$
$$c(x_1, \ldots, x_m) = (cx_1, \ldots, cx_m)$$

then these operations obey the natural laws of linear algebra: commutativity, associativity, etc. There is another operation defined on $\mathbb{R}^m$, the **dot product** (also called the scalar product or inner product). The dot product of $x = (x_1, \ldots, x_m)$ and $y = (y_1, \ldots, y_m)$ is

$$\langle x, y \rangle = x_1y_1 + \ldots + x_my_m.$$

Remember: the dot product of two vectors is a scalar, not a vector. The dot product operation is bilinear, symmetric, and positive definite; i.e., for any vectors $x, y, z \in \mathbb{R}^m$