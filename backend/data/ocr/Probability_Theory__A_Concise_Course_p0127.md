Then it is clear that being told about a rare outcome conveys more information than being told about a likely outcome. To take this into account, we repeat the experiment $n$ times, where $n$ is very large, and send a new message $M'$ conveying the result of the whole series of $n$ trials. Each outcome is now a sequence

$$A_{i_1}, \ldots, A_{i_n},$$

(4)

where $A_{i_k}$ is the outcome occurring at the $k$th trial. Of the $N^n$ possible outcomes of the whole series of trials, it is overwhelmingly likely that the outcome will belong to a much smaller set containing only

$$N_n = \frac{n!}{n_1! \cdots n_N!}$$

(5)

outcomes, where

$$n_1 = np_1, \ldots, n_N = np_N, \quad n_1 + \cdots + n_N = n.$$

In fact, let $n_i = n(A_i)$ be the number of occurrences of the event $A_i$ in $N$ trials. Then

$$\frac{n_i}{n} \sim p_i$$

by the law of large numbers (see Sec. 12), and hence $n_i \sim np_i$. To get (5), we merely replace $\sim$ by $=$ and invoke Theorem 1.4, p. 7. We emphasize that this is a plausibility argument and not a rigorous proof, but the basic idea is perfectly sound.

Continuing in this vein, we argue that only a negligibly small amount of information is lost on the average if we neglect all but the set of $N_n$ highly likely outcomes of the form (4), all with the same probability

$$P(A_{i_1}) \cdots P(A_{i_n}) = p_1^{n_1} \cdots p_N^{n_N}.$$

This brings us back to the case of equiprobable outcomes, and suggests defining the average amount of information conveyed by the message $M'$ as

$$I' = \log_2 N_n.$$

Hence, dividing by the number of trials, we find that the average amount of information in the original message $M$ is just

$$I = \frac{\log_2 N_n}{n}.$$

---

1 In particular, no information at all is conveyed by being told that the sure event has occurred, because we already know what the message will be!
2 Among other missing details, we note that the numbers $n_1, \ldots, n_N$ are in general not all integers, as assumed in (5).