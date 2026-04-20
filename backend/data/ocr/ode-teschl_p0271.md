and both $W^+(0)$ and $W^-(0)$ are tangent to their linear counterparts

$$E^+ = \{x | x_2 = 0\}, \quad E^- = \{x | x_1 = \frac{x_2}{2}\}. \tag{9.27}$$

The system is depicted in Figure 9.2.

It can happen that an orbit starting in the unstable manifold of one fixed point $x_0$ ends up in the stable manifold of another fixed point $x_1$. Such an orbit is called heteroclinic orbit if $x_0 \neq x_1$ and homoclinic orbit if $x_0 = x_1$. See the problems for examples.

Moreover, as another consequence we obtain another proof of Theorem 6.10. It also follows that, if the fixed point $x_0$ of $f$ is hyperbolic and $A$ has at least one eigenvalue with positive real part, then $x_0$ is unstable (why?).

Finally, it is also possible to include the case where $f$ depends on a parameter $\lambda \in \Lambda$. If $x_0$ is a hyperbolic fixed point for $f(x, 0)$ then, by the implicit function theorem, there is a fixed point $x_0(\lambda)$ (which is again hyperbolic) for $\lambda$ sufficiently small. In particular we have

$$f(x, \lambda) = A(\lambda)(x - x_0(\lambda)) + g(x, \lambda), \tag{9.28}$$

where $A(\lambda)$ is the Jacobian matrix of $f(., \lambda)$ at $x_0(\lambda)$. By Problem 3.47, the projectors $P^\pm(\lambda) = P^\pm(A(\lambda))$ vary smoothly with respect to $\lambda$ and we can proceed as before to obtain (compare Problem 9.12)

**Theorem 9.6.** Suppose $f \in C^k$, $k \geq 1$, and let $x_0(\lambda)$ be as above. Then, there is a neighborhood $U(x_0) = x_0 + U$ and functions $h^\pm \in C^k(E^\pm \cap U \times \Lambda, E^\mp)$ such that

$$M^\pm(x_0(\lambda)) \cap U(x_0) = \{x_0(\lambda) + P^\pm(\lambda)a + h^\pm(a, \lambda)|a \in E^\pm \cap U\}. \tag{9.29}$$