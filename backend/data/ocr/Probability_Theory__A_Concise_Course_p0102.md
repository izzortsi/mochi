either both converge or both diverge. But

$$\sum_{n=0}^{\infty} p_{ii}(n) = \infty$$

by Theorem 7.1, since $\varepsilon_i$ is persistent. Therefore

$$\sum_{n=0}^{\infty} p_{jj}(n) = \infty$$

i.e., $\varepsilon_j$ is also persistent (again by Theorem 7.1).

COROLLARY. If a Markov chain has only a finite number of states, each accessible from every other state, then the states are all persistent.

Proof. Since there are only a finite number of states, the system must return to at least one of them infinitely often as $n \to \infty$. Hence at least one of the states, say $\varepsilon_i$, is persistent. But all the other states are accessible from $\varepsilon_i$. It follows from Theorem 7.3 that all the states are persistent.

**Example 1.** In the book pile problem (Example 1, p. 85), if every book is chosen with positive probability, i.e., if $p_i > 0$ for all $i = 1, \ldots, m$, then obviously every state is accessible from every other state. In this case, all $m!$ distinct states $(i_1, \ldots, i_m)$ are persistent. If $p_i = 0$ for some $i$, then all states of the form $(i_1, \ldots, i_m)$ where $i_1 = i$ (the $i$th book lies on top of the pile) are transient, since at the very first step a book with a number $j$ different from $i$ will be chosen, and then the book numbered $i$, which can never be chosen from the pile, will steadily work its way downward.

**Example 2.** In the optimal choice problem (Example 2, p. 86), it is obvious that after no more than $m$ steps ($m$ is the total number of objects), the system will arrive at the state $\varepsilon_{m+1}$, where it will remain forever. Hence all the states except $\varepsilon_{m+1}$ are transient.

**Example 3.** Consider the one-dimensional random walk with transition probabilities (7.12). Clearly, every state (i.e., every position of the particle) is accessible from every other state, and moreover

$$p_{ii}(k) = \begin{cases} 0 & \text{if } k = 2n + 1, \\ C_n^{2n} p^n q^n & \text{if } k = 2n. \end{cases}$$

Using Stirling’s formula (see p. 10), we have

$$C_n^{2n} p^n q^n = \frac{(2n)!}{(n!)^2} p^n q^n \sim \frac{\sqrt{4\pi n} (2n)^{2n} e^{-2n}}{(\sqrt{2\pi n} n^n e^{-n})^2} p^n q^n = \frac{1}{\sqrt{\pi n}} (4pq)^n$$

* Cf. formula (5.2), p. 55.