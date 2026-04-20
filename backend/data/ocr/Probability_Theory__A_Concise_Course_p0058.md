$$\eta = \varphi(\xi) \text{ and } \eta = \varphi(\xi_1, \xi_2), \text{ we have}$$

$$\mathbf{E} \varphi(\xi) = \int_{-\infty}^{\infty} \varphi(x) p_{\xi}(x) \, dx \tag{4.18}$$

and

$$\mathbf{E} \varphi(\xi_1, \xi_2) = \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} \varphi(x_1, x_2) p_{\xi_1, \xi_2}(x_1, x_2) \, dx_1 \, dx_2, \tag{4.19}$$

by analogy with (4.10) and (4.11), where $p_{\xi_1, \xi_2}(x_1, x_2)$ is the joint probability density of the random variables $\xi_1$ and $\xi_2$. It is easily verified that properties a)-f) of the mathematical expectation continue to hold for continuous random variables (the details are left as an exercise).

**Remark.** Other synonyms for the mathematical expectation of a random variable $\xi$, discrete or continuous, are the expected value of $\xi$ or the average (value) of $\xi$. The mathematical expectation and mean value are often simply called the “expectation” and “mean,” respectively.

**Example** Let $\xi$ be a random variable uniformly distributed in the interval $[a, b]$, i.e., let $\xi$ have the probability density

$$p_{\xi}(x) = \begin{cases} \frac{1}{b-a} & \text{if } a \leqslant x \leqslant b, \\ 0 & \text{if } x < a \text{ or } x > b. \end{cases}$$

Then the mathematical expectation of $\xi$ is

$$\mathbf{E} \xi = \int_a^b \frac{x \, dx}{b-a} = \frac{a+b}{2}.$$

A random variable of the form $\eta = \xi_1 + i\xi_2$ involving two real random variables $\xi_1$ and $\xi_2$ (the real and imaginary parts of $\eta$) is called a complex random variable. The mathematical expectation of $\eta = \xi_1 + i\xi_2$ is defined as

$$\mathbf{E} \eta = \mathbf{E} \xi_1 + i\mathbf{E} \xi_2.$$

It is easy to see that formulas (4.10) and (4.18) remain valid for the case where $\varphi(\xi)$ is a complex-valued function of a real random variable $\xi$, and that (4.11) and (4.19) remain valid for the case where $\varphi(\xi_1, \xi_2)$ is a complex-valued function of two real random variables $\xi_1$ and $\xi_2$. In particular, let $\varphi_1(\xi_1)$ and $\varphi_2(\xi_2)$ be complex-valued functions of two independent real random variables $\xi_1$ and $\xi_2$. Then, choosing $\varphi(\xi_1, \xi_2) = \varphi_1(\xi_1) \varphi_2(\xi_2)$ in (4.11) or (4.19), we deduce the formula

$$\mathbf{E}[\varphi_1(\xi_1) \varphi_2(\xi_2)] = \mathbf{E} \varphi_1(\xi_1) \mathbf{E} \varphi_2(\xi_2), \tag{4.20}$$

which generalizes (4.14).