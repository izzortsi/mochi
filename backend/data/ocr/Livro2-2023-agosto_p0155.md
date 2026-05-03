2. $\exists x \in A \mid \forall y \in A \exists j \mid y = \sigma^j(x)$.

Chamaremos $A$ de conjunto dos pontos não fixos do ciclo $\sigma$.

**Exercício 18.15** Entenda que, se $\sigma$ é um ciclo, o conjunto $A$ dos pontos não fixos é obtido assim: excolhe-se um $x$ qualquer tal que $\sigma(x) \neq x$. Tomam-se os elementos $x, \sigma(x), \sigma^2(x), \sigma^3(x), \ldots$. Como $A$ é finito, depois de um certo número, $k$, de iterações, volta-se a algum dos elementos anteriores. Mostre que o primeiro que volta é o próprio $x$. Assim, $A = \{ \sigma(x), \sigma^2(x), \sigma^3(x), \ldots, \sigma^k(x) = x \}$.

**Exercício 18.16** Sejam $\sigma$ um ciclo e $A$ o conjunto de seus pontos não fixos. Seja $x$ um elemento qualquer de $A$. Mostre que $\forall y \in A \exists j \mid y = \sigma^j(x)$.

**Exercício 18.17** Mostre que todo elemento de $S_n$ é produto de **ciclos disjuntos** (dois ciclos são ditos disjuntos se todo elemento de $\{1, 2, \ldots, n\}$ fica fixo por, pelo menos, um dos dois).$^4$

**Exercício 18.18** Mostre que todo ciclo de ordem $k$ é produto de $k - 1$ transposições. Mostre que não dá para fazer com menos.

**Exercício 18.19** Conclua que todo elemento de $S_n$ é produto de transposições.

**Proposição 1**: Toda permutação em $S_n$ é produto de transposições.

Demonstração: Trata-se de resolver os exercícios acima.

1. Comecemos provando que toda permutação em $S_n$ é produto de ciclos. Vamos fazer a prova por indução sobre $n$. O resultado é obviamente válido (na forma de produto de 0 transposições, entendido que o produto de 0 números é 1 e o produto de 0 permutações é a identidade) se $n = 1$. Suponhamos $n \ge 1$ e o resultado válido em $S_k$, $k < n$. Seja $\sigma$ um elemento de $S_n$. Se $\sigma$ é a identidade, está terminado. Se não, tomemos $x \in \{1, \ldots, n\}$ tal que $\sigma(x) \neq x$. Seja

$$A_1 = \{ x = \sigma^0(x), \sigma(x), \sigma^2(x), \ldots \}.$$

Como $A_1$ é finito, existe um menor $k$ tal que $\sigma^k(x) = \sigma^l(x)$ para algum $l$ inferior a $k$. Então, necessariamente, $l = 0$, pois, caso contrário, $\sigma(\sigma^{l-1}(x)) = \sigma(\sigma^{k-1}(x))$, contrariando a injetividade de $\sigma$. Logo,

$$A_1 = \{ \sigma(x), \sigma^2(x), \ldots, \sigma^k(x) = x \}.$$

Se $k = n$, terminamos. Se não, excluindo de $\{1, \ldots, n\}$ os elementos de $A_1$, temos um conjunto $B$ com menos do que $n$ elementos. Mas, então, a restrição de $\sigma$ a $B$ é uma permutação de $B$ e se escreve, pela hipótese de indução, como produto de ciclos. Agora é só juntar.

2. Resta mostrar que todo ciclo é produto de transposições. Considere o ciclo $\sigma$, dado por $\sigma(x), \sigma^2(x), \ldots, \sigma^k(x) = x$. Então

$$\sigma = (\sigma(x)\sigma^k(x)) \ldots (\sigma(x)\sigma^3(x))(\sigma(x)\sigma^2(x)).$$

Confira.

$^4$O produto de $k$ permutações está definido, para $k > 2$, por conta da associatividade; o de uma só permutação, claro, é a própria; o produto de 0 permutações é, por definição, a permutação identidade