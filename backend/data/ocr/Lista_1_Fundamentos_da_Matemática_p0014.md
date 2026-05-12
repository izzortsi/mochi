$$\beta) (a + b)^n = \binom{n}{0} a^n + \binom{n}{1} a^{n-1} b + \binom{n}{2} a^{n-2} b^2 + \cdots + \binom{n}{n-1} ab^{n-1} + \binom{n}{n} b^n$$

$$\gamma) \sum_{k=0}^{n} (-1)^k \binom{n}{k} = 0$$

$$\delta) \sum_{k=0}^{n} k \binom{n}{k} = n2^{n-1}$$

**Exercício 54.** As afirmações abaixo são mais naturalmente demonstradas pelo Princípio da Indução Forte. Prove cada uma delas.

a) Todo inteiro $n \geq 2$ é primo ou pode ser escrito como produto de números primos.

b) Para todo $n \geq 8$, existem inteiros não negativos $a$ e $b$ tais que $n = 3a + 5b$.

c) Todo valor maior ou igual à 12 pode ser obtido usando apenas moedas de 4 e 5 centavos.

Defina a sequência de Fibonacci por $F_1 = 1$, $F_2 = 1$, $F_n = F_{n-1} + F_{n-2}$, para $n \geq 3$.

d) $F_n < 2^n$, para todo $n \geq 1$.

e) $F_{n+1} \cdot F_{n-1} - F_n^2 = (-1)^n$, para todo $n \geq 2$.

f) $F_n = \frac{\varphi^n + (1 - \varphi)^n}{\sqrt{5}}$, para todo $n \geq 2$, onde $\varphi$ é uma raiz do polinômio $x^2 - x - 1$.

g) Toda triangulação de um polígono convexo de $n$ lados possui exatamente $n - 2$ triângulos.

h) Toda árvore finita com $n$ vértices possui exatamente $n - 1$ arestas.

i) O desafio da Torre de Hanói com $n$ andares pode ser resolvido em $2^n - 1$ movimentos.

**Exercício 55.** Reflita sobre o seguinte paradoxo: *Todos os cavalos têm a mesma cor*.

- Para $n = 1$, qualquer conjunto com um único cavalo tem todos os seus cavalos da mesma cor.
- Suponha que, para algum $n \geq 1$, quaisquer $n$ cavalos tenham a mesma cor. Considere então um conjunto de $n + 1$ cavalos: $\{C_1, C_2, \ldots, C_n, C_{n+1}\}$.
  Pela hipótese de indução, os primeiros $n$ cavalos $\{C_1, C_2, \ldots, C_n\}$ têm a mesma cor.
  Também pela hipótese, os últimos $n$ cavalos $\{C_2, C_3, \ldots, C_n, C_{n+1}\}$ têm a mesma cor.
  Como os dois conjuntos possuem os cavalos $\{C_2, C_3, \ldots, C_n\}$ em comum, conclui-se que todos os $n + 1$ cavalos têm a mesma cor.

- Portanto, por indução, quaisquer $n$ cavalos têm a mesma cor, para todo $n \in \mathbb{N}$.