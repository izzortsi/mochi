2. nossos arquivos (ou, pelo menos, os que nos interessam) não estão totalmente dispersos pelo espaço, mas apresentam um certo padrão, que nos permite dizer que se situam não muito longe de um certo plano, $\alpha$ (que, para simplificar, suporemos passar pela origem).

**Figura 8.2:**

Nas condições acima, podemos adotar o seguinte procedimento:

1. aproximamos cada arquivo (ponto) $\mathbf{x} = (x_1, x_2, x_3)$ por um arquivo (ponto) $\bar{\mathbf{x}}$ em $\alpha$, de forma que $\bar{\mathbf{x}}$ seja a projeção ortogonal de $\mathbf{x}$ sobre $\alpha$ (o que, pelo que sabemos, garante que $\bar{\mathbf{x}}$ seja o elemento de $\alpha$ mais próximo de $\mathbf{x}$);

2. escolhendo uma base $\{\varepsilon_1, \varepsilon_2\}$ de $\alpha$, representamos $\bar{\mathbf{x}}$ por suas coordenadas $(\bar{x}_1, \bar{x}_2)$ na base $\{\varepsilon_1, \varepsilon_2\}$;

3. guardamos (ou utilizamos) o arquivo $(\bar{x}_1, \bar{x}_2)$, que nos permite, a qualquer momento (estando de posse de $\{\varepsilon_1, \varepsilon_2\}$), recuperar $\bar{\mathbf{x}} = \bar{x}_1\varepsilon_1 + \bar{x}_2\varepsilon_2$.

A partir daí, temos duas dificuldades a enfrentar:

1. como encontrar a projeção $\bar{\mathbf{x}}$ de $\mathbf{x}$ sobre $\alpha$?

2. como representar $\bar{\mathbf{x}}$ como combinação linear de $\varepsilon_1$ e $\varepsilon_2$?

**Exercício 8.7** *Como você enfrentaria essas questões?*

Podemos resumir nosso problema da seguinte forma: dados o vetor $\mathbf{x}$ em $\mathbb{R}^3$ e a base $\{\varepsilon_1, \varepsilon_2\}$ de $\alpha$, queremos encontrar o par ordenado $(\bar{x}_1, \bar{x}_2) \in \mathbb{R}^2$ tal que

$$\langle \mathbf{x} - (\bar{x}_1\varepsilon_1 + \bar{x}_2\varepsilon_2), v \rangle = 0 \forall v \in \alpha.$$

Na realidade, como $\{\varepsilon_1, \varepsilon_2\}$ é base de $\alpha$, é (necessário e) suficiente que

$$\langle \mathbf{x} - (\bar{x}_1\varepsilon_1 + \bar{x}_2\varepsilon_2), \varepsilon_1 \rangle = 0$$

e

$$\langle \mathbf{x} - (\bar{x}_1\varepsilon_1 + \bar{x}_2\varepsilon_2), \varepsilon_2 \rangle = 0.$$