thereby proving (2.6). Finally to prove (2.7), we note that if $A_1 \subset A_2$, then $A_1 \cap A_2 = A_1$, and hence (2.9) implies

$$\mathbf{P}(A_1) = \mathbf{P}(A_2) - \mathbf{P}(A_2 - A_1) \leqslant \mathbf{P}(A_2),$$

since $\mathbf{P}(A_2 - A_1) \geqslant 0$ by (2.3).

The addition law (2.2) becomes much more complicated if we drop the requirement that the events be mutually exclusive:

**THEOREM 2.2** Given any $n$ events $A_1, A_2, \ldots, A_n$, let

$$P_1 = \sum_{i=1}^{n} \mathbf{P}(A_i),$$

$$P_2 = \sum_{1 \leqslant i < j \leqslant n} \mathbf{P}(A_i A_j),$$

$$P_3 = \sum_{1 \leqslant i < j < k \leqslant n} \mathbf{P}(A_i A_j A_k), \ldots$$

**Then**

$$\mathbf{P}\left(\bigcup_{k=1}^{n} A_k\right) = P_1 - P_2 + P_3 - P_4 + \cdots \pm P_n. \tag{2.11}$$

**Proof.** For $n = 2$, (2.11) reduces to formula (2.6), which we have already proved. Suppose (2.11) holds for any $n - 1$ events. Then

$$\mathbf{P}\left(\bigcup_{k=2}^{n} A_k\right) = \sum_{i=2}^{n} \mathbf{P}(A_i) - \sum_{2 \leqslant i < j \leqslant n} \mathbf{P}(A_i A_j) + \sum_{2 \leqslant i < j < k \leqslant n} \mathbf{P}(A_i A_j A_k) - \cdots \tag{2.12}$$

and

$$\mathbf{P}\left(\bigcup_{k=2}^{n} A_1 A_k\right) = \sum_{i=2}^{n} \mathbf{P}(A_1 A_i) - \sum_{1 \leqslant i < j \leqslant n} \mathbf{P}(A_1 A_i A_j) + \sum_{2 \leqslant i < j < k \leqslant n} \mathbf{P}(A_1 A_i A_j A_k) - \cdots. \tag{2.13}$$

But, by (2.6),

$$\mathbf{P}\left(\bigcup_{k=1}^{n} A_k\right) = \mathbf{P}(A_1) + \mathbf{P}\left(\bigcup_{k=2}^{n} A_k\right) - \mathbf{P}\left(\bigcup_{k=2}^{n} A_1 A_k\right),$$

and hence, by (2.12) and (2.13),

$$\mathbf{P}\left(\bigcup_{k=1}^{n} A_k\right) = \mathbf{P}(A_1) + \sum_{i=2}^{n} \mathbf{P}(A_i) - \sum_{2 \leqslant i < j \leqslant n} \mathbf{P}(A_i A_j) + \sum_{2 \leqslant i < j < k \leqslant n} \mathbf{P}(A_i A_j A_k) - \cdots = P_1 - P_2 + P_3 - \cdots,$$

$^5 A_i A_j$ is shorthand for the intersection $A_i \cap A_j, A_i A_j A_k$ is shorthand for $A_i \cap A_j \cap A_k$, and so on. In a sum like $\sum_{1 \leqslant i < j < k \leqslant n} \mathbf{P}(A_i A_j A_k)$, each group of indices (satisfying the indicated inequalities) is encountered just once.