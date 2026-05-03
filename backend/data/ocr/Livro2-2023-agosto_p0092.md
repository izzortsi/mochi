10.6 Orientação

Tratemos, agora, de uma questão que vem sendo adiada desde o começo do capítulo (aproveitando a oportunidade para agradecer a boa vontade do leitor que, pacientemente, aguarda as devidas explicações): o que significa, geometricamente, termos um determinante negativo? Ou, de um outro ponto de vista, o que distingue os ternos ordenados com determinante negativo daqueles para os quais o determinante é positivo.

Como já sabemos, $det(\vec{u}, \vec{v}, \vec{w}) \neq 0$ se e somente se $\vec{u}, \vec{v}$ e $\vec{w}$ são linearmente independentes (e, portanto, constituem base para $V$). Vamos estabelecer o conceito de orientação.

Definição: Duas bases ordenadas $(\vec{u}_1, \vec{u}_2, \vec{u}_3)$ e $(\vec{v}_1, \vec{v}_2, \vec{v}_3)$ têm a mesma orientação se existem três funções contínuas $\vec{\epsilon}_1, \vec{\epsilon}_2, \vec{\epsilon}_3 : [a, b] \rightarrow V$ (com $a$ e $b$ reais, $a < b$) tais que:

$(i) \quad \vec{\epsilon}_i(a) = \vec{u}_i, i = 1, 2, 3$
$(ii) \quad \vec{\epsilon}_i(b) = \vec{u}_i, i = 1, 2, 3$
$(iii) \quad \vec{\epsilon}_1(t), \vec{\epsilon}_2(t), \vec{\epsilon}_3(t)$ são linearmente independentes $\forall t \in [a, b]$

Chamaremos de deformação entre as bases $(\vec{u}_1, \vec{u}_2, \vec{u}_3)$ e $(\vec{v}_1, \vec{v}_2, \vec{v}_3)$ um terno de funções contínuas $\vec{\epsilon}_1, \vec{\epsilon}_2, \vec{\epsilon}_3 : [a, b] \rightarrow V$ com as três propriedades acima.

Observação: Entenda que duas bases ordenadas têm a mesma orientação se e somente se podemos deformar uma na outra de maneira que, durante a deformação, os três vetores permaneçam linearmente independentes o tempo todo. De maneira ainda mais visual, as bases $(\vec{u}_1, \vec{u}_2, \vec{u}_3)$ e $(\vec{v}_1, \vec{v}_2, \vec{v}_3)$ têm a mesma orientação se o paralelepípedo formado por $(\vec{u}_1, \vec{u}_2, \vec{u}_3)$ pode ser deformado no formado por $(\vec{v}_1, \vec{v}_2, \vec{v}_3)$ sem, em qualquer momento, degenerar (entendido que a deformação deve levar cada $\vec{u}_i$ no respectivo $\vec{v}_i$).

Observação: Note que ter a mesma orientação é uma relação de equivalência: uma base, ficando parada, se deforma em si mesma; se uma base $(\vec{u}_1, \vec{u}_2, \vec{u}_3)$ se deforma na base $(\vec{v}_1, \vec{v}_2, \vec{v}_3)$ por meio de $\vec{\epsilon}_1, \vec{\epsilon}_2, \vec{\epsilon}_3 : [a, b] \rightarrow V$, podemos usar $\vec{\delta}_1, \vec{\delta}_2, \vec{\delta}_3 : [-b, -a] \rightarrow V$, dadas por $\vec{\delta}_i(t) = \vec{\epsilon}_i(-t)$, para deformar $(\vec{v}_1, \vec{v}_2, \vec{v}_3)$ em $(\vec{u}_1, \vec{u}_2, \vec{u}_3)$; finalmente, se a base $(\vec{u}_1, \vec{u}_2, \vec{u}_3)$ se deforma na base $(\vec{v}_1, \vec{v}_2, \vec{v}_3)$ e a base $(\vec{v}_1, \vec{v}_2, \vec{v}_3)$ se deforma na base $(\vec{w}_1, \vec{w}_2, \vec{w}_3)$, então podemos deformar $(\vec{u}_1, \vec{u}_2, \vec{u}_3)$ em $(\vec{w}_1, \vec{w}_2, \vec{w}_3)$ passando por $(\vec{v}_1, \vec{v}_2, \vec{v}_3)$.

Exercício 10.21 Explique como podemos deformar $(\vec{u}_1, \vec{u}_2, \vec{u}_3)$ em $(\vec{w}_1, \vec{w}_2, \vec{w}_3)$ passando por $(\vec{v}_1, \vec{v}_2, \vec{v}_3)$. Isto é, construa, a partir das funções que deformam $(\vec{u}_1, \vec{u}_2, \vec{u}_3)$ em $(\vec{v}_1, \vec{v}_2, \vec{v}_3)$ e das que deformam $(\vec{v}_1, \vec{v}_2, \vec{v}_3)$ em $(\vec{w}_1, \vec{w}_2, \vec{w}_3)$, novas funções, que deformem $(\vec{u}_1, \vec{u}_2, \vec{u}_3)$ em $(\vec{w}_1, \vec{w}_2, \vec{w}_3)$.

Exercício 10.22 Suponha que as bases ordenadas $(\vec{u}_1, \vec{u}_2, \vec{u}_3)$ e $(\vec{v}_1, \vec{v}_2, \vec{v}_3)$ têm a mesma orientação. Mostre que as bases ordenadas $(\vec{u}_1, \vec{u}_2, -\vec{u}_3)$ e $(\vec{v}_1, \vec{v}_2, -\vec{v}_3)$ têm a mesma orientação.

Proposição: Se duas bases ordenadas $(\vec{u}_1, \vec{u}_2, \vec{u}_3)$ e $(\vec{v}_1, \vec{v}_2, \vec{v}_3)$ têm a mesma orientação, então $det(\vec{u}_1, \vec{u}_2, \vec{u}_3)$ têm o mesmo sinal.