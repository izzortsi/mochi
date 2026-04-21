Proof Let $A$ be a compact subset of $M$. Therefore it is closed. To see that it is totally bounded, let $\epsilon > 0$ be given and consider the covering of $A$ by $\epsilon$-neighborhoods,

$$\{M_\epsilon x : x \in A\}.$$

Compactness of $A$ implies that this covering reduces to a finite subcovering and therefore $A$ is totally bounded.

Conversely, assume that $A$ is a closed and totally bounded subset of the complete metric space $M$. We claim that $A$ is sequentially compact. That is, every sequence $(a_n)$ in $A$ has a subsequence that converges in $A$. Set $\epsilon_k = 1/k$, $k = 1, 2, \ldots$. Since $A$ is totally bounded we can cover it by finitely many $\epsilon_1$-neighborhoods

$$M_{\epsilon_1}(q_1), \ldots, M_{\epsilon_1}(q_m).$$

By the pigeonhole principle, terms of the sequence $a_n$ lie in at least one of these neighborhoods infinitely often, say it is $M_{\epsilon_1}(p_1)$. Choose

$$a_{n_1} \in A_1 = A \cap M_{\epsilon_1}(p_1).$$

Every subset of a totally bounded set is totally bounded, so we can cover $A_1$ by finitely many $\epsilon_2$-neighborhoods. For one of them, say $M_{\epsilon_2}(p_2)$, $a_n$ lies in $A_2 = A_1 \cap M_{\epsilon_2}(p_2)$ infinitely often. Choose $a_{n_2} \in A_2$ with $n_2 > n_1$.

Proceeding inductively, cover $A_{k-1}$ by finitely many $\epsilon_k$-neighborhoods, one of which, say $M_{\epsilon_k}(p_k)$, contains terms of the sequence $(a_n)$ infinitely often. Then choose $a_{n_k} \in A_k = A_{k-1} \cap M_{\epsilon_k}(p_k)$ with $n_k > n_{k-1}$. Then $(a_{n_k})$ is a subsequence of $(a_n)$. It is Cauchy. For if $\epsilon > 0$ is given we choose $N$ such that $2/N < \epsilon$. If $k, \ell \geq N$ then

$$a_{n_k}, a_{n_\ell} \in A_N \quad \text{and} \quad \text{diam} A_N \leq 2\epsilon_N = \frac{2}{N} < \epsilon,$$

which shows that $(a_{n_k})$ is Cauchy. Completeness of $M$ implies that $(a_{n_k})$ converges to some $p \in M$ and since $A$ is closed we have $p \in A$. Hence $A$ is compact.

66 Corollary A metric space is compact if and only if it is complete and totally bounded.

Proof Every compact metric space $M$ is complete. This is because, given a Cauchy sequence $(p_n)$ in $M$, compactness implies that some subsequence converges in $M$, and if a Cauchy sequence has a convergent subsequence then the mother sequence converges too. As observed above, compactness immediately gives total boundedness.

Conversely, assume that $M$ is complete and totally bounded. Every metric space is closed in itself. By Theorem 65, $M$ is compact.