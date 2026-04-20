Given a random experiment with $N$ equiprobable outcomes $A_1, \ldots, A_N$, how much “information” is conveyed on the average by a message $M$ telling us which of the outcomes $A_1, \ldots, A_N$ has actually occurred? As a reasonable measure of this information, we might take the average length of the message $M$, provided $M$ is written in an “economical way.” For example, suppose we use a “binary code,” representing each of the possible outcomes $A_1, \ldots, A_N$ by a “code word” of length $l$, i.e., by a sequence

$$a_1 \ldots a_l,$$

where each “digit” $a_k$ is either a 0 or a 1. Obviously there are $2^l$ such words (all of the same length $l$), and hence to be capable of uniquely designating the $N$ possible outcomes, we must choose a value of $l$ such that

$$N \leq 2^l.$$

(1)

The smallest value of $l$ satisfying (1) is just the integer such that

$$0 \leq l - \log_2 N < 1.$$

This being the case, the quantity

$$I = \log_2 N$$

(2)

is clearly a reasonable definition of the average amount of information in the message $M$ (measured in binary units or “bits”).

More generally, suppose the outcomes $A_1, \ldots, A_N$ have different probabilities

$$p_1 = \mathbf{P}(A_1), \ldots, p_N = \mathbf{P}(A_N).$$

(3)