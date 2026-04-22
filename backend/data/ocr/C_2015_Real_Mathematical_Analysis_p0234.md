We then must prove that these functions have the properties we know and love from calculus. All three series are easily seen to have radius of convergence $R = \infty$. Theorem 12 justifies term-by-term differentiation, yielding the usual formulas,

$$\exp'(x) = \exp x \quad \sin'(x) = \cos x \quad \cos'(x) = -\sin x.$$

The logarithm has already been defined as the indefinite integral $\int_{1}^{x} 1/t \, dt$. We claim that if $|x| < 1$ then $\log(1+x)$ is given as the power series

$$\log(1+x) = \sum_{k=1}^{\infty} \frac{(-1)^{k+1}}{k} x^k.$$

To check this, we merely note that its derivative is the sum of a geometric series,

$$(\log(1+x))' = \frac{1}{x+1} = \frac{1}{1-(-x)} = \sum_{k=0}^{\infty} (-x)^k = \sum_{k=0}^{\infty} (-1)^k x^k.$$

The last is a power series with radius of convergence 1. Since term by term integration of a power series inside its radius of convergence is legal, we integrate both sides of the equation and get the series expression for $\log(1+x)$ as claimed.

The functions $e^x$ and $1/(1+x^2)$ both have perfectly smooth graphs, but the power series for $e^x$ has radius of convergence $\infty$ while that of $1/(1+x^2)$ is 1. Why is this? What goes “wrong” at radius 1? The function $1/(1+x^2)$ doesn’t blow up or have bad behavior at $x = \pm 1$ like $\log(1+x)$ does. It’s because of $\mathbb{C}$. The denominator $1+x^2$ equals 0 when $x = \pm \sqrt{-1}$. The bad behavior in $\mathbb{C}$ wipes out the good behavior in $\mathbb{R}$.

3 Compactness and Equicontinuity in $C^0$

The Heine-Borel theorem states that a closed and bounded set in $\mathbb{R}^m$ is compact. On the other hand, closed and bounded sets in $C^0$ are rarely compact. Consider, for example, the closed unit ball

$$\mathcal{B} = \{f \in C^0([0,1], \mathbb{R}): \|f\| \leq 1\}.$$

To see that $\mathcal{B}$ is not compact we look again at the sequence $f_n(x) = x^n$. It lies in $\mathcal{B}$. Does it have a subsequence that converges (with respect to the metric $d$ of $C^0$) to a limit in $C^0$? No. For if $f_{n_k}$ converges to $f$ in $C^0$ then $f(x) = \lim_{k \to \infty} f_{n_k}(x)$. Thus $f(x) = 0$ if $x < 1$ and $f(1) = 1$, but this function $f$ does not belong to $C^0$. The cause of the problem is the fact that $C^0$ is infinite-dimensional. In fact it can be shown