Quite generally, given a relation between various events, we can get an equivalent relation by changing events to their complements and the symbols $\cap$, $\cup$ and $\subset$ to $\cap$, $\cup$ and $\supset$ (the sign = is left alone).

**Example 4.** The following relations are equivalent:

$$\bigcup_k A_k = B \subset \bigcap_k C_k,$$
$$\bigcap_k A_k = \bar{B} \supset \bigcap_k C_k,$$
$$\bigcup_k A_k = B \subset \bigcup_k \bar{C}_k.$$

Remark. It will henceforth be assumed that all events under consideration have well-defined probabilities. Moreover, it will be assumed that all events obtained from a given sequence of events $A_1, A_2, \ldots$ by taking unions, intersections, differences and complements also have well-defined probabilities.

4. The Addition Law for Probabilities

Consider two mutually exclusive events $A_1$ and $A_2$ associated with the outcomes of some random experiment, and let $A = A_1 \cup A_2$ be the union of the two events. Suppose we repeat the experiment a large number of times, thereby producing a whole series of “independent trials under identical conditions.” Let $n$ be the total number of trials, and let $n(A_1), n(A_2)$ and $n(A)$ be the numbers of trials leading to the events $A_1, A_2$ and $A$, respectively. If $A$ occurs in a trial, then either $A_1$ occurs or $A_2$ occurs, but not both (since $A_1$ and $A_2$ are mutually exclusive). Therefore

$$n(A) = n(A_1) + n(A_2),$$

and hence

$$\frac{n(A)}{n} = \frac{n(A_1)}{n} + \frac{n(A_2)}{n}.$$

But for sufficiently large $n$, the relative frequencies $n(A)/n, n(A_1)/n$ and $n(A_2)/n$ virtually coincide with the corresponding probabilities $\mathbf{P}(A), \mathbf{P}(A_1)$ and $\mathbf{P}(A_2)$, as discussed on p. 3. It follows that

$$\mathbf{P}(A) = \mathbf{P}(A_1) + \mathbf{P}(A_2).$$

Similarly, if the events $A_1, A_2$ and $A_3$ are mutually exclusive, then so are $A_1 \cup A_2$ and $A_3$, and hence, by two applications of (2.1),

$$\mathbf{P}(A_1 \cup A_2 \cup A_3) = \mathbf{P}(A_1 \cup A_2) + \mathbf{P}(A_3) = \mathbf{P}(A_1) + \mathbf{P}(A_2) + \mathbf{P}(A_3).$$