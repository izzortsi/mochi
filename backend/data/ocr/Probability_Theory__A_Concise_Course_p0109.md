Example 3. Finally, consider the one-dimensional random walk with transition probabilities (7.13). Suppose

$$\lim_{n \to \infty} p_0 p_1 \cdots p_n = 1 - v > 0,$$

(7.30)

so that the states are all transient (see p. 92). Then as $n \to \infty$, the particle “moves off to infinity” in the positive direction with probability 1, and there is obviously no stationary distribution. If there is a stationary distribution, it must satisfy the system of equations (7.26), which in the present case take the form

$$p_j^0 = p_{j-1}^0 p_{j-1}, \quad j = 1, 2, \ldots$$

(7.31)

It follows from (7.31) that

$$p_1^0 = p_0^0 p_0, \quad p_2^0 = p_0^0 p_0 p_1, \ldots, \quad p_n^0 = p_0^0 p_0 p_1 \cdots p_{n-1}, \ldots$$

Clearly a stationary distribution exists if and only if the series

$$\sum_{n=0}^{\infty} p_0 p_1 \cdots p_n = 1 + p_0 + p_0 p_1 + \cdots$$

(7.32)

converges. The stationary distribution is then

$$p_0^0 = \frac{1}{1 + p_0 + p_0 p_1 + \cdots},$$

$$p_n^0 = \frac{p_0 p_1 \cdots p_n}{1 + p_0 + p_0 p_1 + \cdots}, \quad n = 1, 2, \ldots$$

PROBLEMS

1. A number from 1 to $m$ is chosen at random, at each of the times $t = 1, 2, \ldots$. A system is said to be in the state $\epsilon_0$ if no number has yet been chosen, and in the state $\epsilon_i$ if the largest number so far chosen is $i$. Show that the random process described by this model is a Markov chain. Find the corresponding transition probabilities $p_{ij} (i, j = 0, 1, \ldots, m)$.

Ans. $p_{ii} = \frac{i}{m}, \quad p_{ij} = 0$ if $i > j, \quad p_{ij} = \frac{1}{m}$ if $i < j$.

2. In the preceding problem, which states are persistent and which transient?

3. Suppose $m = 4$ in Problem 1. Find the matrix $P(2) = \| p_{ij}(2) \|$, where $p_{ij}(2)$ is the probability that the system will go from state $\epsilon_i$ to state $\epsilon_j$ in 2 steps.

*Note that (7.32) automatically diverges if (7.30) holds.