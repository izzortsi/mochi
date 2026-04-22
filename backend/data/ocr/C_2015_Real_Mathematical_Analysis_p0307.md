19 Theorem Uniform $C^r$ convergence and Cauchyness are equivalent.

Proof Convergence always implies the Cauchy condition. As for the converse, first assume that $r = 1$. We know that $f_k$ converges uniformly to a continuous function $f$ and the derivative sequence converges uniformly to a continuous limit

$$Df_k \rightrightarrows G.$$

We claim that $Df = G$. Fix $p \in U$ and consider points $q$ in a small convex neighborhood of $p$. The $C^1$ Mean Value Theorem and uniform convergence imply that as $k \to \infty$ we have

$$f_k(q) - f_k(p) = \int_0^1 (Df_k)_{p+t(q-p)} dt (q-p)$$

$$f(q) - f(p) = \int_0^1 G(p+t(q-p)) dt (q-p).$$

This integral of $G$ is a continuous function of $q$ that reduces to $G(p)$ when $p = q$. By the converse part of the $C^1$ Mean Value Theorem, $f$ is differentiable and $Df = G$. Therefore $f$ is $C^1$ and $f_k$ converges $C^1$ uniformly to $f$ as $k \to \infty$, completing the proof when $r = 1$.

Now suppose that $r \geq 2$. The maps $Df_k : U \rightarrow \mathcal{L}$ form a uniformly $C^{r-1}$ Cauchy sequence. The limit, by induction, is $C^{r-1}$ uniform; i.e., as $k \to \infty$ we have

$$D^s(Df_k) \rightrightarrows D^s G$$

for all $s \leq r - 1$. Hence $f_k$ converges $C^r$ uniformly to $f$ as $k \to \infty$, completing the induction.

The $C^r$ norm of a $C^r$ function $f : U \rightarrow \mathbb{R}^m$ is

$$\|f\|_r = \max\{ \sup_{x \in U} |f(x)|, \ldots, \sup_{x \in U} \|(D^r f)_x\| \}.$$

The set of functions with $\|f\|_r < \infty$ is denoted $C^r(U, \mathbb{R}^m)$.

20 Corollary $\| \|_r$ makes $C^r(U, \mathbb{R}^m)$ a Banach space – a complete normed vector space.

Proof The norm properties are easy to check; completeness follows from Theorem 19.