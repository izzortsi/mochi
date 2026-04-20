7. Discrete and Continuous Random Variables. Distribution Functions

Given a sample space $\Omega$, by a random variable we mean a numerical function $\xi = \xi(\omega)$ whose value depends on the elementary events $\omega \in \Omega$. Let $\mathbf{P}\{x' \leq \xi \leq x''\}$ be the probability of the event $\{x' \leq \xi \leq x''\}$, i.e., the probability that $\xi$ takes a value in the interval $x' \leq x \leq x''$. Then knowledge of $\mathbf{P}\{x' \leq \xi \leq x''\}$ for all $x'$ and $x''$ ($x' \leq x''$) is said to specify the probability distribution of the random variable $\xi$.

A random variable $\xi = \xi(\omega)$ is said to be discrete (or to have a discrete distribution) if $\xi$ takes only a finite or countably infinite number of distinct values $x$, with corresponding probabilities

$$P_\xi(x) = \mathbf{P}\{\xi = x\},$$

$$\sum_{-\infty}^{\infty} P_\xi(x) = 1,$$

where the summation is over all the values of $x$ taken by $\xi$. For such random variables,

$$\mathbf{P}\{x' \leq \xi \leq x''\} = \sum_{x'} P_\xi(x),$$

(4.1)

where the summation is over the finite or countably infinite number of values of $x$ which $\xi$ can take in the interval $x' \leq x \leq x''$.

A random variable $\xi = \xi(\omega)$ is said to be continuous (or to have a continuous distribution) if

$$\mathbf{P}\{x' \leq \xi \leq x''\} = \int_{x'}^{x''} p_\xi(x) \, dx,$$

(4.2)