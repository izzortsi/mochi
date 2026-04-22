(a) Take $n = 1$, $m = 2$, and examine the function

$$f(t) = (\cos t, \sin t)$$

for $\pi \leq t \leq 2\pi$. Take $p = \pi$ and $q = 2\pi$. Show that there is no $\theta \in [p, q]$ which satisfies (28).

(b) Assume that the set of derivatives

$$\{(Df)_x \in \mathcal{L}(\mathbb{R}^n, \mathbb{R}^m) : x \in [p, q]\}$$

is convex. Prove there exists $\theta \in [p, q]$ which satisfies (28).

(c) How does (b) imply the one-dimensional Mean Value Theorem?

18. The **directional derivative** of $f : U \to \mathbb{R}^m$ at $p \in U$ in the direction $u$ is the limit, if it exists,

$$\nabla_p f(u) = \lim_{t \to 0} \frac{f(p + tu) - f(p)}{t}.$$

(Often one requires that $|u| = 1.$)

(a) If $f$ is differentiable at $p$, why is it obvious that the directional derivative exists in each direction $u$?

(b) Show that the function $f : \mathbb{R}^2 \to \mathbb{R}$ defined by

$$f(x, y) = \begin{cases} \frac{x^3 y}{x^4 + y^2} & \text{if } (x, y) \neq (0, 0) \\ 0 & \text{if } (x, y) = (0, 0) \end{cases}$$

has $\nabla_{(0,0)} f(u) = 0$ for all $u$ but is not differentiable at $(0, 0)$.

*19. Using the functions in Exercises 15 and 18, show that the composite of functions whose partial derivatives exist may fail to have partial derivatives, and the composite of functions whose directional derivatives exist may fail to have directional derivatives. (That is, the classes of these functions are not closed under composition, which is further reason to define multidimensional differentiability in terms of Taylor approximation, and not in terms of partial or directional derivatives.)

20. Assume that $U$ is a connected open subset of $\mathbb{R}^n$ and $f : U \to \mathbb{R}^m$ is differentiable everywhere on $U$. If $(Df)_p = 0$ for all $p \in U$, show that $f$ is constant.

21. For $U$ as above, assume that $f$ is second-differentiable everywhere and $(D^2 f)_p = 0$ for all $p$. What can you say about $f$? Generalize to higher-order differentiability.

22. If $Y$ is a metric space and $f : [a, b] \times Y \to \mathbb{R}$ is continuous, show that

$$F(y) = \int_a^b f(x, y) \, dx$$

is continuous.