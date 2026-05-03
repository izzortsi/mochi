$$-2 \begin{pmatrix} 3 \\ 2 \\ 1 \end{pmatrix} + (-3) \begin{pmatrix} 1 \\ 4 \\ 7 \end{pmatrix} = \begin{pmatrix} -9 \\ -16 \\ -23 \end{pmatrix}.$$

O terno ordenado $P'$ correspondente a

$$\pi(3,2,1) + \sqrt{5}(1,4,7)$$

será indicado por

$$\pi \begin{pmatrix} 3 \\ 2 \\ 1 \end{pmatrix} + \sqrt{5} \begin{pmatrix} 1 \\ 4 \\ 7 \end{pmatrix} = \begin{pmatrix} 3\pi \\ 2\pi \\ \pi \end{pmatrix} + \begin{pmatrix} \sqrt{5} \\ 4\sqrt{5} \\ 7\sqrt{5} \end{pmatrix} = \begin{pmatrix} 3\pi + \sqrt{5} \\ 2\pi + 4\sqrt{5} \\ \pi + 7\sqrt{5} \end{pmatrix}.$$

Façamos $\vec{\epsilon}_1 = (3,2,1)$, $\vec{\epsilon}_2 = (1,4,7)$, $\vec{\epsilon}_3 = (1,1,0)$ e consideremos a transformação $T$ dada por $T(x\vec{\epsilon}_1 + y\vec{\epsilon}_2 + z\vec{\epsilon}_3) = x\vec{\epsilon}_1 + y\vec{\epsilon}_2 + z\vec{\epsilon}_3$. Em termos práticos, interessa-nos conhecer as coordenadas, na base canônica, do ponto $P' = (x',y',z')$, imagem por $T$ do ponto $P = (x,y,z)$. Ora, não é difícil ver que

$$\begin{pmatrix} x' \\ y' \\ z' \end{pmatrix} = x \begin{pmatrix} 3 \\ 2 \\ 1 \end{pmatrix} + y \begin{pmatrix} 1 \\ 4 \\ 7 \end{pmatrix} + z \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 3x + y + z \\ 2x + 4y + z \\ x + 7y \end{pmatrix}.$$

Assim, para indicar a transformação $T$ correspondente aos vetores $\vec{\epsilon}_1$, $\vec{\epsilon}_2$ e $\vec{\epsilon}_3$, usaremos uma matriz tendo $\vec{\epsilon}_1$, $\vec{\epsilon}_2$ e $\vec{\epsilon}_3$ nas colunas, definindo sua multiplicação por uma matriz coluna (que representa um vetor) como abaixo:

$$\begin{pmatrix} 3 & 1 & 1 \\ 2 & 4 & 1 \\ 1 & 7 & 0 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = x \begin{pmatrix} 3 \\ 2 \\ 1 \end{pmatrix} + y \begin{pmatrix} 1 \\ 4 \\ 7 \end{pmatrix} + z \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 3x + y + z \\ 2x + 4y + z \\ x + 7y \end{pmatrix}.$$

Exercício 13.6 Se o ponto $P'$ é a imagem de $P$ ($P' = T(P)$) pela transformação definida acima, quais seriam as coordenadas $(x',y',z')$ de $P'$ se $P = (-2,-3,1)$? E se $P = (\pi,\sqrt{5},e)$?

Exercício 13.7 Quais seriam as coordenadas $(x',y',z')$ de $P'$ se $P = (x,y,z)$ e mudássemos $\vec{\epsilon}_1$, $\vec{\epsilon}_2$ e $\vec{\epsilon}_3$ para $\vec{\epsilon}_1=(1,1,0)$, $\vec{\epsilon}_2=-(2,3,0)$, $\vec{\epsilon}_3=(1,1,3)$?

Exercício 13.8 Quais seriam as coordenadas $(x',y',z')$ de $P'$ se $P = (x,y,z)$ e $\vec{\epsilon}_1 = (a_{11},a_{21},a_{31})$, $\vec{\epsilon}_2 = (a_{12},a_{22},a_{32})$, $\vec{\epsilon}_3 = (a_{13},a_{23},a_{33})$?

Já é hora de explicitarmos as definições.

Definição: Dados os vetores $\vec{\epsilon}_1$, $\vec{\epsilon}_2$ e $\vec{\epsilon}_3$, seja $T : V \rightarrow V$ a transformação linear que associa, a cada vetor $(x,y,z) = x\vec{\epsilon}_1 + y\vec{\epsilon}_2 + z\vec{\epsilon}_3$, o vetor $(x',y',z') = x\vec{\epsilon}_1 + y\vec{\epsilon}_2 + z\vec{\epsilon}_3$. Se as coordenadas de $\vec{\epsilon}_1$, $\vec{\epsilon}_2$ e $\vec{\epsilon}_3$ na base $(\vec{\epsilon}_1,\vec{\epsilon}_2,\vec{\epsilon}_3)$ são dadas por