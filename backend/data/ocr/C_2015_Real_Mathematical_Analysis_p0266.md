According to the $M$-test, the series $\sum \sigma_k(x)$ converges uniformly to a limit $f$, and

$$f(x) = \sum_{k=0}^{\infty} \sigma_k(x)$$

is continuous. We claim that $f$ is nowhere differentiable. Fix an arbitrary point $x$, and set $\delta_n = 1/2 \cdot 4^n$. We will show that

$$\frac{\Delta f}{\Delta x} = \frac{f(x \pm \delta_n) - f(x)}{\delta_n}$$

does not converge to a limit as $\delta_n \to 0$, and thus that $f'(x)$ does not exist. The quotient is

$$\frac{\Delta f}{\Delta x} = \sum_{k=0}^{\infty} \frac{\sigma_k(x \pm \delta_n) - \sigma_k(x)}{\delta_n}.$$

There are three types of terms in the series, $k > n$, $k = n$, and $k < n$. If $k > n$ then $\sigma_k(x \pm \delta_n) - \sigma_k(x) = 0$. For $\delta_n$ is an integer multiple of the period of $\sigma_k$,

$$\delta_n = \frac{1}{2 \cdot 4^n} = 4^{k-(n+1)} \cdot \frac{2}{4^k} = 4^{k-(n+1)} \cdot \pi_k.$$

Thus the infinite series expression for $\Delta f/\Delta x$ reduces to a sum of $n+1$ terms

$$\frac{\Delta f}{\Delta x} = \frac{\sigma_n(x \pm \delta_n) - \sigma_n(x)}{\delta_n} + \sum_{k=0}^{n-1} \frac{\sigma_k(x \pm \delta_k) - \sigma_k(x)}{\delta_k}.$$

The function $\sigma_n$ is monotone on either $[x - \delta_n, x]$ or $[x, x + \delta_n]$, since it is monotone on intervals of length $4^{-n}$ and the contiguous interval $[x - \delta_n, x, x + \delta_n]$ at $x$ is of length $4^{-n}$. The slope of $\sigma_n$ is $\pm 3^n$. Thus, either

$$\left| \frac{\sigma_n(x + \delta_n) - \sigma_n(x)}{\delta_n} \right| = 3^n \text{ or } \left| \frac{\sigma_n(x - \delta_n) - \sigma_n(x)}{\delta_n} \right| = 3^n.$$

The terms with $k < n$ are crudely estimated from the slope of $\sigma_k$ being $\pm 3^k$:

$$\left| \frac{\sigma_k(x \pm \delta_k) - \sigma_k(x)}{\delta_k} \right| \leq 3^k.$$

Thus

$$\left| \frac{\Delta f}{\Delta x} \right| \geq 3^n - (3^{n-1} + \cdots + 1) = 3^n - \frac{3^n - 1}{3 - 1} = \frac{1}{2}(3^n + 1),$$

which tends to $\infty$ as $\delta_n \to 0$, so $f'(x)$ does not exist.