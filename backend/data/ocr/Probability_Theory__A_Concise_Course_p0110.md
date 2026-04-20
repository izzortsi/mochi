4. An urn contains a total of $N$ balls, some black and some white. Samples are drawn from the urn, $m$ balls at a time ($m < N$). After drawing each sample, the black balls are returned to the urn, while the white balls are replaced by black balls and then returned to the urn. If the number of white balls in the urn is $i$, we say that the “system” is in the state $\epsilon_i$. Prove that the random process described by this model is a Markov chain (imagine that samples are drawn at the times $t = 1, 2, \ldots$ and that the system has some initial probability distribution). Find the corresponding transition probabilities $p_{ij} (i, j = 0, 1, \ldots, N)$. Which states are persistent and which transient?

Ans. $p_{ij} = 0$ if $i < j$ or if $i \geq j, j > N - m,$
$$p_{ij} = \frac{C_{i-j}^i C_{m-i+j}^n}{C_m^n} \text{ if } i \geq j, j \leq N - m.$$

The state $\epsilon_0$ is persistent, but the others are transient.

5. In the preceding problems, let $N = 8, m = 4$, and suppose there are initially 5 white balls in the urn. What is the probability that no white balls are left after 2 drawings (of 4 balls each)?

6. A particle moves randomly along the interval $[1, m]$, coming to rest only at the points with coordinates $x = 1, \ldots, m$. The particle’s motion is described by a Markov chain such that
$$p_{12} = 1, \quad p_{m,m-1} = 1,$$
$$p_{j,j+1} = p, \quad p_{j,j-1} = q \quad (j = 2, \ldots, m-1),$$
with all other transition probabilities equal to zero. Which states are persistent and which transient?

7. In the preceding problem, show that the limiting probabilities defined in Theorem 7.4 do not exist. In particular, show that the condition (7.20) does not hold for any $N$.

Hint. $p_{11}(n) = 0$ if $n$ is odd, while $p_{12}(n) = 0$ if $n$ is even.

8. Consider the same kind of random walk as in Problem 6, but now suppose the nonzero transition probabilities are
$$p_{11} = q, \quad p_{mm} = p,$$
$$p_{j,j+1} = p, \quad p_{j,j-1} = q \quad (j = 1, \ldots, m),$$
permitting the particle to stay at the points $x = 1$ and $x = m$. Which states are persistent and which transient? Show that the limiting probabilities $p_1^*, \ldots, p_m^*$ defined in Theorem 7.4 now exist.

9. In the preceding problem, calculate the limiting probabilities $p_1^*, \ldots, p_m^*$.

Ans. Solving the system of equations
$$p_1^* = qp_1^* + qp_2^*,
p_j^* = pp_{j-1}^* + qp_{j+1}^* \quad (j = 2, \ldots, m-1),
p_m^* = pp_m^* + pp_m^*,
$$