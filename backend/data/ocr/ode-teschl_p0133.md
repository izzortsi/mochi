Proof. Consider $v(z) = \left(u_2(z)/u_1(z)\right)'$ and observe that it is of the form $v(z) = z^\beta k(z)$, where $k(z)$ is analytic near $z = 0$.

Now a straightforward calculation shows

$$p(z) = -\frac{v'(z)}{v(z)} - 2\frac{u_1'(z)}{u_1(z)}$$

and since the right-hand side has at most a first-order pole, so does $p$. Similarly,

$$q(z) = -\frac{u_1''(z)}{u_1(z)} - p(z)\frac{u_1'(z)}{u_1(z)}$$

has at most a second-order pole. $\square$

Note that (3.113) implies that $p(z)$ and $q(z)$ will be holomorphic near $z = 0$ if and only if there are two linearly independent holomorphic solutions $u_1(z)$ and $u_2(z)$.

Finally, let me remark that this characterization can also be applied to classify singularities at $z_0 = \infty$. To this end one makes the change of variables $\zeta = \frac{1}{z}$ which transforms our equation to

$$\omega'' + \left(2\zeta^{-1} - \zeta^{-2}p(\zeta^{-1})\right)\omega' + \zeta^{-4}q(\zeta)^{-1}\omega = 0, \quad \omega(\zeta) = u(\zeta^{-1}). \tag{4.57}$$

In particular, the equation will satisfy (4.30) in the new variable $\zeta$ if and only if the following limits

$$2 - \lim_{z \to \infty} z p(z) = p_0, \quad \lim_{z \to \infty} z^2 q(z) = q_0 \tag{4.58}$$

exist in $\mathbb{C}$. Now, let us see how this method works by considering an explicit example. This will in addition show that all cases from above can occur.

Example. Consider the famous Bessel equation

$$z^2 u'' + zu' + \left(z^2 - \nu^2\right)u = 0, \quad \nu \in \mathbb{C}. \tag{4.59}$$

After dividing by $z^2$ we see that it is of the form (4.20) with $p(z) = \frac{1}{z}$ and $q(z) = 1 - \frac{\nu^2}{z^2}$. In particular, $p_0 = 1$ and $q_0 = -\nu^2$. Moreover, it is no restriction to assume $\text{Re}(\nu) \geq 0$ and hence we will do so.

The characteristic exponents are given by $\alpha_{1,2} = \pm \nu$ and hence there is a solution of the form

$$u_1(z) = z^\nu \sum_{j=0}^{\infty} h_{1,j}z^j, \quad h_{1,0} = 1. \tag{4.60}$$