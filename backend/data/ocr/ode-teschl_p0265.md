generally not stable under small perturbations, one often assumes that it is empty. Hence we will give a system where all eigenvalues have nonzero real part a special name. They are called hyperbolic systems.

If all eigenvalues have negative real part we have the following result from Section 3.2 which summarizes Corollary 3.5 and Corollary 3.6.

**Theorem 9.1.** Denote the eigenvalues of $A$ by $\alpha_j$, $1 \leq j \leq m$, and the corresponding algebraic and geometric multiplicities by $a_j$ and $g_j$, respectively.

The system $\dot{x} = Ax$ is globally stable if and only if $\text{Re}(\alpha_j) \leq 0$ and $a_j = g_j$ whenever $\text{Re}(\alpha_j) = 0$.

The system $\dot{x} = Ax$ is globally asymptotically stable if and only if we have $\text{Re}(\alpha_j) < 0$ for all $j$. Moreover, in this case there is a constant $C$ for every $\alpha < \min\{-\text{Re}(\alpha_j)\}_{j=1}^m$ such that

$$\|\exp(tA)\| \leq C e^{-t\alpha}, \quad t \geq 0.$$

Finally, let us look at the hyperbolic case. In addition, our previous theorem together with the fact that the stable and unstable manifolds are invariant with respect to $A$ (and thus with respect to $\exp(tA)$) immediately give the following result.

**Theorem 9.2.** The linear stable and unstable manifolds $E^\pm = E^\pm(\text{e}^A)$ are invariant under the flow and every point starting in $E^\pm$ converges exponentially to 0 as $t \to \pm\infty$. In fact, we have

$$|\exp(tA)x_\pm| \leq C e^{-t\alpha}|x_\pm|, \quad \pm t \geq 0, \quad x_\pm \in E^\pm,$$

for any $\alpha < \min\{|\text{Re}(\alpha_j)| |\alpha_j \in \sigma(A), \pm \text{Re}(\alpha_j) < 0\}$ and some $C > 0$ depending on $\alpha$.

For our further investigations, it is also useful to introduce the space spanned by all generalized eigenvectors of $A$ corresponding to eigenvalues with real part less/bigger than $\mp\alpha$,

$$E^{\pm,\alpha}(\text{e}^A) = \bigoplus_{\mp \text{Re}(\alpha_j) > \alpha} \text{Ker}(A - \alpha_j)^{a_j} = E^\pm(\text{e}^{A \pm \alpha}).$$

Equivalently,

$$E^{\pm,\alpha}(\text{e}^A) = \{x | \lim_{t \to \pm\infty} e^{\pm\alpha t}|\exp(tA)x| = 0\},$$

is the space spanned by all initial conditions which converge to 0 with some given exponential rate $\alpha > 0$. Note that $E^{\pm,\alpha}$ is piecewise constant and will jump at those values of $\alpha$ which are equal to the real part of some eigenvalue of $A$.