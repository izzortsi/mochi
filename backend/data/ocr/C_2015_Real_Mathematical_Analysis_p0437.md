9 Calculus à la Lebesgue

In this section we write the integral of $f$ over a set $A$ as $\int_A f(x) \, dm$. In dimension 1 we write it as $\int_A f(t) \, dt$ or as $\int_\alpha^\beta f(t) \, dt$ when $A = (\alpha, \beta)$.

**Definition** The average of a locally integrable function $f : \mathbb{R}^n \to \mathbb{R}$ over a measurable set $A \subset \mathbb{R}^n$ with finite positive measure is

$$\int_A f(x) \, dm = \frac{1}{mA} \int_A f(x) \, dm.$$

By “locally integrable” we mean “integrable on a small enough neighborhood of each point in $\mathbb{R}^n$.” One can also write the average of $f$ over $A$ as $[f : A]$. If $\chi_E$ is the characteristic function of $E$ then $[\chi_E : A] = [E : A]$.

The following result is also called Lebesgue’s Fundamental Theorem of Calculus.

**51 Average Value Theorem** If $f : \mathbb{R}^n \to \mathbb{R}$ is locally integrable then for almost every $p \in \mathbb{R}^n$ we have

$$\lim_{Q \downarrow p} \int_Q f(x) \, dm = f(p),$$

where $Q \downarrow p$ means that $Q$ is a cube which contains $p$ and shrinks down to $p$.

**52 Lemma** If $g : \mathbb{R}^n \to [0, \infty)$ is integrable then for every $\alpha > 0$ the set $X(\alpha, g) = \{p : \limsup_{Q \downarrow p} \int_Q g > \alpha\}$ has outer measure

$$m^*(X(g, \alpha)) \leq \frac{1}{\alpha} \int g.$$

**Proof** The set $X(\alpha, g)$ is covered by arbitrarily small cubes on which the average value of $g$ exceeds $\alpha$. By Vitali’s Covering Lemma we have

$$\bigsqcup Q_i \supset X(g, \alpha)$$

up to a zero set, where the average of $g$ on $Q_i$ is $> \alpha$. Hence $\alpha \cdot m(Q_i) \leq \int_{Q_i} g$ and

$$\alpha \cdot m^*(X(g, \alpha)) \leq \sum \alpha \cdot m(Q_i) \leq \sum \int_{Q_i} g \leq \int g.$$

Dividing the first and last terms by $\alpha$ gives the assertion.