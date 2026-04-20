In what follows, we will assume that a given branching process $\xi(t)$ is specified by giving the transition densities $\lambda_k, k = 0, 1, 2, \ldots$. Let $f(x)$ be the function defined by the power series

$$f(x) = \sum_{k=0}^{\infty} \lambda_k x^k,$$

so that in particular $f(x)$ is analytic for $0 < x < 1$. Then, according to (7), the generating function $F(t, z)$ satisfies a differential equation of the form

$$\frac{dx}{dt} = f(x).$$

Moreover, since $F(0, z) = z$, the generating function $F(t, z)$ coincides for every $z$ in the interval $0 \leq z \leq 1$ with the solution $x = x(t)$ of (9) satisfying the initial condition

$$x(0) = z.$$

Instead of (9), it is often convenient to consider the equivalent differential equation

$$\frac{dt}{dx} = \frac{1}{f(x)}$$

for the inverse $t = t(x)$ of the function $x = x(t)$. The function satisfying (11) and the initial condition (10) is just

$$t = \int_z^x \frac{du}{f(u)}, \quad 0 \leq x \leq 1.$$

**Example 1.** If

$$\lambda_0 = \lambda, \quad \lambda_1 = -\lambda,$$

$$\lambda_k = 0, \quad k = 2, 3, \ldots,$$

then

$$f(x) = \lambda(1 - x)$$

and

$$t = \int_z^x \frac{du}{f(u)} = -\frac{1}{\lambda} [\ln(1 - x) - \ln(1 - z)].$$

Hence $F = F(t, z)$ is such that

$$\ln(1 - F) = -\lambda t + \ln(1 - z),$$

i.e.,

$$F(t, z) = 1 - e^{-\lambda t}(1 - z).$$

The probabilities $p_n(t)$ are found from the expansion

$$F(t, z) = \sum_{n=0}^{\infty} p_n(t)z^n,$$