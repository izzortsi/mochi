Exercício 7.1 Prove, a partir da definição, as seguintes propriedades:

(i) $\langle \mathbf{u}_1 + \mathbf{u}_2, \mathbf{v} \rangle = \langle \mathbf{u}_1, \mathbf{v} \rangle + \langle \mathbf{u}_2, \mathbf{v} \rangle \forall \mathbf{u}_1, \mathbf{u}_2, \mathbf{v} \in \mathbf{V}$
(ii) $\langle \mathbf{0}, \mathbf{v} \rangle = 0 \forall \mathbf{v} \in \mathbf{V}$
(iii) $\langle t\mathbf{u}, \mathbf{v} \rangle = t \langle \mathbf{u}, \mathbf{v} \rangle \forall \mathbf{u} \in \mathbf{V}, \forall t \in \mathbb{R}$

Solução de (ii): $\langle \mathbf{0}, \mathbf{v} \rangle = \langle \mathbf{0} + \mathbf{0}, \mathbf{v} \rangle = \langle \mathbf{0}, \mathbf{v} \rangle + \langle \mathbf{0}, \mathbf{v} \rangle$, etc.

Os dois exemplos a seguir são básicos.

Exemplo 1: Em $\mathbb{R}^n$, como já vimos, podemos definir, se $\mathbf{x} = (x_1, \ldots, x_n)$ e $\mathbf{y} = (y_1, \ldots, y_n)$,

$$\langle \mathbf{x}, \mathbf{y} \rangle = x_1y_1 + \ldots + x_ny_n.$$

Exemplo 2: Seja $E$ o espaço das funções contínuas, definidas no intervalo $[a, b]$, a valores em $\mathbb{R}$. Se $f$ e $g$ são elementos de $E$, definimos

$$\langle f, g \rangle = \int_a^b f(x)g(x)dx.$$

Exercício 7.2 Mostre que os produtos escalares dos dois exemplos satisfazem, de fato, as quatro propriedades da definição de produto escalar.

Exemplo 3: Nosso próximo exemplo está fortemente relacionado aos dois anteriores (embora a relação com o segundo não seja evidente). O espaço das sequências de números reais, como já vimos, é uma espécie de $\mathbb{R}^n$, com $n$ infinito. Seria natural definirmos o produto escalar da sequência $(x_n)_{n \in \mathbb{N}}$ pela sequência $(y_n)_{n \in \mathbb{N}}$, fazendo

$$\langle (x_n), (y_n) \rangle = \sum_{n=1}^{\infty} x_ny_n.$$

O problema é que a soma infinita à direita nem sempre converge (exercício: ache um exemplo). Podemos apresentar duas saídas:

a) Façamos $\mathbf{V}$ ser o espaço das sequências $(x_n)_{n \in \mathbb{N}}$ tais que $x_n \neq 0$ apenas para um número finito de enes (esse número varia de sequência para sequência);

b) Tomemos como $\mathbf{V}$ o espaço $l^2(\mathbb{R})$ das sequências $(x_n)_{n \in \mathbb{N}}$ tais que

$$\sum_{n=1}^{\infty} x_n^2 < \infty.$$

Exercício 7.3 Mostre que o exemplo 3a é, de fato, um espaço com produto interno.