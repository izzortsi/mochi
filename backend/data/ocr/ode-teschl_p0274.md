$$\|A^{-1}_-\| = 0 \text{ if there are no eigenvalues outside the unit circle). Then for every bounded } g \text{ satisfying}$$

$$|g(x) - g(y)| \leq \varepsilon |x - y|, \quad \varepsilon < \frac{1 - \alpha}{2}, \tag{9.30}$$

there is a unique continuous map $\varphi(x) = x + h(x)$ with $h$ bounded such that

$$\varphi \circ A = f \circ \varphi, \quad f = A + g. \tag{9.31}$$

If $f$ is invertible (e.g. if $\varepsilon \|A^{-1}\| < 1$), then $\varphi$ is a homeomorphism and if in addition $g(0) = 0$ then $\varphi(0) = 0$.

**Proof.** We will assume that $A$ has eigenvalues both inside and outside the unit circle. The modifications for the two remaining cases are straightforward.

The requirement (9.31) is equivalent to

$$h(Ax) - Ah(x) = g(x + h(x)). \tag{9.32}$$

We will investigate this equation in the Banach space of continuous functions $C(\mathbb{R}^n, \mathbb{R}^n)$ with the sup norm. First of all note that the linear operator $U : C(\mathbb{R}^n, \mathbb{R}^n) \to C(\mathbb{R}^n, \mathbb{R}^n)$ given by $(Uh)(x) = h(Ax)$ is invertible (since $A$ is) and norm preserving. Clearly we can also regard $A$ as a linear operator $A : C(\mathbb{R}^n, \mathbb{R}^n) \to C(\mathbb{R}^n, \mathbb{R}^n)$ given by $(Ah)(x) = Ah(x)$.

Introducing $L = U - A$ we can write (9.32) as $Lh(x) = g(x + h(x))$. To obtain a fixed point equation we need to invert $L$. By splitting $C(\mathbb{R}^n, \mathbb{R}^n) = C(\mathbb{R}^n, E^{-}(A)) \oplus C(\mathbb{R}^n, E^{+}(A))$ we obtain corresponding splittings $A = A_- \oplus A_+, U = U_- \oplus U_+$, and $L = L_- \oplus L_+$ (note that both $A$ and $U$ leave these spaces invariant).

By $L_- = -A_-(\mathbb{I} - A^{-1}_U_-)$ we see that $L^{-1}_- = -(\mathbb{I} - A^{-1}_U_-)^{-1}A^{-1}_-$, where $(\mathbb{I} - A^{-1}_U_-)$ is invertible with inverse given by the Neumann series (Problem 9.13)

$$(\mathbb{I} - A^{-1}_U_-)^{-1} = \sum_{n=0}^{\infty}(A^{-1}_U_-)^n$$

since $\|A^{-1}_U_-\| \leq \alpha$. In particular, $\|L^{-1}_-\| \leq \frac{1}{1-\alpha}$. Similarly, $L^{+1}_- = (\mathbb{I} - U^{+1}_A_+)^{-1}U^{+1}_+$ with $\|L^{+1}_-\| \leq \frac{1}{1-\alpha}$.

In summary, $L^{-1} = (U_- - A_-)^{-1} \oplus (U_+ - A_+)^{-1}$ exists and $\|L^{-1}\| \leq \frac{2}{1-\alpha}$. Hence it remains to solve the fixed point equation

$$h(x) = L^{-1}g(x + h(x)).$$