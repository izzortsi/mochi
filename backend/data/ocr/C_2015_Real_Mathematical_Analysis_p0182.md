Since $I$ and $R = R(f, P, T)$ both belong to $[L, U]$, an interval of length $< \epsilon$, we get $|R - I| < \epsilon$. Therefore $f$ is Riemann integrable and its Riemann integral equals the Darboux integral $I$.

According to Theorem 20 and (2) we get

**21 Riemann’s Integrability Criterion**

A bounded function is Riemann integrable if and only if

$$\forall \epsilon > 0 \exists P \text{ such that } U(f, P) - L(f, P) < \epsilon.$$

**Example** Every continuous function $f : [a, b] \to \mathbb{R}$ is Riemann integrable. (See also Corollary 24 to the Riemann-Lebesgue Theorem, below.) Since $[a, b]$ is compact and $f$ is continuous, $f$ is uniformly continuous. See Theorem 42 in Chapter 2. Let $\epsilon > 0$ be given. Uniform continuity provides a $\delta > 0$ such that if $|t - s| < \delta$ then $|f(t) - f(s)| < \epsilon/2(b - a)$. Choose any partition $P$ with mesh $P < \delta$. On each partition interval $[x_{i-1}, x_i]$, we have $M_i - m_i < \epsilon/(b - a)$. Thus

$$U - L = \sum_{i=1}^{n} (M_i - m_i) \Delta x_i < \frac{\epsilon}{(b - a)} \sum \Delta x_i = \epsilon.$$

By Riemann’s Integrability Criterion $f$ is Riemann integrable.

**Example** The characteristic function (or indicator function) of a set $E \subset \mathbb{R}$, $\chi_E$, takes value 1 at points of $E$ and value 0 at points of $E^c$. See Figure 71. Some characteristic functions are Riemann integrable, while others aren’t. Riemann’s

**Figure 71** The region below the graph of a characteristic function

Integrability Criterion implies that the characteristic function of an interval (including