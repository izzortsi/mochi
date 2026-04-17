be the only possible extension as we will see in the examples below. Clearly, similar arguments apply for $t < 0$.

Now let us look at some examples.

**Example.** If $f(x) = x$, $x_0 > 0$, we have $(x_1, x_2) = (0, \infty)$ and

$$F(x) = \log\left(\frac{x}{x_0}\right). \tag{1.26}$$

Hence $T_{\pm} = \pm \infty$ and

$$\phi(t) = x_0 e^t. \tag{1.27}$$

Thus the solution is globally defined for all $t \in \mathbb{R}$. Note that this is in fact a solution for all $x_0 \in \mathbb{R}$.

**Example.** Let $f(x) = x^2$, $x_0 > 0$. We have $(x_1, x_2) = (0, \infty)$ and

$$F(x) = \frac{1}{x_0} - \frac{1}{x}. \tag{1.28}$$

Hence $T_+ = 1/x_0$, $T_- = -\infty$ and

$$\phi(t) = \frac{x_0}{1 - x_0 t}. \tag{1.29}$$

In particular, the solution is no longer defined for all $t \in \mathbb{R}$. Moreover, since $\lim_{t \uparrow 1/x_0} \phi(t) = \infty$, there is no way we can possibly extend this solution for $t \geq T_+$.

Now what is so special about the zeros of $f(x)$? Clearly, if $f(x_0) = 0$, there is a trivial solution

$$\phi(t) = x_0 \tag{1.30}$$

to the initial condition $x(0) = x_0$. But is this the only one? If we have

$$\left| \int_{x_0}^{x_0 + \varepsilon} \frac{dy}{f(y)} \right| < \infty, \tag{1.31}$$

then there is another solution

$$\varphi(t) = F^{-1}(t), \quad F(x) = \int_{x_0}^{x} \frac{dy}{f(y)}, \tag{1.32}$$

with $\varphi(0) = x_0$ which is different from $\phi(t)$!