3.3: Com quem está o anel?

Yakecan pega um papel, lápis e rabisca:

$$\begin{pmatrix}
a_{11} & a_{12} & \ldots & a_{1n} \\
a_{21} & a_{22} & \ldots & a_{2n} \\
\vdots & \vdots & \vdots & \vdots \\
a_{n1} & a_{n2} & \ldots & a_{nn}
\end{pmatrix}$$

Que porra é essa, Yakecan?

Ué, Zumbi, $a_{ij}$ é a probabilidade de que a criança $j$, de posse do anel, passe para a criança $i$. Pensei usar as iniciais de cada uma, mas estava dando confusão, preferi numerar (no nosso caso, $n=19$). Por conta disso, a soma dos números em cada coluna vai ter que ser, sempre, igual a 1. Ou seja, para cada $j$,

$$a_{1j} + a_{2j} + \ldots + a_{nj} = 1.$$

Note, prossegue Yakecan, que as regras permitem que quem está com o anel o guarde consigo.

Quer dizer, então, que a coluna $j$,

$$\begin{pmatrix}
a_{1j} \\
a_{2j} \\
\vdots \\
a_{nj}
\end{pmatrix},$$

nos mostra as probabilidades de que, em uma rodada em que o anel começa com a criança $j$, ele termine com a própria ou com cada uma das demais?

Exercício 3.8 Suponha que $n = 3$ e que a matriz de Yakecan seja:

$$\begin{pmatrix}
0,1 & 0,6 & 0,4 \\
0,4 & 0,2 & 0,5 \\
0,5 & 0,2 & 0,1
\end{pmatrix}.$$

Suponha que o anel comece com a criança de número 2. Pelo acima exposto, a probabilidade de que, ao final de uma rodada, o anel esteja com a criança número 1 é 0,6; com a criança número 2, é 0,2 e, com a número 3, é 0,2. Suponhamos, agora que, começando com a criança número 2, joguemos duas vezes. Quais são as probabilidades de que o anel esteja, ao final da segunda rodada, com cada uma das crianças?

Exercício 3.9 Se essa história parece complicada, pense assim: se o anel começasse, por 10 rodadas, com a criança 2, a boa aposta seria que: em duas rodadas ela guardaria consigo o anel, em seis passaria para a criança 1 e nas outras duas passaria para a criança 3. Como, em cada um desses casos, a criança que recebeu o anel é quem vai passar na rodada seguinte, pode ser interessante trabalharmos com números um pouco maiores: se o anel começasse, por 100 rodadas, com a criança 2, a boa aposta seria que: em 20 rodadas ela guardaria consigo o anel, em 60 passaria para a criança 1 e nas outras 20 passaria para a criança 3. Agora vamos usar todas as informações da matriz de Yakecan. A criança 1 receberia o anel: 12 vezes, correspondendo às 20 rodadas em que a criança 2 ainda tinha o anel no começo da segunda rodada; 8 vezes, correspondendo aos 20 casos em que o anel, no começo da segunda rodada rodada, estaria com a criança 3; e ainda 6 vezes, correspondendo aos 60 casos em que ela mesma teria o anel no início da