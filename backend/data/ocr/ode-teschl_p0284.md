Next we turn to the following **Hammerstein integral equation** which we encountered in Section 9.2.

$$K_{\lambda}(x)(t) = k(t, \lambda) + \int_{0}^{\infty} \kappa(s - t, \lambda) K(s, x(s), \lambda) ds,$$

(9.56)

where

$$k \in C([0, \infty) \times \Lambda, \mathbb{R}^n), \kappa \in C(\mathbb{R} \times \Lambda, \mathbb{R}^n), K \in C([0, \infty) \times V \times \Lambda, \mathbb{R}^n),$$

(9.57)

with $\Lambda \subset \mathbb{R}^n$ compact. Now we are going to show the analog of Theorem 9.16 for this equation, which we used in Section 9.2.

We assume that for every compact set $C \subset V$, $k$ and $K$ are uniformly continuous and bounded

$$|k(t, \lambda)| \leq m, \quad |K(t, x, \lambda)| \leq M, \quad (t, x, \lambda) \in [0, \infty) \times C \times \Lambda,$$

(9.58)

and that there is an integrable function $\alpha(s)$ such that

$$|\kappa(s + t, \lambda)| \leq \alpha(s) \quad \text{for} \quad |t| \leq \varepsilon.$$

(9.59)

In addition, suppose

$$|K(s, x, \lambda) - K(s, y, \lambda)| \leq L |x - y|, \quad x, y \in V,$$

(9.60)

where $L$ is independent of $\lambda$, and that

$$L \int_{-\infty}^{\infty} |\kappa(s, \lambda)| ds \leq \theta < 1.$$

(9.61)

**Theorem 9.18.** Let $K_{\lambda}$ satisfy the requirements (9.57)–(9.61) from above. Then the fixed point equation $K_{\lambda}(x) = x$ has a unique solution $\overline{x}(t, \lambda) \in C([0, \infty) \times \Lambda, V)$.

Assume in addition that all partial derivatives of order up to $r$ with respect to $\lambda$ and $x$ of $k(t, \lambda), \kappa(s, \lambda)$, and $K(s, x, \lambda)$ are continuous. Furthermore, for all partial derivatives of order up to $r$ with respect to $\lambda$ of $\kappa(s, \lambda)$ there are dominating functions as in (9.59) and all partial derivatives of order up to $r$ with respect to $\lambda$ and $x$ of $K(s, x, \lambda)$ are uniformly continuous and bounded when $x$ is restricted to compacts as in (9.58). Then all partial derivatives of order up to $r$ with respect to $\lambda$ of $\overline{x}(t, \lambda)$ are continuous.

**Proof.** As in Theorem 9.16 it is no restriction to assume $k(t, \lambda) \equiv 0$. Choose

$$\delta = (1 - \theta)^{-1} \|K_{\lambda}(0)\|,$$

then $\|x\| \leq \delta$ implies

$$\|K_{\lambda}(x)\| \leq \int_{0}^{\infty} |\kappa(s - t, \lambda)| \left(|K(s, 0, \lambda)| + |K(s, x(s), \lambda) - K(s, 0, \lambda)|\right) ds$$

$$\leq \|K_{\lambda}(0)\| + \theta \|x\| \leq \delta$$