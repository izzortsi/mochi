density

$$p_{\xi}(x) = \begin{cases} \frac{1}{b-a} & \text{if } a < x < b, \\ 0 & \text{if } x < a \text{ or } x > b. \end{cases}$$

Such a random variable is said to have a uniform distribution.

**Example 2.** Suppose two points $\xi_1$ and $\xi_2$ are tossed at random and independently onto a line segment of length $L$. What is the probability that the distance between the two points does not exceed $l$?

**Solution.** Imagine that $\xi_1$ falls in an interval $[0, L]$ of the $x_1$-axis, while $\xi_2$ falls in an interval $[0, L]$ of the $x_2$-axis, perpendicular to the $x_1$-axis as in Figure 5. Then the desired probability is just the probability that a point $\xi = (\xi_1, \xi_2)$ tossed at random onto the square $0 \leq x_1, x_2 \leq L$ will fall in the region $B$ bounded by the lines $x_2 = l + x_1$ and $x_2 = -l + x_1$ ($B$ is the unshaded region in Figure 5). By hypothesis, the random variables $\xi_1$ and $\xi_2$ are independent and are both uniformly distributed in $[0, L]$, i.e., both have probability density

$$p(x) = \frac{1}{L}, \quad 0 \leq x \leq L.$$

Hence, by (4.6), the joint probability density of the independent random variables $\xi_1$ and $\xi_2$ is just

$$p_{\xi_1,\xi_2}(x_1, x_2) = \frac{1}{L^2}, \quad 0 \leq x_1, x_2 \leq L.$$

---

$^5$ Note that $|\xi_1 - \xi_2|$ is the horizontal distance between the point $(\xi_1, \xi_2)$ and the line $x_2 = x_1$. This is the distance $\rho$ shown in Figure 5, from which it is apparent that $\rho \leq l$ if and only if $(\xi_1, \xi_2)$ lies in $B$.