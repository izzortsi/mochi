See Figure 38.

**Figure 38** A nested sequence of sets

For example, we could take $A_n$ to be the disc $\{z \in \mathbb{R}^2 : |z| \leq 1/n\}$. The intersection of all the sets $A_n$ is then the singleton $\{0\}$. On the other hand, if $A_n$ is the ball $\{z \in \mathbb{R}^3 : |z| \leq 1+1/n\}$ then $\bigcap A_n$ is the closed unit ball $B^3$.

**34 Theorem** The intersection of a nested sequence of compact nonempty sets is compact and nonempty.

**Proof** Let $(A_n)$ be such a sequence. By Theorem 26, $A_n$ is closed. The intersection of closed sets is always closed. Thus, $\bigcap A_n$ is a closed subset of the compact set $A_1$ and is therefore compact. It remains to show that the intersection is nonempty.

$A_n$ is nonempty, so for each $n \in \mathbb{N}$ we can choose $a_n \in A_n$. The sequence $(a_n)$ lies in $A_1$ since the sets are nested. Compactness of $A_1$ implies that $(a_n)$ has a subsequence $(a_{n_k})$ converging to some point $p \in A_1$. The limit $p$ also lies in the set $A_2$ since except possibly for the first term, the subsequence $(a_{n_k})$ lies in $A_2$ and $A_2$ is a closed set. The same is true for $A_3$ and for all the sets in the nested sequence. Thus, $p \in \bigcap A_n$ and $\bigcap A_n$ is shown to be nonempty.

The **diameter** of a nonempty set $S \subset M$ is the supremum of the distances $d(x,y)$ between points of $S$.