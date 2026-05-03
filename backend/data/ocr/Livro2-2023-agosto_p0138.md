Exercício 15.22 Prove isso.

Assim, os vetores coluna de $(I)_{\alpha}^{\beta}$ são ortogonais (em $R^n$ ou em $\mathbb{C}^n$, conforme o caso). É, então, imediato, a exemplo do que já discutimos em $R^3$, que a inversa de $(I)_{\alpha}^{\beta}$ é sua transposta, caso $V$ seja espaço vetorial real (ou a transposta conjugada, se $V$ é complexo).

Exercício 15.23 Prove.

Exercício 15.24 Seja $n$ um número natural, $n > 1$. Considere $u$ e $v$ em $\mathbb{C}$, distintos e tais que $u^n = v^n = 1$. Faça $u = (u, u^2, \ldots, u^n)$ e $v = (v, v^2, \ldots, v^n)$. Mostre que $\langle u, v \rangle = 0$.

Notação: A transposta da matriz $A$ é notada por $A^T$. Caso estejamos trabalhando com escalares complexos, a transposta conjugada (cujas entradas são os conjugados das entradas de $A^T$) é notada por $A^*$ (no caso real, as duas coincidem).

Definição: A matriz $n \times n$ $A$ é dita ortogonal se satisfaz qualquer uma das propriedades equivalentes abaixo:

- Os vetores coluna de $A$ são unitários e, dois a dois, ortogonais
- $A^*A = I$
- $A^{-1} = A^*$
- $AA^* = I$
- Os vetores linha de $A$ são unitários e, dois a dois, ortogonais

O conjunto das matrizes $n \times n$ ortogonais é chamado de grupo ortogonal $(n \times n)$ e notado por $O(n)$.

Exercício 15.25 Prove que as cinco propriedades da definição são, de fato, equivalentes.

Exercício 15.26 Seja $n$ um número natural, $n > 1$. Seja $u = \cos(2\pi/n) + i\sin(2\pi/n)$. Seja $A = [a_{ij}]$ a matriz $n \times n$ dada por

$$a_{ij} = \frac{u^{ij}}{n}.$$

Mostre que $A$ é ortogonal.