The existence of an uncountable nowhere dense set is astonishing. Even more is true: The Cantor set is a **zero set** – it has “outer measure zero.” By this we mean that, given any $\epsilon > 0$, there is a countable covering of $C$ by open intervals $(a_k, b_k)$, and the **total length** of the covering is

$$\sum_{k=1}^{\infty} b_k - a_k < \epsilon.$$

(Outer measure is one of the central concepts of Lebesgue Theory. See Chapter 6.) After all, $C$ is a subset of $C^n$, which consists of $2^n$ closed intervals, each of length $1/3^n$. If $n$ is large enough then $2^n/3^n < \epsilon$. Enlarging each of these closed intervals to an open interval keeps the sum of the lengths $< \epsilon$, and it follows that $C$ is a zero set.

If we discard subintervals of $[0, 1]$ in a different way, we can make a **fat Cantor set** – one that has positive outer measure. Instead of discarding the middle-thirds of intervals at the $n^{\text{th}}$ stage in the construction, we discard only the middle $1/n!$ portion. The discards are grossly smaller than the remaining intervals. See Figure 52. The total amount discarded from $[0, 1]$ is $< 1$, and the total amount remaining, the outer measure of the fat Cantor set, is positive. See Exercise 3.31.

**Figure 52** In forming a fat Cantor set, the gap intervals occupy a progressively smaller proportion of the Cantor set intervals.

### 9* Cantor Set Lore

In this section, we explore some arcane features of Cantor sets.

Although the continuous image of a connected set is connected, the continuous image of a disconnected set may well be connected. Just crush the disconnected set to a single point. Nevertheless, I hope you find the following result striking, for it means that the Cantor set $C$ is the **universal compact metric space**, of which all others are merely shadows.

**70 Cantor Surjection Theorem** Given a compact nonempty metric space $M$, there is a continuous surjection of $C$ onto $M$.

See Figure 53. Exercise 114 suggests a direct construction of a continuous surjection $C \rightarrow [0, 1]$, which is already an interesting fact. The proof of Theorem 70