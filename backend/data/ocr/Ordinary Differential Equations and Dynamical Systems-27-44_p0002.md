constant) of the particle, that is,

$$m \ddot{x}(t) = F(x(t)), \quad \text{for all } t \in \mathbb{R}.$$

(1.5)

Such a relation between a function $x(t)$ and its derivatives is called a **differential equation**. Equation (1.5) is of second order since the highest derivative is of second degree. More precisely, we have a system of differential equations since there is one for each coordinate direction.

In our case $x$ is called the dependent and $t$ is called the independent variable. It is also possible to increase the number of dependent variables by adding $v$ to the dependent variables and considering $(x, v) \in \mathbb{R}^6$. The advantage is, that we now have a *first-order* system

$$\dot{x}(t) = v(t)$$

$$\dot{v}(t) = \frac{1}{m} F(x(t)).$$

(1.6)

This form is often better suited for theoretical investigations.

For given force $F$ one wants to find solutions, that is functions $x(t)$ that satisfy (1.5) (respectively (1.6)). To be more specific, let us look at the motion of a stone falling towards the earth. In the vicinity of the surface of the earth, the gravitational force acting on the stone is approximately constant and given by

$$F(x) = -m g \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}.$$

(1.7)

Here $g$ is a positive constant and the $x_3$ direction is assumed to be normal to the surface. Hence our system of differential equations reads

$$m \ddot{x}_1 = 0,$$

$$m \ddot{x}_2 = 0,$$

$$m \ddot{x}_3 = -m g.$$

(1.8)

The first equation can be integrated with respect to $t$ twice, resulting in $x_1(t) = C_1 + C_2 t$, where $C_1, C_2$ are the integration constants. Computing the values of $x_1, \dot{x}_1$ at $t = 0$ shows $C_1 = x_1(0), C_2 = v_1(0)$, respectively. Proceeding analogously with the remaining two equations we end up with

$$x(t) = x(0) + v(0) t - \frac{g}{2} \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix} t^2.$$

(1.9)

Hence the entire fate (past and future) of our particle is uniquely determined by specifying the initial location $x(0)$ together with the initial velocity $v(0)$.