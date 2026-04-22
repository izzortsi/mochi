If the limit of $\int_a^c f(x) \, dx$ exists (and is a real number) as $c \to b$ then it is natural to define it as the improper Riemann integral

$$\int_a^b f(x) \, dx = \lim_{c \to b} \int_a^c f(x) \, dx.$$

In order that the two-sided improper integral exists for a function $f : (a, b) \to \mathbb{R}$ it is natural to fix some point $m \in (a, b)$ and require that both improper integrals $\int_a^m f(x) \, dx$ and $\int_m^b f(x) \, dx$ exist. Their sum is the improper integral $\int_a^b f(x) \, dx$. With some ingenuity you can devise a function $f : \mathbb{R} \to \mathbb{R}$ whose improper integral $\int_{-\infty}^{\infty} f(x) \, dx$ exists despite the fact that $f$ is unbounded at both $\pm\infty$. See Exercise 55.

3 Series

A series is a formal sum $\sum a_k$ where the terms $a_k$ are real numbers. The $n^{\text{th}}$ partial sum of the series is

$$A_n = a_0 + a_1 + a_2 + \cdots + a_n.$$

The series converges to $A$ if $A_n \to A$ as $n \to \infty$, and we write

$$A = \sum_{k=0}^{\infty} a_k.$$

A series that does not converge diverges. The basic question to ask about a series is: Does it converge or diverge?

For example, if $\lambda$ is a constant and $|\lambda| < 1$ then the geometric series

$$\sum_{k=0}^{\infty} \lambda^k = 1 + \lambda + \cdots + \lambda^n + \ldots$$

converges to $1/(1-\lambda)$. For its partial sums are

$$\Lambda_n = 1 + \lambda + \lambda^2 + \cdots + \lambda^n = \frac{1-\lambda^{n+1}}{1-\lambda}$$

and $\lambda^{n+1} \to 0$ as $n \to \infty$. On the other hand, if $|\lambda| \geq 1$ then the series $\sum \lambda^k$ diverges.

Let $\sum a_n$ be a series. The Cauchy Convergence Criterion from Chapter 1 applied to its sequence of partial sums yields the CCC for series

$$\sum a_k \text{ converges if and only if}$$
$$\forall \epsilon > 0 \ \exists N \text{ such that } m, n \geq N \Rightarrow \left| \sum_{k=m}^n a_k \right| < \epsilon.$$