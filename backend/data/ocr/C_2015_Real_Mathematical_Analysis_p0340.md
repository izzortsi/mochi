Figure 122 This smooth 1-cell is a path with a cusp. It is part of the graph of $y = \sqrt{|x|}$.

This flexibility is a good thing. It lets the closed disc and many other planar regions be (the images of) 2-cells. See page 354, Figure 130, and Exercise 70.

Integrating a $k$-form over a $k$-cell $\varphi$ with $k \geq 2$ requires Jacobian determinants. To simplify notation we write $I = (i_1, \ldots, i_k)$ and $J = (j_1, \ldots, j_k)$ for $k$-tuples of integers. Then $\partial \varphi_I / \partial u_J$ is the $k \times k$ determinant

$$\frac{\partial \varphi_I}{\partial u_J} = \det \begin{bmatrix}
\frac{\partial \varphi_{i_1}}{\partial u_{j_1}} & \ldots & \frac{\partial \varphi_{i_k}}{\partial u_{j_k}} \\
\vdots & \vdots & \vdots \\
\frac{\partial \varphi_{i_k}}{\partial u_{j_1}} & \ldots & \frac{\partial \varphi_{i_k}}{\partial u_{j_k}}
\end{bmatrix}$$

If $I = (i)$ and $J = (j)$ then $\partial \varphi_I / \partial u_J$ is just $\partial \varphi_i / \partial u_j$, while if $I = (1, 2)$ and $J = (5, 7)$ then $\partial \varphi_I / \partial u_J$ is the $2 \times 2$ determinant

$$\frac{\partial \varphi_I}{\partial u_J} = \frac{\partial(\varphi_1, \varphi_2)}{\partial(u_5, u_7)} = \det \begin{bmatrix}
\frac{\partial \varphi_1}{\partial u_5} & \frac{\partial \varphi_1}{\partial u_7} \\
\frac{\partial \varphi_2}{\partial u_5} & \frac{\partial \varphi_2}{\partial u_7}
\end{bmatrix}.$$

Notation The letters $s, t$, and $u = (u_1, \ldots, u_k)$ will denote, as often as possible, dummy integration variables. They label points in the domain of definition of a $k$-cell, namely $I^k$. For instance $I^2 = \{(s, t) : 0 \leq s, t \leq 1\}$. The letters $x = (x_{i_1}, \ldots, x_{i_k})$ will be used to name forms in the target space $\mathbb{R}^n$ of the cells. For example $dx_1dx_5$ is a 2-form in $\mathbb{R}^n$ with $n \geq 5$. In $\mathbb{R}^3$ we will name forms with $x, y, z$ variables. For example $dxdy$ is a 2-form in $\mathbb{R}^3$. It is the same as $dx_1dx_2$ but $dxdy$ is a more familiar name for it. A planar path $\varphi$ is $\varphi(t) = (\varphi_1(t), \varphi_2(t)) = (x(t), y(t))$.

Definition The $x_I$-area of $\varphi$ is the functional on $C_k(\mathbb{R}^n)$, the set of $k$-cells,

$$dx_I : \varphi \mapsto \int_{I^k} \frac{\partial \varphi_I}{\partial u} du$$