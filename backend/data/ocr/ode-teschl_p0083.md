states that a real matrix is Hurwitz if and only if the following determinants are strictly positive,

$$\det \begin{pmatrix}
a_1 & 1 & 0 & 0 & 0 & 0 & \cdots & 0 \\
a_3 & a_2 & a_1 & 1 & 0 & 0 & \cdots & 0 \\
\vdots & \vdots & \vdots & \vdots & \vdots & \vdots & \ddots & \vdots \\
a_{2k-1} & a_{2k-2} & a_{2k-3} & a_{2k-4} & a_{2k-5} & a_{2k-6} & \cdots & a_k
\end{pmatrix} > 0,$$

(3.45)

for $1 \leq k \leq n$. Here the numbers $a_j$ are the coefficients of the characteristic polynomial of $A$,

$$\det(z\mathbb{I} - A) = z^n + a_1z^{n-1} + \cdots + a_{n-1}z + a_n,$$

(3.46)

and $a_j = 0$ for $j \geq n$.

Finally, observe that the solution of the inhomogeneous equation

$$\dot{x}(t) = Ax(t) + g(t), \quad x(0) = x_0,$$

(3.47)

is given by

$$x(t) = \exp(tA)x_0 + \int_0^t \exp((t-s)A)g(s)ds,$$

(3.48)

which can be verified by a straightforward computation (however, we will in fact prove a more general result in Theorem 3.12 below). This formula is sometimes called **Duhamel’s formula**. As always for linear equations, note that the solution consists of the general solution of the homogeneous equation plus a particular solution of the inhomogeneous equation. However, if the inhomogeneous term is of a special form, an ansatz might be faster than evaluating the integral in (3.48) — see Problem 3.13.

**Problem 3.7. Show**

$$\lim_{t \to \infty} t^m e^{\alpha t} = 0, \quad m \in \mathbb{N}_0, \text{Re}(\alpha) < 0,$$

and

$$\max_{0 \leq t < \infty} |t^m e^{\alpha t}| = \left( \frac{m}{-\text{Re}(\alpha)} \right)^m e^{-m}, \quad m \in \mathbb{N}_0, \text{Re}(\alpha) < 0.$$

(Hint: l’Hôpital’s rule.)

**Problem 3.8. Solve the following equations:**

(i) $\dot{x} = 3x$.

(ii) $\dot{x} = \frac{\gamma}{t} x, \gamma \in \mathbb{R}$.

(iii) $\dot{x} = x + \sin(t)$.

**Problem 3.9. Solve the systems corresponding to the following matrices:**

(i). $A = \begin{pmatrix} 2 & 1 \\ 0 & 2 \end{pmatrix}, \quad x_0 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$

(ii). $A = \begin{pmatrix} -1 & 1 \\ 0 & 1 \end{pmatrix}, \quad x_0 = \begin{pmatrix} 1 \\ -1 \end{pmatrix}$.