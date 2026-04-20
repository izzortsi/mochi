PROBLEMS OF OPTIMAL CONTROL

As in Sec. 15, consider a physical system which randomly changes its state at the times $t = 1, 2, \ldots$, starting from some initial state at time $t = 0$. Let $\varepsilon_1, \varepsilon_2, \ldots$ be the possible states of the system, and $\xi(t)$ the state of the system at time $t$, so that the evolution of the system in time is described by the consecutive transitions

$$\xi(0) \rightarrow \xi(1) \rightarrow \xi(2) \ldots.$$

We will assume that $\xi(t)$ is a Markov chain, whose transition probabilities $p_{ij}, i, j = 1, 2, \ldots$ depend on a “control parameter” chosen step by step by an external “operator.” More exactly, if the system is in state $\varepsilon_i$ at any time $n$ and if $d$ is the value of the control parameter chosen by the operator, then

$$p_{ij} = p_{ij}(d)$$

is the probability of the system going into the state $\varepsilon_j$ at the next step. The set of all possible values of the control parameter $d$ will be denoted by $D$.

We now pose the problem of controlling this “guided random process” by bringing the system into a definite state, or more generally into one of a given set of states $E$, after a given number of steps $n$. Since the evolution of the process $\xi(t)$ depends not only on the control exerted by the operator, but also on chance, there is usually only a definite probability $P$ of bringing the system into one of the states of the set $E$, where $P$ depends on the “control program” adopted by the operator. We will assume that every such control program consists in specifying in advance, for all $\varepsilon_i$ and $t = 0, \ldots, n - 1$, the parameter

$$d = d(\varepsilon_i, t)$$