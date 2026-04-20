we have

$$\frac{F(\lambda + \varepsilon) - F(\lambda)}{\varepsilon} = \iint_0^1 \frac{\partial f}{\partial \lambda}(x, \lambda + \varepsilon t) dt \, dx.$$

Moreover, by $|\frac{\partial f}{\partial \lambda}(x, \lambda + \varepsilon t)| \leq g(x)$ we have

$$\lim_{\varepsilon \to 0} \int_0^1 \frac{\partial f}{\partial \lambda}(x, \lambda + \varepsilon t) dt = \frac{\partial f}{\partial \lambda}(x, \lambda)$$

by the dominated convergence theorem. Applying dominated convergence again, note $|\int_0^1 \frac{\partial f}{\partial \lambda}(x, \lambda + \varepsilon t) dt| \leq g(x)$, the claim follows. $\square$

Now let us turn to integral equations. As in Section 2.2 we will equip the set of continuous functions $C(U, \mathbb{R}^n)$ (where $U \subset \mathbb{R}^m$) with the sup norm $\|f\| = \sup_{x \in U} |f(x)|$, which will turn $C(U, \mathbb{R}^n)$ into a Banach space.

Suppose $V$ is a closed subset of $\mathbb{R}^n$ and consider the following (nonlinear) Volterra integral equation

$$K_\lambda(x)(t) = k(t, \lambda) + \int_0^t K(s, x(s), \lambda) ds,$$

where

$$k \in C(I \times \Lambda, V), \quad K \in C(I \times V \times \Lambda, \mathbb{R}^n),$$

with $I = [-T, T]$ and $\Lambda \subset \mathbb{R}^n$ compact. We will require that there is a constant $L$ (independent of $t$ and $\lambda$) such that

$$|K(t, x, \lambda) - K(t, y, \lambda)| \leq L |x - y|, \quad x, y \in V.$$

(9.51)

Theorem 9.16. Let $K_\lambda$ satisfy the requirements (9.50)–(9.51) from above and let $T_0 = \min(T, \frac{\delta}{M})$, where $\delta > 0$ is such that

$$C_\delta = \{B_\delta(k(t, \lambda)) |(t, \lambda) \in [T, T] \times \Lambda\} \subset V$$

(9.52)

and

$$M = \sup_{(t, x, \lambda) \in [-T, T] \times B_\delta(0) \times \Lambda} |K(t, k(t, \lambda) + x, \lambda)|.$$

(9.53)

Then the integral equation $K_\lambda(x) = x$ has a unique solution $\overline{x}(t, \lambda) \in C([-T_0, T_0] \times \Lambda, V)$ satisfying

$$|\overline{x}(t, \lambda) - k(t, \lambda)| \leq e^{LT_0} \sup_{\lambda \in \Lambda} \int_{-T_0}^{T_0} |K(s, k(s, \lambda), \lambda)| ds.$$

(9.54)

Moreover, if in addition all partial derivatives of order up to $r$ with respect to $\lambda$ and $x$ of $k(t, \lambda)$ and $K(t, x, \lambda)$ are continuous, then all partial derivatives of order up to $r$ with respect to $\lambda$ of $\overline{x}(t, \lambda)$ are continuous as well.