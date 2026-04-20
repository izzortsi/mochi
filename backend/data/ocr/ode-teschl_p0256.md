defined modulo $2\pi$. The equation of motion read

$$\dot{I} = -\frac{\partial K}{\partial \theta} = 0,$$
$$\dot{\theta} = \frac{\partial K}{\partial I} = \Omega(I),$$

where $\Omega(I) = 2\pi/T(K(I))$.

The main reason why we could find such a canonical transform to action-angle variables is the existence of a first integral, namely the Hamiltonian. In one dimension this single first integral suffices to decompose the surfaces of constant energy into periodic orbits. In higher dimensions this is no longer true unless one can find $n$ first integrals $L_j$ which are functionally independent and in involution, $\{L_j, L_k\} = 0$. Such systems are called **completely integrable**. If the system is integrable, the $n$ first integrals can be used to define the $n$-dimensional manifolds $\Gamma_c = \{(p, q)|L_j(p, q) = c_j, 1 \leq j \leq n\}$ which can be shown to be diffeomorphic to an $n$-dimensional torus (if they are compact). Taking a basis of cycles $\{\gamma_j(c)\}_{j=1}^n$ on the torus $\Gamma_c$ one can define the action variables as before via

$$I_j(c) = \frac{1}{2\pi} \int_{\gamma_j(c)} p \, dq$$

and the angle variables via a generating function $S_2(I, q) = \int^q p \, dq$. I do not want to go into further details here but I refer to the excellent book by Arnold [2]. However, I will at least illustrate the situation for the prototypical example. Approximating the potential $U(q)$ near a local minimum we obtain

$$U(q) = U(q_0) + \frac{1}{2} q W q + o(|q|^2),$$

where $W$ is a positive matrix and $U(q_0)$ can be chosen zero. Neglecting the higher order terms, the resulting model

$$H(p, q) = \frac{1}{2}(p M p + q W q)$$

is known as **harmonic oscillator**. Let $V$ be the (real) orthogonal matrix which transforms the symmetric matrix $M^{-1/2} W M^{-1/2}$ to diagonal form and let $\omega_j^2$ be the eigenvalues. Then the symplectic transform $(P, Q) = (VM^{1/2} p, VM^{-1/2} q)$ (Problem 8.15) gives the decoupled system

$$\dot{Q}_j = P_j, \quad \dot{P}_j = -\omega_j^2 Q_j, \quad j = 1, \ldots, n.$$

In particular,

$$K(P, Q) = \sum_{j=1}^n K_j, \quad K_j = \frac{1}{2}(P_j^2 + Q_j^2),$$