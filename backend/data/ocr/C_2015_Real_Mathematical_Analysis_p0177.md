Proof (a) Riemann sums behave naturally under linear combination:

$$R(f + cg, P, T) = R(f, P, T) + cR(g, P, T),$$

and it follows that their limits, as mesh $P \to 0$, give the expected formula

$$\int_a^b f(x) + cg(x) dx = \int_a^b f(x) dx + c \int_a^b g(x) dx.$$

(b) Every Riemann sum for the constant function $h(x) = k$ is $k(b - a)$, so its integral equals this number too.

18 Theorem (Monotonicity of the Integral) If $f, g \in \mathbb{R}$ and $f \leq g$ then

$$\int_a^b f(x) dx \leq \int_a^b g(x) dx.$$

Proof For each partition pair $P, T$, we have $R(f, P, T) \leq R(g, P, T).$

19 Corollary If $f \in \mathbb{R}$ and $|f| \leq M$ then $|\int_a^b f(x) dx| \leq M(b - a).$

Proof By Theorem 17, the constant functions $\pm M$ are integrable. By Theorem 18, $-M \leq f(x) \leq M$ implies that

$$-M(b - a) \leq \int_a^b f(x) dx \leq M(b - a).$$

Darboux Integrability

The lower sum and upper sum of a function $f : [a, b] \to [-M, M]$ with respect to a partition $P$ of $[a, b]$ are

$$L(f, P) = \sum_{i=1}^n m_i \Delta x_i \quad \text{and} \quad U(f, P) = \sum_{i=1}^n M_i \Delta x_i$$

where

$$m_i = \inf\{f(t) : x_{i-1} \leq t \leq x_i\} \quad M_i = \sup\{f(t) : x_{i-1} \leq t \leq x_i\}.$$

We assume $f$ is bounded in order to be sure that $m_i$ and $M_i$ are real numbers. Clearly

$$L(f, P) \leq R(f, P, T) \leq U(f, P)$$