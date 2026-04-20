we get

$$p_j^* = \left( \frac{p}{q} \right)^{j-1} p_1^* \quad (j = 1, \ldots, m).$$

Therefore

$$p_j^* = \frac{1}{m}$$

if $p = q$, while

$$p_j^* = \frac{1 - (p/q)}{1 - (p/q)^m} \left( \frac{p}{q} \right)^{j-1}$$

if $p \neq q$ (impose the condition that $\sum_{j=1}^{m} p_j^* = 1$).

10. Two marksmen $A$ and $B$ take turns shooting at a target. It is agreed that $A$ will shoot after each hit, while $B$ will shoot after each miss. Suppose $A$ hits the target with probability $\alpha > 0$, while $B$ hits the target with probability $\beta > 0$, and let $n$ be the number of shots fired. What is the limiting probability of hitting the target as $n = \infty$?

Ans. $$\frac{\beta}{1 - \alpha - \beta}.$$

11. Suppose the condition (7.20) holds for a transition probability matrix whose column sums (as well as row sums) all equal unity. Find the limiting probabilities $p_1^*, \ldots, p_m^*$.

Ans. $$p_1^* = \cdots = p_m^* = \frac{1}{m}.$$

12. Suppose $m$ white balls and $m$ black balls are mixed together and divided equally between two urns. A ball is then drawn at random from each urn and put into the other urn. Suppose this is done $n$ times. If the number of white balls in a given urn is $j$, we say that the “system” is in the state $\epsilon_j$ (the number of white balls in the other urn is then $m - j$). Prove that the limiting probabilities $p_0^*, p_1^*, \ldots, p_m^*$ defined in Theorem 7.4 exist, and calculate them.

Hint. The only nonzero transition probabilities are

$$p_{jj} = \frac{2j(m - j)}{m^2}, \quad p_{j,j+1} = \frac{(m - j)^2}{m^2}, \quad p_{j,j-1} = \frac{j^2}{m^2}.$$

Ans. Solving the system

$$p_j^* = p_{j-1}^* p_{j-1,j} + p_j^* p_{jj} + p_{j+1}^* p_{j+1,j} \quad (j = 0, 1, \ldots, m),$$

we get $p_j^* = (C_j^m)^2 p_0^*$, and hence

$$p_j^* = \frac{(C_j^m)^2}{\sum_{j=0}^{m} (C_j^m)^2} = \frac{(C_j^m)^2}{C_m^{2n}} \quad (j = 0, 1, \ldots, m)$$

(recall Problem 17, p. 12).