integrable and its integral is $|R|$, so we are justified in using the same notation for area of a general set $S$, namely,

$$|S| = \text{area}(S) = \int \chi_S.$$

**33 Proposition** If $T : \mathbb{R}^2 \to \mathbb{R}^2$ is an isomorphism then for every Riemann measurable set $S \subset \mathbb{R}^2$, $T(S)$ is Riemann measurable and

$$|T(S)| = |\det T||S|.$$

Proposition 33 is a version of the Change of Variables Formula in which $\varphi = T$, $R = S$, and $f = 1$. It remains true for $n$-dimensional volume and leads to a definition of the determinant of a linear transformation as a “volume multiplier.”

**Proof** As is shown in linear algebra, the matrix $A$ that represents $T$ is a product of elementary matrices

$$A = E_1 \cdots E_k.$$

Each elementary $2 \times 2$ matrix is one of the following types:

$$\begin{bmatrix} \lambda & 0 \\ 0 & 1 \end{bmatrix} \quad \begin{bmatrix} 1 & 0 \\ 0 & \lambda \end{bmatrix} \quad \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix} \quad \begin{bmatrix} 1 & \sigma \\ 0 & 1 \end{bmatrix}$$

where $\lambda > 0$. The first three matrices represent isomorphisms whose effect on $I^2$ is obvious: $I^2$ is converted to the rectangles $\lambda I \times I$, $I \times \lambda I$, and $I^2$. In each case the area agrees with the magnitude of the determinant. The fourth matrix is a **shear matrix**. Its isomorphism converts $I^2$ to the parallelogram

$$\Pi = \{(x, y) \in \mathbb{R}^2 : \sigma y \leq x \leq 1 + \sigma y \text{ and } 0 \leq y \leq 1\}.$$

$\Pi$ is Riemann measurable since its boundary is a zero set. By Fubini’s Theorem, we get

$$|\Pi| = \int \chi_\Pi = \int_0^1 \left[ \int_{x=\sigma y}^{x=1+\sigma y} 1 \, dx \right] dy = 1 = \det E.$$

Exactly the same thinking shows that for any rectangle $R$, not merely the unit square, we have

(10) $$|E(R)| = |\det E||R|.$$

We claim that (10) implies that for any Riemann measurable set $S$, $E(S)$ is Riemann measurable and

(11) $$|E(S)| = |\det E||S|.$$