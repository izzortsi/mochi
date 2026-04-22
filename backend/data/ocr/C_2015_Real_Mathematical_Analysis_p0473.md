79. (a) For a bijection $h$ verify that $\chi_A = \chi_{hA} \circ h$.
(b) Let $h : \mathbb{R} \rightarrow \mathbb{R}$ be the smooth homeomorphism supplied by Exercise 77. Why does $F$ contain a nonmeasurable set $P$ and why is $hP$ measurable?
(c) Why is the nonmeasurable function $\chi_P$ the composition $\chi_{hP} \circ h$.
(d) Infer that a continuous function following a Lebesgue measurable function is Lebesgue measurable (Exercise 78) but a Lebesgue measurable function following a continuous (or even smooth) function may fail to be Lebesgue measurable.

80. Let $h : [0, 2] \rightarrow [0, 1]$ be the smooth homeomorphism supplied by Exercise 77 and let $P \subset F$ be nonmeasurable. Set $f_n(x) = 0$ for all $n, x$.
(a) Is it true that the functions $f_n$ are Borel measurable and converge almost everywhere to $\chi_{hP}$?
(b) Is $\chi_{hP}$ Lebesgue measurable?
(c) Is $\chi_{hP}$ Borel measurable?
(d) Infer that if a sequence of Borel measurable functions converges almost everywhere to a limit function then that limit function may fail to be Borel measurable.

81. Improve the Average Value Theorem to assert that not only is it true that for almost every $p$ the average $f_Q f_dm \rightarrow f(p)$ as $Q \downarrow p$, but actually for almost every $p$ we have

$$\lim_{Q \downarrow p} \int_Q |f - fp| \, dm = 0.$$

[Hint: Apply the Average Value Theorem to each of the countably many functions $|f - r|$ where $r \in \mathbb{Q}.$]

**82. Use the Improved Average Value Theorem from Exercise 81 to give a second proof of Lusin’s Theorem that does not use countable bases or preimage measurability.

83. Suppose that $(f_k)$ is a sequence of measurable functions that converge almost everywhere to $f$ as $k \rightarrow \infty$.
(a) Formulate and prove Egoroff’s Theorem if the functions are defined on a box in $n$-space.
(b) Is Egoroff’s Theorem true or false for a sequence of functions defined on an unbounded set having finite measure?
(c) Give an example of a sequence of functions defined on $\mathbb{R}$ for which Egoroff’s Theorem fails.
(d) Prove that if the functions are defined on $\mathbb{R}^n$ and $\epsilon > 0$ is given then there is an $\epsilon$-set $S \subset \mathbb{R}^n$ such that for each compact $K \subset \mathbb{R}^n$, the sequence of functions restricted to $K \cap S^c$ converges uniformly.