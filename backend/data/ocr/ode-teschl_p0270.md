As a first consequence we obtain existence of stable and unstable manifolds even in the non hyperbolic case, since $M^+(x_0) = M^{+,\varepsilon}(x_0)$ for $\varepsilon > 0$ small such that $E^+ = E^{+,\varepsilon}$.

**Theorem 9.4** (Stable manifold). Suppose $f \in C^k$, $k \geq 1$, has a fixed point $x_0$ with corresponding Jacobian matrix $A$. Then, there is a neighborhood $U(x_0) = x_0 + U$ and functions $h^\pm \in C^k(E^\pm \cap U, E^\mp)$ such that

$$M^\pm(x_0) \cap U(x_0) = \{x_0 + a + h^\pm(a)|a \in E^\pm \cap U\}. \tag{9.20}$$

Both $h^\pm$ and their Jacobian matrices vanish at $x_0$, that is, $M^\pm(x_0)$ are tangent to their respective linear counterpart $E^\pm$ at $x_0$. Moreover,

$$|\Phi(t, x) - x_0| \leq C e^{-t\alpha}, \pm t \geq 0, x \in M^\pm \tag{9.21}$$

for any $\alpha < \min\{|\Re(\alpha_j)| |\alpha_j \in \sigma(A), \Re(\alpha_j) \neq 0\}$ and some $C > 0$ depending on $\alpha$.

It can be shown that even a nonlinear counterpart of the center subspace $E^0$ exists. However, such a center manifold might not be unique (Problem 9.9).

In the hyperbolic case we can even say a little more.

**Theorem 9.5.** Suppose $f \in C^k$, $k \geq 1$, has a hyperbolic fixed point $x_0$. Then there is a neighborhood $U(x_0)$ such that $\gamma_\pm(x) \subset U(x_0)$ if and only if $x \in M^\pm(x_0) \cap U(x_0)$. In particular,

$$W^\pm(x_0) = M^\pm(x_0). \tag{9.22}$$

**Proof.** This follows since we have shown that any solution staying sufficiently close to $x_0$ solves (9.14). Hence uniqueness of the solution (in a sufficiently small neighborhood of $x_0$) implies that the initial value must lie in $M^+(x_0)$.

**Example.** Consider the vector field

$$f(x) = (-x_1 + x_2 + 3x_2^2, x_2). \tag{9.23}$$

Then it is not hard to check (start with the second equation) that its flow is given by

$$\Phi(t, x) = (x_1 e^{-t} + x_2 \sinh(t) + x_2^2(e^{2t} - e^{-t}), x_2 e^t). \tag{9.24}$$

Moreover, there is only one fixed point $x_0 = 0$ and the corresponding stable and unstable manifolds are given by

$$W^+(0) = \{x | x_2 = 0\}, \quad W^-(0) = \{x | x_1 = \frac{x_2}{2} + x_2^2\}. \tag{9.25}$$

The linearization is given by

$$A = \begin{pmatrix} -1 & 1 \\ 0 & 1 \end{pmatrix} \tag{9.26}$$