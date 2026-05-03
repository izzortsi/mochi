1.3: Vetores e combinações lineares

**Observação**: Fixemos uma base canônica para $V$, que chamaremos de $\beta$, constituída pelos vetores $\vec{e}_1, \vec{e}_2$ e $\vec{e}_3$. Pelo que acabamos de ver, fixar $\beta$ estabelece uma bijeção entre $V$ e $\mathbb{R}^3$, dada por

$$\mathbb{R}^3 : \rightarrow V$$
$$(x_1, x_2, x_3) \rightarrow x_1\vec{e}_1 + x_2\vec{e}_2 + x_3\vec{e}_3$$

Essa bijeção é extremamente poderosa, pois preserva as operações: se ao vetor $\vec{u}$ correspondem as coordenadas $(x_1, x_2, x_3)$ e ao vetor $\vec{v}$ correspondem as coordenadas $(y_1, y_2, y_3)$, e se $t$ é um número real, então ao vetor $\vec{u} + t\vec{v}$ correspondem as coordenadas $(x_1, x_2, x_3) + t(y_1, y_2, y_3) = (x_1 + ty_1, x_2 + ty_2, x_3 + ty_3)$. Dito de outra forma, a bijeção que a cada vetor associa suas coordenadas na base canônica (vistas como um terno ordenado) preserva as operações de adição e de multiplicação por escalar.

**Exercício 1.16** Observe que, como a fixação de uma origem, $O$, determina uma bijeção entre $E$ e $V$, e a fixação de uma base, $\beta$, determina uma bijeção entre $V$ e $\mathbb{R}^3$, segue que a fixação, simultânea, de uma origem, $O$, e de uma base, $\beta$, determina uma bijeção entre $E$ e $\mathbb{R}^3$.

**Exercício 1.17** Note que a bijeção, de $\mathbb{R}^3$ para $E$, funciona assim: dado o terno $(x_1, x_2, x_3)$, tomamos o vetor $\vec{v} = x_1\vec{e}_1 + x_2\vec{e}_2 + x_3\vec{e}_3$; em seguida, tomamos o ponto $P$ tal que $\overrightarrow{OP} = \vec{v}$.

**Definição**: Um sistema de coordenadas canônico para o espaço $E$ consiste em uma origem $O$ e uma base canônica $\beta$ (de maneira um pouco pedante, um sistema de coordenadas canônico é um par ordenado $(O, \beta)$, sendo $O$ um ponto de $E$ e $\beta$ uma base canônica para $V$).

1.3 Vetores e combinações lineares

Note que, dado um vetor não nulo $\vec{v}$ do espaço, os **múltiplos** de $\vec{v}$ (vetores $\vec{u}$ da forma $\vec{u} = t\vec{v}$ para algum escalar $t$), se marcados a partir de um mesmo ponto de origem $O$, estarão todos sobre uma mesma reta.

**Figura 1.2:**