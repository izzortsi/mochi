6

Lebesgue Theory

This chapter presents a geometric theory of Lebesgue measure and integration. In calculus you certainly learned that the integral is the area under the curve. With a good definition of area that is the point of view I advance here. Deriving the basic theory of Lebesgue integration then becomes a matter of inspecting the right picture. See Appendix E for the geometric relation between Riemann integration and Lebesgue integration.

Throughout the chapter definitions and theorems are stated in $\mathbb{R}^n$ but proved in $\mathbb{R}^2$. Multidimensionality can complicate a proof’s notation but never its logic.

1 Outer Measure

How should you measure the length of a subset of the line? If the set to be measured is simple, so is the answer. The length of the interval $(a, b)$ is $b - a$. But what is the length of the set of rational numbers? of the Cantor set? As is often the case in analysis we proceed by inequalities and limits. In fact one might distinguish the fields of algebra and analysis solely according to their use of equalities versus inequalities.

Definition The length of an interval $I = (a, b)$ is $b - a$. It is denoted $|I|$. The Lebesgue outer measure of a set $A \subset \mathbb{R}$ is

$$m^*A = \inf \left\{ \sum_k |I_k| : \{I_k\} \text{ is a covering of } A \text{ by open intervals} \right\}.$$