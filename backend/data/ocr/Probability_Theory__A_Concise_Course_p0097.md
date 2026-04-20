Hence $P^2 = P$, and more generally $P^n = P$. Given any initial probability distribution $p_1^0, p_2^0$, we have

$$p_1(n) = p_1^0 p_{11}(n) + p_2^0 p_{21}(n) = p_1(p_1^0 + p_2^0) = p_1,$$
$$p_2(n) = p_1^0 p_{12}(n) + p_2^0 p_{22}(n) = p_2(p_1^0 + p_2^0) = p_2.$$

**Example 2 (The optimal choice problem).** Returning to Example 2, p. 28, concerning the choice of the best object among $m$ objects all of different quality, let $\varepsilon_k (k = 1, 2, \ldots, m)$ be the state characterized by the fact that the $k$th inspected object is the best of the first $k$ objects inspected, and let $\varepsilon_{m+1}$ be the state characterized by the fact that the best of all $m$ objects has already been examined and rejected. As the $m$ objects are examined one by one at random, there are various times at which the last object examined turns out to be better than all previous objects examined. Denote these times in order of occurrence by $t = 0, 1, \ldots, v$, with $t = 0$ corresponding to inspection of the first object and $t = v$ being the time at which the best of all $m$ objects is examined ($v = 0$ if the best object is examined first). Imagine a system with possible states $\varepsilon_1, \ldots, \varepsilon_m, \varepsilon_{m+1}$, and let $\xi(t)$ be the state of the system at the time $t$, so that in particular $\xi(0) = \varepsilon_1$. To make the “random process” $\xi(0) \rightarrow \xi(1) \rightarrow \xi(2) \rightarrow \cdots$ into a Markov chain, we must define $\xi(n)$ for $n > v$. This is done by the simple artifice of setting $\xi(n) = \varepsilon_{m+1}$ for all $n > v$.

The transition probabilities of this Markov chain are easily found. Obviously $p_{m+1,m+1} = 1$ and $p_{ij} = 0$ if $i \geq j, j < m$. To calculate $p_{ij}$ for $i < j < m$, we write (7.2) in the form

$$p_{ij} = \mathbf{P}(E_j \mid E_i) = \frac{\mathbf{P}(E_i E_j)}{\mathbf{P}(E_i)},$$

in terms of the events $E_i = \{\xi(n) = \varepsilon_i\}$ and $E_j = \{\xi(n+1) = \varepsilon_j\}$. Clearly, $\mathbf{P}(E_i)$ is the probability that the best object will occupy the last place in a randomly selected permutation of $j$ objects, all of different quality. Since the total number of distinct permutations of $j$ objects is $j!$, while the number of such permutations with a fixed element in the last $(j)$th place is $(j-1)!$, we have

$$\mathbf{P}(E_j) = \frac{(j-1)!}{j!} = \frac{1}{j}, \quad j = 1, \ldots, m.$$

Similarly, $\mathbf{P}(E_i E_j)$ is the probability that the best object occupies the $j$th place, while a definite object (namely, the second best object) occupies the $i$th place. Clearly, there are $(j-2)!$ permutations of $j$ objects with fixed elements in two places, and hence

$$\mathbf{P}(E_i E_j) = \frac{(j-2)!}{j!} = \frac{1}{(j-1)j}, \quad i < j \leq m.$$