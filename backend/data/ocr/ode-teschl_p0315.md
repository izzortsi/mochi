a given problem. For example, consider the situation in the previous section. There we had $\Sigma_2$ and, for $x \in \Sigma_2$, $x_n$ told us whether the $n$’th iterate is in $I_0$ or $I_1$. Now for a different system it could be that a point starting in $I_1$ could never return to $I_1$ once it enters $I_0$. In other words, a zero can never be followed by a one. Such a situation can be conveniently described by introducing a transition matrix.

A transition matrix $A$ is an $N \times N$ matrix all whose entries are zero or one. Suppose the ordered pair $j,k$ may only appear as adjacent entries in the sequence $x$ if $A_{j,k} = 1$. Then the corresponding subset is denoted by

$$\Sigma_N^A = \{x \in \Sigma_N | A_{x_n,x_{n+1}} = 1 \text{ for all } n \in \mathbb{N}_0\}. \tag{11.31}$$

Clearly $\sigma$ maps $\Sigma_N^A$ into itself and the dynamical system $(\Sigma_N^A, \sigma)$ is called a subshift of finite type. It is not hard to see that $\Sigma_N^A$ is a closed subset of $\Sigma_N$ and thus compact. Moreover, $\sigma$ is continuous on $\Sigma_N^A$ as the restriction of a continuous map. We will denote this restriction by $\sigma_A$.

Now let us return to our example. Here we have

$$A = \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}. \tag{11.32}$$

A quick reflection shows that the only sequences which are admissible are those which contain finitely many ones first (maybe none) and then only zeroes. In particular, all points except $x = (1,1,1,\ldots)$ are eventually fixed and converge to the fixed point $x = (0,0,0,\ldots)$. So the system is definitely not chaotic. The same is true for all other possibilities except

$$A = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix} \tag{11.33}$$

in which case we have $\Sigma_2^A = \Sigma_2$. Hence we need an additional condition to ensure that the subshift is chaotic.

A transition matrix is called transitive if there is an integer $l \in \mathbb{N}$ such that $(A^l)_{j,k} \neq 0$ for all $0 \leq j,k \leq N-1$.

Let $A$ be a transition matrix. We will call $(x_1,\ldots,x_k)$ an admissible block of length $k$ if $A_{x_j,x_{j+1}} = 1$ for $1 \leq j \leq k-1$. The following lemma explains the importance of $A^l$.

**Lemma 11.10.** The $(j,k)$ entry of $A^l$ is equal to the number of admissible blocks $(x_0,\ldots,x_l)$ of length $l+1$ with $x_0 = j$ and $x_l = k$.

In particular, the number of periodic orbits of length $l$ is equal to $\text{tr}(A^l)$.

**Proof.** Just observe that the $(j,k)$ entry of $A^l$ is given by

$$(A^l)_{j,k} = \sum_{x_1,\ldots,x_{l-1}} A_{j,x_1} A_{x_1,x_2} \cdots A_{x_{l-2},x_{l-1}} A_{x_{l-1},k}$$