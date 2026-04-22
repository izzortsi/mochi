17. Define $e : \mathbb{R} \to \mathbb{R}$ by

$$e(x) = \begin{cases} e^{-1/x} & \text{if } x > 0 \\ 0 & \text{if } x \leq 0 \end{cases}$$

(a) Prove that $e$ is smooth; that is, $e$ has derivatives of all orders at all points $x$. [Hint: L’Hôpital and induction. Feel free to use the standard differentiation formulas about $e^x$ from calculus.]

(b) Is $e$ analytic?

(c) Show that the **bump function**

$$\beta(x) = e^2 e(1-x) \cdot e(x+1)$$

is smooth, identically zero outside the interval $(-1, 1)$, positive inside the interval $(-1, 1)$, and takes value 1 at $x = 0$.† ($e^2$ is the square of the base of the natural logarithms, while $e(x)$ is the function just defined. Apologies to the abused notation.)

(d) For $|x| < 1$ show that

$$\beta(x) = e^{-2x^2/(x^2-1)}$$

Bump functions have wide use in smooth function theory and differential topology. The graph of $\beta$ looks like a bump. See Figure 86.

**Figure 86** The graph of the bump function $\beta$

**18.** Let $L$ be any closed set in $\mathbb{R}$. Prove that there is a smooth function $f : \mathbb{R} \to [0, 1]$ such that $f(x) = 0$ if and only if $x \in L$. To put it another way, every closed set in $\mathbb{R}$ is the zero locus of some smooth function. [Hint: Use Exercise 17(c).]

†The **support** of a function is the closure of the set of points at which the function is nonzero. The support of $\beta$ is $[-1, 1]$.