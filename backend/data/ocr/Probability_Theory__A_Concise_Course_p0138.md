Consider a group of particles, each “randomly producing” more particles of the same type by the following process:

a) The probability that each of the particles originally present at some time $t = 0$ produces a group of $k$ particles after a time $t$ is given by $p_k(t)$, where $k = 0, 1, 2, \ldots$ and $p_k(t)$ is the same for all the particles.$^1$

b) The behavior of each particle is independent of the behavior of the other particles and of the events prior to the initial time $t = 0$.

A random process described by this model is called a branching process. As concrete examples of such processes, think of nuclear chain reactions, survival of family names, etc.$^2$

Let $\xi(t)$ be the total number of particles present at time $t$. Then $\xi(t)$ is a Markov process (why?). Suppose there are exactly $k$ particles initially present at time $t = 0$, and let $\xi_t(t)$ be the number of particles produced by the $i$th particle after a time $t$. Then clearly

$$\xi(t) = \xi_1(t) + \cdots + \xi_k(t),$$

(1)

where the random variables $\xi_1(t), \ldots, \xi_k(t)$ are independent and have the same probability distribution

$$P\{\xi_1(t) = n\} = p_n(t), \quad n = 0, 1, 2, \ldots$$

$^1$ The case $k = 0$ corresponds to “annihilation” of a particle.

$^2$ Concerning these examples and others, see W. Feller, *op. cit.*, p. 294.