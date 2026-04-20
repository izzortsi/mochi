Problem 8.18 (Fermi–Pasta–Ulam experiment). Consider the Hamiltonian (8.81) with the interaction potential $U_0(x) = \frac{k}{2}(x^2 + \alpha x^3)$. Note that it is no restriction to use $m = k = 1$ (why?).

Compute the eigenvalues and the eigenvectors of the linearized system $\alpha = 0$. Choose an initial condition in an eigenspace and (numerically) compute the time evolution. Investigate how the state is distributed with respect to the eigenvectors as a function of $t$. (Choose $N = 32$, $\alpha = 1/6$).

Problem 8.19 (Lax pair). Let $L(p, q)$ and $P(p, q)$ be $n$ by $n$ matrices. They are said to form a Lax pair for a Hamiltonian system if the equations of motion (8.43) are equivalent to the Lax equation

$$\dot{L} = [P, L].$$

Show that the quantities

$$\text{tr}(L^j), \quad 1 \leq j \leq n,$$

are first integrals (Hint: Compare Problem 3.29).

8.5. The Kepler problem

Finally, as an application of our results we will show how to solve equation (1.11) from Section 1.1. In fact, we will even consider a slightly more general case, the two body problem. Suppose we have two masses placed at $x_1 \in \mathbb{R}^3$ and $x_2 \in \mathbb{R}^3$. They interact with a force $F$ depending only on the distance of the masses and lies on the line connecting both particles. The kinetic energy is given by

$$T(\dot{x}) = \frac{m_1}{2} \dot{x}_1^2 + \frac{m_2}{2} \dot{x}_2^2$$

and the potential energy is

$$U(x) = U(|x_1 - x_2|).$$

The Lagrangian is the difference of both

$$L(\dot{x}, x) = T(\dot{x}) - U(x).$$

Clearly it is invariant under translations $(x_1, x_2) \mapsto (x_1 + sa, x_2 + sa)$, $a \in \mathbb{R}^3$, and so Theorem 8.9 tells us that all three components of the total momentum

$$m_1 \dot{x}_1 + m_2 \dot{x}_2$$

are first integrals. Hence we will choose new coordinates

$$q_1 = \frac{m_1 x_1 + m_2 x_2}{m_1 + m_2}, \quad q_2 = x_1 - x_2$$

in which our Lagrangian reads

$$L(\dot{q}, q) = \frac{M}{2} \dot{q}_1^2 + \frac{\mu}{2} \dot{q}_2^2 - U(q_2), \quad M = m_1 + m_2, \quad \mu = \frac{m_1 m_2}{M}.$$