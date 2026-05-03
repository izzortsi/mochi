Definição: Um subconjunto $K$ do espaço vetorial real $V$ é dito convexo se o segmento $AB$ está contido em $K$ sempre que $A$ e $B$ estejam em $K$.

Exemplo 1: Se $V$ tem produto interno, $\vec{n}$ é um vetor não nulo e $c$ é um número real, o semiespaço

$$K = \{ \vec{v} \mid \langle \vec{v}, \vec{n} \rangle \leq c \}$$

é convexo. De fato, se $\vec{u}$ e $\vec{v}$ satisfazem $\langle \vec{u}, \vec{n} \rangle \leq c$ e $\langle \vec{v}, \vec{n} \rangle \leq c$, é certo que, sendo $s$ e $t$ não negativos e tais que $s + t = 1$, valem $\langle s\vec{u}, \vec{n} \rangle \leq sc$ e $\langle t\vec{v}, \vec{n} \rangle \leq tc$, de modo que, somando, temos $\langle s\vec{u} + t\vec{v}, \vec{n}, \rangle \leq c$. Note que quando $V = \mathbb{R}^3$, em coordenadas, isto significa dizer que, dados quatro reais, $\alpha, \beta, \gamma$ e $c$, com $\alpha, \beta$ e $\gamma$ não simultaneamente nulos, o conjunto

$$K = \{ (x, y, z) \in \mathbb{R}^3 \mid \alpha x + \beta y + \gamma z \leq c \}$$

é convexo. Note que $K$ continua convexo se substituirmos $\leq$ por <, por > ou por $\ge$.

Exemplo 2: A interseção de uma coleção qualquer de conjuntos convexos é um conjunto convexo (isto independe de $V$ ter ou não produto interno). Assim, se $V$ tem produto interno, a interseção de uma coleção de semiespaços é, sempre, um convexo. Em particular, se $K$ é interseção de uma coleção finite de semiespaços, esto é, se existem vetores não nulos, $\vec{u}_1, \ldots, \vec{u}_k$ e escalares $c_1, \ldots, c_k$ tais que

$$K = \{ \vec{v} \mid \langle \vec{v}, \vec{u}_i \rangle \leq c_i, i = 1, \ldots, k \},$$

então $K$ é convexo. Se $K$ é interseção de uma coleção finite de semiespaços e é, além disso, limitado (isto é, se, qualquer que seja o vetor $\vec{u}$, o conjunto $\{ \langle \vec{v}, \vec{u} \rangle, \vec{v} \in K \}$ é limitado), então $K$ é dito um poliedro convexo.

Definição: Se $K$ é convexo e $P$ é um ponto de $K$, $P$ é dito ponto interno de $K$ se, para todo $\vec{v}$ não nulo, existem $A$ e $B$ na reta $\{ P + t\vec{v}, t \in \mathbb{R} \}$, distintos de $P$, tais que $P$ pertence ao segmento $AB$; $P$ é dito um vértice de $K$ se não existem $A$ e $B$ em $K$, distintos de $P$, tais que $P$ está no segmento $AB$.¹

Exercício 9.3 Considere, para cada vetor unitário $\vec{u}$ do espaço (isto é, tal que $\langle \vec{u}, \vec{u} \rangle = 1$), o semiespaço

$$K_{\vec{u}} = \{ \vec{v} \mid \langle \vec{v}, \vec{u} \rangle \leq 1 \}.$$

Quem é o convexo $K$ interseção de todos os $K_{\vec{u}}$,

$$K = \cap \{ K_{\vec{u}}, |\vec{u}| = 1 \}?$$

Quem são os vértices de $K$?

¹O termo vértice faz mais sentido, é claro, no caso de ser $K$ um poliedro; o que definimos como vértice costuma ser chamado, também de ponto extremal de $K$, mas o termo vértice tem mais apelo; o alcance mais geral que lhe dá esta definição temlá suas razões de ser (pesquise Teorema de Krein-Milman)