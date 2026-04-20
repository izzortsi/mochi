to be the set of all points which converge to $x_0$ with some exponential rate $\alpha > 0$ as $t \to \pm \infty$. This is the counterpart of $E^{\pm,\alpha}$, the space spanned by all eigenvectors of $A$ corresponding to eigenvalues with real part less/bigger than $\mp \alpha$. Now we define the local stable respectively unstable manifolds of a fixed point $x_0$ to be the set of all points which converge exponentially to $x_0$ as $t \to \infty$ respectively $t \to -\infty$, that is,

$$M^{\pm}(x_0) = \bigcup_{\alpha > 0} M^{\pm,\alpha}(x_0).$$

(9.10)

Both sets are $\pm$ invariant under the flow by construction.

In the linear case we clearly have $M^{\pm}(0) = E^{\pm}$. Our goal is to show, as a generalization of Theorem 9.2, that the sets $M^{\pm}(x_0)$ are indeed manifolds (smooth) and that $E^{\pm}$ is tangent to $M^{\pm}(x_0)$ at $x_0$, as illustrated in Figure 9.1. Finally, we will show that $M^{\pm}(x_0) = W^{\pm}(x_0)$ in the hyperbolic case.

For notational convenience we will assume that $x_0 = 0$ is our hyperbolic fixed point. The key idea is again to reformulate our problem as an integral equation which can then be solved by iteration. Since we understand the behavior of the solutions to the linear system we can use the variation of constants formula (3.97) to rewrite our equation as

$$x(t) = e^{tA}x(0) + \int_0^t e^{(t-r)A}g(x(r))dr.$$

(9.11)

Now denote by $P^{\pm}$ the projectors onto the stable, unstable subspaces $E^{\pm}$ of $\exp(A)$. Moreover, abbreviate $x_{\pm} = P^{\pm}x(0)$ and $g_{\pm}(x) = P^{\pm}g(x)$.

What we need is a condition on $x(0) = x_+ + x_-$ such that $x(t)$ remains bounded. Clearly, if $g(x) = 0$, this condition is $x_- = 0$. In the general case,