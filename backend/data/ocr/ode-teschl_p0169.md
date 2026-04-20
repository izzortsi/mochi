which is independent of $x$ as noted in the previous section.

Now let us choose $c_1 = 0$. Then $f(a) = cu_a(z, a)$ and $f'(a) = cu'_a(z, a)$ (where $c = \frac{c_2 + \langle u_b(z)^*, g \rangle}{W(z)}$). So choosing $u_a(z, x)$ such that $BC_a(u_a(z)) = 0$, we infer $BC_a(f) = 0$. Similarly, choosing $c_2 = 0$ and $u_b(z, x)$ such that $BC_b(u_b(z)) = 0$, we infer $BC_b(f) = 0$. But can we always do this? Well, using the initial conditions

$$u_a(z, a) = \sin(\alpha), \quad p(a)u'_a(z, a) = \cos(\alpha),$$
$$u_b(z, b) = \sin(\beta), \quad p(b)u'_b(z, b) = \cos(\beta),$$

(5.62)

we have two solutions of the required type except for the fact that the Wronskian $W(z)$ might vanish. Now what is so special about the zeros of this Wronskian?

**Lemma 5.9.** The Wronskian $W(z) = W(u_b(z), u_a(z))$ is an entire function which vanishes precisely at the eigenvalues of $L$.

**Proof.** First of all, $W(z)$ is entire since both $u_a(z, x)$ and $u_b(z, x)$ (as well as their $x$ derivatives) are by Lemma 5.7. Moreover, $W(z) = 0$ implies that $u_b(z)$ and $u_a(z)$ are linearly dependent, that is, $u_b(z, x) = c(z)u_a(z, x)$. Hence $BC_a(u_b(z)) = c(z)BC_a(u_a(z)) = 0$ shows that $z$ is an eigenvalue with corresponding eigenfunction $u_b(z, x)$.

In particular, all zeros of $W(z)$ must be real and since the zeros of an entire function can have no finite accumulation point (by the identity theorem from complex analysis), the eigenvalues of $L$ are discrete.

Note (Problem 5.20)

$$u_a(z, x)^* = u_a(z^*, x), \quad u_b(z, x)^* = u_b(z^*, x)$$

(5.63)

implying $W(z)^* = W(z^*)$. In particular both solutions are real-valued for $z \in \mathbb{R}$.

Now let us rewrite (5.59) in the operator form $f(x) = R_L(z)g(x)$ by introducing the operator (the **resolvent** of $L$)

$$R_L(z)g(x) = \int_a^b G(z, x, t)g(t)r(t)dt, \quad g \in \mathfrak{H}_0,$$

(5.64)

where

$$G(z, x, t) = \frac{1}{W(z)} \begin{cases} u_b(z, x)u_a(z, t), & x \geq t, \\ u_b(z, t)u_a(z, x), & x \leq t, \end{cases}$$

(5.65)

is called the **Green function** of $L$. Note that $G(z, x, t)$ is meromorphic with respect to $z \in \mathbb{C}$ with poles precisely at the zeros of $W(z)$ and satisfies (cf. (5.63))

$$G(z, x, t)^* = G(z^*, x, t), \quad G(z, x, t) = G(z, t, x).$$

(5.66)