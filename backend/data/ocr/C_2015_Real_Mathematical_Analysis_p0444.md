The $N + 1$ intervals $I_j = [a_j, b_j]$ complementary to the (interiors of the) intervals $V_1, \ldots, V_N$ have total length $< \delta$ so $\sum_{j=0}^{N} |H(b_j) - H(a_j)| < \epsilon/2$ by absolute continuity. Thus

$$H(x^*) - H(a) = \sum_{j=1}^{N} H(x_j + h_j) - H(x_j) + \sum_{j=0}^{N} H(b_j) - H(a_j)$$

$$\leq \sum_{j=1}^{N} |H(x_j + h_j) - H(x_j)| + \sum_{j=0}^{N} |H(b_j) - H(a_j)|$$

$< \epsilon$

which completes the proof that $G$ differs from $F$ by a constant.

See Figure 154.

**Figure 154** The complementary intervals $V_j$ and $I_j$

10 Lebesgue’s Last Theorem

The final theorem in Lebesgue’s groundbreaking book, *Leçons sur l’intégration*, is extremely concise and quite surprising.

57 Theorem A monotone function has a derivative almost everywhere.

Note that no hypothesis is made about continuity of the monotone function. Considering the fact that a monotone function $[a, b] \to \mathbb{R}$ has only a countable number of discontinuities, all of jump type, this may seem reasonable, but remember – the discontinuities may be dense in $[a, b]$. If the monotone function happens to be an indefinite integral then differentiability was proved in Theorem 55.

We assume henceforth that $f$ is nondecreasing since the nonincreasing case can be handled by looking at $-f$.