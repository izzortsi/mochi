exist, but are either unequal or are unequal to $f(c)$. (The three quantities exist and are equal if and only if $f$ is continuous at $c$.) An **oscillating discontinuity** (or a discontinuity of the **second kind** is any nonjump discontinuity.

(a) Show that $f : \mathbb{R} \rightarrow \mathbb{R}$ has at most countably many jump discontinuities.

(b) What about the function

$$f(x) = \begin{cases} \sin \frac{1}{x} & \text{if } x > 0 \\ 0 & \text{if } x \leq 0 \end{cases}$$

(c) What about the characteristic function of the rationals?

*37. Suppose that $f : \mathbb{R} \rightarrow \mathbb{R}$ has no jump discontinuities. Does $f$ have the intermediate value property? (Proof or counterexample.)

**38. Recall that $\mathcal{P}(S) = 2^S$ is the power set of $S$, the collection of all subsets of $S$, and $\mathbb{R}$ is the set of Riemann integrable functions $f : [a, b] \rightarrow \mathbb{R}$.

(a) Prove that the cardinality of $\mathbb{R}$ is the same as the cardinality of $\mathcal{P}(\mathbb{R})$, which is greater than the cardinality of $\mathbb{R}$.

(b) Call two functions in $\mathbb{R}$ **integrally equivalent** if they differ only on a zero set. Prove that the collection of integral equivalence classes of $\mathbb{R}$ has the same cardinality as $\mathbb{R}$, namely $2^{\mathbb{N}}$.

(c) Is it better to count Riemann integrable functions or integral equivalence classes of Riemann integrable functions?

(d) Show that $f, g \in \mathbb{R}$ are integrally equivalent if and only if the integral of $|f - g|$ is zero.

39. Consider the characteristic functions $f(x)$ and $g(x)$ of the intervals $[1, 4]$ and $[2, 5].$ The derivatives $f'$ and $g'$ exist almost everywhere. The integration-by-parts formula says that

$$\int_0^3 f(x)g'(x) \, dx = f(3)g(3) - f(0)g(0) - \int_0^3 f'(x)g(x) \, dx.$$

But both integrals are zero, while $f(3)g(3) - f(0)g(0) = 1.$ Where is the error?

40. Set

$$f(x) = \begin{cases} 0 & \text{if } x \leq 0 \\ \sin \frac{\pi}{x} & \text{if } x > 0 \end{cases} \quad \text{and} \quad g(x) = \begin{cases} 0 & \text{if } x \leq 0 \\ 1 & \text{if } x > 0. \end{cases}$$

Prove that $f$ has an antiderivative but $g$ does not.

41. Show that any two antiderivatives of a function differ by a constant. [Hint: This is a one-liner.]

42. Suppose that $\psi : [c, d] \rightarrow [a, b]$ is continuous and for every zero set $Z \subset [a, b]$, $\psi^{\text{pre}}(Z)$ is a zero set in $[c, d]$.

(a) If $f$ is Riemann integrable, prove that $f \circ \psi$ is Riemann integrable.

(b) Derive Corollary 32 from (a).