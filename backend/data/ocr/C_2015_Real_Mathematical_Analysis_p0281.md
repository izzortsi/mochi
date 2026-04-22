More Prelim Problems

1. Let $f$ and $f_n$, $n \in \mathbb{N}$, be functions from $\mathbb{R}$ to $\mathbb{R}$. Assume that $f_n(x_n) \to f(x)$ as $n \to \infty$ and $x_n \to x$. Show that $f$ is continuous. (Note: The functions $f_n$ are not assumed to be continuous.)

2. Suppose that $f_n \in C^0$ and for each $x \in [a, b]$,

$$f_1(x) \geq f_2(x) \geq \ldots,$$

and $\lim_{n \to \infty} f_n(x) = 0$. Is the sequence equicontinuous? Give a proof or counterexample. [Hint: Does $f_n(x)$ converge uniformly to 0, or does it not?]

3. Let $E$ be the set of all functions $u : [0, 1] \to \mathbb{R}$ such that $u(0) = 0$ and $u$ satisfies a Lipschitz condition with Lipschitz constant 1. Define $\phi : E \to \mathbb{R}$ according to the formula

$$\phi(u) = \int_0^1 (u(x)^2 - u(x)) \, dx.$$

Prove that there exists a function $u \in E$ at which $\phi(u)$ attains an absolute maximum.

4. Let $(g_n)$ be a sequence of twice-differentiable functions defined on $[0, 1]$, and assume that for all $n, g_n(0) = g_n'(0)$. Suppose also that for all $n \in \mathbb{N}$ and all $x \in [0, 1], |g_n'(x)| \leq 1$. Prove that there is a subsequence of $(g_n)$ converging uniformly on $[0, 1]$.

5. Let $(a_n)$ be a sequence of nonzero real numbers. Prove that the sequence of functions

$$f_n(x) = \frac{1}{a_n} \sin(a_nx) + \cos(x + a_n)$$

has a subsequence converging to a continuous function.

6. Suppose that $f : \mathbb{R} \to \mathbb{R}$ is differentiable, $f(0) = 0$, and $f'(x) > f(x)$ for all $x \in \mathbb{R}$. Prove that $f(x) > 0$ for all $x > 0$.

7. Suppose that $f : [a, b] \to \mathbb{R}$ and the limits of $f(x)$ from the left and the right exist at all points of $[a, b]$. Prove that $f$ is Riemann integrable.

8. Let $h : [0, 1) \to \mathbb{R}$ be a uniformly continuous function where $[0, 1)$ is the half-open interval. Prove that there is a unique continuous map $g : [0, 1] \to \mathbb{R}$ such that $g(x) = h(x)$ for all $x \in [0, 1)$.

9. Assume that $f : \mathbb{R} \to \mathbb{R}$ is uniformly continuous. Prove that there are constants $A, B$ such that $|f(x)| \leq A + B|x|$ for all $x \in \mathbb{R}$.

10. Suppose that $f(x)$ is defined on $[-1, 1]$ and that its third derivative exists and is continuous. (That is, $f$ is of class $C^3$.) Prove that the series

$$\sum_{n=0}^{\infty} \left( n(f(1/n) - f(-1/n)) - 2f'(0) \right)$$

converges.