This is possible if and only if $\det(M(t_0)) \neq 0$ (see Section 3.8). Note however, that $Q(t_0)$ is not unique.

That $\det(M(t_0)) \neq 0$ follows from Liouville’s formula (3.91) which implies that the determinant of the monodromy matrix

$$\det(M(t_0)) = \exp \left( \int_{t_0}^{t_0+T} \text{tr}(A(s)) ds \right) = \exp \left( \int_{0}^{T} \text{tr}(A(s)) ds \right)$$

is independent of $t_0$ and positive.

Now writing

$$\Pi(t, t_0) = P(t, t_0) \exp((t - t_0)Q(t_0))$$

(3.123)

a straightforward computation shows that

$$P(t + T, t_0) = \Pi(t + T, t_0) M(t_0)^{-1} \text{e}^{-(t - t_0)Q(t_0)}$$

$$= \Pi(t + T, t_0 + T) \text{e}^{-(t - t_0)Q(t_0)}$$

$$= \Pi(t, t_0) \text{e}^{-(t - t_0)Q(t_0)} = P(t, t_0)$$

(3.124)

as anticipated. In summary we have proven Floquet’s theorem.

**Theorem 3.15** (Floquet). Suppose $A(t)$ is periodic. Then the principal matrix solution of the corresponding linear system has the form

$$\Pi(t, t_0) = P(t, t_0) \exp((t - t_0)Q(t_0)),$$

(3.125)

where $P(., t_0)$ has the same period as $A(.)$ and $P(t_0, t_0) = \mathbb{I}$.

**Example.** Consider the one-dimensional case

$$\dot{x} = a(t)x, \quad a(t + T) = a(t).$$

Then the principal matrix solution is

$$\Pi(t, t_0) = \text{e}^{\int_{t_0}^{t} a(s) ds}$$

and the monodromy matrix is

$$M(t_0) = \text{e}^{\int_{t_0}^{t+T} a(s) ds} = \text{e}^{T \bar{a}}, \quad \bar{a} = \frac{1}{T} \int_{0}^{T} a(s) ds.$$

Moreover,

$$P(t, t_0) = \text{e}^{\int_{t_0}^{t} (a(s) - \bar{a}) ds}, \quad Q(t_0) = \bar{a}.$$

Note that any fundamental matrix solution can be written in this form (Problem 3.41). Moreover, note that $Q(t_0)$ will be complex even if $A(t)$ is real unless all real eigenvalues of $M(t_0)$ are positive. However, since $A(t)$ also has the period $2T$ and $\Pi(t_0 + 2T, t_0) = M(t_0)^2$, we infer from Lemma 3.34.