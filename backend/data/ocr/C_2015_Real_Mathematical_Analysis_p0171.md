The coefficients $f^{(k)}(x)/k!$ are constants, the variable is $h$. Differentiation of $P$ with respect to $h$ at $h = 0$ gives

$$P(0) = f(x)$$
$$P'(0) = f'(x)$$
$$\ldots$$
$$P^{(r)}(0) = f^{(r)}(x).$$

**12 Taylor Approximation Theorem** Assume that $f : (a,b) \to \mathbb{R}$ is $r^{th}$ order differentiable at $x$. Then

(a) $P$ approximates $f$ to order $r$ at $x$ in the sense that the Taylor remainder

$$R(h) = f(x + h) - P(h)$$

is $r^{th}$ order flat at $h = 0$; i.e., $R(h)/h^r \to 0$ as $h \to 0$.

(b) The Taylor polynomial is the only polynomial of degree $\leq r$ with this approximation property.

(c) If, in addition, $f$ is $(r+1)^{st}$-order differentiable on $(a,b)$ then for some $\theta$ between $x$ and $x + h$ we have

$$R(h) = \frac{f^{(r+1)}(\theta)}{(r+1)!} h^{r+1}.$$

**Remark** (c) is the Lagrange form of the remainder. If $\left|f^{(r+1)}(\theta)\right| \leq M$ for all $\theta \in (a,b)$ then

$$R(h) \leq \frac{Mh^{r+1}}{(r+1)!},$$

an estimate that is valid uniformly with respect to $x$ and $x + h$ in $(a,b)$, whereas (a) is only an infinitesimal pointwise estimate. Of course (c) requires stronger hypotheses than (a).

**Proof** (a) The first $r$ derivatives of $R(h)$ exist and equal 0 at $h = 0$. If $h > 0$ then repeated applications of the Mean Value Theorem give

$$R(h) = R(h) - 0 = R'(\theta_1)h = (R'(\theta_1) - 0)h = R''(\theta_2)\theta_1h$$
$$= \ldots = R^{(r-1)}(\theta_{r-1})\theta_{r-2} \ldots \theta_1h$$

where $0 < \theta_{r-1} < \ldots < \theta_1 < h$. Thus

$$\left| \frac{R(h)}{h^r} \right| = \left| \frac{R^{(r-1)}(\theta_{r-1})\theta_{r-2} \ldots \theta_1h}{h^r} \right| \leq \left| \frac{R^{(r-1)}(\theta_{r-1}) - 0}{\theta_{r-1}} \right| \to 0$$