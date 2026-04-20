It can be shown that this last condition holds if $u \in C^3[0,1]$ with $u(0) = u''(0) = u(1) = u''(1) = 0$ and $v \in C^2[0,1]$ with $v(0) = v(1) = 0$. We will consider this issue in the example after Theorem 5.11 and in Problem 5.22. For a different method of solving the one-dimensional wave equation see Problem 5.1.

In general, a vast number of problems in various areas lead to the investigation of the following problem

$$Ly(x) = \lambda y(x), \quad L = \frac{1}{r(x)} \left( -\frac{d}{dx} p(x) \frac{d}{dx} + q(x) \right),$$

(5.16)

subject to the boundary conditions

$$\cos(\alpha)y(a) = \sin(\alpha)p(a)y'(a), \quad \cos(\beta)y(b) = \sin(\beta)p(b)y'(b),$$

(5.17)

$\alpha, \beta \in \mathbb{R}$. Such a problem is called Sturm–Liouville boundary value problem. Our example shows that we should prove the following facts about Sturm–Liouville problems:

(i) The Sturm–Liouville problem has a countable number of eigenvalues $E_n$ with corresponding eigenfunctions $u_n(x)$, that is, $u_n(x)$ satisfies the boundary conditions and $Lu_n(x) = E_nu_n(x)$.

(ii) The eigenfunctions $u_n$ are complete, that is, any nice function $u(x)$ can be expanded into a generalized Fourier series

$$u(x) = \sum_{n=1}^{\infty} c_n u_n(x).$$

This problem is very similar to the eigenvalue problem of a matrix. However, our linear operator is now acting on some space of functions which is not finite dimensional. Nevertheless, we can equip such a function space with a scalar product

$$\langle f, g \rangle = \int_a^b f^*(x)g(x)dx,$$

(5.18)

where ‘$*$’ denotes complex conjugation. In fact, it turns out that the proper setting for our problem is a Hilbert space and hence we will recall some facts about Hilbert spaces in the next section before proceeding further.

**Problem 5.1.** Note that the wave equation (5.1) can be factorized according to

$$\left( \frac{\partial}{\partial x} - \frac{1}{c} \frac{\partial}{\partial t} \right) \left( \frac{\partial}{\partial x} + \frac{1}{c} \frac{\partial}{\partial t} \right) u = \left( \frac{\partial}{\partial x} + \frac{1}{c} \frac{\partial}{\partial t} \right) \left( \frac{\partial}{\partial x} - \frac{1}{c} \frac{\partial}{\partial t} \right) u = 0.$$

Hence $f(x+ct)$ and $g(x-ct)$ as well as $f(x+ct) + g(x-ct)$ are solutions of the wave equation for arbitrary $f, g \in C^2(\mathbb{R})$.