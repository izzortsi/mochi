and $|I_1| > b_1 - a$. The compact interval $[b_1, b]$ is covered by $I_2, \ldots, I_{n+1}$. By induction we have $\sum_{i=2}^{n+1}|I_i| > b - b_1$. Thus

$$\sum_{i=1}^{n+1}|I_i| = |I_1| + \sum_{i=2}^{n+1}|I_i| > (b_1 - a) + (b - b_1) = b - a$$

which completes the induction and the proof.

The preceding inductive proof does not carry over to rectangles. For a rectangle has no left to right order. However, the following grid proof works for intervals, rectangles, and boxes.

**Grid proof for a closed rectangle** Let $R = [a, b] \times [c, d] \subset \mathbb{R}^2$. It is simple to see that $m^*R \leq (b - a) \cdot (d - c)$. To check the reverse inequality consider any countable covering of $R$ by open rectangles $R_i$. We must show that $\sum|R_i| \geq (b - a) \cdot (d - c)$. Since $R$ is compact the covering has a positive Lebesgue number $\lambda$. Take a grid of open rectangles $S_j \subset R$ of diameter $< \lambda$ such that $\sum|S_j| = (b - a) \cdot (d - c)$. See Figure 137. Then

**Figure 137** The rectangles $S_1, \ldots, S_4$ are contained in $R_1$. The rectangles $S_3, \ldots, S_8$ are contained in $R_2$. The rectangles $S_3$ and $S_4$ are contained in both $R_1$ and $R_2$ so their area will be counted twice in $\sum_i \sum_{S_j \subset R_i}|S_j|$.

$$\sum_j|S_j| \leq \sum_i \sum_{S_j \subset R_i}|S_j| \leq \sum|R_i|$$

implies $(b - a) \cdot (d - c) \leq \sum|R_i|$. Thus $(b - a) \cdot (d - c) = m^*R$ as claimed.