*70. Let $A \subset \mathbb{R}^n$ be arbitrary, measurable or nonmeasurable.

(a) Prove that the hull and kernel of $A$ are unique up to zero sets.

(b) Prove that $A$ “spreads itself evenly” through its hull in the sense that for each measurable $E$ we have $m^*(A \cap E) = m(H_A \cap E)$.

(c) Prove the following version of the Lebesgue Density Theorem. For almost every $p \in H_A$ we have

$$\lim_{Q \downarrow p} \frac{m^*(A \cap Q)}{mQ} = 1.$$

[Hint: Review the proof of the Lebesgue Density Theorem. Taking $E = Q$ in (b) is useful in proving (c).]

71. True or false: If $H_A$ is a measurable hull of $A$ then $H_A \setminus A$ is a zero set.

72. If $N$ is a doppelgner of a measurable set $E$ (Corollary 67 and Exercise 50) prove that $E$ is a measurable hull of $N$. (Thus $N$ is something like a “nonmeasurable kernel of $E$.”)

*73. Prove that the outer measure of the Cartesian product of sets which are not necessarily measurable is the product of their outer measures. [Hint: If $H_A$ and $H_B$ are hulls of $A$ and $B$ use the Zero Slice Theorem to show that their product is a hull of $A \times B$.]

*74. What about the inner measure of a product?

75. Observe that under Cartesian products, measurable and nonmeasurable sets act like odd and even integers respectively.

(a) Which theorem asserts that the product of measurable sets is measurable? (Odd times odd is odd.)

(b) Is the product of nonmeasurable sets nonmeasurable? (Even times even is even.)

(c) Is the product of a nonmeasurable set and a measurable set having nonzero measure always nonmeasurable? (Even times odd is even.)

(d) Zero sets are special. They correspond to the number zero, an odd number in this imperfect analogy. (Zero times anything is zero.)

*76. Exercise 3.18 asks you to prove that given a closed set $L \subset \mathbb{R}$, there is a $C^\infty$ function $\beta : \mathbb{R} \to [0, \infty)$ whose zero locus $\{x : \beta(x) = 0\}$ equals $L$. Give it another try. Can you also do it in $\mathbb{R}^n$?

77. Suppose that $F \subset [0, 2]$ is a fat Cantor set of measure 1. Prove that there is a $C^\infty$ homeomorphism $h : \mathbb{R} \to \mathbb{R}$ that carries $[0, 2]$ to $[0, 1]$ and sends $F$ to a Cantor set $hF$ of measure zero. [Hint: Use a $\beta$ from Exercise 76 and a constant $c$ to define $hx$ as $c \int_0^x \beta(t) dt$. How does Exercise 3.34 help?]

78. Suppose that $f : \mathbb{R} \to [0, \infty)$ is Lebesgue measurable and $g : [0, \infty) \to [0, \infty)$ is monotone or continuous. Prove that $g \circ f$ is Lebesgue measurable. [Hint: Use the preimage definition of measurability and Exercise 45.]