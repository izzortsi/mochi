More generally, given $n$ mutually exclusive events $A_1, A_2, \ldots, A_n$, we have the formula

$$\mathbf{P}\left(\bigcup_{k=1}^{n} A_k\right) = \sum_{k=1}^{n} \mathbf{P}(A_k),$$

(2.2)

obtained by applying (2.1) $n - 1$ times. Equation (2.2) is called the addition law for probabilities.

Next we prove some key relations involving probabilities:

**Theorem 2.1. The formulas**

$$0 < \mathbf{P}(A) < 1,$$

(2.3)

$$\mathbf{P}(A_1 - A_2) = \mathbf{P}(A_1) - \mathbf{P}(A_1 \cap A_2),$$

(2.4)

$$\mathbf{P}(A_2 - A_1) = \mathbf{P}(A_2) - \mathbf{P}(A_1 \cap A_2),$$

(2.5)

$$\mathbf{P}(A_1 \cup A_2) = \mathbf{P}(A_1) + \mathbf{P}(A_2) - \mathbf{P}(A_1 \cap A_2),$$

(2.6)

**hold for arbitrary events $A$, $A_1$ and $A_2$. Moreover,**

$$\mathbf{P}(A_1) \leqslant \mathbf{P}(A_2) \quad \text{if} \quad A_1 \subset A_2.$$

(2.7)

**Proof.** Formula (2.3) follows at once from the interpretation of probability as the limiting value of relative frequency, since obviously

$$0 \leqslant \frac{n(A)}{n} < 1,$$

where $n(A)$ is the number of occurrences of an event $A$ in $n$ trials. Given any two events $A_1$ and $A_2$, we have

$$A_1 = (A_1 - A_2) \cup (A_1 \cap A_2),$$

$$A_2 = (A_2 - A_1) \cup (A_1 \cap A_2),$$

$$A_1 \cup A_2 = (A_1 - A_2) \cup (A_2 - A_1) \cup (A_1 \cap A_2),$$

where the events $A_1 - A_2, A_2 - A_1$ and $A_1 \cap A_2$ are mutually exclusive. Therefore, by (2.2),

$$\mathbf{P}(A_1) = \mathbf{P}(A_1 - A_2) + \mathbf{P}(A_1 \cap A_2),$$

(2.8)

$$\mathbf{P}(A_2) = \mathbf{P}(A_2 - A_1) + \mathbf{P}(A_1 \cap A_2),$$

(2.9)

$$\mathbf{P}(A_1 \cup A_2) = \mathbf{P}(A_1 - A_2) + \mathbf{P}(A_2 - A_1) + \mathbf{P}(A_1 \cap A_2).$$

(2.10)

Formulas (2.8) and (2.9) are equivalent to (2.4) and (2.5). Then, using (2.4) and (2.5), we can write (2.10) in the form

$$\mathbf{P}(A_1 \cup A_2) = \mathbf{P}(A_1) - \mathbf{P}(A_1 \cap A_2) + \mathbf{P}(A_2)$$

$$- \mathbf{P}(A_1 \cap A_2) + \mathbf{P}(A_1 \cap A_2)$$

$$= \mathbf{P}(A_1) + \mathbf{P}(A_2) - \mathbf{P}(A_1 \cap A_2),$$

---

4 Note that $\mathbf{P}(\emptyset) = 0, \mathbf{P}(\Omega) = 1$, since $n(\emptyset) = 0, n(\Omega) = n$ for all $n$. Thus the impossible event has probability zero, while the certain event has probability one.