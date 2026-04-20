12.2. The Poincaré map

Let $\Sigma$ be a transversal submanifold of codimension one containing one value $x_0$ from our periodic orbit. Recall the Poincaré map

$$P_{\Sigma}(y) = \Phi(\tau(y), y)$$

(12.9)

introduced in Section 6.4. It is one of the major tools for investigating periodic orbits. Stability of the periodic orbit $\gamma(x_0)$ is directly related to stability of $x_0$ as a fixed point of $P_{\Sigma}$.

Lemma 12.2. The periodic orbit $\gamma(x_0)$ is an (asymptotically) stable orbit of $f$ if and only if $x_0$ is an (asymptotically) stable fixed point of $P_{\Sigma}$.

Proof. Suppose $x_0$ is a stable fixed point of $P_{\Sigma}$. Let $U$ be a neighborhood of $\gamma(x_0)$. Choose a neighborhood $\tilde{U} \subseteq U \cap \Sigma$ of $x_0$ such that $\Phi([0, T], \tilde{U}) \subseteq U$. If $x_0$ is a stable fixed point of $P_{\Sigma}$ there is another neighborhood $\tilde{V} \subseteq \Sigma$ of $x_0$ such that $P^n(\tilde{V}) \subseteq \tilde{U}$ for all $n$. Now let $V$ be a neighborhood of $\gamma(x_0)$ such that $V \subseteq \Phi([0, T], \tilde{V})$. Then if $y \in V$ there is a smallest $t_0 \geq 0$ such that $y_0 = \Phi(t_0, y) \in \tilde{V}$. Hence $y_n = P_{\Sigma}^n(y_0) \in \tilde{U}$ and thus $\phi(t, V) \subseteq U$ for all $t \geq 0$.

Moreover, if $y_n \to x_0$ then $\Phi(t, y) \to \gamma(x_0)$ by continuity of $\Phi$ and compactness of $[0, T]$. Hence $\gamma(x_0)$ is asymptotically stable if $x_0$ is. The converse is trivial. $\square$

As an immediate consequence of this result and Theorem 10.1 we obtain

Corollary 12.3. Suppose $f \in C^k$ has a periodic orbit $\gamma(x_0)$. If all eigenvalues of the derivative of the Poincaré map $dP_{\Sigma}$ at $x_0$ lie inside the unit circle then the periodic orbit is asymptotically stable.

We next show how this approach is related to the first variational equation.

Theorem 12.4. The eigenvalues of the derivative of the Poincaré map $dP_{\Sigma}$ at $x_0$ plus the single value 1 coincide with the eigenvalues of the monodromy matrix $M_{x_0}(t_0)$.

In particular, the eigenvalues are independent of the base point $x_0$ and the transversal section $\Sigma$.

Proof. After a linear transform it is no restriction to assume $f(x_0) = (0, \ldots, 0, 1)$. Write $x = (y, z) \in \mathbb{R}^{n-1} \times \mathbb{R}$. Then $\Sigma$ is locally the graph of a function $s : \mathbb{R}^{n-1} \to \mathbb{R}$ and we can take $y$ as local coordinates for the Poincaré map. Since

$$\frac{\partial}{\partial x} \Phi(\tau(x), x) \bigg|_{x=x_0} = f(x_0) d\tau_{x_0} + \frac{\partial \Phi_T}{\partial x}(x_0)$$