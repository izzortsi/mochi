e chamado de **determinante** da matriz

$$\begin{pmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{pmatrix}.$$

O determinante é, assim, uma **forma trilinear alternada** dos vetores coluna da matriz. Mais precisamente, se representarmos por $(a_{ij})$ a matriz, por $|a_{ij}|$ seu determinante e por $(a_j)$ cada um dos vetores dados, em coordenadas, por $(a_j) = (a_{1j}, a_{2j}, a_{3j})$, então $|a_{ij}|$ é uma forma trilinear alternada do terno de vetores $(\langle a_1 \rangle, \langle a_2 \rangle, \langle a_3 \rangle)$.

**Exercício 10.11** Demonstre essa última afirmação. Isto é: mostre, a partir da fórmula, que o determinante é uma forma trilinear alternada dos vetores coluna da matriz. Mostre que o determinante da **matriz identidade** (aquela que tem $a_{ij} = 1$, se $i = j$, $e a_{ij} = 0$, se $i \neq j$) é 1.

**Exercício 10.12** Mostre, também a partir da fórmula, que o determinante é uma forma trilinear alternada dos vetores linha da matriz (os vetores linha são os $(\bar{a}_i)$ dados, em coordenadas, por $(\bar{a}_i) = (a_{i1}, a_{i2}, a_{i3})$).

**Exercício 10.13** Conclua que é nulo o determinante de qualquer matriz em que uma das colunas é combinação linear das outras duas; o mesmo para matrizes em que uma das linhas é combinação linear das outras duas.

**Exercício 10.14** Observe que uma forma simples de decorar a fórmula é escrever

$$\begin{pmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33} \\
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23}
\end{pmatrix}$$

e observar que os produtos com sinal + são obtidos, seguindo setas $\searrow$, partindo de $a_{11}$, $a_{21}$ e $a_{31}$; os com sinal - são obtidos, seguindo setas $\swarrow$, partindo de $a_{13}$, $a_{23}$ e $a_{33}$.

**Exercício 10.15** Usando a fórmula do determinante para matrizes $2 \times 2$, observe que

$$\begin{pmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{pmatrix} = a_{11} \begin{pmatrix}
a_{22} & a_{23} \\
a_{32} & a_{33}
\end{pmatrix} - a_{12} \begin{pmatrix}
a_{21} & a_{23} \\
a_{31} & a_{33}
\end{pmatrix} + a_{13} \begin{pmatrix}
a_{21} & a_{22} \\
a_{31} & a_{32}
\end{pmatrix}.$$

**Exercício 10.16** De maneira mais geral, mostre que o determinante $|a_{ij}|$ é dado, para qualquer linha $i$, por

$$|a_{ij}| = \sum_{j=1}^{3} (-1)^{i+j} |a_{ij}|,$$

com $|a_{ij}|$ definido como o determinante da matriz $2 \times 2$ obtida de $(a_{ij})$ pela exclusão da linha $i$ e da coluna $j$. Chamaremos de **cofator** de $a_{ij}$ o número $(-1)^{i+j} |a_{ij}|$. Essa terminologia não é unânime: como o determinante $|a_{ij}|$ já tem nome (é chamado de **determinante menor** de aij), usa-se também chamar de **cofator** de $a_{ij}$ o número $(-1)^{i+j}$.