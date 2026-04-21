Figure 54 Coherently labeled successive divisions of $M$. They have $n_1 = 2$, $n_2 = 1$, and $n_3 = 6$. Note that overlabeling is necessary.

We referred to $\omega = \omega(p)$ as the address of $p$. ($\omega|n$ is the truncation of $\omega$ to its first $n$ letters.) See page 107.

For $k = 1, 2, \ldots$ let $\mathcal{M}_k$ be the fine divisions of $M$ constructed above, coherently labeled by $w_k$. They obey (a)-(d). Given $p \in C$ we look at the nested sequence of pieces $L_k(p) \in \mathcal{M}_k$ such that $L_k(p) = w_k(\omega|(n_1 + \cdots + n_k))$ where $\omega = \omega(p)$. That is, we truncate $\omega(p)$ to its first $n_1 + \cdots + n_k$ letters and look at the piece in $\mathcal{M}_k$ with this label. (We replace the letters 0 and 2 with $a$ and $b$.) Then $(L_k(p))$ is a nested decreasing sequence of nonempty compact sets whose diameters tend to 0 as $k \to \infty$. Thus $\bigcap L_k(p)$ is a well defined point in $M$ and we set

$$\sigma(p) = \bigcap_{k \in \mathbb{N}} L_k(p).$$

We must show that $\sigma$ is a continuous surjection $C \to M$. Continuity is simple. If $p, p' \in C$ are close together then for large $n$ the first $n$ entries of their addresses are equal. This implies that $\sigma(p)$ and $\sigma(p')$ belong to a common $L_k$ and $k$ is large. Since the diameter of $L_k$ tends to 0 as $k \to \infty$ we get continuity.

Surjectivity is also simple. Each $q \in M$ is the intersection of at least one nested sequence of pieces $L_k \in \mathcal{M}_k$. For $q$ belongs to some piece $L_1 \in \mathcal{M}_1$, and it also belongs