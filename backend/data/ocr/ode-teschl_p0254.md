they can be characterized as those transformations which leave the symplectic two form

$$\omega((p_1, q_1), (p_2, q_2)) = (p_1, q_1)J(p_2, q_2) = p_1q_2 - p_2q_1$$ (8.56)

invariant.

To find canonical transformations, recall that we have derived Hamilton’s equations from the variational principle (8.42). Hence, our transform will be canonical if the integrands of (8.42) and

$$\tilde{I}(P, Q) = \int_{t_0}^{t_1} P(t)\dot{Q}(t) - K(P(t), Q(t))dt$$ (8.57)

only differ by a total differential. By $H(p, q) = K(P, Q)$ we are led to

$$pdq - PdQ = dS,$$ (8.58)

where $dq$ has to be understood as $dq(t) = \dot{q}(t)dt$ for a given curve $q(t)$. The function $S$ is called a generating function and could depend on all four variables $p, q, P$, and $Q$. However, since only two of them are independent in general, it is more natural to express two of them by the others.

For example, we could use

$$S = S_1(q, Q)$$ (8.59)

and

$$pdq - PdQ = \frac{\partial S_1}{\partial q}dq + \frac{\partial S_1}{\partial Q}dQ$$ (8.60)

shows we have

$$p = \frac{\partial S_1}{\partial q}, \quad P = -\frac{\partial S_1}{\partial Q},$$ (8.61)

since the previous equation must hold for all curves $q(t)$ and $Q(t)$. Moreover, if we require

$$\det \frac{\partial S_1}{\partial q\partial Q} \neq 0,$$ (8.62)

we can solve $p = \frac{\partial S_1(q, Q)}{\partial q}$ locally for $Q = Q(p, q)$ and hence our canonical transformation is given by

$$(P, Q) = \left( \frac{\partial S_1}{\partial Q}(q, Q(p, q)), Q(p, q) \right).$$ (8.63)

Similarly we could choose

$$S = -PQ + S_2(P, q),$$ (8.64)

where

$$pdq - PdQ = -QdP - PdQ + \frac{\partial S_2}{\partial P}dP + \frac{\partial S_2}{\partial Q}dQ$$ (8.65)