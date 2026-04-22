homeomorphic and one is a zero set then the other need not be a zero set. [Hint: To get a sense of this fat Cantor set, calculate the total length of the intervals which comprise its complement. See Figure 52 and Exercise 35.]

32. Consider the characteristic function of the dyadic rational numbers, $f(x) = 1$ if $x = k/2^n$ for some $k \in \mathbb{Z}$ and $n \in \mathbb{N}$, and $f(x) = 0$ otherwise.

(a) What is its set of discontinuities?
(b) At which points is its oscillation $\geq \epsilon$?
(c) Is it integrable? Explain, both by the Riemann-Lebesgue Theorem and directly from the definition.
(d) Consider the dyadic ruler function $g(x) = 1/2^n$ if $x = k/2^n$ and $g(x) = 0$ otherwise. Graph it and answer the questions posed in (a), (b), (c).

33. (a) Prove that the characteristic function $f$ of the middle-thirds Cantor set $C$ is Riemann integrable but the characteristic function $g$ of the fat Cantor set $F$ (Exercise 31) is not.
(b) Why is there a homeomorphism $h : [0,1] \to [0,1]$ sending $C$ onto $F$?
(c) Infer that the composite of Riemann integrable functions need not be Riemann integrable. How is this example related to Corollaries 28 and 32 of the Riemann-Lebesgue Theorem? See also Exercise 35.

*34. Assume that $\psi : [a,b] \to \mathbb{R}$ is continuously differentiable. A critical point of $\psi$ is an $x$ such that $\psi'(x) = 0$. A critical value is a number $y$ such that for at least one critical point $x$ we have $y = \psi(x)$.

(a) Prove that the set of critical values is a zero set. (This is the Morse-Sard Theorem in dimension one.)
(b) Generalize this to continuously differentiable functions $\mathbb{R} \to \mathbb{R}$.

*35. Let $F \subset [0,1]$ be the fat Cantor set from Exercise 31, and define

$$\psi(x) = \int_0^x \text{dist}(t,F) \, dt$$

where $\text{dist}(t,F)$ refers to the minimum distance from $t$ to $F$.

(a) Why is $\psi$ a continuously differentiable homeomorphism from $[0,1]$ onto $[0,L]$ where $L = \psi(1)$?
(b) What is the set of critical points of $\psi$? (See Exercise 34.)
(c) Why is $\psi(F)$ a Cantor set of zero measure?
(d) Let $f$ be the characteristic function of $\psi(F)$. Why is $f$ Riemann integrable but $f \circ \psi$ not?
(e) What is the relation of (d) to Exercise 33?

See also Exercise 6.77.

36. Generalizing Exercise 1.31, we say that $f : (a,b) \to \mathbb{R}$ has a jump discontinuity (or a discontinuity of the first kind) at $c \in (a,b)$ if

$$f(c^{-}) = \lim_{x \to c^{-}} f(x) \quad \text{and} \quad f(c^{+}) = \lim_{x \to c^{+}} f(x)$$