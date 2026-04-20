a Markov process $\xi(t)$ with transition probabilities

$$p_{ij} = \begin{cases} 
0 & \text{if } i \ge j, \\
\frac{i}{(j-1)j} & \text{if } i < j < m, \\
\frac{i}{m} & \text{if } j = m + 1, 
\end{cases}$$

where, as on p. 28, choice of an object better than all those previously inspected causes the process $\xi(0) \rightarrow \xi(1) \rightarrow \xi(2) \rightarrow \cdots$ to terminate. In each of the states $\varepsilon_1, \ldots, \varepsilon_m$ (whose meaning is explained on p. 86), the observer decides whether to terminate or to continue the process of inspection. The decision to terminate, if taken in the state $\varepsilon_i$, is described formally by the transition probabilities

$$p_{ij} = \begin{cases} 
1 & \text{if } i = j, \\
0 & \text{if } i \neq j, 
\end{cases}$$

while the decision to continue corresponds to the transition probabilities (7). Hence we are dealing with a “guided Markov process,” whose transition probabilities $p_{ij}$ depend on the observer’s decision. Here the control parameter $d$ takes only two values, 0 and 1 say, where 0 corresponds to stopping the process and 1 to continuing it. Thus (8) gives the probabilities $p_{ij}(0)$ and (7) the probabilities $p_{ij}(1)$.

Every inspection plan is described by a decision rule $d = d(x)$, $x = \varepsilon_1, \ldots, \varepsilon_m$, which specifies in advance for each of the states $\varepsilon_1, \ldots, \varepsilon_m$ whether inspection should be continued or terminated by selecting the last inspected object. The problem consists of finding an inspection plan, or equivalently a decision rule $d = d(x)$, $x = \varepsilon_1, \ldots, \varepsilon_m$, maximizing the probability of selecting the very best of all $m$ objects. This probability is just

$$P = \sum_i \frac{i}{m} p_i,$$

where $i/m$ is the probability that the $i$th inspected object is the best (recall p. 29), $p_i$ is the probability that the process will stop in the state $\varepsilon_i$, and the summation is over all the states $\varepsilon_i$ in which the decision rule $d = d(x)$ calls for the process to stop.

To find the optimal decision rule $d^0 = d^0(x)$ maximizing (9), we consider the probability $P(k, d)$ of selecting the best object, given that the number of previously inspected objects is no less than $k$, i.e., given that the process $\xi(t)$ actually occupies the state $\varepsilon_k$. By the total probability formula, we have

$$P(k, d) = \sum_{j=i_k}^{m} p_{kj}(d) P(j, d).$$