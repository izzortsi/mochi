(e) Infer that if $(S_n)$ is a sequence of staircase curves that converges to $C$ then

$$\int_{S_n} f \, dx + g \, dy \rightarrow \int_C f \, dx + g \, dy.$$

(f) Use (e) and Exercise 49 to give a proof of Green’s Formulas on a general region $D \subset \mathbb{R}^2$ bounded by a smooth simple closed curve $C$, that relies on approximating† $C$, say from the inside, by staircase curves $S_n$ which bound regions $R_n$ composed of many small squares. (You may imagine that $R_1 \subset R_2 \subset \ldots$ and that $R_n \rightarrow D$.)

51. A region $R$ in the plane is of type 1 if there are smooth functions $g_1 : [a, b] \rightarrow \mathbb{R}, g_2 : [a, b] \rightarrow \mathbb{R}$ such that $g_1(x) \leq g_2(x)$ and

$$R = \{(x, y) : a \leq x \leq b \text{ and } g_1(x) \leq y \leq g_2(x)\}.$$

$R$ is of type 2 if the roles of $x$ and $y$ can be reversed, and it is a **simple region** if it is of both type 1 and type 2.

(a) Give an example of a region that is type 1 but not type 2.
(b) Give an example of a region that is neither type 1 nor type 2.
(c) Is every simple region starlike? Convex?
(d) If a convex region is bounded by a smooth simple closed curve, is it simple?
(e) Give an example of a region that divides into three simple subregions but not into two.

*(f) If a region is bounded by a smooth simple closed curve $C$ then it need not divide into a finite number of simple subregions. Find an example.**

(g) Infer that the standard proof of Green’s Formulas for simple regions (as, for example, in J. Stewart’s *Calculus*) does not immediately carry over to the general planar region $R$ with smooth boundary; i.e., cutting $R$ into simple regions can fail.

***(h) Is there a planar region bounded by a smooth simple closed curve such that for every linear coordinate system (i.e., a new pair of axes), the region does not divide into finitely many simple subregions? In other words, is Stewart’s proof of Green’s Theorem doomed?

*(i) Show that if the curve $C$ in (f) is analytic, then no such example exists. [Hint: $C$ is analytic if it is locally the graph of a function defined by a convergent power series. A nonconstant analytic function has the property that for each $x$, there is some derivative of $f$ which is nonzero, $f^{(r)}(x) \neq 0$.]

**52. Show that every starlike open subset of the plane is diffeomorphic to the plane. (The same is true in $\mathbb{R}^n$.)**

†This staircase approximation proof generalizes to regions that are bounded by fractal, nondifferentiable curves such as the von Koch snowflake. As Jenny Harrison has shown, it also generalizes to higher dimensions.