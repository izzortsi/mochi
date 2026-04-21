A longer but more geometric proof of the one-dimensional inverse function theorem can be done in two steps.

(i) A function is differentiable if and only if its graph is differentiable.

(ii) The graph of $f^{-1}$ is the reflection of the graph of $f$ across the diagonal, and is thus differentiable.

See Figure 66.

**Figure 66** A picture proof of the inverse function theorem in $\mathbb{R}$

If a homeomorphism $f$ and its inverse are both of class $C^r$, $r \geq 1$, then $f$ is a $C^r$ diffeomorphism.

**15 Corollary** If $f : (a,b) \to (c,d)$ is a homeomorphism of class $C^r$, $1 \leq r \leq \infty$, and for all $x \in (a,b)$ we have $f'(x) \neq 0$ then $f$ is a $C^r$ diffeomorphism.

**Proof** If $r = 1$, the formula $(f^{-1})'(y) = 1/f' \circ f^{-1}(y)$ implies that $(f^{-1})'(y)$ is continuous, so $f$ is a $C^1$ diffeomorphism. The Rules of Differentiation and induction on $r \geq 2$ complete the proof.