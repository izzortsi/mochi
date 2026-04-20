one, that is, $\psi(t)$ must be normalized, $|\psi(t)| = 1$. The time evolution of the system is governed by the Schrödinger equation

$$\mathrm{i}\dot{\psi}(t) = H(t)\psi(t), \quad \psi(t_0) = \psi_0,$$

where $H(t)$ is a self-adjoint matrix, that is, $H(t)^* = H(t)$. (Here $A^*$ is the adjoint (complex conjugate of the transposed) matrix.) The matrix $H(t)$ is called the Hamiltonian and describes the interaction. Show that the solution is given by

$$\psi(t) = U(t,t_0)\psi_0, \quad U(t_0,t_0) = \mathbb{I},$$

where $U(t,t_0)$ is unitary, that is, $U(t,t_0)^{-1} = U(t,t_0)^*$ (Hint: Problem 3.25). Conclude that $\psi(t)$ remains normalized for all $t$ if $\psi_0$ is.

Each observable (quantity you can measure) corresponds to a self-adjoint matrix, say $L_0$. The expectation value for a measurement of $L_0$ if the system is in the state $\psi(t)$ is given by

$$\langle \psi(t), L_0 \psi(t) \rangle,$$

where $\langle \varphi,\psi \rangle = \varphi^* \cdot \psi$ is the scalar product in $\mathbb{C}^n$. Show that

$$\frac{d}{dt} \langle \psi(t), L_0 \psi(t) \rangle = \mathrm{i} \langle \psi(t), [H(t), L_0] \psi(t) \rangle$$

where $[H,L] = HL - LH$ is the commutator.

Problem 3.30. Show that if $\liminf_{t \to \infty} \int_t^t \mathrm{tr}(A(s))ds = \infty$, then (3.79) has an unbounded solution. (Hint: (3.91).)

Problem 3.31. For any matrix $A$, the matrix $\mathrm{Re}(A) = \frac{1}{2}(A + A^*)$ is symmetric and hence has only real eigenvalues (cf. Theorem 3.29). Let $\alpha_0$ be its largest eigenvalue.

Let $A(t)$ be given and define $\alpha_0(t)$ as above. Show that

$$\|\Pi(t,t_0)\| \leq \exp \left( \int_t^t \alpha_0(s)ds \right), \quad t \geq t_0.$$

A similar formula holds for $t \leq t_0$ if we take the lowest eigenvalue. (Hint: Compute $\frac{d}{dt}|x(t)|^2$ for $x(t) = \Pi(t,t_0)x_0$ and note that $\langle x, \mathrm{Re}(A)x \rangle \leq \alpha_0|x|^2$ for every $x \in \mathbb{R}^n$.)

Remark: If $A(t) \equiv A$ is constant, we know that one can do much better and replace $\alpha_0$ by the real part of the largest eigenvalue of $A$ plus an arbitrarily small $\varepsilon$ (the $\varepsilon$ is necessary to cover possible polynomial terms) – cf. also Corollary 3.6. Hence one might conjecture that the same is true in the general case. However, this is not the case as Problem 3.40 below shows.