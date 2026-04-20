not hard to see that

$$\omega_{+}(B_{r}(0)) = [-1, 1] \times \{0\}, \quad r > 0.$$ (8.4)

On the other hand,

$$\bigcup_{x \in B_{r}(0)} \omega_{+}(x) = \{(-1, 0), (0, 0), (1, 0)\}.$$ (8.5)

In particular $\omega_{+}(B_{r}(0))$ contains the three fixed points plus their connecting orbits. That is, all orbits which lie entirely in $B_{r}(0)$. This is also true in general as we will see in Theorem 8.3 below.

The following two lemmas are the analogs of Lemma 6.5 and Lemma 6.6.

**Lemma 8.1.** The set $\omega_{\sigma}(X)$ is a closed invariant set given by

$$\omega_{\sigma}(X) = \bigcap_{\sigma t \geq 0} \Phi(t, \overline{\gamma_{\sigma}(X)}) = \bigcap_{\sigma t \geq 0} \bigcup_{\sigma(s-t) \geq 0} \Phi(s, X).$$ (8.6)

**Proof.** The intersection of closed $\sigma$-invariant sets is again a closed $\sigma$-invariant set by Lemma 6.4 and invariance follows literally as in Lemma 6.5. Hence it suffices to show (8.6).

We only prove the $\sigma = +$ case. First of all note that since $\Phi(t,.)$ is a diffeomorphism we have

$$\Phi(t, \overline{\gamma_{+}(X)}) = \Phi(t, \gamma_{+}(X)) = \bigcup_{s \geq t} \Phi(s, X).$$

To see $\bigcap_{t \geq 0} \Phi(t, \overline{\gamma_{+}(X)}) \subseteq \omega_{+}(X)$ choose some $y \in \bigcap_{t \geq 0} \Phi(t, \gamma_{+}(X))$. Then, for every $n \in \mathbb{N}$ we can find some $y_{n} = \Phi(n + s_{n}, x_{n}) \in \Phi(n, \gamma_{+}(X))$ such that $|y - y_{n}| < \frac{1}{n}$. Setting $t_{n} = n + s_{n}$ we have found a sequence $t_{n} \to \infty$ and points $x_{n} \in X$ such that $\Phi(t_{n}, x_{n}) \to y$, that is, $y \in \omega_{\sigma}(X)$.

Conversely, to show $\omega_{+}(X) \subseteq \bigcap_{t \geq 0} \Phi(t, \overline{\gamma_{+}(X)})$ choose some $y \in \omega_{+}(X)$. Then there exists $t_{n} \to \infty$ and $x_{n} \in X$ such that $y_{n} = \Phi(t_{n}, x_{n}) \to y$. This implies $y_{n} \in \Phi(t, \gamma_{+}(X))$ for $t_{n} > t$ and thus $y \in \overline{\Phi(t, \gamma_{+}(X))}$ for every $t \geq 0$.

We will only consider the case $\sigma = +$ from now on for notational simplicity. Since by the last equality in (8.6) the sets $\Phi(t, \overline{\gamma_{\sigma}(X)})$ are decreasing, we see

$$\omega_{+}(X) = \bigcap_{t \geq t_{0}} \Phi(t, \overline{\gamma_{+}(X)}) = \bigcap_{n \in \mathbb{N}} \Phi(n, \overline{\gamma_{+}(X)}).$$ (8.7)

So if $\overline{\gamma_{+}(X)} \neq \emptyset$ is compact, $\omega_{+}(X)$ is the intersection of countably many nonempty compact nesting sets and thus it is also a nonempty compact set by the finite intersection property of compact sets.