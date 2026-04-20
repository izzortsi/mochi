To calculate the optimal strategies $P_1^0$ and $P_2^0$, we consider the function

$$V(x, y) = v_{11}xy + v_{12}x(1-y) + v_{21}(1-x)y + v_{22}(1-x)(1-y),$$

which for $x = p_{11}$ and $y = p_{21}$ equals the average gain of the first player if the mixed strategies $P_1 = \{p_{11}, p_{12}\}$ and $P_2 = \{p_{21}, p_{22}\}$ are chosen. The function $V(x, y)$ is linear in each of the variables $x$ and $y$, $0 < x, y < 1$. Hence, for every fixed $x$, $V(x, y)$ achieves its minimum $V_1(x)$ at one of the end points of the interval $0 \leq y \leq 1$, i.e., for $y = 0$ or $y = 1$:

$$V_1(x) = \min_y V(x, y) = \min \{v_{12}x + v_{22}(1-x), v_{11}x + v_{21}(1-x)\}.$$

As shown in Figure 10, the graph of the function $V_1(x)$ is a broken line with vertex at the point $x^0$ such that

$$v_{12}x^0 + v_{22}(1-x^0) = v_{11}x^0 + v_{21}(1-x^0),$$

i.e., at the point

$$x^0 = \frac{v_{22} - v_{21}}{v_{11} + v_{22} - (v_{12} + v_{21})}.$$

The value $x = x^0$ for which the function $V_1(x)$, $0 < x < 1$ takes its maximum is just the probability $p_{11}^0$ with which the first player should choose his first pure strategy. The corresponding optimal mixed strategy $P_1^0 = \{p_{11}^0, p_{12}^0\}$ guarantees the maximum average gain for the first player under the assumption of optimal play on the part of his opponent. This gain is

$$V_1(x^0) = v_{11}x^0 + v_{21}(1-x^0) = v_{12}x^0 + v_{22}(1-x^0).$$