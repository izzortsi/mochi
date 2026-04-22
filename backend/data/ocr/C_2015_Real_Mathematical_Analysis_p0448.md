the purpose of (8) – for an integrable function takes on a finite value at almost every point.

The proof of (8) uses a cute trick reminiscent of the traveling secant method from Chapter 3. First extend $f$ from $[a, b]$ to $\mathbb{R}$ by setting $f(x) = f(a)$ for $x < a$ and $f(x) = f(b)$ for $x > b$. Then define $g_n(x)$ to be the slope of the secant from $(x, f(x))$ to $(x + 1/n, f(x + 1/n))$. That is,

$$g_n(x) = \frac{f(x + 1/n) - f(x)}{1/n} = n(f(x + 1/n) - f(x)).$$

See Figure 157. Since $f$ is almost everywhere continuous it is measurable and so is

**Figure 157** $g_n(x)$ is the slope of the right secant at $x$.

$g_n$. For almost every $x$, $g_n(x)$ converges to $f'(x)$ as $n \to \infty$. Hence $f'$ is measurable and clearly $f' \geq 0$. Fatou’s Lemma gives

$$\int_a^b f'(x) \, dx = \int_a^b \liminf_{n \to \infty} g_n(x) \, dx \leq \liminf_{n \to \infty} \int_a^b g_n(x) \, dx.$$

The integral of $g_n$ is

$$\int_a^b g_n(x) \, dx = n \int_b^{b+1/n} f(x) \, dx - n \int_a^{a+1/n} f(x) \, dx.$$