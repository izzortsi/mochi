Moreover, the Cauchy–Schwarz inequality shows

$$\left| \sum_{j=m}^{n} \alpha_j \langle u_j, g \rangle u_j(x) \right|^2 \leq \sum_{j=m}^{n} |\langle u_j, g \rangle|^2 \sum_{j=m}^{n} |\alpha_j u_j(x)|^2.$$

Now, by (5.32), $\sum_{j=0}^{\infty} |\langle u_j, g \rangle|^2 = \|g\|^2$ and hence the first term is part of a convergent series. Similarly, the second term can be estimated independent of $x$ since

$$\alpha_n u_n(x) = R_L(\lambda) u_n(x) = \int_a^b G(\lambda, x, t) u_n(t) r(t) dt = \langle u_n, G(\lambda, x,.) \rangle$$

implies

$$\sum_{j=m}^{n} |\alpha_j u_j(x)|^2 \leq \sum_{j=0}^{\infty} |\langle u_j, G(\lambda, x,.) \rangle|^2 = \int_a^b |G(\lambda, x, t)|^2 r(t) dt \leq M(\lambda)^2 \|1\|,$$

where $M(\lambda) = \max_{x,t \in [a,b]} |G(\lambda, x, t)|$, again by (5.32).

Moreover, it is even possible to weaken our assumptions for uniform convergence. To this end we introduce the quadratic form associated with $L$:

$$Q(f, g) = \int_a^b \left( p(x)f'(x)^*g'(x) + q(x)f(x)^*g(x) \right) dx$$

$$+ Q_{\alpha,a}(f, g) - Q_{\beta,b}(f, g), \quad f, g \in C^1([a, b], \mathbb{C}),$$

(5.71)

where

$$Q_{\gamma,c}(f, g) = \begin{cases} 0, & \gamma = 0, \\ \cot(\gamma)f(c)^*g(c), & \gamma \neq 0. \end{cases}$$

(5.72)

We will set $Q(f) = Q(f, f)$. An integration by parts shows

$$Q(f, g) = \langle f, Lg \rangle$$

(5.73)

provided $g \in \mathfrak{D}(L)$ and $f$ satisfied a possible Dirichlet boundary condition at the endpoints. In fact, the above formula continues to hold for $f$ in a slightly larger class of functions,

$$\mathfrak{Q}(L) = \{ f \in C_p^1[a, b] | f(a) = 0 \text{ if } \alpha = 0, f(b) = 0 \text{ if } \beta = 0 \} \supseteq \mathfrak{D}(L),$$

(5.74)

which we call the **form domain** of $L$. Here $C_p^1[a, b]$ denotes the set of piecewise continuously differentiable functions $f$ in the sense that $f$ is continuously differentiable except for a finite number of points at which it is continuous and the derivative has limits form the left and right. In fact, any class of functions for which the partial integration needed to obtain (5.73) can be justified would be good enough (e.g. the set of absolutely continuous functions).