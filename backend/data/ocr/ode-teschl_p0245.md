8.2. The Lorenz equation

One of the most famous dynamical systems which exhibits chaotic behavior is the Lorenz equation

$$\dot{x} = -\sigma(x - y),$$
$$\dot{y} = rx - y - xz,$$
$$\dot{z} = xy - bz,$$

(8.13)

where $\sigma, r, b > 0$. Lorenz arrived at these equations when modelling a two-dimensional fluid cell between two parallel plates which are at different temperatures. The corresponding situation is described by a complicated system of nonlinear partial differential equations. To simplify the problem, he expanded the unknown functions into Fourier series with respect to the spacial coordinates and set all coefficients except for three equal to zero. The resulting equation for the three time dependent coefficients is (8.13). The variable $x$ is proportional to the intensity of convective motion, $y$ is proportional to the temperature difference between ascending and descending currents, and $z$ is proportional to the distortion from linearity of the vertical temperature profile.

So let us start with an investigation of this system. First of all observe that the system is invariant under the transformation

$$(x, y, z) \rightarrow (-x, -y, z).$$

(8.14)

Moreover, the $z$ axis is an invariant manifold since

$$x(t) = 0, \quad y(t) = 0, \quad z(t) = z_0 e^{-bt}$$

(8.15)

is a solution of our system.

But now let us come to some deeper results. We first show that the dynamic is quite simple if $r \leq 1$. In this case there is only one fixed point of the vector field, namely the origin. The Jacobian matrix at 0 is given by

$$\begin{pmatrix}
-\sigma & \sigma & 0 \\
r & -1 & 0 \\
0 & 0 & -b
\end{pmatrix}$$

(8.16)

and the corresponding eigenvalues are

$$-b, \quad -\frac{1}{2}(1 + \sigma \pm \sqrt{(1 + \sigma)^2 + 4(r - 1)\sigma}).$$

(8.17)

Hence the origin is asymptotically stable for $r < 1$ by Corollary 3.27. However, we can even do better. To this end, let us make the ansatz

$$L(x, y, z) = \alpha x^2 + \beta y^2 + \gamma z^2, \quad \alpha, \beta, \gamma > 0,$$

(8.18)