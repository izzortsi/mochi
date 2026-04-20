We recall that the existence of the complex derivative is a much stronger condition than existence of the real derivative. In fact, it implies that $w(z)$ can be expanded in a convergent power series near $z_0$:

$$w(z) = \sum_{j=0}^{\infty} \frac{w^{(j)}(z_0)}{j!} (z - z_0)^j, \quad w^{(j)}(z_0) = \frac{d^j w(z_0)}{dz^j}. \tag{4.4}$$

By the Cauchy–Hadamard theorem the **radius of convergence** of this series is given by

$$R^{-1} = \limsup_{j \to \infty} |w_j|^{1/j}, \quad w_j = \frac{w^{(j)}(z_0)}{j!}. \tag{4.5}$$

If $f(w) = f(w_1, \ldots, w_n)$ depends on more than one variable, it is called analytic if the partial complex derivatives

$$\frac{\partial}{\partial w_j} f(w), \quad 1 \leq j \leq n, \tag{4.6}$$

exist (in the complex sense as defined in (4.3)). Again it can be shown that $f(w)$ can be expanded in a convergent power series. However, we will not need this result here. Just observe that the definition implies that if $f(z, w)$ is analytic in the $n+1$ variables $(z, w)$ and $w(z)$ is analytic in the single variable $z$, then $f(z, w(z))$ is analytic in the single variable $z$ by the chain rule.

Clearly, the first question to ask is whether solutions exist at all. Fortunately, this can be answered using the same tools as in the real case. It suffices to only point out the differences.

The first step is to rewrite (4.2) as

$$w(z) = w_0 + \int_{z_0}^{z} f(\zeta, w(\zeta)) d\zeta. \tag{4.7}$$

But note that we now have to be more careful since the integral is along a path in the complex plane and independence of the path is not clear. On the other hand, we will only consider values of $z$ in a small disc around $z_0$. Since a disc is simply connected, path independence follows from the Cauchy integral theorem. Next, we need a suitable Banach space. As in the real case we can use the sup norm

$$\sup_{|z-z_0| < \varepsilon} |w(z)| \tag{4.8}$$

since the (locally) uniform limit of a sequence of analytic functions is again analytic by the Weierstraß convergence theorem. Now we can proceed as in the real case to obtain