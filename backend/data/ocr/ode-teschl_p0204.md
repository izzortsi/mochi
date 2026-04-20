Lemma 6.3. Let $x \in M$ and suppose that the forward (resp. backward) orbit lies in a compact subset $C$ of $M$. Then $x$ is $+$ (resp. $-$) complete.

Clearly a periodic point is complete. If all points are complete, the vector field is called complete. Thus $f$ being complete means that $\Phi$ is globally defined, that is, $W = \mathbb{R} \times M$.

A set $U \subseteq M$ is called $\sigma$ invariant, $\sigma \in \{\pm\}$, if

$$\gamma_{\sigma}(x) \subseteq U, \quad \forall x \in U,$$

(6.17)

and invariant if it is both $\pm$ invariant, that is, if $\gamma(x) \subseteq U$.

If $C \subseteq M$ is a compact $\sigma$ invariant set, then Lemma 6.3 implies that all points in $C$ are $\sigma$ complete.

Lemma 6.4. (i). Arbitrary intersections and unions of $\sigma$ invariant sets are $\sigma$ invariant. Moreover, the closure of a $\sigma$ invariant set is again $\sigma$ invariant.

(ii). If $U$ and $V$ are invariant, so is the complement $U \setminus V$.

Proof. Only the last statement of (i) is nontrivial. Let $U$ be $\sigma$ invariant and recall that $x \in \overline{U}$ implies the existence of a sequence $x_n \in U$ with $x_n \rightarrow x$. Fix $t \in I_x$. Then (since $W$ is open) for $N$ sufficiently large we have $t \in I_{x_n}$, $n \geq N$, and $\Phi(t, x) = \lim_{n \to \infty} \Phi(t, x_n) \in \overline{U}$.

Concerning (ii) let $x \in U \setminus V$. Then, if $\gamma(x) \cap V$ contains some point $y$, we must have $\gamma(y) = \gamma(x) \subseteq V$ contradicting our assumption $x \notin V$. Thus $\gamma(x) \subseteq U \setminus V$.

One of our main aims will be to describe the long-time asymptotics of solutions. For this we next introduce the set where an orbit eventually accumulates:

The $\omega_{\pm}$-limit set of a point $x \in M$, $\omega_{\pm}(x)$, is the set of those points $y \in M$ for which there exists a sequence $t_n \rightarrow \pm\infty$ with $\Phi(t_n, x) \rightarrow y$.

Clearly, $\omega_{\pm}(x)$ is empty unless $x$ is $\pm$ complete. Observe, that $\omega_{\pm}(x) = \omega_{\pm}(y)$ if $y \in \gamma(x)$ (if $y = \Phi(t, x)$ we have $\Phi(t_n, y) = \Phi(t_n, \Phi(t, x)) = \Phi(t_n + t, x)$). Hence $\omega_{\pm}(x)$ depends only on the orbit $\gamma(x)$. Moreover,

Lemma 6.5. The set $\omega_{\pm}(x)$ is a closed invariant set.

Proof. To see that $\omega_{\pm}(x)$ is closed, let $y$ be in its closure and choose $y_n \in \omega_{\pm}(x)$ such that $|y - y_n| < (2n)^{-1}$ and $t_n \rightarrow \pm\infty$ such that $|\Phi(t_n, x) - y_n| < (2n)^{-1}$. Then $|\Phi(t_n, x) - y| < n^{-1}$ and thus $y \in \omega_{\pm}(x)$.

The set $\omega_{\pm}(x)$ is invariant since if $\Phi(t_n, x) \rightarrow y$ we have $\Phi(t_n + t, x) = \Phi(t, \Phi(t_n, x)) \rightarrow \Phi(t, y)$ for every $t \in I_y$.