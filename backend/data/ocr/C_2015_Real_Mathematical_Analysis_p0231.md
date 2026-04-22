Each function $\phi_n$ is continuous since $\phi_n(t)$ converges to $f'_n(x)$ as $t \to x$. Also it is clear that $\phi_n$ converges pointwise to $\phi$ as $n \to \infty$. We claim the convergence is uniform. For any $m, n$ the Mean Value Theorem applied to the function $f_m - f_n$ gives

$$\phi_m(t) - \phi_n(t) = \frac{(f_m(t) - f_n(t)) - (f_m(x) - f_n(x))}{t - x} = f'_m(\theta) - f'_n(\theta)$$

for some $\theta$ between $t$ and $x$. Since $f'_n \Rightarrow g$ the difference $f'_m - f'_n$ tends uniformly to 0 as $m, n \to \infty$. Thus ($\phi_n$) is Cauchy in $C^0$. Since $C^0$ is complete, $\phi_n$ converges uniformly to a limit function $\psi$, and $\psi$ is continuous. As already remarked, the pointwise limit of $\phi_n$ is $\phi$, and so $\psi = \phi$. Continuity of $\psi = \phi$ implies that $g(x) = f'(x)$.

10 Theorem A uniformly convergent series of differentiable functions can be differentiated term-by-term, provided that the derivative series converges uniformly,

$$\left( \sum_{k=0}^{\infty} f_k(x) \right)' = \sum_{k=0}^{\infty} f'_k(x).$$

Proof Apply Theorem 9 to the sequence of partial sums.

Note that Theorem 9 fails if we forget to assume the derivatives converge. For example, consider the sequence of functions $f_n : [-1, 1] \to \mathbb{R}$ defined by

$$f_n(x) = \sqrt{x^2 + \frac{1}{n}}.$$

See Figure 91. The functions converge uniformly to $f(x) = |x|$, a nondifferentiable function. The derivatives converge pointwise but not uniformly. Worse examples are easy to imagine. In fact, a sequence of everywhere differentiable functions can converge uniformly to a nowhere differentiable function. See Sections 4 and 7. It is one of the miracles of the complex numbers that a uniform limit of complex differentiable functions is complex differentiable, and automatically the sequence of derivatives converges uniformly to a limit. Real and complex analysis diverge radically on this point.

2 Power Series

As another application of the Weierstrass $M$-test we say a little more about the power series $\sum c_k x^k$. A power series is a special type of series of functions, the functions