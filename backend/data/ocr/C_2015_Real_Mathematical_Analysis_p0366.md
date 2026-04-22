by

$$\psi(v) = \begin{cases} 
v + \sigma(|v|) \left( \frac{v}{|v|} - v \right) & \text{if } v \neq 0 \\
0 & \text{if } v = 0.
\end{cases}$$

See Figure 130 and Exercise 53. Since $\sigma(|v|) = 0$ when $|v| \leq 1/2$, $\psi$ is smooth.

**Figure 130** The map $\psi$ crushes all of $\mathbb{R}^n$ onto the closed unit ball $B^n$. It is a diffeomorphism of the interior of $B^n$ to itself, and fixes each point of $\partial B^n = S^{n-1}$. Its derivative has rank $n-1$ at each point of $\mathbb{R}^n \setminus \text{int} B^n$. Restricted to each $(n-1)$-dimensional face $E$ of the cube $[-1,1]^n$, $\psi$ is a diffeomorphism from the interior of $E$ to one of the $2n$ open cubical polar caps on $S^{n-1}$. See also Figure 131 and Exercise 52.

The map $\psi$ carries the sphere $S_r$ of radius $r$ to the sphere of radius

$$\rho(r) = r + \sigma(r)(1-r),$$

sending each radial line into itself. Set $\varphi = \psi \circ \kappa$ where $\kappa$ scales $I^n$ to $[-1,1]^n$ by the affine map $\kappa : u \mapsto v = (2u_1 - 1, \ldots, 2u_n - 1)$. Then

(i) $\varphi$ is smooth since $\psi$ and $\kappa$ are smooth.

(ii) $\varphi$ sends $\partial I^n$ to $\partial B$ since $\psi$ sends $\partial([-1,1]^n)$ to $\partial B$.

(iii) It is left as Exercise 70 to show that the Jacobian of $\psi$ is $\rho'(r)\rho(r)^{n-1}/r^{n-1}$ when $r = |v|$. Thus, the Jacobian $\partial \varphi/\partial u$ is always nonnegative, and is identically equal to $2^n$ on the ball of radius $1/4$ at the center of $I^n$, so its integral on $I^n$ is positive.

**Step 4.** Consider an $(n-1)$-form $\alpha$. If $\beta : I^{n-1} \to \mathbb{R}^n$ is an $(n-1)$-cell whose