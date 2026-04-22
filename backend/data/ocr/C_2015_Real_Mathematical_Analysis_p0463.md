15. Construct a Jordan curve (homeomorphic copy of the circle) in $\mathbb{R}^2$ that has positive planar measure. [Hint: Given a Cantor set in the plane, is there a Jordan curve that contains it? Is there a Cantor set in the plane with positive planar measure? (Take another look at Section 9 in Chapter 2.)]

16. Write out the proofs of Lemmas 23, 24, and 25 in the $n$-dimensional case.

17. Write out the proofs of the Measurable Product Theorem (Theorem 21) and the Zero Slice Theorem (Theorem 26) in the unbounded, $n$-dimensional case.

**18. Suppose that $E$ is measurable.

(a) If $E \subset \mathbb{R}$ and $\epsilon > 0$ is given, prove there exists a fat Cantor set $F \subset E$ such that $mE \leq m(F) + \epsilon$. [Hint: Review Exercise 2.151.]

(b) Do the same in $\mathbb{R}^n$.

(c) Do the same in $\mathbb{R}$ and $\mathbb{R}^n$ if $E$ is nonmeasurable but $m_*E > 0$. [Hint: $K_E$.]

**19. Consider linear Lebesgue measure $m_1$ on the interval $I$ and planar Lebesgue measure $m_2$ on the square $I^2$. Construct a meseometry $I \rightarrow I^2$. Thus meseometry disrespects topology: $(I, \mathcal{M}(I), m_1)$ is meseometric to $(I^2, \mathcal{M}(I^2), m_2)$. [Hint: You might use the following outline. The inclusion $I \setminus \mathbb{Q} \rightarrow I$ is injective and preserves $m_1$. You can convert it to a bijection $\alpha : I \setminus \mathbb{Q} \rightarrow I$ by choosing a countable set $L \subset I \setminus \mathbb{Q}$ and then choosing any bijection $\alpha_0 : L \rightarrow L \cup (\mathbb{Q} \cap I)$. Then you can set $\alpha(x) = \alpha_0(x)$ when $x \in L$ and $\alpha(x) = x$ otherwise. Why is $\alpha$ is a meseometry? (Already this shows that nonhomeomorphic spaces can have meseometric measure spaces.) In the same way there is a meseometry $\beta : I^2 \setminus \mathbb{Q}^2 \rightarrow I^2$. Then let $A = I \setminus \mathbb{Q}$. Express $x \in A$ as a base-2 expansion

$$x = (a_1 a_2 a_3 a_4 a_5 a_6 \ldots)$$

using the digits 0 and 1. It is unique since $x$ is irrational. Then consider the corresponding base-4 expansion

$$\sigma(x) = ((a_1 a_2)(a_3 a_4)(a_5 a_6) \ldots)$$

using the digits (00), (01), (10), and (11). Prove that $\sigma(A) = I^2 \setminus \mathbb{Q}^2$ and $\sigma$ preserves measure. Conclude that $T = \beta \circ \sigma \circ \alpha^{-1}$ is a meseometry $I \rightarrow I^2$.]

20. Generalize Exercise 19 with $\mathbb{R}$ in place of $I$ and then with $\mathbb{R}^n$ in place of $\mathbb{R}$.

*21. Suppose that $U, V \subset \mathbb{R}^n$ are open. If a homeomorphism $T : U \rightarrow V$ and its inverse send Lebesgue zero sets to Lebesgue zero sets prove that it is a Lebesgue meseomorphism $(U, \mathcal{M}(U), m|_U) \rightarrow (V, \mathcal{M}(V), m|_V)$. [Note that the homeomorphism $T : \mathbb{R} \rightarrow \mathbb{R}$ which sends the fat Cantor set to the standard Cantor set sends zero sets to zero sets but $T^{-1}$ does not.]

22. If $U, V \subset \mathbb{R}^n$ are open and $T : U \rightarrow V$ is a **Lipeomorphism** (i.e., a Lipschitz homeomorphism with Lipschitz inverse) use Exercise 21 to show that $T$ is a meseomorphism with respect to Lebesgue measure.