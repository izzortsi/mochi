for arbitrary $s$ and $t$. Therefore $\ln \varphi(t)$ is proportional to $t$ (recall footnote 4, p. 40), say

$$\ln \varphi(t) = -\lambda t, \quad t \geq 0,$$

(8.6)

where $\lambda$ is some nonnegative constant (why nonnegative?). But (8.6) implies (8.5).

The parameter $\lambda$ figuring in (8.4) is called the density of the transition out of the state $\varepsilon$. If $\lambda = 0$, the process remains forever in $\varepsilon$. If $\lambda > 0$, the probability of the process undergoing a change of state in a small time internal $\Delta t$ is clearly

$$1 - \varphi(\Delta t) = \lambda \Delta t + o(\Delta t),$$

(8.7)

where $o(\Delta t)$ denotes an infinitesimal of higher order than $\Delta t$.

It follows from (8.5) that

$$\mathbf{P}\{t_1 < t < \tau_2\} = \varphi(t_1) - \varphi(t_2) = e^{-\lambda t_1} - e^{-\lambda t_2} = \int_{t_1}^{t_2} \lambda e^{-\lambda t} dt$$

(8.8)

for arbitrary nonnegative $t_1$ and $t_2$ ($t_1 \leq t_2$). Therefore the random variable $\tau$, called the sojourn time in state $\varepsilon$, has the probability density

$$p_r(t) = \begin{cases} \lambda e^{-\lambda t} & \text{if } t > 0, \\ 0 & \text{if } t < 0. \end{cases}$$

(8.9)

The distribution corresponding to (8.8) and (8.9) is called the exponential distribution, with parameter $\lambda$. The mean value $\mathbf{E}\tau$, i.e., the “expected sojourn time in state $\varepsilon$,” is given by

$$\mathbf{E}\tau = \int_0^\infty t p_r(t) dt = \frac{1}{\lambda}.$$

Example (Radioactive decay). In Example 3, p. 58, we gave a probabilistic model of the radioactive decay of radium (Ra) into radon (Rn). The behavior of each of the $n_0$ radium atoms is described by a Markov process with two states (Ra and Rn) and one possible transition (Ra $\rightarrow$ Rn). As on p. 58, let $p(t)$ be the probability that a radium atom decays into a radon atom in time $t$, and $\xi(t)$ the number of alpha particles emitted in $t$ seconds. Then, according to formula (5.7),

$$\mathbf{P}\{\xi(t) = k\} = \frac{a^k}{k!} e^{-a}, \quad k = 0, 1, 2, \ldots,$$

where

$$a = \mathbf{E}\xi(t) = n_0 p(t).$$

It follows from (8.5) that

$$p(t) = 1 - e^{-\lambda t}, \quad t \geq 0,$$