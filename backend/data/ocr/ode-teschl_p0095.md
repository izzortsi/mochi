which is known as **variation of constants** (also **variation of parameters**). Differentiating this ansatz we see

$$\dot{x}(t) = A(t)x(t) + \Pi(t, t_0)\dot{c}(t)$$

and comparison with (3.92) yields

$$\dot{c}(t) = \Pi(t_0, t)g(t).$$

Integrating this equation shows

$$c(t) = x_0 + \int_{t_0}^{t} \Pi(t_0, s)g(s)ds$$

and we obtain (using (3.88)):

**Theorem 3.12.** The solution of the inhomogeneous system (3.92) corresponding to the initial condition $x(t_0) = x_0$ is given by

$$x(t) = \Pi(t, t_0)x_0 + \int_{t_0}^{t} \Pi(t, s)g(s)ds,$$

where $\Pi(t, t_0)$ is the principal matrix solution of the corresponding homogeneous system.

To end this section, let me emphasize that there is no general way of solving linear systems except for the trivial case $n = 1$ (recall (1.40)). However, if one solution $\phi_1(t)$ is known, one can use the following method known as **reduction of order** (d’Alembert): At least one component of $\phi_1(t)$ is nonzero, say the first one for notational simplicity. Let $X(t)$ be the identity matrix with the first row replaced by $\phi_1(t)$,

$$X(t) = (\phi_1(t), \delta_2, \ldots, \delta_n)$$

and consider the transformation

$$x(t) = X(t)y(t).$$

Then the differential equation for $y(t) = X(t)^{-1}x(t)$ reads

$$\dot{y} = X^{-1}\dot{x} - X^{-1}\dot{X}X^{-1}x = X^{-1}(AX - \dot{X})y$$

with

$$AX - \dot{X} = AX - (\dot{\phi}_1, 0, \ldots, 0) = A(X - (\phi_1, 0, \ldots, 0)) = A(0, \delta_2, \ldots, \delta_n).$$

In particular, the right-hand side of the resulting system does not contain $y_1$. Hence we can first solve the $n - 1$ by $n - 1$ system for $(y_2, \ldots, y_n)$ and finally determine $y_1$ by one additional integration.

**Example.** Consider the system

$$A(t) = \begin{pmatrix} t^2 & -1 \\ 2t & 0 \end{pmatrix}$$