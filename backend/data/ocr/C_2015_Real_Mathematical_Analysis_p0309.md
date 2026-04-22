22 Implicit Function Theorem If the function $f$ above is $C^r$, $1 \leq r \leq \infty$, then near $(x_0, y_0)$, the $z_0$-locus of $f$ is the graph of a unique function $y = g(x)$. Besides, $g$ is $C^r$.

Proof Without loss of generality we suppose that $(x_0, y_0)$ is the origin in $\mathbb{R}^n \times \mathbb{R}^m$ and $z_0 = 0$ in $\mathbb{R}^m$. The Taylor expression for $f$ is

$$f(x, y) = Ax + By + R$$

where $A$ is the $m \times n$ matrix

$$A = \left[ \frac{\partial f_i(x_0, y_0)}{\partial x_j} \right]$$

and $R$ is sublinear. Solving $f(x, y) = 0$ for $y = gx$ is equivalent to solving

$$y = -B^{-1}(Ax + R(x, y)).$$

In the unlikely event that $R$ does not depend on $y$, (8) is an explicit formula for $gx$ and the implicit function is an explicit function. In general, the idea is that the remainder $R$ depends so weakly on $y$ that we can switch it to the left-hand side of (8), absorbing it in the $y$-term.

Solving (8) for $y$ as a function of $x$ is the same as finding a fixed-point of

$$K_x : y \mapsto -B^{-1}(Ax + R(x, y)),$$

so we hope to show that $K_x$ contracts. The remainder $R$ is a $C^1$ function, and $(DR)_{(0,0)} = 0$. Therefore if $r$ is small and $|x|, |y| \leq r$ then

$$\|B^{-1}\| \left\| \frac{\partial R(x, y)}{\partial y} \right\| \leq \frac{1}{2}.$$

By the Mean Value Theorem this implies that

$$|K_x(y_1) - K_x(y_2)| \leq \|B^{-1}\| |R(x, y_1) - R(x, y_2)|$$

$$\leq \|B^{-1}\| \left\| \frac{\partial R}{\partial y} \right\| |y_1 - y_2| \leq \frac{1}{2}|y_1 - y_2|$$

for $|x|, |y_1|, |y_2| \leq r$. Due to continuity at the origin, if $|x| \leq \tau \ll r$ then

$$|K_x(0)| \leq \frac{r}{2}.$$

Thus, for each $x \in X$, $K_x$ contracts $Y$ into itself where $X$ is the $\tau$-neighborhood of 0 in $\mathbb{R}^n$ and $Y$ is the closure of the $r$-neighborhood of 0 in $\mathbb{R}^m$. See Figure 111.