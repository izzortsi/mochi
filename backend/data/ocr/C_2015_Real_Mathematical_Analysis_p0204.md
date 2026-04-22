More precisely, given a series $\sum a_k$, define $f : [0, \infty) \to \mathbb{R}$ by setting

$$f(x) = a_k \quad \text{if} \quad k - 1 < x \leq k.$$

See Figure 84.

**Figure 84** The pictorial proof of the integral test

Then

$$\sum_{k=0}^{\infty} a_k = \int_{0}^{\infty} f(x) \, dx.$$

The series converges if and only if the improper integral does. The natural interpretation of this picture is the

**41 Integral Test** Suppose that $\int_{0}^{\infty} f(x) \, dx$ is a given improper integral and $\sum a_k$ is a given series.

(a) If $|a_k| \leq f(x)$ for all sufficiently large $k$ and all $x \in (k-1, k]$ then convergence of the improper integral implies convergence of the series.

(b) If $|f(x)| \leq a_k$ for all sufficiently large $k$ and all $x \in [k, k+1)$ then divergence of the improper integral implies divergence of the series.

**Proof** (a) For some large $N_0$ and all $N \geq N_0$ we have

$$\sum_{k=N_0+1}^{N} |a_k| \leq \int_{N_0}^{N} f(x) \, dx \leq \int_{0}^{\infty} f(x) \, dx,$$