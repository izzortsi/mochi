6 Lebesgue Integrals

Following J.C. Burkill, we justify the maxim that the integral of a function is the area under its graph. Let $f : \mathbb{R} \to [0, \infty)$ be given.†

**Definition** The undergraph of $f$ is

$$\mathcal{U}f = \{(x, y) \in \mathbb{R} \times [0, \infty) : 0 \leq y < f(x)\}.$$

The function $f$ is (Lebesgue) measurable if $\mathcal{U}f$ is measurable with respect to planar Lebesgue measure, and if it is then the Lebesgue integral of $f$ is the measure of the undergraph

$$\int f = m(\mathcal{U}f).$$

**Figure 143** The geometric definition of the integral is the measure of the undergraph.

See Figure 143.

Burkill refers to the undergraph as the **ordinate set** of $f$. The notation for the Lebesgue integral intentionally omits the usual “$dx$” and the limits of integration to remind you that it is not merely the ordinary Riemann integral $\int_a^b f(x) dx$ or the improper Riemann integral $f_{-\infty}^{\infty} f(x) dx$.

Since a measurable set can have infinite measure we permit $\int f = \infty.$

†In this section we deal with functions of one variable. The multivariable case in which $f : \mathbb{R}^n \to \mathbb{R}$ offers no new ideas, only new notation.