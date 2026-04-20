Therefore the probability of the random point $\xi = (\xi_1, \xi_2)$ falling in the region $B$ is given by

$$\mathbf{P}\{(\xi_1, \xi_2) \in B\} = \iint_B \frac{dx_1 dx_2}{L^2} = \frac{2Ll - l^2}{L^2},$$

since $L^2 - 2 \cdot \frac{1}{2}(L - l)^2 = 2Ll - l^2$ is the area of $B$ (the square minus the two shaded triangles).

**Example 3 (Buffon’s needle problem).** Suppose a needle is tossed at random onto a plane ruled with parallel lines a distance $L$ apart, where by a “needle” we mean a line segment of length $l \leqslant L$. What is the probability of the needle intersecting one of the parallel lines?

**Solution.** Let $\xi_1$ be the angle between the needle and the direction of the rulings, and let $\xi_2$ be the distance between the bottom point of the needle and the nearest line above this point [see Figure 6(a)]. Then the conditions of the “needle tossing experiment” are such that the random variable $\xi_1$ is uniformly distributed in the interval $[0, \pi]$, while the random variable $\xi_2$ is uniformly distributed in the interval $[0, L]$. Hence, assuming that the random variables $\xi_1$ and $\xi_2$ are independent, we find that their joint probability density is

$$p_{\xi_1, \xi_2}(x_1, x_2) = \frac{1}{\pi L}, \quad 0 \leqslant x_1 \leqslant \pi, \quad 0 \leqslant x_2 \leqslant L.$$

The event consisting of the needle intersecting one of the rulings occurs if and only if

$$\xi_2 \leqslant l \sin \xi_1,$$

i.e., if and only if the corresponding point $\xi = (\xi_1, \xi_2)$ falls in the region $B$, where $B$ is the part of the rectangle $0 \leqslant x_1 \leqslant \pi, 0 \leqslant x_2 \leqslant L$ lying between the $x_1$-axis and the curve $x_2 = \sin x_1$ [$B$ is the unshaded region in Figure