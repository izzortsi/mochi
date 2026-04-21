The convergence of a Taylor series is related to how quickly the $r^{\text{th}}$ derivative grows (in magnitude) as $r \to \infty$. In Section 6 of Chapter 4 you will find necessary and sufficient conditions on the growth rate that determine whether a smooth function is analytic.

**Inverse Functions**

A strictly monotone continuous function $f : (a, b) \to \mathbb{R}$ bijects $(a, b)$ onto some interval $(c, d)$ where $c = \lim_{t \to a} f(t)$ and $d = \lim_{t \to b}$ in the increasing case. (We permit $c$ or $d$ to be infinite.) It is a homeomorphism $(a, b) \to (c, d)$ and its inverse function $f^{-1} : (c, d) \to (a, b)$ is also a homeomorphism. These facts were proved in Chapter 2.

Does differentiability of $f$ imply differentiability of $f^{-1}$? If $f' \neq 0$ the answer is “yes.” Keep in mind, however, the function $f : x \mapsto x^3$. It shows that differentiability of $f^{-1}$ fails when $f'(x) = 0$. For the inverse function is $y \mapsto y^{1/3}$, which is not differentiable at $y = 0$.

**14 Inverse Function Theorem in dimension 1** If $f : (a, b) \to (c, d)$ is a differentiable surjection and $f'(x)$ is never zero then $f$ is a homeomorphism. Its inverse is differentiable and its derivative at $y \in (c, d)$ is

$$\left(f^{-1}\right)'(y) = \frac{1}{f' \circ f^{-1}(y)}$$

**Proof** If $f'$ is never zero then by the intermediate value property of derivatives, it is either always positive or always negative. We assume for all $x$ that $f'(x) > 0$. If $a < s < t < b$ then by the Mean Value Theorem there exists $\theta \in (s, t)$ such that $f(t) - f(s) = f'(\theta)(t - s) > 0$. Thus $f$ is strictly monotone. Differentiability implies continuity, so $f$ is a homeomorphism $(a, b) \to (c, d)$. To check differentiability of $f^{-1}$ at $y \in (c, d)$, define

$$x = f^{-1}(y) \quad \text{and} \quad \Delta x = f^{-1}(y + \Delta y) - x.$$

Then $y = f(x)$ and $\Delta y = f(x + \Delta x) - fx = \Delta f$. Thus

$$\frac{\Delta f^{-1}}{\Delta y} = \frac{f^{-1}(y + \Delta y) - f^{-1}(y)}{\Delta y} = \frac{\Delta x}{\Delta y} = \frac{1}{\Delta y/\Delta x} = \frac{1}{\Delta f/\Delta x}.$$

Since $f$ is a homeomorphism, $\Delta x \to 0$ if and only if $\Delta y \to 0$, so the limit of $\Delta f^{-1}/\Delta y$ exists as $\Delta y \to 0$ and equals $1/f'(x) = 1/f' \circ f^{-1}(y).$