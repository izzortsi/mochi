or equivalently

$$x(t) = u(e^{At}c),$$

(8.115)

where

$$u(x) = x + \sum_{|k| \geq 2} u_k x^k.$$

(8.116)

Inserting this ansatz into (8.112) gives

$$\frac{\partial u}{\partial x}(x) Ax = Au(x) + g(u(x)),$$

(8.117)

that is,

$$\sum_{|k| \geq 2} (\omega k - A) u_k x^k = g(x + \sum_{|k| \geq 2} u_k x^k).$$

(8.118)

Comparing coefficients of $x^k$ shows that

$$(i\omega k - A)u_k = \text{terms involving } u_\ell \text{ for } |\ell| < |k|.$$

(8.119)

Hence the coefficients $u_k$ can be determined recursively provided

$$\omega k - \omega_j \neq 0 \text{ for all } |k| \geq 2, 1 \leq j \leq n.$$

(8.120)

Next one needs to show that the corresponding series converges and it is clear that this will only be the case if the divisors $\omega k - \omega_j$ do not tend to zero too fast. In fact, it can be shown that this is the case if there are positive constants $\delta, \tau$ such that

$$|\omega k - \omega_j| \geq \frac{\delta}{|k|^\tau}$$

(8.121)

holds. Moreover, it can be shown that the set of frequencies $\omega$ satisfying (8.121) for some constants is dense and of full Lebesgue measure in $\mathbb{R}^n$.

An example which shows that the system is unstable if the frequencies are resonant is given in Problem 8.21.

**Problem 8.21. Consider**

$$g(x) = \begin{pmatrix} x_{1}^{k_1+1} x_{2}^{k_2} \\ 0 \end{pmatrix}, \quad \omega_1 k_1 + \omega_2 k_2 = 0,$$

and show that the associated system is unstable. (Hint: Bernoulli equation.)