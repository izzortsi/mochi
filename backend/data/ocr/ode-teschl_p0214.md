where $\eta \geq 0$ and investigate the stability of $(x_0, y_0) = (0, 0)$.

Problem 6.19 (Gradient systems). A system of the type

$$\dot{x} = f(x), \quad f(x) = -\text{grad}V(x),$$

is called a gradient system. Investigate the stability of a fixed point. (Hint: Compute the Lie derivative of $V$.)

Problem 6.20. Show Theorem 6.15.

Problem 6.21. Suppose $L \in C^1(M, \mathbb{R})$. Show that the level set $L(x) = c$ is invariant under the flow if and only if the Lie derivative of $L$ along the vector field vanishes on this level set.

6.7. Newton’s equation in one dimension

Finally, let us look at a specific example which will illustrate the results from this chapter.

We have learned in the introduction, that a particle moving in one dimension under the external force field $f(x)$ is described by Newton’s equation

$$\ddot{x} = f(x).$$

(6.42)

Physicist usually refer to $M = \mathbb{R}^2$ as the phase space, to $(x, \dot{x})$ as a phase point, and to a solution as a phase curve. Theorem 2.2 then says that through every phase point there passes precisely one phase curve.

The kinetic energy is the quadratic form

$$T(\dot{x}) = \frac{\dot{x}^2}{2}$$

(6.43)

and the potential energy is the function

$$U(x) = -\int_{x_0}^{x} f(\xi) d\xi$$

(6.44)

and is only determined up to a constant which can be chosen arbitrarily. The sum of the kinetic and potential energies is called the total energy of the system

$$E = T(\dot{x}) + U(x).$$

(6.45)

It is constant along solutions as can be seen from

$$\frac{d}{dt} E = \dot{x}\ddot{x} + U'(x)\dot{x} = \dot{x}(\ddot{x} - f(x)) = 0.$$

(6.46)

Hence, solving (6.45) for $\dot{x}$, the solution corresponding to the initial conditions $x(0) = x_0$, $\dot{x}(0) = x_1$ can be given implicitly as

$$\text{sign}(x_1) \int_{x_0}^{x} \frac{d\xi}{\sqrt{2(E - U(\xi))}} = t, \quad E = \frac{\dot{x}_1^2}{2} + U(x_0).$$

(6.47)