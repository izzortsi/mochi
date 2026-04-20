Proof. As in the proof of the first Borel-Cantelli lemma (Theorem 2.5, p. 21), let

$$B_n = \bigcup_{k \geq n} A_k, \quad B = \bigcap_{n} B_n = \bigcap_{n} \left( \bigcup_{k \geq n} A_k \right),$$

so that $B$ occurs if and only if infinitely many of the events $A_1, A_2, \ldots$ occur. Taking complements, we have

$$\bar{B}_n = \bigcap_{k \geq n} \bar{A}_k, \quad \bar{B} = \bigcup_{n} \bar{B}_n.$$

Clearly,

$$\bar{B}_n \subset \bigcap_{k=n}^{n+m} \bar{A}_k$$

for every $m = 0, 1, 2, \ldots$. Therefore

$$\mathbf{P}(\bar{B}_n) \leqslant \mathbf{P}\left( \bigcap_{k=n}^{n+m} \bar{A}_k \right) = \mathbf{P}(\bar{A}_n) \cdots \mathbf{P}(\bar{A}_{n+m})$$

$$= (1 - p_n) \cdots (1 - p_{n+m}) \leqslant \exp \left( -\sum_{k=n}^{n+m} p_k \right), \quad (3.16)$$

where we use the inequality $1 - x \leqslant e^{-x}, x \geqslant 0$ and the fact that if $A_1, A_2, \ldots$ is a sequence of independent events, then so is the sequence of complementary events $\bar{A}_1, \bar{A}_2, \ldots$. But

$$\sum_{k=n}^{n+m} p_k \to \infty \quad \text{as} \quad m \to \infty,$$

because of (3.15). Therefore, passing to the limit $m \to \infty$ in (3.16), we find that $\mathbf{P}(\bar{B}_n) = 0$ for every $n = 1, 2, \ldots$. It follows that

$$\mathbf{P}(\bar{B}) \leqslant \sum_{n} \mathbf{P}(\bar{B}_n) = 0,$$

and hence

$$\mathbf{P}(B) = 1 - \mathbf{P}(\bar{B}) = 1,$$

i.e., the probability of infinitely many of the events $A_1, A_2, \ldots$ occurring is 1.

PROBLEMS

1. Given any events $A$ and $B$, prove that the events $A, \bar{A}B$ and $\overline{A \cup B}$ form a full set of mutually exclusive events.

4 It is intuitively clear that if the events $A_1, \ldots, A_n$ are independent, then so are their complements. Concerning the rigorous proof of this fact, see Problem 7 and W. Feller, op. cit., pp. 126, 128.