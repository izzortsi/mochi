Figure 7.9. Phase portrait of an example where $\omega_+(x)$ consists of two fixed points and two orbits connecting them.

(i) $\omega_\sigma(x)$ is a fixed orbit.
(ii) $\omega_\sigma(x)$ is a regular periodic orbit.
(iii) $\omega_\sigma(x)$ consists of (finitely many) fixed points $\{x_j\}$ and non-closed orbits $\gamma(y)$ such that $\omega_\pm(y) \in \{x_j\}$.

Proof. If $\omega_\sigma(x)$ contains no fixed points it is a regular periodic orbit by Lemma 7.13. If $\omega_\sigma(x)$ contains at least one fixed point $x_1$ but no regular points, we have $\omega_\sigma(x) = \{x_1\}$ since fixed points are isolated and $\omega_\sigma(x)$ is connected.

Suppose that $\omega_\sigma(x)$ contains both fixed and regular points. Let $y \in \omega_\sigma(x)$ be regular. We need to show that $\omega_\pm(y)$ consists of one fixed point. Therefore it suffices to show that it cannot contain regular points. Let $z \in \omega_\pm(y)$ be regular. Take a transversal arc $\Sigma$ containing $z$ and a sequence $y_n \rightarrow z$, $y_n \in \gamma(y) \cap \Sigma$. By Corollary 7.10, $\gamma(y) \subseteq \omega_\sigma(x)$ can intersect $\Sigma$ only in $y$. Hence $y_n = z$ and $\gamma(y)$ is regular periodic. Now Lemma 7.14 implies $\gamma(y) = \omega_\sigma(x)$ which is impossible since $\omega_\sigma(x)$ contains fixed points.

Example. While we have already seen examples for case (i) and (ii) in the Poincaré–Bendixson theorem we have not seen an example for case (iii). Hence we consider the vector field

$$f(x,y) = \begin{pmatrix} y + x^2 - \alpha x(y - 1 + 2x^2) \\ -2(1 + y)x \end{pmatrix}.$$

First of all it is easy to check that the curves $y = 1 - 2x^2$ and $y = -1$ are invariant. Moreover, there are four fixed points $(0,0), (-1,-1), (1,-1)$, and $(\frac{1}{2\alpha}, -1)$. We will chose $\alpha = \frac{1}{4}$ such that the last one is outside the region bounded by the two invariant curves. Then a typical orbit starting inside this region is depicted in Figure 7.9. It converges to the unstable fixed point $(0,0)$ as $t \rightarrow -\infty$ and spirals towards the boundary as $t \rightarrow +\infty$. In