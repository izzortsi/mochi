For given $k \in \mathbb{N}_0$, show that

$$\sum_{n=1}^{\infty} n^k |s_n(f)| < \infty$$

if $f \in C^{k+1}([0,1],\mathbb{C})$ with $f^{(2j)}(0) = f^{(2j)}(1) = 0$ for $0 \leq j \leq \frac{k}{2}$. (Hint: Use integration by parts to show

$$(1 + \delta_{0,n})c_n(f') = 2((-1)^n f(1) - f(0)) + n\pi s_n(f)$$

and

$$s_n(f') = -n\pi(1 + \delta_{0,n})c_n(f).$$

Now observe that for $g \in C([0,1],\mathbb{C})$, both $s_n(g)$ and $c_n(g)$ are square summable (by the Bessel inequality). Moreover, the sequence $n^{-1}$ is also square summable and the product of two square summable is (absolutely) summable by the Cauchy–Schwarz inequality.

Problem 5.23. Suppose $f \in C_p^1[a,b]$. Show that for every $\varepsilon > 0$

$$|f(x)|^2 \leq \varepsilon \int_a^b |f'(x)|^2 \, dx + \left(\frac{1}{\varepsilon} + \frac{1}{b-a}\right) \int_a^b |f(x)|^2 \, dx.$$

(Hint: $\frac{d}{dx}|f(x)|^2 = 2\operatorname{Re}\left(f(x)f'(x)\right) \leq 2|f(x)f'(x)|$).

5.5. Oscillation theory

In this section we want to gain further insight by looking at the zeros of the eigenfunctions of a Sturm–Liouville equation. If you look at the simplest Sturm–Liouville equation $r = p = 1$ and $q = 0$, the solutions are trigonometric functions for $\lambda > 0$ and if you plot the solution in phase space, that is, the solutions of the underlying first order system (5.44) given by $(u(x), p(x)u'(x)) \in \mathbb{R}^2$, they will rotate around the origin. It turns out that this behavior is quite common for Sturm–Liouville equations and in order to investigate this further we introduce polar coordinates in phase space which are known as Prüfer variables:

$$u(x) = \rho_u(x) \sin(\theta_u(x)), \quad p(x)u'(x) = \rho_u(x) \cos(\theta_u(x)).$$

(5.81)

Clearly the Prüfer radius is given by

$$\rho_u(x) = \sqrt{u(x)^2 + (p(x)u'(x))^2}$$

(5.82)

and the Prüfer angle is

$$\theta_u(x) = \operatorname{atan2}(p(x)u'(x), u(x)) \mod 2\pi,$$

(5.83)

where

$$\operatorname{atan2}(x,y) = \begin{cases} \arccos\left(\frac{x}{\sqrt{x^2+y^2}}\right), & y \geq 0, \\ -\arccos\left(\frac{x}{\sqrt{x^2+y^2}}\right), & y < 0. \end{cases}$$

(5.84)