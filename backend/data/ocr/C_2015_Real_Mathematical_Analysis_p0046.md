Proof Since $S$ is infinite it is nonempty and contains an element $s_1$. Since $S$ is infinite the set $S \setminus \{s_1\} = \{s \in S : s \neq s_1\}$ is nonempty and there exists $s_2 \in S \setminus \{s_1\}$. Since $S$ is an infinite set, $S \setminus \{s_1, s_2\} = \{s \in S : s \neq s_1, s_2\}$ is nonempty and there exists $s_3 \in S \setminus \{s_1, s_2\}$. Continuing this way gives a list $(s_n)$ of distinct elements of $S$. The set of these elements forms a denumerable subset of $S$.

13 Theorem An infinite subset $A$ of a denumerable set $B$ is denumerable.

Proof There exists a bijection $f : \mathbb{N} \to B$. Each element of $A$ appears exactly once in the list $f(1), f(2), f(3), \ldots$ of $B$. Define $g(k)$ to be the $k^{\text{th}}$ element of $A$ appearing in the list. Since $A$ is infinite, $g(k)$ is defined for all $k \in \mathbb{N}$. Thus $g : \mathbb{N} \to A$ is a bijection and $A$ is denumerable.

14 Corollary The sets of even integers and of prime integers are denumerable.

Proof They are infinite subsets of $\mathbb{N}$ which is denumerable.

15 Theorem $\mathbb{N} \times \mathbb{N}$ is denumerable.

Proof Think of $\mathbb{N} \times \mathbb{N}$ as an $\infty \times \infty$ matrix and walk along the successive counter-diagonals. See Figure 16. This gives a list

$$(1,1), (2,1), (1,2), (3,1), (2,2), (1,3), (4,1), (3,2), (2,3), (1,4), (5,1), \ldots$$

of $\mathbb{N} \times \mathbb{N}$ and proves that $\mathbb{N} \times \mathbb{N}$ is denumerable.

Figure 16 Counter-diagonals in an $\infty \times \infty$ matrix