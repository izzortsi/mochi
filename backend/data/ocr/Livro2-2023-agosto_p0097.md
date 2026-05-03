Definição: Dados os vetores $\vec{u} = x_1\vec{e}_1 + y_1\vec{e}_2 + z_1\vec{e}_3$ e $\vec{v} = x_2\vec{e}_1 + y_2\vec{e}_2 + z_2\vec{e}_3$, seu produto vetorial, designado por $\vec{u} \otimes \vec{v}$ ou por $\vec{u} \times \vec{v}$, é definido por

$$\vec{u} \otimes \vec{v} = (y_1z_2 - z_1y_2)\vec{e}_1 + (z_1x_2 - x_1z_2)\vec{e}_2 + (x_1y_2 - y_1x_2)\vec{e}_3.$$

Observação: por conta da evidente identificação entre os quatérnions $i, j$ e $k$ e os vetores $\vec{e}_1, \vec{e}_2$ e $\vec{e}_3$, ainda hoje é usual designar os vetores da base canônica de $V$ por $i, j$ e $k$. Também o faremos, ocasionalmente. Neste sentido, é particularmente útil a apresentação do produto vetorial de $\vec{u} = x_1i + y_1j + z_1k$ e $\vec{v} = x_2i + y_2j + z_2k$ como um determinante:

$$\begin{vmatrix}
i & j & k \\
x_1 & y_1 & z_1 \\
x_2 & y_2 & z_2
\end{vmatrix}$$

Exercício 11.2 Verifique que o determinante acima é, de fato, igual ao produto vetorial (observe que a fórmula do determinante pode, de fato, ser aplicada não apenas a matrizes cujas entradas sejam números reais, mas também àquelas em que as entradas sejam complexos, quatérnions, ou mesmo outras coisas que se multipliquem, se somem e se subtraiam).

Exercício 11.3 Prove que o produto vetorial tem as seguintes propriedades:

(i) $\vec{u} \otimes (t\vec{v}_1 + \vec{v}_2) = t(\vec{u} \otimes \vec{v}_1) + (\vec{u} \otimes \vec{v}_2) \forall t, \vec{u}, \vec{v}_1, \vec{v}_2$
(ii) $\vec{u} \otimes \vec{v} = -\vec{v} \otimes \vec{u} \forall \vec{u}, \vec{v}$

Exercício 11.4 Conclua, do exercício acima, que $\vec{u} \otimes \vec{u} = \vec{0} \forall \vec{u}$ e que

$$(t\vec{u}_1 + \vec{u}_2) \otimes \vec{v} = t(\vec{u}_1 \otimes \vec{v}) + (\vec{u}_2 \otimes \vec{v}) \forall t, \vec{u}_1, \vec{u}_2, \vec{v}.$$

Exercício 11.5 Mostre que $\vec{u} \otimes \vec{v} = \vec{0}$ se, e somente se, $\vec{u}$ e $\vec{v}$ são linearmente dependentes.

Exercício 11.6 Mostre, com um exemplo, que o produto vetorial não é associativo.

Exercício 11.7 Calcule, dados $\vec{u}, \vec{v}$ e $\vec{w}$,

$$(\vec{u} \otimes \vec{v}) \otimes \vec{w} + (\vec{v} \otimes \vec{w}) \otimes \vec{u} + (\vec{w} \otimes \vec{u}) \otimes \vec{v}.$$

11.3 Interpretação geométrica do produto vetorial

A primeira propriedade geométrica do produto vetorial a ser destacada é: $\vec{u} \otimes \vec{v}$ é perpendicular a $\vec{u}$ e a $\vec{v}$, ou seja,

$$< \vec{u}, \vec{u} \otimes \vec{v} > = 0 = < \vec{v}, \vec{u} \otimes \vec{v} >.$$