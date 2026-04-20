Choosing $p_i^0, i = 1, 2, \ldots$ as the initial probability distribution, we calculate the probability $p_j(n)$ of finding the system in the state $e_j$ after $n$ steps, obtaining

$$p_j(1) = \sum_i p_i^0 p_{ij} = p_j^0,$$

$$p_j(2) = \sum_i p_i(1) p_{ij} = \sum_i p_i^0 p_{ij} = p_j^0,$$

It follows that

$$p_j(n) = p_j^0, \quad j = 1, 2, \ldots$$

(7.27)

for all $n = 0, 1, 2, \ldots$ [$p_j(0) = p_j^0$ trivially], i.e., the probabilities $p_j(n)$, $j = 1, 2, \ldots$ remain unchanged as the system evolves in time.

A Markov chain is said to be stationary if the probabilities $p_j(n), j = 1, 2, \ldots$ remain unchanged for all $n = 0, 1, 2, \ldots$, and then the corresponding probability distribution with probabilities (7.27) is also said to be stationary. It follows from the corollary and the remark that a probability distribution $p_j^0, j = 1, 2, \ldots$ is stationary if and only if it satisfies the system of equations (7.26). Moreover, if the limiting probabilities

$$p_j^* = \lim_{n \to \infty} p_j(n)$$

(7.28)

are the same for every initial distribution, then there is a unique stationary distribution with probabilities

$$p_j^0 = p_j^*, \quad j = 1, 2, \ldots$$

Hence Theorem 7.4 and its corollary can be paraphrased as follows: Subject to the condition (7.20), the limiting probabilities (7.28) exist and are the unique solution of the system of linear equations (7.25) satisfying the extra conditions

$$p_j^* > 0, \quad \sum_{j=1}^{m} p_j^* = 1.$$

Moreover, they form a stationary distribution for the given Markov chain.

Example 1. In the book pile problem, it will be recalled from p. 86 that when $m = 2$, the stationary distribution

$$p_1(n) = p_1, \quad p_2(n) = p_2$$

is established at the very first step. In the case of arbitrary $m$, let $p_{(i_1, \ldots, i_m), (j_1, \ldots, j_m)}$ denote the probability of the transition from the state $(i_1, \ldots, i_m)$ to the state $(j_1, \ldots, j_m)$, and assume that the probabilities $p_1, \ldots, p_m$ are all positive. Then, as shown on p. 85,

$$p_{(i_1, \ldots, i_m), (j_1, \ldots, j_m)} = \begin{cases} p_{i_k} & \text{if } (j_1, \ldots, j_m) = (i_k, i_1, \ldots), \\ 0 & \text{otherwise}, \end{cases}$$