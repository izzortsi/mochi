Problem 8.10. Show that the Poisson bracket is a skew-symmetric bilinear form on $C^\infty(V)$ satisfying the Jacobi identity

$$\{I, \{J, K\}\} + \{J, \{K, I\}\} + \{K, \{I, J\}\} = 0$$

and Leibniz’ rule

$$\{I, J K\} = J\{I, K\} + K\{I, J\}.$$

Problem 8.11. Suppose that $D$ is bounded and positively invariant under a volume preserving flow. Then $D$ belongs to the set of nonwandering points. (Hint: Poincaré’s recurrence theorem and Problem 6.10.)

Problem 8.12 (Relativistic mechanics). Einstein’s equation says that the kinetic energy of a relativistic particle is given by

$$T(v) = m(v)c^2, \quad m(v) = m_0 \sqrt{1 + \frac{v^2}{c^2}},$$

where $c$ is the speed of light and $m_0$ is the (rest) mass of the particle. Derive the equation of motions from Hamilton’s principle using the Lagrangian $L(v, q) = T(v) - U(q)$. Derive the corresponding Hamilton equations.

Problem 8.13. Consider $L(v, q)$ from (8.37) in $\mathbb{R}^3$ with $M = m\mathbb{I}_3$ and suppose $U(q) = U(|q|)$ is rotation invariant. Show that the angular momentum

$$l = x \wedge p$$

is conserved in this case. Here $\wedge$ denotes the cross product in $\mathbb{R}^3$.

8.4. Completely integrable Hamiltonian systems

Finally we want to show that there is also a canonical form for a Hamilton system under certain circumstances. To do this we need to transform our system in such a way that the Hamilton structure is preserved. More precisely, if our transformation is given by

$$(P, Q) = \varphi(p, q), \quad (p, q) = \psi(P, Q),$$

(8.53)

we have

$$\begin{pmatrix} \dot{P} \\ \dot{Q} \end{pmatrix} = d\varphi \begin{pmatrix} \dot{p} \\ \dot{q} \end{pmatrix} = -d\varphi J \text{ grad } H(p, q) = -(d\varphi J d\varphi^T) \text{ grad } K(P, Q),$$

(8.54)

where $K = H \circ \varphi$ is the transformed Hamiltonian. Hence, we need to require that the Jacobian matrix of $\varphi$ is a symplectic matrix, that is,

$$d\varphi \in \text{Sp}(2n) = \{M \in \text{Gl}(2n) | MJM^T = J\},$$

(8.55)

where $\text{Sp}(2n)$ is the symplectic group. Such a map is called a symplectic map. In this case $\varphi$ is also called a canonical transform. Alternatively