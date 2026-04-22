Since $D_k$ is a zero set, it can be covered by countably many open rectangles $S_\ell$ of small total area, say

$$\sum |S_\ell| < \sigma.$$

Let $\mathcal{V}$ be the covering of $R$ by the neighborhoods $W$ with small oscillation, and the rectangles $S_\ell$. Since $R$ is compact, $\mathcal{V}$ has a positive Lebesgue number $\lambda$. Take a grid with mesh $< \lambda$. This breaks the sum

$$U - L = \sum (M_{ij} - m_{ij}) |R_{ij}|$$

into two parts – the sum of those terms for which $R_{ij}$ is contained in a neighborhood $W$ with small oscillation, plus a sum of terms for which $R_{ij}$ is contained in one of the rectangles $S_\ell$. The latter sum is less than $2M\sigma$, while the former is less than $|R|/k$. Thus, when $k$ is large and $\sigma$ is small, $U - L$ is small, which implies Riemann integrability. To summarize,

*The Riemann-Lebesgue Theorem remains valid for functions of several variables.*

Now we come to the first place that multiple integration has something new to say. Suppose that $f : R \to \mathbb{R}$ is bounded and define

$$\underline{F}(y) = \int_a^b f(x,y) \, dx \quad \overline{F}(y) = \int_a^b f(x,y) \, dx.$$

For each fixed $y \in [c,d]$, these are the lower and upper integrals of the single-variable function $f_y : [a,b] \to \mathbb{R}$ defined by $f_y(x) = f(x,y)$. They are the integrals of $f(x,y)$ on the slice $y = \text{const}$. See Figure 118.

**29 Fubini’s Theorem** If $f$ is Riemann integrable then so are $\underline{F}$ and $\overline{F}$. Moreover,

$$\int_R f = \int_c^d \underline{F} \, dy = \int_c^d \overline{F} \, dy.$$

Since $\underline{F} \leq \overline{F}$ and the integral of their difference is zero, it follows from the one-dimensional Riemann-Lebesgue Theorem that there exists a linear zero set $Y \subset [c,d]$ such that if $y \notin Y$ then $\underline{F}(y) = \overline{F}(y)$. That is, the integral of $f(x,y)$ with respect to $x$ exists for almost all $y$ and we get the more common way to write the Fubini formula

$$\iiint_R f \, dx \, dy = \int_c^d \left[ \int_a^b f(x,y) \, dx \right] \, dy.$$