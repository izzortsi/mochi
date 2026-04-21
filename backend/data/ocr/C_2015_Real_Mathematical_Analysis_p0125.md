If $d = N$ this finishes the proof. If $d > N$ then we inductively divide $X_N$ into two, and then three, and eventually $d - N + 1$ disjoint Cantor pieces; say

$$X_N = Y_1 \sqcup \cdots \sqcup Y_{d-N+1}.$$

The partition $M = X_1 \sqcup \cdots \sqcup X_{N-1} \sqcup Y_1 \sqcup \cdots \sqcup Y_{d-N+1}$ finishes the proof. $\square$

**Proof of the Moore-Kline Theorem** We are given a Cantor space $M$ and we seek a homeomorphism from the standard Cantor set $C$ onto $M$.

By Lemma 74 there is a partition $\mathcal{M}_1$ of $M$ into $d_1$ nonempty Cantor pieces where $d_1 = 2^{n_1}$ is dyadic and the pieces have diameter $\leq 1$. Thus there is a bijection $w_1 : W_1 \to \mathcal{M}_1$ where $W_1 = W(n_1)$.

According to the same lemma, each $L \in \mathcal{M}_1$ can be partitioned into $N(L)$ Cantor pieces of diameter $\leq 1/2$. Choose a dyadic number

$$d_2 = 2^{n_2} \geq \max\{N(L) : L \in \mathcal{M}_1\}$$

and use the lemma again to partition each $L$ into $d_2$ smaller Cantor pieces. These pieces constitute $\mathcal{M}_2(L)$, and we set $\mathcal{M}_2 = \bigcup_L \mathcal{M}_2(L)$. It is a partition of $M$ having cardinality $d_1 d_2$ and in the natural way described in the proof of Theorem 70 it is coherently labeled by $W_2 = W(n_1 + n_2)$. Specifically, for each $L \in \mathcal{M}_1$ there is a bijection $w_L : W(n_2) \to \mathcal{M}_2(L)$ and we define $w_2 : W_2 \to \mathcal{M}_2$ by $w_2(\alpha\beta) = S \in \mathcal{M}_2$ if and only if $w_1(\alpha) = L$ and $w_L(\beta) = S$. This $w_2$ is a bijection.

Proceeding in exactly the same way, we pass from 2 to 3, from 3 to 4, and eventually from $k$ to $k + 1$, successively refining the partitions and extending the bijective labelings.

The Cantor surjection constructed in the proof of Theorem 70 is

$$\sigma(p) = \bigcap_k L_k(p)$$

where $L_k(p) \in \mathcal{M}_k$ has label $\omega(p)|m$ with $m = n_1 + \cdots + n_k$. Distinct points $p, p' \in C$ have distinct addresses $\omega, \omega'$. Because the labelings $w_k$ are bijections and the divisions $\mathcal{M}_k$ are partitions, $\omega \neq \omega'$ implies that for some $k$, $L_k(p) \neq L_k(p')$, and thus $\sigma(p) \neq \sigma(p')$. That is, $\sigma$ is a continuous bijection $C \to M$. A continuous bijection from one compact to another is a homeomorphism. $\square$

**75 Corollary** Every two Cantor spaces are homeomorphic.

**Proof** Immediate from the Moore-Kline Theorem: Each is homeomorphic to $C$. $\square$