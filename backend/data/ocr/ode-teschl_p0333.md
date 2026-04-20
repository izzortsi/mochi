Problem 12.1 (Hopf bifurcation). Investigate the system

$$\dot{x} = -y + (\mu + \sigma(x^2 + y^2)x, \quad \dot{y} = x + (\mu + \alpha(x^2 + y^2)y$$

as a function of the parameter $\mu$ for $\sigma = 1$ and $\sigma = -1$. Compute the stable and unstable manifolds in each case. (Hint: Use polar coordinates.)

12.4. Melnikov’s method for autonomous perturbations

In Lemma 12.7 we have seen that hyperbolic periodic orbits are stable under small perturbations. However, there is a quite frequent situation in applications where this result is not good enough! In Section 6.7 we have learned that many physical models are given as Hamiltonian systems. Clearly such systems are idealized and a more realistic model can be obtained by perturbing the original one a little. This will usually render the equation unsolvable. The typical situation for a Hamiltonian system in two dimensions is that there is a fixed point surrounded by periodic orbits. As we have seen in Problem 6.27, adding an (arbitrarily small) friction term will render the fixed point asymptotically stable and all periodic orbits disappear. In particular, the periodic orbits are unstable under small perturbations and hence cannot be hyperbolic. On the other hand, van der Pol’s equation (7.32) is also Hamiltonian for $\mu = 0$ and in Theorem 7.8 we have shown that one of the periodic orbits persists for $\mu > 0$.

So let us consider a Hamiltonian system

$$H(p, q) = \frac{p^2}{2} + U(q),$$

with corresponding equation of motions

$$\dot{p} = -U'(q), \quad \dot{q} = p.$$

(12.28)

Moreover, let $q_0$ be an equilibrium point surrounded by periodic orbits. Without restriction we will choose $q_0 = 0$. We are interested in the fate of these periodic orbits under a small perturbation

$$\dot{p} = -U'(q) + \varepsilon f(p, q), \quad \dot{q} = p + \varepsilon g(p, q),$$

(12.29)

which is not necessarily Hamiltonian. Choosing the section $\Sigma = \{(0, q)|q > 0\}$, the corresponding Poincaré map is given by

$$P_{\Sigma}((0, q), \varepsilon) = \Phi(\tau(q, \varepsilon), (0, q), \varepsilon),$$

(12.30)

where $\tau(q, \varepsilon)$ is the first return time. The orbit starting at $(0, q)$ will be periodic if and only if $q$ is a zero of the displacement function

$$\Delta(q, \varepsilon) = \Phi_1(\tau(q, \varepsilon), (0, q), \varepsilon) - q.$$

(12.31)

Since $\Delta(q, 0)$ vanishes identically, so does the derivative with respect to $q$ and hence we cannot apply the implicit function theorem. Of course this