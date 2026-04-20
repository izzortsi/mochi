In other words, at each step the particle undergoes a shift of amount $\Delta x$ either to the right or to the left, with equal probability.³

Now let $\xi(t)$ denote the position of our “Brownian particle” at time $t$, and suppose the particle is at the point $x = 0$ at time $t = 0$, so that $\xi(0) = 0$. Then after $t = n\Delta t$ seconds, the particle undergoes $n$ displacements of amount $\Delta x$, of which $S_n$, say, are to the right (the positive direction) and $n - S_n$ to the left (the negative direction). As a result, the position of the particle at time $t = n\Delta t$ is just

$$\xi(t) = [S_n \Delta x - (n - S_n) \Delta x] = (2S_n - n)\Delta x. \tag{5.14}$$

Moreover, since $\xi(0) = 0$, we have

$$\xi(t) = [\xi(s) - \xi(0)] + [\xi(t) - \xi(s)]$$

for any $s$ in the interval $0 \leq s \leq t$ (for the time being, $s$ is an integral multiple of $\Delta x$). With our assumptions, it is clear that the increments $\xi(s) - \xi(0)$ and $\xi(t) - \xi(s)$ are independent random variables, and that the probability distribution of $\xi(t) - \xi(s)$ is the same as that of $\xi(t - s) - \xi(0)$. Therefore the variance $\sigma^2(t) = \mathbf{D}\xi(t)$ satisfies the relation

$$\sigma^2(t) = \sigma^2(s) + \sigma^2(t - s), \quad 0 \leq s \leq t.$$

It follows that $\sigma^2(t)$ is proportional to $t$, i.e.,⁴

$$\mathbf{D}\xi(t) = \sigma^2 t, \tag{5.15}$$

where $\sigma^2$ is a constant called the diffusion coefficient. On the other hand, it is easy to see that after a time $t$, i.e., after $n = t/\Delta t$ steps, the variance of the displacement must be

$$\mathbf{D}\xi(t) := \frac{t}{\Delta t} (\Delta x)^2. \tag{5.16}$$

Comparing (5.15) and (5.16), we obtain

$$\sigma^2 = \frac{(\Delta x)^2}{\Delta t}. \tag{5.17}$$

The displacements of the particle are independent of one another and can be regarded as Bernoulli trials with probability of “success” $p = \frac{1}{2}$, “success” being interpreted as a displacement in the positive direction. In this sense, the number of displacements $S_n$ in the positive direction is just the number of

³ We will eventually pass to the limit $\Delta t \to 0$, $\Delta x \to 0$, thereby getting the “continuous random walk” characteristic of the actual physical process of Brownian motion.

⁴ See footnote 4, p. 40.