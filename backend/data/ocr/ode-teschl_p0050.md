where $\frac{\partial f(x_0)}{\partial x}$ denotes the Jacobian matrix at $x_0$ and $\|.\|$ denotes the matrix norm (cf. (3.8)). Conclude that a function $f \in C^1(U, \mathbb{R}^n)$, $U \subseteq \mathbb{R}^{n+1}$, is locally Lipschitz continuous in the second argument, uniformly with respect to the first, and thus satisfies the hypothesis of Theorem 2.2. (Hint: Start with the case $m = n = 1$.)

**Problem 2.6.** Are the following functions Lipschitz continuous near 0? If yes, find a Lipschitz constant for some interval containing 0.

(i) $f(x) = \frac{1}{1-x^2}$.
(ii) $f(x) = |x|^{1/2}$.
(iii) $f(x) = x^2 \sin\left(\frac{1}{x}\right)$.

**Problem 2.7.** Apply the Picard iteration to the first-order linear equation

$$\dot{x} = x, \quad x(0) = 1.$$

**Problem 2.8.** Apply the Picard iteration to the first-order equation

$$\dot{x} = 2t - 2\sqrt{\max(0,x)}, \quad x(0) = 0.$$

Does it converge?

**2.3. Some extensions**

In this section we want to derive some further extensions of the Picard–Lindelöf theorem. They are of a more technical nature and can be skipped on first reading.

As a preparation we need a slight generalization of the contraction principle. In fact, looking at its proof, observe that we can replace $\theta^n$ by any other summable sequence $\theta_n$ (Problem 2.10).

**Theorem 2.4** (Weissinger). Let $C$ be a (nonempty) closed subset of a Banach space $X$. Suppose $K : C \to C$ satisfies

$$\|K^n(x) - K^n(y)\| \leq \theta_n \|x - y\|, \quad x, y \in C,$$

with $\sum_{n=1}^{\infty} \theta_n < \infty$. Then $K$ has a unique fixed point $\bar{x}$ such that

$$\|K^n(x) - \bar{x}\| \leq \left( \sum_{j=n}^{\infty} \theta_j \right) \|K(x) - x\|, \quad x \in C.$$

Our first objective is to give some concrete values for the existence time $T_0$. Using Weissinger’s theorem instead of the contraction principle, we can avoid the restriction $T_0 < L^{-1}$: