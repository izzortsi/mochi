Exercício 10.17 Mostre que, para qualquer coluna j, vale

$$|a_{ij}| = \sum_{i=1}^{3} (-1)^{i+j} a_{ij} |\tilde{a}_{ij}|.$$

Exercício 10.18 Sejam A e B as matrizes $3 \times 3$ dadas por $(a_{ij}) e (b_{ij})$. O produto de A e B é a matriz $C = (c_{ij})$, assim definida:

$$\begin{pmatrix} c_{11} & c_{12} & c_{13} \\ c_{21} & c_{22} & c_{23} \\ c_{31} & c_{32} & c_{33} \end{pmatrix} = \begin{pmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{pmatrix} \begin{pmatrix} b_{11} & b_{12} & b_{13} \\ b_{21} & b_{22} & b_{23} \\ b_{31} & b_{32} & b_{33} \end{pmatrix},$$

com $c_{ij} = a_{i1}b_{1j} + a_{i2}b_{2j} + a_{i3}b_{3j}$ (note que $c_{ij}$ é o produto escalar da linha i de A peela coluna j de B).

Suponha que a matriz $(a_{ij})$ tem determinante não nulo. Seja $(b_{ij})$ a matriz definida por $b_{ij} = (\det(a_{ij}))^{-1} (-1)^{i+j} |\tilde{a}_{ji}|$ (note que, a menos do fator $(\det(a_{ij}))^{-1}$, trata-se da transposta da matriz dos cofatores). Mostre que $(a_{ij})(b_{ij}) = (\delta_{ij}) ((\delta_{ij}) é a matriz identidade, I, dada por $\delta_{ij} = 0$, se $i \neq j$, e $\delta_{ij} = 1$, se $i = j)$.

Mostre que $IA = AI = A$ para toda matriz $3 \times 3$ A.

Exercício 10.19 Suponha que $\begin{pmatrix} x_1 \\ x_2 \\ x_3 \end{pmatrix}$ seja solução do sistema

$$\begin{cases} a_{11}x_1 + a_{12}x_2 + a_{13}x_3 = y_1 \\ a_{21}x_1 + a_{22}x_2 + a_{23}x_3 = y_2 \\ a_{31}x_1 + a_{32}x_2 + a_{33}x_3 = y_3, \end{cases}$$

ou seja,

$$\begin{pmatrix} y_1 \\ y_2 \\ y_3 \end{pmatrix} = \begin{pmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \\ x_3 \end{pmatrix} =$$

$$= x_1 \begin{pmatrix} a_{11} \\ a_{21} \\ a_{31} \end{pmatrix} + x_2 \begin{pmatrix} a_{12} \\ a_{22} \\ a_{32} \end{pmatrix} + x_3 \begin{pmatrix} a_{13} \\ a_{23} \\ a_{33} \end{pmatrix}.$$

Observe que, se trocarmos a primeira coluna da matriz $\begin{pmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{pmatrix}$ por $\begin{pmatrix} y_1 \\ y_2 \\ y_3 \end{pmatrix}$, teremos: