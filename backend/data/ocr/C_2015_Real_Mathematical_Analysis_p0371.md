A complex function of a complex variable $f(z)$ has a **complex derivative** $f'(z)$ if the complex ratio $(f(z+h) - f(z))/h$ tends to $f'(z)$ as the complex number $h$ tends to zero. Equivalently,

$$\frac{f(z+h) - f(z) - f'(z)h}{h} \to 0$$

as $h \to 0$. Write $f(z) = u(x,y) + iv(x,y)$ where $z = x + iy$, and $u,v$ are real-valued functions of two real variables. Define $F : \mathbb{R}^2 \to \mathbb{R}^2$ by $F(x,y) = (u(x,y), v(x,y))$. Then $F$ is $\mathbb{R}$-differentiable with derivative matrix

$$DF = \begin{bmatrix}
\frac{\partial u}{\partial x} & \frac{\partial u}{\partial y} \\
\frac{\partial v}{\partial x} & \frac{\partial v}{\partial y}
\end{bmatrix}.$$

Since this derivative matrix is the $\mathbb{R}^2$ expression for multiplication by the complex number $f'(z)$, it must have the $\begin{bmatrix}
\alpha & -\beta \\
\beta & \alpha
\end{bmatrix}$ form. This demonstrates a basic fact about complex differentiable functions – their real and imaginary parts, $u$ and $v$, satisfy the

**53 Cauchy-Riemann Equations**

$$\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y} \quad \text{and} \quad \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}.$$

**Appendix D  Polar Form**

The shape of the image of a unit ball under a linear transformation $T$ is not an issue that is used directly in anything we do in Chapter 5 but it certainly underlies the geometric outlook on linear algebra.

Question. What shape is the $(n-1)$-sphere $S^{n-1}$?

Answer. Round.

Question. What shape is $T(S^{n-1})$?

Answer. Ellipsoidal. See also Exercise 39.

Let $z = x + iy$ be a nonzero complex number. Its polar form is $z = re^{i\theta}$ where $r > 0$ and $0 \leq \theta < 2\pi$, and $x = r\cos\theta$, $y = r\sin\theta$. Multiplication by $z$ breaks up