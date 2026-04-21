in the definitions to be rational. The **Cauchy completion** $\widehat{\mathbb{Q}}$ of $\mathbb{Q}$ is the collection $\mathcal{C}$ of Cauchy sequences in $\mathbb{Q}$ modulo the equivalence relation of being co-Cauchy.

We claim that $\widehat{\mathbb{Q}}$ is a complete ordered field. That is, $\widehat{\mathbb{Q}}$ is just another version of $\mathbb{R}$. The arithmetic on $\widehat{\mathbb{Q}}$ is defined by

$$P + Q = [(p_n + q_n)] \quad P - Q = [(p_n - q_n)]$$
$$PQ = [(p_nq_n)] \quad P/Q = [(p_n/q_n)]$$

where $P = [(p_n)]$ and $Q = [(q_n)]$. Of course $Q \neq [(0, 0, \ldots)]$ in the fraction $P/Q$. Exercise 134 asks you to check that these natural definitions make $\widehat{\mathbb{Q}}$ a field. Although there are many things to check – well definedness, commutativity, and so forth – all are effortless. There are no sixteen case proofs as with cuts. Also, just as with metric spaces, $\mathbb{Q}$ is naturally a subfield of $\widehat{\mathbb{Q}}$ when we think of $r \in \mathbb{Q}$ as the constant sequence $\overline{r} = [(r, r, \ldots)]$.

That’s the easy part – now the rest.

To define the order relation on $\widehat{\mathbb{Q}}$ we rework some of the cut ideas. If $P \in \widehat{\mathbb{Q}}$ has a representative $[(p_n)]$, such that for some $\epsilon > 0$, we have $p_n \geq \epsilon$ for all $n$ then $P$ is positive. If $-P$ is positive then $P$ is negative.

Then we define $P \prec Q$ if $Q - P$ is positive. Exercise 135 asks you to check that this defines an order on $\widehat{\mathbb{Q}}$, consistent with the standard order $<$ on $\mathbb{Q}$ in the sense that for all $p, q \in \mathbb{Q}$ we have $p < q \iff \overline{p} \prec \overline{q}$. In particular, you are asked to prove the trichotomy property: Each $P \in \widehat{\mathbb{Q}}$ is either positive, negative, or zero, and these possibilities are mutually exclusive.

Combining Cauchyness with the definition of $\prec$ gives

$$P = [(p_n)] \prec Q = [(q_n)] \iff \text{there exist } \epsilon > 0 \text{ and } N \in \mathbb{N}$$

such that for all $m, n \geq N$, we have $p_m + \epsilon < q_n$.

It remains to check the least upper bound property. Let $\mathcal{P}$ be a nonempty subset of $\widehat{\mathbb{Q}}$ that is bounded above. We must find a least upper bound for $\mathcal{P}$.

First of all, since $\mathcal{P}$ is bounded there is a $B = (b_n) \in \widehat{\mathbb{Q}}$ such that $P \prec B$ for all $P \in \mathcal{P}$. We can choose $B$ so its terms lie at distance $\leq 1$ from each other. Set $b = b_1 + 1$. Then $\overline{b}$ is an upper bound for $\mathcal{P}$. Since $\mathbb{Q}$ is Archimedean there is an integer $m \geq b$, and $\overline{m}$ is also an upper bound for $\mathcal{P}$. By the same reasoning $\mathcal{P}$ has upper bounds $\overline{r}$ such that $r$ is a dyadic fraction with arbitrarily large denominator $2^n$.