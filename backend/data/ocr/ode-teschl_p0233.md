Next, observe that if $y \in \Sigma \cap \omega_{\sigma}(x)$, we can approximate $y$ by a sequence $x_n \in \Sigma \cap \gamma_{\sigma}(x)$. In fact, choose $t_n \rightarrow \sigma \infty$ such that $x_n = \Phi(t_n, x) \rightarrow y$. Then, by Lemma 6.9 (with $x = y$ and $T = 0$), we can use $\tilde{t}_n = t_n + \tau(x_n)$ to obtain a sequence $\Phi(\tilde{t}_n, x) \rightarrow y$ of the required type.

**Corollary 7.10.** Let $\Sigma$ be a transversal arc. Then $\omega_{\sigma}(x)$ intersects $\Sigma$ in at most one point.

**Proof.** Suppose there are two points of intersections $y_1$ and $y_2$. Then there exist sequences $x_{1,n}, x_{2,n} \in \Sigma \cap \gamma_{\sigma}(x)$ converging to $y_1, y_2$, respectively. But this is not possible since both are subsequence of the monotone sequence $x_n$ from Lemma 7.9.

**Corollary 7.11.** Suppose $\omega_{\sigma}(x) \cap \gamma_{\sigma}(x) \neq \emptyset$. Then $x$ is periodic and hence $\omega_{+}(x) = \omega_{-}(x) = \gamma(x)$.

**Proof.** By assumption there is some $y \in \omega_{\sigma}(x) \cap \gamma_{\sigma}(x)$. Moreover, by invariance of $\omega_{\sigma}(x)$ we must even have $\gamma(x) = \gamma(y) \subseteq \omega_{\sigma}(x)$. If $y$ is fixed we have $\gamma_{\sigma}(x) = \{y\}$ and there is nothing to do. So we can assume that $y$ is not fixed and pick a transversal arc $\Sigma$ containing $y$ plus a sequence $x_n \in \Sigma \cap \gamma_{\sigma}(x) \subseteq \Sigma \cap \omega_{\sigma}(x)$ converging to $y$. By the previous corollary we must have $x_n = y$ and hence $\gamma(y) = \gamma(x)$ is periodic.

**Corollary 7.12.** A minimal compact $\sigma$ invariant set $C$ is a periodic orbit.

**Proof.** Pick $x \in C$. Then $\omega_{\sigma}(x) = C$ by minimality and hence $\omega_{\sigma}(x) \cap \gamma_{\sigma}(x) \neq \emptyset$. Therefore $x$ is periodic by the previous corollary.

After this sequence of corollaries we proceed with our investigation of $\omega_{\pm}$ limit sets.

**Lemma 7.13** (Poincaré–Bendixson theorem). If $\omega_{\sigma}(x) \neq \emptyset$ is compact and contains no fixed points, then $\omega_{\sigma}(x)$ is a regular periodic orbit.

**Proof.** Let $y \in \omega_{\sigma}(x)$. Take $z \in \omega_{\sigma}(y) \subseteq \omega_{\sigma}(x)$ which is not fixed by assumption. Pick a transversal arc $\Sigma$ containing $z$ and a sequence $y_n \rightarrow z$ with $y_n \in \Sigma \cap \gamma_{\sigma}(y)$. Since $\Sigma \cap \gamma_{\sigma}(y) \subseteq \Sigma \cap \omega_{\sigma}(x) = \{z\}$ by Corollary 7.10, we conclude $y_n = z$ and hence $\omega_{\sigma}(x)$ is a regular periodic orbit.

**Lemma 7.14.** Suppose $\omega_{\sigma}(x)$ is connected and contains a regular periodic orbit $\gamma(y)$. Then $\omega_{\sigma}(x) = \gamma(y)$.

**Proof.** If $\omega_{\sigma}(x) \backslash \gamma(y)$ is nonempty, then, by connectedness, there is a point $\tilde{y} \in \gamma(y)$ such that we can find a point $z \in \omega_{\sigma}(x) \backslash \gamma(y)$ arbitrarily close to $\tilde{y}$. Pick a transversal arc $\Sigma$ containing $\tilde{y}$. By Lemma 6.9 we can find $\tau(z)$ such that $\Phi(\tau(z), z) \in \Sigma$. But then we even have $\Phi(\tau(z), z) \in \Sigma \cap \omega_{\sigma}(x) = \{\tilde{y}\}$ (by Corollary 7.10) and hence $z \in \gamma(y)$ contradicting our assumption.