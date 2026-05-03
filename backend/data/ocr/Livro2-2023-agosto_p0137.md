Exercício 15.17 Note que, como sabemos, se as matrizes $3 \times 3$ A e B são tais que $AB = I$, então $BA = I$. Mostre que, se os vetores coluna de uma matriz são unitários e, dois a dois, ortogonais, então o mesmo vale para seus vetores linha.

Definição: A transposta da matriz $A = (a_{ij})$ é a matriz $A^T = (b_{ij})$, dada por $b_{ij} = a_{ji}$.

Definição: A matriz $3 \times 3$ A é dita ortogonal se satisfaz qualquer uma das propriedades equivalentes abaixo:

- Os vetores coluna de A são unitários e, dois a dois, ortogonais
- $A^T A = I$
- $A^{-1} = A^T$
- $AA^T = I$
- Os vetores linha de A são unitários e, dois a dois, ortogonais

O conjunto das matrizes $3 \times 3$ ortogonais é chamado de grupo ortogonal $(3 \times 3)$ e notado por $O(3)$.

Exercício 15.18 Mostre que as cinco propriedades acima são, de fato, equivalentes.

Exercício 15.19 Mostre que, se A e B são ortogonais, então AB é ortogonal.

Exercício 15.20 Seja $T : V \rightarrow V$ uma transformação linear que preserva o produto interno, isto é:

$$\langle T\vec{u}, T\vec{v} \rangle = \langle \vec{u}, \vec{v} \rangle \forall \vec{u}, \vec{v} \in V.$$

Mostre que a matriz de T na base canônica é ortogonal. Mostre que a matriz de T em qualquer base ortonormal é ortogonal.

15.4 O caso geral

De maneira geral, dados um espaço vetorial $V$ e duas bases, $\alpha$ e $\beta$, de $V$, a matriz de mudança de base de $\alpha$ para $\beta$ é

$$(I)_{\alpha}^{\beta}.$$

Exercício 15.21 Veja se entendeu. I é a transformação identidade de $V$ em $V$. As colunas de $(I)_{\alpha}^{\beta}$ são dadas pelos vetores de $\alpha$ escritos na base $\beta$.

Obviamente, a matriz de mudança de base de $\beta$ para $\alpha$, $(I)_{\alpha}^{\beta}$, é a inversa de $(I)_{\alpha}^{\beta}$.

Um caso particularmente interessante é aquele em que o espaço $V$ tem produto interno e as duas bases em consideração, $\alpha$ e $\beta$, são ortonormais. Nesse caso, se $u$ e $v$ são dois vetores em $V$, representados, em $\beta$, por $(u)_{\beta}^{\beta}$ e $(v)_{\beta}^{\beta}$, respectivamente, seu produto escalar é dado, no caso real, por

$$\langle u, v \rangle = u_1 v_1 + \ldots + u_n v_n.$$

No caso complexo:

$$\langle u, v \rangle = u_1 \bar{v}_1 + \ldots + u_n \bar{v}_n.$$