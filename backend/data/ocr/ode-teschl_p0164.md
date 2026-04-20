5.3. Sturm–Liouville equations

Before we will apply the theory of inner product spaces to the investigation of Sturm–Liouville problems we have a look at the underlying differential equation

$$- (p(x)y')' + (q(x) - z r(x))y = 0, \quad z \in \mathbb{C}, \ x \in I = (a, b),$$

(5.43)

for $y \in C^2(I, \mathbb{C})$, which is equivalent to the first-order system

$$y' = \frac{1}{p(x)} w,$$
$$w' = (q(x) - z r(x))y,$$

(5.44)

where $w(x) = p(x)y'(x)$. Hence we see that there is a unique solution if $p(x)^{-1}, q(x)$, and $r(x)$ are continuous in $I$. In fact, as noted earlier, it even suffices to assume that $p(x)^{-1}, q(x)$, and $r(x)$ are integrable over each compact subinterval of $I$. I remark that essentially all you have to do is to replace differentiable by absolutely continuous (respectively differentiable in the weak sense) in the sequel. However, we will assume that

$$r, q \in C^0([a, b], \mathbb{R}), \ p \in C^1([a, b], \mathbb{R}), \ p(x), r(x) > 0, \ x \in [a, b],$$

(5.45)

for the rest of this chapter and call the differential equation (5.43) regular in this case. Note that if we only assume $p \in C^0([a, b], \mathbb{R})$, we will still be within the framework of the theory developed so far, but then $y$ might no longer be $C^2$ since we only know $w = py' \in C^1$.

By (3.105) the principal matrix solution of (5.44) is given by

$$\Pi(z, x, x_0) = \begin{pmatrix} c(z, x, x_0) & s(z, x, x_0) \\ p(x)c'(z, x, x_0) & p(x)s'(z, x, x_0) \end{pmatrix}, \quad z \in \mathbb{C},$$

(5.46)

where $c(z, x, x_0)$ is the solution of (5.43) corresponding to the initial condition $c(z, x_0, x_0) = 1$, $p(x_0)c'(z, x_0, x_0) = 0$ and similarly for $s(z, x, x_0)$ but corresponding to the initial condition $s(z, x_0, x_0) = 0$, $p(x_0)s'(z, x_0, x_0) = 1$.

We know that $\Pi(z, x, x_0)$ is continuous with respect to $x$ and $x_0$ by Theorem 2.9. But with respect to $z$ a much stronger result is true. Recall that a function is said to be **entire** if it is analytic on all of $\mathbb{C}$.

Lemma 5.7. The principal matrix solution $\Pi(z, x, x_0)$ is entire with respect to $z$ for every fixed $(x, x_0) \in I \times I$.

Proof. It suffices to show that every solution is entire with respect to $z$ in a neighborhood of $x_0$ if the initial conditions are constant. In this case each of the iterations (2.13) is entire (in fact even polynomial) with respect to $z$. Moreover, for $z$ in a compact set, the Lipschitz constant can be chosen independently of $z$. Hence the series of iterations converges uniformly for $z$ in any compact set, implying that the limit is again analytic by the Weierstraß convergence theorem.