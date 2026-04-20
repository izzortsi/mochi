Problem 9.1. For the matrices in Problem 3.9. Determine the stability of the origin and, if the system is hyperbolic, find the corresponding stable and unstable manifolds.

Problem 9.2. Let $A$ be a real-valued two by two matrix and let

$$\chi_A(z) = z^2 - Tz + D = 0, \quad T = \text{tr}(A), D = \det(A),$$

be its characteristic polynomial. Show that $A$ is hyperbolic if $TD \neq 0$. Moreover, $A$ is asymptotically stable if and only if $D > 0$ and $T < 0$. (Hint: $T = \alpha_1 + \alpha_2, D = \alpha_1\alpha_2$.)

Let $A$ be a real-valued three by three matrix and let

$$\chi_A(z) = z^3 - Tz^2 + Mz - D = 0$$

be its characteristic polynomial. Show that $A$ is hyperbolic if $(TM - D)D \neq 0$. Moreover, $A$ is asymptotically stable if and only if $D < 0, T < 0$ and $TM < D$. (Hint: $T = \alpha_1 + \alpha_2 + \alpha_3, M = \alpha_1\alpha_2 + \alpha_2\alpha_3 + \alpha_2\alpha_3, D = \alpha_1\alpha_2\alpha_3,$ and $TM - D = (\alpha_1 + \alpha_2)(\alpha_1 + \alpha_3)(\alpha_2 + \alpha_3)$.)

9.2. Stable and unstable manifolds

In this section we want to transfer some of our results of the previous section to nonlinear equations. We define the stable, unstable set of a fixed point $x_0$ as the set of all points converging to $x_0$ for $t \to \infty, t \to -\infty$, that is,

$$W^\pm(x_0) = \{x \in M | \lim_{t \to \pm\infty} |\Phi(t,x) - x_0| = 0\}. \tag{9.7}$$

Both sets are obviously invariant under the flow. Our goal in this section is to investigate these sets.

Any function $f \in C^1$ vanishing at $x_0 \in M$ can be decomposed as

$$f(x) = A(x - x_0) + g(x), \tag{9.8}$$

where $A$ is the Jacobian matrix of $f$ at $x_0$ and $g(x) = o(|x - x_0|)$. Clearly, in a sufficiently small neighborhood of $x_0$ we expect the solutions to be described by the solutions of the linearized equation. This is true for small $t$ by Theorem 2.8, but what about $|t| \to \infty$? In Section 6.5 we saw that for $n = 1$ stability can be read off from $A = f'(x_0)$ alone as $f'(x_0) \neq 0$. In this section we will generalize this result to higher dimensions.

We will call the fixed point $x_0$ hyperbolic if the linearized system is, that is, if none of the eigenvalues of $A$ has zero real part.

Since our result is of a local nature we fix a neighborhood $U(x_0)$ of $x_0$ and define

$$M^{\pm,\alpha}(x_0) = \{x | \gamma_{\pm}(x) \subseteq U(x_0) \text{ and } \sup_{\pm t \geq 0} e^{\pm\alpha t} |\Phi(t,x) - x_0| < \infty\} \tag{9.9}$$