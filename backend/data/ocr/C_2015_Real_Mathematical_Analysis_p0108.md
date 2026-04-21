The absolute value is a mapping $\text{Abs} : \mathbb{R} \to \mathbb{R}$ that sends $x$ to $|x|$. It is continuous since it is $d(x, 0)$ and the distance function is continuous. The maximum and minimum are functions $\mathbb{R} \times \mathbb{R} \to \mathbb{R}$ given by the formulas

$$\max(x, y) = \frac{x + y}{2} + \frac{|x - y|}{2} \quad \min(x, y) = \frac{x + y}{2} - \frac{|x - y|}{2},$$

so they are also continuous.

**61 Corollary** The sums, differences, products, and quotients, absolute values, maxima, and minima of real-valued continuous functions are continuous. (The denominator functions should not equal zero.)

**Proof** Take, for example, the sum $f + g$ where $f, g : M \to \mathbb{R}$ are continuous. It is the composite of continuous functions

$$M \xrightarrow{f \times g} \mathbb{R} \times \mathbb{R} \xrightarrow{\text{Sum}} \mathbb{R}$$

$$x \mapsto (fx, gx) \mapsto \text{Sum}(fx, gx),$$

and is therefore continuous. The same applies to the other operations. $\square$

**62 Corollary** Polynomials are continuous functions.

**Proof** Proposition 3 states that constant functions and the identity function are continuous. Thus Corollary 61 and induction imply that the polynomial $a_0 + a_1x + \cdots + a_nx^n$ is continuous. $\square$

The same reasoning shows that polynomials of $m$ variables are continuous functions $\mathbb{R}^m \to \mathbb{R}$.

**Boundedness**

A subset $S$ of a metric space $M$ is **bounded** if for some $p \in M$ and some $r > 0$,

$$S \subset M_rp.$$

A set which is not bounded is **unbounded**. For example, the elliptical region $4x^2 + y^2 < 4$ is a bounded subset of $\mathbb{R}^2$, while the hyperbola $xy = 1$ is unbounded. It is easy to see that if $S$ is bounded then for each $q \in M$ there is an $s$ such that $M_sq$ contains $S$.

Distinguish the word “bounded” from the word “finite.” The first refers to physical size, the second to the number of elements. The concepts are totally different.