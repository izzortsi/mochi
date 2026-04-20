to be chosen if the system is in the state $\varepsilon_i$ at the time $t$. In other words, the whole control program is described by a decision rule, i.e., a function of two variables

$$d = d(x, t),$$

where $x$ ranges over the states $\varepsilon_1, \varepsilon_2, \ldots$ and $t$ over the times $0, \ldots, n-1$. Thus the probability of the system going into the state $\varepsilon_j$ at time $k+1$, given that it is in the state $\varepsilon_i$ at time $k$, is given by

$$p_{ij} = p_{ij}(d), \quad d = d(\varepsilon_i, k).$$

By the same token, the probability of the system being guided into one of the states in $E$ depends on the choice of the control program, i.e., on the decision rule $d = d(x, t)$, so that

$$P = P(d).$$

Control with a decision rule $d^0 = d^0(x, t)$ will be called optimal if

$$P(d^0) = \max_d P(d),$$

where the maximum is taken with respect to all possible control programs, i.e., all possible decision rules $d = d(x, t)$. Our problem will be to find this optimal decision rule $d^0$, thereby maximizing the probability

$$P(d) = \mathbf{P} \{ \xi(n) \in E \}$$

of the system ending up in one of the states of $E$ after $n$ steps.

We now describe a multistage procedure for finding $d^0$. Let

$$P(k, i, d) = \mathbf{P} \{ \xi(n) \in E \mid \xi(k) = \varepsilon_i \}$$

be the probability that after occupying the state $\varepsilon_i$ at the $k$th step, the system will end up in one of the states of the set $E$ after the remaining $n-k$ steps (it is assumed that some original choice of the decision rule $d = d(x, t)$ has been made). Then clearly

$$P(k, i, d) = \sum_j p_{ij}(d) P(k+1, j, d).$$

This is a simple consequence of the total probability formula, since at the $(k+1)$st step the system goes into the state $\varepsilon_j$ with probability $p_{ij}(d)$, $d = d(\varepsilon_i, k)$, whence with probability $P(k+1, j, d)$ it moves on $(n-k-1)$ steps later) to one of the states in the set $E$.

For $k = n-1$, formula (1) involves the probability

$$P(n, j, d) = \begin{cases} 1 & \text{if } \varepsilon_j \in E, \\ 0 & \text{otherwise}, \end{cases}$$

and hence

$$P(n-1, i, d) = \sum_{j: \varepsilon_j \in E} p_{ij}(d),$$