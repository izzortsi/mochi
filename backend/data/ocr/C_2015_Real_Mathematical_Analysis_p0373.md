Upshot Except for the harmless orthogonal factor $O$, an isomorphism is no more geometrically complicated than a diagonal matrix with positive entries.

54 Polar Form Theorem Each isomorphism $T : \mathbb{R}^n \to \mathbb{R}^n$ factors as $T = OP$, where $O$ is orthogonal and $P$ is PDS.

Proof Recall that the transpose of $T : \mathbb{R}^n \to \mathbb{R}^n$ is the unique isomorphism $T^t$ satisfying the equation

$$\langle Tv, w \rangle = \langle v, T^t w \rangle$$

for all $v, w \in \mathbb{R}^n$. Thus the condition $\langle Pv, w \rangle = \langle v, Pw \rangle$ in the definition of PDS means exactly that $P^t = P$.

Let $T$ be a given isomorphism $T : \mathbb{R}^n \to \mathbb{R}^n$. We must find its factors $O$ and $P$. We just write them down as follows. Consider the composite $T^t \circ T$. It is PDS because

$$(T^t T)^t = (T^t)(T^t)^t = T^t T$$ and $$\langle T^t Tv, v \rangle = \langle Tv, Tv \rangle > 0.$$

Every PDS transformation has a unique PDS square root, just as does every positive real number $r$. (To see this, take the diagonal matrix with entries $\sqrt{\lambda_i}$ in place of $\lambda_i$.) Thus $T^t T$ has a PDS square root and this is the factor $P$ that we seek,

$$P^2 = T^t T.$$

By $P^2$ we mean the composite $P \circ P$. In order for the formula $T = OP$ to hold with this choice of $P$ we must have $O = TP^{-1}$. To finish the proof we merely must check that $TP^{-1}$ actually is orthogonal. Magically,

$$\langle Ov, Ow \rangle = \langle TP^{-1}v, TP^{-1}w \rangle = \langle P^{-1}v, T^t TP^{-1}w \rangle$$
$$= \langle P^{-1}v, Pw \rangle = \langle P^t P^{-1}v, w \rangle = \langle PP^{-1}v, w \rangle$$
$$= \langle v, w \rangle$$

which implies that $O$ is orthogonal.

55 Corollary Under any invertible $T : \mathbb{R}^n \to \mathbb{R}^n$ the unit ball is sent to an ellipsoid.

Proof Write $T$ in polar form $T = OP$. The image of the unit ball under $P$ is an ellipsoid. The orthogonal factor $O$ merely rotates the ellipsoid.