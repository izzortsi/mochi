33 Corollary If $f \in \mathbb{R}$ and $\psi : [c, d] \to [a, b]$ is a $C^1$ diffeomorphism then $f \circ \psi$ is Riemann integrable.

Proof The hypothesis that $\psi$ is a $C^1$ diffeomorphism means that it is a continuously differentiable homeomorphism whose inverse is also continuously differentiable. By the Mean Value Theorem, for all $s, t \in [a, b]$ we have

$$|\psi^{-1}(s) - \psi^{-1}(t)| \leq K |s - t|$$

where $K = \max_{x \in [a, b]} |(\psi^{-1})'(x)|$. By Corollary 32, $f \circ \psi$ is Riemann integrable.

Versions of the preceding theorem and corollary remain true without the hypotheses that $\psi$ bijects. The proofs are harder because $\psi$ can fold infinitely often. See Exercises 42 and 44.

In calculus you learn that the derivative of the integral is the integrand. This we now prove.

34 Fundamental Theorem of Calculus If $f : [a, b] \to \mathbb{R}$ is Riemann integrable then its indefinite integral

$$F(x) = \int_a^x f(t) dt$$

is a continuous function of $x$. The derivative of $F(x)$ exists and equals $f(x)$ at every point $x$ at which $f$ is continuous.

Proof #1 Obvious from Figure 81.

Figure 81 Why does this picture give a proof of the Fundamental Theorem of Calculus?