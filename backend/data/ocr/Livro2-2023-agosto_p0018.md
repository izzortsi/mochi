que medidas de distâncias e de ângulos sejam feitas sem instrumentos, apenas com cálculos sobre as coordenadas. Note que, se no plano ainda é concebível marcar pontos e vetores a partir das coordenadas e efetuar as medidas diretamente com réguas e transferidores, no espaço a coisa seria quase impossível.

**Exercício 2.2** Sejam, no espaço, o triângulo $\Delta$ formado pelos pontos $A, B$ e $C$ dados, em coordenadas, por $A = (a_1, a_2, a_3)$, $B = (b_1, b_2, b_3)$ e $C = (c_1, c_2, c_3)$. Use o Teorema de Pitágoras para calcular as medidas dos lados de $\Delta$. Em seguida, use a lei dos cossenos (ou o próprio Teorema de Pitágoras) para calcular o cosseno do ângulo $\hat{A}$. Faça a mesma coisa usando a fórmula do produto escalar e confira.

![Figura 2.1:]

Se $\vec{u}$ e $\vec{v}$ são dois vetores em $V$, com $|\vec{v}| = 1$, podemos projetar $\vec{u}$ na direção de $\vec{v}$, obtendo

$$\vec{u}_o = \langle \vec{u}, \vec{v} \rangle \vec{v}$$

($\vec{u}_o$ é dito a **projeção** de $\vec{u}$ na direção de $\vec{v}$).

Se $\vec{v}$ não é unitário, mas é não nulo, ainda podemos projetar $\vec{u}$ na direção de $\vec{v}$, fazendo

$$\vec{u}_o = \left\langle \vec{u}, \frac{1}{|\vec{v}|} \vec{v} \right\rangle \frac{1}{|\vec{v}|} \vec{v} = \frac{1}{||\vec{v}|^2} \langle \vec{u}, \vec{v} \rangle \vec{v} = \frac{\langle \vec{u}, \vec{v} \rangle}{\langle \vec{v}, \vec{v} \rangle} \vec{v}.$$

Se nossas contas fazem sentido, o triângulo de vértices 0, $\vec{u}_o$ e $\vec{u}$ tem um ângulo reto em $\vec{u}_o$.

**Exercício 2.3** Mostre que $\langle \vec{u} - \vec{u}_o, \vec{u}_o \rangle = 0$.

**Proposição:** Se representamos um vetor $\vec{v}$ na base canônica, $\vec{v} = v_1\vec{e}_1 + v_2\vec{e}_2 + v_3\vec{e}_3$, então

$$v_1 = <\vec{v}, \vec{e}_1 >, v_2 = <\vec{v}, \vec{e}_2 >, v_3 = <\vec{v}, \vec{e}_3 >.$$

Demonstração: Podemos *enxergar* isso, ou simplesmente fazer o produto escalar dos dois lados da igualdade $\vec{v} = v_1\vec{e}_1 + v_2\vec{e}_2 + v_3\vec{e}_3$ por cada um dos vetores $\vec{e}_1, \vec{e}_2$ e $\vec{e}_3$. Por exemplo: