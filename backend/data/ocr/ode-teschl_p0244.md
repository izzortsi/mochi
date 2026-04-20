an attractor to be an attracting set which is topologically transitive. Here a closed invariant set $\Lambda$ is called **topologically transitive** if for any two open sets $U, V \subseteq \Lambda$ there is some $t \in \mathbb{R}$ such that $\Phi(t, U) \cap V \neq \emptyset$. In particular, an attractor cannot be split into smaller attracting sets. Note that $\Lambda$ is topologically transitive if it contains a dense orbit (Problem 8.1).

This implies that only the sets $\{(-1, 0)\}$ or $\{(1, 0)\}$ are attractors for the above example. The domains of attraction are $W^+(\{(\pm 1, 0)\}) = \{(x, y) \in \mathbb{R}^2 | \pm x > 0\}$.

**Example.** As another example let us look at the **Duffing equation**

$$\ddot{x} = -\delta \dot{x} + x - x^3, \quad \delta > 0,$$

(8.12)

from Problem 9.5. It has a sink at $(-1, 0)$, a hyperbolic saddle at $(0, 0)$, and a sink at $(1, 0)$. The basin of attraction of the sink $(-1, 0)$ is bounded by the stable manifold of the hyperbolic saddle $(0, 0)$. The situation for $\delta = 0.3$ is depicted in Figure 8.1.

**Example.** For the van der Pol equation (7.32) the unique periodic orbit is an attractor and its basin of attraction is $\mathbb{R}^2 \setminus \{0\}$. However, not all attractors are fixed points or periodic orbits, as the example in our next section will show.

**Problem 8.1.** Show that a closed invariant set which has a dense orbit is topologically transitive.

**Problem 8.2.** Suppose $L \in C^1(M, \mathbb{R})$. Let $V_R = \{x \in M | L(x) \leq R\}$ be a compact set and suppose the Lie derivative satisfies

$$\text{grad}(L)(x) \cdot f(x) < 0, \quad \forall x : L(x) = R.$$

Then every connected component of $V_R$ is a trapping region.

**Problem 8.3.** Suppose $E$ is a trapping region and let $\Lambda = \omega_+(E)$. Then

$$W^+(\Lambda) = \{x \in M | \omega_+(x) \subseteq \Lambda, \omega_+(x) \neq \emptyset\}.$$

(Hint: Lemma 6.7.)