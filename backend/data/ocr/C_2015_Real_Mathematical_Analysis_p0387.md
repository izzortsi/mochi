49. Using the Fundamental Theorem of Calculus, give a direct proof of Green’s Formulas

$$-\iint_R f_y \, dxdy = \int_{\partial R} f \, dx \quad \text{and} \quad \iint_R g_x \, dxdy = \int_{\partial R} g \, dy$$

where $R$ is a square in the plane and $f, g : \mathbb{R}^2 \to \mathbb{R}$ are smooth. (Assume that the edges of the square are parallel to the coordinate axes.)

50. Draw a **staircase** curve $S_n$ that approximates the diagonal

$$\Delta = \{(x, y) \in \mathbb{R}^2 : 0 \leq x = y \leq 1\}$$

to within a tolerance $1/n$. See Figure 133. Suppose that $f, g : \mathbb{R}^2 \to \mathbb{R}$ are smooth.

(a) Why does the length of $S_n$ not converge to the length of $\Delta$ as $n \to \infty$?

(b) Despite (a), prove that

$$\int_{S_n} f \, dx \to \int_{\Delta} f \, dx \quad \text{and} \quad \int_{S_n} g \, dy \to \int_{\Delta} g \, dy$$

as $n \to \infty$.

(c) Repeat (b) with $\Delta$ replaced by the graph of a smooth function $h : [a, b] \to \mathbb{R}$.

(d) If $C$ is a smooth simple closed curve in the plane, show that it is the union of finitely many arcs $C_\ell$, each of which is the graph of a smooth function $y = h(x)$ or $x = h(y)$, and the arcs $C_\ell$ meet only at common endpoints.