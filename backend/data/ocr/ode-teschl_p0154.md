Then

$$u(t,x) = \sum_{n=1}^{\infty} \left( c_{1,n} \cos(cn\pi t) + c_{2,n} \sin(cn\pi t) \right) \sin(n\pi x),$$

(5.11)

is in $C^2(\mathbb{R} \times [0,1])$ and satisfies the wave equation (5.1) as well as the boundary conditions $u(t,0) = u(t,1) = 0$.

Proof. Consider

$$u_N(x,t) = \sum_{n=1}^{N} \left( c_{1,n} \cos(cn\pi t) + c_{2,n} \sin(cn\pi t) \right) \sin(n\pi x),$$

$$w_N(x,t) = \sum_{n=1}^{N} \left( c_{1,n} \cos(cn\pi t) + c_{2,n} \sin(cn\pi t) \right) n\pi \cos(n\pi x).$$

By our assumption (5.10) the Weierstraß $M$-test implies that both series converge uniformly to continuous functions $u(x,t)$, $w(x,t)$, respectively. Furthermore, since $w_N(t,x) = \frac{\partial}{\partial x} u_N(x,t)$ this also shows that $u(x,t)$ has a continuous partial derivative with respect to $x$ given by $\frac{\partial}{\partial x} u(x,t) = w(t,x)$. Similarly one shows existence of the remaining derivatives. In particular, the fact that $u_N$ solves the wave equation remains valid in the limit.

Next, under the assumptions (5.10), the proof of the previous lemma also shows

$$u(0,x) = \sum_{n=1}^{\infty} c_{1,n} \sin(n\pi x), \quad \frac{\partial}{\partial t} u(0,x) = \sum_{n=1}^{\infty} cn\pi c_{2,n} \sin(n\pi x).$$

(5.12)

Now observe that the sums on the right-hand side are nothing else but Fourier sine series. Moreover, recall that the trigonometric functions form a complete orthonormal system and, under mild assumptions, arbitrary functions can be expanded in such a series (do not worry if you are not familiar with this result, it will follow as a special case of our analysis in this chapter).

Hence, expanding the initial conditions into Fourier sine series

$$u(x) = \sum_{n=1}^{\infty} u_n \sin(n\pi x), \quad v(x) = \sum_{n=1}^{\infty} v_n \sin(n\pi x),$$

(5.13)

where

$$u_n = 2 \int_0^1 \sin(n\pi x) u(x) dx, \quad v_n = 2 \int_0^1 \sin(n\pi x) v(x) dx,$$

(5.14)

we see that the solution of our original problem is given by (5.11) with $c_{1,n} = u_n$ and $c_{2,n} = \frac{v_n}{cn\pi}$, provided the Fourier coefficients satisfy

$$\sum_{n=1}^{\infty} n^2 |u_n| < \infty, \quad \sum_{n=1}^{\infty} n |v_n| < \infty.$$

(5.15)