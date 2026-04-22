If $A$ divides $B$ cleanly then

$$m^*A + m^*(B \setminus A) = mB.$$

Finiteness of these four quantities permits subtraction, so $m^*A = m^*A$ and $A$ is measurable. The converse is obvious because a measurable set divides every test set cleanly. $\square$

5 Products and Slices

Regularity of Lebesgue measure has a number of uses such as in Exercises 69, 21, 22, 23, and 73. Here are some more.

21 Measurable Product Theorem If $A \subset \mathbb{R}^n$ and $B \subset \mathbb{R}^k$ are measurable then $A \times B$ is measurable and

$$m(A \times B) = mA \cdot mB.$$

By convention $0 \cdot \infty = 0 = \infty \cdot 0.$

22 Lemma If $A$ and $B$ are boxes then $A \times B$ is measurable and $m(A \times B) = mA \cdot mB.$

Proof $A \times B$ is a box and the product formula follows from Corollary 15. $\square$

23 Lemma If $A$ or $B$ is a zero set then $A \times B$ is measurable and $m(A \times B) = mA \cdot mB = 0.$

Proof We assume $A, B \subset \mathbb{R}$ and $mA = 0$. If $\epsilon > 0$ and $\ell \in \mathbb{N}$ are given then we cover $A$ with open intervals $I_i$ whose total length is so small that the total area of the rectangles $I_i \times [-\ell, \ell]$ is $< \epsilon/2^\ell$. The union of all these rectangles covers $A \times \mathbb{R}$ and has measure $< \epsilon$. The $\epsilon$-Principle implies $m^*(A \times \mathbb{R}) = 0$. Since $A \times B \subset A \times \mathbb{R}$ it follows that $A \times B$ is a zero set. All zero sets are measurable so we have $m(A \times B) = mA \cdot mB = 0.$ $\square$

24 Lemma Every open set in $n$-space is a countable union of disjoint open cubes plus a zero set.

Proof Take $n = 2$, accept all the open unit dyadic squares that lie in $U$, and reject the rest. Bisect every rejected square into four equal subsquares. Accept the interiors of all these subsquares that lie in $U$, and reject the rest. Proceed inductively, bisecting