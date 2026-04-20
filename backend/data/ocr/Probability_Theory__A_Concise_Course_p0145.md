There is also the possibility of an “explosion” in which infinitely many particles are created. The probability of an explosion occurring by time $t$ is just

$$p_{\infty}(t) = 1 - \mathbf{P}\{\xi(t) < \infty\} = 1 - \sum_{n=0}^{\infty} \mathbf{P}\{\xi(t) = n\}$$

$$= 1 - \sum_{n=0}^{\infty} p_n(t) = 1 - \lim_{z \to 1} F(t, z).$$

In the case where $x(t) = 1$ is the unique integral curve of (9) passing through the point $(0, 1)$, we clearly have

$$\lim_{z \to 1} F(t, z) = 1.$$

Therefore $p_{\infty}(t) = 0$ for arbitrary $t$ if (14) holds, and the probability of an explosion ever occurring is 0. However, if (16) holds, we have (17) where $x_0(t)$ is the limiting integral curve described above and shown in Figure 13. In this case,

$$p_{\infty}(t) = 1 - x_0(t) > 0$$

and there is a positive probability of an explosion occurring.

PROBLEMS

1. A cosmic ray shower is initiated by a single particle entering the earth’s atmosphere. Find the probability $p_n(t)$ of $n$ particles being present after time $t$ if the probability of each particle producing a new particle in a small time interval $\Delta t$ is $\lambda \Delta t + o(\Delta t)$.

Hint. $\lambda_1 = -\lambda$, $\lambda_2 = \lambda$.

Ans. $p_n(t) = e^{-\lambda t}(1 - e^{-\lambda t})^{n-1}$, $n \geqslant 1$.

2. Solve Problem 1 if each particle has probability $\lambda \Delta t + o(\Delta t)$ of producing a new particle and probability $\mu \Delta t + o(\Delta t)$ of being annihilated in a small time interval $\Delta t$.

Hint. $\lambda_0 = \mu$, $\lambda_1 = -(\lambda + \mu)$, $\lambda_2 = \lambda$.

Ans. $p_0(t) = \mu \gamma$, $p_n(t) = (1 - \lambda \gamma)(1 - \mu \gamma)(\lambda \gamma)^{n-1}$ ($n \geqslant 1$),

where

$$\gamma = \begin{cases} 
\frac{1 - e^{(\lambda - \mu)t}}{\mu - \lambda e^{(\lambda - \mu)t}} & \text{if } \lambda \neq \mu, \\
\frac{t}{1 + \lambda t} & \text{if } \lambda = \mu.
\end{cases}$$