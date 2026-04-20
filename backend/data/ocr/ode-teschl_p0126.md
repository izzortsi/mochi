Hence we have at least found a recursive formula for computing the coefficients of the power series of the solution.

In general one obtains the following result by differentiating the differential equation:

**Theorem 4.3.** Suppose $f : \Omega \to \mathbb{C}$ is analytic. Then the expansion coefficients in the power series (4.4) of the solution $w(z)$ for the initial value problem (4.2) can be found recursively via

$$w^{(j)}(z_0) = f^j(z_0, w(z_0), \ldots, w^{(j-1)}(z_0)),$$

(4.18)

where the function $f^j$ is recursively defined via

$$f^{j+1}(z, w^{(0)}, \ldots, w^{(j)}) = \frac{\partial f^j}{\partial z}(z, w^{(0)}, \ldots, w^{(j-1)})$$

$$+ \sum_{k=0}^{j-1} \frac{\partial f^j}{\partial w^{(k)}}(z, w^{(0)}, \ldots, w^{(j-1)}) w^{(k+1)},$$

$$f^1(z, w^{(0)}) = f(z, w^{(0)}).$$

(4.19)

However, this procedure gets too cumbersome if the function $f$ involves $w$ in a too complicated way. Hence we will only investigate the case of linear equations further. But, to make things a bit more exciting, we will allow for poles in the coefficients, which is often needed in applications. In fact, this will eventually allow us to solve the Riccati equation from the last example using special functions (Problem 4.13).

**Problem 4.1.** Make a power series ansatz for the following equations:

(i) $w' + w = z$, $w(0) = w_0$.

(ii) $w' + w^2 = z^2$, $w(0) = w_0$.

(iii) $w' + w = \frac{1}{1-z}$, $w(0) = w_0$.

**Problem 4.2.** Try to find a solution of the initial value problem

$$w'' = (z^2 - 1)w, \quad w(0) = 1, \quad w'(0) = 0,$$

by using the power series method from above. Can you find a closed form for the solution? What is a second solution? (Hint: Problem 3.34)

**Problem 4.3.** Make a power series ansatz for the differential equation

$$z^2w' = w - z.$$

What is the radius of convergence of the resulting series?

**Problem 4.4.** Consider (4.2) at $z_0 = 0$. Show that the power series for the $n$th Picard iteration and the solution coincide up to order $n$. This