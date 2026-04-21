as $h \to 0$. If $h < 0$ the same is true with $h < \theta_1 < \cdots < \theta_{r-1} < 0$.

(b) If $Q(h)$ is a polynomial of degree $\leq r$, $Q \neq P$, then $Q - P$ is not $r^{\text{th}}$-order flat at $h = 0$, so $f(x + h) - Q(h)$ cannot be $r^{\text{th}}$-order flat either.

(c) Fix $h > 0$ and define

$$g(t) = f(x + t) - P(t) - \frac{R(h)}{h^{r+1}} t^{r+1} = R(t) - R(h) \frac{t^{r+1}}{h^{r+1}}$$

for $0 \leq t \leq h$. Note that since $P(t)$ is a polynomial of degree $r$, $P^{(r+1)}(t) = 0$ for all $t$, and

$$g^{(r+1)}(t) = f^{(r+1)}(x + t) - (r + 1)! \frac{R(h)}{h^{r+1}}.$$

Also, $g(0) = g'(0) = \cdots = g^{(r)}(0) = 0$, and $g(h) = R(h) - R(h) = 0$. Since $g = 0$ at 0 and $h$, the Mean Value Theorem gives a $t_1 \in (0, h)$ such that $g'(t_1) = 0$. Since $g'(0)$ and $g'(t_1) = 0$, the Mean Value Theorem gives a $t_2 \in (0, t_1)$ such that $g'(t_2) = 0$. Continuing, we get a sequence $t_1 > t_2 > \cdots > t_{r+1} > 0$ such that $g^{(k)}(t_k) = 0$. The $(r+1)^{\text{st}}$ equation, $g^{(r+1)}(t_{r+1}) = 0$, implies that

$$0 = f^{(r+1)}(x + t_{r+1}) - (r + 1)! \frac{R(h)}{h^{r+1}}.$$

Thus, $\theta = x + t_{r+1}$ makes the equation in (c) true. If $h < 0$ the argument is symmetric.

13 Corollary For each $r \in \mathbb{N}$ the smooth nonanalytic function $e(x)$ satisfies $\lim_{h \to 0} e(h)/h^r = 0$.

Proof Obvious from the theorem and the fact that $e^{(r)}(0) = 0$ for all $r$.

The Taylor series at $x$ of a smooth function $f$ is the infinite Taylor polynomial

$$T(h) = \sum_{r=0}^{\infty} \frac{f^{(r)}(x)}{r!} h^r.$$

In calculus, you compute the Taylor series of functions such as $\sin x$, $\arctan x$, $e^x$, etc. These functions are analytic: Their Taylor series converge and express them as power series. In general, however, the Taylor series of a smooth function need not converge to the function, and in fact it may fail to converge at all. The function $e(x)$ is an example of the first phenomenon. Its Taylor series at $x = 0$ converges, but gives the wrong answer. Examples of divergent and totally divergent Taylor series are indicated in Exercise 4.37.