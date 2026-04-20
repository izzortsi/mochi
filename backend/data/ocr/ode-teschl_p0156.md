Express $f$ and $g$ in terms of the initial conditions $u(0,x) = u(x) \in C^2(\mathbb{R})$ and $\frac{\partial}{\partial t} u(0,x) = v(x) \in C^1(\mathbb{R})$ to obtain d’Alembert’s formula

$$u(t,x) = \frac{u(x+ct) + u(x-ct)}{2} + \frac{1}{2c} \int_{x-ct}^{x+ct} v(y) dy.$$

In order to obtain a solution on $x \in [0,1]$ satisfying the boundary conditions $u(t,0) = u(t,1) = 0$, use the following reflection technique: Extend the initial condition $u(x) \in C^2[0,1]$ to $[-1,1]$ using reflection $u(-x) = -u(x)$ and then to $\mathbb{R}$ using periodicity $u(x+2) = u(x)$. Show that the resulting function $u$ will be $C^2(\mathbb{R})$ provided $u(0) = u''(0) = u(1) = u''(1) = 0$. Similarly we can extend $v \in C^1[0,1]$ to a function $v \in C^1(\mathbb{R})$ provided $v(0) = v(1) = 0$.

Problem 5.2. Show that

$$q_2(x)y'' + q_1(x)y' + q_0(x)y, \quad q_2(x) > 0,$$

can be written as

$$\frac{1}{r(x)} \left( -(p(x)y')' + q(x)y \right).$$

Find $r$, $p$, $q$ in terms of $q_0$, $q_1$, $q_2$.

Write the Bessel and Legendre equations (Problem 4.14) in this form.

Problem 5.3 (Hanging cable). Consider the vibrations of a cable suspended at $x = 1$. Denote the displacement by $u(t,x)$. Then the motion is described by the equation

$$\frac{\partial^2}{\partial t^2} u(t,x) = g \frac{\partial}{\partial x} x \frac{\partial}{\partial x} u(t,x),$$

with boundary conditions $u(t,1) = u'(t,0) = 0$. Find all solutions of the form $u(t,x) = w(t)y(x)$. (Hint: Problem 4.13)

Problem 5.4 (Heat equation). Use the method described in this section to solve the heat equation

$$\frac{\partial}{\partial t} u(t,x) = \frac{\partial^2}{\partial x^2} u(t,x)$$

with boundary conditions $u(t,0) = u_0$, $u(t,1) = u_1$ and initial condition $u(0,x) = u(x)$. It models the temperature distribution of a thin wire whose edges are kept at a fixed temperature $u_0$ and $u_1$. What can you say about $\lim_{t \to \infty} u(t,x)$. (Hint: If $u(x,t)$ solves the heat equation so does $u(x,t) + a + bx$. Use this to reduce the boundary conditions to the case $u_0 = u_1 = 0$.)

Problem 5.5 (Harmonic crystal in one dimension). Suppose you have a linear chain of identical particles coupled to each other by springs. Then the equation of motion is given by

$$m \frac{d^2}{dt^2} u(t,n) = k(u(t,n+1) - u(t,n)) + k(u(t,n-1) - u(t,n)), \quad (t,n) \in \mathbb{R} \times \mathbb{Z},$$