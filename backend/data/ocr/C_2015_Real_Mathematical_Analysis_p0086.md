Product Metrics

We next define a metric on the Cartesian product $M = X \times Y$ of two metric spaces. There are three natural ways to do so:

$$d_E(p, p') = \sqrt{d_X(x, x')^2 + d_Y(y, y')^2}$$

$$d_{\text{max}}(p, p') = \max\{d_X(x, x'), d_Y(y, y')\}$$

$$d_{\text{sum}}(p, p') = d_X(x, x') + d_Y(y, y')$$

where $p = (x, y)$ and $p' = (x', y')$ belong to $M$. ($d_E$ is the Euclidean product metric.) The proof that these expressions actually define metrics on $M$ is left as Exercise 38.

16 Proposition $d_{\text{max}} \leq d_E \leq d_{\text{sum}} \leq 2d_{\text{max}}$.

Proof Dropping the smaller term inside the square root shows that $d_{\text{max}} \leq d_E$; comparing the square of $d_E$ and the square of $d_{\text{sum}}$ shows that the latter has the terms of the former and the cross term besides, so $d_E \leq d_{\text{sum}}$; and clearly $d_{\text{sum}}$ is no larger than twice its greater term, so $d_{\text{sum}} \leq 2d_{\text{max}}$.

17 Convergence in a Product Space The following are equivalent for a sequence $p_n = (p_{1n}, p_{2n})$ in $M = M_1 \times M_2$:

(a) $(p_n)$ converges with respect to the metric $d_{\text{max}}$.

(b) $(p_n)$ converges with respect to the metric $d_E$.

(c) $(p_n)$ converges with respect to the metric $d_{\text{sum}}$.

(d) $(p_{1n})$ and $(p_{2n})$ converge in $M_1$ and $M_2$ respectively.

Proof This is immediate from Proposition 16.

18 Corollary If $f : M \to N$ and $g : X \to Y$ are continuous then so is their Cartesian product $f \times g$ which sends $(p, x) \in M \times X$ to $(fp, gx) \in N \times Y$.

Proof If $(p_n, x_n) \to (p, x)$ in $M \times X$ then Theorem 17 implies $p_n \to p$ in $M$ and $x_n \to x$ in $X$. By continuity, $f(p_n) \to fp$ and $g(x_n) \to gx$. By Theorem 17, $(f(p_n), g(x_n)) \to (fp, gx)$ which gives continuity of $f \times g$.

The three metrics make sense in the obvious way for a Cartesian product of $m \geq 3$ metric spaces. The inequality

$$d_{\text{max}} \leq d_E \leq d_{\text{sum}} \leq md_{\text{max}}$$

is proved in the same way, and we see that Theorem 17 holds also for the product of $m$ metric spaces. This gives