Theorem 2.5 (improved Picard–Lindelöf). Suppose $f \in C(U, \mathbb{R}^n)$, where $U$ is an open subset of $\mathbb{R}^{n+1}$, and $f$ is locally Lipschitz continuous in the second argument. Choose $(t_0, x_0) \in U$ and $\delta, T > 0$ such that $[t_0, t_0 + T] \times \overline{B_\delta(x_0)} \subset U$. Set

$$M(t) = \int_{t_0}^{t} \sup_{x \in B_\delta(x_0)} |f(s, x)| ds,$$

(2.23)

$$L(t) = \sup_{x \neq y \in B_\delta(x_0)} \frac{|f(t, x) - f(t, y)|}{|x - y|}.$$

(2.24)

Note that $M(t)$ is nondecreasing and define $T_0$ via

$$T_0 = \sup\{0 < t \leq T | M(t_0 + t) \leq \delta\}.$$

(2.25)

Suppose

$$L_1(T_0) = \int_{t_0}^{t_0 + T_0} L(t) dt < \infty.$$

(2.26)

Then the unique local solution $\overline{x}(t)$ of the IVP (2.10) is given by

$$\overline{x} = \lim_{m \to \infty} K^m(x_0) \in C^1([t_0, t_0 + T_0], \overline{B_\delta(x_0)}),$$

(2.27)

where $K^m(x_0)$ is defined in (2.13), and satisfies the estimate

$$\sup_{t_0 \leq t \leq T_0} |\overline{x}(t) - K^m(x_0)(t)| \leq \frac{L_1(T_0)m}{m!} e^{L_1(T_0)} \int_{t_0}^{t_0 + T_0} |f(s, x_0)| ds.$$

(2.28)

An analogous result holds for $t < t_0$.

Proof. Again we choose $t_0 = 0$ for notational simplicity. Our aim is to verify the assumptions of Theorem 2.4 choosing $X = C([0, T_0], \mathbb{R}^n)$ with norm $\|x\| = \max_{0 \leq t \leq T_0} |x(t)|$ and $C = \{x \in X \mid \|x - x_0\| \leq \delta\}$.

First of all, if $x \in C$ we have

$$|K(x)(t) - x_0| \leq \int_{0}^{t} |f(s, x(s))| ds \leq M(t) \leq \delta, \quad t \in [0, T_0],$$

that is, $K(x) \in C$ as well. In particular, this explains our choice for $T_0$.

Next we claim

$$|K^m(x)(t) - K^m(y)(t)| \leq \frac{L_1(t)m}{m!} \sup_{0 \leq s \leq t} |x(s) - y(s)|,$$

(2.29)