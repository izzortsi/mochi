condition – there is a constant $L$ such that for all points $x, y \in U$ we have

$$|F(x) - F(y)| \leq L|x - y|.$$

Here, $|$ refers to the Euclidean length of a vector. $F, x, y$ are all vectors in $\mathbb{R}^m$. It follows that $F$ is continuous. The Lipschitz condition is stronger than continuity, but still fairly mild. Any differentiable vector field with a bounded derivative is Lipschitz.

25 Picard’s Theorem Given $p \in U$ there exists an $F$-trajectory $\gamma(t)$ in $U$ through $p$. This means that $\gamma : (a, b) \to U$ solves (20). Locally, $\gamma$ is unique.

To prove Picard’s Theorem it is convenient to reexpress (20) as an integral equation; to do this we make a brief digression about vector-valued integrals. Let’s recall four key facts about integrals of real-valued functions of a real variable, $y = f(x)$, $a \leq x \leq b$.

(a) $\int_a^b f(x) \, dx$ is approximated by Riemann sums $R = \sum f(t_k) \Delta x_k$.

(b) Continuous functions are integrable.

(c) If $f'(x)$ exists and is continuous then $\int_a^b f'(x) \, dx = f(b) - f(a)$.

(d) $\left| \int_a^b f(x) \, dx \right| \leq M(b - a)$ where $M = \sup |f(x)|$.

The Riemann sum $R$ in (a) has $a = x_0 \leq \cdots \leq x_{k-1} \leq t_k \leq x_k \leq \cdots \leq x_n = b$ and all the $\Delta x_k = x_k - x_{k-1}$ are small.

Given a continuous vector-valued function of a real variable

$$f(x) = \left(f_1(x), \ldots, f_m(x)\right),$$

$a \leq x \leq b$, we define its integral componentwise as the vector of integrals

$$\int_a^b f(x) \, dx = \left( \int_a^b f_1(x) \, dx, \ldots, \int_a^b f_m(x) \, dx \right).$$

Corresponding to (a) - (d) are the following:

(a') $\int_a^b f(x) \, dx$ is approximated by $R = (R_1, \ldots, R_m)$, with $R_j$ a Riemann sum for $f_j$.

(b') Continuous vector-valued functions are integrable.

(c') If $f'(x)$ exists and is continuous, then $\int_a^b f'(x) \, dx = f(b) - f(a)$.

(d') $\left| \int_a^b f(x) \, dx \right| \leq M(b - a)$ where $M = \sup |f(x)|$.