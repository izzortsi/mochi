$$d(\vec{u}, \vec{v}) = d(x_1 \vec{e}_1 + y_1 \vec{e}_2, x_2 \vec{e}_1 + y_2 \vec{e}_2) =$$
$$= x_1 x_2 d(\vec{e}_1, \vec{e}_1) + x_1 y_2 d(\vec{e}_1, \vec{e}_2) + y_1 x_2 d(\vec{e}_2, \vec{e}_1) + y_1 y_2 d(\vec{e}_2, \vec{e}_2).$$

Agora basta substituir

$$d(\vec{e}_1, \vec{e}_1) = 0, d(\vec{e}_2, \vec{e}_2) = 0, d(\vec{e}_1, \vec{e}_2) = 1, d(\vec{e}_2, \vec{e}_1) = -d(\vec{e}_1, \vec{e}_2) = -1$$

para obter

$$d(\vec{u}, \vec{v}) = x_1 y_2 - x_2 y_1,$$

ou, usando a notação consagrada,

$$d(\vec{u}, \vec{v}) = \begin{vmatrix} x_1 & x_2 \\ y_1 & y_2 \end{vmatrix}^1.$$

Assim, a área (com sinal) do paralelogramo formado por $\vec{u} = (x_1, y_1)$ e $\vec{v} = (x_2, y_2)$ é dada por $x_1 y_2 - x_2 y_1$. Se fizemos questão da área “mesmo”, basta tomarmos o valor absoluto.

10.4 Volumes com sinal

A exemplo do que fizemos no plano, vamos procurar associar, a cada trio de vetores, $\vec{u}, \vec{v}$ e $\vec{w}$, um número que corresponda ao volume do paralelepípedo $p$ definido a partir de $\vec{u}, \vec{v}$ e $\vec{w}$.

Exercício 10.8 Entenda que o palalelepípedo de que falamos é o subconjunto $p$ de V definido por $p = \{r \vec{u} + s \vec{v} + t \vec{w}, (r, s, t) \in [0, 1] \times [0, 1] \times [0, 1]\}$.

Como no caso do plano, é razoável supor que aceitemos volumes negativos, dependendo da ordem em que tomamos os vetores $\vec{u}, \vec{v}$ e $\vec{w}$.² Assim, vamos, na verdade, buscar uma função $det$ que, a cada terno ordenado $(\vec{u}, \vec{v}, \vec{w})$ associe um número, $det(\vec{u}, \vec{v}, \vec{w})$, que chamaremos de determinante de $(\vec{u}, \vec{v}, \vec{w})$, com as propriedades:

(i) $det(\vec{u}, \vec{v}, \vec{w}) = 0$, se $\vec{u}, \vec{v}$ e $\vec{w}$ são linearmente dependentes
(ii) $det(\vec{u}_1 + t \vec{u}_2, \vec{v}, \vec{w}) = det(\vec{u}_1, \vec{v}, \vec{w}) + t det(\vec{u}_2, \vec{v}, \vec{w}) \forall t, \vec{u}_1, \vec{u}_2, \vec{v}, \vec{w}$
    $det(\vec{u}, \vec{v}_1 + t \vec{v}_2, \vec{w}) = det(\vec{u}, \vec{v}_1, \vec{w}) + t det(\vec{u}, \vec{v}_2, \vec{w}) \forall t, \vec{u}, \vec{v}_1, \vec{v}_2, \vec{w}$
    $det(\vec{u}, \vec{v}, \vec{w}_1 + t \vec{w}_2) = det(\vec{u}, \vec{v}, \vec{w}_1) + t (\vec{u}, \vec{v}, \vec{w}_2) \forall t, \vec{u}, \vec{v}, \vec{w}_1, \vec{w}_2$
(iii) $det(\vec{e}_1, \vec{e}_2, \vec{e}_3) = 1$

$$1 \begin{vmatrix} x_1 & x_2 \\ y_1 & y_2 \end{vmatrix} = x_1 y_2 - x_2 y_1$$

²razoável, aqui, significa que vale a pena, como no caso do plano, abrir mão da exigência de que volumes sejam, sempre, positivos, em troca de boas propriedades algébricas; desta forma, o verdadeiro volume será dado pelo valor absoluto do número que vamos definir.