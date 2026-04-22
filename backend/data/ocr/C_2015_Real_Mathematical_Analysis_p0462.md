total lengths of finite coverings of $A$ by open intervals,

$$J^*A = \inf \left\{ \sum_{k=1}^{n} |I_k| : \text{each } I_k \text{ is an open interval and } A \subset \bigcup_{k=1}^{n} I_k \right\}.$$

The corresponding definitions of outer Jordan content in the plane and $n$-space substitute rectangles and boxes for intervals.

(a) Show that outer Jordan content satisfies

(i) $J^*(\emptyset) = 0$.

(ii) If $A \subset B$ then $J^*A \leq J^*B$.

(iii) If $A = \bigcup_{k=1}^{n} A_k$ then $J^*A \leq \sum_{k=1}^{n} J^*A_k$.

(b) (iii) is called finite subadditivity. Find an example of a set $A \subset [0,1]$ such that $A = \bigcup_{k=1}^{\infty} A_k$, $J^*A_k = 0$ for all $k$, and $J^*A = 1$, which shows that finite subadditivity does not imply countable subadditivity and that $J^*$ is not an outer measure.

(c) Why is it clear that $m^*A \leq J^*A$, and that if $A$ is compact then $mA = J^*A$? What about the converse?

(d) Show that the requirement that the intervals in the covering of $A$ be open is irrelevant.

12. Prove that

$$J^*A = J^*\overline{A} = m\overline{A}$$

where $\overline{A}$ is the closure of $A$.

13. If $A, B$ are compact prove that

$$J^*(A \cup B) + J^*(A \cap B) = J^*A + J^*B.$$

[Hint: Is the formula true for Lebesgue measure? Use Exercise 12.]

14. The inner Jordan content of a subset $A$ of an interval $I$ is

$$J^*A = |I| - J^*(I \setminus A).$$

(a) Show that

$$J^*A = m(\text{interior } A).$$

(b) A bounded set $A$ with equal inner and outer Jordan content is said to have content or to be Jordan measurable, and we write $J^*A = JA = J^*A$, even though $J$ is not a measure. (Is this any worse than functions with infinite integrals being nonintegrable?)

(c) Infer from Theorem 68 and the Riemann-Lebesgue Theorem that $f : [a,b] \to [0,M]$ is Riemann integrable if and only if its undergraph is Jordan measurable, and in that case its Riemann integral equals $J(\mathcal{U}f)$.