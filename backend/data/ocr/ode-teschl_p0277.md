where the first term is bounded since $\Phi_t(x) = e^{tA}x$ for sufficiently large $x$ (say $|x| \geq 2\delta e^{t\alpha}$ as pointed out before) and the second is since $h$ is.

**Example.** Consider again the vector field

$$f(x) = \left( -x_1 + x_2 + 3x_2^2, x_2 \right).$$

(9.36)

Then one can verify that its flow (9.24) is mapped to its linear counterpart

$$e^{tA} = \begin{pmatrix} e^{-t} & \sinh(t) \\ 0 & e^t \end{pmatrix}$$

(9.37)

by virtue of

$$\varphi(x) = \left( x_1 - x_2^2, x_2 \right).$$

(9.38)

The system together with its linearization is depicted in Figure 9.4.

Two systems with vector fields $f, g$ and respective flows $\Phi_f, \Phi_g$ are said to be **topologically conjugate** if there is a homeomorphism $\varphi$ such that

$$\varphi \circ \Phi_{f,t} = \Phi_{g,t} \circ \varphi.$$

(9.39)

Note that topological conjugacy of flows is an equivalence relation.

The Hartman–Grobman theorem hence states that $f$ is locally conjugate to its linearization $A$ at a hyperbolic fixed point. In fact, there is an even stronger results which says that two vector fields are locally conjugate near hyperbolic fixed points if and only if the dimensions of the stable and unstable subspaces coincide.

To show this, it suffices to show this result for linear systems. The rest then follows from transitivity of the equivalence relations and the Hartman–Grobman theorem.

**Theorem 9.10.** Suppose $A$ and $B$ are two matrices with no eigenvalues on the imaginary axis. If the dimensions of their respective stable and unstable subspaces for their flows are equal, then their flows are topologically conjugate.