But (3.3) is of the same form as (3.2), if we restrict the set of possible outcomes to those in which $B$ is known to have occurred. In fact, the denominator in (3.3) is the total number of such outcomes, while the numerator is the total number of such outcomes leading to the occurrence of $A$.

It is easy to see that conditional probabilities have properties analogous to those of ordinary probabilities. For example,

a) $0 < \mathbf{P}(A \mid B) < 1$;
b) If $A$ and $B$ are incompatible, so that $AB = \varnothing$, then $\mathbf{P}(A \mid B) = 0$;
c) If $B$ implies $A$, so that $B \subset A$, then $\mathbf{P}(A \mid B) = 1$;
d) If $A_1, A_2, \ldots$ are mutually exclusive events with union $A = \bigcup_k A_k$, then

$$\mathbf{P}(A \mid B) = \sum_k \mathbf{P}(A_k \mid B)$$

(the addition law for conditional probabilities).

Property a) is an immediate consequence of (3.1) and the formula $0 < \mathbf{P}(AB) < \mathbf{P}(B)$, implied by $\varnothing \subset AB \subset B$. To prove b), we note that $AB = \varnothing$ implies $\mathbf{P}(AB) = 0$ and hence $\mathbf{P}(A \mid B) = 0$, by (3.1). Similarly, c) follows from the observation that if $B \subset A$, then $AB = B$, $\mathbf{P}(AB) = \mathbf{P}(B)$, and hence $\mathbf{P}(A \mid B) = 1$, by (3.1). Finally, if $A = \bigcup_k A_k$, where $A_1, A_2, \ldots$ are mutually exclusive events, then

$$AB = \bigcup_k A_k B$$

and hence

$$\mathbf{P}(AB) = \sum_k \mathbf{P}(A_k B),$$

(3.5)

by formula (2.2'), p. 20, the addition law for ordinary probabilities. Dividing (3.5) by $\mathbf{P}(B)$, we get (3.4), because of (3.1) and

$$\mathbf{P}(A_k \mid B) = \frac{\mathbf{P}(A_k B)}{\mathbf{P}(B)}$$.

In calculating the probability of an event $A$, it is often convenient to use conditional probabilities as an intermediate step. Suppose $B_1, B_2, \ldots$ is a "full set"$^1$ of mutually exclusive events, in the sense that one (and only one) of the events $B_1, B_2, \ldots$ always occurs. Then we can find $\mathbf{P}(A)$ by using the "total probability formula"

$$\mathbf{P}(A) = \sum_k \mathbf{P}(A \mid B_k) \mathbf{P}(B_k).$$

$^1$ Synonymously, an "exhaustive set."