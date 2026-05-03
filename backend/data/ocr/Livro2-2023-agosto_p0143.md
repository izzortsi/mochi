Capítulo 17

O Teorema do Núcleo e da Imagem

17.1 O Teorema do Núcleo e da Imagem em $\mathbb{R}^3$

Nesta seção, $\mathbf{V}$ representa o espaço dos vetores flechinha, que pode ser identificado a $R^3$. Se $T : V \rightarrow V$ é um isomorfismo, o trepatrepa catalão nos dá uma boa noção de como funciona $T$. Mas, se o trepatrepa degenera, as coisas ficam menos claras.

Definição: Se $T : V \rightarrow V$ é uma transformação linear, a imagem de $T$ é o subespaço vetorial de $V$ definido por $Im(T) = \{T\vec{v}, \vec{v} \in V\}$.

Exercício 17.1 Mostre que a imagem de uma transformação linear é, de fato, um subespaço do contradomínio.

Observação: Se $(\vec{\epsilon}_1, \vec{\epsilon}_2, \vec{\epsilon}_3)$ é uma base qualquer de $V$, a imagem de $T$ é o conjunto das combinações lineares de $T\vec{\epsilon}_1, T\vec{\epsilon}_2$ e $T\vec{\epsilon}_3$. Note que temos, então quatro possibilidades:

- $T\vec{\epsilon}_1, T\vec{\epsilon}_2$ e $T\vec{\epsilon}_3$ são linearmente independentes. Neste caso, $T$ é um isomorfismo e $Im(T) = V$. Neste caso, $Im(T)$ é de **dimensão** 3 ($dimIm(T) = 3$).

- Dentre $T\vec{\epsilon}_1, T\vec{\epsilon}_2$ e $T\vec{\epsilon}_3$ há dois, mas não três, que são linearmente independentes. Neste caso, $Im(T)$ é o conjunto das combinações lineares de dois vetores e é, portanto, um plano passando pela origem. Neste caso, $Im(T)$ é de **dimensão** 2 ($dimIm(T) = 2$).

- Os três, $T\vec{\epsilon}_1, T\vec{\epsilon}_2$ e $T\vec{\epsilon}_3$, estão alinhados (e pelo menos um é não nulo). Então $Im(T)$ é o conjunto dos múltiplos de um vetor; é, portanto, uma reta passando pela origem. Neste caso, $Im(T)$ é de **dimensão** 1 ($dimIm(T) = 1$).

- Caso totalmente degenerado: $Im(T) = \{0\}$. Neste caso, $Im(T)$ é de **dimensão** 0 ($dimIm(T) = 0$).

Consideremos os casos em que a dimensão de $Im(T)$ é menor do que 3. Para mandarmos o $V$, que é de dimensão 3, em algo de dimensão menor, alguma compressão deve ter sido feita. Um primeiro passo é olharmos para a imagem inversa de um ponto de $Im(T), \vec{w} = T\vec{v}_0$. Como sabemos, se $T$ não é sobrejetiva, não pode ser injetiva. Uma observação simples é: se $T\vec{u} = \vec{0}$, então $T(\vec{v}_0 + \vec{u}) = T\vec{v}_0 + T\vec{u} = T\vec{v}_0 = \vec{w}$.