The numbers (1.9) are called multinomial coefficients, and generalize the binomial coefficients (1.8).

**Example 6 (Quality control).** A batch of 100 manufactured items is checked by an inspector, who examines 10 items selected at random. If none of the 10 items is defective, he accepts the whole batch. Otherwise, the batch is subjected to further inspection. What is the probability that a batch containing 10 defective items will be accepted?

**Solution.** The number of ways of selecting 10 items out of a batch of 100 items equals the number of combinations of 100 things taken 10 at a time, and is just

$$N = C_{10}^{100} = \frac{100!}{10! \cdot 90!}.$$

By hypothesis, these combinations are all equiprobable (the items being selected “at random”). Let $A$ be the event that “the batch of items is accepted by the inspector.” Then $A$ occurs whenever all 10 items belong to the set of 90 items of acceptable quality. Hence the number of combinations favorable to $A$ is

$$N(A) = C_{10}^{90} = \frac{90!}{10! \cdot 80!}.$$

It follows from (1.1) that the probability of the event $A$, i.e., of the batch being accepted, equals

$$P(A) = \frac{N(A)}{N} = \frac{90!}{80! \cdot 100!} = \frac{81 \cdot 82 \cdots 90}{91 \cdot 92 \cdots 100} \approx \left(1 - \frac{1}{10}\right)^{10} \approx \frac{1}{e},$$

where $e = 2.718 \ldots$ is the base of the natural logarithms.

**Example 7.** What is the probability that two playing cards picked at random from a full deck are both aces?

Solution. A full deck consists of 52 cards, of which 4 are aces. There are

$$C_{2}^{52} = \frac{52!}{2! \cdot 50!} = 1326$$

ways of selecting a pair of cards from the deck. Of these 1326 pairs, there are

$$C_{2}^{4} = \frac{4!}{2! \cdot 2!} = 6$$

$^9$ The symbol $\approx$ means “is approximately equal to.”