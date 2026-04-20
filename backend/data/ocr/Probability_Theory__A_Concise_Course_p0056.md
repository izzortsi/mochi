In fact, $\eta$ is a discrete random variable taking only the values $y = \varphi(x)$, where $x$ ranges over all possible values of the random variable $\xi$. Therefore

$$\mathbf{P}\{\eta = y\} = \sum_{x: \varphi(x) = y} P_{\xi}(x),$$

where the summation is over all $x$ such that $\varphi(x) = y$, and hence

$$\mathbf{E}\eta = \sum_{-\infty}^{\infty} y \mathbf{P}\{\eta = y\} = \sum_{-\infty}^{\infty} \sum_{x: \varphi(x) = y} P_{\xi}(x) = \sum_{-\infty}^{\infty} \varphi(x) P_{\xi}(x),$$

as asserted.

More generally, let $\varphi(\xi_1, \xi_2)$ be a random variable which is a function of two random variables $\xi_1$ and $\xi_2$, with joint probability distribution $P_{\xi_1, \xi_2}(x_1, x_2)$. Then it is easily verified that $\varphi(\xi_1, \xi_2)$ has the mathematical expectation

$$\mathbf{E}\varphi(\xi_1, \xi_2) = \sum_{-\infty}^{\infty} \sum_{-\infty}^{\infty} \varphi(x_1, x_2) P_{\xi_1, \xi_2}(x_1, x_2).$$

It is clear from (4.9) that

a) $\mathbf{E}1 = 1$;
b) $\mathbf{E}(c\xi) = c\mathbf{E}\xi$ for an arbitrary constant $c$;
c) $|\mathbf{E}\xi| \leqslant \mathbf{E}|\xi|.$

Moreover, it follows from (4.11) that

d) $\mathbf{E}(\xi_1 + \xi_2) = \mathbf{E}\xi_1 + \mathbf{E}\xi_2$ for arbitrary random variables $\xi_1$ and $\xi_2$ with mathematical expectations $\mathbf{E}\xi_1$ and $\mathbf{E}\xi_2$;
e) $\xi \geqslant 0$ implies $\mathbf{E}\xi \geqslant 0$, and more generally

$$\xi_1 \leqslant \xi_2 \text{ implies } \mathbf{E}\xi_1 \leqslant \mathbf{E}\xi_2;$$

f) If $\xi_1$ and $\xi_2$ are independent random variables, then

$$\mathbf{E}\xi_1 \xi_2 = \mathbf{E}\xi_1 \mathbf{E}\xi_2.$$

For example, to prove (4.14), we write $\varphi(\xi_1, \xi_2) = \xi_1 \xi_2$. Then, for independent $\xi_1$ and $\xi_2$, (4.11) implies

$$\mathbf{E}(\xi_1 \xi_2) = \sum_{-\infty}^{\infty} \sum_{-\infty}^{\infty} x_1 x_2 P_{\xi_1}(x_1) P_{\xi_2}(x_2)$$

$$= \sum_{-\infty}^{\infty} x_1 P_{\xi_1}(x_1) \sum_{-\infty}^{\infty} x_2 P_{\xi_2}(x_2) = \mathbf{E}\xi_1 \mathbf{E}\xi_2.$$

To define the mathematical expectation of a continuous random variable $\xi$, we first approximate $\xi$ by a sequence of discrete random variables $\xi_n$,

*The colon should be read as "such that."*