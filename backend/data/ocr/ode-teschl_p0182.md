implies $\theta_0(d) < \theta_1(d)$ unless $u_1$ and $u_0$ are equal up to a constant. Now either $\theta_0(d) = 0$ mod $\pi$ and thus $\pi \leq \theta_0(d) < \theta_1(d)$ by (5.87) or otherwise $\theta_0(d) = \theta_1(d)$ mod $\pi$ and hence $\theta_0(d) + \pi \leq \theta_1(d)$.

For example, this shows that the zeros of consecutive eigenfunctions must be interlacing:

**Lemma 5.21.** Let $u_n$ be the eigenfunctions of a regular Sturm–Liouville problem ordered according to the size of the eigenvalues. Then the zeros of $u_{n+1}$ interlace the zeros of $u_n$. That is, if $x_{n,j}$ are the zeros of $u_n$ inside $(a,b)$, then

$$a < x_{n+1,1} < x_{n,1} < x_{n+1,2} < \cdots < x_{n+1,n+1} < b.$$ (5.95)

Our next aim is to generalize Theorem 5.18. It will turn out hat the key object for this generalization will be the Wronski determinant of two solutions $u_j$ of $L_j u_j = \lambda_j u_j$, $j = 0,1$ defined as

$$W_x(u_0, u_1) = u_0(x)p_1(x)u'_1(x) - p_0(x)u'_0(x)u_1(x).$$ (5.96)

The connection with Prüfer angles is given by

$$W_x(u_0, u_1) = \rho_0(x)\rho_1(x)\sin(\theta_0(x) - \theta_1(x)),$$ (5.97)

which is straightforward to verify using the trigonometric addition formula $\sin(x - y) = \sin(x)\cos(y) - \cos(x)\sin(y)$. In particular, this last equation shows that the Wronskian will vanish $W_{x_0}(u_0, u_1) = 0$ if and only if $\theta_1(x_0) = \theta_0(x_0)$ mod $\pi$ which is the case if and only if both $u_0$ and $u_1$ satisfy the same boundary condition at $x_0$.

Of course it is tempting to relate the relative Prüfer angle

$$\Delta_{1,0} = \theta_1(x) - \theta_0(x)$$ (5.98)

with the numbers of zeros of the Wronskian as we did for Prüfer angles in Lemma 5.14. However, this turns out impossible. First of all the zeros of the Wronskian are not simple and could vanish on an entire interval (e.g. if both equations agree on an interval) and, even worse, $\Delta_{1,0}$ can clearly cross integer multiples of $\pi$ from both sides (this reflects the fact that we can always reverse the roles of $u_0$ and $u_1$). Nevertheless we simply define

$$\#(u_0, u_1) = \lceil \Delta_{1,0}(b)/\pi \rceil - \lfloor \Delta_{1,0}(a)/\pi \rfloor - 1$$ (5.99)

and call it the weighted number of sign flips of the Wronskian. In other words, we count a sign flip as $+1$ if the relative Prüfer angle crosses an integer multiple from below and as $-1$ if it crosses from above. Sign flips where the relative Prüfer angel does not cross but just turns around are not counted at all.