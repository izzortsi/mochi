46 Vitali Covering Lemma for Cubes
A Vitali covering of $A \subset \mathbb{R}^n$ by closed cubes$\dagger$ reduces to an efficient disjoint subcovering of almost all of $A$.

Density Points

Let $E \subset \mathbb{R}^n$ be measurable. For $p \in \mathbb{R}^n$, define the density of $E$ at $p$ as

$$\delta(p, E) = \lim_{Q \downarrow x} \frac{m(E \cap Q)}{mQ},$$

if the limit exists, $m$ being Lebesgue measure on $\mathbb{R}^n$. The notation $Q \downarrow p$ indicates that $Q$ is a cube which contains $p$ and shrinks down to $p$. It need not be centered at $p$. Clearly $0 \leq \delta \leq 1$. Points with $\delta = 1$ are called density points of $E$. The fraction that we’re taking the limit of is the “relative measure” or concentration of $E$ in $Q$. I like to write the concentration of $E$ in $Q$ as in chemistry,

$$\frac{m(E \cap Q)}{mQ} = [E : Q].$$

Existence of $\delta(p, E)$ means that for each $\epsilon > 0$ there exists an $\ell > 0$ such that if $Q$ is any cube of edgelength $< \ell$ that contains $p$ then the concentration of $E$ in $Q$ differs from $\delta(p, E)$ by $< \epsilon$.

Remark
Demanding that that the cubes be centered at $p$ produces the concept of balanced density. Balls or certain other shapes can be used instead of cubes. See Exercise 58, Exercise 61, the end of the preceding section, and Figure 151.

47 Lebesgue Density Theorem
If $E$ is measurable then almost every $p \in E$ is a density point of $E$.

Interior points of $E$ are obviously density points of $E$, although sets like the irrationals or a fat Cantor set have empty interior, while still having plenty of density points.

Proof of the Lebesgue Density Theorem
Without loss of generality we assume $E$ is bounded. Take any $a, 0 \leq a < 1$, and consider

$$E_a = \{p \in E : \delta(E, p) < a\}$$

$\dagger$The cubes are Cartesian products $I_1 \times \cdots \times I_n$, where the $I_i$ are closed intervals, all of the same length.