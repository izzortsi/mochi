Problem 4.5. The Gamma function is defined via

$$\Gamma(z) = \int_{0}^{\infty} x^{z-1} e^{-x} dx, \quad \text{Re}(z) > 0.$$

Verify that the integral converges and defines an analytic function in the indicated half plane. Use integration by parts to show

$$\Gamma(z+1) = z \Gamma(z), \quad \Gamma(1) = 1.$$

Conclude $\Gamma(n) = (n-1)!$ for $n \in \mathbb{N}$. Show that the relation $\Gamma(z) = \Gamma(z+1)/z$ can be used to define $\Gamma(z)$ for all $z \in \mathbb{C} \setminus \{0, -1, -2, \ldots\}$. Show that near $z = -n$, $n \in \mathbb{N}_0$, the Gamma functions behaves like $\Gamma(z) = \frac{(-1)^n}{n!z} + O(1)$.

Problem 4.6. Show that the change of variables

$$v(z) = e^{\frac{1}{2} \int^z p(\zeta) d\zeta} u(z)$$

transforms (4.20) into

$$v'' + \left( q(z) - \frac{1}{2} p'(z) - \frac{1}{4} p(z)^2 \right) v = 0.$$

Problem 4.7. Solve the following differential equations by the Frobenius method:

(i) $z u' + (1+z)u = 0.$
(ii) $u'' - 2u' + (1 + \frac{1}{4z^2})u = 0.$
(iii) $u'' + \frac{1-z}{z(1+z)} u' - \frac{1-z}{z(1+z)^2} u = 0.$
(iv) $z u'' + u' + u = 0.$

Problem 4.8. Show that the coefficients of $h(x)$ from Lemma 4.4 are recursively given by

$$h_j = \frac{1}{j} \sum_{k=0}^{j-1} p_{j-k} h_k,$$

if $p(z) = z^{-1} \sum_{j=0}^{\infty} p_j z^j.$

Problem 4.9. Consider the first-order liner inhomogeneous difference equation

$$x(n+1) - f(n)x(n) = g(n), \quad f(n) \neq 0.$$

Show that the solution of the homogeneous equation ($g = 0$) is given by

$$x_h(n) = x(0) \begin{cases} \prod_{j=0}^{n-1} f(j), & n > 0, \\ 1, & n = 0, \\ \prod_{j=n}^{-1} f(j)^{-1}, & n < 0, \end{cases}$$