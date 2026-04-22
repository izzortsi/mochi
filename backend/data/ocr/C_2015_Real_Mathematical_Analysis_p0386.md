(a) Show that the definition is unaffected if we require that the rectangles covering $Z$ are open squares.
(b) What if we permit the squares or rectangles to be nonopen?
(c) What if we use discs or other shapes instead of squares and rectangles?

*46. Assume that $S \subset \mathbb{R}^2$ is bounded.
(a) Prove that if $S$ is Riemann measurable then so are its interior and closure.
(b) Suppose that the interior and closure of $S$ are Riemann measurable and $|\text{int}(S)| = |\overline{S}| < \infty$. Prove that $S$ is Riemann measurable.
(c) Show that some open bounded subsets of $\mathbb{R}^2$ are not Riemann measurable. See Appendix E in Chapter 6.

*47. In the derivation of Fubini’s Theorem on page 316, it is observed that for all $y \in [c, d] \setminus Y$, where $Y$ is a zero set, the lower and upper integrals with respect to $x$ agree, $\underline{F}(y) = \overline{F}(y)$. One might think that the values of $\underline{F}$ and $\overline{F}$ on $Y$ have no effect on their integrals. Not so. Consider the function defined on the unit square $[0, 1] \times [0, 1]$,

$$f(x, y) = \begin{cases} 
1 & \text{if } y \text{ is irrational} \\
1 & \text{if } y \text{ is rational and } x \text{ is irrational} \\
1 - 1/q & \text{if } y \text{ is rational and } x = p/q \text{ is rational and written in lowest terms.}
\end{cases}$$

(a) Show that $f$ is Riemann integrable and its integral is 1.
(b) Observe that if $Y$ is the zero set $\mathbb{Q} \cap [0, 1]$ then for each $y \notin Y$,

$$\int_0^1 f(x, y) \, dx$$

exists and equals 1.
(c) Observe that if for each $y \in Y$ we choose in a completely arbitrary manner some

$$h(y) \in [\underline{F}(y), \overline{F}(y)]$$

and set

$$H(x) = \begin{cases} 
\underline{F}(y) = \overline{F}(y) & \text{if } y \notin Y \\
h(y) & \text{if } y \in Y
\end{cases}$$

then the integral of $H$ exists and equals 1, but if we take $g(x) = 0$ for all $y \in Y$ then the integral of

$$G(x) = \begin{cases} 
\underline{F}(y) = \overline{F}(y) & \text{if } y \notin Y \\
g(y) = 0 & \text{if } y \in Y
\end{cases}$$

does not exist.

***48. Is there a criterion to decide which redefinitions of the Riemann integral on the zero set $Y$ of Exercise 47 are harmless and which are not?