Example. For the equation $\dot{x} = -x$ we have $\omega_+(x) = \{0\}$ for every $x \in \mathbb{R}$, since every solution converges to 0 as $t \to \infty$. Moreover, $\omega_-(x) = \emptyset$ for $x \neq 0$ and $\omega_-(0) = \{0\}$.

In particular, even for complete $x$ the set $\omega_\pm(x)$ can be empty and we need some further assumptions in order to guarantee that this does not happen.

Lemma 6.6. If $\gamma_\sigma(x)$ is contained in a compact set $C$, then $\omega_\sigma(x)$ is nonempty, compact, and connected.

Proof. By Lemma 6.3, $x$ is $\sigma$ complete and we can choose a sequence $\Phi(t_n, x)$ with $t_n \to \sigma\infty$. By compactness we can extract a convergent subsequence and hence $\omega_\sigma(x)$ is nonempty and compact (since closed subsets of compact sets are again compact). If $\omega_\sigma(x)$ is disconnected, we can split it into two disjoint closed sets $\omega_{1,2}$. Let $\delta = \inf_{y_1 \in \omega_1, y_2 \in \omega_2} |y_1 - y_2| > 0$ be the distance between $\omega_1$ and $\omega_2$. Taking all points which are at most $\frac{\delta}{2}$ away from $\omega_{1,2}$, we obtain two disjoint neighborhoods $U_{1,2}$ of $\omega_{1,2}$, respectively. Now choose a strictly monotone sequence $t_n \to \sigma\infty$ such that $\Phi(t_{2m+1}, x) \in U_1$ and $\Phi(t_{2m}, x) \in U_2$. By connectedness of $\Phi((t_{2m}, t_{2m+1}), x)$ we can find $\Phi(\tilde{t}_m, x) \in C \setminus (U_1 \cup U_2)$ with $t_{2m} < \tilde{t}_m < t_{2m+1}$. Since $C \setminus (U_1 \cup U_2)$ is compact, we can assume $\Phi(\tilde{t}_m, x) \to y \in C \setminus (U_1 \cup U_2)$. But $y$ must also be in $\omega_\sigma(x)$, a contradiction.

Under the same assumptions we can also show that the trajectory converges to its $\omega_\pm$-limit set. To this end recall that the distance between a point $x \in \mathbb{R}^n$ and a set $A \subseteq \mathbb{R}^n$ is defined by

$$d(x, A) = \inf_{y \in A} |x - y|.$$

Lemma 6.7. Suppose $\gamma_\sigma(x)$ is contained in a compact set. Then we have $\lim_{t \to \sigma\infty} d(\Phi(t, x), \omega_\sigma(x)) = 0$.

Proof. It suffices to show that every sequence $t_n \to \sigma\infty$ has a subsequence for which the corresponding points on the orbit converge to a point on $\omega_\sigma(x)$. But for every sequence $t_n \to \sigma\infty$ we can find a subsequence such that the corresponding points on the orbit converge to some point $y$ by our compactness assumption. By definition of $\omega_\sigma(x)$ we must have $y \in \omega_\sigma(x)$ as required.

Now let us consider an example which shows that the compactness requirement is indeed necessary.

Example. Let $M = \mathbb{R}^2$ and consider the vector field

$$f(x) = \begin{pmatrix} \cos(x_1)^2(\sin(x_1) - x_2 \cos(x_1)) \\ \sin(x_1) + x_2 \cos(x_1) \end{pmatrix},$$

(6.19)