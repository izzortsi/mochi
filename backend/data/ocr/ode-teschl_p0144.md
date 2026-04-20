Please note that this theorem does not say that all the bad terms are sitting in $(z - z_0)^M$. In fact, $U(z)$ might have an essential singularity at $z_0$. However, if this is not the case, the singularity is called regular and we can easily absorb the pole of $U(z)$ in the $(z - z_0)^M$ term by using

$$W(z) = U(z)(z - z_0)^m (z - z_0)^{M-m\mathbb{I}}. \tag{4.94}$$

But when can this be done? We expect this to be possible if the singularity of $A(z)$ is not too bad. However, the equation $w' = \frac{1}{z^2} w$ has the solution $w(z) = \exp(-\frac{1}{z})$, which has an essential singularity at 0. Hence our only hope left are first-order poles. We will say that $z_0$ is a simple singularity (or weak singularity) of our system if $A(z)$ has a pole of (at most) first order at $z_0$.

**Theorem 4.9.** Suppose $A(z)$ is analytic in $\Omega = \{z \in \mathbb{C}|0 < |z - z_0| < \varepsilon\}$ and has a simple singularity at $z_0$. Then $W(z)$ is of the form (4.92) and $U(z)$ can be chosen analytic in $\{z \in \mathbb{C}||z - z_0| < \varepsilon\}$.

**Proof.** It is no restriction to consider $z_0 = 0$ and it suffices to show that $U(z)$ can have at most a pole. Let $w(z)$ be any solution. Moreover, for given $r_0 > 0$ we can find a number $m$ such that $\|A(z)\| \leq \frac{m}{|z|}$ for $|z| \leq r_0$. Using polar coordinates $z = r\mathrm{e}^{\mathrm{i}\varphi}$ we have

$$|w(r\mathrm{e}^{\mathrm{i}\varphi})| = |w(r_0\mathrm{e}^{\mathrm{i}\varphi}) + \int_r^{r_0} A(s\mathrm{e}^{\mathrm{i}\varphi})w(s\mathrm{e}^{\mathrm{i}\varphi})\mathrm{e}^{\mathrm{i}\varphi}ds|$$

$$\leq |w(r_0\mathrm{e}^{\mathrm{i}\varphi})| + \int_r^{r_0} \frac{m}{s}|w(s\mathrm{e}^{\mathrm{i}\varphi})|ds$$

for $0 < r \leq r_0$. Applying Gronwall and taking the maximum over all $\varphi$ we obtain

$$|w(z)| \leq \sup_{\zeta;|\zeta|=r_0} |w(\zeta)| \left| \frac{r_0}{z} \right|^m,$$

which is the desired estimate.

The converse of this result is in general not true (except in one dimension; cf. Lemma 4.4). However,

**Lemma 4.10.** If $z_0$ is a regular singularity, then $A(z)$ has at most a pole at $z_0$.

**Proof.** This follows from

$$A(z) = U'(z)U(z)^{-1} + \frac{1}{z - z_0}U(z)MU(z)^{-1},$$

since $\det(U(z))$ can have at most a finite order zero, and hence the entries of $U(z)^{-1}$ can have at most poles of the same order.