Next we ask how integrals and derivatives behave with respect to uniform convergence. Integrals behave better than derivatives.

6 Theorem The uniform limit of Riemann integrable functions is Riemann integrable, and the limit of the integrals is the integral of the limit,

$$\lim_{n \to \infty} \int_a^b f_n(x) \, dx = \int_a^b \lim_{n \to \infty} f_n(x) \, dx.$$

In other words, $\mathcal{R}$, the set of Riemann integrable functions defined on $[a, b]$, is a closed subset of $C_b$ and the integral functional $f \mapsto \int_a^b f(x) \, dx$ is a continuous map from $\mathcal{R}$ to $\mathbb{R}$. This extends the regularity hierarchy to

$$C_b \supset \mathcal{R} \supset C^0 \supset C^1 \supset \cdots \supset C^\infty \supset C^\omega.$$

Theorem 6 gives the simplest condition under which the operations of taking limits and integrals commute.

Proof Let $f_n \in \mathcal{R}$ be given and assume that $f_n \Rightarrow f$ as $n \to \infty$. By the Riemann-Lebesgue Theorem, $f_n$ is bounded and there is a zero set $Z_n$ such that $f_n$ is continuous at each $x \in [a, b] \setminus Z_n$. Theorem 1 implies that $f$ is continuous at each $x \in [a, b] \setminus \bigcup Z_n$, while Theorem 3 implies that $f$ is bounded. Since $\bigcup Z_n$ is a zero set, the Riemann-Lebesgue Theorem implies that $f \in \mathcal{R}$. Finally

$$\left| \int_a^b f(x) \, dx - \int_a^b f_n(x) \, dx \right| = \left| \int_a^b f(x) - f_n(x) \, dx \right|$$

$$\leq \int_a^b |f(x) - f_n(x)| \, dx \leq d(f, f_n)(b - a) \to 0$$

as $n \to \infty$. Hence the integral of the limit is the limit of the integrals.

7 Corollary If $f_n \in \mathcal{R}$ and $f_n \Rightarrow f$ then the indefinite integrals converge uniformly,

$$\int_a^x f_n(t) \, dt \Rightarrow \int_a^x f(t) \, dt.$$

Proof As above,

$$\left| \int_a^x f(t) \, dt - \int_a^x f_n(t) \, dt \right| \leq d(f_n, f)(x - a) \leq d(f_n, f)(b - a) \to 0$$

when $n \to \infty$.