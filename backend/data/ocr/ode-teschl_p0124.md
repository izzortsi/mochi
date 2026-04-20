4.1. The basic existence and uniqueness result

**Theorem 4.1.** Let $\Omega = \{(z, w)| |z - z_0| < \varepsilon, |w - w_0| < \delta\}$ be an open rectangle and suppose $f: \Omega \to \mathbb{C}$ is analytic and bounded. Then the initial value problem (4.2) has a unique analytic solution defined in the disc $\{z| |z - z_0| < \varepsilon_0\}$, where

$$\varepsilon_0 = \min(\varepsilon, \frac{\delta}{M}), \quad M = \sup_{(z, w) \in \Omega} |f(z, w)|. \tag{4.9}$$

**Example.** The following example shows that the estimates for the convergence radius $\varepsilon_0$ of the solution cannot be improved in general (of course it cannot be larger than $\varepsilon$ in general). Consider

$$w' = M \left( \frac{1}{2} \left( 1 + \frac{w}{\delta} \right) \right)^{1/m}, \quad M, \delta > 0, m > 1.$$

Observe that the right-hand side satisfies the assumptions of our theorem with $\varepsilon = \infty$ and the constants $M, \delta$ are equal to the ones used in the differential equation above.

The solution corresponding to the initial condition $w(0) = 0$ can be obtained by separation of variables and is given by

$$w(z) = \delta \left( \left( 1 + \frac{z}{a_m} \right)^{m/(m-1)} - 1 \right), \quad a_m = \left( \frac{m2^{1/m}}{m-1} \right) \frac{\delta}{M} > 0.$$

The solution has a branch point at $z = -a_m$ and hence the convergence radius around zero is $a_m$. Finally observe that $a_m \to \varepsilon_0 = \frac{\delta}{M}$ as $m \to \infty$. $\diamond$

Note that we even get analytic dependence on the initial condition and on parameters.

**Theorem 4.2.** Suppose $f: \Omega \times \Lambda \to \mathbb{C}$ is analytic. Then the initial value problem

$$w' = f(z, w, \lambda), \quad w(z_0) = w_0, \tag{4.10}$$

has a unique solution $w(z, w_0, \lambda)$ defined in a sufficiently small neighborhood around $(z_0, w_0, \lambda_0) \in \Omega \times \Lambda$ which is analytic with respect to all variables.

**Proof.** This follows again from the Weierstraß convergence theorem since the Picard iterates are analytic together with the fact that constants in the convergence estimates can be chosen uniform in some sufficiently small compact neighborhood around $(z_0, w_0, \lambda_0)$ (cf. the proof of Theorem 2.9).

Next, let us look at maximally defined solutions. Unfortunately, this topic is more tricky than in the real case. In fact, let $w_1(z)$ and $w_2(z)$ be two solutions defined on the domains $U_1$ and $U_2$ respectively. If they coincide at a point $z_1 \in U_1 \cap U_2$, they also coincide in a neighborhood of $z_1$