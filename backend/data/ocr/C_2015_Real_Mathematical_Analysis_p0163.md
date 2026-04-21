5 Corollary If $f$ is differentiable and $|f'(x)| \leq M$ for all $x \in (a,b)$ then $f$ satisfies the global Lipschitz condition – for all $t, x \in (a,b)$ we have

$$|f(t) - f(x)| \leq M|t - x|.$$

In particular, if $f'(x) = 0$ for all $x \in (a,b)$ then $f(x)$ is constant.

Proof $|f(t) - f(x)| = |f'(\theta)(t - x)|$ for some $\theta$ between $x$ and $t$.

Remark The Mean Value Theorem and this corollary are the most important tools in calculus for making estimates.

It is often convenient to deal with two functions simultaneously, and for that we have the following result.

6 Ratio Mean Value Theorem Suppose that the functions $f$ and $g$ are continuous on an interval $[a,b]$ and differentiable on the interval $(a,b)$. Then there is a $\theta \in (a,b)$ such that

$$\Delta f \cdot g'(\theta) = \Delta g \cdot f'(\theta)$$