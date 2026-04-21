Note When $G$ is an antiderivative of $g : [a, b] \to \mathbb{R}$, we have

$$G'(x) = g(x)$$

for every $x \in [a, b]$, not merely for almost every $x \in [a, b]$.

36 Corollary Every continuous function has an antiderivative.

Proof Assume that $f : [a, b] \to \mathbb{R}$ is continuous. By the Fundamental Theorem of Calculus, the indefinite integral $F(x)$ has a derivative everywhere, and $F'(x) = f(x)$ everywhere.

Some discontinuous functions have an antiderivative and others don’t. Surprisingly, the wildly oscillating function

$$f(x) = \begin{cases} 
0 & \text{if } x \leq 0 \\
\sin \frac{\pi}{x} & \text{if } x > 0 
\end{cases}$$

has an antiderivative, but the jump function

$$g(x) = \begin{cases} 
0 & \text{if } x \leq 0 \\
1 & \text{if } x > 0 
\end{cases}$$

does not. See Exercise 40.

37 Antiderivative Theorem An antiderivative of a Riemann integrable function, if it exists, differs from the indefinite integral by a constant.

Proof We assume that $f : [a, b] \to \mathbb{R}$ is Riemann integrable, that $G$ is an antiderivative of $f$, and we assert that for all $x \in [a, b]$ we have

$$G(x) = \int_a^x f(t) \, dt + C,$$

where $C$ is a constant. (In fact, $C = G(a)$.) Partition $[a, x]$ as

$$a = x_0 < x_1 < \ldots < x_n = x,$$

and choose $t_k \in [x_{k-1}, x_k]$ such that

$$G(x_k) - G(x_{k-1}) = G'(t_k) \Delta x_k.$$