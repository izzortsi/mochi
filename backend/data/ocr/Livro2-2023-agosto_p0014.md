Da mesma forma, se fixarmos dois vetores $\vec{u}$ e $\vec{v}$ tais que nenhum dos dois é múltiplo do outro (neste caso, $\vec{u}$ e $\vec{v}$ são ditos **linearmente independentes**), os vetores $\vec{w}$ da forma $\vec{w} = s\vec{u} + t\vec{v}$, com os escalares $s$ e $t$ percorrendo os números reais, estarão, se marcados a partir de um mesmo ponto de origem $O$, todos sobre um mesmo plano (isto está um pouco impreciso; veja uma versão mais precisa, como exercício, logo abaixo).

**Figura 1.3:**

**Definição:** Dados os vetores $\vec{u}$ e $\vec{v}$, um vetor $\vec{w}$ é dito uma **combinação linear** de $\vec{u}$ e $\vec{v}$ se existem escalares $s$ e $t$ tais que $\vec{w} = s\vec{u} + t\vec{v}$. De maneira mais geral, dados os vetores $\vec{v}_1, \ldots, \vec{v}_n$, um vetor $\vec{u}$ é dito combinação linear de $\vec{v}_1, \ldots, \vec{v}_n$ se existem escalares $t_1, \ldots, t_n$ tais que $\vec{u} = t_1\vec{v}_1 + \ldots + t_n\vec{v}_n$.

**Exercício 1.18** Note que, se fixamos um ponto $O$ e dois vetores, $\vec{u}$ e $\vec{v}$, linearmente independentes, então os pontos $P$ tais que $\overrightarrow{OP}$ é combinação linear de $\vec{u}$ e $\vec{v}$ estão todos sobre um mesmo plano passando por $O$.

### 1.4 Retas e planos

A exemplo do que fizemos no plano, temos uma operação "bastarda", **somando vetores $\vec{v}$ a pontos $P$**. Neste caso, $P + \vec{v}$ é um novo ponto, $Q$, definido por: $P + \vec{v} = Q$ se $\overrightarrow{PQ} = \vec{v}$. Às vezes dizemos que o ponto $Q$ é obtido **aplicando** o vetor $\vec{v}$ ao ponto $P$.

Observe que essa operação também é associativa: para qualquer ponto $P$ e quaisquer vetores $\vec{u}$ e $\vec{v}$, vale $(P + \vec{u}) + \vec{v} = P + (\vec{u} + \vec{v})$.

Uma boa vantagem de lidar com retas de forma paramétrica é que não há diferença entre retas no plano e retas no espaço: dá-se um ponto $P$ (de partida), um vetor não nulo $\vec{v}$ (velocidade) e consideram-se os pontos da forma

$$Q = p + t\vec{v}, \ t \in \mathbb{R}.$$