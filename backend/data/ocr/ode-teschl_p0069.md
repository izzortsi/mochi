Show that using this method the error during one step is of $O(h^3)$ (provided $f \in C^2$):

$$\phi(t_0 + h) = x_0 + \frac{h}{2}\left(f(t_0, x_0) + f(t_1, y_0)\right) + O(h^3).$$

Note that this is not the only possible scheme with this error order since

$$\phi(t_0 + h) = x_0 + \frac{h}{2}\left(f(t_1, x_0) + f(t_0, y_0)\right) + O(h^3)$$

as well.

**Problem 2.24.** Compute the solution of the initial value problem $\dot{x} = x$, $x(0) = 1$, using the Euler and Runge–Kutta algorithm with step size $h = 10^{-1}$. Compare the results with the exact solution.

**Problem 2.25** (Osgood uniqueness criterion). We call a continuous non-decreasing function $\rho : [0, \infty) \to [0, \infty)$ with $\rho(0) = 0$ a module of continuity. It is said to satisfy the Osgood condition if

$$\int_0^1 \frac{dr}{\rho(r)} = \infty.$$

We will say that a function $f : \mathbb{R} \to \mathbb{R}$ is $\rho$-continuous if $|f(x) - f(y)| \leq C\rho(|x - y|)$ for some constant $C$. For example in the case $\rho(r) = r^\alpha$, $\alpha \in (0, 1)$, we obtain the Hölder continuous functions and in the case $\rho(r) = r$ the Lipschitz continuous functions. Note that only in the Lipschitz case the Osgood condition holds. Another module satisfying the Osgood condition is $\rho(r) = r(1 + |\log(r)|)$, the corresponding functions are known as almost Lipschitz functions.

Let $f(t, x)$ be as in the Peano theorem and suppose

$$|(x - y) \cdot (f(t, x) - f(t, y))| \leq C|x - y|\rho(|x - y|),$$

$t \in [t_0, t_0 + T]$, $x, y \in B_\delta(x_0)$, for some modulus of continuity which satisfies the Osgood condition (here the $\cdot$ indicates the scalar product). Then the solution is unique.

(Hint: Consider the difference of two solutions $R(t) = |x(t) - y(t)|^2$ and suppose $R(t_1) = 0$ but $R(t) > 0$ for $t \in (t_1, t_2)$. Estimate $R$ using the assumptions and proceed as for a separable equation to obtain a contradiction.)