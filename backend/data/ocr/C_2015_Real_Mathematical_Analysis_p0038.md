ordered $m$-tuples of integers. The integer lattice is also called the **integer grid**. See Figure 8.

A **box** is a Cartesian product of intervals

$$[a_1, b_1] \times \cdots \times [a_m, b_m]$$

in $\mathbb{R}^m$. (A box is also called a **rectangular parallelepiped.**) The **unit cube** in $\mathbb{R}^m$ is the box $[0, 1]^m = [0, 1] \times \cdots \times [0, 1].$ See Figure 9.

**Figure 9** A box and a cube

The **unit ball** and **unit sphere** in $\mathbb{R}^m$ are the sets

$$B^m = \{x \in \mathbb{R}^m : |x| \leq 1\}$$

$$S^{m-1} = \{x \in \mathbb{R}^m : |x| = 1\}.$$

The reason for the exponent $m-1$ is that the sphere is $(m-1)$-dimensional as an object in its own right although it does live in $m$-space. In 3-space, the surface of a ball is a two-dimensional film, the 2-sphere $S^2$. See Figure 10.

A set $E \subset \mathbb{R}^m$ is **convex** if for each pair of points $x, y \in E$, the straight line segment between $x$ and $y$ is also contained in $E$. The unit ball is an example of a convex set. To see this, take any two points in $B^m$ and draw the segment between them. It “obviously” lies in $B^m$. See Figure 11.

To give a mathematical proof, it is useful to describe the line segment between $x$ and $y$ with a formula. The straight line determined by distinct points $x, y \in \mathbb{R}^m$ is the set of all linear combinations $sx + ty$ where $s+t=1$, and the line segment is the set of these linear combinations where $s$ and $t$ are $\leq 1$. Such linear combinations