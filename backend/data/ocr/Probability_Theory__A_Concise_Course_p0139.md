Let $p_{kn}(t)$ be the probability of the $k$ particles giving rise to a total of $n$ particles after time $t$, so that the numbers $p_{kn}(t)$ are the transition probabilities of the Markov process $\xi(t)$, and introduce the generating functions

$$F(t, z) = \sum_{n=0}^{\infty} p_n(t)z^n,$$

(2)

$$F_k(t, z) = \sum_{n=0}^{\infty} p_{kn}(t)z^n.$$

(3)

Suppose the probability of a single particle giving rise to a total of $n$ particles in a small time interval $\Delta t$ is

$$p_n(\Delta t) = \lambda_n \Delta t + o(\Delta t),$$

while the probability of the particle remaining unchanged is

$$p_1(\Delta t) = 1 - \lambda \Delta t + o(\Delta t).$$

Moreover, let

$$\lambda_1 = -\lambda,$$

so that

$$\sum_k \lambda_k = 0.$$

(4)

Then the Kolmogorov equations (8.15), p. 105 for the transition probabilities $p_n(t) = p_{1n}(t)$ become

$$\frac{d}{dt} p_n(t) = \sum_k \lambda_k p_{kn}(t), \quad n = 0, 1, 2, \ldots.$$

Next we deduce a corresponding differential equation for the generating function $F(t, z)$. Clearly

$$\frac{d}{dt} F(t, z) = \frac{d}{dt} \sum_{n=0}^{\infty} p_n(t)z^n = \sum_{n=0}^{\infty} z^n \frac{d}{dt} p_n(t) = \sum_k \lambda_k \sum_{n=0}^{\infty} p_{kn}(t)z^n$$

(5)

(justify the term-by-term differentiation), where $F_k(t, z)$ is the generating function of the random variable $\xi(t)$ for the case of $k$ original particles. But, according to (1), $\xi(t)$ is the sum of $k$ independent random variables, each with generating function $F(t, z)$. Therefore, by formula (6.7), p. 71,

$$F_k(t, z) = [F(t, z)]^k, \quad k = 0, 1, 2, \ldots.$$

(6)

(the formula is trivial for $k = 0$). Substituting (6) into (5), we get

$$\frac{d}{dt} F(t, z) = \sum_k \lambda_k [F(t, z)]^k.$$

$^3$ Note that $F_1(t, z) = F(t, z)$, since clearly $p_{1n}(t) = p_n(t)$.

$^4$ Clearly $F_0(z) = 1$, since new particles cannot be created in the absence of any original particles.