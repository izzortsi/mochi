which in this case implies

$$p_0(t) = 1 - e^{-\lambda t}, \quad p_1 = e^{-\lambda t},$$
$$p_n(t) = 0, \quad n = 2, 3, \ldots$$

**Example 2.** If

$$\lambda_0 = 0, \quad \lambda_1 = -1,$$
$$\lambda_k = \frac{1}{(k-1)k}, \quad k = 2, 3, \ldots,$$

then

$$f(x) = \sum_{k=0}^{\infty} \lambda_k x^k = \sum_{k=2}^{\infty} \frac{x^k}{k-1} - \sum_{k=1}^{\infty} \frac{x^k}{k}$$

$$= -x \ln(1-x) + \ln(1-x) = (1-x) \ln(1-x),$$

and hence

$$t = \int_z^x \frac{du}{f(u)} = \int_z^x \frac{du}{(1-u) \ln(1-u)} = -\int_{\ln(1-z)}^{\ln(1-z)} \frac{du}{u}$$

$$= -\ln \ln(1-x) + \ln \ln(1-z).$$

It follows that $F = F(t, z)$ is such that

$$\frac{\ln(1-F)}{\ln(1-z)} = e^{-t},$$

i.e.,

$$F(t, z) = 1 - (1-z)^{e^{-t}}.$$

To find the corresponding probabilities $p_n(t)$, we use repeated differentiation:

$$p_0(t) = 0, \quad p_1(t) = e^{-t}$$

$$p_n(t) = \frac{1}{n!} \frac{d^n F(t, 0)}{dz^n} = \frac{1}{n!} (-1)^{n-1} e^{-t} (e^{-t} - 1) \cdots (e^{-t} - n+1),$$

$$n = 2, 3, \ldots$$

Turning to the analysis of the differential equation (9), where $f(x)$ is given by (8), we note that

$$f''(x) = \sum_{k=2}^{\infty} k(k-1) \lambda_k x^{k-2} \geq 0 \quad \text{if} \quad 0 \leq x \leq 1.$$

Therefore $f(x)$ is concave upward in the interval $0 \leq x \leq 1$, with a monotonically increasing derivative. Because of (4), $x = 1$ is a root of the equation $f(x) = 0$. This equation can have at most one other root $x = \alpha (0 < \alpha < 1)$. Thus $f(x)$ must behave in one of the two ways shown in Figure 11.

We now study the more complicated case, where $f(x) = 0$ has two roots $x = \alpha (0 < \alpha < 1)$ and $x = 1$, corresponding to two singular integral