exists and is analytic for $\text{Re}(s) > a$. Show that for $x \in C^1([0, \infty))$ satisfying $|x(t)| + |\dot{x}(t)| \leq M e^{at}$ we have

$$\mathcal{L}(\dot{x})(s) = s \mathcal{L}(x)(s) - x(0)$$

for $\text{Re}(s) > a$. Moreover, show that the initial value problem

$$\dot{x} = Ax + f(t), \quad x(0) = x_0$$

is transformed into a linear system of equations by the Laplace transform.

**Problem 3.16.** Suppose all eigenvalues of $A$ satisfy $\text{Re}(\alpha_j) < 0$. Show that every solution of (3.47) satisfies

$$\lim_{t \to \infty} x(t) = 0.$$

if $\lim_{t \to \infty} |g(t)| = 0$ (Hint: (3.48).) What if $\lim_{t \to \infty} g(t) = g_0$?

### 3.3. Linear autonomous equations of order $n$

In this section, we want to have a brief look at the case of the $n$’th order equations

$$x^{(n)} + c_{n-1} x^{(n-1)} + \cdots + c_1 \dot{x} + c_0 x = 0,$$

which appear frequently in applications. Here $c_0, \ldots, c_{n-1}$ are some real (or complex) constants. Again the solutions form an $n$ dimensional vector space since a solution is uniquely determined by the initial conditions

$$x(0) = x_0, \quad \ldots, \quad x^{(n-1)}(0) = x_{n-1}.$$

The corresponding system is given by

$$A = \begin{pmatrix}
0 & 1 \\
0 & 1 \\
\ddots & \ddots \\
0 & 1 \\
-c_0 & -c_1 & \cdots & \cdots & -c_{n-1}
\end{pmatrix}$$

and hence all our considerations apply: The characteristic polynomial can be computed by performing the Laplace expansion with respect to the last row and is given by

$$\chi_A(z) = \det(z \mathbb{I} - A) = z^n + c_{n-1} z^{n-1} + \cdots + c_1 z + c_0.$$

One can show that the geometric multiplicity of every eigenvalue is one (Problem 3.24).

**Theorem 3.7.** Let $\alpha_j$, $1 \leq j \leq m$, be the zeros of the characteristic polynomial

$$z^n + c_{n-1} z^{n-1} + \cdots + c_1 z + c_0 = \prod_{j=1}^{m} (z - \alpha_j)^{a_j}$$