The answers are found in Theorem 1, Exercise 4, Theorem 6, and Theorem 9. Uniform limits preserve continuity, uniform continuity, integrability, and – with an additional hypothesis – differentiability.

**Figure 88** Non-uniform, pointwise convergence

**1 Theorem** If $f_n \rightrightarrows f$ and each $f_n$ is continuous at $x_0$ then $f$ is continuous at $x_0$.

In other words,

*The uniform limit of continuous functions is continuous.*

**Proof** For simplicity, assume that the functions have domain $[a, b]$ and target $\mathbb{R}$. (See also Section 8 and Exercise 2.) Let $\epsilon > 0$ and $x_0 \in [a, b]$ be given. There is an $N$ such that for all $n \geq N$ and all $x \in [a, b]$ we have

$$|f_n(x) - f(x)| < \frac{\epsilon}{3}.$$

The function $f_N$ is continuous at $x_0$ and so there is a $\delta > 0$ such that $|x - x_0| < \delta$ implies

$$|f_N(x) - f_N(x_0)| < \frac{\epsilon}{3}.$$

Thus, if $|x - x_0| < \delta$ then

$$|f(x) - f(x_0)| \leq |f(x) - f_N(x)| + |f_N(x) - f_N(x_0)| + |f_N(x_0) - f(x_0)|$$

$$\leq \frac{\epsilon}{3} + \frac{\epsilon}{3} + \frac{\epsilon}{3} = \epsilon,$$

which completes the proof that $f$ is continuous at $x_0$.