10.3. Linear difference equations

As in the case of differential equations, the behavior of nonlinear maps near fixed (periodic) points can be investigated by looking at the linearization. We begin with the study of the homogeneous linear first-order difference equations

$$x(m+1) = A(m)x(m), \quad x(m_0) = x_0,$$

(10.20)

where $A(m) \in \mathbb{R}^n \times \mathbb{R}^n$. Clearly, the solution corresponding to $x(m_0) = x_0$ is given by

$$x(m, m_0, x_0) = \Pi(m, m_0)x_0,$$

(10.21)

where $\Pi(m, m_0)$ is the principal matrix solution given by

$$\Pi(m, m_0) = \prod_{j=m_0}^{m-1} A(j), \quad m \geq m_0.$$

(10.22)

In particular, linear combinations of solutions are again solutions and the set of all solutions forms an $n$-dimensional vector space.

The principal matrix solution solves the matrix valued initial value problem

$$\Pi(m+1, m_0) = A(m)\Pi(m, m_0), \quad \Pi(m_0, m_0) = \mathbb{I}$$

(10.23)

and satisfies

$$\Pi(m, m_1)\Pi(m_1, m_0) = \Pi(m, m_0).$$

(10.24)

Moreover, if $A(m)$ is invertible for all $m$, we can set

$$\Pi(m, m_0) = \left( \prod_{j=m}^{m_0-1} A(j) \right)^{-1}, \quad m < m_0$$

(10.25)

In this case, $\Pi(m, m_0)$ is an isomorphism with inverse given by $\Pi(m, m_0)^{-1} = \Pi(m_0, m)$ and all formulas from above hold for all $m$.

The analog of Liouville’s formula is just the usual product rule for determinants

$$\det(\Pi(m, m_0)) = \prod_{j=m_0}^{m-1} \det(A(j)).$$

(10.26)