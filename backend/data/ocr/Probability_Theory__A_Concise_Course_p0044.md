It follows that

$$\mathbf{P}(A_3 \mid A_1) = \mathbf{P}(A_3), \quad \mathbf{P}(A_3 \mid A_2) = \mathbf{P}(A_3).$$

Therefore the events $A_1$ and $A_3$ are independent, and so are the events $A_2$ and $A_3$.

Generalizing (3.14), we have the following

**DEFINITION.** The events $A_1, A_2, \ldots, A_n$ are said to be (mutually) independent if

$$\mathbf{P}(A_i A_j) = \mathbf{P}(A_i) \mathbf{P}(A_j),$$

$$\mathbf{P}(A_i A_j A_k) = \mathbf{P}(A_i) \mathbf{P}(A_j) \mathbf{P}(A_k),$$

$$\mathbf{P}(A_1 A_2 \cdots A_n) = \mathbf{P}(A_1) \mathbf{P}(A_2) \cdots \mathbf{P}(A_n)$$

for all combinations of indices such that $1 < i < j < \cdots < k < n$.

**Example 3.** The events $A_1, A_2$ and $A_3$ in Example 2 are not independent, even though they are “pairwise independent” in the sense that

$$\mathbf{P}(A_1 A_j) = \mathbf{P}(A_i) \mathbf{P}(A_j)$$

for all $1 < i < j < 3$. In fact, $A_3$ obviously cannot occur if $A_1$ and $A_2$ both occur, and hence

$$\mathbf{P}(A_1 A_2 A_3) = 0.$$

But

$$\mathbf{P}(A_1) \mathbf{P}(A_2) \mathbf{P}(A_3) = \frac{1}{2} \cdot \frac{1}{2} \cdot \frac{1}{2} = \frac{1}{8},$$

so that

$$\mathbf{P}(A_1 A_2 A_3) \neq \mathbf{P}(A_1) \mathbf{P}(A_2) \mathbf{P}(A_3).$$

Given an infinite sequence of events $A_1, A_2, \ldots$, suppose the events $A_1, \ldots, A_n$ are independent for every $n$. Then $A_1, A_2, \ldots$ is said to be a sequence of independent events.

**THEOREM 3.1** (Second Borel-Cantelli lemma). Given a sequence of independent events $A_1, A_2, \ldots$, with probabilities $p_k = \mathbf{P}(A_k)$, $k = 1, 2, \ldots$, suppose

$$\sum_{k=1}^{\infty} p_k = \infty,$$

(3.15)

i.e., suppose the series on the left diverges. Then, with probability 1 infinitely many of the events $A_1, A_2, \ldots$ occur.