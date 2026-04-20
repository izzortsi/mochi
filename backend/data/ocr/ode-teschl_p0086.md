associated with (3.49) and let $a_j$ be the corresponding multiplicities. Then the functions

$$x_{j,k}(t) = t^k \exp(\alpha_j t), \quad 0 \leq k < a_j, \quad 1 \leq j \leq m,$$

(3.54)

are $n$ linearly independent solutions of (3.49).

In particular, any other solution can be written as a linear combination of these solutions.

**Proof.** Let us look at a solution of the corresponding first-order system. By construction, the first component of every solution of the system will solve our $n$’th order equation. By collecting functions from each Jordan block (3.42), this first component must be a linear combination of the functions $x_{j,k}(t)$. So the solution space of (3.49) is spanned by these functions. Since this space is $n$ dimensional, all functions must be present. In particular, these functions must be linearly independent.

Note that if the coefficients $c_j$ are real, and if we are interested in real solutions, all we have to do is to take real and imaginary part. That is, for $\alpha_j = \lambda_j + i\omega_j$ take

$$t^k \mathrm{e}^{\lambda_j t} \cos(\omega_j t), \quad t^k \mathrm{e}^{\lambda_j t} \sin(\omega_j t).$$

(3.55)

**Example.** Consider the differential equation

$$\ddot{x} + \omega_0^2 x = 0, \quad \omega_0 \geq 0.$$

The characteristic polynomial is $\alpha^2 + \omega_0^2 = 0$ and the zeros are $\alpha_1 = i\omega_0, \alpha_2 = -i\omega_0$. Hence for $\omega_0 > 0$ a basis of solutions is

$$x_1(t) = \mathrm{e}^{i\omega_0 t}, \quad x_2(t) = \mathrm{e}^{-i\omega_0 t}$$

or, if we want real solutions,

$$x_1(t) = \cos(\omega_0 t), \quad x_2(t) = \sin(\omega_0 t).$$

For $\omega_0 = 0$ we have only one zero $\alpha_1 = 0$ of multiplicity $a_1 = 2$ and a basis of solutions is given by

$$x_{1,0}(t) = 1, \quad x_{1,1}(t) = t.$$

By (3.48) the solution of the inhomogeneous equation

$$x^{(n)} + c_{n-1} x^{(n-1)} + \cdots + c_1 \dot{x} + c_0 x = g(t)$$

is given by

$$x(t) = x_h(t) + \int_0^t u(t-s) g(s) ds,$$

(3.57)