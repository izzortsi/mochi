where $\sigma = \sigma(\Delta y) \to 0$ as $\Delta y \to 0$. Define $\sigma(0) = 0$. The formula

$$\Delta g = (g'(y) + \sigma)\Delta y$$

holds for all small $\Delta y$, including $\Delta y = 0$. Continuity of $f$ at $x$ (which is true by (a)) implies that $\Delta f \to 0$ as $\Delta x \to 0$. Thus

$$\frac{\Delta g}{\Delta x} = (g'(y) + \sigma(\Delta f))\frac{\Delta y}{\Delta x} \to g'(y)f'(x)$$

as $\Delta x \to 0$.

2 Corollary The derivative of a polynomial $a_0 + a_1x + \cdots + a_nx^n$ exists at every $x \in \mathbb{R}$ and equals $a_1 + 2a_2x + \cdots + na_nx^{n-1}$.

Proof Immediate from the differentiation rules.

A function $f : (a,b) \to \mathbb{R}$ that is differentiable at each $x \in (a,b)$ is differentiable.

3 Mean Value Theorem A continuous function $f : [a,b] \to \mathbb{R}$ that is differentiable on the interval $(a,b)$ has the mean value property: There exists a point $\theta \in (a,b)$ such that

$$f(b) - f(a) = f'(\theta)(b - a).$$

4 Lemma If $f : (a,b) \to \mathbb{R}$ is differentiable and achieves a minimum or maximum at some $\theta \in (a,b)$ then $f'(\theta) = 0$.

Proof Assume that $f$ has a minimum at $\theta$. The derivative $f'(\theta)$ is the limit of the differential quotient $(f(t) - f(\theta))/(t - \theta)$ as $t \to \theta$. Since $f(t) \geq f(\theta)$ for all $t \in (a,b)$, the differential quotient is nonnegative for $t > \theta$ and nonpositive for $t < \theta$. Thus $f'(\theta)$ is a limit of both nonnegative and nonpositive quantities, so $f'(\theta) = 0$. Similarly $f'(\theta) = 0$ when $f$ has a maximum at $\theta$.

Proof of the Mean Value Theorem See Figure 59, where

$$S = \frac{f(b) - f(a)}{b - a}$$

is the slope of the secant of the graph of $f$. The function $\phi(x) = f(x) - S(x - a)$ is continuous on $[a,b]$ and differentiable on $(a,b)$. It has the same value, namely $f(a)$, at $x = a$ and $x = b$. Since $[a,b]$ is compact $\phi$ takes on maximum and minimum values, and since it has the same value at both endpoints, $\phi$ has a maximum or a minimum that occurs at an interior point $\theta \in (a,b)$. See Figure 60. By Lemma 4 we have $\phi'(\theta) = 0$ and $f(b) - f(a) = f'(\theta)(b - a).$