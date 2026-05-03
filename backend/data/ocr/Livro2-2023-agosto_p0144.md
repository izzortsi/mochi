Proposição: Se $T : V \rightarrow V$ é uma transformação linear, seja $N(T) = T^{-1}(\vec{0})$, isto é:

$$N(T) = \left\{ \vec{u} \in V \mid T\vec{u} = \vec{0} \right\}.$$

Se $\vec{v}_0$ é um vetor qualquer tal que $T\vec{v}_0 = \vec{w}$, então a imagem inversa de $\vec{w}$, $T^{-1}(\vec{w}) = \left\{ \vec{v} \in V \mid T\vec{v} = \vec{w} \right\}$, é dada por

$$T^{-1}(\vec{w}) = \vec{v}_0 + N(T) = \left\{ \vec{v}_0 + \vec{u}, \vec{u} \in N(T) \right\}.$$

Demonstração: Se $T\vec{v}_0 = \vec{w}$ e $\vec{v}$ está em $\vec{v}_0 + N(T)$, temos $\vec{v} = \vec{v}_0 + \vec{u}$, para algum $\vec{u}$ em $N(T)$. Mas, então, temos $T\vec{v} = T(\vec{v}_0 + \vec{u}) = T\vec{v}_0 + T\vec{u} = T\vec{v}_0 = \vec{w}$, o que mostra que $\vec{v}$ está em $T^{-1}(\vec{w})$ e prova que $\vec{v}_0 + N(T) \subset T^{-1}(\vec{w})$. Reciprocamente, se $\vec{v}$ está em $T^{-1}(\vec{w})$, temos $T\vec{v} = \vec{w}$. Fazendo $\vec{u} = \vec{v} - \vec{v}_0$, temos $T\vec{u} = T\vec{v} - T\vec{v}_0 = \vec{w} - \vec{w} = \vec{0}$, o que nos dá $\vec{v} = \vec{v}_0 + \vec{u}$, com $\vec{u} \in N(T)$; ou seja, $\vec{v} \in \vec{v}_0 + N(T)$. Isso mostra que $T^{-1}(\vec{w}) \subset \vec{v}_0 + N(T)$, e conclui a prova.

Figura 17.1:

Definição: O conjunto

$$N(T) = \left\{ \vec{u} \in V \mid T\vec{u} = \vec{0} \right\}$$

é chamado de núcleo da transformação linear $T$.

Pelo que acabamos de ver, o espaço $V$, visto como o domínio da transformação $T$, é decomposto em subespaços afins paralelos ao núcleo, cada um dos quais é levado em um ponto da imagem. Excluindo os casos em que a transformação é sobrejetiva ou totalmente degenerada, teremos, como veremos a seguir, seja um feixe de retas paralelas, seja um fatiamento em planos paralelos.