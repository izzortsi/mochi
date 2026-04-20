Lemma 8.2. Suppose $X$ is nonempty. If the set $\overline{\gamma_{\sigma}(X)}$ is compact, then $\omega_{\sigma}(X)$ is nonempty and compact. If $\overline{\gamma_{\sigma}(X)}$ is in addition connected (e.g., if $X$ is connected), then so is $\omega_{\sigma}(X)$.

Proof. It remains to show that $\Lambda = \omega_{+}(X)$ is connected. Suppose it is not and can be split into two disjoint closed sets, $\Lambda = \Lambda_{0} \cup \Lambda_{1}$, none of which is empty. Since $\mathbb{R}^{n}$ is normal, there are disjoint open sets $U_{0}$ and $U_{1}$ such that $\Lambda_{0} \subset U_{0}$ and $\Lambda_{1} \subset U_{1}$. Moreover, the set $V_{n} = \Phi(n, \overline{\gamma_{+}(X)}) \setminus (U_{0} \cup U_{1})$ is compact. Hence $V = \bigcap_{n} V_{n}$ is either nonempty or $V_{n}$ is eventually empty. In the first case we must have $V \subset \Lambda$ which is impossible since $V \cap (U_{0} \cup U_{1}) = \emptyset$. Otherwise, if $V_{n}$ is eventually empty, then $\phi(n, \overline{\gamma_{+}(X)})$ must be eventually in $U_{0}$ or in $U_{1}$ (since $\phi(n, \overline{\gamma_{+}(X)})$ is connected) implying $\Lambda \subset U_{0}$ respectively $\Lambda \subset U_{1}$. Again a contradiction.

Theorem 8.3. The set $\omega_{\sigma}(X)$ is the union over all complete orbits lying entirely in $\overline{\gamma_{\sigma}(X)}$.

Proof. Let $\gamma(y)$ be such an orbit. Then $\gamma(y) \subseteq \overline{\gamma_{+}(X)}$ and invariance of $\gamma(y)$ implies $\gamma(y) \subseteq \Phi(t, \overline{\gamma_{+}(X)})$ for all $t$ and hence $\gamma(y) \subseteq \omega_{+}(X)$. Conversely, let $y \in \omega_{+}(X)$. Then invariance of $\overline{\gamma_{+}(X)}$ implies $\gamma(y) \subseteq \omega_{+}(X) \subseteq \overline{\gamma_{+}(X)}$.

For a given invariant set $\Lambda \subset M$ the sets

$$W^{\pm}(\Lambda) = \{x \in M \mid \lim_{t \to \pm\infty} d(\Phi_{t}(x), \Lambda) = 0\}$$

are the stable respectively unstable sets of $\Lambda$. Here $d(x, A) = \inf\{|x - y| |y \in A\}$ denotes the distance between $x$ and $A \subset \mathbb{R}^{n}$ (cf. Problem 6.11).

Example. For the previous example we have $W_{+}([-1, 1] \times \{0\}) = \mathbb{R}^{2}$ and $W^{+}(\{(\pm 1, 0)\}) = \mathbb{R}_{\pm} \times \mathbb{R}$.

An invariant set $\Lambda$ is called attracting if $W^{+}(\Lambda)$ is a neighborhood of of $\Lambda$. In this case the set $W^{+}(\Lambda)$ is also called the domain or basin of attraction for $\Lambda$. Moreover, for any positively invariant neighborhood $U$ we have

$$W^{+}(\Lambda) = \bigcup_{t < 0} \Phi_{t}(U).$$

In particular, $W^{+}(\Lambda)$ is invariant and choosing $U$ open we see that the basin of attraction is also open:

Lemma 8.4. Let $\Lambda$ be an invariant attracting set. Then its basin of attraction is invariant and open.

Note that by Lemma 6.4 the boundary $\partial W_{+}(\Lambda) = \overline{W_{+}(\Lambda)} \setminus W_{+}(\Lambda)$ is invariant as well.