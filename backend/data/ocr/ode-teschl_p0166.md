which maps the interval $(a, b)$ to the interval $(0, c)$, $c = \int_a^b \sqrt{\frac{r(t)}{p(t)}} dt$. By a slight abuse of notation we will denote the inverse of this diffeomorphism by $x(y)$. Then, setting

$$v(y) = \sqrt[4]{r(x(y))p(x(y))} u(x(y))$$

the Sturm–Liouville equation

$$-(p(x)u'(x))' + q(x)u(x) = r(x)zu(x), \quad x \in (a, b),$$

transforms into

$$-v''(y) + Q(y)v(y) = zv(y), \quad y \in (0, c),$$

where

$$Q(y) = q(x(y)) - \frac{(p(x(y))r(x(y)))^{1/4}}{r(x(y))} \left(p(x(y))((p(x((y))r(x(y)))^{-1/4})'\right)'.$$

Moreover,

$$\int_a^b |u(x)|^2 r(x)dx = \int_0^c |v(y)|^2 dy.$$

Problem 5.14. Suppose $u(x)$ satisfies

$$u''(x) + g(x)u'(x) + f(x)u(x) = h(x).$$

Show that

$$v(x) = e^{\frac{1}{2} \int_x^x g(y)dy} u(x)$$

satisfies

$$v''(x) + \left(f(x) - \frac{1}{2}g'(x) - \frac{1}{4}g(x)^2\right)v(x) = e^{\frac{1}{2} \int_x^x g(y)dy} h(x).$$

5.4. Regular Sturm–Liouville problems

Now we want to apply the theory of inner product spaces to the investigation of Sturm–Liouville problems. As in the previous section we continue to assume (5.45).

We first need a suitable scalar product. We will consider

$$\langle f, g \rangle = \int_I f(x)^*g(x)r(x)dx, \quad (5.52)$$

and denote $C([a, b], \mathbb{C})$ with this inner product by $\mathfrak{H}_0$.

Next, we want to consider the Sturm–Liouville equation as an operator

$$L = \frac{1}{r(x)} \left(-\frac{d}{dx}p(x)\frac{d}{dx} + q(x)\right) \quad (5.53)$$