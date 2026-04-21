Such a $t_k$ exists by the Mean Value Theorem applied to the differentiable function $G$. Telescoping gives

$$G(x) - G(a) = \sum_{k=1}^{n} G(x_k) - G(x_{k-1}) = \sum_{k=1}^{n} f(t_k) \Delta x_k,$$

which is a Riemann sum for $f$ on the interval $[a, x]$. Since $f$ is Riemann integrable, the Riemann sum converges to $F(x)$ as the mesh of the partition tends to zero. This gives $G(x) - G(a) = F(x)$ as claimed.

**38 Corollary** *Standard integral formulas, such as*

$$\int_{a}^{b} x^2 \, dx = \frac{b^3 - a^3}{3},$$

are valid.

**Proof** Every integral formula is actually a derivative formula, and the Antiderivative Theorem converts derivative formulas to integral formulas.

**Example** The logarithm function is defined as the integral,

$$\log x = \int_{1}^{x} \frac{1}{t} \, dt.$$

Since the integrand $1/t$ is well defined and continuous when $t > 0$, $\log x$ is well defined and differentiable for $x > 0$. Its derivative is $1/x$. By the way, as is standard in post-calculus vocabulary, $\log x$ refers to the natural logarithm, not to the base-10 logarithm. See also Exercise 16.

An antiderivative of $f$ has $G'(x) = f(x)$ everywhere, and differs from the indefinite integral $F(x)$ by a constant. But what if we assume instead that $H'(x) = f(x)$ almost everywhere? Should this not also imply $H(x)$ differs from $F(x)$ by a constant? Surprisingly, the answer is “no.”

**37 Theorem** *There exists a continuous function $H : [0, 1] \to \mathbb{R}$ whose derivative exists and equals zero almost everywhere, but which is not constant.*

**Proof** The counterexample is the Devil’s staircase function, also called the Cantor function. Its graph is shown in Figure 82 and it is defined as follows.

Each $x \in [0, 1]$ has a base-3 expansion $(\omega_1 \omega_2 \omega_3 \ldots)_3$ where

$$x = \sum_{i=1}^{\infty} \frac{\omega_i}{3^i}.$$