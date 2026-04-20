Chapter 10

Discrete dynamical systems

10.1. The logistic equation

This chapter gives a brief introduction to discrete dynamical systems. Most of the results are similar to the ones obtained for continuous dynamical systems. Moreover, most results won’t be needed until Chapter 12. We begin with a simple example.

Let $N(t)$ be the size of a certain species at time $t$ whose growth rate is proportional to the present amount, that is,

$$\dot{N}(t) = \kappa N(t).$$

(10.1)

The solution of this equation is clearly given by $N(t) = N_0 \exp(\kappa t)$. Hence the population grows exponentially if $\kappa > 0$ and decreases exponentially if $\kappa < 0$. Similarly, we could model this situation by a difference equation

$$N(n+1) - N(n) = kN(n)$$

(10.2)

or equivalently

$$N(n+1) = (1+k)N(n),$$

(10.3)

where $N(n)$ is now the population after $n$ time intervals (say years). The solution is given by $N(n) = N_0(1+k)^n$ and we have again exponential growth or decay according to the sign of $k > -1$. In particular, there is no big difference between the continuous and the discrete case and we even get the same results at $t=n$ if we set $\kappa = \log(1+k)$.