15. Transition Probabilities

Consider a physical system with the following properties:

a) The system can occupy any of a finite or countably infinite number of states $\varepsilon_1, \varepsilon_2, \ldots$.

b) Starting from some initial state at time $t = 0$, the system changes its state randomly at the times $t = 1, 2, \ldots$. Thus, if the random variable $\xi(t)$ is the state of the system at time $t$, the evolution of the system in time is described by the consecutive transitions (or “steps”)

$$\xi(0) \rightarrow \xi(1) \rightarrow \xi(2) \rightarrow \cdots.$$

c) At time $t = 0$, the system occupies the state $\varepsilon_i$ with initial probability

$$p_i^0 = \mathbf{P} \left\{\xi(0) = \varepsilon_i\right\}, \quad i = 1, 2, \ldots$$

(7.1)

d) Suppose the system is in the state $\varepsilon_i$ at any time $n$. Then the probability that the system goes into the state $\varepsilon_j$ at the next step is given by

$$p_{ij} = \mathbf{P} \left\{\xi(n + 1) = \varepsilon_j \mid \xi(n) = \varepsilon_i\right\}, \quad i, j = 1, 2, \ldots$$

(7.2)

regardless of its behavior before the time $n$. The numbers $p_{ij}$, called the transition probabilities, do not depend on the time $n$.

1 In calling $\xi(t)$ a random variable, we are tacitly assuming that the states $\varepsilon_1, \varepsilon_2, \ldots$ are numbers (random variables are numerical functions). This can always be achieved by the simple expedient of replacing $\varepsilon_1, \varepsilon_2, \ldots$ by the integers 1, 2, $\ldots$ (see W. Feller, op. cit., p. 419).