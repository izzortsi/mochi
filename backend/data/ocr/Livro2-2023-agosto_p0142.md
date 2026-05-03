Os $n + 1$ polinômios $B_{k,n}$, todos de grau $n$, definidos por

$$B_{k,n}(t) = \binom{n}{k} t^k (1-t)^{n-k},$$

são ditos os polinômios de Bernstein de ordem $n$.

**Proposição:** Os polinômios de Bernstein de ordem $n$ formam uma base para $\mathcal{P}_{n+1}$.

**Demonstração:** Temos $n + 1$ elementos de um espaço, $\mathcal{P}_{n+1}$, de dimensão $n + 1$. Basta, pois, mostrar que são linearmente independentes. Suponhamos, pois, que, para certos reais $\alpha_o, \ldots, \alpha_n$, seja identicamente nulo o polinômio $p$ dado por

$$p(t) = \sum_{k=0}^{n} \alpha_k \binom{n}{k} t^k (1-t)^{n-k}.$$

Fazendo $t = 0$, obtemos diretamente $\alpha_o = 0$. Em seguida, já com $\alpha_o = 0$ e pondo em evidência o fator comum $t$, obtemos

$$t \sum_{k=1}^{n} \alpha_k \binom{n}{k} t^{k-1}(1-t)^{n-k},$$

que deve, também, ser identicamente nulo. Ora, isto significa que o somatório deve ser nulo para $t$ diferente de zero. como se trata de um polinômio,

$$\sum_{k=1}^{n} \alpha_k \binom{n}{k} t^{k-1}(1-t)^{n-k}$$

tem que ser identicamente nulo. Fazendo, de novo, $t = 0$, temos $\alpha_1 = 0$. Repetindo inductivamente o raciocínio, obtemos $\alpha_o = \alpha_1 = \cdots = \alpha_n = 0.$