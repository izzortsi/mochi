At stage $n$ in the Cantor set construction we discard the open middle third of an interval $C_\alpha = [\ell_\alpha, \ell_\alpha + 1/3^n]$, where the left endpoint is

$$\ell_\alpha = \sum_{i=1}^{n} \frac{\alpha_i}{3^i} = (\alpha_1 \alpha_2 \dots \alpha_n)_3.$$

and each $\alpha_i$ is 0 or 2. Thus the discarded interval is

$(\ell_\alpha + 1/3^{n+1}, \ell_\alpha + 2/3^{n+1}) = ((\alpha_1)_3, (\alpha_2)_3) = ((\alpha_0 \bar{2})_3, (\alpha_2)_3)$

since $1/3^{n+1} = \sum_{j=n+2}^{\infty} 2/3^j$. This expresses both endpoints base-3 using only the numerals 0 and 2. Evaluating $H$ on them gives equal value:

$$H(\ell_\alpha + 1/3^{n+1}) = H((\alpha_0 \bar{2})_3) = \sum_{i=1}^{n} \frac{\alpha_i/2}{2^i} + \frac{0}{2^{n+1}} + \sum_{j=n+2}^{\infty} \frac{1}{2^j}$$

$$H(\ell_\alpha + 2/3^{n+1}) = H((\alpha_2)_3) = \sum_{i=1}^{n} \frac{\alpha_i/2}{2^i} + \frac{1}{2^{n+1}}.$$

This verifies that the definition of $H$ being constant on the discarded intervals makes sense and completes the proof that $H$ is continuous on $[0, 1]$.

It is clear that $H(0) = 0$ and

$$H(1) = H((\bar{2})_3) = \sum_{i=1}^{\infty} \frac{2/2}{2^i} = 1.$$

Thus $H$ is surjective. If $x, x' \in C$ and $x < x'$ then it is also clear that $H(x) < H(x')$, which implies that $H$ is nondecreasing on $[0, 1]$. Since $H$ is constant on the complement of the Cantor set, its derivative exists and is zero almost everywhere. $\square$

A yet more pathological example is a strictly monotone, continuous function $J$ whose derivative is almost everywhere zero. Its graph is a sort of Devil’s ski slope, almost everywhere level but also everywhere downhill. To construct $J$, start with $H$ and extend it to a function $\hat{H} : \mathbb{R} \to \mathbb{R}$ by setting $\hat{H}(x+n) = H(x)+n$ for all $n \in \mathbb{Z}$ and all $x \in [0, 1]$. Then set

$$J(x) = \sum_{k=0}^{\infty} \frac{\hat{H}(3^k x)}{4^k}.$$

The values of $\hat{H}(3^k x)$ for $x \in [0, 1]$ are $\leq 3^k$, which is much smaller than the denominator $4^k$. Thus the series converges and $J(x)$ is well defined. According to the Weierstrass $M$-test, proved in the next chapter, $J$ is continuous. Since $\hat{H}(3^k x)$