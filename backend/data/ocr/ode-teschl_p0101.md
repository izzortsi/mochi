Problem 3.34. Consider the equation $\ddot{x} + q_0(t)x$. Assume one solution is $\phi_1$ and use reduction of order to show that a second solution is given by

$$\phi_2(t) = \phi_1(t) \int^t \frac{1}{\phi_1(s)^2} ds.$$

Problem 3.35. Verify that the second-order equation

$$\ddot{x} + (1 - t^2)x = 0$$

can be factorized as

$$\left( \frac{d}{dt} - t \right) \left( \frac{d}{dt} + t \right) x = 0$$

(note that the order is important). Use this to find the solution. (Hint: The solution can be found by solving two first order problems.)

Problem 3.36. Show that any linear $n$-th order equation can be factorized into first order equations:

Let $\phi_1, \ldots, \phi_n$ be linearly independent solutions of the $n$-th order equation $L_n(f) = 0$. Set

$$L_1(f) = \frac{W(\phi_1,f)}{\phi_1} = f' - \frac{\phi_1'}{\phi_1} f$$

and define $\psi_j = L_1(\phi_j)$. Show that $\psi_2, \ldots, \psi_n$ are linearly independent and

$$L_n(f) = L_{n-1}(L_1(f)), \quad L_{n-1}(f) = \frac{W(\psi_2, \ldots, \psi_n,f)}{W(\psi_2, \ldots, \psi_n)}.$$

Problem 3.37. Consider the change of variables

$$y(t) = Q(t)x(t), \quad Q(t) = e^{\frac{1}{n} \int^t q_{n-1}(s)ds}.$$

Show that if $x(t)$ satisfies (3.102), then $y(t)$ satisfies

$$y^{(n)} + \sum_{k=0}^{n-2} \sum_{j=k}^{n} \binom{j}{k} q_j(t)Q^{(j-k)}(t)y^{(k)},$$

where $q_n(t) = 1$. In particular, the new equation does not contain $y^{(n-1)}$.

Problem 3.38. Show that $x$ solves

$$\ddot{x} + q_1(t)\dot{x} + q_0(t)x = 0$$

if and only if

$$y(t) = e^{Q(t)} \frac{\dot{x}(t)}{x(t)}, \quad Q(t) = \int^t q_1(s)ds,$$

solves the Riccati equation

$$\dot{y} + e^{-Q(t)}y^2 + e^{Q(t)}q_0(t).$$