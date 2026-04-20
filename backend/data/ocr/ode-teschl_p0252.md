is conserved in this case by Noether’s theorem. For another example see Problem 8.13.

Another important property of Hamiltonian systems is that they are volume preserving. This follows immediately from Lemma 8.8 since the divergence of a Hamiltonian vector field is zero.

**Theorem 8.10** (Liouville). The volume in phase space is preserved under a Hamiltonian flow.

This property can often give important information concerning the motion via Poincaré’s recurrence theorem.

**Theorem 8.11** (Poincaré). Suppose $\Phi$ is a volume preserving bijection of a bounded region $D \subseteq \mathbb{R}^n$. Then in any neighborhood $U \subseteq D$ there is a point $x$ returning to $U$, that is, $\Phi^n(x) \in U$ for some $n \in \mathbb{N}$.

**Proof.** Consider the sequence $\Phi^n(U) \subseteq D$. There are two numbers $l, k$ such that $\Phi^l(U) \cap \Phi^k(U) \neq \emptyset$ since otherwise their volume would be infinite. Hence $U \cap \Phi^{k-l}(U) \neq \emptyset$. If $y$ is a point in the intersection we have $y = \Phi^{k-l}(x)$, which proves the claim.

**Problem 8.7.** Derive the Euler–Lagrange equation (8.36) for $q \in C^2$.

**Problem 8.8.** Consider the Lagrange functions $L_1(q,v) = |v|$ and $L_2(q,v) = \frac{1}{2}|v|^2$ in $\mathbb{R}^n$. What is the corresponding action integral for $L_1$? What are the extremal curves for $L_1$ and for $L_2$? Show that $\mathcal{I}_1(q) \leq \sqrt{2(t_1 - t_0)\mathcal{I}_2(q)}$ with equality if $|\dot{q}| = 1$ (Hint: Cauchy–Schwarz inequality).

Let $M(q)$ be a positive definite matrix for every $q \in \mathbb{R}^n$. Consider $L_1(q,v) = \sqrt{vM(q)v}$ and $L_2(q,v) = \frac{1}{2}vM(q)v$. The action integral corresponding to $L_1$ is called the length of the curve $q$ and extremals are called geodesics. Show that the length is independent of reparametrization.

**Problem 8.9** (Legendre transform). Let $F(v)$ be such that

$$\det \frac{\partial^2 F}{\partial v^2}(v_0) \neq 0.$$

Show that the function $p(v) = \frac{\partial F}{\partial v}(v)$ is a local diffeomorphism near $v_0$ and that the Legendre transform

$$G(p) = pv(p) - F(v(p))$$

is well defined. Show that

$$p = \frac{\partial F}{\partial v}(v) \iff v = \frac{\partial G}{\partial p}(p)$$

and conclude that the Legendre transformation is involutive.