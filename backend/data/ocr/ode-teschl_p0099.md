Next, given sufficiently smooth functions $f_1, \ldots, f_m$ we define their **Wronski determinant** (or simply their **Wronskian**) as

$$W(f_1, \ldots, f_m) = \det \begin{pmatrix}
f_1 & \cdots & f_m \\
f'_1 & \cdots & f'_m \\
\vdots & \vdots & \vdots \\
f^{(m-1)}_1 & \cdots & f^{(m-1)}_m
\end{pmatrix}.$$ (3.109)

Note that the Wronskian will vanish identically if the functions are linearly dependent, but the converse is in general not true (cf. Problem 3.33).

By Lemma 3.11 the Wronskian of $n$ solutions satisfies

$$W(\phi_1, \ldots, \phi_n)(t) = W(\phi_1, \ldots, \phi_n)(t_0) \exp \left( -\int_{t_0}^{t} q_{n-1}(s) ds \right)$$ (3.110)

and it will vanish if and only if the solutions are linearly dependent.

Finally, note that the differential equation (3.102) is uniquely determined by $n$ linearly independent solutions $\phi_1, \ldots, \phi_n$ since this is true for the corresponding system. Explicitly we have

$$\frac{W(\phi_1, \ldots, \phi_n, x)(t)}{W(\phi_1, \ldots, \phi_n)(t)} = x^{(n)}(t) + q_{n-1}(t)x^{(n-1)}(t) + \cdots + q_0(t)x(t).$$ (3.111)

In fact, by expanding the Wronski determinant with respect to the last column we see that the left-hand side is of the same form as the right-hand side with possibly different coefficients $\tilde{q}_j$. However, since the Wronskian on the left-hand side vanishes whenever we choose $x = \phi_j$, the corresponding differential equation has the same solutions and thus $\tilde{q}_j = q_j$.

**Example.** For example, in the case of second order equations we obtain using Laplace expansion along the last column

$$W(\phi_1, \phi_2, x) = W(\phi_1, \phi_2)\ddot{x} - \dot{W}(\phi_1, \phi_2)\dot{x} + W(\dot{\phi}_1, \dot{\phi}_2)x$$ (3.112)

and thus

$$q_1 = -\frac{\dot{W}(\phi_1, \phi_2)}{W(\phi_1, \phi_2)}, \quad q_0 = \frac{W(\dot{\phi}_1, \dot{\phi}_2)}{W(\phi_1, \phi_2)}.$$ (3.113)

Note that the formula for $q_1$ is consistent with (3.110).

As for the case of systems, there is no general way of solving linear $n$’th order equations except for the trivial case $n = 1$ (recall (1.40)). However, if one solution $\phi_1(t)$ is known, one can again use the following method known as **reduction of order** (d’Alembert):

Given one solution $\phi_1(t)$ of (3.102), the variation of constants ansatz

$$x(t) = c(t)\phi_1(t)$$ (3.114)