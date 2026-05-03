16.3: Questão 2: toda curva polinomial é de Bézier?

**Exercício 16.1** Considere, dado o espaço vetorial $E$, o conjunto $E'$ das transformações lineares de $E$ em $\mathbb{R}$ (ou em $\mathbb{C}$, se for o caso). Mostre que, com as operações naturais, $E'$ é um espaço vetorial. $E'$ é chamado de espaço dual$^2$ de $E$.

**Exercício 16.2** Se $v_1, \ldots, v_n$ formam base de $E$, mostre que existe uma única base, $f_1, \ldots, f_n$, de $E'$, tal que

$$f_j(v_i) = \begin{cases} 0, & i \neq j \\ 1, & i = j \end{cases}.$$

A base formada pelos $f_j$ é dita **base dual** à formada pelos $v_j$.

**Exercício 16.3** Seja $E$ o espaço vetorial das funções de $\mathbb{R}$ em $\mathbb{R}$ (ou de $\mathbb{C}$ em $\mathbb{C}$, se for o caso). Mostre que, para cada $x$ em $\mathbb{R}$ (ou em $\mathbb{C}$), a aplicação de $E$ em $\mathbb{R}$ (ou em $\mathbb{C}$), dada por $f \mapsto f(x)$, é um elemento de $E'$.

**Exercício 16.4** Note que $\mathcal{P}_n$ é subespaço vetorial do espaço $E$ definido no exercício anterior. Conclua que todo elemento de $E'$, quando restrito a $\mathcal{P}_n$, é elemento do dual de $\mathcal{P}_n$.

**Exercício 16.5** Sejam $x_1, \ldots, x_n$ números reais (ou, eventualmenete, complexos) distintos e $\ell_1, \ldots, \ell_n$ os correspondentes polinômios de Lagrange. Mostre que a base dual à formada pelos $\ell_j$ é a formada pelos $f_j: p \mapsto p(x_j)$.

16.3 Questão 2: toda curva polinomial é de Bézier?

Dados os pontos $A_0, \ldots, A_n$ (usualmente, em $\mathbb{R}^2$; mas podem estar, também, em $\mathbb{R}^3$ ou, a rigor, em qualquer $\mathbb{R}^N$), a correspondente **curva de Bézier**$^3$ é dada por

$$B(A_0, \ldots, A_n)(t) = \sum_{k=0}^{n} \binom{n}{k} t^k (1-t)^{n-k} A_k, \ t \in [0,1].$$

Olhando para as coordenadas, temos polinômios (de grau, no máximo, $n$) em $t$. É natural, então, conjecturarmos que toda curva $c: [0,1] \to \mathbb{R}^N$, dada, em cada coordenada, por um polinômio, seja uma curva de Bézier. Com a experiência adquirida nas seções anteriores, é natural observar que temos, em cada coordenada, uma combinação linear dos polinômios, todos de grau $n$,

$$B_k(t) = \binom{n}{k} t^k (1-t)^{n-k}.$$

16.4 Polinômios de Bernstein, uma nova base para $\mathcal{P}_n$

$^2$eventualmente, de **dual algébrico** de $E$
$^3$Se precisar, dê uma olhada no Livro 1