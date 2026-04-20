If $p_1 \leq p_0$ and $\lambda_0 r_0 - q_0 \leq \lambda_1 r_1 - q_1$, then Theorem 1.3 implies that $\Delta_{1,0}$ is increasing at a sign flip and hence all sign flips are counted as $+1$. This happens for example if $L_0 = L_1$ and $\lambda_1 > \lambda_0$.

As in the case of Theorem 5.18 one proves

**Theorem 5.22.** Suppose $L_0$ and $L_1$ are two regular Sturm–Liouville operators associated with the same boundary conditions at $a$ and $b$. Then

$$\#_{(-\infty, \lambda_1)}(L_1) - \#_{(-\infty, \lambda_0)}(L_0) = \#(u_0, a(\lambda_0), u_1, b(\lambda_1))$$

$$= \#(u_0, b(\lambda_0), u_1, a(\lambda_1)),$$

(5.100)

where $\#(u_0, u_1)$ is the number of weighted sign flips of $W(u_0, u_1)$ inside $(a, b)$ and $\#(-\infty, \lambda_j)(L_j)$ is the number of eigenvalues of $L_j$ inside $(-\infty, \lambda_j)$.

In the special case where we have only one operator $L$ with different spectral parameters the result reads:

**Corollary 5.23.** Let $L$ be a regular Sturm–Liouville operator and $\lambda_0 < \lambda_1$. Then

$$\#_{(\lambda_0, \lambda_1)}(L) = \#(u_a(\lambda_0), u_b(\lambda_1)) = \#(u_b(\lambda_0), u_a(\lambda_1)),$$

(5.101)

where $\#(u_a(\lambda_0), u_b(\lambda_1))$ is the number of sign flips of $W(u_a(\lambda_0), u_b(\lambda_1))$.

Finally, we note that given a positive differentiable function $h$ one can modify the Prüfer variables according to

$$u(x) = \frac{\tilde{\rho}_u(x)}{\sqrt{h(x)}} \sin(\tilde{\theta}_u(x)), \quad p(x)u'(x) = \sqrt{h(x)}\tilde{\rho}_u(x) \cos(\tilde{\theta}_u(x)).$$

(5.102)

That is, they are the Prüfer variables for $(\sqrt{h(x)}u(x), p(x)u'(x)/\sqrt{h(x)})$ and hence have the same properties. In particular,

$$\tilde{\rho}_u(x) = \sqrt{h(x)u(x)^2 + h(x)^{-1}(p(x)u'(x))^2}$$

(5.103)

is positive and

$$\tilde{\theta}_u(x) = \text{atan2}(p(x)u'(x)/\sqrt{h(x)}, \sqrt{h(x)u(x)}) \mod 2\pi$$

(5.104)

is uniquely determined once a value of $\tilde{\theta}_u(c)$ is chosen by requiring $\tilde{\theta}_u$ to be continuous. In the special case $h \equiv 1$ we recover our original Prüfer variables, and since the modified Prüfer angle equals the original one at every zero of $u$ as well as at every zero of $u'$, they can differ by at most $\pi/2$:

$$\lfloor \frac{2\theta_u}{\pi} \rfloor = \lfloor \frac{2\tilde{\theta}_u}{\pi} \rfloor.$$

(5.105)