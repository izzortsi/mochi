terms will diverge. However, if we start in the direction of the eigenvector $(1,0,\ldots,0)$, we won’t see the polynomial terms. In summary,

**Theorem 3.4.** A solution of the linear system (3.1) converges to 0 as $t \to \infty$ if and only if the initial condition $x_0$ lies in the subspace spanned by the generalized eigenspaces corresponding to eigenvalues with negative real part.

It will remain bounded as $t \to \infty$ if and only if $x_0$ lies in the subspace spanned by the generalized eigenspaces corresponding to eigenvalues with negative real part plus the eigenspaces corresponding to eigenvalues with vanishing real part.

Note that to get the behavior as $t \to -\infty$, you just need to replace negative by positive.

A linear system (not necessarily autonomous) is called **stable** if all solutions remain bounded as $t \to \infty$ and **asymptotically stable** if all solutions converge to 0 as $t \to \infty$.

**Corollary 3.5.** The linear system (3.1) is stable if and only if all eigenvalues $\alpha_j$ of $A$ satisfy $\text{Re}(\alpha_j) \leq 0$ and for all eigenvalues with $\text{Re}(\alpha_j) = 0$ the corresponding algebraic and geometric multiplicities are equal. Moreover, in this case there is a constant $C$ such that

$$\|\exp(tA)\| \leq C, \quad t \geq 0.$$ (3.43)

In the case of an asymptotically stable matrix we can even specify the decay rate.

**Corollary 3.6.** The linear system (3.1) is asymptotically stable if and only if all eigenvalues $\alpha_j$ of $A$ satisfy $\text{Re}(\alpha_j) < 0$. Moreover, in this case there is a constant $C = C(\alpha)$ for every $\alpha < \min\{-\text{Re}(\alpha_j)\}_{j=1}^m$ such that

$$\|\exp(tA)\| \leq C e^{-t\alpha}, \quad t \geq 0.$$ (3.44)

**Proof.** It remains to prove the second claim. Since $\|\text{U}\exp(tJ)\text{U}^{-1}\| \leq \|\text{U}\| \|\exp(tJ)\| \|\text{U}^{-1}\|$ it is no restriction to assume that $A$ is in Jordan canonical form. Now note that $\|\exp(tA)\| = e^{-t\alpha} \|\exp(t(A + \alpha\mathbb{I}))\|$. Since $\text{Re}(\alpha_j + \alpha) < 0$ all entries of the matrix $\exp(t(A + \alpha\mathbb{I}))$ are bounded and consequently $\|\exp(t(A + \alpha\mathbb{I}))\| \leq C$ is bounded (cf. Problem 3.7) as required.

Note that one can choose $\alpha = \min\{-\text{Re}(\alpha_j)\}_{j=1}^m$ if and only if for all eigenvalues $\alpha_j$ with $-\text{Re}(\alpha_j) = \alpha$ the corresponding algebraic and geometric multiplicities are equal.

A matrix all whose eigenvalues satisfy $\text{Re}(\alpha_j) < 0$ is also known as a **Hurwitz matrix**. The **Routh-Hurwitz criterion** (cf. [9], Sect. V.6)