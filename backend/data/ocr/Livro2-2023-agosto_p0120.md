Seja $C : V \rightarrow V$, $C = AB$, isto é: $C é dada por $C\vec{v} = A(B\vec{v})$. Mostre que a matriz de $C é o produto das matrizes de $A e B$, isto é: a matriz de $C$, $(c_{ij})$, é dada pelo produto de $(a_{ij}) e (b_{ij})$,

$$\begin{pmatrix}
c_{11} & c_{12} & c_{13} \\
c_{21} & c_{22} & c_{23} \\
c_{31} & c_{32} & a_{33}
\end{pmatrix} = \begin{pmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{pmatrix} \begin{pmatrix}
b_{11} & b_{12} & b_{13} \\
b_{21} & b_{22} & b_{23} \\
b_{31} & b_{32} & b_{33}
\end{pmatrix},$$

$com c_{ij} = a_{i1}b_{1j} + a_{i2}b_{2j} + a_{i3}b_{3j}$.

**Definição:** A $i$-ésima linha da matriz $(a_{ij}) é o terno ordenado $(a_{i1}, a_{i2}, a_{i3})$ (por analogia, o vetor representado, na base canônica por uma linha de $(a_{ij}) é chamado de vetor linha de $(a_{ij})$). Analogamente, a $j$-ésima coluna da matriz $(a_{ij}) é o terno ordenado $(a_{1j}, a_{2j}, a_{3j})$ (e o vetor representado, na base canônica por uma coluna de $(a_{ij}) é chamado de vetor coluna de $(a_{ij})$).

Assim, dizemos que o produto das matrizes $A e B é a matriz $C = AB$, cujas **entradas** $c_{ij}$ são dadas pelo produto escalar da $i$-ésima linha de $A$ pela $j$-ésima coluna de $B$.

**Exercício 13.11** Seja $I$ a matriz dada por

$$\begin{pmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1
\end{pmatrix}.$$

Mostre que $IA = A = AI$, qualquer que seja a matriz $3 \times 3$ $A$.

**Definição:** A matriz $I$ definida acima é chamada **matriz identidade**. Se $A é uma matriz $3 \times 3$ e $A^{-1}$ é outra matriz $3 \times 3$, tal que $A^{-1}A = I = AA^{-1}$, $A^{-1}$ é chamada **matriz inversa** de $A$.

**Exercício 13.12** Mostre que nem toda matriz tem inversa.

**Exercício 13.13** Mostre que a inversa, se existe, é única.

**Exercício 13.14** Sejam $A uma matriz $3 \times 3$ e $B outra matriz $3 \times 3$, tal que $BA = I$. Mostre que, então, $A tem inversa e que $A^{-1} = B$.

**Exercício 13.15** A matriz $A = (a_{ij}) é dita **simétrica** se $a_{ij} = a_{ji}$ para todo par $ij$. Mostre que o conjunto das matrizes simétricas é um espaço vetorial (de que dimensão?). Analogamente, a matriz $A = (a_{ij}) é dita **antissimétrica** se $a_{ij} = -a_{ji}$ para todo par $ij$. Mostre que o conjunto das matrizes antissimétricas é um espaço vetorial (de que dimensão?).

**Exercício 13.16** Mostre que toda matriz se escreve, de maneira única, como soma de uma simétrica com uma antissimétrica.

**Exercício 13.17** Seja $A matriz antissimétrica $3 \times 3$. Mostre que existe um vetor $a$ em $R^3$ tal que $Av = a \otimes v$ para todo $v$ em $R^3$.

**Exercício 13.18** Retorne à seção Um pouquinho de Álgebra, do capítulo 7, e refaça tudo, com matrizes no lugar de transformações lineares.