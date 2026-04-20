The reason is of course that the $N$-body problem is no longer integrable for $N \geq 3$. In fact, it can be even shown that a generic Hamiltonian system (with more than one degree of freedom) is not integrable. So integrable systems are the exception from the rule. However, many interesting physical systems are nearly integrable systems. That is, they are small perturbations of integrable systems. For example, if we neglect the forces between the planets and only consider the attraction by the sun, the resulting system is integrable. Moreover, since the mass of the sun is much larger than those of the planets, the neglected term can be considered as a small perturbation.

This leads to the study of systems

$$H(p, q) = H_0(p, q) + \varepsilon H_1(p, q),$$

(8.101)

where $H_0$ is completely integrable and $\varepsilon$ is small. Since $H_0$ is integrable, we can choose corresponding action angle variables $(I, \theta)$ and it hence suffices to consider systems of the type

$$H(I, \theta) = H_0(I) + \varepsilon H_1(I, \theta),$$

(8.102)

where $I \in \mathbb{R}^n$ and all components of $\theta$ have to be taken modulo $2\pi$, that is, $\theta$ lives on the torus $\mathbb{T}^n$.

By (8.74) the unperturbed motion for $\varepsilon = 0$ is given by

$$I(t) = I_0, \quad \theta(t) = \theta_0 + \Omega(I_0)t.$$

(8.103)

Hence the solution curve is a line winding around the invariant torus $\Gamma_{I_0} = \{I_0\} \times \mathbb{T}^n$. Such tori with a linear flow are called Kronecker tori. Two cases can occur.

If the frequencies $\Omega(I_0)$ are nonresonant or rationally independent,

$$k\Omega(I_0) \neq 0 \quad \text{for all } k \in \mathbb{Z}^n \setminus \{0\},$$

(8.104)

then each orbit is dense. On the other hand, if the frequencies $\Omega(I_0)$ are resonant,

$$k\Omega(I_0) = 0 \quad \text{for some } k \in \mathbb{Z}^n \setminus \{0\},$$

(8.105)

the torus can be decomposed into smaller ones with the same property as before.

The corresponding solutions are called quasi-periodic. They will be periodic if and only if all frequencies in $\Omega(I_0)$ are rationally dependent, that is,

$$\Omega(I_0) = k\omega \quad \text{for some } k \in \mathbb{Z}^n, \quad \omega \in \mathbb{R}.$$

(8.106)

In case of the solar system such quasi-periodic solutions correspond to a stable motion (planets neither collide nor escape to infinity) and the question is whether they persist for small perturbations or not. Hence this problem is also known as “stability problem” for the solar system.