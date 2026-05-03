Capítulo 14

Matrizes de Markov

Importantes por suas aplicações, mas, acima de tudo, fascinantes por seu caráter geométrico, as matrizes de Markov têm suas raízes nos processos estocásticos. Vamos abordar aqui apenas um pequeno resultado referente ao assunto.

14.1 Probabilidades de um processo de transição

Nosso ponto de partida é um sistema que evolui aos saltos, mudando de estado a cada intervalo de tempo $\Delta t$ ($\Delta t$ é considerado fixo e não tem importância em nossa análise). Existe apenas um número finito de estados possíveis, que designaremos pelos números

$$1, 2, \ldots, n.$$

Vamos também nos referir aos tempos,

$$0, \Delta t, 2\Delta t, 3\Delta t, \ldots, k\Delta t, \ldots$$

como "tempo 0", "tempo 1", "tempo 2",..., "tempo $k$", etc.

A informação sobre a evolução do sistema, do tempo $k$ para o tempo $k+1$, é dada pelas probabilidades de transição:

$$p_{ij}, 1 \leq i, j \leq n,$$

$p_{ij}$ representando a probabilidade de que o sistema, estando no estado $j$, no tempo $k$, salte para o estado $i$, no tempo $k+1$ ($p_{ii}$ representa, claro, a probabilidade de que o sistema, estando em $i$ no tempo $k$, permaneça em $i$ no tempo $k+1$).

Exercício 14.1 Assegure-se de que tem claro que, necessariamente,

$$p_{1j} + p_{2j} + \cdots + p_{nj} = 1, \forall j = 1, \ldots, n.$$

Suponhamos, agora, que tenhamos, em um dado tempo, $k$, as probabilidades de que o sistema esteja em cada um dos possíveis estados, $p_i$ representando a probabilidade de que se encontre no estado $i$. Temos, é claro,

$$p_1 + \cdots + p_n = 1.$$