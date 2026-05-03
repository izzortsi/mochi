Capítulo 13

A matriz de uma transformação linear

A noção de matriz surge naturalmente a partir de sistemas lineares. O sistema

$$\begin{cases}
a_{11}x_1 + \cdots + a_{1n}x_n = b_1 \\
\cdots \\
a_{m1}x_1 + \cdots + a_{mn}x_n = b_m
\end{cases}$$

pode ser representado, na forma matricial, por

$$\begin{pmatrix}
a_{11} & \cdots & a_{1n} \\
\vdots & \cdots & \vdots \\
a_{m1} & \cdots & a_{mn}
\end{pmatrix}$$

$$\begin{pmatrix}
x_1 \\
\vdots \\
x_n
\end{pmatrix} = \begin{pmatrix}
b_1 \\
\vdots \\
b_m
\end{pmatrix}.$$

É também natural considerar, associada à matriz $m \times n$¹

$$(a_{ij}) = \begin{pmatrix}
a_{11} & \cdots & a_{1n} \\
\vdots & \cdots & \vdots \\
a_{m1} & \cdots & a_{mn}
\end{pmatrix},$$

a transformação linear $A: \mathbb{R}^n \to \mathbb{R}^m$, dada por $Ax = y$, com

$$\begin{pmatrix}
y_1 \\
\vdots \\
y_m
\end{pmatrix} = \begin{pmatrix}
a_{11} & \cdots & a_{1n} \\
\vdots & \cdots & \vdots \\
a_{m1} & \cdots & a_{mn}
\end{pmatrix}$$

Vamos, porém, inverter a ordem natural das coisas. Partiremos das transformações lineares para associar-lhes matrizes.

13.1 No plano

Para simplificar um pouco, voltemos à tela do computador e ao plano. Recordemos que a representação dos pontos na tela se faz por meio de um sistema de coordenadas

¹Embora o conceito de matriz seja bastante simples, não custa dar uma definição precisa: uma matriz $m \times n$ ($a_{ij}$) com entradas no conjunto $X$ é uma aplicação $a: \{1, \ldots, m\} \times \{1, \ldots, n\} \to X$. É usual notar $a(i,j)$ por $a_{ij}$