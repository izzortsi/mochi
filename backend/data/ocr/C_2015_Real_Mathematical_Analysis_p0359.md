In $\mathbb{R}^3$ it is instructive to consider the 2-form

$$\omega = \frac{x}{r^3} dy \wedge dz + \frac{y}{r^3} dz \wedge dx + \frac{z}{r^3} dx \wedge dy.$$

$\omega$ is defined on $U$, which is $\mathbb{R}^3$ minus the origin. $U$ is a spherical shell with inner radius 0 and outer radius $\infty$. The form $\omega$ is closed but not exact despite the fact that $U$ is simply connected. See Exercise 59.

46 Poincaré Lemma If $\omega$ is a closed $k$-form on $\mathbb{R}^n$ then it is exact.

Proof In fact a better result is true. There are “integration operators”

$$L_k : \Omega^k(\mathbb{R}^n) \to \Omega^{k-1}(\mathbb{R}^n)$$

with the property that $Ld + dL = identity$. That is, for all $\omega \in \Omega^k(\mathbb{R}^n)$ we have

$$(L_{k+1}d + dL_k)(\omega) = \omega.$$

From the existence of these integration operators, the Poincaré Lemma is immediate. For if $d\omega = 0$ then we have

$$\omega = L(d\omega) + dL(\omega) = dL(\omega),$$

which shows that $\omega$ is exact with antiderivative $\alpha = L(\omega)$.

The construction of $L$ is tricky. First we consider a $k$-form $\beta$, not on $\mathbb{R}^n$, but on $\mathbb{R}^{n+1}$. It can be expressed uniquely as

(22) $$\beta = \sum_I f_I dx_I + \sum_J g_J dt \wedge dx_J$$

where $f_I = f_I(x,t)$, $g_J = g_J(x,t)$, and $(x,t) \in \mathbb{R}^{n+1} = \mathbb{R}^n \times \mathbb{R}$. The first sum is taken over all ascending $k$-tuples $I$ in $\{1, \ldots, n\}$, and the second over all ascending $(k-1)$-tuples $J$ in $\{1, \ldots, n\}$. The exterior derivative of $\beta$ is

(23) $$d\beta = \sum_{I,\ell} \frac{\partial f_I}{\partial x_\ell} dx_\ell \wedge dx_I + \sum_I \frac{\partial f_I}{\partial t} dt \wedge dx_I + \sum_{J,\ell} \frac{\partial g_J}{\partial x_\ell} dx_\ell \wedge dt \wedge dx_J$$

where $\ell = 1, \ldots, n$.

Then we define operators

$$N : \Omega^k(\mathbb{R}^{n+1}) \to \Omega^{k-1}(\mathbb{R}^n)$$