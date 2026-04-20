Lemma 2.14. Let $\phi(t)$ be a solution of (2.10) defined on the interval $(t_-, t_+)$. Then there exists an extension to the interval $(t_-, t_+ + \varepsilon)$ for some $\varepsilon > 0$ if and only if there exists a sequence $t_m \in (t_-, t_+)$ such that

$$\lim_{m \to \infty} (t_m, \phi(t_m)) = (t_+, y) \in U. \tag{2.64}$$

Similarly for $t_-$.

Proof. Clearly, if there is an extension, then (2.64) holds for any sequence $t_m \uparrow t_+$. Conversely, suppose there is a sequence satisfying (2.64). We first show that in this case

$$\lim_{t \uparrow t_+} \phi(t) = y. \tag{2.65}$$

Intuitively this follows, since otherwise the solution would need to oscillate faster and faster as $t$ approaches $t_+$. Consequently its derivative would need to grow, which is impossible since $f(t, x)$ is bounded near $y$. More precisely, since $U$ is open there is some $\delta > 0$ such that $V = [t_+ - \delta, t_+] \times \overline{B_\delta(y)} \subset U$ and $M = \max_{(t, x) \in V} |f(t, x)| < \infty$. Moreover, after maybe passing to a subsequence, we can assume that $t_m \in (t_+ - \delta, t_+)$, $\phi(t_m) \in B_\delta(y)$, and $t_m < t_{m+1}$. If (2.65) were wrong, we could find a sequence $\tau_m \uparrow t_+$ such that $|\phi(\tau_m) - y| \geq \gamma > 0$. Without loss we can choose $\gamma < \delta$ and $\tau_m \geq t_m$. Moreover, by the intermediate value theorem we can even require $|\phi(\tau_m) - y| = \gamma$ and $|\phi(t) - y| < \delta$ for $t \in [t_m, \tau_m]$.

But then

$$0 < \gamma = |\phi(\tau_m) - y| \leq |\phi(\tau_m) - \phi(t_m)| + |\phi(t_m) - y|$$

$$\leq \int_{t_m}^{\tau_m} |f(s, \phi(s))| ds + |\phi(t_m) - y| \leq M |\tau_m - t_m| + |\phi(t_m) - y|,$$

where the right-hand side converges to 0 as $m \to \infty$. A contradiction and thus (2.65) holds.

Now take a solution $\tilde{\phi}(t)$ of the IVP $x(t_+) = y$ defined on the interval $(t_+ - \varepsilon, t_+ + \varepsilon)$. As before, we can glue $\phi(t)$ and $\tilde{\phi}(t)$ at $t_+$ to obtain a function on $(t_-, t_+ + \varepsilon)$. This function is continuous by construction and the limits of its left and right derivative are both equal to $f(t_+, y)$. Hence it is differentiable at $t = t_+$ and thus a solution defined on $(t_-, t_+ + \varepsilon)$.

Our final goal is to show that solutions exist for all $t \in \mathbb{R}$ if $f(t, x)$ grows at most linearly with respect to $x$. But first we need a better criterion which does not require a complete knowledge of the solution.

Corollary 2.15. Let $\phi(t)$ be a solution of (2.10) defined on the interval $(t_-, t_+)$. Suppose there is a compact set $[t_0, t_+] \times C \subset U$ such that $\phi(t_m) \in C$ for some sequence $t_m \in [t_0, t_+)$ converging to $t_+$. Then there exists an extension to the interval $(t_-, t_+ + \varepsilon)$ for some $\varepsilon > 0$.