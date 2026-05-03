$$\langle \mathbf{v} - \bar{\mathbf{v}}, \mathbf{w} \rangle = 0 \ \forall \ \mathbf{w} \in \mathbf{V}_o.$$

**Proposição 2:** A projeção ortogonal é única.

Demonstração: A ideia geométrica é que, se $\mathbf{v}_1$ e $\mathbf{v}_2$ são projeções ortogonais de $\mathbf{v}$ sobre $\mathbf{V}_o$, então o triângulo $\mathbf{v}_1\mathbf{v}_2$ tem dois ângulos retos: já que $\mathbf{w} = \mathbf{v}_1 - \mathbf{v}_2$ está em $\mathbf{V}_o$, teremos

$$\langle \mathbf{v} - \mathbf{v}_1, \mathbf{w} \rangle = 0 = \langle \mathbf{v} - \mathbf{v}_2, \mathbf{w} \rangle,$$

Daí vem

$$0 = \langle (\mathbf{v} - \mathbf{v}_2) - (\mathbf{v} - \mathbf{v}_1), \mathbf{w} \rangle = \langle \mathbf{w}, \mathbf{w} \rangle,$$

o que dá $|\mathbf{v}_1 - \mathbf{v}_2|^2 = 0$ e prova que $\mathbf{v}_1 = \mathbf{v}_2$.

**Proposição 3:** Sejam $\mathbf{V}$ um espaço vetorial com produto interno, $\mathbf{v}$ um elemento de $\mathbf{V}$ e $\mathbf{V}_o$ um subespaço vetorial de $\mathbf{V}$. O vetor $\bar{\mathbf{v}}$ de $\mathbf{V}_o$ é a projeção ortogonal de $\mathbf{v}$ sobre $\mathbf{V}_o$ se, e somente se,

$$|\mathbf{v} - \bar{\mathbf{v}}| \leq |\mathbf{v} - \mathbf{w}| \ \forall \ \mathbf{w} \in \mathbf{V}_o.$$

Demonstração: Se $\bar{\mathbf{v}}$ é a projeção ortogonal de $\mathbf{v}$ sobre $\mathbf{V}_o$ e $\mathbf{w} \in \mathbf{V}_o$, temos $\langle \mathbf{v} - \bar{\mathbf{v}}, \bar{\mathbf{v}} - \mathbf{w} \rangle = 0$, o que, pelo Teorema de Pitágoras, nos dá $|\mathbf{v} - \mathbf{w}|^2 = |\mathbf{v} - \bar{\mathbf{v}}|^2 + |\bar{\mathbf{v}} - \mathbf{w}|^2$ e mostra que $|\mathbf{v} - \bar{\mathbf{v}}| \leq |\mathbf{v} - \mathbf{w}|$.

Reciprocamente, seja $\bar{\mathbf{v}}$ em $\mathbf{V}_o$ tal que $|\mathbf{v} - \bar{\mathbf{v}}| \leq |\mathbf{v} - \mathbf{w}| \ \forall \ \mathbf{w} \in \mathbf{V}_o$. Imaginemos que, para um certo $\mathbf{u}$ em $\mathbf{V}_o$, tivéssemos $\langle \mathbf{v} - \bar{\mathbf{v}}, \mathbf{u} \rangle \neq 0$. Como poderíamos trocar $\mathbf{u}$ por $-\mathbf{u}$ e tomar o unitário de $\mathbf{u}$ sem sair de $\mathbf{V}_o$, não haveria mal algum em supor $|\mathbf{u}| = 1$ e $\langle \mathbf{v} - \bar{\mathbf{v}}, \mathbf{u} \rangle > 0$. Projetando $\mathbf{v} - \bar{\mathbf{v}}$ sobre $\mathbf{u}$ e fazendo

$$\mathbf{v}_o = \bar{\mathbf{v}} + \langle \mathbf{v} - \bar{\mathbf{v}}, \mathbf{u} \rangle \mathbf{u},$$

teríamos, pelo Teorema de Pitágoras,

$$|\mathbf{v} - \bar{\mathbf{v}}|^2 = |\mathbf{v} - \mathbf{v}_o|^2 + |\langle \mathbf{v} - \bar{\mathbf{v}}, \mathbf{u} \rangle \mathbf{u}|^2 = |\mathbf{v} - \mathbf{v}_o|^2 + (\langle \mathbf{v} - \bar{\mathbf{v}}, \mathbf{u} \rangle)^2 > |\mathbf{v} - \mathbf{v}_o|^2,$$

o que entraria em choque com nossa hipótese.

**Definição:** Uma base $\{\varepsilon_1, \ldots, \varepsilon_n\}$ do espaço vetorial $\mathbf{V}$ com produto interno é dita uma base ortogonal de $\mathbf{V}$ se

$$\langle \varepsilon_i, \varepsilon_j \rangle = 0 \ \forall i, j = 1, \ldots, n, i \neq j.$$

Se, além disso, tivermos $\langle \varepsilon_i, \varepsilon_i \rangle = 1 \ \forall i = 1, \ldots, n$, então a base é dita ortonormal.

**Exercício 8.10** Veja se entendeu mesmo. Suponha que $\{\varepsilon_1, \ldots, \varepsilon_n\}$ é uma base ortonormal do espaço $\mathbf{V}$. Seja $\mathbf{v}$ um elemento de $\mathbf{V}$. Mostre que $\mathbf{v} = x_1\varepsilon_1 + \cdots + x_n\varepsilon_n$, com

$$x_i = \langle \mathbf{v}, \varepsilon_i \rangle \ \forall i = 1, \ldots, n.$$