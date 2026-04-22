For $f(x) = \sum c_k x^k$ and $|x| < R$ this means

$$\int_0^x f(t) dt = \sum_{k=0}^{\infty} \frac{c_k}{k+1} x^{k+1} \quad \text{and} \quad f'(x) = \sum_{k=1}^{\infty} k c_k x^{k-1}.$$

**Proof** The radius of convergence of the integral series is determined by the exponential growth rate of its coefficients,

$$\limsup_{k \to \infty} \sqrt[k]{\left| \frac{c_k-1}{k} \right|} = \limsup_{k \to \infty} \left( |c_k-1|^{1/(k-1)}\right)^{(k-1)/k} \left(\frac{1}{k}\right)^{1/k}.$$

Since $(k-1)/k \to 1$ and $k^{-1/k} \to 1$ as $k \to \infty$, we see that the integral series has the same radius of convergence $R$ as the original series. According to Theorem 8, term-by-term integration is valid when the series converges uniformly, and by Theorem 11, the integral series does converge uniformly on every closed interval $[-r, r]$ contained in $(-R, R)$.

A similar calculation for the derivative series shows that its radius of convergence too is $R$. Term-by-term differentiation is valid provided the series and the derivative series converge uniformly. Since the radius of convergence of the derivative series is $R$, the derivative series does converge uniformly on every $[-r, r] \subset (-R, R)$.

**13 Theorem** *Analytic functions are smooth, i.e., $C^\omega \subset C^\infty$.*

**Proof** An analytic function $f$ is defined by a convergent power series. According to Theorem 12, the derivative of $f$ is given by a convergent power series with the same radius of convergence, so repeated differentiation is valid, and we see that $f$ is indeed smooth.

The general smooth function is not analytic, as is shown by the example

$$e(x) = \begin{cases} e^{-1/x} & \text{if } x > 0 \\ 0 & \text{if } x \leq 0 \end{cases}$$

on page 149. Near $x = 0$, $e(x)$ cannot be expressed as a convergent power series.

Power series provide a clean and unambiguous way to define functions, especially trigonometric functions. The usual definitions of sine, cosine, etc. involve angles and circular arc length, and these concepts seem less fundamental than the functions being defined. To avoid circular reasoning, as it were, we declare that by definition

$$\exp x = \sum_{k=0}^{\infty} \frac{x^k}{k!} \quad \sin x = \sum_{k=0}^{\infty} \frac{(-1)^k x^{2k+1}}{(2k+1)!} \quad \cos x = \sum_{k=0}^{\infty} \frac{(-1)^k x^{2k}}{(2k)!}.$$