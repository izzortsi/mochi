Exercício 8.8 Observe que isso significa que devemos resolver um sistema de duas equações e duas incógnitas. Note que, voltando ao caso geral em que estávamos em um espaço de dimensão $N$ e queríamos reduzir o tamanho de nosso arquivo de $N$ para $M$, poderíamos imitar o caso $N = 3$, $M = 2$; chegaríamos, então, a um sistema de $M$ equações e $M$ incógnitas.

Suponhamos agora que os vetores $\varepsilon_1$ e $\varepsilon_2$ sejam ortogonais. O sistema já vem resolvido! Temos, imediatamente,

$$\bar{x}_1 = \frac{\langle \mathbf{x}, \varepsilon_1 \rangle}{\langle \varepsilon_1, \varepsilon_1 \rangle},$$

$$\bar{x}_2 = \frac{\langle \mathbf{x}, \varepsilon_2 \rangle}{\langle \varepsilon_2, \varepsilon_2 \rangle}.$$

Exercício 8.9 Suponha que $\mathbf{V}$ é um espaço com produto interno e que $\mathbf{V}_o$ é um subespaço de $\mathbf{V}$, com dim $V = M$. Suponha, ainda, que $\{\varepsilon_1, \ldots, \varepsilon_M\}$ é base de $\mathbf{V}_o$ e que

$$\langle \varepsilon_i, \varepsilon_j \rangle = 0 \text{ for } i, j = 1, \ldots, M, i \neq j.$$

Mostre que, se $\mathbf{v} = x_1\varepsilon_1 + \cdots + x_M\varepsilon_M$, então

$$x_i = \frac{\langle \mathbf{v}, \varepsilon_i \rangle}{\langle \varepsilon_i, \varepsilon_i \rangle} \forall i = 1, \ldots, M.$$

Seja $\mathbf{v}$ um vetor em $V$. Suponha que

$$\mathbf{v} = \mathbf{v}_o + \mathbf{u},$$

com $\mathbf{v}_o \in \mathbf{V}_o$ e

$$\langle \mathbf{u}, \mathbf{w} \rangle = 0 \text{ for } \mathbf{w} \in \mathbf{V}.$$

Mostre que, escrevendo $\mathbf{v}_o$ na base $\{\varepsilon_1, \ldots, \varepsilon_M\}$, temos $\mathbf{v}_o = x_1\varepsilon_1 + \cdots + x_M\varepsilon_M$, com

$$x_i = \frac{\langle \mathbf{v}, \varepsilon_i \rangle}{\langle \varepsilon_i, \varepsilon_i \rangle} \forall i = 1, \ldots, M.$$

A proposição a seguir é a versão geral das ideias geométricas que acabamos de discutir.

Proposição 1: Sejam $\mathbf{V}$ um espaço vetorial com produto interno, $\mathbf{V}_o$ um subespaço de $\mathbf{V}$, de dimensão $M$, e $\varepsilon_1, \ldots, \varepsilon_M$ vetores em $\mathbf{V}_o$ tais que

$$\langle \varepsilon_i, \varepsilon_j \rangle = 0 \text{ for } i, j = 1, \ldots, M, i \neq j.$$

Então:

1. $\varepsilon_1, \ldots, \varepsilon_M$ são linearmente independentes (e, como dim $\mathbf{V}_o = M$, formam base de $\mathbf{V}_o$).

2. Para todo $\mathbf{v}$ em $\mathbf{V}$, o vetor $\bar{\mathbf{v}} = x_1\varepsilon_1 + \cdots + x_M\varepsilon_M$, com

$$x_i = \frac{\langle \mathbf{v}, \varepsilon_i \rangle}{\langle \varepsilon_i, \varepsilon_i \rangle} \forall i = 1, \ldots, M,$$

é tal que