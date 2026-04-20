words, if $A$ is to occur, the first passenger can enter one of $n$ cars, but the second passenger can only enter one of $n - 1$ cars, the third passenger one of $n - 2$ cars, and so on. This is equivalent to sampling without replacement, and hence, by Example 3, there are

$$N(A) = n(n - 1) \cdots (n - r + 1)$$

arrangements of passengers in the cars leading to the occurrence of $A$. Therefore, by (1.1), the probability of $A$ occurring, i.e., of the passengers all ending up in different cars, is just

$$P(A) = \frac{n(n - 1) \cdots (n - r + 1)}{n^r}.$$

Any set of $r$ elements chosen from a population of $n$ elements, without regard for order, is called a subpopulation of size $r$ of the original population. The number of such subpopulations is given by

**THEOREM 1.3.** A population of $n$ elements has precisely

$$C_r^n = \frac{n!}{r!(n - r)!}$$

subpopulations of size $r \leqslant n$.

**Proof.** If order mattered, then the elements of each subpopulation could be arranged in $r!$ distinct ways (recall Example 3). Hence there are $r!$ times more “ordered samples” of $r$ elements than subpopulations of size $r$. But there are precisely $n(n - 1) \cdots (n - r + 1)$ such ordered samples (by Example 3 again), and hence just

$$\frac{n(n - 1) \cdots (n - r + 1)}{r!} = \frac{n!}{r!(n - r)!}$$

subpopulations of size $r$.

**Remark.** An expression of the form (1.8) is called a binomial coefficient, often denoted by

$$\binom{n}{r}$$

instead of $C_r^n$. The number $C_r^n$ is sometimes called the number of combinations of $n$ things taken $r$ at a time (without regard for order).

The natural generalization of Theorem 1.3 is given by

**THEOREM 1.4.** Given a population of $n$ elements, let $n_1, n_2, \ldots, n_k$ be positive integers such that

$$n_1 + n_2 + \cdots + n_k = n.$$