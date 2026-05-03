Exercício 8.4 Mostre que $W \cap W^\perp = \{ \vec{0} \}$.

Proposição: Todo elemento de $V$ se escreve, de maneira única, como soma de um elemento de $W$ e um de $W^\perp$. Consequentemente, $dim W + dim W^\perp = dim V$.

Demonstração: Seja $\vec{v}$ um elemento de $V$. Sejam $\vec{v}_0$ a projeção de $\vec{v}$ em $W$ e $\vec{v}_1 = \vec{v} - \vec{v}_0$. Então é fácil ver que $\vec{v}_1 \in W^\perp$ e $\vec{v} = \vec{v}_0 + \vec{v}_1$. Se pudéssemos escrever, também, $\vec{v} = \vec{w}_0 + \vec{w}_1$, com $\vec{w}_0 \in W$ e $\vec{w}_1 \in W^\perp$, teríamos $\vec{0} = (\vec{v}_0 - \vec{w}_0) + (\vec{v}_1 - \vec{w}_1)$, o que daria $(\vec{v}_0 - \vec{w}_0) = -(\vec{v}_1 - \vec{w}_1)$, com $(\vec{v}_0 - \vec{w}_0) \in W$ e $-(\vec{v}_1 - \vec{w}_1) \in W^\perp$, o que implica em $\vec{v}_0 = \vec{w}_0$ e $\vec{v}_1 = \vec{w}_1$. Provada a primeira parte, basta tomar uma base para $W$ e uma para $W^\perp$. A união das duas é uma base de $V$, o que prova a segunda parte.

Exercício 8.5 Mostre que, para qualquer subespaço $W$ de $V$, tem-se $(W^\perp)^\perp = W$.

Exercício 8.6 Seja $P = (x_1, x_2, x_3)$ um ponto em $\mathbb{R}^3$. Determine a projeção ortogonal, $P_o$, de $P$ sobre o subespaço $E$ gerado por $\vec{v} = (1, 1, 1)$. Mostre que $P_o$ é o ponto $E$ mais próximo de $P$, isto é: $|P - P_o| \leq |P - Q| \forall Q \in E$.

8.4 Bases ortonormais e projeções

Tomemos, como ponto de partida das considerações a seguir, a seguinte questão: massas muito grandes de dados podem ser difíceis de armazenar, transmitir e manipular. Como exemplo extremo, consideremos uma fotografia ideal (em preto e branco), vista como uma função do retângulo $R = [0, a] \times [0, b]$ em $\mathbb{R}$. Uma tal fotografia vive, em princípio, em um espaço de dimensão infinita. Uma versão discreta implicaria, por exemplo, em dividir $R$ em pequenos retângulos, de lados $a/n$ e $b/m$ (uma resolução alta significando tomar $m$ e $n$ grandes). Podemos, pois, supor que nossas fotografias (discretas) são dadas por arquivos que vivem em um espaço de dimensão $N = m \times n$ grande. Em determinadas situações, porém, seria preferível ter, dessas fotografias, versões em baixa resolução (de dimensão $M$, digamos, com $M < N$).

Uma abordagem radicalmente simples da questão acima consistiria em fazer $N = 3$ e $M = 2$. Assim, nossos arquivos originais estariam em $\mathbb{R}^3$, mas suas versões em baixa resolução estariam em um espaço de dimensão 2 (note que estamos evitando dizer que estariam em $\mathbb{R}^2$, já veremos por que). Uma solução simples para a compactação seria jogar fora uma das coordenadas (a segunda, por exemplo). Assim, do arquivo $(x_1, x_2, x_3)$, guardariamos apenas $(x_1, x_3)$). Esta não é, provavelmente, a melhor ideia, a menos que a informação contida em $x_2$ possa, de alguma forma, ser (total ou parcialmente) recuperada a partir de $x_1$ e $x_3$.

Tentemos algo um pouco menos chutado. Examinemos a questão de um ponto de vista geométrico. Vamos admitir duas coisas:

1. é razoável medir a diferença entre o arquivo $x = (x_1, x_2, x_3)$ e o arquivo $y = (y_1, y_2, y_3)$ por $\sqrt{(x_1 - y_1)^2 + (x_2 - y_2)^2 + (x_3 - y_3)^2}$ (que, como sabemos, é a distância oriunda do produto escalar canônico de $\mathbb{R}^3$);