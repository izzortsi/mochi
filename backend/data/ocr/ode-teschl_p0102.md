3.6. Periodic linear systems

In this section we want to consider (3.79) in the special case where $A(t)$ is periodic,

$$A(t + T) = A(t), \quad T > 0.$$ (3.117)

This periodicity condition implies that $x(t + T)$ is again a solution if $x(t)$ is. Moreover, we even have

**Lemma 3.14.** Suppose $A(t)$ is periodic with period $T$. Then the principal matrix solution satisfies

$$\Pi(t + T, t_0 + T) = \Pi(t, t_0).$$ (3.118)

**Proof.** By $\frac{d}{dt}\Pi(t + T, t_0 + T) = A(t + T)\Pi(t + T, t_0 + T) = A(t)\Pi(t + T, t_0 + T)$ and $\Pi(t_0 + T, t_0 + T) = \mathbb{I}$ we see that $\Pi(t + T, t_0 + T)$ solves (3.83). Thus it is equal to $\Pi(t, t_0)$ by uniqueness.

Hence it suggests itself to investigate what happens if we move on by one period, that is, to look at the **monodromy matrix**

$$M(t_0) = \Pi(t_0 + T, t_0).$$ (3.119)

Note that $M(t_0)$ is periodic by our previous lemma, that is, $M(t_0 + T) = M(t_0)$.

A first naive guess would be that all initial conditions return to their starting values after one period (i.e., $M(t_0) = \mathbb{I}$) and hence all solutions are periodic. However, this is too much to hope for since it already fails in one dimension with $A(t)$ a constant.

However, we have

$$\Pi(t_0 + \ell T, t_0) = \Pi(t_0 + \ell T, t_0 + (\ell - 1)T)\Pi(t_0 + (\ell - 1)T, t_0)$$

$$= M(t_0 + (\ell - 1)T)\Pi(t_0 + (\ell - 1)T, t_0)$$

$$= M(t_0)\Pi(t_0 + (\ell - 1)T, t_0)$$

$$= M(t_0)^\ell \Pi(t_0, t_0) = M(t_0)^\ell.$$ (3.120)

Thus $\Pi(t, t_0)$ exhibits an exponential behavior if we move on by one period in each step. If we factor out this exponential term, the remainder should be periodic.

To factor out the exponential term we need to give a meaning to $M(t_0)^\ell$ for the case where $\frac{t}{T} = \ell$ is not an integer. If $M(t_0)$ is a number, the usual way of doing this is to set $M(t_0)^{t/T} = \exp(\frac{t}{T}\log(M(t_0)))$. To mimic this trick we need to find a matrix $Q(t_0)$ such that

$$M(t_0) = \exp(TQ(t_0)), \quad Q(t_0 + T) = Q(t_0).$$ (3.121)