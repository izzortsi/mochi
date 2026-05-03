9.2: Envoltória convexa

**Exercício 9.4** Sejam $P_1 = (x_1, y_1, z_1)$, $P_2 = (x_2, y_2, z_2)$ e $P_3 = (x_3, y_3, z_3)$ três pontos do espaço (poderiam, também, ser três pontos do plano). Mostre que o triângulo (cheio) de vértices $P_1, P_2 e P_3$ é

$$T = \{ P = p_1P_1 + p_2P_2 + p_3P_3 \mid p_1 \geq 0, p_2 \geq 0, p_3 \geq 0, p_1 + p_2 + p_3 = 1 \}.$$

**Exercício 9.5** Sejam $K$ um convexo e $V$ o conjunto dos vértices de $K$. Mostre que, se $A \subset V$, então $K \setminus A$ é convexo. Ou seja, podemos arrancar de $K$ uma quintidade qualquer de seus vértices; ainda restará um convexo.

9.2 Envoltória convexa

Comecemos com uma observação simples: se $(K_\lambda)_{\lambda \in \Lambda}$ é uma família$^2$ de conjuntos convexos, então sua interseção,

$$K = \bigcap_{\lambda \in \Lambda} K_\lambda,$$

é um conjunto convexo.

**Definição:** Se $V$ é um espaço vetorial real e $X$ é um subconjunto de $V$, a envoltória convexa de $X$ é a interseção de todos os convexos de $V$ que contêm $X$.

**Exercício 9.6** Mostre que a envoltória convexa de $X$ é o conjunto de todas as combinações lineares convexas de elementos de $X$. Dizemos que $x$ é combinação linear convexa de $x_1, \ldots, x_n$ se existem $t_1, \ldots, t_n$, não negativos e com $t_1 + \ldots + t_n = 1$, tais que $x = t_1x_1 + \ldots + t_nx_n$ (n pode ser, claro, qualquer natural).

9.3 Projeção de ponto sobre conjunto convexo

**Definição:** Seja $V$ um espaço vetorial com produto interno. Um subconjunto $K$ de $V$ é dito fechado se seu complementar em $V$ é aberto. Um subconjunto $A$ de $V$ é dito aberto se

$$\forall x \in A \exists \varepsilon > 0 \mid |y - x| < \varepsilon \Rightarrow y \in A.$$

**Definição:** Seja $V$ um espaço vetorial com produto interno. Uma sequência $(x_n)_{n \in \mathbb{N}}$ é dita convergente para o ponto $x$ de $V$ se

$$\forall \varepsilon > 0 \exists n_\varepsilon \in \mathbb{N} \mid n > n_\varepsilon \Rightarrow |x_n - x| < \varepsilon.$$

$^2$Usamos o termo família para designar uma coleção, que pode se finita ou não, de conjuntos. Formalmente, uma família é caracterizada por uma função, do conjunto $\Lambda$ dos índices no conjunto dos subconjuntos de algum conjunto maior (no nosso caso, pode ser o espaço $V$), dada por $\lambda \mapsto K_\lambda$.