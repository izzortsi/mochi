Then we divide each $L \in \mathcal{M}_1$ into finitely many smaller pieces. Let $\mathcal{M}_2(L)$ be the collection of these smaller pieces and let

$$\mathcal{M}_2 = \bigcup_{L \in \mathcal{M}_1} \mathcal{M}_2(L).$$

Choose $n_2$ such that $2^{n_2} \geq \max\{\#\mathcal{M}_2(L) : L \in \mathcal{M}_1\}$ and label $\mathcal{M}_2$ with words $\alpha\beta \in W(n_1 + n_2)$ such that

If $L = w_1(\alpha)$ then $\alpha\beta$ labels the pieces $S \in \mathcal{M}_2(L)$ as $\beta$ varies in $W(n_2)$.

This labeling amounts to a surjection $w_2 : W(n_1 + n_2) \to \mathcal{M}_2$ that is coherent with $w_1$ in the sense that $\beta \mapsto w_2(\alpha\beta)$ labels the pieces $S \in w_1(\alpha)$. Since there are enough words in $W(n_2)$, $w_2$ exists. If there are other labels $\alpha'$ of $L \in \mathcal{M}_1$ then we get other labels $\alpha'\beta'$ for the pieces $S \in \mathcal{M}_2(L)$. We make no effort to correlate them.

Proceeding by induction we get finer and finer divisions of $M$ coherently labeled with longer and longer words. More precisely there is a sequence of divisions $(\mathcal{M}_k)$ and surjections $w_k : W_k = W(n_1 + \cdots + n_k) \to \mathcal{M}_k$ such that

(a) The maximum diameter of the pieces $L \in \mathcal{M}_k$ tends to zero as $k \to \infty$.

(b) $\mathcal{M}_{k+1}$ refines $\mathcal{M}_k$ in the sense that each $S \in \mathcal{M}_{k+1}$ is contained in some $L \in \mathcal{M}_k$. (“The small pieces $S$ are contained in the large pieces $L$.”)

(c) If $L \in \mathcal{M}_k$ and $\mathcal{M}_{k+1}(L)$ denotes $\{S \in \mathcal{M}_{k+1} : S \subset L\}$ then

$$L = \bigcup_{S \in \mathcal{M}_{k+1}(L)} S.$$

(d) The labelings $w_k$ are coherent in the sense that if $w_k(\alpha) = L \in \mathcal{M}_k$ then $\beta \mapsto w_{k+1}(\alpha\beta)$ labels $\mathcal{M}_{k+1}(L)$ as $\beta$ varies in $W(n_{k+1})$.

See Figure 54.

**Proof of the Cantor Surjection Theorem** We are given a nonempty compact metric space $M$ and we seek a continuous surjection $\sigma : C \to M$ where $C$ is the standard Cantor set.

$C = \bigcap C^n$ where $C^n$ is the disjoint union of $2^n$ closed intervals of length $1/3^n$. In Section 8 we labeled these $C^n$-intervals with words in the letters 0 and 2 having length $n$. (For instance $C_{220}$ is the left $C^3$-interval of $C_{22} = [8/9, 1]$, namely $C_{220} = [8/9, 25/27]$.) We showed there is a natural bijection between $C$ and the set of all infinite words in the letters 0 and 2 defined by

$$p = \bigcap_{n \in \mathbb{N}} C_{\omega|n}.$$