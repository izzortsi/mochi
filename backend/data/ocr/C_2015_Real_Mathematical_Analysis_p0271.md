of length $1/n$. There is a subsequence of these intervals that converges to a limit interval $I$. Its length is $1/n$ and by uniform convergence, $f$ is monotone on $I$. Hence $G_n^c$ is closed and $G_n$ is open, which completes the proof that each set $R_n, L_n, G_n$ is open-dense in $C^0$.

Finally, if $f$ belongs to the thick set

$$\bigcap_{n=1}^{\infty} R_n \cap L_n \cap G_n$$

then for each $x \in [a, b]$ there are sequences $h_n^{\pm} \neq 0$ such that $h_n^{-} < 0 < h_n^{+}$ and

$$\left| \frac{f(x + h_n^{-}) - f(x)}{h_n^{-}} \right| > n \quad \left| \frac{f(x + h_n^{+}) - f(x)}{h_n^{+}} \right| > n.$$

The numerator of these fractions is at most $2\|f\|$, so $h_n^{\pm} \to 0$ as $n \to \infty$. Thus $f$ is not differentiable at $x$, nor does it even have a left or right derivative at $x$. Also, $f$ is nonmonotone on every interval of length $1/n$. Since every interval $J$ contains an interval of length $1/n$ when $n$ is large enough, $f$ is nonmonotone on $J$.

Further generic properties of continuous functions have been studied, and you might read about them in the books *A Primer of Real Functions* by Ralph Boas, *Differentiation of Real Functions* by Andrew Bruckner, or *A Second Course in Real Functions* by van Rooij and Schikhof.

8* Spaces of Unbounded Functions

When we contemplate equicontinuity, how important is it that the functions we deal with are bounded, or have domain $[a, b]$ and target $\mathbb{R}$? To some extent we can replace $[a, b]$ with a metric space $X$ and $\mathbb{R}$ with a complete metric space $Y$. Let $\mathcal{F}$ denote the set of all functions $f : X \to Y$. Recall from Exercise 2.116 that the metric $d_Y$ on $Y$ gives rise to a bounded metric

$$\rho(y, y') = \frac{d_Y(y, y')}{1 + d_Y(y, y')},$$

where $y, y' \in Y$. Note that $\rho < 1$. Convergence and Cauchyness with respect to $\rho$ and $d_Y$ are equivalent. Thus completeness of $Y$ with respect to $d_Y$ implies completeness with respect to $\rho$. In the same way we give $\mathcal{F}$ the metric

$$d(f, g) = \sup_{x \in X} \frac{d_Y(fx, gx)}{1 + d_Y(fx, gx)}.$$