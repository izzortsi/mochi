Capítulo 6

Bases e dimensão

6.1 Bases

Definição: Um subconjunto ordenado $\{v_1, \ldots, v_n\}$ do espaço vetorial $V$ é dito uma base de $V$ se, e somente se, para todo vetor $v$ de $V$, existe uma única n-upla $(x_1, \ldots, x_n)$ de $\mathbb{R}^n$ tal que

$$v = x_1v_1 + \ldots + x_nv_n.$$

Os números $x_1, \ldots, x_n$ são chamados coordenadas do vetor $V$.

Exercício 6.1 Entenda que uma base é uma espécie de chave para identificarmos cada vetor de $V$ a uma n-upla de $\mathbb{R}^n$. Note que a exigência de ter $\{v_1, \ldots, v_n\}$ ordenado é necessária para garantir a unicidade da n-upla $(x_1, \ldots, x_n)$.¹

Proposição: Fixada a base $\{v_1, \ldots, v_n\}$, a bijeção $v \leftrightarrow (x_1, \ldots, x_n)$ preserva as operações de adição e de multiplicação por escalar. Isto é, se $(x_1, \ldots, x_n)$ e $(y_1, \ldots, y_n)$ são as n-uplas associadas, respectivamente, aos vetores $u$ e $v$, e $t$ é um escalar qualquer, então a n-upla $(x_1 + ty_1, \ldots, x_n + ty_n) = (x_1, \ldots, x_n) + t(y_1, \ldots, y_n)$ é a associada ao vetor $u + tv$.

Demonstração: Basta usar as propriedades das operações com vetores e com n-uplas. De fato, se $u = x_1v_1 + \ldots + x_nv_n$, $v = y_1v_1 + \ldots + y_nv_n$ e $t$ é um escalar, então, usando muitas vezes as associatividades, as distributividades e a comutatividade, obtemos

$$u + tv = (x_1v_1 + \ldots + x_nv_n) + t(y_1v_1 + \ldots + y_nv_n) = (x_1 + ty_1)v_1 + \ldots + (x_n + ty_n)v_n.$$

Exercício 6.2 Estamos, implicitamente, excluindo a possibilidade de ser vazio o conjunto $\{v_1, \ldots, v_n\}$. Se o leitor tem tempo para a questão, pense nela: podemos conceber em abstrato o conceito de espaço

¹Seria mais rigoroso considerar, em vez de conjuntos ordenados de vetores $\{v_1, \ldots, v_n\}$, n-uplas $(v_1, \ldots, v_n)$ em $V^n$, o que é quase a mesma coisa (n-uplas admitem a possibilidade de $v_i = v_j$, com $i \neq j$). Estamos evitando fazê-lo por conta do risco de confundir o leitor...o que, paradoxalmente, pode gerar alguma confusão