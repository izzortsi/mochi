$\omega_+(x) = \{x_0\}$. In particular, this holds for every $x \in S_\varepsilon$ and thus $x_0$ is asymptotically stable.

In summary we have proven

**Theorem 6.14** (Krasovskii–LaSalle principle). Suppose $x_0$ is a fixed point of $f$. If there is a Liapunov function $L$ which is not constant on any orbit lying entirely in $U(x_0) \setminus \{x_0\}$, then $x_0$ is asymptotically stable. This is for example the case if $L$ is a strict Liapunov function. Moreover, every orbit lying entirely in $U(x_0)$ converges to $x_0$.

The same proof also shows

**Theorem 6.15.** Let $L : U \to \mathbb{R}$ be continuous and bounded from below. If for some $x$ we have $\gamma_+(x) \subset U$ and

$$L(\phi(t_0, x)) \geq L(\phi(t_1, x)), \quad t_0 < t_1,$$

(6.39)

then $L$ is constant on $\omega_+(x) \cap U$.

Most Liapunov functions will in fact be differentiable. In this case (6.36) holds if and only if

$$\frac{d}{dt}L(\phi(t, x)) = \text{grad}(L)(\phi(t, x))\dot{\phi}(t, x) = \text{grad}(L)(\phi(t, x))f(\phi(t, x)) \leq 0.$$

(6.40)

The expression

$$\text{grad}(L)(x) \cdot f(x)$$

(6.41)

appearing in the previous equation is known as the **Lie derivative** of $L$ along the vector field $f$. A function for which the Lie derivative vanishes is constant on every orbit and is hence called a **constant of motion**.

Theorem 6.15 implies that all $\omega_\pm$-limit sets are contained in the set where the Lie derivative of $L$ vanishes.

**Example.** Consider the system

$$\dot{x} = y, \quad \dot{y} = -x$$

together with the function $L(x, y) = x^2 + y^2$. The Lie derivative is given by

$$\text{grad}(L)(x) \cdot f(x) = \begin{pmatrix} 2x \\ 2y \end{pmatrix} \begin{pmatrix} y \\ -x \end{pmatrix} = 2xy - 2yx = 0$$

and hence $L$ is a Liapunov function; in fact, even a constant of motion. In particular, the origin is stable. Every level set $L(x, y) = \delta$ corresponds to an orbit and the system is not asymptotically stable.

**Problem 6.18.** Show that $L(x, y) = x^2 + y^2$ is a Liapunov function for the system

$$\dot{x} = y, \quad \dot{y} = -\eta y - x,$$