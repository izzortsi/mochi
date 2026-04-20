Solution. Let $N$ be the total number of lottery tickets and $M$ the total number of winning tickets. Then $M/N$ is the probability that a bought ticket is one of the winning tickets. The purchase of each ticket can be regarded as a separate trial with probability of “success” $p = M/N$ in a series of $n$ independent trials, where $n$ is the number of tickets bought. If $p$ is relatively small, as is usually the case, and the given probability $P$ is relatively large, then it is clear that a rather large number of tickets must be bought to make the probability of buying at least one winning ticket no smaller than $P$. Hence the number of winning tickets among those purchased is a random variable with an approximately Poisson distribution, i.e., the probability that there are precisely $k$ winning tickets among the $n$ purchased tickets is

$$P(k) \approx \frac{a^k}{k!} e^{-a},$$

where

$$a = n \frac{M}{N}.$$

The probability that at least one of the tickets is a winning ticket is just

$$1 - P(0) = 1 - e^{-a}.$$

Hence $n$ must be at least as large as the smallest positive integer satisfying the inequality

$$e^{-a} = e^{-nM/N} \leq 1 - P.$$

Example 2 (The raisin bun problem). Suppose $N$ raisin buns of equal size are baked from a batch of dough into which $n$ raisins have been carefully mixed. Then clearly the number of raisins will vary from bun to bun, although the average number of raisins per bun is just $a = n/N$. What is the probability that any given bun will contain at least one raisin?

Solution. It is natural to assume that the volume of the raisins is much less than that of the dough, so that the raisins move around freely and virtually independently during the mixing, and hence whether or not a given raisin ends up in a given bun does not depend on what happens to the other raisins. Clearly, the raisins will be approximately uniformly distributed throughout the dough after careful mixing, i.e., every raisin has the same probability

$$p = \frac{1}{N}$$

of ending up in a given bun.$^1$ Imagine the raisins numbered from 1 to $n$,

$^1$ If $v$ is the volume of the raisins and $V$ that of the dough, then $p = v/V$.