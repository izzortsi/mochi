Proof. Let $\phi_{\delta}$ be a smooth bump function such that $\phi_{\delta}(x) = 0$ for $|x| \leq \delta$ and $\phi_{\delta}(x) = 1$ for $|x| \geq 2\delta$. Then the function $g_{\delta} = (1 - \phi_{\delta})(f - A)$ satisfies the assumptions of Lemma 9.7 (show this) for $\delta$ sufficiently small. Since $f$ and $f_{\delta}$ coincide for $|x| \leq \delta$ the homeomorphism for $f_{\delta}$ is also the right one for $f$ for $x$ in the neighborhood $\varphi^{-1}(\{x | |x| \leq \delta\})$.

Let me emphasize that the homeomorphism $\varphi$ is in general not differentiable! In particular, this shows that the stable and unstable sets $W^{+}(0)$ and $W^{-}(0)$ (defined in Section 10.2) are given (locally) by homeomorphic images of the corresponding linear ones $E^{+}(A)$ and $E^{-}(A)$, respectively. In fact, it can even be shown that (in contradistinction to $\varphi$) they are differentiable manifolds as we will see in a moment.

We will assume that $f$ is a local diffeomorphism for the rest of this section.

We define the **stable** respectively **unstable manifolds** of a fixed point $p$ to be the set of all points which converge exponentially to $p$ under iterations of $f$ respectively $f^{-1}$, that is,

$$M^{\pm}(p) = \{x \in M | \sup_{\pm m \in \mathbb{N}_0} \alpha^{\mp m}|f^m(x) - p| < \infty \text{ for some } \alpha \in (0,1)\}.$$

Both sets are obviously invariant under the flow and are called the **stable** and **unstable manifold** of $p$.

It is no restriction to assume that $p = 0$. In the linear case we clearly have $M^{\pm}(0) = E^{\pm}(A)$.

Our goal is to show, the sets $M^{\pm}(x_0)$ are indeed manifolds (smooth) tangent to $E^{\pm}(A)$. As in the continuous case, the key idea is to formulate our problem as a fixed point equation which can then be solved by iteration.

Now writing

$$f(x) = Ax + g(x)$$

our difference equation can be rephrased as

$$x(m) = A^m x_0 + \sum_{j=0}^{m-1} A^{m-j} g(x(j))$$

by Theorem 10.3.

Next denote by $P^{\pm}$ the projectors onto the stable, unstable subspaces $E^{\pm}(A)$. Moreover, abbreviate $x_{\pm} = P^{\pm} x_0$ and $g_{\pm}(x) = P^{\pm} g(x)$.

What we need is a condition on $x_0 = x_+ + x_-$ such that $x(m)$ remains bounded. If we project out the unstable part of our summation equation

$$x_{-} = A^{-m} x_{-}(m) - \sum_{j=0}^{m-1} A^{j} g_{-}(x(j)).$$