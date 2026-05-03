Demonstração: A necessidade é clara, pois $p^*$ não pode ser o vetor nulo. Passemos à suficiência e à estimativa de erro. Podemos desconsiderar o caso $\alpha = 0$, que é trivial. Suporemos, pois, $\alpha > 0$. Sejam. para $i = 1, \ldots, n$, $\beta_i$ como definidos acima; seja também $\alpha$ como acima. Chamaremos de $\mathbf{e}_1, \ldots, \mathbf{e}_n$ os vetores da base canônica de $\mathbb{R}^n$. Seja, então,

$$\varepsilon = \sum_{i=1}^{n} \beta_i \mathbf{e}_i.$$

A hipótese do Teorema nos diz que, para $p = (p_1, \ldots, p_n)$ em $T$, vale

$$p \in P^k(T) \Rightarrow p_i \geq \beta_i \text{ for } i = 1, \ldots, n.$$

Logo, para $p = (p_1, \ldots, p_n)$ em $P^k(T)$, temos

$$p = \sum_{i=1}^{n} p_i \mathbf{e}_i = \varepsilon + \alpha \sum_{i=1}^{n} q_i \mathbf{e}_i, \text{ com } q_i = \frac{p_i - \beta_i}{\alpha}, \text{ i = 1, \ldots, n},$$

o que prova

$$P^k(T) \subset \varepsilon + \alpha T.$$

Como as hipóteses do Teorema garantem que $\alpha < 1$, o Lema de Encolhimento completa a prova.

Definição: Uma face de dimensão $k - 1$ de $T$ é um subconjunto (não vazio) $F$ de $T$ da forma

$$F = \{p_1 u_1 + \cdots + p_k u_k, (p_1, \ldots, p_k) \in [0, 1]^k, p_1 + \cdots + p_k = 1\},$$

sendo $u_1, \ldots, u_k$ distintos e

$$\{u_1, \ldots, u_k\} \subset \{\mathbf{e}_1, \ldots, \mathbf{e}_n\}.$$

Definição: Uma face $F$ é dita recorrente se existe um natural $k$ tal que $P^k(F) \subset F.$

Exercício 14.14 Mostre que, se existe $p^* \in T$ tal que $P^k(T) \rightarrow p^*$, então, a condição a seguir é satisfeita:

(*) se $F$ e $G$ são faces recorrentes, então $F \cap G \neq \emptyset.$

Exercício 14.15 A condição (*) é suficiente para a existência de $p^* \in T$ tal que $P^k(T) \rightarrow p^*?$