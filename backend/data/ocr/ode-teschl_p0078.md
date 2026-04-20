In this situation there are two eigenvalues, $\alpha_1$ and $\alpha_2$, which are either both real or otherwise complex conjugates of each other. We begin with the generic case where $A$ is diagonalizable and hence there are two linearly independent eigenvectors, $u_1$ and $u_2$, which form the columns of $U$. In particular,

$$U^{-1}AU = \begin{pmatrix} \alpha_1 & 0 \\ 0 & \alpha_2 \end{pmatrix}.$$

(3.31)

Now using the change of coordinates

$$y(t) = U^{-1}x(t), \quad y_0 = U^{-1}x_0,$$

(3.32)

the solution of the transformed equation

$$\dot{y} = (U^{-1}AU)y, \quad y(0) = y_0,$$

(3.33)

is given by

$$y(t) = \exp(tU^{-1}AU)y_0 = \begin{pmatrix} e^{\alpha_1 t} & 0 \\ 0 & e^{\alpha_2 t} \end{pmatrix}y_0$$

(3.34)

and the solution of our original equation (3.30) is given by

$$x(t) = U \exp(tU^{-1}AU)U^{-1}x_0 = U \begin{pmatrix} e^{\alpha_1 t} & 0 \\ 0 & e^{\alpha_2 t} \end{pmatrix}U^{-1}x_0.$$

(3.35)

Using $y_0 = U^{-1}x_0 = (y_{0,1}, y_{0,2})$ we obtain

$$x(t) = y_{0,1}e^{\alpha_1 t}u_1 + y_{0,2}e^{\alpha_2 t}u_2.$$

(3.36)

In the case where both eigenvalues are real, all quantities in (3.36) are real. Otherwise we have $\alpha_2 = \alpha_1^*$ and we can assume $u_2 = u_1^*$ without loss of generality. Let us write $\alpha_1 \equiv \alpha = \lambda + i\omega$ and $\alpha_2 \equiv \alpha^* = \lambda - i\omega$. Then Euler’s formula

$$e^{i\omega} = \cos(\omega) + i\sin(\omega)$$

(3.37)

implies

$$e^{\alpha t} = e^{\lambda t} \left( \cos(\omega t) + i\sin(\omega t) \right), \quad \alpha = \lambda + i\omega.$$

(3.38)

Moreover, $x_0^* = x_0$ implies $y_{0,1}u_1 + y_{0,2}u_2 = y_{0,1}^*u_2 + y_{0,2}^*u_1$ which shows $y_{0,1}^* = y_{0,2}$. Hence, both terms in (3.36) are complex conjugates of each other implying

$$x(t) = 2\Re(y_{0,1}e^{\alpha_1 t}u_1)$$

$$= 2\cos(\omega t)e^{\lambda t}\Re(y_{0,1}u_1) - 2\sin(\omega t)e^{\lambda t}\Im(y_{0,1}u_1).$$

(3.39)

This finishes the case where $A$ is diagonalizable.

If $A$ is not diagonalizable, both eigenvalues must be equal $\alpha_1 = \alpha_2 \equiv \alpha$. The columns $u_1$ and $u_2$ of the matrix $U$ are the eigenvector and generalized eigenvector of $A$, respectively. Hence

$$U^{-1}AU = \begin{pmatrix} \alpha & 1 \\ 0 & \alpha \end{pmatrix}$$

(3.40)