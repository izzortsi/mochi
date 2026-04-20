Proof. As in the previous proof our point of departure is

$$x(t) = \Pi_A(t, t_0)x_0 + \int_0^t \Pi_A(t, s)B(s)x(s)ds$$

and using our estimate for $\Pi_A$ we obtain

$$|x(t)| \leq C|x_0| + \int_0^t C\|B(s)\||x(s)|ds.$$

Hence an application of Gronwall’s inequality

$$|x(t)| \leq C|x_0| \exp\left(C \int_0^\infty \|B(s)\|ds\right)$$

finishes the proof.

Again we can apply this to the case where $A$ is constant. To this end recall that by Corollary 3.5 the system corresponding to $B(t) = 0$ is stable if and only if all eigenvalues of $A$ have nonpositive real part. Moreover, (3.43) provides the necessary estimate.

Corollary 3.24. Suppose all eigenvalues $\alpha_j$ of $A$ satisfy $\text{Re}(\alpha_j) \leq 0$ and for all eigenvalues with $\text{Re}(\alpha_j) = 0$ the corresponding algebraic and geometric multiplicities are equal, and $B(t)$ satisfies

$$\int_0^\infty \|B(t)\|dt < \infty.$$

(3.161)

Then the linear system (3.153) is stable. More precisely, there is a constant $C$ such that

$$\|x(t)\| \leq C|x_0|, \quad t \geq 0,$$

(3.162)

where $x(t)$ is the solution corresponding to the initial condition $x(0) = x_0$.

Again the result applies to perturbed periodic systems as well.

Corollary 3.25. Let $A(t)$ be periodic. Suppose all Floquet exponents $\gamma_j$ of $A(t)$ satisfy $\text{Re}(\gamma_j) \leq 0$ and for all Floquet exponents with $\text{Re}(\gamma_j) = 0$ the corresponding algebraic and geometric multiplicities are equal, and $B(t)$ satisfies

$$\int_0^\infty \|B(t)\|dt < \infty.$$

(3.163)

Then the linear system (3.149) is stable. More precisely, there is a constant $C$ such that

$$|x(t)| \leq C|x_0|, \quad t \geq 0,$$

(3.164)

where $x(t)$ is the solution corresponding to the initial condition $x(0) = x_0$.