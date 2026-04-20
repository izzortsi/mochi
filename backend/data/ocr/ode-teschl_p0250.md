In the situation of particles under the influence of some forces we have

$$L(v, q) = \frac{1}{2} v M v - U(q),$$

(8.37)

where $M$ is a positive diagonal matrix with the masses of the particles as entries and $U$ is the potential corresponding to the forces. The associated Euler–Lagrange equations are just Newton’s equations

$$M \ddot{q} = -\text{grad} U(q).$$

(8.38)

If the **momentum**

$$p(v, q) = \frac{\partial L}{\partial v}(v, q)$$

(8.39)

is a diffeomorphism for fixed $q$, and hence

$$\det \frac{\partial^2 L}{\partial v^2} \neq 0,$$

(8.40)

then we can consider the **Legendre transform** of $L$,

$$H(p, q) = p v - L(v, q), \quad v = v(p, q),$$

(8.41)

which is known as the **Hamilton function** of the system. The associated variational principle is that the integral

$$\mathcal{I}(p, q) = \int_{t_0}^{t_1} \left( p(t) \dot{q}(t) - H(p(t), q(t)) \right) dt$$

(8.42)

subject to the boundary conditions $q(t_0) = q_0$, $q(t_1) = q_1$ is extremal. The corresponding Euler–Lagrange equations are Hamilton’s equations

$$\dot{q} = \frac{\partial H(p, q)}{\partial p}, \quad \dot{p} = -\frac{\partial H(p, q)}{\partial q}.$$

(8.43)

This formalism is called **Hamilton mechanics**.

In the special case of some particles we have

$$p = M v, \quad H(p, q) = \frac{1}{2} p M^{-1} p + U(q)$$

(8.44)

and the Hamiltonian corresponds to the total energy of the system.

Introducing the **symplectic matrix**

$$J = \begin{pmatrix} 0 & \mathbb{I} \\ -\mathbb{I} & 0 \end{pmatrix}, \quad J^{-1} = J^T = -J,$$

(8.45)

Hamilton’s equation can also be written as

$$\frac{d}{dt} \begin{pmatrix} p \\ q \end{pmatrix} = -\text{grad}_s H(p, q),$$

(8.46)

where $\text{grad}_s = -J \text{ grad}$ is called the **symplectic gradient**.