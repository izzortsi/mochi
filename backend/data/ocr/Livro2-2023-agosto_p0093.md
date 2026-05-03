Demonstração: Pensemos $(\vec{u}_1, \vec{u}_2, \vec{u}_3)$ e $(\vec{v}_1, \vec{v}_2, \vec{v}_3)$ dados em coordenadas, assim como as funções contínuas $\vec{e}_1, \vec{e}_2, \vec{e}_3 : [a, b] \rightarrow V$ tais que:

$$(i) \quad \vec{e}_i(0) = \vec{u}_i, \ i = 1, 2, 3$$
$$(ii) \quad \vec{e}_i(1) = \vec{v}_i, \ i = 1, 2, 3$$
$$(iii) \quad \vec{e}_1(t), \vec{e}_2(t), \vec{e}_3(t)$ são linearmente independentes $\forall t \in [a, b]$.

Temos que a continuidade das $\vec{e}_i$ se traduz na continuidade das $a_{ij}(t)$, que são as entradas da matriz dada pelas coordenadas dos $\vec{e}_i(t)$:

$$\begin{pmatrix}
a_{11}(t) & a_{12}(t) & a_{13}(t) \\
a_{21}(t) & a_{22}(t) & a_{23}(t) \\
a_{31}(t) & a_{32}(t) & a_{33}(t)
\end{pmatrix}$$

Mas, então, a função $f : [a, b] \rightarrow \mathbb{R}$, dada por

$$f(t) = \det(\vec{e}_1(t), \vec{e}_2(t), \vec{e}_3(t)) = a_{11}(t)a_{22}(t)a_{33}(t) - a_{11}(t)a_{23}(t)a_{32}(t) + a_{12}(t)a_{21}(t)a_{33}(t) + a_{13}(t)a_{21}(t)a_{32}(t) - a_{13}(t)a_{22}(t)a_{31}(t),$$

é continua e não se anula (se se anulasse em um certo $t$, $\vec{e}_1(t), \vec{e}_2(t), \vec{e}_3(t)$ deixariam de ser linearmente independentes). Logo, $f(a) = \det(\vec{u}_1, \vec{u}_2, \vec{u}_3)$ e $f(b) = \det(\vec{u}_1, \vec{u}_2, \vec{u}_3)$ não podem ter sinais diferentes.

**Questão:** Será verdadeira a recíproca? Isto é, supondo que $\det(\vec{u}_1, \vec{u}_2, \vec{u}_3)$ e $\det(\vec{v}_1, \vec{v}_2, \vec{v}_3)$ tenham o mesmo sinal, então será que as bases ordenadas $(\vec{u}_1, \vec{u}_2, \vec{u}_3)$ e $(\vec{v}_1, \vec{v}_2, \vec{v}_3)$ têm necessariamente a mesma orientação? Neste caso, como construir a deformação entre $(\vec{u}_1, \vec{u}_2, \vec{u}_3)$ e $(\vec{v}_1, \vec{v}_2, \vec{v}_3)$?

A resposta é sim. Vamos esbozar a construção de uma deformação entre duas bases ordenadas com determinante de mesmo sinal. Vamos proceder em duas etapas: primeiro, mostramos que toda base ortonormal com determinante positivo tem a mesma orientação que a base canônica (e, consequentemente, toda base ortonormal com determinante negativo tem a mesma orientação que a base $(\vec{e}_1, \vec{e}_2, -\vec{e}_3)$); em seguida, mostramos que toda base tem a mesma orientação que uma base ortonormal (esta, construída pelo processo de Gram-Schmidt).

**Teorema:** Duas bases ordenadas $(\vec{u}_1, \vec{u}_2, \vec{u}_3)$ e $(\vec{v}_1, \vec{v}_2, \vec{v}_3)$ têm a mesma orientação se, e somente se, $\det(\vec{u}_1, \vec{u}_2, \vec{u}_3)$ e $\det(\vec{v}_1, \vec{v}_2, \vec{v}_3)$ têm o mesmo sinal.

Demonstração: Já provamos, na proposição acima, que bases que têm a mesma orientação têm determinantes com o mesmo sinal. Para cuidar da outra parte, procederemos, conforme anunciado, em duas etapas. Vamos, na verdade, abusar um pouco da intuição, para não fazer boa parte do trabalho sujo...

Etapa 1: Suponhamos que $(\vec{e}_1, \vec{e}_2, \vec{e}_3)$ seja uma base ortonormal de $V$, com determinante positivo. Vamos mostrar como deformá-la na base canônica. Vamos fazer duas rotações do espaço, dando como intuitivo que, quando rodamos o espaço todo em torno de um eixo, bases ortonormais continuam, durante todo o tempo da rotação, bases ortonormais (já que rotações preservam a ortogonalidade e as distâncias). A primeira rotação, supondo que $\vec{e}_1 \neq \vec{e}_1$, destina-se a levar $\vec{e}_1$ até $\vec{e}_1$. Tomamos, como eixo de rotação, a reta que passa pela origem e é