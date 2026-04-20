Figure 3.4. Phase portrait for a planar system with purely imaginary eigenvalues.

Figure 3.5. Phase portrait for a planar system with equal real eigenvalues (not diagonalizable).

Finally, we turn to the general case. As before, the considerations of the previous section show that it suffices to consider the case of one Jordan block

$$\exp(tJ) = e^{\alpha t} \begin{pmatrix} 1 & t & \frac{t^2}{2!} & \ldots & \frac{t^{n-1}}{(n-1)!} \\ 1 & t & \ddots & \vdots \\ 1 & \ddots & \frac{t^2}{2!} \\ \vdots & \ddots & t \\ 1 & \vdots & 1 \end{pmatrix}.$$ (3.42)

In particular, every solution is a linear combination of terms of the type $t^j \exp(\alpha t)$. Since $\exp(\alpha t)$ decays faster than any polynomial, our entire Jordan block converges to zero if $\lambda = \text{Re}(\alpha) < 0$ (cf. Problem 3.7). If $\lambda = 0$, $\exp(\alpha t) = \exp(i\omega t)$ will remain at least bounded, but the polynomial