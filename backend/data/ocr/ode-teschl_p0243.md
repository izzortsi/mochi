But how can we find such an attracting set? Fortunately, using our considerations from above, there is an easy way of doing so. An open connected set $E$ whose closure is compact is called a *trapping region* for the flow if $\Phi_t(\overline{E}) \subset E$ for all $t > 0$. Note that in this case every orbit starting in $\overline{E}$ is complete. In many cases a trapping region can be found by looking for the region bounded by some surface (e.g. the level set of some function) such that the vector field points inwards on that surface, cf. Problem 8.2.

**Lemma 8.5.** Let $E$ be a trapping region. Then

$$\Lambda = \omega_+(E) = \bigcap_{t \geq 0} \Phi(t, E)$$

is a nonempty, invariant, compact, and connected attracting set.

**Proof.** First of all note that by $\Phi(t + \varepsilon, \overline{E}) \subset \Phi(t, E) \subset \Phi(t, \overline{E})$ we have

$$\bigcap_{t \geq 0} \Phi(t, E) = \bigcap_{t \geq 0} \Phi(t, \overline{E}) = \bigcap_{t \geq 0} \Phi(t, \overline{\gamma_+(E)}) = \omega_+(E).$$

and it remains to show that $\Lambda$ is attracting.

To see this suppose there were an $x \in E$ and a sequence $t_n \to \infty$ with $d(\Phi(t_n, x), \Lambda) \geq \varepsilon > 0$. Then, since $\Phi(t_n, x)$ remains in the compact set $\overline{E}$, we can assume $\Phi(t_n, x) \to y$ after passing to a subsequence. But $y \in \omega_+(x) \subset \omega_+(E)$ by (8.2), a contradiction.

Unfortunately the definition of an attracting set is not always good enough. In our example (8.3) any ball $B_r(0)$ with radius $r > 1$ is a trapping region. However, whereas only the two fixed points $(\pm 1, 0)$ are *really* attracting, the corresponding attracting set $\Lambda$ also contains the repelling fixed point $(0, 0)$ plus its unstable manifold. In particular, the domain of attraction of the two attracting fixed points $W^+(\{(-1, 0), (1, 0)\}) = \{(x, y) \in \mathbb{R}^2 | x = 0\}$ is up to a set of measure zero the same as $W^+(\Lambda) = \mathbb{R}^2$.

In fact, an attracting set will always contain the unstable manifolds of all its points.

**Lemma 8.6.** Let $E$ be a trapping region. Then

$$W^-(x) \subset \omega_+(E), \quad \forall x \in \omega_+(E).$$

**Proof.** Let $y \in W^-(x)$, that is $\lim_{t \to -\infty} \Phi(t, y) = x \in E$. Since $E$ is open there is some $t_0$ such $\gamma_-(\Phi(t_0, y)) \subset E$. Since $E$ is positive invariant we even obtain $\gamma(y) = \gamma(\Phi(t_0, y)) \subset E = \gamma_+(E)$ and the claim follows from Theorem 8.3.

To exclude such situations, one has to ensure that an attracting set cannot be split into smaller invariant sets. One such possibility is to define