2. mesma coisa, usando os vetores linha;

3. consideramos a transformação linear $A$ definida por $[a_{ij}]$, na base canônica, e fazemos $det[a_{ij}] = detA$.

Curiosamente, as três dão o mesmo número. Há, ainda, uma possibilidade (infinitas, na verdade, uma para cada possível base):

4. Fixamos uma base $\beta$ e consideramos a transformação linear $T$ definida por $[a_{ij}]$, na base $\beta$, e fazemos $det[a_{ij}] = detT$.

**Lema:** As quatro definições de determinante de matriz propostas acima são equivalentes.

Demonstração: Comecemos provando que 1 e 3 dão o mesmo número. Como $det_n$ é uma forma $n$-linear alternada, temos $det_n(Ae_1, \ldots, Ae_n) = detAdet_n(e_1, \ldots, e_n) = detA$. A equivalência entre 3 e 4 segue do fato de que a transformação $T$ definida em 4 é dada por $B^{-1}AB$, sendo $B$ a transformação que leva, na ordem, os vetores de $\beta$ nos da base canônica. Assim, $detT = det(B^{-1}AB) = det(B-1)detAdetB = detA$ (já que $B^{-1}B = I$, e $detI = 1$). Resta provar que 1 e 2 também fornecem o mesmo resultado. Usaremos a fórmula, correspondente a 1:

$$det[a_{ij}] = \sum_{\sigma \in S_n} sgn\sigma a_{1\sigma_1}a_{2\sigma_2} \ldots a_{n\sigma_n}.$$

Observemos que cada parcela consiste em multiplicar o sinal de $\sigma$ pelo produto dos números $a_{i\sigma_i}$ com $i$ em $\{1, \ldots, n\}$. Podemos, é claro, alterar a ordem dos fatores, reescrevendo cada parcela como

$$sgn\sigma a_{(\sigma^{-1})_1\sigma_{(\sigma^{-1})_1}}a_{(\sigma^{-1})_2\sigma_{(\sigma^{-1})_2}} \ldots a_{(\sigma_n^{-1})_n\sigma_{(\sigma^{-1})_n}}.$$

Como $\sigma_{(\sigma^{-1})_j} = j$ para todo $j$ (é pura notação), segue

$$det[a_{ij}] = \sum_{\sigma \in S_n} sgn\sigma a_{(\sigma^{-1})_1\sigma_{(\sigma^{-1})_1}}a_{(\sigma^{-1})_2\sigma_{(\sigma^{-1})_2}} \ldots a_{(\sigma_n^{-1})_n\sigma_{(\sigma^{-1})_n}}.$$

Como $sgn\sigma = sgn(\sigma^{-1})$ para todo $\sigma$ em $S_n$ e, quando $\sigma$ percorre $S_n$, $\sigma^{-1}$ faz o mesmo, o termo à direita corresponde, exatamente, à expressão que obtemos de 2.

Escolhendo uma das definições equivalentes acima, podemos definir o determinante de uma matriz e dar por provadas umas tantas coisas.

**Definição:** O determinante da matriz $n \times n$ $[a_{ij}]$, real ou complexa, é o número $det[a_{ij}]$, também notado por $|a_{ij}|$, e definido por

$$det[a_{ij}] = \sum_{\sigma \in S_n} sgn\sigma a_{1\sigma_1}a_{2\sigma_2} \ldots a_{n\sigma_n}.$$

**Teorema:** O determinante da matriz $n \times n$ $[a_{ij}]$, real ou complexa, é uma forma $n$-linear alternada dos vetores coluna de $[a_{ij}]$ e satisfaz as seguinte propriedades:

1. $det[I] = 1$, sendo $[I]$ a matriz identidade;

2. $det([A][B]) = det[A]det[B]$, para quaisquer matrizes $n \times n$ $[A]$ e $[B]$