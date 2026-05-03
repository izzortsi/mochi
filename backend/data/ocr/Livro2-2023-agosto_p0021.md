convexo. Em particular, se $K$ é interseção de uma coleção finita de semiespaços, isto é, se existem vetores não nulos, $\vec{u}_1, \ldots, \vec{u}_k$ e escalares $c_1, \ldots, c_k$ tais que

$$K = \{ \vec{v} \mid \langle \vec{v}, \vec{u}_i \rangle \leq c_i, i = 1, \ldots, k \},$$

então $K$ é convexo. Se $K$ é interseção de uma coleção finita de semiespaços e é, além disso, **limitado** (isto é, se, qualquer que seja o vetor $\vec{u}$, o conjunto $\{\langle \vec{v}, \vec{u} \rangle, \vec{v} \in K\}$ é limitado), então $K$ é dito um **poliedro convexo**.

**Definição:** Se $K$ é convexo e $P$ é um ponto de $K$, $P$ é dito **ponto interno** de $K$ se, para todo $\vec{v}$ não nulo, existem $A$ e $B$ na reta $\{P + t\vec{v}, t \in \mathbb{R}\}$, distintos de $P$, tais que $P$ pertence ao segmento $AB$; $P$ é dito um **vértice** de $K$ se não existem $A$ e $B$ em $K$, distintos de $P$, tais que $P$ está no segmento $AB$.$^1$

**Exercício 2.9** Considere, para cada vetor **unitário** $\vec{u}$ do espaço (isto é, tal que $\langle \vec{u}, \vec{u} \rangle = 1$), o semiespaço

$$K_{\vec{u}} = \{ \vec{v} \mid \langle \vec{v}, \vec{u} \rangle \leq 1 \}.$$

Quem é o convexo $K$ interseção de todos os $K_{\vec{u}}$,

$$K = \bigcap \{ K_{\vec{u}}, |\vec{u}| = 1 \}?$$

Quem são os vértices de $K$?

**Exercício 2.10** Sejam $P_1 = (x_1, y_1, z_1)$, $P_2 = (x_2, y_2, z_2)$ e $P_3 = (x_3, y_3, z_3)$ três pontos do espaço (poderiam, também, ser três pontos do plano). Mostre que o triângulo (cheio) de vértices $P_1, P_2$ e $P_3$ é

$$T = \{ P = p_1P_1 + p_2P_2 + p_3P_3 \mid p_1 \geq 0, p_2 \geq 0, p_3 \geq 0, p_1 + p_2 + p_3 = 1 \}.$$

$^1$O termo vértice faz mais sentido, é claro, no caso de ser $K$ um poliedro; o que definimos como vértice costuma ser chamado, também de **ponto extremal** de $K$, mas o termo vértice tem mais apelo; o alcance mais geral que lhe dá esta definição temlá suas razões de ser (ver Teorema de Krein-Milman)