Figure 111 $K_x$ contracts $Y$ into itself.

By the Contraction Mapping Principle, $K_x$ has a unique fixed point $g(x)$ in $Y$. This implies that near the origin, the zero locus of $f$ is the graph of a function $y = g(x)$.

It remains to check that $g$ is $C^r$. First we show that $g$ obeys a Lipschitz condition at 0. We have

$$|gx| = |K_x(gx) - K_x(0) + K_x(0)| \leq \text{Lip}(K_x)|gx - 0| + |K_x(0)|$$
$$\leq \frac{|gx|}{2} + |B^{-1}(Ax + R(x,0))| \leq \frac{|gx|}{2} + 2L|x|$$

where $L = \|B^{-1}\| \|A\|$ and $|x|$ is small. Thus $g$ satisfies the Lipschitz condition

$$|gx| \leq 4L|x|.$$

In particular $g$ is continuous at $x = 0$.

Note the trick here. The term $|gx|$ appears on both sides of the inequality but since its coefficient on the r.h.s. is smaller than that on the l.h.s., they combine to give a nontrivial inequality.

By the Chain Rule, the derivative of $g$ at the origin, if it does exist, must satisfy $A + B(Dg)_0 = 0$, so we aim to show that $(Dg)_0 = -B^{-1}A$. Since $gx$ is a fixed-point of $K_x$ we have $gx = -B^{-1}A(x + R)$ and the Taylor estimate for $g$ at the origin is

$$|g(x) - g(0) - (-B^{-1}Ax)| = |B^{-1}R(x,gx)| \leq \|B^{-1}\| |R(x,gx)|$$
$$\leq \|B^{-1}\| \mathbf{e}(x,gx)(|x| + |gx|)$$
$$\leq \|B^{-1}\| \mathbf{e}(x,gx)(1 + 4L)|x|$$