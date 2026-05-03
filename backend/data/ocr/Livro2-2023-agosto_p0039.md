$$r = \{(t, t, t), t \in \mathbb{R}\} = \{t(1, 1, 1), t \in \mathbb{R}\}$$

mais próximo de $\mathbf{x}$. A solução, geométrica, é projetar $\mathbf{x}$ sobre $r$. Como $r$ passa pela origem, isso equivale a pensar $\mathbf{x}$ como um vetor e projetá-lo sobre o vetor $\vec{v} = (1, 1, 1)$. A projeção, como já vimos na página 10, é dada por

$$\bar{\mathbf{x}} = \frac{\langle \mathbf{x}, \vec{v} \rangle}{\langle \vec{v}, \vec{v} \rangle} \vec{v} = \frac{1}{3} \langle \mathbf{x}, (1, 1, 1) \rangle (1, 1, 1),$$

o que nos dá

$$\bar{\mathbf{x}} = (\bar{x}, \bar{x}, \bar{x}), \bar{\mathbf{x}} = \frac{x_1 + x_2 + x_3}{3}.$$

**Exercício 5.1** Pense um elemento de $\mathbb{R}^{10}$ como um vetor, com as operações de adição e multiplicação por escalar definidas como em $\mathbb{R}^3$. Defina, em $\mathbb{R}^{10}$, o **produto escalar** $<\mathbf{x}, \mathbf{y}>$ por

$$<\mathbf{x}, \mathbf{y} > = x_1 y_1 + \dots + x_{10} y_{10}.$$

Mostre que o produto escalar $<\mathbf{x}, \mathbf{y} > = x_1 y_1 + \dots + x_{10} y_{10}$ tem as boas propriedades do produto escalar:

$$(i) < \mathbf{u}, \mathbf{v} > = < \mathbf{v}, \mathbf{u} > \forall \mathbf{u}, \mathbf{v} \in V$$
$$(ii) < t\mathbf{u}, \mathbf{v} > = t < \mathbf{u}, \mathbf{v} > \forall \mathbf{u}, \mathbf{v} \in V, \forall t \in \mathbb{R}$$
$$(iii) < \mathbf{u}, \mathbf{v}_1 + \mathbf{v}_2 > = < \mathbf{u}, \mathbf{v}_1 > + < \mathbf{u}, \mathbf{v}_2 > \forall \mathbf{u}, \mathbf{v}_1, \mathbf{v}_2 \in V$$
$$(iv) < \mathbf{e}_i, \mathbf{e}_j > = 0, i \neq j, < \mathbf{e}_i, \mathbf{e}_j > = 1, i = j,$$

sendo $\mathbf{e}_i = (0, \dots, 1, \dots, 0)$, com o 1 na i-ésima coordenada.

**Exercício 5.2** Projeção o ponto $\mathbf{x} = (x_1, \dots, x_{10})$ sobre a reta $r$, definida em $\mathbb{R}^{10}$ por

$$r = \{(t, \dots, t), t \in \mathbb{R}\} = \{t(1, \dots, 1), t \in \mathbb{R}\}.$$

Mostre que a projeção assim obtida é o ponto $\bar{\mathbf{x}}$ de r que minimiza a distância (dada por $|\mathbf{x} - \bar{\mathbf{x}}| = \sqrt{<\mathbf{x} - \bar{\mathbf{x}}, \mathbf{x} - \bar{\mathbf{x}}>}$) a $\mathbf{x}$. Se tudo deu certo, você acaba de legitimar a média aritmética.

No exemplo acima, demos vários passos. Começamos com um problema envolvendo 10 variáveis (poderiam ser 15, 1000, ou um inteiro positivo qualquer). Pensamos no mesmo problema, mas com o número de variáveis reduzido para 3. Nesse caso, traduzimos nosso problema em um problema de geometria. Resolvemos o problema geometricamente. A solução geométrica nos indicou um critério que legitima a escolha de $\bar{\mathbf{x}}$ como a melhor aproximação para a medida do nosso objeto, a partir das medidas $x_1, x_2$ e $x_3$. O próximo passo foi investir $\mathbb{R}^{10}$ de um caráter geométrico que, algebricamente, é análogo ao que temos em $\mathbb{R}^3$. Isto nos permitiu estabelecer um critério por meio do qual a escolha de $\bar{\mathbf{x}} = (\bar{x}, \dots, \bar{x})$, com $\bar{\mathbf{x}}$ dado pela média aritmética de $x_1, \dots, x_{10}$, pode ser considerada a mais legítima. Mais ainda, a obtenção de $\bar{\mathbf{x}}$ se deu por meio dos cálculos sugeridos pelo problema análogo com apenas 3 variáveis!

**Exercício 5.3** Mostre que é possível chegar ao mesmo resultado sem recorrer a toda a geometria. Pulando a definição do produto escalar, defina, em $\mathbb{R}^{10}$, a **norma** de $\mathbf{x}$ por $|\mathbf{x}| = \sqrt{x_1^2 + \dots + x_{10}^2}$. Mostre que $t = \bar{\mathbf{x}}$ é o ponto de mínimo de $f(t) = |(x_1, \dots, x_{10}) - (t, \dots, t)|$.