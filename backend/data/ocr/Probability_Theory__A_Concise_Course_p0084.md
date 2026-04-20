the limiting distribution $P(k)$ if and only if

$$\lim_{n \to \infty} F_n(z) = F(z),$$

(6.11)

where

$$F(z) = \sum_{k=0}^{\infty} P(k) z^k$$

is the generating function of $P(k)$ and the convergence is uniform in every disk $|z| \leq r < 1$.

Proof. First suppose (6.9) holds. Clearly,

$$|F_n(z) - F(z)| \leq \sum_{k=0}^{K} |P_n(k) - P(k)| + \sum_{k=K+1}^{\infty} |z|^k$$

(6.12)

for any positive integer $K$. Given any $\varepsilon > 0$, we first choose $K$ large enough to make

$$\sum_{k=K+1}^{\infty} |z|^k \leq \frac{r^{K+1}}{1-r} < \frac{\varepsilon}{2},$$

and then find a positive integer $N$ such that

$$|P_n(k) - P(k)| < \frac{\varepsilon}{2(K+1)}$$

holds for $k = 0, \ldots, K$ if $n \geq N$. It then follows from (6.12) that

$$|F_n(z) - F(z)| < \varepsilon$$

if $n \geq N$, which immediately proves (6.11).

Conversely, suppose (6.11) holds, where the convergence is uniform in every disk $|z| \leq r < 1$. Then, by Weierstrass’ theorem on uniformly convergent sequences of analytic functions,$$3$$

$$\lim_{n \to \infty} F_n^{(k)}(z) = F^{(k)}(z), \quad |z| < 1$$

(6.13)

for all $k = 0, 1, 2, \ldots$. But

$$P_n(k) = \frac{1}{k!} F_n^{(k)}(0), \quad P(k) = \frac{1}{k!} F^{(k)}(0),$$

and hence (6.13) implies (6.9) for all $k = 0, 1, 2, \ldots$.

The following example is typical of the situations where the Poisson distribution is encountered:

**Example 4 (Random flow of events).** Suppose that events of a given kind occur randomly in the course of time. For example, we can think in terms

$$3 \text{R. A. Silverman, op. cit., p. 192.}$$