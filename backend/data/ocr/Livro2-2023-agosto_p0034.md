escalares da maneira habitual ((x₁, ..., xₙ) + (y₁, ..., yₙ) = (x₁ + y₁, ..., xₙ + yₙ); t(x₁, ..., xₙ) = (tx₁, ..., txₙ)), podem ser pensados como vetores, já que as oito propriedades são satisfeitas, e isso mesmo que n > 3.

Definição: Um subconjunto ordenado $\beta = \{\vec{v}_1, ..., \vec{v}_n\}$ do espaço vetorial $V$ é dito uma base de $V$ se, e somente se, para todo vetor $\vec{v}$ de $V$, existe uma única n-upla $(x_1, ..., x_n)$ de $\mathbb{R}^n$ tal que

$$\vec{v} = x_1\vec{v}_1 + ... + x_n\vec{v}_n.$$

Os números $x_1, ..., x_n$ são chamados coordenadas do vetor $\vec{v}$ na base $\beta$.

Observe que são duas as condições para que $\beta = \{\vec{v}_1, ..., \vec{v}_n\}$ seja uma base de $V$. A primeira é que $\beta$ deve gerar $V$ (isto é, todo vetor de $V$ deve ser combinação linear de $\vec{v}_1, ..., \vec{v}_n$). A segunda é que não podem existir duas n-uplas distintas, $(x_1, ..., x_n)$ e $(y_1, ..., y_n)$, que correspondam a um mesmo vetor, isto é: se

$$x_1\vec{v}_1 + ... + x_n\vec{v}_n = y_1\vec{v}_1 + ... + y_n\vec{v}_n,$$

então, necessariamente, $x_1 = y_1, ..., x_n = y_n$.

Exercício 4.2 Mostre que nenhum dos vetores de uma base pode ser combinação linear dos demais (perderíamos a unicidade da representação).

Exercício 4.3 Entenda que uma base é uma espécie de chave para identificarmos cada vetor de $V$ a uma n-upla de $\mathbb{R}^n$. Note que a exigência de ter $\{\vec{v}_1, ..., \vec{v}_n\}$ ordenado é necessária para garantir a unicidade da n-upla $(x_1, ..., x_n)$.

Definição: Os vetores $\vec{v}_1, ..., \vec{v}_n$ são ditos linearmente independentes se nenhum deles é combinação linear dos demais (diz-se, também, que o conjunto $\{\vec{v}_1, ..., \vec{v}_n\}$ é linearmente independente). Se, ao contrário, existe um que é combinação linear dos demais, então $\vec{v}_1, ..., \vec{v}_n$ são ditos linearmente dependentes.

Proposição: Fixada a base $\{\vec{v}_1, ..., \vec{v}_n\}$, a bijeção $\vec{v} \leftrightarrow (x_1, ..., x_n)$ preserva as operações de adição e de multiplicação por escalar. Isto é, se $(x_1, ..., x_n)$ e $(y_1, ..., y_n)$ são as n-uplas associadas, respectivamente, aos vetores $\vec{u}$ e $\vec{v}$, e t é um escalar qualquer, então a n-upla $(x_1 + ty_1, ..., x_n + ty_n) = (x_1, ..., x_n) + t(y_1, ..., y_n)$ é a associada ao vetor $\vec{u} + t\vec{v}$.

Demonstração: Basta usar as propriedades das operações com vetores e com n-uplas. De fato, se $\vec{u} = x_1\vec{v}_1 + ... + x_n\vec{v}_n$, $\vec{v} = y_1\vec{v}_1 + ... + y_n\vec{v}_n$ e t é um escalar, então, usando muitas vezes as associatividades, as distributividades e a comutatividade, obtemos

$$\vec{u} + t\vec{v} = (x_1\vec{v}_1 + ... + x_n\vec{v}_n) + t(y_1\vec{v}_1 + ... + y_n\vec{v}_n) = (x_1 + ty_1)\vec{v}_1 + ... + (x_n + ty_n)\vec{v}_n.$$

1 Neste caso, diz-se também que $\vec{v}_1, ..., \vec{v}_n$ geram $V$
2 Seria mais rigoroso considerar, em vez de conjuntos ordenados de vetores $\{\vec{v}_1, ..., \vec{v}_n\}$, n-uplas $(\vec{v}_1, ..., \vec{v}_n)$ em $V^n$, o que é quase a mesma coisa (n-uplas admitem a possibilidade de $\vec{v}_i = \vec{v}_j$, com $i \neq j$). Estamos evitando fazê-lo por conta do risco de confundir o leitor...o que, paradoxalmente, pode gerar alguma confusão