i.e., the desired probability $P(A)$ is a partial sum of the power series expansion of the function $1 - e^x$ with $x = -1$:

$$1 - e^{-1} = 1 - \frac{1}{2!} + \frac{1}{3!} - \frac{1}{4!} + \cdots \pm \frac{1}{n!} \pm \cdots.$$

Thus, for large $n$,

$$P(A) \approx 1 - e^{-1} \approx 0.632. \tag{2.14}$$

To generalize the addition law to the case of an infinite sequence of mutually exclusive events $A_1, A_2, \ldots$, we repeatedly apply (2.1). Thus

$$P(A_1 \cup A_2 \cup A_3 \cup \cdots) = P(A_1) + P(A_2 \cup A_3 \cup \cdots)$$

$$= P(A_1) + P(A_2) + P(A_3 \cup \cdots)$$

$$= P(A_1) + P(A_2) + P(A_3) + \cdots,$$

or equivalently,

$$P\left(\bigcup_{k=1}^{\infty} A_k\right) = \sum_{k=1}^{\infty} P(A_k).$$

We can combine this formula and (2.2) into a single formula

$$P\left(\bigcup_{k=1}^{\infty} A_k\right) = \sum_{k=1}^{\infty} P(A_k), \tag{2.2'}$$

where it will always be clear from the context whether $\bigcup_k$ and $\sum_k$ have finite or infinite limits.6

The “generalized addition law” (2.2') has a number of important consequences. We begin with two theorems expressing a kind of “continuity property” of probability:

**THEOREM 2.3.** If $A_1, A_2, \ldots$ is an “increasing sequence” of events, i.e., a sequence such that $A_1 \subset A_2 \subset \cdots$, then

$$P\left(\bigcup_{k=1}^{\infty} A_k\right) = \lim_{n \to \infty} P(A_n). \tag{2.15}$$

**Proof.** Clearly, the events

$$B_1 = A_1, \quad B_2 = A_2 - A_1, \ldots, \quad B_n = A_n - \bigcup_{k=1}^{n-1} B_k, \ldots \tag{2.16}$$

6 In the last analysis, formulas (2.1), (2.2') and (2.3) are axioms, although they are, of course, strongly suggested by experience, i.e., by the interpretation of probabilities as limiting values of relative frequencies. In this sense, they are the “only reasonable axioms,” and lead to a model of random phenomena whose consequences are fully confirmed by experiment.