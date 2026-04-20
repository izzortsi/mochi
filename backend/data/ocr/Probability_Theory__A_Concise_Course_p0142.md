curves $x(t) \equiv \alpha$ and $x(t) \equiv 1$ of the differential equations (9) and (11). Consider the integral curve

$$t = \int_{z}^{\infty} \frac{du}{f(u)}$$

going through the point $t = 0$, $x = z$ ($0 < z < \alpha$). Since the derivative $f'(\alpha)$ is finite and $f(x) \sim f'(x)(x - \alpha)$ for $x \sim \alpha$, the value of $t$ along the integral curve (12) increases without limit as $x \to \alpha$, but the curve itself never intersects the other integral curve $x(t) \equiv \alpha$. The function $f(x)$ is positive in the interval $0 < x < \alpha$, and hence the integral curve $x = x(t)$ increases monotonically as $t \to \infty$, remaining bounded by the value $x = \alpha$. Being a bounded monotonic function, $x(t)$ has a limit

$$\beta = \lim_{t \to \infty} x(t), \quad z < \beta < \alpha.$$

But $f(x)$ approaches a limit $f(\beta)$ as $x \to \beta$, i.e.,

$$f(\beta) = \lim_{t \to \infty} f[x(t)] = \lim_{t \to \infty} x'(t),$$

where $f(\beta)$ must vanish, since otherwise the function

$$x(t) = z + \int_{0}^{t} f[x(s)] \, ds$$

would increase without limit as $t \to \infty$. It follows that $\beta$ is a root of the equation $f(x) = 0$, and hence must coincide with $\alpha$. Therefore all the integral curves $x = x(t)$ going through the point $x = z$, $0 < z < \alpha$ for $t = 0$ increase monotonically as $t \to \infty$ and satisfy the condition

$$\lim_{t \to \infty} x(t) = \alpha.$$