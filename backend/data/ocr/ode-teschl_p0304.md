If $1 < \mu \leq 2$ the right-hand side is in $(-1, 1)$ for $x \in (0, 1)$. Hence $x \in (0, 1)$ converges to $p$. If $2 < \mu \leq 3$ the right-hand side is in $(-1, 1)$ only for $x \in (0, \frac{2}{\mu})$. If $x$ stays in this region for all iterations, it will converge to $p$. Otherwise, we have $x \in [\frac{2}{\mu}, 1]$ after some iterations. After the next iteration we are in $[0, 2 - \frac{4}{\mu}]$ and in particular below $p$. Next, we stay below $p$ until we reach $[\frac{1}{\mu}, p]$.

For this case consider the second iterate which satisfies

$$\frac{L_{\mu}^{2}(x) - p}{x - p} = (1 - \mu x)(1 - \mu L_{\mu}(x)).$$

For $x \in (\frac{1}{\mu}, p)$ the right-hand side is in $(-1, 1)$ implying $L_{\mu}^{2n}(x) \rightarrow p$. Thus we also have $L_{\mu}^{2n+1}(x) \rightarrow L_{\mu}(p) = p$ and hence $L_{\mu}^{n}(x) \rightarrow p$ for all $x \in (0, 1)$.

Now what happens for $\mu > 3$? Since we have $L_{\mu}'(p) = 2 - \mu < -1$ for $\mu > 3$ the fixed point $p$ is no longer attracting. Moreover, a look at our numeric investigation shows that there should be a periodic orbit of period two. And indeed, solving the equation

$$L_{\mu}^{2}(x) = x$$

shows that, in addition to the fixed points, there is a periodic orbit

$$p_{\pm} = \frac{1 + \mu \pm \sqrt{(\mu + 1)(\mu - 3)}}{2\mu}$$

for $\mu > 3$. Moreover, we have $(L_{\mu}^{2})'(p_{\pm}) = L_{\mu}'(p_{+})L_{\mu}'(p_{-}) = 4 + 2\mu - \mu^2$ which is in $(-1, 1)$ for $3 < \mu < 1 + \sqrt{6}$. Hence, the attracting fixed point $p$ is replaced by the attracting periodic orbit $p_{+}, p_{-}$. This phenomenon is known as **period doubling**. Our numerical **bifurcation diagram** shows that this process continues. The attracting period two orbit is replaced by an attracting period four orbit at $\mu = 1 + \sqrt{6}$ (period doubling bifurcation in $f^2$) and so forth. Clearly it is no longer possible to analytically compute all these points since the degrees of the arising polynomial equations get too high.

So let us try to better understand the period doubling bifurcation. Suppose we have a map $f : I \rightarrow I$ depending on a parameter $\mu$. Suppose that at $\mu_0$ the number of zeros of $f^2(x) - x$ changes locally at $p$, that is, suppose there are two new zeros $p_{\pm}(\mu)$ such that $p_{\pm}(\mu_0) = p$ and $f(p_{\pm}(\mu)) = p_{\mp}(\mu)$. By continuity of $f$ we must have $f([p_{-}(\mu), p_{+}(\mu)]) \supseteq [p_{-}(\mu), p_{+}(\mu)]$ and hence there must be a fixed point $p(\mu) \in [p_{-}(\mu), p_{+}(\mu)]$. So the fixed point $p$ persists. That should only happen if $f'(p) \neq 1$. But since we must have $(f^2)'(p) = f'(p)^2 = 1$ this implies $f'(p) = -1$.

In summary, orbits of period two will appear in general only at fixed points where $f'(p) = -1$.