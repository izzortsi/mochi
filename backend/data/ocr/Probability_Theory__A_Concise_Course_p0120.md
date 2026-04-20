where we use the fact that

$$p_{10}(\Delta t) = 1 - e^{-\mu \Delta t} = \mu \Delta t + o(\Delta t).$$

Hence in this case the forward Kolmogorov equations (8.14) become

$$p'_{00}(t) = \lambda_{00} p_{00}(t) + \lambda_{10} p_{01}(t) = -\lambda p_{00}(t) + \mu[1 - p_{00}(t)],$$
$$p'_{11}(t) = \lambda_{01} p_{10}(t) + \lambda_{11} p_{11}(t) = \lambda[1 - p_{00}(t)] - \mu p_{11}(t),$$

i.e.,

$$p'_{00}(t) + (\lambda + \mu) p_{00}(t) = \mu,$$
$$p'_{11}(t) + (\lambda + \mu) p_{11}(t) = \lambda.$$

Solving (8.23) subject to the initial conditions

$$p_{00}(0) = p_{11}(0) = 1,$$

we get

$$p_{00}(t) = \left(1 - \frac{\mu}{\lambda + \mu}\right) e^{-(\lambda + \mu) t} + \frac{\mu}{\lambda + \mu},$$
$$p_{11}(t) = \left(1 - \frac{\lambda}{\lambda + \mu}\right) e^{-(\lambda + \mu) t} + \frac{\lambda}{\lambda + \mu}.$$

20. More on Limiting Probabilities. Erlang’s Formula

We now prove the continuous analogue of Theorem 7.4:

**THEOREM 8.3.** Let $\xi(t)$ be a Markov process with a finite number of states, $\epsilon_1, \ldots, \epsilon_m$, each accessible from every other state. Then

$$\lim_{t \to \infty} p_j(t) = p_j^*,$$

where $p_j(t)$ is the probability of $\xi(t)$ being in the state $\epsilon_j$ at time $t$. The numbers $p_j^*$, $j = 1, \ldots, m$, called the *limiting probabilities*, do not depend on the initial probability distribution and satisfy the inequalities

$$\max_{t} |p_{ij}(t) - p_j^*| \leq Ce^{-Dt}, \quad |p_j(t) - p_j^*| \leq Ce^{-Dt}$$

for suitable positive constants $C$ and $D$.

**Proof.** The proof is virtually the same as that of Theorem 7.4 for Markov chains, once we verify that the continuous analogue of the condition (7.20), p. 93 is automatically satisfied. In fact, we now have

$$\min_{t,j} p_{ij}(t) = \delta(t) > 0$$

$^8$ Because of (8.22), there is no need to write equations for $p_{01}(t)$ and $p'_{10}(t)$.