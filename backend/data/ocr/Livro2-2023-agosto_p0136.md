Exercício 15.10 Confira.

Exercício 15.11 Suponha dado $\vec{n} = a\vec{e}_1 + b\vec{e}_2 + c\vec{e}_3$, com $a^2 + b^2 + c^2 = 1$. Encontre, no plano $\alpha$ normal a $\vec{n}$ e passando pela origem, dois vetores unitários e ortogonais, $\vec{e}_1$ e $\vec{e}_2$ (note que as possibilidades são infinitas). Determine a matriz da projeção ortogonal sobre $\alpha$ na base $\vec{e}_1$, $\vec{e}_2$, $\vec{n}$; a partir daí, obtenha a matriz da projeção na base canônica.

Exercício 15.12 Note que o problema pode ser resolvido, diretamente, subtraindo de cada vetor sua componente na direção de $\vec{e}_1$.

Exemplo 4: Numa variante do exemplo anterior, consideremos a reflexão através de um plano passando pela origem.

Exercício 15.13 Usando a mesma base construída no exemplo 3, note que a matriz é

$$\begin{pmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & -1
\end{pmatrix}.$$

Exercício 15.14 Mostre que, a exemplo do caso anterior, neste, também, podemos dar uma solução direta.

Exercício 15.15 Resolva os problemas análgos, para projeções sobre e reflexões através de retas passando pela origem.

15.3 Matrizes ortogonais

A lição, até agora, é: dependendo do problema, pode ser mais simples trabalhar com uma base outra que a canônica; isto pode resultar em obtermos, de forma quase imediata, a matriz da transformação linear na base escolhida. O preço, porém, é que, embora a matriz que converte coordenadas na nova base em coordenadas na base canônica venha de graça, temos que invertê-la, para obter a matriz que converte coordenadas na base canônica em coordenadas na nova base. Inverter matrizes é, em geral, trabalhoso. Mas, em algumas situações (é o caso em todos os exemplos que escolhemos), a nova base não é qualquer base: é, também, ortonormal!

Exercício 15.16 Suponha que os vetores coluna da matriz $(b_{ij})$ sejam unitários e, dois a dois, ortogonais. Seja $(a_{ij})$ a matriz transposta de $(b_{ij})$, isto é, $a_{ij} = b_{ji} \forall(i,j)$. Calcule o produto $(a_{ij})(b_{ij})$.

O leitor pode ter preguiça de fazer o exercício acima, o melhor é incluir no texto a solução... No produto de duas matrizes,

$$\begin{pmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{pmatrix} \begin{pmatrix}
b_{11} & b_{12} & b_{13} \\
b_{21} & b_{22} & b_{23} \\
b_{31} & b_{32} & b_{33}
\end{pmatrix},$$

procedemos como se multiplicásemos escalarmente cada linha da primeira por cada coluna da segunda. Mas, no nosso caso, as linhas da primeira são as colunas da segunda. Como os vetores coluna da segunda são unitários e, dois a dois, ortogonais, o resultado é a matriz identidade.