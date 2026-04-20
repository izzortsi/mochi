Proof. This follows from the previous result by adding the parameters $\lambda$ to the dependent variables and requiring $\dot{\lambda} = 0$. Details are left to the reader.

Problem 2.11. Show (2.36).

Problem 2.12. Show (2.38). (Hint: Introduce $\tilde{\psi}(t) = \psi(t) + \frac{\gamma}{\beta}$.)

Problem 2.13. Find different functions $f(t,x) = f(x)$ and $g(t,x) = g(x)$ such that the inequality in (2.40) becomes an equality.

Problem 2.14. Suppose $f \in C(U,\mathbb{R}^n)$ satisfies $|f(t,x) - f(t,y)| \leq L(t)|x - y|$. Show that the solution $\phi(t,x_0)$ of (2.10) satisfies

$$|\phi(t,x_0) - \phi(t,y_0)| \leq |x_0 - y_0| e^{|\int_{t_0}^{t} L(s)ds|}.$$

Problem 2.15. Show that in the one dimensional case, we have

$$\frac{\partial \phi}{\partial x}(t,x) = \exp \left( \int_{t_0}^{t} \frac{\partial f}{\partial x}(s, \phi(s,x)) ds \right).$$

2.5. Regular perturbation theory

Using Theorem 2.11 we can now also justify the perturbation method proposed in Problem 1.2 for initial value problems depending on a small parameter $\varepsilon$. In general, such a problem is of the form

$$\dot{x} = f(t,x,\varepsilon), \quad x(t_0) = x_0,$$

(2.55) and known as a regular perturbation problem.

If we suppose $f \in C^1$ then Theorem 2.11 ensures that the same is true for the solution $\phi(t,\varepsilon)$, where we do not display the dependence on the initial conditions $(t_0,x_0)$ for notational simplicity. In particular, we have the following Taylor expansions

$$\phi(t,\varepsilon) = \phi_0(t) + \phi_1(t)\varepsilon + o(\varepsilon)$$

(2.56)

with respect to $\varepsilon$ in a neighborhood of $\varepsilon = 0$.

Clearly the unperturbed term $\phi_0(t) = \phi(t,0)$ is given as the solution of the unperturbed equation

$$\dot{\phi}_0 = f_0(t,\phi_0), \quad \phi_0(t_0) = x_0,$$

(2.57)

where $f_0(t,x) = f(t,x,0)$. Moreover the derivative $\phi_1(t) = \frac{\partial}{\partial \varepsilon} \phi(t,\varepsilon)|_{\varepsilon=0}$ solves the corresponding first variational equation

$$\dot{\phi}_1 = f_{10}(t,\phi_0(t))\phi_1 + f_{11}(t,\phi_0(t)), \quad \phi_1(t_0) = 0,$$

(2.58)

where $f_{10}(t,x) = \frac{\partial}{\partial x} f(t,x,0)$ and $f_{11}(t,x) = \frac{\partial}{\partial \varepsilon} f(t,x,\varepsilon)|_{\varepsilon=0}$. The initial condition $\phi_1(t_0) = 0$ follows from the fact that the initial condition $x_0$ does not depend on $\varepsilon$, implying $\phi_1(t_0) = \frac{\partial}{\partial \varepsilon} \phi(t_0,\varepsilon)|_{\varepsilon=0} = \frac{\partial}{\partial \varepsilon} x_0|_{\varepsilon=0} = 0$.