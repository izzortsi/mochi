Note that a Fuchs system is regular at $\infty$ if and only if $\sum_{j=1}^{k} A_j = 0$. Hence every nontrivial $(A(z) \neq 0)$ Fuchs system has at least two singularities.

Finally, let me remark, that all results for systems apply to the $n$’th order linear equation

$$u^{(n)}(z) + q_{n-1}(z)u^{(n-1)}(z) + \cdots + q_1(z)u'(z) + q_0(z)u(z) = 0.$$ (4.115)

Transforming this equation to a system as usual, shows that $z_0 = 0$ is a simple singularity if the coefficients $q_j(z)$, $0 \leq j \leq n-1$ have at most first-order poles. However, we can do even better. Introducing

$$w(z) = (u(z), z u'(z), \ldots, z^{n-1} u^{(n-1)}(z)).$$ (4.116)

shows that

$$A(z) = \frac{1}{z} \begin{pmatrix}
0 & 1 & \\
1 & 1 & \\
& 2 & 1 \\
& \ddots & \ddots \\
& \ddots & 1 \\
- z^n q_0 & - z^{n-1} q_1 & \cdots & - z^2 q_{n-2} & n-1 - z q_{n-1}
\end{pmatrix}$$ (4.117)

has a simple singularity at $z = 0$ if $q_j(z), 0 \leq j \leq n-1$, has a pole of order at most $n-j$ at $z = 0$.

For example, transforming (4.20) we obtain the system

$$w' = A(z)w, \quad A(z) = \begin{pmatrix}
0 & \frac{1}{z} \\
-z q(z) & \frac{1}{z} - p(z)
\end{pmatrix}.$$ (4.118)

Problem 4.20. Let $w_j > 0$, $j \in \mathbb{N}_0$, be given weights. Show that the set of all sequences $\underline{u} = (u_j)_{j \in \mathbb{N}_0}$ with $u_j \in \mathbb{C}^n$ for which the norm

$$\|\underline{u}\| = \sum_{j=0}^{\infty} |u_j| w_j$$

is finite, form a Banach space.