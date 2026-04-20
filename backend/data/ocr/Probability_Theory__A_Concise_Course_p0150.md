d = d(x, t) by requiring (6) to hold for $t = n - 3$ and all $x = \varepsilon_1, \varepsilon_2, \ldots$, as well as for $t = n - 2, n - 1$ and all $x = \varepsilon_1, \varepsilon_2, \ldots$.

Continuing this step-by-step procedure, after $n - 1$ steps we eventually get the optimal decision rule $d = d^0(x, t)$, defined for $t = 0, \ldots, n - 1$ and all $x = \varepsilon_1, \varepsilon_2, \ldots$, such that the probability $P(d) = P(0, i, d)$ satisfying the initial condition $\xi(0) = \varepsilon_i$ achieves its maximum value. At the $(n - k)$th step of this procedure of “successive corrections,” we find the value $d^0 = d^0(\varepsilon_i, k)$ maximizing the function

$$P(k, i, d) = \sum_j p_{ij}(d)P^0(k + 1, j),$$

where $P^0(k + 1, j)$ is the maximum value of the probability $P(k + 1, j, d)$. Carrying out this maximization, we get Bellman’s equation²

$$P^0(k, i) = \max_{d \in D} \sum_j p_{ij}(d)P^0(k + 1, j),$$

which summarizes the whole procedure just described.

**Example 1.** Suppose there are just two states $\varepsilon_1$ and $\varepsilon_2$, and suppose the transition probabilities are continuous functions of the control parameter in the intervals

$$\alpha_1 < p_{11}(d) < \beta_1, \quad \alpha_2 < p_{21}(d) < \beta_2.$$

What is the optimal decision rule maximizing the probability of the system, initially in the state $\varepsilon_1$, going into the state $\varepsilon_1$ two steps later?

**Solution.** In this case,

$$P^0(1, 1) = \beta_1, \quad P^0(1, 2) = \beta_2,$$

$$P^0(0, 1) = \max_d [p_{11}(d)\beta_1 + p_{12}(d)\beta_2] = \max_d [p_{11}(d)(\beta_1 - \beta_2) + \beta_2].$$

If the system is initially in the state $\varepsilon_1$, then clearly we should maximize the transition probability $p_{11}$ (by choosing $p_{11} = \beta_1$) if $\beta_1 > \beta_2$, while maximizing the transition probability $p_{12} = 1 - p_{11}$ (by choosing $p_{11} = \alpha_1$) if $\beta_1 < \beta_2$. There is an analogous optimal decision rule for the case where the initial state of the system is $\varepsilon_2$.

**Example 2 (The optimal choice problem).** Once again we consider the optimal choice problem studied on pp. 28–29 and 86–87, corresponding to

* In keeping with (2)–(4), we have

$$P^0(n, j) = \begin{cases} 1 & \text{if } \varepsilon_j \in E, \\ 0 & \text{otherwise.} \end{cases}$$

* Clearly, any choice of $p_{11}$ in the interval $\alpha_1 < p_{11} < \beta_1$ is optimal if $\beta_1 = \beta_2$.