where $m_0$ is some integer. Thus the optimal selection procedure consists in continuing inspection until the appearance of an object numbered $k \geq m_0$ which is better than all previously inspected objects. According to (12), $m_0$ is the largest positive integer such that

$$\frac{1}{m_0} + \frac{1}{m_0 + 1} + \cdots + \frac{1}{m - 1} > 1. \tag{13}$$

PROBLEMS

1. In Example 2, prove that

$$m_0 \approx \frac{m}{e} \tag{14}$$

if $m$ is large, where $e = 2.718 \ldots$ is the base of the natural logarithms.

Hint. Use an integral to estimate the left-hand side of (13).

2. Find the exact value of $m_0$ for $m = 50$. Compare the result with (14).

3. Consider a Markov chain with two states $\varepsilon_1$ and $\varepsilon_2$ and transition probabilities $p_{ij}(d)$ depending on a control parameter $d$ taking only two values 0 and 1. Suppose

$$p_{11}(0) = \frac{1}{8}, \quad p_{21}(0) = \frac{4}{8}, \quad p_{11}(1) = \frac{2}{8}, \quad p_{21}(1) = \frac{3}{8}.$$

What is the optimal decision rule maximizing the probability of the system initially in the state $\varepsilon_1$, going into the state $\varepsilon_2$ three steps later? What is this maximum probability?