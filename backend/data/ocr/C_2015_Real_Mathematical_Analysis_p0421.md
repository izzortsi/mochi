Remark If a dominator $g$ with finite integral fails to exist then the assertion fails. For example, the sequence of steeple functions shown in Figure 89 on page 214, have integral $n$ and converge at all $x$ to the zero function as $n \to \infty$. See Exercise 33.

32 Corollary The pointwise limit of measurable functions is measurable.

Proof $\mathcal{U}(\underline{f}_n)$ is measurable and converges upward to $\mathcal{U}f$.

33 Fatou’s Lemma If $f_n : \mathbb{R} \to [0, \infty)$ is a sequence of measurable functions then

$$\int \liminf f_n \leq \liminf \int f_n.$$

Proof The assertion is really more about $\liminf$ than integrals. The $\liminf$ of the sequence $(f_n)$ is $f = \lim_{n \to \infty} \underline{f}_n$, where $\underline{f}_n$ is the lower envelope function. Since $\underline{f}_n \uparrow f$, the Monotone Convergence Theorem implies $\int \underline{f}_n \uparrow \int f$, and since $\underline{f}_n \leq f_n$ we have $\int f \leq \liminf \int f_n$.

Remark The inequality in Fatou’s Lemma can be strict as is shown by the steeple functions. See Exercise 33.

Having established the three basic convergence theorems for Lebesgue integrals using mainly pictures of undergraphs, we collect some integration facts of a more mundane character.

34 Theorem Let $f, g : \mathbb{R} \to [0, \infty)$ be measurable functions.

(a) If $f \leq g$ then $\int f \leq \int g$.

(b) If $\mathbb{R} = \bigsqcup_{k=1}^{\infty} X_k$ and each $X_k$ is measurable then

$$\int f = \sum_{k=1}^{\infty} \int_X f.$$

(c) If $X \subset \mathbb{R}$ is measurable then $mX = \int X_X$.

(d) If $mX = 0$ then $\int_X f = 0$.

(e) If $f(x) = g(x)$ almost everywhere then $\int f = \int g$.

(f) If $c \geq 0$ then $\int cf = c \int f$.

(g) The integral of $f$ is zero if and only if $f(x) = 0$ for almost every $x$.

(h) $\int f + g = \int f + \int g$.

Proof Assertions (a) – (g) are obvious from what we know about measure.