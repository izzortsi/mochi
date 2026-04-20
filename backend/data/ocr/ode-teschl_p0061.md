where the coefficients can be obtained by recursively solving

$$\dot{\phi}_j = f_j(t, \phi_0, \ldots, \phi_j, \varepsilon_0), \quad \phi_j(t_0) = \begin{cases} x_0, & j = 0, \\ 0, & j \geq 1, \end{cases}$$

(2.61)

where the function $f_j$ is recursively defined via

$$f_{j+1}(t, x_0, \ldots, x_{j+1}, \varepsilon) = \frac{\partial f_j}{\partial \varepsilon}(t, x_0, \ldots, x_j, \varepsilon)$$

$$+ \sum_{k=0}^{j} \frac{\partial f_j}{\partial x_k}(t, x_0, \ldots, x_j, \varepsilon) x_{k+1},$$

$$f_0(t, x_0, \varepsilon) = f(t, x_0, \varepsilon).$$

(2.62)

If we assume $f \in C^{k+1}$ the error term will be $O((\varepsilon - \varepsilon_0)^{k+1})$ uniformly for $t \in I$.

Proof. The result follows by plugging (2.60) into the differential equation and comparing powers of $\varepsilon$. If $f \in C^{k+1}$ we know that $\frac{\partial^{k+1}}{\partial \varepsilon^{k+1}} \phi$ is continuous and hence bounded on $I \times \Lambda_0$, which gives the desired estimate on the remainder in the Taylor expansion.

A few remarks are in order: Of course we could admit more than one parameter if we are willing to deal with Taylor series in more than one variable. Moreover, we could include the case where the initial condition depends on $\varepsilon$ by simply replacing the initial conditions for $\phi_j(t_0)$ by the corresponding expansion coefficients of $x_0(\varepsilon)$.

Finally, we remark that the Taylor expansion will converge if $f$ is analytic with respect to all variables. This will be shown in Theorem 4.2.

Problem 2.16. Compute the next term $\phi_2$ in the above example.

Problem 2.17. Approximate the solutions of $\ddot{x} + x + \varepsilon x^3 = 0$, $x(0) = 1$, $\dot{x}(0) = 0$ up to order one. (Hint: It is not necessary to convert this second order equation to a first order system. In order to solve the second order equations you need to use the computer or preview Section 3.3.)

2.6. Extensibility of solutions

We have already seen that solutions might not exist for all $t \in \mathbb{R}$ even though the differential equation is defined for all $t \in \mathbb{R}$. This raises the question about the maximal interval on which a solution of the IVP (2.10) can be defined.

Suppose that solutions of the IVP (2.10) exist locally and are unique (e.g., $f$ is Lipschitz). Let $\phi_1, \phi_2$ be two solutions of the IVP (2.10) defined on the open intervals $I_1, I_2$, respectively. Let $I = I_1 \cap I_2 = (T_-, T_+)$ and