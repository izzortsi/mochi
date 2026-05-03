3.2: Medindo o papel

$$\bar{x} = \frac{\langle x, \vec{v} \rangle}{\langle \vec{v}, \vec{v} \rangle} \vec{v} = \frac{1}{3} \langle x, (1, 1, 1) \rangle (1, 1, 1),$$

o que nos dá

$$\bar{x} = (\bar{x}, \bar{x}, \bar{x}), \bar{x} = \frac{x_1 + x_2 + x_3}{3}.$$

Agora pensem um elemento de $\mathbb{R}^{10}$ como um vetor, com as operações de adição e multiplicação por escalar definidas como em $\mathbb{R}^3$. Vamos definir, em $\mathbb{R}^{10}$, o produto escalar $<x, y>$ por

$$<x, y> = x_1 y_1 + \ldots + x_{10} y_{10}.$$

Esse produto escalar, $<x, y> = x_1 y_1 + \ldots + x_{10} y_{10}$, tem as boas propriedades do produto escalar:

$$(i) <u,v> = <v,u> \forall u,v \in \mathbb{R}^{10}$$
$$(ii) <t u,v> = t <u,v> \forall u,v \in V, \forall t \in \mathbb{R}$$
$$(iii) <u,v_1 + v_2> = <u,v_1> + <u,v_2> \forall u,v_1, v_2 \in \mathbb{R}^{10}$$
$$(iv) <e_i, e_j> = 0, i \neq j, <e_i, e_j> = 1, i = j,$$

sendo $e_i = (0, \ldots, 1, \ldots, 0)$, com o 1 na i-ésima coordenada (eu fiz as contas e vi que funciona, mas, depois, cada um de vocês deveria conferir, por conta própria). Podemos, então, definir, como em $\mathbb{R}^3$, a distância entre dois pontos, $u e v$, por

$$|u - v| = \sqrt{<u-v, u-v>}.$$

A ideia, agora, é projetar o ponto $x = (x_1, \ldots, x_{10})$ sobre a reta $r$, definida em $\mathbb{R}^{10}$ por

$$r = \{(t, \ldots, t), t \in \mathbb{R}\} = \{t(1, \ldots, 1), t \in \mathbb{R}\}.$$

Eu tive essa ideia pensando que, em $\mathbb{R}^3$, o ponto de $r$ mais próximo de $x$ é a projeção de $x$ em $r$. Eu descobri, conta Zumbi, excitadíssimo, uma versão mais geral do Teorema de Pitágoras: se

$$<u,v> = 0,$$

então podemos formar uma espécie de triângulo retângulo em $\mathbb{R}^{10}$, de catetos $|u|$ e $|v|$ e hipotenuza $|u + v|$. Mas $|u + v|^2 = <u+v, u+v>$, o que dá

$$|u + v|^2 = <u+v, u+v> + <u+v, v> + <u+v, v> = |u|^2 + 0 + 0 + |v|^2!$$

Se imitarmos o caso de $\mathbb{R}^3$, devemos fazer $\vec{v} = (1, 1, \ldots, 1)$. A projeção, como em $\mathbb{R}^3$, será dada por