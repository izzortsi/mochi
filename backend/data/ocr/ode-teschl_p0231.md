globally attracting by Theorem 7.5. For $\mu > 0$ this fixed point becomes unstable and a unique globally attracting periodic orbit emerges. This is the prototypical example of a Poincaré–Andronov–Hopf bifurcation.

Problem 7.7. The equation

$$\ddot{x} + g(x)\dot{x} + x = 0$$

is also often called Liénard’s equation. Show that it is equivalent to (7.26) if we set $y = \dot{x} + f(x)$, where $f(x) = \int_{0}^{x} g(t)dt$.

Problem 7.8. Show that

$$\dot{z} = z(\mu - (\alpha + \mathrm{i}\beta)|z|^2), \quad \mu \in \mathbb{R}, \alpha, \beta > 0,$$

where $z(t) = x(t) + \mathrm{i}y(t)$, exhibits a Hopf bifurcation at $\mu = 0$. (Hint: Use polar coordinates $z = r\mathrm{e}^{\mathrm{i}\varphi}$.)

7.3. The Poincaré–Bendixson theorem

In all our examples from the previous sections the solutions behaved quite regular and would either converge to a fixed point or to a periodic orbit. It turns out that this behavior is typical and it is the purpose of the present section to classify the possible omega limit sets for planar systems. What makes $\mathbb{R}^2$ different from $\mathbb{R}^n$, $n \geq 3$, in this respect is the validity of the Jordan Curve Theorem: Every Jordan curve $J$ (i.e., a homeomorphic image of the circle $S^1$) dissects $\mathbb{R}^2$ into two connected regions. In particular, $\mathbb{R}^2 \setminus J$ has two components. We will only use the special case where the curve is piecewise smooth. A proof for this case can be found (e.g.) in [39].

So let $M \subseteq \mathbb{R}^2$ and $f \in C^1(M, \mathbb{R}^2)$ be given. By an arc $\Sigma \subset \mathbb{R}^2$ we mean a submanifold of dimension one given by a smooth map $t \to s(t)$ with