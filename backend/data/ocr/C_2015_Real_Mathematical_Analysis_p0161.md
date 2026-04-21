(d) The derivative of a constant is zero, $c' = 0$.

(e) If $f$ and $g$ are differentiable at $x$ and $g(x) \neq 0$ then their ratio $f/g$ is differentiable at $x$, the derivative being

$$\left( \frac{f}{g} \right)'(x) = \frac{f'(x) \cdot g(x) - f(x) \cdot g'(x)}{g(x)^2}.$$

(f) If $f$ is differentiable at $x$ and $g$ is differentiable at $y = f(x)$ then their composite $g \circ f$ is differentiable at $x$, the derivative being given as the Chain Rule

$$(g \circ f)'(x) = g'(y) \cdot f'(x).$$

**Proof** (a) Continuity in the calculus notation amounts to the assertion that $\Delta f \to 0$ as $\Delta x \to 0$. This is obvious: If the fraction $\Delta f/\Delta x$ tends to a finite limit while its denominator tends to zero, then its numerator must also tend to zero.

(b) Since $\Delta(f + g) = \Delta f + \Delta g$, we have

$$\frac{\Delta(f + g)}{\Delta x} = \frac{\Delta f}{\Delta x} + \frac{\Delta g}{\Delta x} \to f'(x) + g'(x)$$

as $\Delta x \to 0$.

(c) Since $\Delta(f \cdot g) = \Delta f \cdot g(x + \Delta x) + f(x) \cdot \Delta g$, continuity of $g$ at $x$ implies that

$$\frac{\Delta(f \cdot g)}{\Delta x} = \frac{\Delta f}{\Delta x} g(x + \Delta x) + f(x) \frac{\Delta g}{\Delta x} \to f'(x)g(x) + f(x)g'(x),$$

as $\Delta x \to 0$.

(d) If $c$ is a constant then $\Delta c = 0$ and $c' = 0$.

(e) Since

$$\Delta(f/g) = \frac{g(x)\Delta f - f(x)\Delta g}{g(x + \Delta x)g(x)},$$

the formula follows when we divide by $\Delta x$ and take the limit.

(f) The shortest proof of the chain rule for $y = f(x)$ is by cancellation:

$$\frac{\Delta g}{\Delta x} = \frac{\Delta g}{\Delta y} \frac{\Delta y}{\Delta x} \to g'(y)f'(x).$$

A slight flaw is present: $\Delta y$ may be zero when $\Delta x$ is not. This is not a big problem. Differentiability of $g$ at $y$ implies that

$$\frac{\Delta g}{\Delta y} = g'(y) + \sigma$$