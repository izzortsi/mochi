(d) Prove that $\mathbb{Q}_p$ is locally compact, in the sense that every point has small compact neighborhoods.

(e) Infer that $\mathbb{Q}_p$ is covered by neighborhoods homeomorphic to the Cantor set. See Gouvêa’s book, *p-adic Numbers*.

111. Let $M = [0,1]$ and let $\mathcal{M}_1$ be its division into two intervals $[0, 1/2]$ and $[1/2, 1]$. Let $\mathcal{M}_2$ be its division into four intervals $[0, 1/4], [1/4, 1/2], [1/2, 3/4],$ and $[3/4, 1]$. Continuing these bisections generates natural divisions of $[0,1]$. The pieces are intervals. We label them with words using the letters 0 and 1 as follows: 0 means “left” and 1 means “right,” so the four intervals in $\mathcal{M}_2$ are labeled as 00, 01, 10, and 11 respectively.

(a) Verify that all endpoints of the intervals (except 0 and 1) have two addresses. For instance,

$$\bigcap_k \left[ \frac{2^{k-1}-1}{2^k}, \frac{1}{2} \right] = \left\{ \frac{1}{2} \right\} = \bigcap_k \left[ \frac{1}{2}, \frac{2^{k-1}+1}{2^k} \right].$$

(b) Verify that the points 0,1, and all nonendpoints have unique addresses.

*112. Prove that $\#C = \#\mathbb{R}$. [Hint: According to the Schroeder-Bernstein Theorem from Chapter 1 it suffices to find injections $C \rightarrow \mathbb{R}$ and $\mathbb{R} \rightarrow C$. The inclusion $C \subset \mathbb{R}$ is an injection $C \rightarrow \mathbb{R}$. Each $t \in [0,1)$ has a unique base-2 expansion $\tau(t)$ that does not terminate in an infinite string of ones. Replacing each 1 by 2 converts $\tau(t)$ to $\omega(t)$, an infinite address in the symbols 0 and 2. It does not terminate in an infinite string of twos. Set $h(t) = \sum_{i=1}^{\infty} \omega_i/3^i$ and verify that $h : [0,1) \rightarrow C$ is an injection. Since there is an injection $\mathbb{R} \rightarrow [0,1)$, conclude that there is an injection $\mathbb{R} \rightarrow C$, and hence that $\#C = \#\mathbb{R}$.]

Remark The Continuum Hypothesis states that if $S$ is any uncountable subset of $\mathbb{R}$ then $S$ and $\mathbb{R}$ have equal cardinality. The preceding coding shows that $C$ is not only uncountable (as is implied by Theorem 56) but actually has the same cardinality as $\mathbb{R}$. That is, $C$ is not a counterexample to the Continuum Hypothesis. The same is true of all uncountable closed subsets of $\mathbb{R}$. See Exercise 151.

113. Let $M$ be the standard Cantor set $C$. In the notation of Section 8, $C^n$ is the collection of $2^n$ Cantor intervals of length $1/3^n$ that nest down to $C$ as $n \rightarrow \infty$. Verify that setting $\mathcal{C}_k = C \cap C^k$ gives divisions of $C$ into disjoint clopen pieces.

*114. (a) Prove directly that there is a continuous surjection of the middle-thirds Cantor set $C$ onto the closed interval $[0,1]$. [Hint: Each $x \in C$ has a base 3 expansion $(x_n)$, all of whose entries are zeroes and twos. (For example, $2/3 = (2\bar{0})_{\text{base }3}$ and $1/3 = (0\bar{2})_{\text{base }3}$. Write $y = (y_n)$ by replacing the twos in $(x_n)$ by ones and interpreting the answer base 2. Show that the map $x \mapsto y$ works.]