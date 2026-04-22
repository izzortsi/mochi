and $a_{k-1} - a_k$ is the length of the the interval $I_k = (a_k, a_{k-1})$. The intervals $I_k$ are disjoint, so the sum of their lengths is at most the length of $(0, a_1)$, namely $a_1$. See Figure 85.

The sequence $(A_{2n})$ is increasing and bounded, so $\lim_{n \to \infty} A_{2n}$ exists. The partial sum $A_{2n+1}$ differs from $A_{2n}$ by $a_{2n+1}$, a quantity that converges to 0 as $n \to \infty$, so

$$\lim_{n \to \infty} A_{2n} = \lim_{n \to \infty} A_{2n+1}$$

and the alternating series converges.

When $a_k = 1/k$ we have the alternating harmonic series,

$$\sum_{k=1}^{\infty} \frac{(-1)^{k+1}}{k} = 1 - \frac{1}{2} + \frac{1}{3} - \frac{1}{4} + \ldots$$

which we have just shown is convergent.

Series of Functions

A series of functions is of the form

$$\sum_{k=0}^{\infty} f_k(x),$$

where each term $f_k : (a,b) \to \mathbb{R}$ is a function. For example, in a power series

$$\sum c_k x^k$$

the functions are monomials $c_k x^k$. (The coefficients $c_k$ are constants and $x$ is a real variable.) If you think of $\lambda = x$ as a variable then the geometric series is a power series whose coefficients are 1, namely $\sum x^k$. Another example of a series of functions is a Fourier series

$$\sum a_k \sin(kx) + b_k \cos(kx).$$