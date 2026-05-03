Exercício 17.3 Mostre que, também no caso em que dimN(T) = 3, temos

$$dim N(T) + dim Im(T) = dim V.$$

Note que é razoável imaginar que a fórmula acima seja geral: para jogar $V$, que é tridimensional, em um plano, que é bidimensional (ou seja, dim Im(T) = 2), devemos perder uma dimensão, possivelmente jogando retas do domínio em pontos da imagem, o que significa que o núcleo deve ser unidimensional; se, por outro lado, a imagem de $T$ for unidimensional, então devemos perder duas dimensões, jogando planos em pontos da imagem, e o núcleo deve ser bidimensional.

Teorema do Núcleo e da Imagem:¹ Se $T : V \rightarrow V$ é uma transformação linear, então

$$dim N(T) + dim Im(T) = dim V.$$

Demonstração: Os casos em que dimN(T) = 0 ou dimN(T) = 3 são simples, já fizesmos.

Suponhamos, pois, caso 1, que dimN(T) = 1. Podemos, então, tomar um vetor não nulo, $\vec{u}$, em $N(T)$. O Lema Fundamental nos garante que podemos tomar dois vetores, $\vec{v}_1$ e $\vec{v}_2$, tais que $(\vec{u}, \vec{v}_1, \vec{v}_2)$ seja base de $V$ (podemos, inclusive, exigir que $\vec{v}_1$ e $\vec{v}_2$ sejam uma base do complemento ortogonal de $N(T)$). Afirmamos que $T\vec{v}_1$ e $T\vec{v}_2$ são linearmente independentes e geram Im(T) (isto é Im(T) é o conjunto das combinações lineares de $T\vec{v}_1$ e $T\vec{v}_2$). De fato, como $T\vec{u}$, $T\vec{v}_1$ e $T\vec{v}_2$ geram Im(T) e $T\vec{u} = \vec{0}$, temos que $T\vec{v}_1$ e $T\vec{v}_2$ geram Im(T). Resta provar que $T\vec{v}_1$ e $T\vec{v}_2$ são linearmente independentes. Se não fossem, um deles, digamos $T\vec{v}_2$, seria múltiplo do outro. Mas, então, supondo $T\vec{v}_2 = tT\vec{v}_1$, teríamos $T(\vec{v}_2 - t\vec{v}_1) = \vec{0}$, o que daria $\vec{v}_2 - t\vec{v}_1 \in N(T)$. Logo, para algum escalar $s$, teríamos $\vec{v}_2 - t\vec{v}_1 = s\vec{u}$, e $\vec{u}$, $\vec{v}_1$ e $\vec{v}_2$ não seriam linearmente independentes. Portanto, dim Im(T) = 2.

Suponhamos agora, caso 2, que dimN(T) = 2. Podemos, então tomar dois vetores linearmente independentes, $\vec{u}_1$ e $\vec{u}_2$, tais que $N(T)$ seja o plano gerado por $\vec{u}_1$ e $\vec{u}_2$. De novo, usando o Lema Fundamental, podemos completar $\vec{u}_1$ e $\vec{u}_2$ por um vetor $\vec{v}$, que podemos supor um gerador de $N(T)^\perp$, de forma que $\vec{u}_1$ e $\vec{u}_2$ e $\vec{v}$ formem base de $V$. Como no caso anterior, temos que $T\vec{v}$ gera Im(T). Além disso, $T\vec{v}$ não pode ser nulo, ou $\vec{v}$ estaria em $N(T)$ e seria combinação linear de $\vec{u}_1$ e $\vec{u}_2$. Logo, dimIm(T) = 1.

Escólio: Nossa demonstração contém mais do que o prometido no enunciado. Provamos que a imagem de $T$ tem a mesma dimensão que o complemento ortogonal do núcleo e que $T$ leva os elementos de $N(T)^\perp$ bijetivamente nos de Im(T). Suponha que a matriz de $T$ na base canônica seja

$$\begin{pmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{pmatrix}.$$

Já observamos que Im(T) é o subespaço de $V$ gerado pelos vetores coluna da matriz. Mas temos também que o núcleo de $T$ é o conjunto dos vetores ortogonais aos vetores

¹O que aqui estamos enunciando é uma versão simplificada de um teorema mais geral, que veremos logo à frente. Achamos melhor manter o nome, do Núcleo e da Imagem, e o título de nobreza, Teorema