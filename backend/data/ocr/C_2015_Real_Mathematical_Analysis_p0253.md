The sets $B_n$ nest downward as $n \to \infty$ and $f$ sends $B_n$ inside $B_{n+1}$. Since $M$ is complete, this implies that $\bigcap B_n$ is a single point, say $p$, and $f(p) = p$.

**Proof of Brouwer’s Theorem in Dimension One** The closed unit 1-ball is the interval $[-1, 1]$ in $\mathbb{R}$. If $f: [-1, 1] \to [-1, 1]$ is continuous then so is $g(x) = x - f(x)$. At the endpoints $\pm 1$, we have $g(-1) \leq 0 \leq g(1)$. By the Intermediate Value Theorem, there is a point $p \in [-1, 1]$ such that $g(p) = 0$. That is, $f(p) = p$.

The proof in higher dimensions is harder. One proof is a consequence of the general Stokes’ Theorem, and is given in Chapter 5. Another depends on algebraic topology, a third on differential topology.

**Ordinary Differential Equations**

The qualitative theory of ordinary differential equations (ODEs) begins with the basic existence/uniqueness theorem, Picard’s Theorem. Throughout, $U$ is an open subset of $m$-dimensional Euclidean space $\mathbb{R}^m$.

A **vector ODE** on $U$ is given as $m$ simultaneous scalar equations

$$x'_1 = f_1(x_1, x_2, \ldots, x_m)$$
$$x'_2 = f_2(x_1, x_2, \ldots, x_m)$$
$$\ldots$$
$$x'_m = f_m(x_1, x_2, \ldots, x_m)$$

where each $f_i$ is a function from $U$ to $\mathbb{R}$. One seeks $m$ real-valued functions $x_1(t), \ldots, x_m(t)$ such that

$$\frac{dx_1(t)}{dt} = f_1(x_1(t), x_2(t), \ldots, x_m(t))$$
$$\frac{dx_2(t)}{dt} = f_2(x_1(t), x_2(t), \ldots, x_m(t))$$
$$\ldots$$
$$\frac{dx_m(t)}{dt} = f_m(x_1(t), x_2(t), \ldots, x_m(t))$$

hold identically and simultaneously. The functions $x_1(t), \ldots, x_m(t)$ are said to **solve** the ODE with **initial condition**

$$(x_1(0), x_2(0), \ldots, x_m(0)).$$