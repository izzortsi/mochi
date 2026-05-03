Qual será, a partir daí, a probabilidade de que nosso sistema salte para o estado $i$, no tempo $k + 1$?

Ora, como, em princípio, o sistema pode ter vindo de qualquer um dos $n$ estados possíveis, basta observar que, para cada $j$, a probabilidade de que estivesse, no tempo $k$, no estado $j$ e tenha saltado deste para $i$, é $p_j p_{ij}$, de forma que a probabilidade de que venha para o estado $i$, no tempo $k + 1$, é

$$p_1 p_{i1} + p_2 p_{i2} + \cdots + p_n p_{in}.$$

Assim, se considerarmos o **vetor das probabilidades** no tempo $k$,

$$\begin{bmatrix}
p_1 \\
p_2 \\
\vdots \\
p_n
\end{bmatrix},$$

então o vetor das probabilidades, no tempo $k + 1$, será dado pelo produto matricial

$$\begin{bmatrix}
p_{11} & p_{12} & \cdots & p_{1n} \\
p_{21} & p_{22} & \cdots & p_{2n} \\
\vdots & \vdots & & \vdots \\
p_{n1} & p_{n2} & \cdots & p_{nn}
\end{bmatrix}$$

Chamaremos de **matriz de transição**, ou **matriz de Markov** do sistema, a matriz $[P]$, dada por

$$[P] = \begin{bmatrix}
p_{11} & p_{12} & \cdots & p_{1n} \\
p_{21} & p_{22} & \cdots & p_{2n} \\
\vdots & \vdots & & \vdots \\
p_{n1} & p_{n2} & \cdots & p_{nn}
\end{bmatrix}.$$

Embora $[P]$ possa variar com $k$, suporemos que $[P]$ é constante (em particular, isto significa que as probabilidades de transição dependem apenas do estado atual do sistema e não da sua história). Assim, se $p$ é o vetor das probabilidades dos diversos estados no tempo $0$, então o vetor das probabilidades no tempo $k$ será

$$[P]^k p.$$

A pergunta que nos colocaremos é, dentro das condições acima, o que podemos dizer sobre a evolução de longo prazo do nosso sistema (faremos, eventualmente, hipóteses adicionais que facilitem a obtenção de alguma resposta).