and the “$n$-step transition probability matrix”

$$P(n) = \| p_{ij}(n) \| = \left\| \begin{array}{ccc}
p_{11}(n) & p_{12}(n) & \cdots \\
p_{21}(n) & p_{22}(n) & \cdots \\
\cdot & \cdot & \cdots \\
\cdot & \cdot & \cdots \\
\end{array} \right\|.$$

Then, because of the rule for matrix multiplication, (7.7) implies

$$P(0) = I, \quad P(1) = P, \quad P(2) = P(1)P = P^2, \cdots,$$

where $I$ is the unit matrix (with ones along the main diagonal and zeros everywhere else). It follows that

$$P(n) = P^n, \quad n = 1, 2, \cdots$$

**Example 1 (The book pile problem).** Consider a pile of $m$ books lying on a desk. If the books are numbered from 1 to $m$, the order of the books from the top of the pile down is described by some permutation $(i_1, i_2, \ldots, i_m)$ of the integers 1, 2, $\ldots$, $m$, where $i_1$ is the number of the book on top of the pile, $i_2$ the number of the next book down, etc., and $i_m$ is the number of the book at the bottom of the pile. Suppose each of the books is chosen with a definite probability, and then returned to the top of the pile. Let $p_k$ be the probability of choosing the $k$th book ($k = 1, 2, \ldots, m$), and suppose the book pile is in the state $(i_1, i_2, \ldots, i_m)$. Then, at the next step, the state either remains unchanged, which happens with probability $p_{i_1}$ when the top book (numbered $i_1$) is chosen, or else changes to one of the $m-1$ states of the form $(i_k, i_1, \ldots)$, which happens with probability $p_{i_k}$ when a book other than the top book is chosen. Thus we are dealing with a Markov chain, with states described by the permutations $(i_1, i_2, \ldots, i_m)$ and the indicated transition probabilities.

For example, if $m = 2$, there are only two states $\varepsilon_1 = (1, 2)$ and $\varepsilon_2 = (2, 1)$, and the transition probabilities are

$$p_{11} = p_{21} = p_1, \quad p_{12} = p_{22} = p_2.$$

The corresponding transition probability matrix is

$$P = \left\| \begin{array}{ccc}
p_1 & p_2 \\
p_1 & p_2 \\
\end{array} \right\|.$$

The “two-step transition probabilities” are

$$p_{11}(2) = p_{21}(2) = p_1p_1 + p_1p_2 = p_1(p_1 + p_2) = p_1,$$

$$p_{12}(2) = p_{22}(2) = p_1p_2 + p_2p_2 = p_2(p_1 + p_2) = p_2.$$

---

$^3$ Suitably generalized to the case of infinite matrices, if there are infinitely many states $\varepsilon_1, \varepsilon_2, \ldots$.