(a) Show that $C$ has a tangent line except at a countable number of points. [For example, the circle has a tangent line at all its points. The triangle has a tangent line except at three points, and so on.]

(b) Similarly, show that a convex function has a derivative except at a countable set of points.

*33. Let $f(k, m)$ be the number of $k$-dimensional faces of the $m$-cube. See Table 1.

| $m = 1$ | $m = 2$ | $m = 3$ | $m = 4$ | $m = 5$ | $\dots$ | $m$ | $m + 1$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $k = 0$ | 2 | 4 | 8 | $f(0, 4)$ | $f(0, 5)$ | $\dots$ | $f(0, m)$ | $f(0, m + 1)$ |
| $k = 1$ | 1 | 4 | 12 | $f(1, 4)$ | $f(1, 5)$ | $\dots$ | $f(1, m)$ | $f(1, m + 1)$ |
| $k = 2$ | 0 | 1 | 6 | $f(2, 4)$ | $f(2, 5)$ | $\dots$ | $f(2, m)$ | $f(2, m + 1)$ |
| $k = 3$ | 0 | 0 | 1 | $f(3, 4)$ | $f(3, 5)$ | $\dots$ | $f(3, m)$ | $f(3, m + 1)$ |
| $k = 4$ | 0 | 0 | 0 | $f(4, 4)$ | $f(4, 5)$ | $\dots$ | $f(4, m)$ | $f(4, m + 1)$ |
| $\dots$ | $\dots$ | $\dots$ | $\dots$ | $\dots$ | $\dots$ | $\dots$ | $\dots$ | $\dots$ |

**Table 1** $f(k, m)$ is the number of $k$-dimensional faces of the $m$-cube.

(a) Verify the numbers in the first three columns.

(b) Calculate the columns $m = 4, m = 5$, and give the formula for passing from the $m^{\text{th}}$ column to the $(m + 1)^{\text{st}}$.

(c) What would an $m = 0$ column mean?

(d) Prove that the alternating sum of the entries in any column is 1. That is, $2 - 1 = 1, 4 - 4 + 1 = 1, 8 - 12 + 6 - 1 = 1$, and in general $\sum (-1)^k f(k, m) = 1$. This alternating sum is called the **Euler characteristic**.

34. Find an exact formula for a bijection $f : \mathbb{N} \times \mathbb{N} \rightarrow \mathbb{N}$. Is one

$$f(i, j) = j + (1 + 2 + \dots + (i + j - 2)) = \frac{i^2 + j^2 + i(2j - 3) - j + 2}{2}$$

35. Prove that the union of denumerably many sets $B_k$, each of which is countable, is countable. How could it happen that the union is finite?

*36. Without using the Schroeder-Bernstein Theorem,

(a) Prove that $[a, b] \sim (a, b) \sim (a, b)$.

(b) More generally, prove that if $C$ is countable then

$$\mathbb{R} \setminus C \sim \mathbb{R} \sim \mathbb{R} \cup C.$$

(c) Infer that the set of irrational numbers has the same cardinality as $\mathbb{R}$, i.e., $\mathbb{R} \setminus \mathbb{Q} \sim \mathbb{R}$. [Hint: Imagine that you are the owner of denumerably many hotels, $H_1, H_2, \dots$, all fully occupied, and that a traveler arrives and asks you for accommodation. How could you re-arrange your current guests to make room for the traveler?]