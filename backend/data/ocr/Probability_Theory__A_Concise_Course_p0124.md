2. A man has two telephones on his desk, one receiving calls with density $\lambda_1$, the other with density $\lambda_2$. What is the probability of exactly $n$ calls being received in $t$ seconds?

Hint. Recall Problem 9, p. 81. Neglect the effect of the lines being found busy.

$$\text{Ans.} \frac{[(\lambda_1 + \lambda_2)t]^n}{n!} e^{-(\lambda_1 + \lambda_2)t}.$$

3. Given a Poisson process with density $\lambda$, let $\xi(t)$ be the number of events occurring in time $t$. Find the correlation coefficient of the random variables $\xi(t)$ and $\xi(t + \tau)$, where $\tau > 0$.

$$\text{Ans.} \sqrt{\frac{t}{t + \tau}}.$$

4. Show that (8.24) leads to Erlang's formula (8.30) for $m = 1$.

5. The arrival of customers at the complaint desk of a department store is described by a Poisson process with density $\lambda$. Suppose each clerk takes a random time $\tau$ to handle a complaint, where $\tau$ has an exponential distribution with parameter $\mu$, and suppose a customer leaves whenever he finds all the clerks busy. How many clerks are needed to make the probability of customers leaving unserved less than 0.015 if $\lambda = \mu$?

Hint. Use Erlang's formula (8.30).

Ans. Four.

6. A single repairman services $m$ automatic machines, which normally do not require his attention. Each machine has probability $\lambda \Delta t + o(\Delta t)$ of breaking down in a small time interval $\Delta t$. The time required to repair each machine is exponentially distributed with parameter $\mu$. Find the limiting probability of exactly $j$ machines being out of order.

Hint. Solve the system of equations

$$m \lambda p_0^* = \mu p_1^*,
$$

$$[(m - j) \lambda + \mu] p_j^* = (m - j + 1) \lambda p_{j-1}^* + \mu p_{j+1}^*,
$$

$$\mu p_m^* = \lambda p_{m-1}^*.$$

Ans. $p_j^* = \frac{m!}{(m - j)!} \left( \frac{\lambda}{\mu} \right)^j p_0^*$, $j = 0, 1, \ldots, m$,

where $p_0^*$ is determined from the condition $\sum_{j=0}^{m} p_j^* = 1$.

Comment. Note the similarity between this result and formula (8.30).

7. In the preceding problem, find the average number of machines awaiting the repairman's attention.

Ans. $m - \frac{\lambda + \mu}{\lambda} (1 - p_0^*).$

10 It is assumed that the incoming calls on each line form a Poisson process.