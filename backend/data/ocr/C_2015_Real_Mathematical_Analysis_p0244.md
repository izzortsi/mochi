To check that $P_n \rightrightarrows f$ as $n \rightarrow \infty$, we need to estimate $\beta_n(t)$. We claim that if $\delta > 0$ then

(10) $$\beta_n(t) \rightrightarrows 0 \text{ as } n \rightarrow \infty \text{ and } \delta \leq |t| \leq 1.$$

This is “clear” from Figure 95. Proceeding more rigorously and using the definition of $\beta_n$ as $\beta_n(t) = b_n(1-t^2)^n$, we have

$$1 = \int_{-1}^{1} \beta_n(t) \, dt \geq \int_{-1/\sqrt{n}}^{1/\sqrt{n}} b_n(1-t^2)^n \, dt \geq b_n \frac{2}{\sqrt{n}}(1-\frac{1}{n})^n.$$

Since $1/e = \lim_{n \to \infty} (1-1/n)^n$, we see that for some constant $c$ and all $n$,

$$b_n \leq c\sqrt{n}.$$

See also Exercise 31. Hence, if $\delta \leq |t| \leq 1$ then

$$\beta_n(t) = b_n(1-t^2)^n \leq c\sqrt{n}(1-\delta^2)^n \rightarrow 0 \text{ as } n \rightarrow \infty,$$

due to the fact that $\sqrt{n}$ tends to $\infty$ more slowly than $(1-\delta^2)^{-n}$ as $n \rightarrow \infty$. This proves (10).