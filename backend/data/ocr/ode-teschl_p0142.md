That is, the singularities are fixed and do not depend on the initial condition. On the other hand, nonlinear equations will in general have **movable singularities**, as the simple example

$$w' = -w^2,$$

(4.81)

whose general solution is

$$w(z) = \frac{1}{z - z_0},$$

(4.82)

shows. Equations whose only movable singularities are poles play an important role in applications. It can be shown that a first order equation

$$w' = f(z, w)$$

(4.83)

which is rational in $w$ and meromorphic in $z$ has this property if it is of Riccati type, that is, $f(z, w) = f_0(z) + f_1(z)w + f_2(z)w^2$, and can hence be transformed to a second order linear equation (cf. Problem 3.38). In the case of a second order equation

$$w'' = f(z, w, w')$$

(4.84)

which is rational in $w$, $w'$ and meromorphic in $z$, Painlevé and his coworkers showed that there are six equations which cannot be linearized or solved by well-known special functions. These are nowadays known as the **Painlevé transcendents**. For example, the first two are given by

$$P_I : \quad w'' = 6w^2 + z,$$

$$P_{II} : \quad w'' = zw + 2w^3 + \alpha, \quad \alpha \in \mathbb{C}.$$

(4.85)

They play an important role in nonlinear physics just as special functions (like Bessel functions) play in linear physics. However, this is beyond this introduction, see for example the book by Ince [23], and we return to linear equations.

Again, as in the real case, the superposition principle holds. Hence, we can find a principal matrix solution $\Pi(z, z_0)$ such that the solution of (4.80) is given by

$$w(z) = \Pi(z, z_0)w_0.$$

(4.86)

It is also not hard to see that Liouville’s formula (3.91) extends to the complex case.

Again we will allow singularities at $z_0 = 0$. So let us start with the prototypical example. The system

$$w' = \frac{1}{z}Aw, \quad z \in \mathbb{C}\setminus\{0\},$$

(4.87)

is called **Euler system**. Obviously it has a first order pole at $z = 0$ and since $\mathbb{C}\setminus\{0\}$ is not simply connected, solutions might not be defined for all $z \in \mathbb{C}\setminus\{0\}$. Hence we introduce a branch cut along the negative real axis.