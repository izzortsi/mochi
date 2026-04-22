*46. Here is a trick question: “Are there any functions for which the Riemann integral converges but the Lebesgue integral diverges?” Corollary 70 would suggest the answer is “no.” Show, however, that the improper Riemann integral $\int_0^1 f(x) \, dx$ of

$$f(x) = \begin{cases} \frac{\pi}{x} \sin \frac{\pi}{x} & \text{if } x \neq 0 \\ 0 & \text{if } x = 0 \end{cases}$$

exists (and is finite) while the Lebesgue integral is infinite. [Hint: Integration by parts gives

$$\int_a^1 \frac{\pi}{x} \sin \frac{\pi}{x} \, dx = x \cos \frac{\pi}{x} \bigg|_a^1 - \int_a^1 \cos \frac{\pi}{x} \, dx.$$

Why does this converge to a limit as $a \to 0^+$? To check divergence of the Lebesgue integral, consider intervals $[1/(k+1), 1/k]$. On such an interval the sine of $\pi/x$ is everywhere positive or everywhere negative. The cosine is $+1$ at one endpoint and $-1$ at the other. Now use the integration by parts formula again and the fact that the harmonic series diverges.]

*47. A nonnegative linear combination of measurable characteristic functions is a simple function. That is,

$$\phi(x) = \sum_{i=1}^{n} c_i \cdot \chi_{E_i}(x)$$

where $E_1, \ldots, E_n$ are measurable sets and $c_1, \ldots, c_n$ are nonnegative constants. We say that $\sum c_i \chi_{E_i}$ “expresses” $\phi$. If the sets $E_i$ are disjoint and the coefficients $c_i$ are distinct and positive then the expression for $\phi$ is called canonical.

(a) Show that a canonical expression for a simple function exists and is unique.

(b) It is obvious that the integral of $\phi = \sum c_i \chi_{E_i}$ (the measure of its undergraph) equals $\sum c_i m(E_i)$ if the expression is the canonical one. Prove carefully that this remains true for every expression of a simple function.

(c) Infer from (b) that $\int \phi + \psi = \int \phi + \int \psi$ for simple functions.

(d) Given measurable $f, g : \mathbb{R} \to [0, \infty)$, show that there exist sequences of simple functions $\phi_n \uparrow f$ and $\psi_n \uparrow g$ as $n \to \infty$.

(e) Combine (c) and (d) to revalidate linearity of the integral.

In fact this is often how the Lebesgue integral is developed. A “preintegral” is constructed for simple functions, and the integral of a general nonnegative measurable function is defined to be the supremum of the preintegrals of lesser simple functions.

*48. The Devil’s ski slope. Recall from Chapter 3 that the Devil’s staircase function $H : [0, 1] \to [0, 1]$ is continuous, nondecreasing, constant on each interval complementary to the standard Cantor set, and yet is surjective. For $n \in \mathbb{Z}$ and