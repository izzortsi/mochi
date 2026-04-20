5. Conditional Probability

In observing the outcomes of a random experiment, one is often interested in how the outcome of one event $A$ is influenced by that of another event $B$. For example, in one extreme case the relation between $A$ and $B$ may be such that $A$ always occurs if $B$ does, while in the other extreme case $A$ never occurs if $B$ does. To characterize the relation between $A$ and $B$, we introduce the conditional probability of $A$ on the hypothesis $B$, i.e., the “probability of $A$ occurring under the condition that $B$ is known to have occurred.” This quantity is defined by

$$\mathbf{P}(A \mid B) = \frac{\mathbf{P}(AB)}{\mathbf{P}(B)},$$

(3.1)

where $AB$ is the intersection of the events $A$ and $B$, and it is assumed that $\mathbf{P}(B) > 0$.

To clarify the meaning of (3.1), consider an experiment with a finite number of equiprobable outcomes (elementary events). Let $N$ be the total number of outcomes, $N(B)$ the number of outcomes leading to the occurrence of the event $B$, and $N(AB)$ the number of outcomes leading to the occurrence of both $A$ and $B$. Then, as on p. 1, the probabilities of $B$ and $AB$ are just

$$\mathbf{P}(B) = \frac{N(B)}{N}, \quad \mathbf{P}(AB) = \frac{N(AB)}{N},$$

(3.2)

and hence (3.1) implies

$$\mathbf{P}(A \mid B) = \frac{N(AB)}{N(B)}.$$

(3.3)