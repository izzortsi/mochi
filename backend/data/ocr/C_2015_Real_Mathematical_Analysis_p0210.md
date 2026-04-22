10. Concoct a function $f : \mathbb{R} \to \mathbb{R}$ with a discontinuity of the second kind at $x = 0$ such that $f$ does not have the intermediate value property there. Infer that it is incorrect to assert that functions without jumps are Darboux continuous.

*11. Let $f : (a, b) \to \mathbb{R}$ be given.

(a) If $f''(x)$ exists, prove that

$$\lim_{h \to 0} \frac{f(x - h) - 2f(x) + f(x + h)}{h^2} = f'(x).$$

(b) Find an example that this limit can exist even when $f''(x)$ fails to exist.

*12. Assume that $f : (-1, 1) \to \mathbb{R}$ and $f'(0)$ exists. If $\alpha_n, \beta_n \to 0$ as $n \to \infty$, define the difference quotient

$$D_n = \frac{f(\beta_n) - f(a_n)}{\beta_n - \alpha_n}.$$

(a) Prove that $\lim_{n \to \infty} D_n = f'(0)$ under each of the following conditions.

(i) $\alpha_n < 0 < \beta_n$.

(ii) $0 < \alpha_n < \beta_n$ and $\frac{\beta_n}{\beta_n - \alpha_n} \leq M$.

(iii) $f'(x)$ exists and is continuous for all $x \in (-1, 1)$.

(b) Set $f(x) = x^2 \sin(1/x)$ for $x \neq 0$ and $f(0) = 0$. Observe that $f$ is differentiable everywhere in $(-1, 1)$ and $f'(0) = 0$. Find $\alpha_n, \beta_n$ that tend to 0 in such a way that $D_n$ converges to a limit unequal to $f'(0)$.

13. Assume that $f$ and $g$ are $r^{\text{th}}$ order differentiable functions $(a, b) \to \mathbb{R}, r \geq 1$. Prove the Higher-Order Leibniz Product Rule for the function $f \cdot g$,

$$(f \cdot g)^{(r)}(x) = \sum_{k=0}^{r} \binom{r}{k} f^{(k)}(x) \cdot g^{(r-k)}(x).$$

where $\binom{r}{k} = r! / (k!(r - k)!)$ is the binomial coefficient, $r$ choose $k$. [Hint: Induction.]

14. For each $r \geq 1$, find a function that is $C^r$ but not $C^{r+1}$.

15. Define $f(x) = x^2$ if $x < 0$ and $f(x) = x + x^2$ if $x \geq 0$. Differentiation gives $f''(x) \equiv 2$. This is bogus. Why?

16. $\log x$ is defined to be $\int_1^x 1/t \, dt$ for $x > 0$. Using only the mathematics explained in this chapter,

(a) Prove that $\log x$ is a smooth function.

(b) Prove that $\log(xy) = \log x + \log y$ for all $x, y > 0$. [Hint: Fix $y$ and define $f(x) = \log(xy) - \log x - \log y$. Show that $f(x) \equiv 0$.]

(c) Prove that $\log$ is strictly monotone increasing and its range is all of $\mathbb{R}$.