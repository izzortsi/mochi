18. Definitions. The Sojourn Time

Consider a physical system with the following properties, which are the exact analogues of those given on p. 83 for a Markov chain, except that now the time $t$ varies continuously:

a) The system can occupy any of a finite or countably infinite number of states $\varepsilon_1, \varepsilon_2, \ldots$.

b) Starting from some initial state at time $t = 0$, the system changes its state randomly at subsequent times. Thus, the evolution of the system in time is described by the “random function” $\xi(t)$, equal to the state of the system at time $t$.

c) At time $t = 0$, the system occupies the state $\varepsilon_i$ with initial probability

$$p_i^0 = \mathbf{P} \{ \xi(0) = \varepsilon_i \}, \quad i = 1, 2, \ldots$$

d) Suppose the system is in the state $\varepsilon_i$ at any time $s$. Then the probability that the system goes into the state $\varepsilon_j$ after a time $t$ is given by

$$p_{ij}(t) = \mathbf{P} \{ \xi(s + t) = \varepsilon_j \mid \xi(s) = \varepsilon_i \}, \quad i, j = 1, 2, \ldots,$$

(8.1)

regardless of its behavior before the time $s$. The numbers $p_{ij}(t)$, called the transition probabilities, do not depend on the time $s$.

A random process described by this model is called a continuous Markov

1 Recall footnote 1, p. 83. Note that $\xi(t)$ is a random variable for any fixed $t$.