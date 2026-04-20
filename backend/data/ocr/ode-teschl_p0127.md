can be used to derive an effective numerical scheme known as the Parker–Sochacki algorithm. (Hint: Let $w_n(z)$ be the Picard iterates and suppose $w(z) = w_n(z) + O(z^{n+1})$. What does the Lipschitz estimate tell you about the relation between $f(z, w(z))$ and $f(z, w_n(z))$?)

4.2. The Frobenius method for second-order equations

To begin with, we will restrict our attention to second-order linear equations

$$u'' + p(z)u' + q(z)u = 0,$$

(4.20)

which are among the most important ones in applications. Clearly, everything we know from the real case (superposition principle, etc.) carries over to the complex case and we know that the solutions are analytic whenever the coefficients $p(z)$ and $q(z)$ are. However, in many applications the coefficients will have singularities and one of the main questions is the behavior of the solutions near such a singularity. This will be our next topic. We will assume that the singular point is $z_0 = 0$ for notational convenience.

Recall that a function $u(z)$, which is analytic in the domain $\Omega = \{z \in \mathbb{C} | 0 < |z| < r\}$, can be expanded into a (convergent) Laurent series

$$u(z) = \sum_{j \in \mathbb{Z}} u_j z^j, \quad z \in \Omega.$$

(4.21)

It is analytic at $z = 0$ if all negative coefficients $u_j, j < 0$, vanish. If all but finitely many vanish, $u(z)$ is said to have a **pole**. The smallest $n$ with $u_{-m} = 0$ for $m > n$ is called the **order** of the pole. Otherwise, if infinitely many negative coefficients are nonzero, $z = 0$ is called an **essential singularity**.

Now let us begin by considering the prototypical example.

**Example.** The Euler equation is given by

$$u'' + \frac{p_0}{z}u' + \frac{q_0}{z^2}u = 0, \quad z \in \mathbb{C}\{0\}.$$

(4.22)

Obviously the coefficients have poles at $z = 0$ and, since $\mathbb{C}\{0\}$ is not simply connected, solutions might not be defined for all $z \in \mathbb{C}\{0\}$. Hence we introduce a branch cut along the negative real axis and consider the simply connected domain $\Omega = \mathbb{C}\{-\infty, 0\}$. To solve (4.22) we will use the transformation

$$\zeta = \log(z) = \log |z| + i\arg(z), \quad -\pi < \arg(z) < \pi,$$

(4.23)

which maps $\Omega$ to the strip $\tilde{\Omega} = \{z \in \mathbb{C}| -\pi < \operatorname{Im}(z) < \pi\}$. The equation in the new coordinates reads

$$\omega'' + (p_0 - 1)\omega' + q_0\omega = 0, \quad \omega(\zeta) = u(e^{\zeta}).$$

(4.24)