vector ODE is equivalent to $m$ coupled, scalar, linear ODEs. The solution $x(t)$ can be expressed as

$$x(t) = e^{tA}x_0$$

where

$$e^{tA} = \lim_{n \to \infty} \left( I + tA + \frac{1}{2!}(tA)^2 + \cdots + \frac{1}{n!}(tA)^n \right) = \sum_{k=0}^{\infty} \frac{t^k}{k!}A^k.$$

$I$ is the $m \times m$ identity matrix. View this series as a power series with $k^{\text{th}}$ coefficient $t^k/k!$ and variable $A$. ($A$ is a matrix variable!) The limit exists in the space of all $m \times m$ matrices, and its product with the constant vector $x_0$ does indeed give a vector function of $t$ that solves the original linear ODE.

The previous series defines the exponential of a matrix as $e^A = \sum A^k/k!$. You might ask yourself – is there such a thing as the logarithm of a matrix? A function that assigns to a matrix its matrix logarithm? A power series that expresses the matrix logarithm? What about other analytic functions? Is there such a thing as the sine of a matrix? What about inverting a matrix? Is there a power series that expresses matrix inversion? Are formulas such as $\log A^2 = 2\log A$ true? These questions are explored in nonlinear functional analysis.

A terminological point on which to insist is that the word “analytic” be defined as “locally power series expressible.” In the complex case, some mathematicians define complex analyticity as complex differentiability, and although complex differentiability turns out to be equivalent to local expressibility as a complex power series, this is a very special feature of $\mathbb{C}$. In fact it is responsible for every distinction between real and complex analysis. For cross-theory consistency, then, one should use the word “analytic” to mean local power series expressible, and use “differentiable” to mean differentiable. Why confound the two ideas?

7* Nowhere Differentiable Continuous Functions

Although many continuous functions, such as $|x|$, $\sqrt[3]{x}$, and $x\sin(1/x)$ fail to be differentiable at a few points, it is quite surprising that there can exist a function which is everywhere continuous but nowhere differentiable.

31 Theorem There exists a continuous function $f: \mathbb{R} \to \mathbb{R}$ that has a derivative at no point whatsoever.