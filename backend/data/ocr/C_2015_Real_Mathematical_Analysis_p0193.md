The shaded rectangle prevents the integral of $f$ being zero.

Theorem 18, we have

$$f(x_0) \delta = \int_a^b g(x) \, dx \leq \int_a^b f(x) \, dx = 0,$$

a contradiction. Hence $f(x) = 0$ at every continuity point.

Corollary 28 and Exercises 33, 35, 47, 49 deal with the way that Riemann integrability behaves under composition. If $f \in \mathbb{R}$ and $\phi$ is continuous then $\phi \circ f \in \mathbb{R}$, although the composition in the other order, $f \circ \phi$, may fail to be integrable. Continuity is too weak a hypothesis for such a “change of variable.” See Exercise 35. In particular, the composite of Riemann integrable functions may fail to be Riemann integrable. See Exercise 33. However, we have the following result.

32 Corollary If $f$ is Riemann integrable and $\psi$ is a homeomorphism whose inverse satisfies a Lipschitz condition then $f \circ \psi$ is Riemann integrable.

Proof More precisely, we assume that $f : [a, b] \to \mathbb{R}$ is Riemann integrable, $\psi$ bijects $[c, d]$ onto $[a, b]$, $\psi(c) = a$, $\psi(d) = b$, and for some constant $K$ and all $s, t \in [a, b]$ we have

$$|\psi^{-1}(s) - \psi^{-1}(t)| \leq K|s - t|.$$

We then assert that $f \circ \psi$ is a Riemann integrable function $[c, d] \to \mathbb{R}$.

Let $D$ be the set of discontinuity points of $f$. Then $D' = \psi^{-1}(D)$ is the set of discontinuity points of $f \circ \psi$. Let $\epsilon > 0$ be given. There is an open covering of $D$ by intervals $(a_i, b_i)$ whose total length is $\leq \epsilon/K$. The homeomorphic intervals $(a'_i, b'_i) = \psi^{-1}(a_i, b_i)$ cover $D'$ and have total length

$$\sum b'_i - a'_i \leq \sum K(b_i - a_i) \leq \epsilon.$$

Therefore $D'$ is a zero set and by the Riemann-Lebesgue Theorem, $f \circ \psi$ is integrable.