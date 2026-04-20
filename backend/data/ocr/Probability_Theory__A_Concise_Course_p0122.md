for all $t > 0$. In fact, taking the limit as $s \to \infty$ in (8.2), we get

$$p_j^* = \sum_i p_i^* p_{ij}(t), \quad j = 1, \ldots, m. \tag{8.27}$$

But the right-hand side is just $p_j(t)$, as we see by choosing $s = 0$ in (8.2). Suppose the transition probabilities satisfy the conditions (8.12). Then differentiating (8.27) and setting $t = 0$, we find that

$$\sum_i p_i^* \lambda_{ij} = 0, \quad j = 1, \ldots, m, \tag{8.28}$$

where $\lambda_{ij}$ is the density of the transition from the state $\varepsilon_i$ to the state $\varepsilon_j$.

**Example (A service system with $m$ servers).** Consider a service system which can handle up to $m$ incoming calls at once, i.e., suppose there are $m$ servers and an incoming call can be handled if at least one server is free. As in Example 2, p. 108, we assume that the incoming traffic is of the Poisson type with density $\lambda$, and that the time it takes each server to service a call is exponentially distributed with parameter $\mu$ (this is again a case of “exponential holding times”). Moreover, it will be assumed that a call is rejected (and is no longer a candidate for service) if it arrives when all $m$ servers are busy, and that the “holding times” of the $m$ servers are independent random variables.

If precisely $j$ servers are busy, we say that the service system is in the state $\varepsilon_j$ ($j = 0, 1, \ldots, m$). In particular, $\varepsilon_0$ means that the whole system is free and $\varepsilon_m$ that the system is completely busy. For almost the same reasons as on p. 108, the evolution of the system in time from state to state is described by a Markov process. The only nonzero transition probabilities of this process are

$$\lambda_{00} = -\lambda, \quad \lambda_{01} = \lambda, \quad \lambda_{mm} = -m\mu,$$

$$\lambda_{j,j-1} = j\mu, \quad \lambda_{jj} = -(\lambda + j\mu), \quad \lambda_{j,j+1} = \lambda \quad (j = 1, \ldots, m-1). \tag{8.29}$$

In fact, suppose the system is in the state $\varepsilon_j$. Then a transition from $\varepsilon_j$ to $\varepsilon_{j+1}$ takes place if a single call arrives, which happens in a small time interval $\Delta t$ with probability $\lambda\Delta t + o(\Delta t)$. Moreover, the probability that none of the $j$ busy servers becomes free in time $\Delta t$ is just

$$[1 - \mu\Delta t + o(\Delta t)]^j,$$

since the holding times are independent, and hence the probability of at least one server becoming free in time $\Delta t$ equals

$$1 - [1 - \mu\Delta t + o(\Delta t)]^j = j\mu\Delta t + o(\Delta t).$$

---

9 For small $\Delta t$, this is also the probability of at least one call arriving in $\Delta t$.