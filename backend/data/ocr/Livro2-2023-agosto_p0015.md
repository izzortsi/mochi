No caso do espaço, se $P$ é dado por $(x_0, y_0, z_0)$ e $\vec{v}$ por $(a, b, c)$, teremos três equações, ditas equações paramétricas da reta:

$$\begin{cases}
x = x_0 + at \\
y = y_0 + bt \\
z = z_0 + ct
\end{cases}$$

**Exercício 1.19** Note que, ao contrário do que acontece no plano (em que as equações paramétricas são apenas duas), não podemos, eliminando t no sistema, deduzir uma única equação cartesiana para a reta.

Para a representação paramétrica dos planos, trabalhamos com um ponto de base $P$ e dois vetores $\vec{u}$ e $\vec{v}$; para que tenhamos, de fato, um plano, é preciso que $\vec{u}$ e $\vec{v}$ não sejam um múltiplo do outro. As combinações lineares de $\vec{u}$ e $\vec{v}$ nos fornecem um plano passando pela origem. Deslocá-lo para passar por $P$ é como colocar a origem em $P$ e tomar os pontos da forma

$$Q = P + s\vec{u} + t\vec{v}, \quad s, \quad t \in \mathbb{R}$$

### 1.5 O mistério da Santíssima Trindade

Pelo que acabamos de ver, a fixação de uma base para os vetores no espaço estabelece uma poderosa bijeção entre $V$ e $R^3$. Ao mesmo tempo, a fixação de uma origem, $O$, estabelece uma bijeção entre o espaço $puro$ ($E$) e o conjunto dos vetores ($V$), dada por $P \mapsto \overrightarrow{OP}$. Assim, a fixação simultânea de uma base para $V$ e de uma origem em $E$ (que chamamos de um sistema de coordenadas) nos fornece duas bijeções, que, compostas, produzem uma bijeção entre pontos e ternos ordenados. Desta forma, fixado um sistema de coordenadas, passamos a identificar três conjuntos distintos, $E$, $V$ e $R^3$, enxergando ponto, vetor e terno ordenado como se fossem um único entidade, uma espécie de Santíssima Trindade.

Como trabalharemos sempre com coordenadas, é importante ter claro que, ao terno $(0,0,0)$ correspondem, simultaneamente, a origem $O$ e o vetor nulo, assim como ao terno $(x_1, x_2, x_3)$ correspondem, ao mesmo tempo, um ponto $P$ e o vetor $\overrightarrow{OP}$.

$$^3\text{Poderosa} \text{ no seguinte sentido: a bijeção preserva as operações (se $\vec{u}$ e $\vec{v}$ são associados aos ternos $(x_1, x_2, x_3)$ e $(y_1, y_2, y_3)$ e t é um escalar, então $\vec{u} + \vec{v}$ é associado a $(x_1, x_2, x_3) + (y_1, y_2, y_3)$ e $t\vec{u}$ é associado a $t(x_1, x_2, x_3)$. O termo erudito para uma bijeção preservando as operações é isomorfismo}$$