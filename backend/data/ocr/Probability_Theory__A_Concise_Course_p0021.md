consisting of two aces. Hence the probability of picking two aces is just

$$\frac{C_2^4}{C_2^{52}} = \frac{6}{1326} = \frac{1}{221}.$$

**Example 8.** What is the probability that each of four bridge players holds an ace?

**Solution.** Applying Theorem 1.4 with $n = 52$ and $n_1 = n_2 = n_3 = n_4 = 13$, we find that there are

$$\frac{52!}{13! \ 13! \ 13! \ 13!}$$

distinct deals of bridge. There are 4! = 24 ways of giving an ace to each player, and then the remaining 48 cards can be dealt out in

$$\frac{48!}{12! \ 12! \ 12! \ 12!}$$

distinct ways. Hence there are

$$24 \frac{48!}{(12!)^4}$$

distinct deals of bridge such that each player receives an ace. Therefore the probability of each player receiving an ace is just

$$24 \frac{48!}{(12!)^4} \frac{(13!)^4}{52!} = \frac{24(13)^4}{52 \cdot 51 \cdot 50 \cdot 49} \approx 0.105.$$

**Remark.** Most of the above formulas contain the quantity

$$n! = n(n - 1) \cdots 2 \cdot 1,$$

called $n$ factorial. For large $n$, it can be shown that

$$n! \sim \sqrt{2\pi n} n^n e^{-n}.$$

This simple asymptotic representation of $n!$ is known as Stirling’s formula.11

**PROBLEMS**

1. A four-volume work is placed in random order on a bookshelf. What is the probability of the volumes being in proper order from left to right or from right to left?

10 The symbol $\sim$ between two variables $\alpha_n$ and $\beta_n$ means that the ratio $\alpha_n/\beta_n \to 1$ as $n \to \infty$.

11 Proved, for example, in D. V. Widder, *Advanced Calculus*, second edition, Prentice-Hall, Inc., Englewood Cliffs, N.J. (1961), p. 386.