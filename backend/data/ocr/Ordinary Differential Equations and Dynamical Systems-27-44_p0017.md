Consider
$$xy' + 3x - 2y = 0$$
and look for an integrating factor $\mu(x)$ depending only on $x$. Solve the equation.

Problem 1.23. Show that
$$\dot{x} = t^{n-1}f\left(\frac{x}{t^n}\right)$$
can be solved using the new variable $y = \frac{x}{t^n}$.

Problem 1.24 (Focusing of waves). Suppose you have an incoming electromagnetic wave along the $y$-axis which should be focused on a receiver sitting at the origin $(0,0)$. What is the optimal shape for the mirror?

(Hint: An incoming ray, hitting the mirror at $(x,y)$ is given by
$$R_{\text{in}}(t) = \begin{pmatrix} x \\ y \end{pmatrix} - \begin{pmatrix} 0 \\ 1 \end{pmatrix} t, \quad t \in (-\infty, 0].$$

At $(x,y)$ it is reflected and moves along
$$R_{\text{rfl}}(t) = \begin{pmatrix} x \\ y \end{pmatrix} (1-t), \quad t \in [0,1].$$

The laws of physics require that the angle between the normal of the mirror and the incoming respectively reflected ray must be equal. Considering the scalar products of the vectors with the normal vector this yields
$$\frac{1}{\sqrt{x^2 + y^2}} \begin{pmatrix} -x \\ -y \end{pmatrix} \begin{pmatrix} -y' \\ 1 \end{pmatrix} = \begin{pmatrix} 0 \\ 1 \end{pmatrix} \begin{pmatrix} -y' \\ 1 \end{pmatrix},$$

which is the differential equation for $y = y(x)$ you have to solve. I recommend the substitution $u = \frac{y}{x}$.

Problem 1.25 (Catenary). Solve the differential equation describing the shape $y(x)$ of a hanging chain suspended at two points:
$$y'' = a\sqrt{1 + (y')^2}, \quad a > 0.$$

Problem 1.26 (Nonlinear boundary value problem). Show that the nonlinear boundary value problem
$$y''(x) + y(x)^2 = 0, \quad y(0) = y(1) = 0,$$
has a unique nontrivial solution. Assume that the initial value problem $y(x_0) = y_0$, $y'(x_0) = y_1$ has a unique solution.

- Show that a nontrivial solution of the boundary value problem must satisfy $y'(0) = p_0 > 0$.
- If a solution satisfies $y'(x_0) = 0$, then the solution is symmetric with respect to this point: $y(x) = y(x_0 - x)$. (Hint: Uniqueness.)