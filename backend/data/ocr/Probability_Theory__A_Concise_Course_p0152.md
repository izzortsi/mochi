Clearly, if the process occupies the state $\varepsilon_m$, then the $m$th object is the best of the first $m$ objects inspected and hence automatically the best of all objects. Therefore the optimal value of the decision rule $d = d(x)$ for $x = \varepsilon_m$ is just $d^0(\varepsilon_m) = 0$, and $P(m, d) = 1$ for this value. It follows from (9) and (10) that

$$P(m - 1, d) = \begin{cases} \frac{m - 1}{m} & \text{if } d(\varepsilon_{m-1}) = 0, \\ \frac{m - 1}{(m - 1)m} & \text{if } d(\varepsilon_{m-1}) = 1 \end{cases}$$

is the probability of choosing the best object, given that the process stops in the state $\varepsilon_m$ and the number of previously inspected objects is no less than $m - 1$. Moreover, (11) implies that the optimal value of the decision rule $d = d(x)$ for $x = \varepsilon_{m-1}$ is $d^0(\varepsilon_{m-1}) = 0$, and that

$$P^0(m - 1) = \frac{m - 1}{m}$$

Now suppose the optimum values of the decision rule $d = d(x)$ are all zero for $x = \varepsilon_k, \ldots, \varepsilon_m$, corresponding to the fact that the process is terminated in any of the states $\varepsilon_k, \ldots, \varepsilon_n$. Then what is the optimal value $d^0(\varepsilon_{k-1})$? To answer this question, we note that (9) and (10) imply that

$$P(k - 1, d) = \begin{cases} \frac{k - 1}{m} & \text{if } d(\varepsilon_{k-1}) = 0, \\ \frac{k - 1}{(k - 1)k} + \frac{k - 1}{k(k + 1)} \frac{k + 1}{m} + \cdots + \frac{k - 1}{(m - 1)m} \cdot 1 & \text{if } d(\varepsilon_{k-1}) = 1 \end{cases}$$

is the probability of choosing the best object, given that the process stops in the states $\varepsilon_k, \ldots, \varepsilon_m$ and the number of previously inspected objects is no less than $k - 1$. It follows that the optimal value of the decision rule $d = d(x)$ for $x = \varepsilon_{k-1}$ is

$$d^0(\varepsilon_{k-1}) = \begin{cases} 0 & \text{if } \frac{1}{k - 1} + \frac{1}{k} + \cdots + \frac{1}{m - 1} \leq 1, \\ 1 & \text{otherwise.} \end{cases}$$

Moreover, it is easy to see that the optimal decision rule $d^0 = d^0(x)$ has the structure

$$d^0(x) = \begin{cases} 0 & \text{if } x = \varepsilon_{m_0}, \ldots, \varepsilon_m, \\ 1 & \text{if } x = \varepsilon_1, \ldots, \varepsilon_{m_0-1}, \end{cases}$$