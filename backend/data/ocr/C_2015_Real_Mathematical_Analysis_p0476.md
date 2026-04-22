**91.** Four types of convergence of a sequence of measurable functions $(f_n)$ are: Almost everywhere convergence, $L^1$ convergence, nearly uniform convergence, and convergence in measure. This last type of convergence requires that for each $\epsilon > 0$ we have

$$m(\{x : |f_n(x) - g(x)| > \epsilon\}) \to 0$$

as $n \to \infty$. Consulting the tetrahedron in Figure 159, decide which oriented edges represent implications for sequences of functions defined on $[a, b]$, on $\mathbb{R}$, or represent implications on neither $[a, b]$ nor $\mathbb{R}$.

**Figure 159** You might label an edge that represents implication only for functions defined on $[a, b]$ with a single arrow, but use a double arrow if the implication holds for functions defined on $\mathbb{R}$. For example, how should you label the edge from a.e. to n.u.?

**92.** Assume that the (unbalanced) density of $E$ exists at every point of $\mathbb{R}$, not merely at almost all of them. Prove that up to a zero set, $E = \mathbb{R}$, or $E = \emptyset$. (This is a kind of measure-theoretic connectedness. Topological connectedness of $\mathbb{R}$ is useful in the proof.) Is this also true in $\mathbb{R}^n$?

**93.** [Speculative] Density seems to be a first-order concept. To say that the density of $E$ at $x$ is 1 means that the concentration of $E$ in a ball $B$ containing $x$ tends to 1 as $B \downarrow x$. That is,

$$\frac{m(B) - m(E \cap B)}{mB} \to 0.$$

But how fast can we hope it tends to 0? We could call $x$ a double density point if the ratio still tends to 0 when we square the denominator. Interior points of $E$ are double density points. Are such points common or scarce in a measurable set? What about balanced density points? What about fractional powers of the denominator?