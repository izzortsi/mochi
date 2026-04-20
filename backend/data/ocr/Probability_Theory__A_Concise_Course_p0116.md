where $\lambda$ is the density of the transition Ra $\rightarrow$ Rn. Recalling (8.7), we see that $\lambda$ is the constant such that the probability of the transition Ra $\rightarrow$ Rn in a small time interval $\Delta t$ equals $\lambda \Delta t + o(\Delta t)$.

The number of (undisintegrated) radium atoms left after time $t$ is clearly $n_0 - \xi(t)$, with mean value

$$n(t) = \mathbf{E}[n_0 - \xi(t)] = n_0 - n_0 p(t) = n_0 e^{-\lambda t}, \quad t > 0. \tag{8.10}$$

Let $T$ be the half-life of radium, i.e., the amount of time required for half the radium to disappear (on the average). Then

$$n(T) = \frac{1}{2} n_0, \tag{8.11}$$

and hence, comparing (8.10) and (8.11), we find that $T$ is related to the density $\lambda$ of the transition Ra $\rightarrow$ Rn by the formula

$$T = \frac{\ln 2}{\lambda}.$$

19. The Kolmogorov Equations

Next we find differential equations satisfied by the transition probabilities of a Markov process:

**Theorem 8.2.** Given a Markov process with a finite number of states, suppose the transition probabilities $p_{ij}(t)$ are such that

$$1 - p_{ii}(\Delta t) = \lambda_t \Delta t + o(\Delta t), \quad i = 1, 2, \ldots,$$

$$p_{ij}(\Delta t) = \lambda_{ij} \Delta t + o(\Delta t), \quad j \neq i, \quad i, j = 1, 2, \ldots,$$

and let

$$\lambda_{ii} = -\lambda_i, \quad i = 1, 2, \ldots \tag{8.13}$$

Then the transition probabilities satisfy two systems of linear differential equations, for forward Kolmogorov equations

$$p'_{ij}(t) = \sum_k p_{ik}(t) \lambda_{kj}, \quad i, j = 1, 2, \ldots \tag{8.14}$$

and the backward Kolmogorov equations

$$p'_{ij}(t) = \sum_k \lambda_{ik} p_{kj}(t), \quad i, j = 1, 2, \ldots \tag{8.15}$$

subject to the initial conditions (8.3).

---

4 We might call $\lambda_i$ the “density of the transition out of the state $\epsilon_i$,” and $\lambda_{ij}$ the “density of the transition from the state $\epsilon_i$ to the state $\epsilon_j$.”
5 The prime denotes differentiation with respect to $t$.