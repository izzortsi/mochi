8. Solve Problem 6 for the case of $r$ repairmen, where $1 < r < m$.

9. An electric power line serves $m$ identical machines, each operating independently of the others. Suppose that in a small interval of time $\Delta t$ each machine has probability $\lambda \Delta t + o(\Delta t)$ of being turned on and probability $\mu \Delta t + o(\Delta t)$ of being turned off. Find the limiting probability $p_j^*$ of exactly $j$ machines being on.

**Hint.** Solve the system of equations

$$m \lambda p_0^* = \mu p_1^*,
$$
[(m - j) \lambda + j \mu] p_j^* = (m - j + 1) \lambda p_{j-1}^* + (j + 1) \mu p_{j+1}^*,
$$
m \mu p_m^* = \lambda p_{m-1}^*.

**Ans.** $p_j^* = C_j^m \left( \frac{\mu}{\lambda + \mu} \right)^{m-j} \left( \frac{\lambda}{\lambda + \mu} \right)^j, \quad j = 0, 1, \ldots, m.

10. Show that the answer to the preceding problem is just what one would expect by an elementary argument if $\lambda = \mu$.