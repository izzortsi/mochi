Here is a typical application of the Stone-Weierstrass Theorem: Consider a continuous vector field $F : \Delta \to \mathbb{R}^2$ where $\Delta$ is the closed unit disc in the plane, and suppose that we want to approximate $F$ by a vector field that vanishes (equals zero) at most finitely often. A simple way to do so is to approximate $F$ by a polynomial vector field $G$. Real polynomials in two variables are finite sums

$$P(x, y) = \sum_{i,j=0}^{n} c_{ij} x^i y^j$$

where the $c_{ij}$ are constants. They form a function algebra $A$ in $C^0(\Delta, \mathbb{R})$ that separates points and vanishes nowhere. By the Stone-Weierstrass Theorem, $A$ is dense in $C^0$, so we can approximate the components of $F = (F_1, F_2)$ by polynomials

$$F_1 \doteq P \quad F_2 \doteq Q.$$

(The symbol $\doteq$ indicates “almost equal.”) The vector field $(P, Q)$ then approximates $F$. Changing the coefficients of $P$ by a small amount ensures that $P$ and $Q$ have no common polynomial factor and $F$ vanishes at most finitely often.