As noted by Kolmogorov most tori whose frequencies are nonresonant survive under small perturbations. More precisely, let $I \in D \subseteq \mathbb{R}^n$ and denote by $\Omega(D)$ the set of all possible frequencies for our system. Let $\Omega_\alpha(D)$ be the set of frequencies $\Omega$ satisfying the following diophantine condition

$$|k\Omega| \geq \frac{\alpha}{|k|^n} \quad \text{for all } k \in \mathbb{Z}^n \setminus \{0\}. \tag{8.107}$$

Then the following famous result by Kolmogorov, Arnold, and Moser holds

**Theorem 8.13 (KAM).** Suppose $H_0$, $H_1$ are analytic on $D \times \mathbb{T}^n$ and $H_0$ is nondegenerate, that is,

$$\det \left( \frac{\partial H_0}{\partial I} \right) \neq 0. \tag{8.108}$$

Then there exists a constant $\delta > 0$ such that for

$$|\varepsilon| < \delta\alpha^2 \tag{8.109}$$

all Kronecker tori $\Gamma_I$ of the unperturbed system with $I \in \Omega_\alpha(D)$ persist as slightly deformed tori. They depend continuously on $I$ and form a subset of measure $O(\alpha)$ of the phase space $D \times \mathbb{T}^n$.

The proof of this result involves what is know as “small divisor” problem and is beyond the scope of this book. However, we will at least consider a simpler toy problem which illustrates some of the ideas and, in particular, explains where the diophantine condition (8.107) comes from. See the books by Arnold [2] or Moser [28] for further details and references.

But now we come to our toy problem. We begin with the system

$$\dot{x} = Ax, \quad A = \begin{pmatrix} \mathrm{i}\omega_1 & \ddots & \mathrm{i}\omega_n \end{pmatrix}, \quad \omega_j \in \mathbb{R}, \tag{8.110}$$

where the solution is quasi-periodic and given by

$$x_j(t) = (\mathrm{e}^{At}c)_j = c_j\mathrm{e}^{\mathrm{i}\omega_j t}. \tag{8.111}$$

Next we perturb this system according to

$$\dot{x} = Ax + g(x), \tag{8.112}$$

where $g(x)$ has a convergent power series

$$g(x) = \sum_{|k| \geq 2} g_k x^k, \quad k \in \mathbb{N}_0^n, \tag{8.113}$$

where $k = (k_1, \ldots, k_n)$, $|k| = k_1 + \cdots + k_n$, and $x^k = x_1^{k_1} \cdots x_n^{k_n}$. For the solution of the perturbed system we can make the ansatz

$$x(t) = \sum_{|k| \geq 1} c_k \mathrm{e}^{\mathrm{i}\omega k t} \tag{8.114}$$