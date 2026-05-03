Exercício 2.7 Suponha fixada uma origem, de forma que A e B sejam dados, respectivamente, pelos vetores $\vec{u}$ e $\vec{v}$. Mostre que os pontos do segmento AB são dados pelos vetores da forma

$$s\vec{u} + t\vec{v}, \ s,t \in [0,1], \ s+t = 1,$$

ou, o que dá no mesmo,

$$t\vec{u} + (1-t)\vec{v}, \ t \in [0,1].$$

Exercício 2.8 Suponha fixado um sistema de coordenadas, de forma que $A = (x_1,y_1,z_1)$ e $B = (x_2,y_2,z_2)$. Mostre que

$$(i)AB = \{s(x_1,y_1,z_1) + t(x_2,y_2,z_2), \ s,t \in [0,1], \ s+t = 1\};$$

$$(ii)AB = \{t(x_1,y_1,z_1) + (1-t)(x_2,y_2,z_2), \ t \in [0,1]\};$$

Pode ser útil distinguir **segmentos fechados, abertos e semiabertos**, com as notações naturais:

$$[A,B] = \left\{A + t\overrightarrow{AB}, \ t \in [0,1]\right\};$$

$$[A,B] = \left\{A + t\overrightarrow{AB}, \ t \in [0,1]\right\};$$

$$]A,B] = \left\{A + t\overrightarrow{AB}, \ t \in]0,1]\right\};$$

$$]A,B] = \left\{A + t\overrightarrow{AB}, \ t \in]0,1]\right\}.$$

Definição: Um subconjunto $K$ do espaço é dito **convexo** se o segmento $AB$ está contido em $K$ sempre que $A$ e $B$ estejam em $K$.

Exemplo 1: Se $\vec{n}$ é um vetor não nulo e $c$ é um número real, o **semiespaço**

$$K = \{ \vec{v} \mid \langle \vec{v},\vec{n} \rangle \leq c \}$$

é convexo. De fato, se $\vec{u}$ e $\vec{v}$ satisfazem $\langle \vec{u},\vec{n} \rangle \leq c$ e $\langle \vec{v},\vec{n} \rangle \leq c$, é certo que, sendo $s$ e $t$ não negativos e tais que $s+t = 1$, valem $\langle s\vec{u},\vec{n} \rangle \leq sc$ e $\langle t\vec{v},\vec{n} \rangle \leq tc$, de modo que, somando, temos $\langle s\vec{u}+t\vec{v},\vec{n} \rangle \leq c$. Note que, em coordenadas, isto significa dizer que, dados quatro reais, $\alpha, \beta, \gamma$ e $c$, com $\alpha, \beta$ e $\gamma$ não simultaneamente nulos, o conjunto

$$K = \{(x,y,z) \in \mathbb{R}^3 \mid \alpha x+\beta y+\gamma z \leq c \}$$

é convexo. Note que $K$ continua convexo se substituirmos $\leq$ por $<$, por $>$ ou por $\ge$.

Exemplo 2: A interseção de uma coleção qualquer de conjuntos convexos é um conjunto convexo. Assim, a interseção de uma coleção de semiespaços é, sempre, um