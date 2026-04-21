Higher Derivatives

The derivative of $f'$, if it exists, is the second derivative of $f$,

$$\left(f'\right)'(x) = f''(x) = \lim_{t \to x} \frac{f'(t) - f'(x)}{t - x}.$$

Higher derivatives are defined inductively and written $f^{(r)} = \left(f^{(r-1)}\right)'$. If $f^{(r)}(x)$ exists then $f$ is $r^{\text{th}}$-order differentiable at $x$. If $f^{(r)}(x)$ exists for each $x \in (a,b)$ then $f$ is $r^{\text{th}}$-order differentiable. If $f^{(r)}(x)$ exists for all $r$ and all $x$ then $f$ is infinitely differentiable or smooth. The zeroth derivative of $f$ is $f$ itself, $f^{(0)}(x) = f(x)$.

10 Theorem If $f$ is $r^{\text{th}}$-order differentiable and $r \geq 1$ then $f^{(r-1)}(x)$ is a continuous function of $x \in (a,b)$.

Proof Differentiability implies continuity and $f^{(r-1)}(x)$ is differentiable.

11 Corollary A smooth function is continuous. Each derivative of a smooth function is smooth and hence continuous.

Proof Obvious from the definition of smoothness and Theorem 10.

Smoothness Classes

If $f$ is differentiable and its derivative function $f'(x)$ is a continuous function of $x$ then $f$ is continuously differentiable and we say that $f$ is of class $C^1$. If $f$ is $r^{\text{th}}$-order differentiable and $f^{(r)}(x)$ is a continuous function of $x$ then $f$ is continuously