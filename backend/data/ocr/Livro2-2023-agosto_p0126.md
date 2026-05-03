2. Por indução, temos

$$T \supset P(T) \supset P^2(T) \supset \cdots \supset P^k(T) \supset P^{k+1}(T) \supset \cdots.$$

3. O comportamento assintótico do sistema será determinado por informações sobre de que maneira encolhem os triângulos $P^k(T)$. É razoável conjecturar que, sob alguma hipótese adicional, encolham para um ponto $p*$.

**Exercício 14.5** Mostre que, se $P$ permuta os vértices de $T$, então $T$ não encolhe.

Há mais uma coisinha quase óbvia para nós, que conhecemos o Teorema de Brouwer (ver o Livro 1):

**Teorema de Brouwer:** Se $B = \{p \in \mathbb{R}^n \mid p_1^2 + \cdots + p_n^2 \leq 1\}$ e $f : B \rightarrow B$ é continua, então existe $p* \in B$ tal que $f(p*) = p*.$$^1$

**Teorema de Brouwer para polígonos convexos:** Se $B$ é um polígono convexo e $f : B \rightarrow B$ é continua, então existe $p* \in B$ tal que $f(p*) = p*$.

A demonstração da versão do Teorema de Brouwer para polígonos convexos está baseada no seguinte exercício (mais ou menos evidente, mas que pode ser trabalhoso).

**Exercício 14.6** Mostre que existe uma bijeção continua, $h : B \rightarrow T$, com inversa continua, qualquer que seja o polígono convexo $T$ (tente fazer para o nosso caso, em que $T$ é um triângulo equilátero).$^2$

Demonstração do Brouwer para polígonos convexos: a demonstração só depende da existência de uma função $h$ com as propriedades definidas no exercício; vale, pois, para outros subconjuntos do plano, ou mesmo do espaço. Basta definir, a partir de $f$ e de $h$, a função $g : B \rightarrow B$, dada por $g(x) = h^{-1}(f(h(x)))$. Como $g$ satisfaz as condições do Teorema para o disco, $g$ tem um ponto fixo, $x*$. De $x* = g(x*) = h^{-1}(f(h(x)))$, segue imediatamente que $f(p*) = p*$, com $p* = h(x*)$.

Assim, da versão estendida do Teorema de Brouwer e dado que transformações lineares são contínuas, temos que existe um ponto $p*$, em $T$, tal que $P(p*) = p*$. Daí segue, imediatamente, que

$$p* \in P^k(T) \forall k = 1, 2, 3, \ldots$$

Vamos, porém, dispensar o Teorema de Brouwer e introduzir uma condição geométrica, necessária e suficiente, que garantirá o "encolhimento" da sequência $P^n(T)$.

$$^1$$Como estamos em um plano, vamos precisar apenas da versão bidimensional do Teorema
$$^2$$Estamos excluindo polígonos convexos degenerados