21 $C^r M$-test If $\sum M_k$ is a convergent series of constants and if $\|f_k\|_r \leq M_k$ for all $k$ then the series of functions $\sum f_k$ converges in $C^r(U, \mathbb{R}^m)$ to a function $f$. Term-by-term differentiation of order $\leq r$ is valid, i.e., for all $s \leq r$ we have $D^s f = \sum_k D^s f_k$.

Proof Obvious from the preceding corollary.

4 Implicit and Inverse Functions

Let $f: U \to \mathbb{R}^m$ be given, where $U$ is an open subset of $\mathbb{R}^n \times \mathbb{R}^m$. Fix attention on a point $(x_0, y_0) \in U$ and write $f(x_0, y_0) = z_0$. Our goal is to solve the equation

(7) $$f(x, y) = z_0$$

near $(x_0, y_0)$. More precisely, we hope to show that the set of points $(x, y)$ near $(x_0, y_0)$ at which $f(x, y) = z_0$, the so-called $z_0$-locus of $f$, is the graph of a function $y = g(x)$. If so, $g$ is the implicit function defined by (7). See Figure 110.

Figure 110 Near $(x_0, y_0)$ the $z_0$-locus of $f$ is the graph of a function $y = g(x)$.

Under various hypotheses we will show that $g$ exists, is unique, and is differentiable. The main assumption, which we make throughout this section, is that the $m \times m$ matrix $B = \left[ \frac{\partial f_i(x_0, y_0)}{\partial y_j} \right]$ is invertible.

Equivalently the linear transformation that $B$ represents is an isomorphism $\mathbb{R}^m \to \mathbb{R}^m$.