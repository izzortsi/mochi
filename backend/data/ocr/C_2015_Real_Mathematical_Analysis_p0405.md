Thus $\omega'(TX) = t\omega X$, so $T$ multiplies outer measure by $t$ and $T^{-1}$ multiplies outer measure by $1/t$.

If $E \subset M$ is measurable then we claim $TE$ is measurable. Let $X'$ be a test set in $M'$. Then $X = T^{-1}(X')$ is a test set in $M$. Since $T$ multiplies outer measure by $T$ and $E$ is measurable we have

$$\omega'(X') = t\omega X = t(\omega(X \cap E) + \omega(X \cap E^c))$$
$$= t(t^{-1}\omega'(T(X \cap E)) + t^{-1}\omega'(T(X \cap E^c))$$
$$= \omega'(X' \cap TE) + \omega'(X' \cap T(E^c)).$$

Since $TE$ divides each test set $X' \subset M'$ cleanly, $TE$ is measurable. Likewise for $T^{-1}$, so $E \mapsto TE$ bijects $\mathcal{M}$ to $\mathcal{M}'$.

If $t = 1$ then $T$ preserves outer measure and therefore it preserves the measure of measurable sets. It is a meseometry.

**8 Corollary** If $D$ is a nonsingular diagonal $n \times n$ matrix then the linear map $D : \mathbb{R}^n \to \mathbb{R}^n$ sending $v$ to $Dv$ is a meseomorphism of Lebesgue measure. If $E$ is measurable then $m(DE) = |\det D| mE$.

**Proof** Diagonality implies $D$ carries a box to a box and multiplies its volume by $d = |\det D|$. Every covering of $A$ by boxes $\{B_i\}$ is carried by $D$ to a covering of $DA$ by boxes $\{D(B_i)\}$ and their total volume gets multiplied by $d$. Thus $D$ increases outer measure by at most the factor $d$. Similarly, $D^{-1}$ increases outer measure by at most the factor $1/d$. Theorem 7 implies that $D$ is a meseomorphism that multiplies measure by $d$.

**Affine Motions**

An affine motion of $\mathbb{R}^n$ is an invertible linear transformation followed by a translation. Translation does not affect Lebesgue measure, while Corollary 8 describes how a diagonal matrix affects it.

**9 Theorem** An affine motion $T : \mathbb{R}^n \to \mathbb{R}^n$ is a meseomorphism. It multiplies measure by $|\det T|$.

**10 Lemma** The boundary of an $n$-dimensional ball is an $n$-dimensional zero set.

**Proof** We assume $n = 2$. If $\Delta$ is the closed unit disc in the plane then $0 < m\Delta < \infty$ since $[-1/\sqrt{2}, 1/\sqrt{2}]^2 \subset \Delta \subset [-1, 1]^2$. The unit circle $C$ is the boundary of $\Delta$. It