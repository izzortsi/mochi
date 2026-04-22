set is made so that $\chi_S$ is Riemann integrable. It is met if $S$ has a smooth, or piecewise smooth, boundary. See Appendix B for a delightful discussion of the historical origin of Cavalieri’s Principle, and see Chapter 6 for the more general geometric definition of length and area in terms of outer measure.

The second new aspect of multiple integration concerns the change of variables formula. It is the higher-dimensional version of integration by substitution. We will suppose that $\varphi : U \rightarrow W$ is a $C^1$ diffeomorphism between open subsets of $\mathbb{R}^2$, that $R \subset U$, and that a Riemann integrable function $f : W \rightarrow \mathbb{R}$ is given. The Jacobian of $\varphi$ at $z \in U$ is the determinant of the derivative,

$$\text{Jac}_z \varphi = \det(D\varphi)_z.$$

32 Change of Variables Formula Under the preceding assumptions we have

$$\int_R f \circ \varphi \cdot |\text{Jac} \varphi| = \int_{\varphi(R)} f.$$

See Figure 119.

Figure 119 $\varphi$ is a change of variables.

If $S$ is a bounded subset of $\mathbb{R}^2$, its area (or Jordan content) is by definition the integral of its characteristic function $\chi_S$, if the integral exists. When the integral does exist we say that $S$ is Riemann measurable. See also Appendix D of Chapter 6. According to the Riemann-Lebesgue Theorem, $S$ is Riemann measurable if and only if its boundary is a zero set. For $\chi_S$ is discontinuous at $z$ if and only if $z$ is a boundary point of $S$. See Exercise 44. The characteristic function of a rectangle $R$ is Riemann