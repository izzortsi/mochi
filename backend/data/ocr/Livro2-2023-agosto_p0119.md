$$\vec{\varepsilon}_1 = \begin{pmatrix} a_{11} \\ a_{21} \\ a_{31} \end{pmatrix}, \quad \vec{\varepsilon}_2 = \begin{pmatrix} a_{12} \\ a_{22} \\ a_{32} \end{pmatrix}, \quad \vec{\varepsilon}_3 = \begin{pmatrix} a_{13} \\ a_{23} \\ a_{33} \end{pmatrix},$$

a matriz da transformação $T$ é

$$\begin{pmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{pmatrix}.$$

Definição: Dados a matriz $\begin{pmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{pmatrix}$ e o vetor coluna $\begin{pmatrix} x \\ y \\ z \end{pmatrix}$, o produto

$$\begin{pmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix}$$

é definido por

$$\begin{pmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = x \begin{pmatrix} a_{11} \\ a_{21} \\ a_{31} \end{pmatrix} + y \begin{pmatrix} a_{12} \\ a_{22} \\ a_{32} \end{pmatrix} + z \begin{pmatrix} a_{13} \\ a_{23} \\ a_{33} \end{pmatrix} = \begin{pmatrix} a_{11}x \\ a_{21}x \\ a_{31}x \end{pmatrix} + \begin{pmatrix} a_{12}y \\ a_{22}y \\ a_{32}y \end{pmatrix} + \begin{pmatrix} a_{13}z \\ a_{23}z \\ a_{33}z \end{pmatrix} = \begin{pmatrix} a_{11}x + a_{12}y + a_{13}z \\ a_{21}x + a_{22}y + a_{23}z \\ a_{31}x + a_{32}y + a_{33}z \end{pmatrix}.$$

Observação: Nossas definições foram feitas sob medida para que, dado o ponto $P = (x, y, z)$, as coordenadas $(x', y', z')$ do ponto $P' = T(P)$ sejam dadas por

$$\begin{pmatrix} x' \\ y' \\ z' \end{pmatrix} = \begin{pmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix}.$$

Exercício 13.9 Determine a matriz de cada uma das transformações definidas nos exemplos 1 a 5 da primeira seção deste capítulo.

Exercício 13.10 Considere as transformações lineares $A : V \rightarrow V$ e $B : V \rightarrow V$, dadas, respectivamente, pelas matrizes $(a_{ij})$ e $(b_{ij})$,

$$(a_{ij}) = \begin{pmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{pmatrix}, \quad (b_{ij}) = \begin{pmatrix} b_{11} & b_{12} & b_{13} \\ b_{21} & b_{22} & b_{23} \\ b_{31} & b_{32} & b_{33} \end{pmatrix}.$$