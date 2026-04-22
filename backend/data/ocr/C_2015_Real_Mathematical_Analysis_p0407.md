Proof of Theorem 9 We are assuming that $Tv = Mv$, where $M$ is an invertible $n \times n$ matrix. We take $n = 2$.

We first claim that if $Z$ is a zero set then so is $TZ$. Given $\epsilon > 0$ there is a countable covering of $Z$ by rectangles $R_k$ with total area $< \epsilon$. Each $R_k$ can be covered by squares with total area $< m(R_k) + \epsilon/2^k$. Hence $Z$ can be covered by countably many squares $S_i$ with total area $< 2\epsilon$. The $T$-image of each square $S_i$ is contained in a square $S'_i$ whose edge length is $\|T\|$ diam $S_i$. Thus $TZ$ is contained squares $S'_i$ whose total area is at most

$$\sum (\|T\| \text{diam } S_i)^2 = \sum 2 \|T\|^2 |S_i| \leq 4 \|T\|^2 \epsilon.$$

See Figure 140. Since $\epsilon > 0$ is arbitrary we have $m(TZ) = 0$.

**Figure 140** The square $S$ has edge length $\ell$ and diameter $s = \ell\sqrt{2}$. Its $T$-image is a parallelogram contained in a square $S'$ of edge length $\ell' = \|T\| s$. Hence $m(S') \leq (\ell')^2 = (\|T\| \sqrt{2}\ell)^2 = 2 \|T\|^2 m(S)$.

Next we claim that orthogonal transformations are meseometries. Let $O: \mathbb{R}^2 \to \mathbb{R}^2$ be orthogonal. It carries the disc $B(r,p)$ to the disc $B(r,Op)$, which is a translate of $B(r,p)$. Let $S$ be a square. Lemma 11 implies $S = \bigsqcup B_i \cup Z$ where the $B_i$ are discs and $Z$ is a zero set. The $O$-image of each $B_i$ is a disc of equal measure, and the $O$-image of $Z$ is a zero set. Hence $m(OS) = mS$. Given $\epsilon > 0$ there is a countable covering of $A$ by squares $S_i$ with $\sum |S_i| < m^*A + \epsilon$. Thus $\{O(S_i)\}$ covers $OA$ and has total area $< m^*A + \epsilon$. This implies

$$m^*(OA) \leq m^*A.$$