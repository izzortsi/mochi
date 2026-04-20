A “random process” described by this model is called a Markov chain. Now let

$$p_j(n) = \mathbf{P} \{ \xi(n) = \varepsilon_j \}$$

(7.3)

be the probability that the system will be in the state $\varepsilon_j$ “after $n$ steps.” To find $p_j(n)$, we argue as follows: After $n - 1$ steps, the system must be in one of the states $\varepsilon_k$, $k = 1, 2, \ldots$, i.e., the events $\{\xi(n - 1) = \varepsilon_k\}$, $k = 1, 2, \ldots$ form a full set of mutually exclusive events in the sense of p. 26. Hence, by formula (3.6),

$$\mathbf{P} \{ \xi(n) = \varepsilon_j \} = \sum_k \mathbf{P} \{ \xi(n) = \varepsilon_j \mid \xi(n - 1) = \varepsilon_k \} \mathbf{P} \{ \xi(n - 1) = \varepsilon_k \}.$$ (7.4)

Writing (7.4) in terms of the notation (7.1)–(7.3), we get the recursion formulas

$$p_j(0) = p_j^0,$$
$$p_j(n) = \sum_k p_k(n - 1)p_{kj}, \quad n = 1, 2, \ldots$$ (7.5)

If the system is in a definite state $\varepsilon_i$ at time $t = 0$, the initial probability distribution reduces to

$$p_i^0 = 1, \quad p_k^0 = 0 \quad \text{if} \quad k \neq i.$$ (7.6)

The probability $p_j(n)$ is then the same as the probability

$$p_{ij}(n) = \mathbf{P} \{ \xi(n) = \varepsilon_j \mid \xi(0) = \varepsilon_i \}, \quad i, j = 1, 2, \ldots$$

that the system will go from state $\varepsilon_i$ to state $\varepsilon_j$ in $n$ steps. Hence, for the initial distribution (7.6), the formulas (7.5) become

$$p_{ij}(0) = \begin{cases} 1 & \text{if} \quad j = i, \\ 0 & \text{if} \quad j \neq i, \end{cases}$$ (7.7)
$$p_{ij}(n) = \sum_k p_{ik}(n - 1)p_{kj}, \quad n = 1, 2, \ldots$$

The form of the sum in (7.7) suggests introducing the transition probability matrix

$$P = \| p_{ij} \| = \begin{vmatrix} p_{11} & p_{12} & \cdots \\ p_{21} & p_{22} & \cdots \\ \vdots & \vdots & \cdots \\ \vdots & \vdots & \cdots \end{vmatrix}$$

$^2$ More exactly, a Markov chain with stationary transition probabilities, where we allude to the fact that the numbers (7.2) do not depend on $n$. For an abstract definition of a Markov chain, without reference to an underlying physical system, see W. Feller, op. cit., p. 374.