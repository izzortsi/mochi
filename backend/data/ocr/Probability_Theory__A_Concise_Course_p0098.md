It follows from (7.7)–(7.11) that

$$p_{ij} = \frac{i}{(j-1)j}, \quad i < j \leq m.$$

As for the transition probabilities $p_{i,m+1}$, they have in effect already been calculated in Example 2, p. 28:

$$p_{i,m+1} = \frac{i}{m}, \quad i = 1, \ldots, m.$$

**Example 3 (One-dimensional random walk).** Consider a particle which moves randomly along the $x$-axis, coming to rest only at the points $x = \ldots, -2, -1, 0, 1, 2, \ldots$ with integral coordinates. Suppose the particle’s motion is such that once at a point $i$, it jumps at the next step to either the point $i+1$ or the point $i-1$, with probabilities $p$ and $q = 1-p$, respectively.4 Let $\xi(n)$ be the particle’s position after $n$ steps. Then the sequence $\xi(0) \rightarrow \xi(1) \rightarrow \xi(2) \rightarrow \cdots$ is a Markov chain with transition probabilities

$$p_{ij} = \begin{cases} p & \text{if } j=i+1, \\ q & \text{if } j=i-1, \\ 0 & \text{otherwise.} \end{cases}$$

In another kind of one-dimensional random walk, the particle comes to rest only at the points $x=0, 1, 2, \ldots$, jumping from the point $i$ to the point $i+1$ with probability $p_i$ and returning to the origin with probability $q_i = 1-p_i$. The corresponding Markov chain has transition probabilities

$$p_{ij} = \begin{cases} p_i & \text{if } j=i+1, \\ q_i & \text{if } j=0, \\ 0 & \text{otherwise.} \end{cases}$$

16. Persistent and Transient States

Consider a Markov chain with states $\varepsilon_1, \varepsilon_2, \ldots$ and transition probabilities $p_{ij}, i,j=1,2, \ldots$. Suppose the system is initially in the state $\varepsilon_i$. Let

$$u_n = p_{ii}(n),$$

and let $v_n$ be the probability that the system returns to the initial state $\varepsilon_i$.

4 Thus the particle’s motion is “generated” by an infinite sequence of Bernoulli trials (cf. the example on pp. 63–65, where $p=q=\frac{1}{2}$).