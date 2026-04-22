is sandwiched between discs $\Delta_-$ of radius $1 - \epsilon$ and $\Delta_+$ of radius $1 + \epsilon$. Corollary 8 implies

$$m(\Delta_-) = (1 - \epsilon)^2 m\Delta < m\Delta < (1 + \epsilon)^2 m\Delta = m(\Delta_+).$$

Measurability implies $m(\Delta_+ \setminus \Delta_-) = m(\Delta_+) - m(\Delta_-) = 4\epsilon m\Delta$. Since $\epsilon > 0$ is arbitrary and $mC \leq m(\Delta_+ \setminus \Delta_-)$ we have $mC = 0$.

**11 Lemma** Every open cube is a countable disjoint union of open balls plus a zero set.

**Proof** Let $S \subset \mathbb{R}^2$ be an open square. It contains a compact disc $\Delta$ whose area is greater than half the area of the square, $m(\Delta) > m(S)/2$. The difference $U_1 = S \setminus \Delta$ is an open subset of $S$ with $m(U_1) < m(S)/2$. It is therefore the disjoint countable union of small open squares $S_i$ plus a zero set. Each $S_i$ contains a small compact disc $\Delta_i$ whose area is greater than half the area of $S_i$. The total area of finitely many of the discs $\Delta_i$ is greater than half the total area of the squares $S_i$. Thus, for some $k$, $U_2 = S \setminus (\Delta \cup \Delta_1 \cup \cdots \cup \Delta_k)$ is an open subset of $U_1$ and $m(U_2) < m(S)/4$. See Figure 139. Repetition gives countably many smaller and smaller disjoint compact discs with total measure equal to $mS$. Lemma 10 implies the measure of a closed disc is the same as the measure of its interior, which completes the proof that $S$ consists of countably many disjoint open discs plus a zero set.