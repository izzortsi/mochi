$$\begin{cases}
a_{11}x_1 + \ldots + a_{1n}x_n = y_1 \\
\ldots \\
a_{m1}x_1 + \ldots + a_{mn}x_n = y_m
\end{cases}$$

está a transformação linear $A : \mathbb{R}^n \longrightarrow \mathbb{R}^m$, dada por

$$A(x_1, \ldots, x_n) = (y_1, \ldots, y_m),$$

com, para cada $i = 1, \ldots, m$,

$$y_i = a_{i1}x_1 + \ldots + a_{in}x_n = \sum_{j=1}^{n} a_{ij}x_j.$$

**Exemplo 2:** Se $\mathbf{V} = C^1(\mathbb{R}, \mathbb{R})$ e $\mathbf{W} = C^o(\mathbb{R}, \mathbb{R})$ (o que significa que $\mathbf{V}$ é o espaço das funções com derivada primeira contínua e $\mathbf{W}$ é o espaço das funções contínuas), então o operador $D : \mathbf{V} \rightarrow \mathbf{W}$ de derivação, definido por $Df = f'$ (isto é, $D$ leva $f$ em sua derivada) é linear.

**Exemplo 3:** Se $\mathbf{W} = C^o(\mathbb{R}, \mathbb{R})$, o operador de integração de $a$ até $b$, $I : \mathbf{W} \longrightarrow \mathbb{R}$, dado por

$$If = \int_a^b f(x)dx,$$

é linear.

**Exemplo 4:** Se $\mathbf{V}$ é o espaço das sequências infinitas de números reais (um elemento de $\mathbf{V}$ é uma sequência $(x_n)_{n \in \mathbb{N}}$) então o operador $shift, S : \mathbf{V} \longrightarrow \mathbf{V}$, dado por

$$S(x_1, x_2, x_3, x_4, \ldots) = (0, x_1, x_2, x_3, \ldots),$$

é linear.

**Exercício 12.19** Mostre que a transformação $D$ do exemplo 2 é sobrejetiva mas não injetiva (use o Teorema Fundamental do Cálculo).

**Exercício 12.20** Mostre que a transformação $S$ do exemplo 4 é injetiva mas não sobrejetiva.

### 12.4 Um pouquinho de Álgebra

O exercício a seguir é tão importante que poderia até ser convertido em Proposição e demonstrado no texto. Se você entendeu a história de dimensão, o que é crucial, deve ser fácil.

**Exercício 12.21** Sejam $\mathbf{V}$ um espaço vetorial de dimensão finite $e T : \mathbf{V} \rightarrow \mathbf{V}$ linear. Seja $\{\varepsilon_1, \ldots, \varepsilon_n\}$ uma base de $\mathbf{V}$. Observe que a imagem de $T$, isto é, o conjunto $ImT = \{T\mathbf{v}, \mathbf{v} \in \mathbf{V}\}$ é o conjunto das combinações lineares de $T\varepsilon_1, \ldots, T\varepsilon_n$. Mostre que $T$ é injetiva se e somente se é sobrejetiva.