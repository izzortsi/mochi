3.5. Linear equations of order $n$

In this section, we want to have a brief look at the case of the $n$’th order equations

$$x^{(n)} + q_{n-1}(t)x^{(n-1)} + \cdots + q_1(t)\dot{x} + q_0(t)x = 0,$$

(3.102)

where $q_0(t), \ldots, q_{n-1}(t)$ are some continuous functions. Again the solutions form an $n$ dimensional vector space since a solution is uniquely determined by the initial conditions

$$x(t_0) = x_0, \quad \ldots, \quad x^{(n-1)}(t_0) = x_{n-1}$$

(3.103)

and, as in the case of constant coefficients (cf. Section 3.3), the corresponding system is given by

$$A(t) = \begin{pmatrix}
0 & 1 & \cdots & \\
0 & 1 & \ddots & \\
\vdots & \vdots & 0 & 1 \\
-q_0(t) & -q_1(t) & \cdots & -q_{n-1}(t)
\end{pmatrix}.$$

(3.104)

If we denote by $\phi_j(t, t_0)$ the solution corresponding to the initial condition $(x(t_0), \ldots, x^{(n-1)}(t_0)) = \delta_j$, the principal matrix solution is given by

$$\Pi(t, t_0) = \begin{pmatrix}
\phi_1(t, t_0) & \cdots & \phi_n(t, t_0) \\
\dot{\phi}_1(t, t_0) & \cdots & \dot{\phi}_n(t, t_0) \\
\vdots & \vdots & \vdots \\
\phi_1^{(n-1)}(t, t_0) & \cdots & \phi_n^{(n-1)}(t, t_0)
\end{pmatrix}.$$

(3.105)

As a consequence of Theorem 3.12 we obtain:

**Theorem 3.13.** The solution of the inhomogeneous $n$-th order linear equation

$$x^{(n)} + q_{n-1}(t)x^{(n-1)} + \cdots + q_1(t)\dot{x} + q_0(t)x = g(t)$$

(3.106)

corresponding to the initial condition

$$x(t_0) = x_0, \quad \ldots \quad x^{(n-1)}(t_0) = x_{n-1},$$

(3.107)

is given by

$$x(t) = x_0\phi_1(t, t_0) + \cdots + x_{n-1}\phi_n(t, t_0) + \int_{t_0}^{t} \phi_n(t, s)g(s)ds,$$

(3.108)

where $\phi_j(t, t_0), 1 \leq j \leq n$, are the solutions corresponding to the initial conditions $(\phi_j(t_0, t_0), \ldots, \phi_j^{(n-1)}(t_0, t_0)) = \delta_j$.