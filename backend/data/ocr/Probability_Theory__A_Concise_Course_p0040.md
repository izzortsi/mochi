Solution. Let $B$ be the event that the last of the $i$ inspected objects is the best of those inspected, and let $A$ be the event that the $i$th object is the best of all $m$ objects, both inspected and uninspected. Then we want the conditional probability $\mathbf{P}(A \mid B)$ of the event $A$ given that $B$ has already occurred. According to (3.1), to calculate $\mathbf{P}(A \mid B)$ we need both $\mathbf{P}(B)$ and $\mathbf{P}(AB)$. Obviously $A \subset B$ and hence $AB = A$, so that $\mathbf{P}(AB) = \mathbf{P}(A)$. By hypothesis, all possible arrangements of the objects in order of presentation are equiprobable (the objects are presented “at random”). Hence $\mathbf{P}(B)$ is the probability that in a random permutation of $i$ distinguishable objects (the objects differ in quality) a given object (the best of all $i$ objects) occupies the $i$th place. Since there are $i!$ permutations of all $i$ objects and $(i - 1)!$ permutations subject to the condition that a given object occupy the $i$th place, this probability is just

$$\mathbf{P}(B) = \frac{(i - 1)!}{i!} = \frac{1}{i}.$$

Similarly, $\mathbf{P}(A)$ is the probability that in a random permutation of $m$ distinguishable objects, a given object (the best of all $m$ objects) occupies the $i$th place, and hence

$$\mathbf{P}(A) = \frac{(m - 1)!}{m!} = \frac{1}{m}.$$

Therefore the desired conditional probability $\mathbf{P}(A \mid B)$ is just

$$\mathbf{P}(A \mid B) = \frac{\mathbf{P}(AB)}{\mathbf{P}(B)} = \frac{\mathbf{P}(A)}{\mathbf{P}(B)} = \frac{i}{m}.$$

Example 3 (The gambler’s ruin). Consider the game of “heads or tails,” in which a coin is tossed and a player wins 1 dollar, say, if he successfully calls the side of the coin which lands upward, but otherwise loses 1 dollar. Suppose the player’s initial capital is $x$ dollars, and he intends to play until he wins $m$ dollars but no longer. In other words, suppose the game continues until the player either wins the amount of $m$ dollars, stipulated in advance, or else loses all his capital and is “ruined.” What is the probability that the player will be ruined?

Solution. The probability of ruin clearly depends on both the initial capital $x$ and the final amount $m$. Let $p(x)$ be the probability of the player’s being ruined if he starts with a capital of $x$ dollars. Then the probability of ruin given that the player wins the first call is just $p(x + 1)$, since the player’s capital becomes $x + 1$ if he wins the first call. Similarly, the probability of ruin given that the player loses the first call is $p(x - 1)$, since the player’s capital becomes $x - 1$ if he loses the first call. In other words, if $B_1$ is the event that the player wins the first call and $B_2$ the event that he loses the first