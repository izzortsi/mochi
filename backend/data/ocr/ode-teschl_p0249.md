Problem 8.5. Solve the Lorenz equation for the case $\sigma = 0$.

Problem 8.6. Investigate the Lorenz equation for the case $r = \infty$ as follows. First introduce $\varepsilon = r^{-1}$. Then use the change of coordinates $(t, x, y, x) \mapsto (\tau, \xi, \eta, \zeta)$, where $\tau = \varepsilon^{-1}t$, $\xi = \varepsilon x$, $\eta = \sigma \varepsilon^2 y$, and $\zeta = \sigma(\varepsilon^2 z - \varepsilon)$.

Show that the resulting system for $\varepsilon = 0$ is given by

$$\xi' = \eta, \quad \eta' = -\xi\zeta, \quad \zeta' = \eta\xi,$$

which has two conserved quantities

$$\xi^2 - 2\zeta = 2\alpha, \quad \eta^2 + \zeta^2 = \beta.$$

Derive the single third order equation $\xi''' = -(\frac{3}{2}\xi^2 - \alpha)\xi'$. Integrate this equation once and observe that the result is of Newton type (see Section 6.7). Now what can you say about the solutions? (Hint: Problem 6.25.)

8.3. Hamiltonian mechanics

In the previous sections we have seen that even simple looking dynamical systems in three dimension can be extremely complicated. In the rest of this chapter we want to show that it is still possible to get some further insight if the system has a special structure. Hence we will look again at systems arising in classical mechanics.

The point of departure in classical mechanics is usually the Hamilton principle. Suppose a mechanical system has $n$ degrees of freedom described by coordinates $q \in V \subseteq \mathbb{R}^n$. Associated with such a system is a Lagrange function

$$L(v, q), \quad v = \dot{q},$$

and an integral curve $q(t)$ for which the action integral

$$\mathcal{I}(q) = \int_{t_0}^{t_1} L(\dot{q}(t), q(t))dt$$

subject to the boundary conditions $q(t_0) = q_0$, $q(t_1) = q_1$ is extremal.

If $L$ is differentiable, extremal curves can be found by setting the Gateaux derivative of $I$ equal to zero. That is, setting

$$q_\varepsilon(t) = q(t) + \varepsilon r(t),$$

we see that a necessary condition for $q$ to be extremal is that

$$\frac{d}{d\varepsilon} \mathcal{I}(q_\varepsilon) \bigg|_{\varepsilon=0} = 0.$$

Using integration by parts this immediately yields (Problem 8.7) the corresponding Euler–Lagrange equation

$$\frac{\partial L}{\partial q} - \frac{d}{dt} \frac{\partial L}{\partial v} = 0.$$