are mutually exclusive and have union $\bigcup_k A_k$. Moreover,

$$\bigcup_{k=1}^n B_k = A_n.$$

Therefore, by (2.2'),

$$\mathbf{P}\left(\bigcup_k A_k\right) = \mathbf{P}\left(\bigcup_k B_k\right) = \sum_k \mathbf{P}(B_k) = \lim_{n \to \infty} \sum_{k=1}^n \mathbf{P}(B_k)$$

$$= \lim_{n \to \infty} \mathbf{P}\left(\bigcup_{k=1}^n B_k\right) = \lim_{n \to \infty} \mathbf{P}(A_n).$$

Similarly, we have

**THEOREM 2.3'.** If $A_1, A_2, \ldots$ is a "decreasing sequence" of events, i.e., a sequence such that $A_1 \supset A_2 \supset \cdots$, then

$$\mathbf{P}\left(\bigcap_k A_k\right) = \lim_{n \to \infty} \mathbf{P}(A_n).$$

**Proof.** Going over to complementary events, we have $\bar{A}_1 \subset \bar{A}_2 \subset \cdots$, and hence, by (2.15),

$$\mathbf{P}\left(\bigcap_k A_k\right) = 1 - \mathbf{P}\left(\bigcup_k \bar{A}_k\right) = 1 - \lim_{n \to \infty} \mathbf{P}(\bar{A}_n)$$

$$= \lim_{n \to \infty} [1 - \mathbf{P}(\bar{A}_n)] = \lim_{n \to \infty} \mathbf{P}(A_n).$$

In the case of arbitrary events, we must replace $=$ by $<$ in (2.2'):

**THEOREM 2.4.** *The inequality*

$$\mathbf{P}\left(\bigcup_k A_k\right) < \sum_k \mathbf{P}(A_k)$$

**holds for arbitrary events** $A_1, A_2, \ldots$.

**Proof.** As in the proof of Theorem 2.3, $\bigcup_k A_k$ is the union of the mutually exclusive events (2.16), where obviously $B_k \subset A_k$ and hence $\mathbf{P}(B_k) < \mathbf{P}(A_k)$, by (2.7). Therefore

$$\mathbf{P}\left(\bigcup_k A_k\right) = \mathbf{P}\left(\bigcup_k B_k\right) = \sum_k \mathbf{P}(B_k) < \sum_k \mathbf{P}(A_k).$$

Finally, we prove a proposition that will be needed in Chapter 7:

**THEOREM 2.5** (*First Borel-Cantelli lemma*). Given a sequence of events

---

7 For the "second Borel-Cantelli lemma," see Theorem 3.1, p. 33.