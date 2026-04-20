successes in $n$ Bernoulli trials. Moreover, the relation between the particle’s position at time $t$ and the normalized random variable

$$S_n^* = \frac{S_n - np}{\sqrt{npq}} = \frac{1}{\sqrt{n}} (2S_n - n)$$

is given by

$$\xi(t) = S_n^* \sqrt{n} \Delta x = S_n^* \sqrt{t} \frac{\Delta x}{\sqrt{\Delta t}} = S_n^* \sigma \sqrt{t},$$

because of (5.14) and (5.17). Applying Theorem 5.1, in particular formula (5.8), and passing to the limit $\Delta t \to 0$ while holding $\sigma$ constant (so that $\Delta x \to 0$), we find that the random variable $\xi(t)$ describing the one-dimensional Brownian motion satisfies the formula

$$\mathbf{P} \left\{ x' \leq \frac{\xi(t)}{\sigma \sqrt{t}} \leq x'' \right\} = \lim_{\Delta t \to 0} \mathbf{P} \left\{ x' \leq S_n^* \leq x'' \right\} = \frac{1}{\sqrt{2\pi}} \int_{x'}^{x''} e^{-x^2/2} dx.$$

Therefore $\xi(t)$ is a normal random variable with probability distribution

$$\mathbf{P} \left\{ x' \leq \xi(t) \leq x'' \right\} = \frac{1}{\sigma \sqrt{2\pi t}} \int_{x'}^{x''} e^{-x^2/2 \sigma^2 t} dx.$$

PROBLEMS

1. Consider the game of “heads or tails,” as in Example 3, p. 29. Show that the probability of correctly calling the side of the coin landing upward is always $\frac{1}{2}$ regardless of the call, provided the coin is unbiased. However, show that if the coin is biased, then “heads” should be called all the time if heads are more likely, while “tails” should be called all the time if tails are more likely.

2. There are 10 children in a given family. Assuming that a boy is as likely to be born as a girl, what is the probability of the family having
   a) 5 boys and 5 girls; b) From 3 to 7 boys?

3. Suppose the probability of hitting a target with a single shot is 0.001. What is the probability $P$ of hitting the target 2 or more times in 5000 shots?

   Ans. $P \approx 1 - 6e^{-5} \approx 0.96$.

4. The page proof of a 500-page book contains 500 misprints. What is the probability $P$ of 2 or more misprints appearing on the same page?

   Ans. $P \approx 1 - \frac{5}{2e} \approx 0.08$.

5. Let $p$ be the probability of success in a series of Bernoulli trials. What is the probability $P_n$ of an even number of successes in $n$ trials?

   Ans. $P_n = \frac{1}{2} [1 + (1 - 2p)^n].$