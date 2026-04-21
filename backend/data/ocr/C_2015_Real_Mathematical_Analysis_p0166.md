function can be. Despite the fact that $f'$ has the intermediate value property, it can be discontinuous at almost every point of $[a, b]$. Strangely enough, however, $f'$ cannot be discontinuous at every point. If $f$ is differentiable, $f'$ must be continuous at a dense, thick set of points. See Exercise 25 and the next section for the definitions.

**Proof of Theorem 8** Suppose that $a < x_1 < x_2 < b$ and

$$\alpha = f'(x_1) < \gamma < f'(x_2) = \beta.$$

We must find $\theta \in (x_1, x_2)$ such that $f'(\theta) = \gamma$.

Choose a small $h$, $0 < h < x_2 - x_1$, and draw the secant segment $\sigma(x)$ between the points $(x, f(x))$ and $(x + h, f(x + h))$ on the graph of $f$. Slide $x$ from $x_1$ to $x_2 - h$ continuously. This is the **sliding secant method**. See Figure 62.

**Figure 62** The sliding secant

When $h$ is small enough, slope $\sigma(x_1) \doteq f'(x_1)$ and slope $\sigma(x_2 - h) \doteq f'(x_2)$. Thus

$$\sigma(x_1) < \gamma < \sigma(x_2 - h).$$

Continuity of $f$ implies that the slope of $\sigma(x)$ depends continuously on $x$, so by the Intermediate Value Theorem for continuous functions there is an $x \in (x_1, x_2 - h)$ with slope $\sigma(x) = \gamma$. The Mean Value Theorem then gives a $\theta \in (x, x + h)$ such that $f'(\theta) = \gamma$.

**9 Corollary** The derivative of a differentiable function never has a jump discontinuity.

**Proof** Near a jump, a function omits intermediate values.