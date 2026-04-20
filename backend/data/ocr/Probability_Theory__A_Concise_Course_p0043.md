P($A_1$ | $A_2$) of $A_1$ occurring given that $A_2$ has already occurred should be the same as the unconditional probability of $A_1$, i.e.,

$$P(A_1 \mid A_2) = P(A_1)$$

(and similarly with $A_1$ and $A_2$ changing places). But clearly

$$P(A_1 \mid A_2) = \frac{P(A_1 A_2)}{P(A_2)} = P(A_1)$$

if and only if (3.14) holds.

**Example 1.** Let $A_1$ be the event that a card picked at random from a full deck is a spade, and $A_2$ the event that it is a queen. Are $A_1$ and $A_2$ independent events?

**Solution.** The question is not easily answered on the basis of physical intuition alone. However, noting that a full deck (52 cards) contains 13 spades and 4 queens, but only one queen of spades, we see at once that

$$P(A_1) = \frac{13}{52} = \frac{1}{4}, \quad P(A_2) = \frac{4}{52} = \frac{1}{13}, \quad P(A_1 A_2) = \frac{1}{52},$$

and hence $P(A_1 A_2) = P(A_1) P(A_2)$. Therefore the events $A_1$ and $A_2$ are independent.

**Example 2.** In throwing a pair of dice, let $A_1$ be the event that "the first die turns up odd," $A_2$ the event that "the second die turns up odd," and $A_3$ the event that "the total number of spots is odd." Clearly, the number of spots on one die has nothing to do with the number of spots on the other die, and hence the events $A_1$ and $A_2$ are independent, with probabilities

$$P(A_1) = \frac{1}{2}, \quad P(A_2) = \frac{1}{2}.$$

Moreover, it is clear that

$$P(A_3) = \frac{1}{2}.$$

Given that $A_1$ has occurred, $A_3$ can occur only if the second die turns up even. Hence

$$P(A_3 \mid A_1) = \frac{1}{2},$$

and similarly

$$P(A_3 \mid A_2) = \frac{1}{2}.$$