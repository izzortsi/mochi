and hence

$$\|\overline{x}(\lambda) - \overline{x}(\eta)\| \leq \frac{1}{1-\theta} \|K_{\lambda}(\overline{x}(\eta)) - K_{\eta}(\overline{x}(\eta))\|.$$

Since the right-hand side converges to zero as $\lambda \to \eta$, so does the left-hand side and thus $\overline{x}(\lambda)$ is continuous.

To see the last claim abbreviate $\Delta_n = \|x_n - \overline{x}(\lambda)\|$, $\varepsilon_n = \|\overline{x}(\lambda_n) - \overline{x}(\lambda)\|$ and observe

$$\Delta_{n+1} \leq \|x_{n+1} - \overline{x}(\lambda_n)\| + \|\overline{x}(\lambda_n) - \overline{x}(\lambda)\| \leq \theta \|x_n - \overline{x}(\lambda_n)\| + \varepsilon_n$$

$$\leq \theta \Delta_n + (1 + \theta)\varepsilon_n.$$

Hence

$$\Delta_n \leq \theta^n \Delta_0 + (1 + \theta) \sum_{j=1}^{n} \theta^{n-j} \varepsilon_{j-1}$$

which converges to 0 since $\varepsilon_n$ does (show this).

There is also a uniform version of Theorem 2.4.

**Theorem 9.12.** Let $C$ be a (nonempty) closed subset of a Banach space $X$ and $\Lambda$ a subset of another Banach space. Suppose $K_{\lambda}: C \to C$ satisfies

$$\|K_{\lambda_n} \circ \cdots \circ K_{\lambda_1}(x) - K_{\lambda_n} \circ \cdots \circ K_{\lambda_1}(y)\| \leq \theta_n \|x - y\|, \quad x, y \in C, \lambda_j \in \Lambda,$$

with $\sum_{n=1}^{\infty} \theta_n < \infty$, and $K_{\lambda}(x)$ is continuous with respect to $\lambda \in \Lambda$ for every $x \in C$. Then the unique fixed point $\overline{x}(\lambda)$ is continuous with respect to $\lambda$.

Moreover, if $\lambda_n \to \lambda$, then

$$x_{n+1} = K_{\lambda_n}(x_n) \to \overline{x}(\lambda).$$

**Proof.** We first show that $K_{\lambda} = K_{\lambda_n} \circ \cdots \circ K_{\lambda_1}, \lambda = (\lambda_1, \ldots, \lambda_n)$, is continuous with respect to $\lambda \in \Lambda^n$ for fixed $x \in C$. The claim holds for $n = 1$ by assumption. It remains to show it holds for $n$ provided it holds for $n-1$. But this follows from

$$\|K_{\lambda_n} \circ K_{\lambda}(x) - K_{\eta_n} \circ K_{\eta}(x)\| \leq \|K_{\lambda_n} \circ K_{\lambda}(x) - K_{\lambda_n} \circ K_{\eta}(x)\|$$

$$\leq \theta_1 \|K_{\lambda}(x) - K_{\eta}(x)\| + \|K_{\lambda_n} \circ K_{\eta}(x) - K_{\eta_n} \circ K_{\eta}(x)\|,$$

where $\lambda = (\lambda_1, \ldots, \lambda_{n-1})$ and $\eta = (\eta_1, \ldots, \eta_{n-1})$.

Now observe that for $n$ sufficiently large we have $\theta_n < 1$ and hence $K_{\lambda}$ is a uniform contraction to which we can apply Theorem 9.11. In particular, choosing $\lambda_j = (\lambda_j, \ldots, \lambda_{j+n-1})$ we have that $x_{n(j+1)+l} = K_{\lambda_{nj+l}}(x_{nj+l})$ converges to the unique fixed point of $K_{(\lambda, \ldots, \lambda)}$ which is precisely $\overline{x}(\lambda)$. Hence $\lim_{j \to \infty} x_{nj+l} = \overline{x}(\lambda)$ for every $0 \leq l \leq n-1$ implying $\lim_{j \to \infty} x_j = \overline{x}(\lambda)$.