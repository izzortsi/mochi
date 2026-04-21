Pathological Examples

Nonjump discontinuities of $f'$ may very well occur. The function

$$f(x) = \begin{cases} 
x^2 \sin \frac{1}{x} & \text{if } x > 0 \\
0 & \text{if } x \leq 0 
\end{cases}$$

is differentiable everywhere, even at $x = 0$, where $f'(0) = 0$. Its derivative function for $x > 0$ is

$$f'(x) = 2x \sin \frac{1}{x} - \cos \frac{1}{x},$$

which oscillates more and more rapidly with amplitude approximately 1 as $x \to 0$. Since $f'(x) \neq 0$ as $x \to 0$, $f'$ is discontinuous at $x = 0$. Figure 63 shows why $f$ is differentiable at $x = 0$ and has $f'(0) = 0$. Although the graph oscillates wildly at 0, it does so between the envelopes $y = \pm x^2$, and any curve between these envelopes is tangent to the $x$-axis at the origin. Study this example, Figure 63.

**Figure 63** The graphs of the function $y = x^2 \sin(1/x)$ and its envelopes $y = \pm x^2$; and the graph of its derivative

A similar but worse example is illustrated in Figure 64, where

$$g(x) = \begin{cases} 
x^{3/2} \sin \frac{1}{x} & \text{if } x > 0 \\
0 & \text{if } x \leq 0 
\end{cases}$$

Its derivative at $x = 0$ is $g'(0) = 0$, while at $x \neq 0$ its derivative is

$$g'(x) = \frac{3}{2} \sqrt{x} \sin \frac{1}{x} - \frac{1}{\sqrt{x}} \cos \frac{1}{x},$$

which oscillates with increasing frequency and unbounded amplitude as $x \to 0$ because $1/\sqrt{x}$ blows up at $x = 0$.