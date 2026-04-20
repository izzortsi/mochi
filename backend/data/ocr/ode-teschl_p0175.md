The corresponding eigenvalues and normalized eigenfunctions are

$$\lambda_n = (\pi n)^2, \quad u_n(x) = \sqrt{2} \sin(n\pi x), \quad n \in \mathbb{N}.$$

Moreover, every function $f \in \mathfrak{H}_0$ can be expanded into a Fourier sine series

$$f(x) = \sum_{n=1}^{\infty} f_n u_n(x), \quad f_n = \int_0^1 u_n(x) f(x) dx,$$

which is convergent with respect to our scalar product. If we assume $f$ piecewise continuously differentiable with $f(0) = f(1) = 0$ the series will even converge uniformly. See also Problem 5.22 for a direct proof.

At first sight it might look like Theorem 5.11 answers all our questions concerning Sturm–Liouville problems. Unfortunately this is not true since the assumptions we have imposed on the coefficients are too restrictive for some important applications! First of all, as noted earlier, it suffices to assume that $r(x), p(x)^{-1}, q(x)$ are integrable over $I$. However, this is a minor point. The more important one is, that in most cases at least one of the coefficients will have a (non integrable) singularity at one of the endpoints or the interval might be infinite. For example, the Legendre equation (Problem 4.14) appears on the interval $I = (-1, 1)$, over which $p(x)^{-1} = (1-x^2)^{-1}$ is not integrable.

In such a situation, the solutions might no longer be extensible to the boundary points and the boundary condition (5.55) makes no sense. However, in this case it is still possible to find two solutions $u_a(z_0, x), u_b(z_0, x)$ (at least for $z_0 \in \mathbb{C} \setminus \mathbb{R}$) which are square integrable near $a, b$ and satisfy $\lim_{x \downarrow a} W_x(u_a(z_0)^*, u_a(z_0)) = 0$, $\lim_{x \uparrow b} W_x(u_b(z_0)^*, u_b(z_0)) = 0$, respectively. Introducing the boundary conditions

$$BC_a(f) = \lim_{x \downarrow a} W_x(u_a(z_0), f) = 0 \quad (5.78)$$

one obtains again a symmetric operator. The inverse $R_L(z)$ can be computed as before, however, the solutions $u_a(z, x)$ and $u_b(z, x)$ might not exist for $z \in \mathbb{R}$ and consequently might not be analytic in the entire complex plane.

It can be shown that Lemma 5.10 (and thus the first part of Theorem 5.11) still holds if

$$\int_a^b \int_a^b |G(z, x, y)|^2 r(x) r(y) \, dx \, dy < \infty. \quad (5.79)$$

Integral operators satisfying this estimate are known as Hilbert–Schmidt operators. This estimate can for example be verified in the case of Legendre’s equation using the explicit behavior of solutions near the singular points $\pm 1$, which follows from the Frobenius method.