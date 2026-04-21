None of these assertions is really hard to prove, although the details are somewhat messy because of possible equivalence class/representative ambiguity.

(a) By Lemma 81

$$|d(p_m, q_m) - d(p_n, q_n)| \leq d(p_m, p_n) + d(q_m, q_n).$$

Thus $(d(p_n, q_n))$ is a Cauchy sequence in $\mathbb{R}$, and because $\mathbb{R}$ is complete,

$$L = \lim_{n \to \infty} d(p_n, q_n)$$

exists. Let $(p'_n)$ and $(q'_n)$ be sequences that are co-Cauchy with $(p_n)$ and $(q_n)$, and let

$$L' = \lim_{n \to \infty} d(p'_n, q'_n).$$

Then

$$|L - L'| \leq |L - d(p_n, q_n)| + |d(p_n, q_n) - d(p'_n, q'_n)| + |d(p'_n, q'_n) - L'|.$$

As $n \to \infty$, the first and third terms tend to 0. By Lemma 81, the middle term is

$$|d(p_n, q_n) - d(p'_n, q'_n)| \leq d(p_n, p'_n) + d(q_n, q'_n),$$

which also tends to 0 as $n \to \infty$. Hence $L = L'$ and $D$ is well defined on $\widehat{M}$. The $d$-distance on $M$ is symmetric and satisfies the triangle inequality. Taking limits, these properties carry over to $D$ on $\widehat{M}$, while positive definiteness follows directly from the co-Cauchy definition.

(b) Think of each $p \in M$ as a constant sequence, $\bar{p} = (p, p, p, \ldots)$. Clearly it is Cauchy and clearly the $D$-distance between two constant sequences $\bar{p}$ and $\bar{q}$ is the same as the $d$-distance between the points $p$ and $q$. In this way $M$ is naturally a metric subspace of $\widehat{M}$.

(c) Let $(P_k)_{k \in \mathbb{N}}$ be a Cauchy sequence in $\widehat{M}$. We must find $Q \in \widehat{M}$ to which $P_k$ converges as $k \to \infty$. (Note that $(P_k)$ is a sequence of equivalence classes, not a sequence of points in $M$, and convergence refers to $D$ not $d$.) Because $D$ is well defined we can use a trick to shorten the proof. Observe that every subsequence of a Cauchy sequence is Cauchy, and it and the mother sequence are co-Cauchy. For all the terms far along in the subsequence are also far along in the mother sequence. This lets us take a representative of $P_k$ all of whose terms are at distance $< 1/k$ from each other. Call this sequence $(p_k,n)_{k \in \mathbb{N}}$. We have $[(p_k,n)] = P_k$.

Set $q_n = p_{n,n}$. We claim that $(q_n)$ is Cauchy and $D(P_k, Q) \to 0$ as $k \to \infty$, where $Q = [(q_n)]$. That is, $\widehat{M}$ is complete.