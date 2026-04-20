Finally, let remark that one frequently uses the momentum $p = \dot{x}$ (we have chosen units such that the mass is one) and the location $q = x$ as coordinates. The energy is called the Hamiltonian

$$H(p, q) = \frac{p^2}{2} + U(q)$$

(6.52)

and the equations of motion are written as (compare Problem 7.10)

$$\dot{q} = \frac{\partial H(p, q)}{\partial p}, \quad \dot{p} = -\frac{\partial H(p, q)}{\partial q}.$$

(6.53)

This formalism is called **Hamilton mechanics** and it is also useful for systems with more than one degree of freedom. We will return to this point of view in Section 8.3.

**Problem 6.22.** Consider the mathematical pendulum. If $E = 2$ what is the time it takes for the pendulum to get from $x = 0$ to $x = \pi$?

**Problem 6.23.** Investigate the potential $U(x) = \frac{x^2}{2} - \frac{x^3}{3}$.

$$\text{In}[5] := U[x_-] = \frac{x^2}{2} - \frac{x^3}{3}; \text{Plot}[U[x], \{x, -1, 2\}, \text{Ticks} \rightarrow \text{False}]

$$\text{Out}[5] =$$

Here are some interesting phase curves to get you started.

$$\text{In}[6] := \text{PhasePlot}[\{y, -U'[x]\}, \{\{-1, 0\}, \{-0.7, 0\}, \{-0.5, 0\}, \{-0.3, 0\}, \{1.05, 0.05\}, \{1.5, 0\}, \{2, 0\}\}, 8, \text{PlotRange} \rightarrow \{\{-1, 2.5\}, \{-2, 2\}\}, \text{Ticks} \rightarrow \text{False}]

$$\text{Out}[6] =$$