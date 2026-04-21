where $\Delta f = f(b) - f(a)$ and $\Delta g = g(b) - g(a)$. (If $g(x) \equiv x$, the Ratio Mean Value Theorem becomes the ordinary Mean Value Theorem.)

**Proof** If $\Delta g \neq 0$ then the theorem states that for some $\theta \in (a,b)$ we have

$$\frac{\Delta f}{\Delta g} = \frac{f'(\theta)}{g'(\theta)}$$

This ratio expression is how to remember the theorem. The whole point here is that $f'$ and $g'$ are evaluated at the same $\theta$. The function

$$\Phi(x) = \Delta f \cdot (g(x) - g(a)) - \Delta g \cdot (f(x) - f(a))$$

is differentiable and its value at both endpoints $a,b$ is 0. Since $\Phi$ is continuous it takes on a maximum and a minimum somewhere in the interval $[a,b]$. Since $\Phi$ has equal values at the endpoints of the interval, it must take on a maximum or minimum at some point $\theta \in (a,b)$; i.e., $\theta \neq a,b$. Then $\Phi'(\theta) = 0$ and $\Delta f \cdot g'(\theta) = \Delta g \cdot f'(\theta)$ as claimed.

**7 L’Hôpital’s Rule** If $f$ and $g$ are differentiable functions defined on an interval $(a,b)$, both of which tend to 0 at $b$, and if the ratio of their derivatives $f'(x)/g'(x)$ tends to a finite limit $L$ at $b$ then $f(x)/g(x)$ also tends to $L$ at $b$. (We assume that $g(x), g'(x) \neq 0$.)

**Rough Proof** Let $x \in (a,b)$ tend to $b$. Imagine a point $t \in (a,b)$ tending to $b$ much faster than $x$ does. It is a kind of “advance guard” for $x$. Then $f(t)/f(x)$ and $g(t)/g(x)$ are as small as we wish, and by the Ratio Mean Value Theorem there is a $\theta \in (x,t)$ such that

$$\frac{f(x)}{g(x)} = \frac{f(x) - 0}{g(x) - 0} = \frac{f(x) - f(t)}{g(x) - g(t)} = \frac{f'(\theta)}{g'(\theta)}$$

The latter tends to $L$ because $\theta$ is sandwiched between $x$ and $t$ as they tend to $b$. The symbol $\cdot$ means approximately equal. See Figure 61.

**Figure 61** $x$ and $t$ escort $\theta$ toward $b$.