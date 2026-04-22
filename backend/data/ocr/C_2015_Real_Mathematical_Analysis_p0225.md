Without uniform convergence the theorem fails. For example, we can define $f_n : [0, 1] \to \mathbb{R}$ as before, $f_n(x) = x^n$. Then $f_n(x)$ converges pointwise to the function

$$f(x) = \begin{cases} 0 & \text{if } 0 \leq x < 1 \\ 1 & \text{if } x = 1. \end{cases}$$

The function $f$ is not continuous and the convergence is not uniform. What about the converse? If the limit and the functions are continuous, does pointwise convergence imply uniform convergence? The answer is “no,” as is shown by $x^n$ on $(0, 1)$. But what if the functions have a compact domain of definition, $[a, b]$? The answer is still “no.”

**Example** John Kelley refers to this as the **growing steeple**,

$$f_n(x) = \begin{cases} n^2x & \text{if } 0 \leq x \leq \frac{1}{n} \\ 2n - n^2x & \text{if } \frac{1}{n} \leq x \leq \frac{2}{n} \\ 0 & \text{if } \frac{2}{n} \leq x \leq 1. \end{cases}$$

See Figure 89.

Then $\lim_{n \to \infty} f_n(x) = 0$ for each $x$, and $f_n$ converges pointwise to the function $f = 0$. Even if the functions have compact domain of definition, and are uniformly bounded and uniformly continuous, pointwise convergence does not imply uniform convergence. For an example, just multiply the growing steeple functions by $1/n$.

The natural way to view uniform convergence is in a function space. Let $C_b = C_b([a, b], \mathbb{R})$ denote the set of all bounded functions $[a, b] \to \mathbb{R}$. The elements of $C_b$ are functions $f, g$, etc. Each is bounded. Define the **sup norm** on $C_b$ as

$$\|f\| = \sup\{|f(x)| : x \in [a, b]\}.$$

The sup norm satisfies the norm axioms discussed in Chapter 1, page 28.

$$\|f\| \geq 0 \text{ and } \|f\| = 0 \text{ if and only if } f = 0$$

$$\|cf\| = |c|\|f\|$$

$$\|f + g\| \leq \|f\| + \|g\|.$$

As we observed in Chapter 2, any norm defines a metric. In the case at hand,

$$d(f, g) = \sup\{|f(x) - g(x)| : x \in [a, b]\}$$