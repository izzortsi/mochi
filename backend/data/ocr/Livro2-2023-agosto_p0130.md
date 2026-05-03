Nos exercícios a seguir, $P$ é matriz de Markov e $T$ é definido por

$$T = \{ p_1 e_1 + p_2 e_2 + \cdots + p_n e_n \mid p_1 + p_2 + \cdots + p_n = 1, p_1, p_2, \ldots, p_n \geq 0 \}.$$

**Exercício 14.10** Suponha $n = 3$. Classifique todos os casos em que não existe $p^*$ tal que $P^k(T) \rightarrow p^*$. Mostre que, em todos, há um subconjunto $I$ de $\{\vec{e}_1, \vec{e}_2, \vec{e}_3\}$, não vazio, tal que $P(I) = I$.

**Exercício 14.11** Mostre que, para todo $n \geq 4$ há exemplos de matrizes de Markov $P$ para as quais não existe $p^*$ tal que $P^k(T) \rightarrow p^*$, mas também não há um subconjunto $I$ de $\{e_1, e_2, \cdots e_n\}$, não vazio, tal que $P(I) = I$.

**Exercício 14.12** A distância do ponto $a$ ao conjunto $X$ é definida por

$$d(a, X) = \inf \{ |x - a|, x \in X \}.$$

Mostre que o mínimo de $d(x, \partial T)$, com $x$ em $P^k(T)$, é atingido em um dos vértices de $P^k(T)$ ($\partial T$, dito bordo de $T$, é o conjunto dos $p$ em $T$ com alguma coordenada nula).

**Exercício 14.13** Mostre que, se todas as entradas de $P^k$ são não nulas, então a condição (ii) do Teorema é satisfeita.

**Teorema:** Seja $P$ matriz real $n \times n$, com entradas não negativas e tal que a soma das entradas de cada coluna é 1. Seja $T$ dado por

$$T = \{ p_1 e_1 + p_2 e_2 + \cdots + p_n e_n \mid p_1 + p_2 + \cdots + p_n = 1, p_1, p_2, \ldots, p_n \geq 0 \}.$$

Se, para algum natural $k$, $P^k$ tem uma linha com todas as entradas não nulas, então $P^m(T)$ converge, quando $m \rightarrow \infty$, para um ponto $p^*$ de $T$. Se além disso, sendo $P^k = [p_{ij}]$, definimos $\beta_i$, $i = 1, \ldots, n$, e $\alpha$ por

$$\beta_i = \min \{ p_{ij}, j = 1, \ldots, n \},$$

$$\alpha = 1 - \sum_{i=1}^{n} \beta_i,$$

temos, para todo $p$ em $T$ e para todo natural $m$,

$$|P^{mk}p - p^*| \leq \alpha^m \sqrt{2}.$$