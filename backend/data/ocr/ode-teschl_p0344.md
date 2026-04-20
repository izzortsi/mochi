where $y_n$ is defined by $f^n(x,y) \in J_{y_n}$ and $x_n$ is defined by $g^n(x,y) \in K_{x_n}$. As in the case of the tent map it is easy to see $\varphi$ is continuous (exercise). Now what about the action of $\sigma = \varphi \circ f \circ \varphi^{-1}$? By construction, $\sigma$ shifts $y_n$ to the left, $\sigma(s)_n = y_{n+1}$, $n \geq 0$, and $\sigma^{-1}$ shifts $x_n$ to the left, $\sigma^{-1}(s)_n = x_{n-1}$, $n < 0$. Hence $\sigma$ shifts $x_n$ to the right, $\sigma(s)_n = x_{n-2}$, $n < -1$, and we need to figure out what the new first element $\sigma(s)_{-1}$ is. Well, since $(x,y) \in J_{y_0}$ is equivalent to $f(x,y) \in K_{y_0}$, we see that this element is $\sigma(s)_{-1} = y_0$ and hence $\sigma$ just shifts $s_n$ to the left, $\sigma(s)_n = s_{n+1}$. In summary, we have shown

**Theorem 13.1.** The Smale horseshoe map has an invariant Cantor set $\Lambda$ on which the dynamics is equivalent to the double sided shift on two symbols. In particular it is chaotic.

### 13.2. The Smale–Birkhoff homoclinic theorem

In this section I will present the higher dimensional analog of Theorem 11.24.

Let $f$ be a diffeomorphism $(C^1)$ and suppose $p$ is a hyperbolic fixed point. A homoclinic point is a point $q \neq p$ which is in the stable and unstable manifold. If the stable and unstable manifold intersect transversally at $q$, then $q$ is called **transverse**. This implies that there is a homoclinic orbit $\gamma(q) = \{q_n\}$ such that $\lim_{n \to \infty} q_n = \lim_{n \to -\infty} q_n = p$. Since the stable and unstable manifolds are invariant, we have $q_n \in W^s(p) \cap W^u(p)$ for all $n \in \mathbb{Z}$. Moreover, if $q$ is transversal, so are all $q_n$ since $f$ is a diffeomorphism.

The typical situation is depicted below.