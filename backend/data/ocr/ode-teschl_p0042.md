To complete our analysis suppose $h < h_c$ and denote by $x_1 < x_2$ the two fixed points of $P(x)$. Define the iterates of $P(x)$ by $P^0(x) = x$ and $P^n(x) = P(P^{n-1}(x))$. We claim

$$\lim_{n \to \infty} P^n(x) = \begin{cases} x_2, & x > x_1, \\ x_1, & x = x_1, \\ -\infty, & x < x_1. \end{cases}$$

(1.84)

For example, let $x \in (x_1, x_2)$. Then, since $P(x)$ is strictly increasing we have $x_1 = P(x_1) < P(x) < P(x_2) = x_2$. Moreover, since $P(x)$ is concave we have $x < P(x)$, which shows that $P^n(x)$ is a strictly increasing sequence. Let $x_0 \in (x, x_2]$ be its limit. Then $P(x_0) = P(\lim_{n \to \infty} P^n(x)) = \lim_{n \to \infty} P^{n+1}(x) = x_0$ shows that $x_0$ is a fixed point, that is, $x_0 = x_2$. The other cases can be shown similar (Problem 1.33).

So for $x < x_1$ the solution diverges to $-\infty$ and for $x > x_1$ we have

$$\lim_{n \to \infty} |\phi(n, x) - x_2| = 0,$$

(1.85)

which implies (show this)

$$\lim_{t \to \infty} |\phi(t, x) - \phi(t, x_2)| = 0.$$

(1.86)

Similar considerations can be made for the case $h = h_c$ and $h > h_c$.

**Problem 1.33.** Suppose $P(x)$ is a continuous, monotone, and concave function with two fixed points $x_1 < x_2$. Show the remaining cases in (1.84).

**Problem 1.34.** Find $\lim_{n \to \infty} P^n(x)$ in the case $h = h_c$ and $h > h_c$.

**Problem 1.35.** Suppose $f \in C^2(\mathbb{R})$ and $g \in C(\mathbb{R})$ is a nonnegative periodic function $g(t + 1) = g(t)$. Show that the above discussion still holds for the equation

$$\dot{x} = f(x) + h \cdot g(t)$$

if $f''(x) < 0$ and $g(t) \geq 0$.

**Problem 1.36.** Suppose $a \in \mathbb{R}$ and $g \in C(\mathbb{R})$ is a nonnegative periodic function $g(t + 1) = g(t)$. Find conditions on $a, g$ such that the linear inhomogeneous equation

$$\dot{x} = ax + g(t)$$

has a periodic solution. When is this solution unique? (Hint: (1.40).)