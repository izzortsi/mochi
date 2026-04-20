Problem 3.10. Solve

$$\dot{x} = -y - t, \quad \dot{y} = x + t, \quad x(0) = 1, y(0) = 0.$$

Problem 3.11. Find a two by two matrix such that $x(t) = (\sinh(t), e^t)$ is a solution.

Problem 3.12. Which of the following functions

(i) $x(t) = (3e^t + e^{-t}, e^{2t})$
(ii) $x(t) = (3e^t + e^{-t}, e^t)$
(iii) $x(t) = (3e^t + e^{-t}, te^t)$
(iv) $x(t) = (3e^t, t^2e^t)$
(v) $x(t) = (e^t + 2e^{-t}, e^t + 2e^{-t})$

can be solutions of a first-order autonomous homogeneous system? (Hint: Compare with the necessary structure of the solution found in this section.)

Problem 3.13. Let $A$ be an $n$ by $n$ matrix and $\beta$ a constant. Consider the special inhomogeneous equation

$$\dot{x} = Ax + p(t)e^{\beta t},$$

where $p(t)$ is a vector all whose entries are polynomials. Set $\deg(p(t)) = \max_{1 \leq j \leq n} \deg(p_j(t))$. Show that this equation has a particular solution of the form

$$q(t)e^{\beta t},$$

where $q(t)$ is a polynomial vector with $\deg(q(t)) = \deg(p(t))$ if $\beta$ is not an eigenvalue of $A$ and $\deg(q(t)) = \deg(p(t)) + a$ if $\beta$ is an eigenvalue of algebraic multiplicity $a$.

(Hint: Investigate (3.48) using the following fact: $\int p(t)e^{\beta t}dt = q(t)e^{\beta t}$, where $q(t)$ is a polynomial of degree $\deg(q) = \deg(p)$ if $\beta \neq 0$ and $\deg(q) = \deg(p) + 1$ if $\beta = 0$.)

Problem 3.14. Let $A$ be a real 2 by 2 matrix. Then the eigenvalues can be expressed in terms of the determinant $D = \det(A)$ and the trace $T = \text{tr}(A)$. In particular, $(T, D)$ can take all possible values in $\mathbb{R}^2$ if $A$ ranges over all possible matrices in $\mathbb{R}^{2 \times 2}$. Split the $(T, D)$ plane into regions in which the various cases discussed in this section occur (source, spiral source, sink, spiral sink, saddle, center).

Problem 3.15 (Laplace transform). Let $x : [0, \infty) \to \mathbb{C}^n$ such that $|x(t)| \leq M e^{at}$ for some constants $M \geq 0$ and $a \in \mathbb{R}$. Then the Laplace transform

$$\mathcal{L}(x)(s) = \int_0^\infty e^{-st}x(t)dt.$$