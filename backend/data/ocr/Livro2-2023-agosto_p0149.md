Capítulo 18

O determinante, de novo

18.1 Determinante de transformação linear em $R^3$

Talvez você tenha pulado a seção "O trepa-trepa catalão"...Volte a ela (página 100) e ataque o exercício que está no final.

Uma das propriedades das transformações lineares é tratar de maneira uniforme o espaço: a imagem de um cubinho de centro na origem é congruente à do mesmo cubinho transladado para outro ponto qualquer do espaço. Mais precisamente: sejam $V$ espaço vetorial real de dimensão três e $T : V \rightarrow V$ linear. Seja $X$ um subconjunto qualquer de $V$. Suponhamos que translademos todos os pontos de $X$, usando um vetor $\vec{v}_0$, obtendo o conjunto $X_0$:

$$X_0 = \{x + \vec{v}_0, x \in X\}.$$

Como a translação preserva distâncias e ângulos, $X_0$ é congruente a $X$. Mas o mesmo acontece com $T(X)$ e $T(X_0)$:

$$T(X_0) = \{Tx_0, x_0 \in X_0\} = \{T(x + \vec{v}_0), x \in X\} =$$

$$= \{Tx + T\vec{v}_0, x \in X\} = \{y + T\vec{v}_0, y \in T(X)\}.$$

Da mesma forma, se $X_1$ é a imagem de $X$ por uma homotetia de razão $r$,

$$X_1 = \{rx, x \in X\},$$

então $T(X_1)$ é a imagem de $T(X)$ pela mesma homotetia:

$$T(X_1) = \{Tx_1, x_1 \in X_1\} = \{T(rx), x \in X\} =$$

$$= \{r(Tx), x \in X\} = \{ry, y \in T(X)\}.$$

Exercício 18.1 Mostre, com um exemplo, que o mesmo não acontece com figuras rodadas: se rodarmos um cubo $Q$, obtendo o cubo $Q_0$, então $Q$ e $Q_0$ são congruentes, mas um cisalhamento $T$ pode nos dar $T(Q)$ e $T(Q_0)$ não congruentes.