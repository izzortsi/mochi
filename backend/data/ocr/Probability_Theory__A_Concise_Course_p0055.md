For example, suppose $\xi_1$ and $\xi_2$ are both uniformly distributed in the interval [0, 1], so that they both have the probability density

$$p(x) = \begin{cases} 
1 & \text{if } 0 \leqslant x \leqslant 1, \\
0 & \text{if } x < 0 \text{ or } x > 1.
\end{cases}$$

Then

$$p_\eta(y) = \begin{cases} 
\int_0^y dx = y & \text{if } 0 \leqslant y \leqslant 1, \\
\int_{y-1}^1 dx = 2 - y & \text{if } 1 \leqslant y \leqslant 2, \\
0 & \text{if } y < 0 \text{ or } y > 2.
\end{cases}$$

The graph of the density $p_\eta(y)$ is triangular in shape, as shown in Figure 7.

**8. Mathematical Expectation**

By the mathematical expectation or mean value of a discrete random variable $\xi$, denoted by $\mathbf{E}\xi$, we mean the quantity

$$\mathbf{E}\xi = \sum_{-\infty}^{\infty} x P_\xi(x),$$

(4.9)

provided that the series converges absolutely. Here the summation has the same meaning as on p. 37, and, as usual, $\mathbf{P}_\xi(x) = \mathbf{P}\{\xi = x\}$. Given a discrete random variable $\xi$, consider the new random variable $\eta = \varphi(\xi)$, where $\varphi(x)$ is some function of $x$. Then the mathematical expectation of $\eta$ is given in terms of the probability distribution of $\xi$ by the formula

$$\mathbf{E}\eta = \mathbf{E}\varphi(\xi) = \sum_{-\infty}^{\infty} \varphi(x) P_\xi(x).$$

(4.10)

7 I.e., provided that $\sum_{-\infty}^{\infty} |x| P_\xi(x) < \infty$.