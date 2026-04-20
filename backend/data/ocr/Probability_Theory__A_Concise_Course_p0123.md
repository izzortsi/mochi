But for small $\Delta t$, this is also the probability of a single server becoming free in time $\Delta t$, i.e., of a transition from $\varepsilon_j$ to $\varepsilon_{j-1}$. The transitions to new states other than $\varepsilon_{j-1}$ or $\varepsilon_{j+1}$ have small probabilities of order $o(\Delta t)$. These considerations, together with (8.12) and the formula

$$\sum_j \lambda_{ij} = 0$$

implied by (8.12) and (8.13), lead at once to (8.29).

In the case $m = 1$, it is clear from the formulas (8.24) that the transition probabilities $p_{ij}(t)$ approach their limiting values “exponentially fast” as $t \to \infty$. It follows from the general formula (8.25) that the same is true in the case $m > 1$ (more than 1 server). To find these limiting probabilities $p_j^*$, we use (8.28) and (8.29), obtaining the following system of linear equations:

$$\lambda p_0^* = \mu p_1^*,
(\lambda + j\mu)p_j^* = \lambda p_{j-1}^* + (j + 1)\mu p_{j+1}^* \quad (j = 1, \ldots, m - 1),
\lambda p_{m-1}^* = m\mu p_m^*.$$

Solving this system, we get

$$p_j^* = \frac{1}{j!} \left( \frac{\lambda}{\mu} \right)^j p_0^*, \quad j = 0, 1, \ldots, m.$$

Using the “normalization condition”

$$\sum_{j=0}^{m} p_j^* = 1$$

to determine $p_0^*$, we finally obtain Erlang’s formula

$$p_j^* = \frac{\frac{1}{j!} \left( \frac{\lambda}{\mu} \right)^j}{\sum_{j=0}^{m} \frac{1}{j!} \left( \frac{\lambda}{\mu} \right)^j}, \quad j = 0, 1, \ldots, m$$

for the limiting probabilities.

**PROBLEMS**

1. Suppose each alpha particle emitted by a sample of radium has probability $p$ of being recorded by a Geiger counter. What is the probability of exactly $n$ particles being recorded in $t$ seconds?

Ans. $$\frac{(\lambda pt)^n}{n!} e^{-\lambda pt},$$ where $\lambda$ is the same as in the example on p. 104.