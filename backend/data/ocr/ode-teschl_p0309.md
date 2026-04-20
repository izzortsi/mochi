it is not hard to verify that

$$T_2^n(x) = \begin{cases} 
2^n x - 2j, & \frac{2j}{2^n} \leq x \leq \frac{2j+1}{2^n} \\
2(j+1) - 2^n x, & \frac{2j+1}{2^n} \leq x \leq \frac{2j+2}{2^n}
\end{cases} \bigg\}_{0 \leq j \leq 2^{n-1}-1}.$$

(11.14)

Moreover, each of the intervals $I_{n,j} = [\frac{j}{2^n}, \frac{j+1}{2^n}]$ is mapped to $[0,1]$ under $T_2^n$. Hence each of the intervals $I_{n,j}$ contains (precisely) one solution of $T_2^n(x) = x$ implying that periodic points are dense. For given $x \in [0,1]$ and $\varepsilon > 0$ we can find $n,j$ such that $I_{n,j} \subset B_\varepsilon(x)$. Hence $T_2^n(B_\varepsilon(x)) = [0,1]$ which shows that $T_2$ is transitive. Hence the system is chaotic. It is also not hard to show directly that $T_2$ has sensitive dependence on initial conditions (exercise).

Suppose $f(0) = f(1) = 0$, $f(\frac{1}{2}) = 1$, and suppose $f$ is monotone increasing, decreasing on $[0, \frac{1}{2}], [\frac{1}{2}, 1]$. Does any such map have similar properties? Is such a map always chaotic?

**Problem 11.3.** Show that a closed invariant set which has a dense forward orbit is topologically transitive.

**Problem 11.4.** Show that $T_2$ and $L_4$ are topologically equivalent via the map $\varphi(x) = \sin(\frac{\pi x}{2})^2$ (i.e., show that $\varphi : [0,1] \rightarrow [0,1]$ is a homeomorphism and that $\varphi \circ T_2 = L_4 \circ \varphi$).

**Problem 11.5.** Find a topological conjugation $\varphi(x) = mx + d$ which maps $f(x) = \alpha x^2 + \beta x + \gamma$ to $g(x) = x^2 + c$. Find $m, d,$ and $c$ in terms of $\alpha, \beta,$ and $\gamma$.

**11.4. Cantor sets and the tent map**

Now let us further investigate the tent map $T_\mu$ for $\mu > 2$. Unfortunately, in this case $T_\mu$ does no longer map $[0,1]$ into itself. Hence we must consider it as a map on $\mathbb{R}$,

$$M = \mathbb{R}, \quad T_\mu(x) = \frac{\mu}{2}(1 - |2x - 1|).$$

(11.15)

It is not hard to show that $T_\mu^n(x) \rightarrow -\infty$ if $x \in \mathbb{R}\setminus[0,1]$. Hence most points will escape to $-\infty$. However, there are still some points in $[0,1]$ which stay in $[0,1]$ for all iterations (e.g., 0 and 1). But how can we find these points?

Let $\Lambda_0 = [0,1]$. Then the points which are mapped to $\Lambda_0$ under one iteration are given by $(\frac{1}{\mu}\Lambda_0) \cup (1 - \frac{1}{\mu}\Lambda_0)$. Denote this set by

$$\Lambda_1 = [0, \frac{1}{\mu}] \cup [1 - \frac{1}{\mu}, 1].$$

(11.16)

All points in $\mathbb{R}\setminus\Lambda_1$ escape to $-\infty$ since the points in $(\frac{1}{\mu}, 1 - \frac{1}{\mu})$ are mapped to $\mathbb{R}\setminus[0,1]$ after one iteration.