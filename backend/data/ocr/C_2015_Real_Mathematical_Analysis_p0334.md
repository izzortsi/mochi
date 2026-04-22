Proof of the Change of Variables Formula

Recall that $\varphi : U \rightarrow W$ is a $C^1$ diffeomorphism, $f : W \rightarrow \mathbb{R}$ is Riemann integrable, $R$ is a rectangle in $U$, and it is asserted that

$$\int_R f \circ \varphi \cdot |\text{Jac} \varphi| = \int_{\varphi(R)} f.$$

Let $D'$ be the set of discontinuity points of $f$. It is a zero set. Then

$$D = \varphi^{-1}(D')$$

is the set of discontinuity points of $f \circ \varphi$. The $C^1$ Mean Value Theorem implies that $\varphi^{-1}$ is Lipschitz, Lemma 35 implies that $D$ is a zero set, and the Riemann-Lebesgue Theorem implies that $f \circ \varphi$ is Riemann integrable. Since $|\text{Jac} \varphi|$ is continuous, it is Riemann integrable and so is the product $f \circ \varphi \cdot |\text{Jac} \varphi|$. In short, the l.h.s. of (15) makes sense.

Since $\varphi$ is a diffeomorphism, it is a homeomorphism and it carries the boundary of $R$ to the boundary of $\varphi(R)$. The former boundary is a zero set and by Lemma 35 so is the latter. Thus $\chi_{\varphi(R)}$ is Riemann integrable. Choose a rectangle $R'$ that contains $\varphi(R)$. Then the r.h.s. of (15) becomes

$$\int_{\varphi(R)} f = \int_{R'} f \cdot \chi_{\varphi(R)},$$

which also makes sense. It remains to show that the two sides of (15) not only make sense but are equal.

Equip $\mathbb{R}^2$ with the maximum coordinate norm and equip $\mathcal{L}(\mathbb{R}^2, \mathbb{R}^2)$ with the associated operator norm

$$\|T\| = \max\{|T(v)|_{\max} : |v|_{\max} \leq 1\}.$$

Let $\epsilon > 0$ be given. Take any grid $G$ that partitions $R$ into squares $R_{ij}$ of radius $r$. (The smallness of $r$ will be specified below.) Let $z_{ij}$ be the center point of $R_{ij}$ and call

$$A_{ij} = (D\varphi)_{z_{ij}} \quad \varphi(z_{ij}) = w_{ij} \quad \varphi(R_{ij}) = W_{ij}.$$

The Taylor approximation to $\varphi$ on $R_{ij}$ is

$$\phi_{ij}(z) = w_{ij} + A_{ij}(z - z_{ij}).$$

The composite $\psi = \phi_{ij}^{-1} \circ \varphi$ sends $z_{ij}$ to itself and its derivative at $z_{ij}$ is the identity transformation. Uniform continuity of $(D\varphi)_{z}$ on $R$ implies that if $r$ is small