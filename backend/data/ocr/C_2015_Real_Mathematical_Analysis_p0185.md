Note that $f$ is discontinuous at every $x \in \mathbb{Q}$ and is continuous at every $x \in \mathbb{Q}^c$. See Figure 75. It is Riemann integrable and its integral is zero. For, given $\epsilon > 0$, we can consider the degenerate step function

$$s(x) = \begin{cases} 
1/q & \text{if } p/q \in \mathbb{Q} \cap [0,1] \text{ and } 1/q \geq \epsilon \\
0 & \text{otherwise.}
\end{cases}$$

Then $f$ is sandwiched between the Riemann integrable functions $g = 0$ and

$$h(x) = \epsilon \chi_{[0,1]}(x) + s(x).$$

The integral of $h - g$ is $\epsilon$, so the Sandwich Principle implies that $f \in \mathbb{R}$.

Example Zeno’s staircase function $Z(x) = 1/2$ on the first half of $[0,1]$, $Z(x) = 3/4$ on the next quarter of $[0,1]$, and so on. See Figure 76. It is Riemann integrable and its integral is $2/3$. The function has infinitely many discontinuity points, one at each point $(2^k - 1)/2^k$. In fact, every monotone function is Riemann integrable.$^\dagger$ See Corollary 26 below.

$^\dagger$To prove this directly is not hard. The key observation to make is that a monotone function is not much different from a continuous function. It has only jump discontinuities, and only countably many of them; given any $\epsilon > 0$, there are only finitely many at which the jump is $\geq \epsilon$. See Exercise 1.31.