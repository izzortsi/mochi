where $L_1(t) = \int_0^t L(s)ds$. This follows by induction:

$$|K^{m+1}(x)(t) - K^{m+1}(y)(t)| \leq \int_0^t |f(s, K^m(x)(s)) - f(s, K^m(y)(s))|ds$$
$$\leq \int_0^t L(s)|K^m(x)(s) - K^m(y)(s)|ds$$
$$\leq \int_0^t L(s)\frac{L_1(s)^m}{m!} \sup_{r \leq s} |x(r) - y(r)|ds$$
$$\leq \sup_{r \leq t} |x(r) - y(r)| \int_0^t L_1'(s)\frac{L_1(s)^m}{m!}ds$$
$$= \frac{L_1(t)^{m+1}}{(m+1)!} \sup_{r \leq t} |x(r) - y(r)|.$$

Hence $K$ satisfies the assumptions of Theorem 2.4 which finally yields

$$\sup_{0 \leq t \leq T_0} |\bar{x}(t) - K^m(x_0)(t)| \leq \sum_{j=m}^{\infty} \left( \frac{L_1(T_0)^j}{j!} \right) \int_0^{T_0} |f(s, x_0)|ds.$$

Note that if we set

$$M = \sup_{(t,x) \in [t_0,T] \times B_\delta(x_0)} |f(t,x)|$$

then we can chose

$$T_0 = \min(T, \frac{M}{\delta}).$$

If $f(t,x)$ is defined for all $x \in \mathbb{R}^n$ and we can find a global Lipschitz constant, then we can say more about the interval where the solution exists:

**Corollary 2.6.** Suppose $[t_0,T] \times \mathbb{R}^n \subset U$ and

$$\int_{t_0}^T L(t)dt < \infty, \quad L(t) = \sup_{x \neq y \in \mathbb{R}^n} \frac{|f(t,x) - f(t,y)|}{|x-y|},$$

then $\bar{x}$ is defined for all $t \in [t_0,T]$.

In particular, if $U = \mathbb{R}^{n+1}$ and $\int_{-T}^T L(t)dt < \infty$ for all $T > 0$, then $\bar{x}$ is defined for all $t \in \mathbb{R}$.

**Proof.** In this case we can simply choose our closed set $C$ to be the entire Banach space $X = C([0,T],\mathbb{R}^n)$ (i.e., $\delta = \infty$) and proceed as in the proof of the previous theorem with $T_0 = T$.

Note that this corollary applies for example if the differential equation is linear, that is, $f(t,x) = A(t)x + b(t)$, where $A(t)$ is a matrix and $b(t)$ is a vector which both have continuous entries.