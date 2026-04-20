and in **continuous dynamical systems** where

$$G = \mathbb{R}^+ \text{ or } G = \mathbb{R}.$$

Of course this definition is quite abstract and so let us look at some examples first.

**Example.** The prototypical example of a discrete dynamical system is an iterated map. Let $f$ map an interval $I$ into itself and consider

$$T_n = f^n = f \circ f^{n-1} = \underbrace{f \circ \cdots \circ f}_{n \text{ times}}, \quad G = \mathbb{N}_0.$$

Clearly, if $f$ is invertible, so is the dynamical system if we extend this definition for $n \in \mathbb{Z}$ in the usual way. You might suspect that such a system is too simple to be of any interest. However, we will see that the contrary is the case and that such simple systems bear a rich mathematical structure with lots of unresolved problems.

**Example.** The prototypical example of a continuous dynamical system is the flow of an autonomous differential equation

$$T_t = \Phi_t, \quad G = \mathbb{R},$$

which we will consider in the following section.

### 6.2. The flow of an autonomous equation

Now we will have a closer look at the solutions of an autonomous system

$$\dot{x} = f(x), \quad x(0) = x_0.$$

Throughout the rest of this book we will assume $f \in C^k(M, \mathbb{R}^n)$, $k \geq 1$, where $M$ is an open subset of $\mathbb{R}^n$.

Such a system can be regarded as a **vector field** on $\mathbb{R}^n$. Solutions are curves in $M \subseteq \mathbb{R}^n$ which are tangent to this vector field at each point. Hence to get a geometric idea of what the solutions look like, we can simply plot the corresponding vector field.

**Example.** Using *Mathematica* the vector field of the mathematical pendulum, $f(x, y) = (y, -\sin(x))$, can be plotted as follows.

$$\text{In[1]} := \text{VectorPlot}[\{y, -\sin[x]\}, \{x, -2\pi, 2\pi\}, \{y, -5, 5\}]$$