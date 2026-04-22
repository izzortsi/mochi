The $E_a$ are monotone increasing zero sets as $a \uparrow 1$. Letting $a = 1 - 1/\ell$ with $\ell = 1, 2, \ldots$, we see that the union of all the $E_a$ with $a < 1$ is also a zero set, say $Z$. Points $p \in E \setminus Z$ have the property that as $Q \downarrow p$, the liminf of the concentration of $E$ in $Q$ is $\geq a$ for all $a < 1$. Since the concentration is always $\leq 1$ this means the limit of the concentration exists and equals 1 for all $p \in E \setminus Z$; i.e., almost every point of $E$ is a density point of $E$.

48 Corollary If $E$ is measurable then for almost every $p$ we have

$$\chi_E(p) = \lim_{Q \downarrow p}[E : Q].$$

Proof For almost every $p \in E$ we have $\lim_{Q \downarrow p}[E : Q] = 1$ and for almost every $q \in E^c$ we have $\lim_{Q \downarrow q}[E^c : Q] = 1$. Measurability of $E$ implies $[E : Q] + [E^c : Q] = 1$, which completes the proof.

A consequence of the Lebesgue Density Theorem is that measurable sets are not “diffuse” – a measurable subset of $\mathbb{R}$ can not meet every interval $(a, b)$ in a set of measure $c \cdot (b - a)$ where $c$ is a constant, $0 < c < 1$. Instead, a measurable set must be “concentrated” or “clumpy.” See Exercise 56. Also, looking at the complement $E^c$ of $E$, we see that almost every point $x \in E^c$ has $\delta(E, x) = 0$. Thus, almost every point of $E$ is a density point of $E$ and almost every point of $E^c$ is not.

Think of the set of density points of $E$ as the **measure-theoretic interior** of $E$, the set of density points of $E^c$ as the **measure-theoretic exterior** of $E$, and the remaining set as the **measure-theoretic boundary** of $E$. We denote the last set as $\partial_m(E)$. Regularity of Lebesgue measure and the Lebesgue Density Theorem imply that measurability of $E$ is equivalent $m(\partial_m(E)) = 0$.

As you might expect, Cavalieri’s Principle meshes well with density points. Recall that the slice of the undergraph is the undergraph of the slice,

$$(\mathcal{U}f)_x = \mathcal{U}f_x \quad (\mathcal{U}f)^y = \mathcal{U}f^y,$$

where $f_x(y) = f(x, y) = f^y(x)$.

49 Theorem Density points slice well.

Proof We assume that $f : \mathbb{R}^n \to [0, \infty)$ is measurable and $(p, y) \in \mathcal{U}f$ has $y > 0$. Figure 152 shows that $(p, y)$ is a density point of $\mathcal{U}f$ if and only if $p$ is a density point of $\mathcal{U}(f^y)$.