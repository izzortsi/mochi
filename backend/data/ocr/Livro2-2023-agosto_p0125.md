14.2 Geometria

Embora devamos ter em vista situações em que o número de estados do sistema $n$, é grande, vamos fazer uma hipótese radical: $n = 3$. Temos, pois, associada à matriz de transição, uma transformação linear, $P : R^3 \rightarrow R^3$. Mais ainda: nossos vetores de probabilidades são pontos do plano

$$\alpha = \{ p = \begin{bmatrix} p_1 \\ p_2 \\ p_3 \end{bmatrix} \in \mathbb{R}^3 \mid p_1 + p_2 + p_3 = 1 \}.$$

Exercício 14.2 Note que $\alpha$ é perpendicular ao vetor $$\begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix}.$$

E ainda mais: como as probabilidades $p_1, p_2$ e $p_3$ são não negativas, nossos vetores de probabilidades estão condenados a viver, eternamente, no triângulo $T$ interseção de $\alpha$ com o primeiro octante, ou seja, se $p \in T$, então $P^k p \in T$, para todo $k$ inteiro positivo.

Exercício 14.3 Certifique-se de que enxerga que $T$ é o triângulo de vértices em $\vec{e}_1 = \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix}, \vec{e}_2 = \begin{bmatrix} 0 \\ 1 \\ 0 \end{bmatrix} e \vec{e}_3 = \begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix}.$

Exercício 14.4 Mais: note que $T = \{ p_1\vec{e}_1 + p_2\vec{e}_2 + p_3\vec{e}_3, p,p_2, p_3 \geq 0, p_1 + p_2 + p_3 = 1 \}$. Conclua que, como $P$ é linear, $P(T)$ é o triângulo de vértices $P_1 = P\vec{e}_1, P_2 = P\vec{e}_2 e P_3 = P\vec{e}_3.$

Agora, que estamos enxergando, algumas coisas ficam óbvias:

1. $P$ é uma transformação linear de $R^3$ em $R^3$, com $P(T) \subset T$.