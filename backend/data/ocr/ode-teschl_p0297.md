Finally, let us turn to the inhomogeneous system

$$x(m + 1) = A(m)x(m) + g(m), \quad x(m_0) = x_0,$$

(10.27)

where $A(m) \in \mathbb{R}^n \times \mathbb{R}^n$ and $g(m) \in \mathbb{R}^n$. Since the difference of two solutions of the inhomogeneous system (10.27) satisfies the corresponding homogeneous system (10.20), it suffices to find one particular solution. In fact, it is straight forward to verify that the solution is given by the following formula.

**Theorem 10.3.** The solution of the inhomogeneous initial value problem is given by

$$x(m) = \Pi(m, m_0)x_0 + \sum_{j=m_0}^{m-1} \Pi(m,j)g(j),$$

(10.28)

where $\Pi(m, m_0)$ is the principal matrix solution of the corresponding homogeneous system.

If $A(m)$ is invertible, the above formula also holds for $m < m_0$ if we set

$$x(m) = \Pi(m, m_0)x_0 - \sum_{j=m-1}^{m_0} \Pi(m,j)g(j), \quad m < m_0.$$

(10.29)

**Problem 10.8.** Find an explicit formula for the Fibonacci numbers defined via

$$x(m) = x(m - 1) + x(m - 2), \quad x(1) = x(2) = 1.$$

**10.4. Local behavior near fixed points**

In this section we want to investigate the local behavior of a differentiable map $f : \mathbb{R}^n \to \mathbb{R}^n$ near a fixed point $p$. We will assume $p = 0$ without restriction and write

$$f(x) = Ax + g(x),$$

(10.30)

where $A = df_0$. The analogous results for periodic points are easily obtained by replacing $f$ with $f^n$.

First we show the Hartman–Grobman theorem for maps (compare Theorem 9.9).

**Theorem 10.4** (Hartman–Grobman). Suppose $f$ is a local diffeomorphism with hyperbolic fixed point 0. Then there is a homeomorphism $\varphi(x) = x + h(x)$, with bounded $h$, such that

$$\varphi \circ A = f \circ \varphi, \quad A = df_0,$$

(10.31)

in a sufficiently small neighborhood of 0.