Functions of a Real Variable

1 Differentiation

The function $f : (a, b) \to \mathbb{R}$ is differentiable at $x$ if

$$\lim_{t \to x} \frac{f(t) - f(x)}{t - x} = L$$

exists. This means $L$ is a real number and for each $\epsilon > 0$ there exists a $\delta > 0$ such that if $0 < |t - x| < \delta$ then the differential quotient above differs from $L$ by $< \epsilon$. The limit $L$ is the derivative of $f$ at $x$, $L = f'(x)$. In calculus language, $\Delta x = t - x$ is the change in the independent variable $x$ while $\Delta f = f(t) - f(x)$ is the resulting change in the dependent variable $y = f(x)$. Differentiability at $x$ means that

$$f'(x) = \lim_{\Delta x \to 0} \frac{\Delta f}{\Delta x}.$$

We begin by reviewing the proofs of some standard calculus facts.

1 The Rules of Differentiation

(a) Differentiability implies continuity.

(b) If $f$ and $g$ are differentiable at $x$ then so is $f + g$, the derivative being

$$(f + g)'(x) = f'(x) + g'(x).$$

(c) If $f$ and $g$ are differentiable at $x$ then so is their product $f \cdot g$, the derivative being given by the Leibniz Formula

$$(f \cdot g)'(x) = f'(x) \cdot g(x) + f(x) \cdot g'(x).$$

© Springer International Publishing Switzerland 2015
C.C. Pugh, Real Mathematical Analysis, Undergraduate Texts in Mathematics, DOI 10.1007/978-3-319-17771-7_3