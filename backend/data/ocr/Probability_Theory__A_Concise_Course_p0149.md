where the summation is over all $j$ such that the state $\varepsilon_j$ belongs to the given set $E$. Obviously, $P(n - 1, i, d)$ does not depend on values of the control parameter other than the values $d(\varepsilon_i, n - 1)$ chosen at the time $n - 1$. Letting $d^0$ denote the value of the control parameter at which the function (3) takes its maximum, we have

$$P^0(n - 1, i) = P(n - 1, i, d^0) = \max_{d \in D} P(n - 1, i, d).$$

Clearly, there is a value $d^0 = d^0(\varepsilon_i, n - 1)$ corresponding to every pair $(\varepsilon_i, n - 1), i = 1, 2, \ldots$.

For $k = n - 2$, formula (1) becomes

$$P(n - 2, i, d) = \sum_j p_{ij}(d)P(n - 1, j, d).$$

Here the probabilities $p_{ij}(d)$ depend only on the values $d = d(\varepsilon_i, n - 2)$ of the decision rule $d = d(x, t)$ chosen at time $n - 2$, while the probabilities $P(n - 1, j, d)$ depend only on the values $d = d(\varepsilon_j, n - 1)$ chosen at time $n - 1$. Suppose we “correct” the decision rule $d = d(x, t)$ by replacing the original values $d(\varepsilon_j, n - 1)$ by the values $d^0(\varepsilon_j, n - 1)$ just found. Then the corresponding probabilities $P(n - 1, j, d)$ increase to their maximum values $P^0(n - 1, j)$, thereby increasing the probability $P(n - 2, i, d)$ to the value

$$P(n - 2, i, d) = \sum_j p_{ij}(d)P^0(n - 1, j).$$

Clearly, (5) depends on the decision rule $d = d(t, x)$ only through the dependence of the transition probabilities $p_{ij}(d)$ on the values $d = d(\varepsilon_i, n - 2)$ of the control parameter at time $n - 2$. Again letting $d^0$ denote the value of the control parameter at which the function (5) takes its maximum, we have

$$P^0(n - 2, i) = P(n - 2, i, d^0) = \max_{d \in D} P(n - 2, i, d).$$

As before, there is a value $d^0 = d^0(\varepsilon_i, n - 2)$ corresponding to every pair $(\varepsilon_i, n - 2), i = 1, 2, \ldots$. Suppose we “correct” the decision rule $d(x, t)$ by setting

$$d(x, t) = d^0(x, t)$$

for $t = n - 2, n - 1$ and all $x = \varepsilon_1, \varepsilon_2, \ldots$. Then clearly the probabilities $P(k, i, d)$ take their maximum values $P^0(k, i)$ for $i = 1, 2, \ldots$ and $k = n - 2, n - 1$. Correspondingly, formula (1) becomes

$$P(n - 3, i, d) = \sum_j p_{ij}(d)P(n - 2, j, d) = \sum_j p_{ij}(d)P^0(n - 2, j),$$

and this function of the control parameter $d$ takes its maximum for some $d^0 = d^0(\varepsilon_i, n - 3)$. We can then, once again, “correct” the decision rule

1 It will be assumed that this maximum and the others considered below exist.