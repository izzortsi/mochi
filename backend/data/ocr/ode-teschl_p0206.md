Since $f$ is bounded it is complete by Theorem 2.17. The singularities are given by $(\mathbb{Z}\pi/2, 0)$. One further verifies that for $x \in (-\pi/2, \pi/2) \times \mathbb{R}$ we have

$$\Phi(t, x) = \begin{pmatrix} \arctan(r e^{\tau(t)} \cos(\tau(t) + \theta)) \\ r e^{\tau(t)} \sin(\tau(t) + \theta) \end{pmatrix},$$

(6.20)

where $(r, \theta)$ are the polar coordinates of $(\tan(x_1), x_2)$ and

$$\dot{\tau}(t) = \frac{1}{\sqrt{1 + r^2 e^{2\tau(t)} \cos(\tau(t))^2}}, \quad \tau(0) = 0.$$

(6.21)

Clearly, $\tau \in C^\infty(\mathbb{R}, \mathbb{R})$ is a diffeomorphism and hence $\omega_-(x) = (0, 0)$ and $\omega_+(x) = \{\pm \frac{\pi}{2}\} \times \mathbb{R}$ if $x \neq (0, 0)$. Moreover,

$$\Phi(t, (\pm \frac{\pi}{2}, x_2)) = \begin{pmatrix} \pm \frac{\pi}{2} \\ x_2 \pm t \end{pmatrix}$$

(6.22)

and hence $\omega_-((\pm \frac{\pi}{2}, 0)) = \omega_+((\pm \frac{\pi}{2}, 0)) = \emptyset$.

Thus far $\Phi$ is only given for $x \in [-\frac{\pi}{2}, \frac{\pi}{2}] \times \mathbb{R}$. The remaining parts of the plane can be investigated using the transformation $(t, x_1, x_2) \rightarrow (-t, x_1 \pm \pi, x_2)$.

A nonempty, compact, $\sigma$ invariant set $C$ is called **minimal** if it contains no proper $\sigma$ invariant subset possessing these three properties. Note that for such a minimal set we have $C = \omega_+(x) = \omega_-(x)$ for every $x \in C$. One example of such a minimal set is a periodic orbit. In fact, in two dimensions this is the only example (Corollary 7.12). However, in three or more dimensions orbits can be dense on a compact hypersurface and in such a case the hypersurface cannot be split into smaller closed invariant sets.

**Lemma 6.8.** Every nonempty, compact ($\sigma$) invariant set $C \subseteq M$ contains a minimal ($\sigma$) invariant set.

If in addition $C$ is homeomorphic to a closed $m$-dimensional disc (where $m$ is not necessarily the dimension of $M$), it contains a fixed point.

**Proof.** The first part is a standard argument from general topology (cf., e.g., [25]). Consider the family $\mathcal{F}$ of all compact ($\sigma$) invariant subsets of $C$ partially ordered by inclusion $\subseteq$. Every chain in $\mathcal{F}$ has a minimal element by the finite intersection property of compact sets. So by Zorn’s lemma there exists a minimal member of $\mathcal{F}$.

Now let $C$ be homeomorphic to a disc and fix $\sigma = +$ for simplicity. Pick a sequence $T_j \rightarrow 0$. By Brouwer’s theorem $\Phi(T_j, .) : C \rightarrow C$ has a fixed point $x_j$. Since $C$ is compact, we can assume $x_j \rightarrow x$ after maybe passing to a subsequence. Fix $t > 0$ and pick $n_j \in \mathbb{N}_0$ such that $0 \leq t - n_j T_j < T_j$. Then

$$\Phi(t, x) = \lim_{j \to \infty} \Phi(n_j T_j, x_j) = \lim_{j \to \infty} x_j = x$$