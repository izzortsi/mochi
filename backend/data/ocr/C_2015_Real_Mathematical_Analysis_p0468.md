x \in [0,1] we define $\hat{H}(x + n) = H(x) + n$. This extends $H$ to a continuous surjection $\mathbb{R} \rightarrow \mathbb{R}$. Then we set

$$H_k(x) = \hat{H}(3^k x) \quad \text{and} \quad J(x) = \sum_{k=0}^{\infty} \frac{H_k(x)}{4^k}.$$

Prove that $J$ is continuous, strictly increasing, and yet $J' = 0$ almost everywhere. [Hint: Fix $a > 0$ and let

$$S_a = \{x : J'(x) \text{ exists}, J'(x) > a, \text{ and}$$
$$x \text{ belongs to the constancy intervals of every } H_k\}.$$

Use the Vitali Covering Lemma to prove that $m^*(S_a) = 0.$

*49. Prove that $f : \mathbb{R} \rightarrow \mathbb{R}$ is Lebesgue measurable if and only if the preimage of every Borel set is a Lebesgue measurable. What about $f : \mathbb{R}^n \rightarrow \mathbb{R}$?

*50. (a) Prove Corollary 67: Each measurable $E \subset \mathbb{R}$ with $mE > 0$ contains a nonmeasurable set $N$ with $m^*N = mE$, $m_*N = 0$, and for each measurable $E' \subset E$ we have $m(E') = m^*(N \cap E')$. ($N$ is a “doppelgänger” of $E$.) [Hint: Try $N = P \cap E$ when $E \subset [0,1)$ and $P$ is the nonmeasurable set from Theorem 66.]

(b) Is $N$ uniquely determined (modulo a zero set) by $E$?

51. Generalize Theorem 66 and Exercise 50 to $\mathbb{R}^n$. [Hint: Think about $P \times P$ and its complement in $I^2$.]

Remark There are even worse situations. $\mathbb{R}^n$ is the disjoint union of $\#\mathbb{R}$ sets like $P$. This fact involves “Bernstein sets” and transfinite induction. See also Exercise 25.

52. Prove Corollary 50 from Theorem 49.

53. Consider the function $f : \mathbb{R}^2 \rightarrow \mathbb{R}$ defined by

$$f(x,y) = \begin{cases} \frac{1}{y^2} & \text{if } 0 < x < y < 1 \\ \frac{-1}{x^2} & \text{if } 0 < y < x < 1 \\ 0 & \text{otherwise.} \end{cases}$$

(a) Show that the iterated integrals exist and are finite (calculate them) but the double integral does not exist.

(b) Explain why (a) does not contradict Corollary 43.