and that the above products are 1 if and only if the block $(j, x_1, \ldots, x_{l-1}, k)$ is admissible.

In particular, for $A$ transitive we obtain the following simple consequence which is the key ingredient for our proof that transitive subshifts are chaotic.

**Corollary 11.11.** If $A$ is transitive and $l$ is as above, there is an admissible block $(x_1, \ldots, x_{l-1})$ such that $(j, x_1, \ldots, x_{l-1}, k)$ is admissible for all $0 \leq j, k \leq N-1$.

This lemma ensures that, if $A$ is transitive, there is an admissible block of length $l-1$ such that we can glue admissible blocks to both ends in such a way that the resulting block is again admissible!

As a first application we prove

**Lemma 11.12.** Suppose $A$ is transitive. Then $\Sigma_N^A$ is a Cantor set.

**Proof.** As noted earlier, $\Sigma_N^A$ is compact. Moreover, as the subset of a totally disconnected set it is totally disconnected. Now let $x \in \Sigma_N^A$ be given. To show that there are points arbitrarily close to $x$ start by taking the first $n$ coefficients and add an admissible block of length $l-1$ from Corollary 11.11 to the end. Next add a single coefficient to the end such that the resulting block is different from the corresponding one of $x$. Finally, add an admissible block of length $l-1$ recursively to fill up the sequence. The constructed point can be made arbitrarily close to $x$ by choosing $n$ large and so we are done.

As second application we show that $(\Sigma_N^A, \sigma)$ is chaotic.

**Lemma 11.13.** Suppose $A$ is transitive. Then the shift map on $\Sigma_N^A$ has a countable number of periodic points which are dense.

**Proof.** The proof is similar to the last part of the previous proof. We first show that the periodic points are dense. Let $x$ be given and take the first $n$ coefficients and add our admissible block of length $l-1$ from Corollary 11.11 to the end. Now take this entire block and repeat it periodically. The rest is straightforward.

**Lemma 11.14.** Suppose $A$ is transitive. Then the shift map on $\Sigma_N^A$ has a dense orbit.

**Proof.** The proof is as in the case of the full shift. Take all admissible blocks of length 1, 2, 3, ... and glue them together using our admissible block of length $l-1$ from Corollary 11.11.