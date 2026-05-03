2.2: Equação do plano

$$<\vec{v}, \vec{e}_2> = <v_1\vec{e}_1 + v_2\vec{e}_2 + v_3\vec{e}_3, \vec{e}_2> =$$
$$= <v_1\vec{e}_1, \vec{e}_2> + <v_2\vec{e}_2, \vec{e}_2> + <v_3\vec{e}_3, \vec{e}_2> =$$
$$= 0 + v_2 + 0 = v_2.$$

2.2 Equação do plano

O produto escalar pode ser usado, de forma bastante simples, para se produzirem equações de planos (a exemplo do que se faz, em Geometria Analítica Plana, para a obtenção da equação da reta). Suponhamos que o plano $\alpha$ passa pelo ponto $P_0 = (x_0, y_0, z_0)$ e é normal ao vetor $\vec{v} = (a, b, c)$. Se buscamos determinar os pontos $P = (x, y, z)$ de $\alpha$, basta observar que $P$ estará no plano se e somente se o vetor $\overrightarrow{P_0P}$ for normal a $\vec{v}$, ou seja, $<\overrightarrow{P_0P}, \vec{v} > = 0$. Escrevendo em coordenadas, $P = (x, y, z)$ estará em $\alpha$ se e só se

$$0 = <(x - x_0, y - y_0, z - z_0), (a, b, c) > = ax + by + cz - (ax_0 + by_0 + cz_0).$$

Isso significa que, fazendo $d = -(ax_0 + by_0 + cz_0)$, o plano $\alpha$ é dado por

$$\alpha = \left\{(x, y, z) \in \mathbb{R}^3 \mid ax + by + cz + d = 0\right\}.$$

Exercício 2.4 Faça, na fórmula que acabamos de obter, $\vec{v} = (a, b, c) = (1, 1, 0)$ e $P_0 = (x_0, y_0, z_0) = (0, 0, 0)$. Por que a equação obtida não é a de uma reta passando pela origem?

Exercício 2.5 Pense na seguinte forma alternativa de deduzir a equação do plano $\alpha$ passando por $P_0 = (x_0, y_0, z_0)$ e normal ao vetor $\vec{v} = (a, b, c)$: todos os pontos de $\alpha$ se projetam no mesmo ponto da reta que passa pela origem e tem a direção de $\vec{v}$. Consequentemente, $(x, y, z) \in \alpha \iff (x, y, z) \cdot (a, b, c) = (x_0, y_0, z_0) \cdot (a, b, c)$.

figura

2.3 Segmentos e conjuntos convexos

Dados os pontos $A$ e $B$, o segmento de reta $AB$ (diz-se, também, apenas o segmento $AB$) é o conjunto

$$AB = \left\{A + t \overrightarrow{AB}, t \in [0, 1]\right\}.$$

Exercício 2.6 Convença-se de que $AB = BA$.