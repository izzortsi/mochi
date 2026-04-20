there is an open neighborhood $(-\varepsilon(x), \varepsilon(x)) \times U(x)$ of $(0, x)$ around each point $x \in \gamma$ such that $\Phi$ is defined and $C^k$ on this neighborhood. Since $\gamma$ is compact, finitely many of the neighborhoods $U(x)$ cover $\gamma$ and hence we can find an $\varepsilon > 0$ and an open neighborhood $U_0$ of $\gamma$ such that $\Phi$ is defined on $(-\varepsilon, \varepsilon) \times U_0$. Next, pick $m \in \mathbb{N}$ so large that $\frac{t_0}{m} < \varepsilon$ such that $K \in C^k(U_0, M)$, where $K : U_0 \to M$, $K(x) = \Phi \frac{t_0}{m}$. Furthermore, $K^j \in C^k(U_j, M)$ for any $0 \leq j \leq m$, where $U_j = K^{-j}(U_0) \subseteq U_0$ is open. Since $x_0 = K^{-j}(\Phi(\frac{j}{m}t_0, x_0))$ we even have $x_0 \in U_j$, that is, $U_j$ is nonempty. In particular,

$$\Phi(t, x) = \Phi(t - t_0, \Phi(t_0, x)) = \Phi(t - t_0, K^m(x))$$

is defined and $C^k$ for all $(t, x) \in (t_0 - \varepsilon, t_0 + \varepsilon) \times U_m.$

In particular, choosing $s = -t$ respectively $t = -s$ in (6.11) shows that $\Phi_t(.) = \Phi(t,.)$ is a local diffeomorphism with inverse $\Phi_{-t}(.)$. Note also that if we replace $f \rightarrow -f$, then $\Phi(t, x) \rightarrow \Phi(-t, x)$.

**Example.** Let $M = \mathbb{R}$ and $f(x) = x^3$. Then $W = \{(t, x)|2tx^2 < 1\}$ and $\Phi(t, x) = \frac{x}{\sqrt{1-2x^2t}}$. $T_{-}(x) = -\infty$ and $T_{+}(x) = 1/(2x^2).$

A point $x_0$ with $f(x_0) = 0$ is called a fixed point. Away from such points all vector fields look locally the same.

**Lemma 6.2** (Straightening out of vector fields). Suppose $f(x_0) \neq 0$. Then there is a local coordinate transform $y = \varphi(x)$ such that $\dot{x} = f(x)$ is transformed to

$$\dot{y} = (1, 0, \ldots, 0).$$

(6.12)

**Proof.** Abbreviate $\delta_1 = (1, 0, \ldots, 0)$. It is no restriction to assume $x_0 = 0$. After a linear transformation we see that it is also no restriction to assume $f(0) = \delta_1$.

Consider all points starting on the plane $x_1 = 0$. Then the transform $\varphi$ we are looking for should map the point $\Phi(t, (0, x_2, \ldots, x_n))$ to $(0, x_2, \ldots, x_n) + t(1, 0, \ldots, 0) = (t, x_2, \ldots, x_n).$

Hence $\varphi$ should be the inverse of

$$\psi((x_1, \ldots, x_n)) = \Phi(x_1, (0, x_2, \ldots, x_n)),$$