where $Z = (Z_U \times V) \cup (U \times Z_V)$ is a zero set by Lemma 23. Since

$$\left( \sum_i m(I_i) \right) \left( \sum_j m(J_j) \right) = \sum_{i,j} m(I_i)m(J_j) = \sum_{i,j} m(I_i \times J_j)$$

we conclude that $m(U \times V) = mU \cdot mV$. $\square$

**Proof of the Measurable Product Theorem** We assume $A, B \subset I$ are measurable where $I$ is the unit interval. We claim that the hull of a product is the product of the hulls and the kernel of a product is the product of the kernels. Since hulls are $G_\delta$-sets their product is a $G_\delta$-set and is therefore measurable. Similarly, the product of kernels is measurable. Clearly

$$K_A \times K_B \subset A \times B \subset H_A \times H_B$$

and $(H_A \times H_B) \setminus (K_A \times K_B) = (H_A \setminus K_A) \times (H_B \setminus K_B)$. Measurability of $A$ and $B$ implies $m(H_A \setminus K_A) = m(H_B \setminus K_B) = 0$ so Lemma 23 gives

$$m(K_A \times K_B) = m(H_A \times H_B).$$

Since $A \times B$ is sandwiched between two measurable sets of the same finite measure, it is measurable and its measure equals their common value. That is,

$$m(K_A \times K_B) = m(A \times B) = m(H_A \times H_B).$$

Let $U_n$ and $V_n$ be sequences of open sets in $I$ converging down to $H_A$ and $H_B$. Then $U_n \times V_n$ is a sequence of open sets in $I^2$ converging down to $H_A \times H_B$. Downward measure continuity implies $m(U_n \times V_n) \rightarrow m(H_A \times H_B)$. Lemma 25 implies $m(U_n \times V_n) = m(U_n) \cdot m(V_n)$. Since $m(U_n) \rightarrow mA$ and $m(V_n) \rightarrow mB$ we conclude from (3) that $m(A \times B) = mA \cdot mB$. $\square$

Recall from Chapter 5 that the **slice** of $E \subset \mathbb{R}^n \times \mathbb{R}^k$ at $x \in \mathbb{R}^n$ is the set

$$E_x = \{y \in \mathbb{R}^k : (x, y) \in E\}.$$

Among other things the next theorem lets us generalize the Measurable Product Theorem to nonmeasurable sets. See Exercise 73.

**26 Zero Slice Theorem** If $E \subset \mathbb{R}^n \times \mathbb{R}^k$ is measurable then $E$ is a zero set if and only if almost every slice of $E$ is a (slice) zero set.