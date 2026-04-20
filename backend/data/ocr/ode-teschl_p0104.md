Corollary 3.16. Suppose $A(t)$ is real and periodic. Then the principal matrix solution of the corresponding linear system has the form

$$\Pi(t, t_0) = \tilde{P}(t, t_0) \exp((t - t_0)\tilde{Q}(t_0)),$$

(3.126)

where both $\tilde{P}(t, t_0)$, $\tilde{Q}(t_0)$ are real and $\tilde{P}(., t_0)$ has twice the period of $A(.)$.

Hence to understand the behavior of solutions one needs to understand the Jordan canonical form of the monodromy matrix. Moreover, we can choose any $t_0$ since $M(t_1)$ and $M(t_0)$ are similar matrices by virtue of

$$M(t_1) = \Pi(t_1 + T, t_0 + T)M(t_0)\Pi(t_0, t_1)$$

$$= \Pi(t_1, t_0)M(t_0)\Pi(t_1, t_0)^{-1}.$$

(3.127)

Thus the eigenvalues and the Jordan structure are independent of $t_0$ (hence the same also follows for $Q(t_0))$.

The eigenvalues $\rho_j$ of $M(t_0)$ are known as Floquet multipliers (also characteristic multipliers) and the eigenvalues $\gamma_j$ of $Q(t_0)$ are known as Floquet exponents (characteristic exponents). By Lemma 3.3 they are related via $\rho_j = e^{T\gamma_j}$. Since the periodic part $P(t, t_0)$ is bounded we obtain as in Corollary 3.5.

Corollary 3.17. A periodic linear system is stable if all Floquet multipliers satisfy $|\rho_j| \leq 1$ (respectively all Floquet exponents satisfy $\text{Re}(\gamma_j) \leq 0$) and for all Floquet multipliers with $|\rho_j| = 1$ (respectively all Floquet exponents with $\text{Re}(\gamma_j) = 0$) the algebraic and geometric multiplicities are equal.

A periodic linear system is asymptotically stable if all Floquet multipliers satisfy $|\rho_j| < 1$ (respectively all Floquet exponents satisfy $\text{Re}(\gamma_j) < 0$).

Before I show how this result is used in a concrete example, let me note another consequence of Theorem 3.15. The proof is left as an exercise (Problem 3.42).

Corollary 3.18. The transformation $y(t) = P(t, t_0)^{-1}x(t)$ renders the system into one with constant coefficients,

$$\dot{y}(t) = Q(t_0)y(t).$$

(3.128)

Note also that we have $P(t, t_0)^{-1} = \exp((t - t_0)Q(t_0))P(t_0, t) \exp(-(t - t_0)Q(t))$ by virtue of $\Pi(t, t_0)^{-1} = \Pi(t_0, t)$.

In the remainder of this section we will look at one of the most prominent examples, Hill’s equation

$$\ddot{x} + q(t)x = 0, \quad q(t + T) = q(t).$$

(3.129)

In this case the associated system is

$$\dot{x} = y, \quad \dot{y} = -qx$$

(3.130)